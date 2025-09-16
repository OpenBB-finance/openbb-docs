---
title: Highlight widget citations
sidebar_position: 4
description: Cite widget data sources in your responses and display them in Workspace
keywords:
- citations
- cite
- widgets
- provenance
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="AI Features — Highlight widget citations | OpenBB Workspace Docs" />

After retrieving widget data, attribute outputs to their sources. Build `cite(...)` entries and stream them with `citations(...)` so Workspace shows a citations panel next to the answer.

Reference implementation [here](https://github.com/OpenBB-finance/agents-for-openbb/blob/feat/add-agent-dashboard-widgets-example/32-vanilla-agent-raw-widget-data-citations/vanilla_agent_raw_context_citations/main.py).

<img className="pro-border-gradient" width="800" alt="Citations" src="https://openbb-cms.directus.app/assets/0af85f66-b91f-476d-a231-973442a29957.png" />

## Architecture

This pattern extends "Parse widget data" by adding attribution. After data retrieval, emit citations to show provenance in Workspace.

`agents.json` configuration with `widget-dashboard-select` feature enabled:

```python
return JSONResponse(content={
  "vanilla_agent_raw_widget_data_citations": {
    "endpoints": {"query": "http://localhost:7777/v1/query"},
    "features": {
      "streaming": True,
      "widget-dashboard-select": True,
      "widget-dashboard-search": False,
    },
  }
})
```

### Query flow
- Early exit to fetch widget data (same as Parse widget data).
- On the next turn, include the data in context and create `cite(...)` entries that reference the widget and the arguments used to fetch its data. Stream them with `citations(...)`.

### OpenBB AI SDK
- `cite(widget, input_arguments, extra_details)`: constructs a single citation.
- `citations(list_of_citation)`: emits a collection of citations as SSE.

## Core logic

Build citations by matching the tool input arguments to widgets in the request:

```python
from openbb_ai import cite, citations

citations_list = []
for widget_data_request in message.input_arguments["data_sources"]:
    # match the widget by UUID, then build a citation
    w = next((w for w in request.widgets.primary if str(w.uuid) == widget_data_request["widget_uuid"]), None)
    if w:
        citations_list.append(
            cite(
                widget=w,
                input_arguments=widget_data_request["input_args"],
                extra_details={"Widget Name": w.name, "Widget Input Arguments": widget_data_request["input_args"]},
            )
        )

if citations_list:
    yield citations(citations_list).model_dump()

Workspace shows the citations next to the response so readers can verify provenance.
```
