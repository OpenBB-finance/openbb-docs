---
title: Custom agent features
sidebar_position: 7
description: Configure and manage custom agent features based on workspace options
keywords:
- features
- configuration
- workspace options
- custom agents
- SSE
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="AI Features — Custom agent features | OpenBB Workspace Docs" />

Create agents that can dynamically enable or disable features based on workspace configuration. Agents can access user preferences through `workspace_options` and respond accordingly.

Reference implementation in [this GitHub repository](https://github.com/OpenBB-finance/agents-for-openbb/tree/main/37-vanilla-agent-custom-features).

<img className="pro-border-gradient" width="500" alt="Custom agent features - on and off" src="https://openbb-cms.directus.app/assets/f304643a-654b-4156-a4c4-dea934d18012.png" />

<img className="pro-border-gradient" width="500" alt="Custom agent features - on and on" src="https://openbb-cms.directus.app/assets/aa51354c-b611-4c99-829c-cf6e35eb884b.png" />

## Architecture

Configure custom features in your agent's descriptor and access them through the query request payload. Features can have default states, descriptions, and labels.

`agents.json` configuration with custom features:

```python
return JSONResponse(content={
    "vanilla_agent_custom_features": {
        "name": "Vanilla Agent Custom Features",
        "description": "A simple agent that reports its feature status.",
        "endpoints": {"query": "/v1/query"},
        "features": {
            "streaming": True,
            "widget-dashboard-select": False,
            "widget-dashboard-search": False,
            "deep-research": {
                "label": "Deep Research",
                "default": False,
                "description": "Allows the copilot to do deep research",
            },
            "web-search": {
                "label": "Web Search", 
                "default": True,
                "description": "Allows the copilot to search the web.",
            },
        },
    }
})
```

### Feature configuration

- **Simple features**: Boolean values for basic on/off features
- **Complex features**: Objects with `label`, `default`, and `description` properties
- **Built-in features**: Standard features like `streaming`, `widget-dashboard-select`, `widget-dashboard-search`
- **Custom features**: User-defined features with custom behavior

### Query flow

- User enables/disables features in workspace settings
- Features are passed to agent via `workspace_options` in request payload
- Agent checks enabled features and adjusts behavior accordingly
- Agent can report feature status back to user
- Response content varies based on active features

### OpenBB AI SDK

- `QueryRequest.workspace_options`: List of enabled feature names
- `message_chunk(text)`: Streams response content with feature-aware messaging
- Feature checking via simple list membership: `"feature-name" in workspace_options`

## Core logic

```python
from typing import AsyncGenerator
from openbb_ai import message_chunk
from openbb_ai.models import MessageChunkSSE, QueryRequest
from fastapi.responses import JSONResponse
from sse_starlette.sse import EventSourceResponse

@app.post("/v1/query")
async def query(request: QueryRequest) -> EventSourceResponse:
    # Access workspace options from request payload
    workspace_options = getattr(request, "workspace_options", [])

    # Check which features are enabled
    deep_research_enabled = "deep-research" in workspace_options
    web_search_enabled = "web-search" in workspace_options

    # Build feature status message
    features_msg = (
        f"- Deep Research: {'✅ Enabled' if deep_research_enabled else '❌ Disabled'}\n"
        f"- Web Search: {'✅ Enabled' if web_search_enabled else '❌ Disabled'}"
    )

    # Include feature status in system prompt
    openai_messages = [
        {
            "role": "system",
            "content": (
                "You are a simple greeting agent.\n"
                "Greet the user and let them know their current feature settings:\n"
                f"{features_msg}\n"
                "Keep your response brief and friendly."
            ),
        }
    ]

    # Add conversation history
    for message in request.messages:
        if message.role == "human":
            openai_messages.append({"role": "user", "content": message.content})
        elif message.role == "ai" and isinstance(message.content, str):
            openai_messages.append({"role": "assistant", "content": message.content})

    async def execution_loop() -> AsyncGenerator[MessageChunkSSE, None]:
        client = openai.AsyncOpenAI()
        async for event in await client.chat.completions.create(
            model="gpt-4o",
            messages=openai_messages,
            stream=True,
        ):
            if chunk := event.choices[0].delta.content:
                yield message_chunk(chunk)

    return EventSourceResponse(
        content=(
            event.model_dump(exclude_none=True) async for event in execution_loop()
        ),
        media_type="text/event-stream",
    )
```

## Feature types

### Boolean features
Simple on/off switches in the agent descriptor:
```python
"features": {
    "streaming": True,
    "some-feature": False
}
```

### Complex features
Rich feature objects with metadata:
```python
"features": {
    "research-mode": {
        "label": "Research Mode",
        "default": True,
        "description": "Enables comprehensive research capabilities"
    }
}
```

### Conditional behavior
Adjust agent behavior based on enabled features:
```python
workspace_options = getattr(request, "workspace_options", [])

if "research-mode" in workspace_options:
    # Enable research capabilities
    pass

if "web-search" in workspace_options:
    # Enable web search functionality
    pass
```