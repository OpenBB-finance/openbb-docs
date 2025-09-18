---
title: Interact with dashboard
sidebar_position: 7
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

Reference implementation in [this GitHub repository](https://github.com/OpenBB-finance/agents-for-openbb/tree/main/40-vanilla-agent-dashboard-widgets/vanilla_agent_dashboard_widgets/main.py).

Example that highlights that the agent has access to data on the dashboard (secondary) and that there are no tabs.

<img className="pro-border-gradient" width="800" alt="No tab no param no primary" src="https://openbb-cms.directus.app/assets/2dbcd500-a801-415f-a6d2-2052fa9abc17.png" />

Example that highlights that the agent still has access to data on the dashboard (secondary) but also has explicit context (primary) as a multi-file viewer widget.

<img className="pro-border-gradient" width="800" alt="No tab no param primary" src="https://openbb-cms.directus.app/assets/16b8ea4b-9dc4-487e-b9ac-14b573602684.png" />

Example that highlights that the agent has access to data that lives on the dashboard (and on all the tabs!).

<img className="pro-border-gradient" width="800" alt="Tab params" src="https://openbb-cms.directus.app/assets/a12edb2e-cf15-49ca-bb99-b8468fdfe65d.png" />

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

- Access both `widgets.primary` (user-selected) and `widgets.secondary` (dashboard) widget collections
- Combine widget lists for comprehensive dashboard overview
- Check `workspace_state.current_dashboard_info` for tab information
- Stream formatted widget inventory with `message_chunk()`:
  - Widget names, types, and parameter configurations
  - Tab organization if present
  - Data availability status
- Demonstrate data retrieval by fetching sample widget with `get_widget_data()`
- Process returned data and show preview with metadata

### OpenBB AI SDK

- `WidgetCollection`: Contains `primary`, `secondary`, and `extra` widget groups
- `Widget`: Individual widget with `uuid`, `name`, `type`, and `params`
- `WidgetParam`: Parameter definition with `name`, `type`, `current_value`
- `get_widget_data(widget_requests)`: Fetches data from specified widgets
- `WorkspaceState`: Provides dashboard context and tab information
- `message_chunk(text)`: Streams widget summaries and data previews

## Core logic

Unify primary and secondary widgets, render a summary, then fetch data for one widget:

```python
from openbb_ai import get_widget_data, WidgetRequest, message_chunk
from openbb_ai.models import QueryRequest

async def query(request: QueryRequest) -> EventSourceResponse:
    async def execution_loop():
        # Combine all available widgets
        all_widgets = []
        primary_count = 0
        secondary_count = 0

        if request.widgets:
            if request.widgets.primary:
                all_widgets.extend(request.widgets.primary)
                primary_count = len(request.widgets.primary)
            if request.widgets.secondary:
                all_widgets.extend(request.widgets.secondary)
                secondary_count = len(request.widgets.secondary)

        if not all_widgets:
            yield message_chunk("No widgets found on your dashboard.").model_dump()
            return

        # Stream dashboard overview
        dashboard_info = ""
        if request.workspace_state and request.workspace_state.current_dashboard_info:
            dashboard_name = request.workspace_state.current_dashboard_info.name
            tab_count = len(request.workspace_state.current_dashboard_info.tabs)
            dashboard_info = f"Dashboard: **{dashboard_name}** ({tab_count} tabs)\n\n"

        widget_summary = f"""# Dashboard Widget Analysis

{dashboard_info}## Widget Inventory
- **Selected widgets (primary)**: {primary_count}
- **Dashboard widgets (secondary)**: {secondary_count}
- **Total available**: {len(all_widgets)}

## Available Widgets
"""

        for i, widget in enumerate(all_widgets[:5]):  # Show first 5
            widget_type = "🎯 Selected" if i < primary_count else "📊 Dashboard"
            param_count = len(widget.params) if widget.params else 0
            widget_summary += f"- **{widget.name}** ({widget_type}) - {param_count} parameters\n"

        if len(all_widgets) > 5:
            widget_summary += f"- ... and {len(all_widgets) - 5} more widgets\n"

        yield message_chunk(widget_summary + "\n").model_dump()

        # Demonstrate data retrieval with last widget
        if all_widgets:
            sample_widget = all_widgets[-1]
            yield message_chunk(f"Let me fetch data from **{sample_widget.name}** as an example:\n\n").model_dump()

            yield get_widget_data([
                WidgetRequest(
                    widget=sample_widget,
                    input_arguments={p.name: p.current_value for p in sample_widget.params} if sample_widget.params else {}
                )
            ]).model_dump()

    return EventSourceResponse(execution_loop(), media_type="text/event-stream")
```
