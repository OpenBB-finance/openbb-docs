---
title: Custom agent features
sidebar_position: 8
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

<img className="pro-border-gradient" width="500" alt="Custom agent features - on and off" src="https://openbb-cms.directus.app/assets/f6d38500-4a9a-41e9-93b3-5579f2cb24c0.png" />

<img className="pro-border-gradient" width="500" alt="Custom agent features - on and off" src="https://openbb-cms.directus.app/assets/b7b268df-e576-4cc7-837d-d7358fef23bb.png" />

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
            "model": {
                "label": "Model",
                "type": "select",
                "default": "claude-sonnet-4-20250514",
                "description": "Select the LLM model to use.",
                "options": [
                    {"label": "Claude Opus 4", "value": "claude-opus-4-0-20250514"},
                    {"label": "Claude Sonnet 4", "value": "claude-sonnet-4-20250514"},
                    {"label": "GPT-4o", "value": "gpt-4o"},
                    {"label": "GPT-4o mini", "value": "gpt-4o-mini"},
                ],
            },
            "agent-name": {
                "label": "Name of Agent",
                "type": "text",
                "default": "Example Agent",
                "description": "Set the name the agent uses to introduce itself.",
                "placeholder": "e.g. My Custom Agent",
            },
        },
    }
})
```

### Feature configuration

- **Boolean features**: Simple on/off toggles.
  - Objects with `label`, `default`, and `description` properties
- **Text features**: Free-form string input.
  - Objects with `label`, `type: "text"`, `default`, `description`, and optional `placeholder`
- **Select features**: Dropdown selection.
  - Objects with `label`, `type: "select"`, `default`, `description`, and `options` (array of `{label, value}` objects)

### Query flow

- User enables/disables features in workspace settings
- Features are passed to agent via `workspace_options` in request payload
- Agent checks enabled features and adjusts behavior accordingly
- Agent can report feature status back to user
- Response content varies based on active features

### OpenBB AI SDK

- `QueryRequest.workspace_options`: Dictionary of option values keyed by option id
- `message_chunk(text)`: Streams response content with feature-aware messaging
- Boolean features appear as `true` or `false`: `workspace_options["web-search"]`
- Text and select features appear as string values: `workspace_options["model"]`

## Core logic

```python
from typing import AsyncGenerator
from openbb_ai import message_chunk
from openbb_ai.models import MessageChunkSSE, QueryRequest
from sse_starlette.sse import EventSourceResponse

@app.post("/v1/query")
async def query(request: QueryRequest) -> EventSourceResponse:
    # Access workspace options from request payload
    # Example: {"web-search": true, "model": "gpt-4o", "agent-name": "My Bot"}
    workspace_options = getattr(request, "workspace_options", {}) or {}

    # Check boolean features
    deep_research_enabled = bool(workspace_options.get("deep-research", False))
    web_search_enabled = bool(workspace_options.get("web-search", True))

    # Read text/select feature values
    model = workspace_options.get("model", "claude-sonnet-4-20250514")
    agent_name = workspace_options.get("agent-name", "Example Agent")

    # Build feature status message
    features_msg = (
        f"- Deep Research: {'✅ Enabled' if deep_research_enabled else '❌ Disabled'}\n"
        f"- Web Search: {'✅ Enabled' if web_search_enabled else '❌ Disabled'}\n"
        f"- Model: {model}\n"
        f"- Agent Name: {agent_name}"
    )

    # Include feature status in system prompt
    openai_messages = [
        {
            "role": "system",
            "content": (
                f'Your name is "{agent_name}".\n'
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

Simple on/off toggles with a label and default state:

```python
"features": {
    "deep-research": {
        "label": "Deep Research",
        "default": False,
        "description": "Allows the copilot to do deep research",
    }
}
```

### Text features

Free-form string input with an optional placeholder:

```python
"features": {
    "agent-name": {
        "label": "Name of Agent",
        "type": "text",
        "default": "Example Agent",
        "description": "Set the name the agent uses to introduce itself.",
        "placeholder": "e.g. My Custom Agent",
    }
}
```

### Select features

Dropdown selection with a list of options:

```python
"features": {
    "model": {
        "label": "Model",
        "type": "select",
        "default": "claude-sonnet-4-20250514",
        "description": "Select the LLM model to use.",
        "options": [
            {"label": "Claude Opus 4", "value": "claude-opus-4-0-20250514"},
            {"label": "Claude Sonnet 4", "value": "claude-sonnet-4-20250514"},
            {"label": "GPT-4o", "value": "gpt-4o"},
            {"label": "GPT-4o mini", "value": "gpt-4o-mini"},
        ],
    }
}
```

### Reading feature values

Boolean, text, and select values are sent in `workspace_options` as a dictionary keyed by option id:

```python
workspace_options = getattr(request, "workspace_options", {}) or {}

# Boolean features
if workspace_options.get("deep-research", False):
    # Enable deep research capabilities
    pass

# Text/select features
model = workspace_options.get("model", "claude-sonnet-4-20250514")
agent_name = workspace_options.get("agent-name", "Example Agent")
```
