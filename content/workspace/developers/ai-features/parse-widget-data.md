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

Reference implementation [here](https://github.com/OpenBB-finance/agents-for-openbb/blob/feat/add-agent-dashboard-widgets-example/30-vanilla-agent-raw-widget-data/vanilla_agent_raw_context/main.py).

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
- On a human message with `widgets.primary`, issue `get_widget_data` and return immediately. The UI fetches data without waiting for the LLM.
- On the next turn, include the latest tool result (the widget data) in the prompt sent to the LLM and stream tokens with `message_chunk`.

### OpenBB AI SDK
- `get_widget_data(widget_requests)`: requests data for one or more widgets.
- `WidgetRequest(widget, input_arguments)`: wraps a widget with its parameter values.
- `message_chunk(text)`: streams text chunks as SSE.

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

    # Next request contains a tool message with widget data. Build LLM messages,
    # append the latest tool result to context, and stream tokens back.
    async def execution_loop():
        async for event in await client.chat.completions.create(..., stream=True):
            if chunk := event.choices[0].delta.content:
                yield message_chunk(chunk).model_dump()
    return EventSourceResponse(execution_loop(), media_type="text/event-stream")
```

