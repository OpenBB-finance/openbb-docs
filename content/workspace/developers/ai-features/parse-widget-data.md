---
title: Parse widget data
sidebar_position: 2
description: Retrieve data from selected widgets and pass it as raw context to your LLM
keywords:
- widgets
- get_widget_data
- WidgetRequest
- SSE
- OpenAI
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="AI Features — Parse widget data | OpenBB Workspace Docs" />

Retrieve data for user‑selected widgets and pass it to your model. Enable `widget-dashboard-select` and call `get_widget_data` when the latest user message arrives.

Reference implementation [here](https://github.com/OpenBB-finance/agents-for-openbb/tree/main/30-vanilla-agent-raw-widget-data/vanilla_agent_raw_context/main.py).

<img className="pro-border-gradient" width="800" alt="Raw reply without context" src="https://openbb-cms.directus.app/assets/7bbbc4c9-7cd2-4bb0-9ad9-641588cf541e.png" />

## Architecture

This pattern uses a minimal FastAPI backend with two endpoints and OpenBB AI SDK helpers to retrieve widget data and stream results.

`agents.json` configuration with `widget-dashboard-select` feature enabled:

```python
return JSONResponse(content={
  "vanilla_agent_raw_context": {
    "endpoints": {"query": "http://localhost:7777/v1/query"},
    "features": {
      "widget-dashboard-select": True,
      "widget-dashboard-search": False,
    },
  }
})
```

### Query flow
- Check if latest message is human with `widgets.primary` populated
- Build `WidgetRequest` objects with current parameter values
- Early exit: yield `get_widget_data()` SSE immediately for UI to execute
- On subsequent request with tool results:
  - Parse `DataContent` items from tool message
  - Extract and format widget data into context string  
  - Append context to user messages for LLM processing
  - Stream LLM response with `message_chunk()`

### OpenBB AI SDK
- `get_widget_data(widget_requests)`: Creates `FunctionCallSSE` for widget data retrieval
- `WidgetRequest(widget, input_arguments)`: Specifies widget and parameter values
- `Widget`: Contains widget metadata (uuid, name, type, params)
- `WidgetParam`: Individual parameter with name, type, current_value
- `DataContent`: Container for widget response data
- `message_chunk(text)`: Creates `MessageChunkSSE` for streaming text

## Core logic

```python
from openbb_ai import get_widget_data, WidgetRequest, message_chunk

@app.post("/v1/query")
async def query(request: QueryRequest) -> EventSourceResponse:
    if (
        request.messages[-1].role == "human"
        and request.widgets
        and request.widgets.primary
    ):
        widget_requests = [
            WidgetRequest(
                widget=w,
                input_arguments={p.name: p.current_value for p in w.params},
            )
            for w in request.widgets.primary
        ]

        async def retrieve_widget_data():
            # Function-call SSE that Workspace interprets and executes
            yield get_widget_data(widget_requests).model_dump()

        return EventSourceResponse(retrieve_widget_data(), media_type="text/event-stream")

    # Process tool message with widget data
    openai_messages = [
        ChatCompletionSystemMessageParam(
            role="system", 
            content="You are a helpful financial assistant."
        )
    ]
    
    context_str = ""
    for message in request.messages:
        if message.role == "human":
            openai_messages.append(
                ChatCompletionUserMessageParam(role="user", content=message.content)
            )
        elif message.role == "tool":
            # Extract widget data from latest tool result
            for data_content in message.data:
                for item in data_content.items:
                    context_str += str(item.content) + "\n"
    
    # Append context to last user message
    if context_str and openai_messages:
        openai_messages[-1]["content"] += "\n\nContext:\n" + context_str
    
    async def execution_loop():
        async for event in await client.chat.completions.create(
            model="gpt-4o",
            messages=openai_messages,
            stream=True
        ):
            if chunk := event.choices[0].delta.content:
                yield message_chunk(chunk).model_dump()
    
    return EventSourceResponse(execution_loop(), media_type="text/event-stream")
```

## Dashboard widgets vs explicit context

The example above uses `request.widgets.primary` which contains widgets explicitly selected by the user. If you want to access all widgets available on the current dashboard instead, you can use `request.widgets.secondary`:

```python
# Access dashboard widgets instead of explicit context
if (
    request.messages[-1].role == "human"
    and request.widgets
    and request.widgets.secondary  # Dashboard widgets
):
    widget_requests = [
        WidgetRequest(
            widget=w,
            input_arguments={p.name: p.current_value for p in w.params},
        )
        for w in request.widgets.secondary  # Use secondary instead of primary
    ]
```

**Important**: To access dashboard widgets, you must enable the `widget-dashboard-search` feature in your `agents.json`:

```python
"features": {
    ...
    "widget-dashboard-search": True,   # Dashboard widgets
}
```

This gives your agent broader context about the user's dashboard setup and available data sources, rather than just the widgets they've explicitly selected.

