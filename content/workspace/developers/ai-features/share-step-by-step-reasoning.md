---
title: Share step-by-step reasoning
sidebar_position: 1
description: Stream status updates alongside model output during long operations
keywords:
- reasoning_step
- SSE
- status updates
- progress
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="AI Features — Share step-by-step reasoning | OpenBB Workspace Docs" />

Stream status updates with `reasoning_step` so users can track multi‑stage actions (fetching data, running tools, post‑processing) as tokens arrive.

Reference implementation [here](https://github.com/OpenBB-finance/agents-for-openbb/blob/feat/add-agent-dashboard-widgets-example/31-vanilla-agent-reasoning-steps/vanilla_agent_reasoning_steps/main.py).

<img className="pro-border-gradient" width="800" alt="Reasoning" src="https://openbb-cms.directus.app/assets/dc091fbb-6882-4308-b9fb-f9671be5b026.png" />

## Architecture

Stream status updates alongside tokens so users see what the agent is doing.

`agents.json` configuration:

```python
return JSONResponse(content={
  "vanilla_agent_reasoning_steps": {
    "endpoints": {"query": "http://localhost:7777/v1/query"},
    "features": {
      "streaming": True,
      "widget-dashboard-select": False,
      "widget-dashboard-search": False,
    },
  }
})
```

### Query flow
- Parse `QueryRequest.messages` and convert to OpenAI-compatible format
- Add system message to define agent role and capabilities
- Emit `reasoning_step()` at key processing stages:
  - Before starting LLM processing
  - During data preparation or analysis steps
  - After completing major operations
- Stream LLM response tokens with `message_chunk()`
- Send final reasoning step upon completion

### OpenBB AI SDK
- `reasoning_step(event_type, message, details)`: Creates `StatusUpdateSSE` events
  - `event_type`: `"INFO"`, `"SUCCESS"`, `"WARNING"`, `"ERROR"`
  - `message`: Human-readable status description
  - `details`: Optional dictionary with key-value pairs for additional context
- `message_chunk(text)`: Creates `MessageChunkSSE` for streaming LLM output
- `LlmClientMessage`: Handles message conversion between formats

## Core logic

```python
from openbb_ai import reasoning_step, message_chunk
from openbb_ai.models import QueryRequest, LlmClientMessage
from openai.types.chat import ChatCompletionSystemMessageParam, ChatCompletionUserMessageParam

async def query(request: QueryRequest) -> EventSourceResponse:
    # Convert messages to OpenAI format
    openai_messages = [
        ChatCompletionSystemMessageParam(
            role="system", 
            content="You are a helpful financial assistant."
        )
    ]
    
    for message in request.messages:
        if message.role == "human":
            openai_messages.append(
                ChatCompletionUserMessageParam(role="user", content=message.content)
            )
    
    async def execution_loop():
        # Pre-processing reasoning
        yield reasoning_step(
            event_type="INFO", 
            message="Processing your request...",
            details={"total_messages": len(request.messages)}
        ).model_dump()
        
        # Stream LLM response
        yield reasoning_step(
            event_type="INFO", 
            message="Generating response..."
        ).model_dump()
        
        async for event in await client.chat.completions.create(
            model="gpt-4o",
            messages=openai_messages,
            stream=True
        ):
            if chunk := event.choices[0].delta.content:
                yield message_chunk(chunk).model_dump()
        
        # Completion reasoning
        yield reasoning_step(
            event_type="SUCCESS", 
            message="Response generated successfully!"
        ).model_dump()
    
    return EventSourceResponse(execution_loop(), media_type="text/event-stream")
```

