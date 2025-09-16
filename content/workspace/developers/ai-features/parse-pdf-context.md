---
title: Parse PDF context
sidebar_position: 4
description: Parse PDF content from widget data and cite sources
keywords:
- PDF
- DataContent
- PdfDataFormat
- citations
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="AI Features — Parse PDF context | OpenBB Workspace Docs" />

Extract text from PDF inputs supplied via widget data and append it to the model context. Optionally add citation highlights to reference quotes within the PDF.

Reference implementation [here](https://github.com/OpenBB-finance/agents-for-openbb/blob/feat/add-agent-dashboard-widgets-example/35-vanilla-agent-pdf/vanilla_agent_pdf/main.py).

<img className="pro-border-gradient" width="800" alt="Parse PDF" src="https://openbb-cms.directus.app/assets/b9e323b3-9416-4452-9d32-f6d6b8b50443.png" />

## Architecture

Handle PDF data delivered by the UI through the widget data tool. Support both URL and base64 PDFs and add text to the LLM context.

`agents.json` configuration with `widget-dashboard-select` feature enabled:

```python
return JSONResponse(content={
  "vanilla_agent_pdf": {
    "endpoints": {"query": "http://localhost:7777/v1/query"},
    "features": {
      "widget-dashboard-select": True,
      "widget-dashboard-search": False,
    },
  }
})
```

### Query flow
- Early exit to fetch widget data if a human message has `widgets.primary`.
- When a subsequent tool message arrives, iterate its `data` items. If an item has `PdfDataFormat`, download or decode and extract text with `pdfplumber`, append to a context string, and feed that into the LLM.
- Optionally construct `cite(...)` entries with `quote_bounding_boxes` to highlight specific text ranges.

### OpenBB AI SDK
- `get_widget_data`, `WidgetRequest`, `message_chunk`, `citations`, `cite`.
- `PdfDataFormat`, `SingleDataContent`, `SingleFileReference`, `DataContent`, `DataFileReferences`, `CitationHighlightBoundingBox`.

## Core logic

Detect PDF data, extract text, and accumulate as context:

```python
from openbb_ai.models import (
  SingleDataContent, SingleFileReference, PdfDataFormat, DataContent, DataFileReferences
)

async def handle_widget_data(data: list[DataContent | DataFileReferences]) -> str:
    result = ""
    for result_item in data:
        for item in result_item.items:
            if isinstance(item.data_format, PdfDataFormat):
                result += await _get_url_or_base64_pdf_text(item)
            else:
                result += str(item.content)
    return result
```

Add citation highlights (optional):

```python
from openbb_ai import cite, citations
from openbb_ai.models import CitationHighlightBoundingBox

c = cite(widget=w, input_arguments=args)
c.quote_bounding_boxes = [[
  CitationHighlightBoundingBox(text="Some text chunk.", page=1, x0=72, top=117, x1=259, bottom=135)
]]
yield citations([c]).model_dump()
```

