---
title: MCP tools integration
sidebar_position: 7
description: Integrate Model Context Protocol (MCP) tools with OpenBB agents for enhanced capabilities
keywords:
- MCP
- Model Context Protocol
- tools
- function calling
- OpenAI
- agents
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="AI Features — MCP Tools Integration | OpenBB Workspace Docs" />

Enable agents to access and execute Model Context Protocol (MCP) tools, extending their capabilities with external tools and services. MCP tools allow agents to interact with databases, APIs, file systems, and other external resources.

Reference implementation in [this GitHub repository](https://github.com/OpenBB-finance/agents-for-openbb/tree/main/38-vanilla-agent-mcp-tools/vanilla_agent_mcp_tools/main.py).

<img className="pro-border-gradient" width="800" alt="Charts" src="https://openbb-cms.directus.app/assets/bec55103-71cd-412d-bc05-fd4776a0838c.png" />

## Architecture

MCP tools integration enables agents to discover, execute, and process results from external tools. The agent acts as an orchestrator between the OpenBB workspace and MCP servers, translating tool calls into executable functions.

`agents.json` configuration with MCP support:

```python
return JSONResponse(content={
    "vanilla_agent_mcp": {
        "name": "Vanilla Agent with MCP",
        "description": "A vanilla agent that supports MCP tools and automatically retrieves widget data.",
        "endpoints": {"query": "/v1/query"},
        "features": {
            "streaming": True,
            "widget-dashboard-select": True,
            "widget-dashboard-search": False,
            "mcp-tools": True,  # Enable MCP tools support
        },
    }
})
```

### Query flow

- User sends query to agent with available MCP tools in request payload
- Agent receives tool metadata including server ID, name, description, and input schema
- Agent analyzes query and determines if MCP tools are needed
- Agent generates OpenAI function call with appropriate parameters
- Frontend executes MCP tool and returns results
- Agent processes tool results and generates final response

### OpenBB AI SDK

- `QueryRequest.tools`: List of available MCP tools with metadata
- `FunctionCallSSE`: Server-sent event for function calls to frontend
- `FunctionCallSSEData`: Function call data with server ID, tool name, and parameters
- `message_chunk(text)`: Streams response content back to user
- Tool results received as `message.role == "tool"` in conversation

## Core logic

```python
from typing import AsyncGenerator
import json
import openai
from openbb_ai import message_chunk
from openbb_ai.models import (
    MessageChunkSSE,
    QueryRequest,
    FunctionCallSSE,
    FunctionCallSSEData,
)
from sse_starlette.sse import EventSourceResponse

@app.post("/v1/query")
async def query(request: QueryRequest) -> EventSourceResponse:
    """Query the Copilot with MCP tools support."""
    
    # Build system prompt with MCP tools information
    system_content = "You are a helpful financial assistant. Your name is 'Vanilla Agent'."
    
    # Add MCP tools to system prompt if available
    if request.tools:
        system_content += "\n\nYou have access to the following MCP tools:\n"
        for tool in request.tools:
            server_id = getattr(tool, "server_id", "unknown")
            system_content += f"\n- Tool: {tool.name} (Server ID: {server_id})\n"
            system_content += f"  Description: {tool.description}\n"
            if hasattr(tool, "input_schema") and tool.input_schema:
                # Parse the schema to identify required parameters
                if isinstance(tool.input_schema, dict):
                    properties = tool.input_schema.get("properties", {})
                    required = tool.input_schema.get("required", [])

                    if properties:
                        system_content += "  Parameters:\n"
                        for param_name, param_info in properties.items():
                            param_type = param_info.get("type", "unknown")
                            param_desc = param_info.get("description", "")
                            is_required = param_name in required
                            req_str = " (REQUIRED)" if is_required else " (optional)"
                            system_content += f"    - {param_name}{req_str}: {param_type}"
                            if param_desc:
                                system_content += f" - {param_desc}"
                            system_content += "\n"
    
    # Create OpenAI function definition for MCP tools
    functions = []
    if request.tools:
        functions.append({
            "name": "execute_agent_tool",
            "description": "Execute an MCP tool to retrieve data",
            "parameters": {
                "type": "object",
                "properties": {
                    "server_id": {
                        "type": "string",
                        "description": "The ID of the MCP server",
                        "enum": list(set(
                            getattr(tool, "server_id", "unknown")
                            for tool in request.tools
                        )),
                    },
                    "tool_name": {
                        "type": "string",
                        "description": "The name of the tool to execute",
                        "enum": [tool.name for tool in request.tools],
                    },
                    "parameters": {
                        "type": "object",
                        "description": "The arguments to pass to the tool",
                        "additionalProperties": True,
                    },
                },
                "required": ["server_id", "tool_name", "parameters"],
            },
        })
    
    # Handle conversation and tool results
    openai_messages = [{"role": "system", "content": system_content}]
    
    context_str = ""
    for index, message in enumerate(request.messages):
        if message.role == "human":
            openai_messages.append({"role": "user", "content": message.content})
        elif message.role == "ai":
            if isinstance(message.content, str):
                openai_messages.append({"role": "assistant", "content": message.content})
        # Handle tool results in the conversation context
        elif message.role == "tool" and index == len(request.messages) - 1:
            context_str += "## MCP OUTPUT\n"
            for result in message.data:
                for item in result.items:
                    context_str += f"{item.content}\n\n"
            context_str += "## AI OUTPUT\n"
            context_str += "Now provide your analysis based on the MCP output above.\n\n"
    
    if context_str:
        openai_messages[-1]["content"] += "\n\n" + context_str
    
    async def execution_loop() -> AsyncGenerator[MessageChunkSSE | FunctionCallSSE, None]:
        client = openai.AsyncOpenAI()
        
        # Check if we have tool results from previous execution
        last_message = request.messages[-1] if request.messages else None
        if last_message and last_message.role == "tool":
            # Continue conversation with tool results
            async for event in await client.chat.completions.create(
                model="gpt-4o",
                messages=openai_messages,
                stream=True,
                # Don't pass functions to prevent another tool call
            ):
                if chunk := event.choices[0].delta.content:
                    yield message_chunk(chunk).model_dump()
            return
        
        # Make function call if tools are available
        if functions:
            response = await client.chat.completions.create(
                model="gpt-4o",
                messages=openai_messages,
                functions=functions,
                stream=False,
            )
            
            message = response.choices[0].message
            
            # Handle function calls
            if message.function_call and message.function_call.name == "execute_agent_tool":
                args = json.loads(message.function_call.arguments)
                
                # Send function call back to frontend for MCP execution
                function_call_data = FunctionCallSSEData(
                    function="execute_agent_tool",
                    input_arguments={
                        "server_id": args.get("server_id", ""),
                        "tool_name": args.get("tool_name", ""),
                        "parameters": args.get("parameters", {}),
                    },
                    extra_state={
                        "copilot_function_call_arguments": {
                            "server_id": args.get("server_id", ""),
                            "tool_name": args.get("tool_name", ""),
                            "tool_args": args.get("parameters", {}),
                            "summary": f"Execute {args.get('tool_name', '')} MCP tool",
                        }
                    }
                )
                
                yield FunctionCallSSE(data=function_call_data).model_dump()
                return  # Return control to frontend
            
            # If no function call, stream the response
            if message.content:
                for char in message.content:
                    yield message_chunk(char).model_dump()
        else:
            # Regular streaming without function calls
            async for event in await client.chat.completions.create(
                model="gpt-4o",
                messages=openai_messages,
                stream=True,
            ):
                if chunk := event.choices[0].delta.content:
                    yield message_chunk(chunk).model_dump()
    
    return EventSourceResponse(
        content=execution_loop(),
        media_type="text/event-stream",
    )
```
