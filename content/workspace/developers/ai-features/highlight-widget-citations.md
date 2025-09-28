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

Reference implementation in [this GitHub repository](https://github.com/OpenBB-finance/agents-for-openbb/tree/main/32-vanilla-agent-raw-widget-data-citations/vanilla_agent_raw_context_citations/main.py).

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

- Early exit: fetch widget data when human message contains `widgets.primary`
- On subsequent tool message:
  - Process widget data and include in LLM context
  - Match widget UUIDs from tool `input_arguments` to `request.widgets.primary`
  - Build `cite()` objects for each data source used
  - Stream citations with `citations()` after LLM response
- Citations appear in Workspace UI panel for source verification

### OpenBB AI SDK

- `cite(widget, input_arguments, extra_details)`: Creates `Citation` objects
- `citations(citation_list)`: Emits `CitationCollectionSSE` events
- `Citation`: Links outputs to data sources with metadata
- `SourceInfo`: Provides detailed source attribution data

## Core logic

Build citations by matching the tool input arguments to widgets in the request:

```python
from openbb_ai import cite, citations
from openbb_ai.models import Citation, CitationHighlightBoundingBox

async def execution_loop():
    # ... stream LLM response ...

    # Build citations after response
    citations_list = []

    # Process tool message to find data sources
    for message in request.messages:
        if message.role == "tool":
            for widget_data_request in message.input_arguments["data_sources"]:
                # Match widget by UUID
                matching_widgets = [
                    w for w in request.widgets.primary
                    if str(w.uuid) == widget_data_request["widget_uuid"]
                ]

                if matching_widgets:
                    widget = matching_widgets[0]
                    citation = cite(
                        widget=widget,
                        input_arguments=widget_data_request["input_args"],
                        extra_details={
                            "Widget Name": widget.name,
                            "Data Source": widget.type,
                            "Parameters Used": widget_data_request["input_args"]
                        }
                    )

                    citations_list.append(citation)

    # Emit citations for UI display
    if citations_list:
        yield citations(citations_list).model_dump()
```
