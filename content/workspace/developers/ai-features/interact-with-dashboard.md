---
title: Interact with dashboard
sidebar_position: 9
description: Receive full dashboard widget metadata and conditionally fetch data
keywords:
- dashboard widgets
- widget-dashboard-search
- WidgetRequest
- get_widget_data
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="AI Features — Interact with dashboard | OpenBB Workspace Docs" />

Receive the list of widgets on the current dashboard (`secondary`) and any explicitly selected (`primary`). Summarize what’s available and fetch data for a chosen widget.

Reference implementation [here](https://github.com/OpenBB-finance/agents-for-openbb/blob/feat/add-agent-dashboard-widgets-example/36-vanilla-agent-dashboard-widgets/vanilla_agent_dashboard_widgets/main.py).

Example that highlights that the agent has access to data on the dashboard (secondary) and that there are no tabs.

<img className="pro-border-gradient" width="800" alt="No tab no param no primary" src="https://openbb-cms.directus.app/assets/2dbcd500-a801-415f-a6d2-2052fa9abc17.png" />

Example that highlights that the agent still has access to data on the dashboard (secondary) but also has explicit context (primary) as a multi-file viewer widget.

<img className="pro-border-gradient" width="800" alt="No tab no param primary" src="https://openbb-cms.directus.app/assets/16b8ea4b-9dc4-487e-b9ac-14b573602684.png" />

Example that highlights that the agent has access to data that lives on the dashboard (and on all the tabs!).

<img className="pro-border-gradient" width="800" alt="Tab params" src="https://openbb-cms.directus.app/assets/a12edb2e-cf15-49ca-bb99-b8468fdfe65d.png" />

And more importantly, that the agent can get data from any of these widgets.

<img className="pro-border-gradient" width="800" alt="Tab params retrieval" src="https://openbb-cms.directus.app/assets/4563c49c-995b-49d3-b896-39ea4eb8cd3b.png" />

## Architecture

Receive dashboard metadata and selected widgets, summarize what's available, and fetch a sample widget's data.

`agents.json` configuration with `widget-dashboard-select` enabled so it accepts explicit context and `widget-dashboard-search` so it can retrieve widgets from the dashboard.

```python
return JSONResponse(content={
  "vanilla_agent_dashboard_widgets": {
    "endpoints": {"query": "http://localhost:7777/v1/query"},
    "features": {
      "widget-dashboard-select": True,
      "widget-dashboard-search": True,
    },
  }
})
```

### Query flow
- Merge `widgets.primary` and `widgets.secondary` into a single list.
- If dashboard tabs are present (`request.dashboard`), include the active tab and per-tab widget details.
- On a human message, stream a formatted widget list with `message_chunk`, then call `get_widget_data` for one widget to demonstrate retrieval.
- When a tool message returns, display a short sample of the returned data along with the request parameters for transparency.

### OpenBB AI SDK
- `get_widget_data`, `WidgetRequest`, `message_chunk`.

## Core logic

Unify primary and secondary widgets, render a summary, then fetch data for one widget:

```python
from openbb_ai import get_widget_data, WidgetRequest, message_chunk

all_widgets = []
if request.widgets:
  if request.widgets.primary:
    all_widgets.extend(request.widgets.primary)
  if request.widgets.secondary:
    all_widgets.extend(request.widgets.secondary)

# show a formatted list, then fetch a sample
async def flow():
  if all_widgets:
    yield message_chunk("**Available widgets**\n\n" + render_widget_table(all_widgets)).model_dump()
    last_widget = all_widgets[-1]
    yield get_widget_data([
      WidgetRequest(
        widget=last_widget,
        input_arguments={p.name: p.current_value for p in last_widget.params},
      )
    ]).model_dump()
  else:
    yield message_chunk("No widgets found on your dashboard.").model_dump()

return EventSourceResponse(flow(), media_type="text/event-stream")
```

