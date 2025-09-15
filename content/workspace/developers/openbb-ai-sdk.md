---
title: OpenBB AI SDK
sidebar_position: 7
description: Build custom agents for OpenBB Workspace using the OpenBB AI SDK helpers and models
keywords:
- OpenBB AI SDK
- custom agents
- SSE
- QueryRequest
- widgets
- citations
- charts
- tables
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="OpenBB AI SDK | OpenBB Workspace Docs" />

The OpenBB AI SDK helps you build stateless HTTP agents for OpenBB Workspace. It provides Pydantic models for requests and a set of helper functions that emit Server‑Sent Events (SSE) the Workspace understands.

Agents expose two endpoints: `/agents.json` for metadata and `/query` for a streamed conversation. The SDK functions produce structured SSE events for streaming text, reasoning steps, data fetches from widgets, citations, tables, and charts.

Install the package in your agent backend:

```bash
pip install openbb-ai
```

Check the open source repository [here](https://github.com/OpenBB-finance/openbb-ai).

## QueryRequest

`openbb_ai.models.QueryRequest` carries everything the agent needs per call:
- `messages` - full chat conversation up to this message
- `widgets` - all widgets data
  - `primary` - all widgets added as explicit context
  - `secondary` - all widgets in the dashboard
  - `extra` - artifacts in the chat or files dropped in the chat
- `urls` - URL pages
- `timezone` - user's timezone (e.g., "America/New_York")
- `tools` - MCP tools available for the agent
- `workspace_options` - available workspace features (e.g., ["workspace-web-search"])
- `workspace_state` - current workspace state including:
  - `action_history` - history of user actions (e.g. adding and removing widgets)
  - `agents` - available agents
  - `current_dashboard_uuid` - ID of the current dashboard
  - `current_dashboard_info` - dashboard metadata (id, name, current_tab_id, tabs)
  - `current_page_context` - current page context (e.g., "dashboard")

Backends are stateless; do not cache server state between calls.

## Streaming Text

Use `message_chunk(text)` to stream tokens or text fragments:

```python
from openbb_ai import message_chunk
yield message_chunk(chunk).model_dump()
```

## Reasoning Steps

Use `reasoning_step` to emit status updates with optional key‑value details:

```python
from openbb_ai import reasoning_step
yield reasoning_step(event_type="INFO", message="Fetching data", details={"step": 1}).model_dump()
```

## Retrieving Widget Data

Request data from Workspace widgets via a function call SSE using `get_widget_data` and `WidgetRequest`:

```python
from openbb_ai import get_widget_data, WidgetRequest

widget_requests = [
    WidgetRequest(widget=widget, input_arguments={p.name: p.current_value for p in widget.params})
]
yield get_widget_data(widget_requests).model_dump()
```

Only declare widget features in `/agents.json` that you actually use:

- `widget-dashboard-select`: enables access to user‑selected widgets
- `widget-dashboard-search`: enables access to widgets on the current dashboard

## Citations

Attribute outputs to data sources using `cite` and finish with `citations`:

```python
from openbb_ai import cite, citations

c = cite(widget=some_widget, input_arguments={"symbol": "AAPL"}, extra_details={"Widget": some_widget.name})
yield citations([c]).model_dump()
```

## Tables and Charts

Stream tables and charts as artifacts in the conversation:

```python
from openbb_ai import table, chart

yield table(data=[{"x": 1, "y": 2}], name="My Table", description="Sample").model_dump()
yield chart(type="line", data=[{"x": 1, "y": 2}], x_key="x", y_keys=["y"], name="My Chart").model_dump()
```

## Examples

The SDK README provides detailed examples and reference:
https://github.com/OpenBB-finance/openbb-ai

