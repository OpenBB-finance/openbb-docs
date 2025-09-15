---
title: Create charts
sidebar_position: 8
description: Stream inline charts as part of your agent’s response
keywords:
- charts
- visualization
- artifacts
- SSE
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="AI Features — Create charts | OpenBB Workspace Docs" />

Stream visualizations (line, bar, scatter, pie, donut) with `chart(...)`. Charts appear below the message that emitted them.

Reference implementation: https://github.com/OpenBB-finance/agents-for-openbb/blob/feat/add-agent-dashboard-widgets-example/33-vanilla-agent-charts/vanilla_agent_charts/main.py

<img className="pro-border-gradient" width="800" alt="Charts" src="https://openbb-cms.directus.app/assets/e9d93282-20cb-4b3a-bf58-17032191e82a.png" />

## Architecture

Emit chart artifacts so visualizations render below the answer. The example shows multiple chart types in one response.

- Endpoints
  - `/agents.json` and `/v1/query` as normal.

- agents.json
  - Streaming on.
  - Widget access optional; charts can be produced from any data source.

```python
return JSONResponse(content={
  "vanilla_agent_charts": {
    "endpoints": {"query": "http://localhost:7777/v1/query"},
    "features": {
      "streaming": True,
      "widget-dashboard-select": True,   # optional here
      "widget-dashboard-search": False,
    },
  }
})
```

- Query flow
  - Stream text with `message_chunk`.
  - Emit one or more `chart(...)` artifacts. Supported types include line, bar, scatter, pie, and donut.
  - For categorical charts (pie/donut), use `angle_key` and `callout_label_key`. For XY charts (line/bar/scatter), supply `x_key` and `y_keys`.

- OpenBB AI SDK helpers in use
  - `chart(type, data, ...)`: constructs a chart artifact SSE.
  - `message_chunk(text)`: introduces each chart.

```python
from openbb_ai import message_chunk, chart

yield message_chunk("\n\nHere is a line chart:\n\n").model_dump()
yield chart(
    type="line",
    data=[{"x": 0, "y": 1}, {"x": 1, "y": 2}],
    x_key="x",
    y_keys=["y"],
    name="Line Chart",
    description="Example line chart",
).model_dump()
```

## Getting Started

Example: https://github.com/OpenBB-finance/agents-for-openbb/tree/feat/add-agent-dashboard-widgets-example/33-vanilla-agent-charts

See also: /workspace/developers/openbb-ai-sdk
