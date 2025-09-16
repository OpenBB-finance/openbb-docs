---
title: Share step-by-step reasoning
sidebar_position: 6
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
- Convert `QueryRequest.messages` to your LLM's wire format.
- Yield `reasoning_step(event_type, message, details)` before and after the model stream, and at significant milestones.
- Stream model tokens using `message_chunk`.

### OpenBB AI SDK
- `reasoning_step(event_type, message, details)`: emits a status update.
- `message_chunk(text)`: streams token chunks.

## Core logic

```python
from openbb_ai import reasoning_step, message_chunk

async def execution_loop():
    yield reasoning_step(event_type="INFO", message="Starting to answer the question...").model_dump()
    yield reasoning_step(event_type="INFO", message="Details", details={"stage": 1}).model_dump()

    async for event in await client.chat.completions.create(..., stream=True):
        if chunk := event.choices[0].delta.content:
            yield message_chunk(chunk).model_dump()

    yield reasoning_step(event_type="INFO", message="Answering complete!").model_dump()
```

