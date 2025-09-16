---
title: Parse PDF context
sidebar_position: 3
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

Reference implementation [here](https://github.com/OpenBB-finance/agents-for-openbb/tree/main/35-vanilla-agent-pdf/vanilla_agent_pdf/main.py).

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
- Check for human message with `widgets.primary` containing PDF data
- Early exit: yield `get_widget_data()` for UI execution
- On subsequent tool message:
  - Iterate through `DataContent` items
  - Detect `PdfDataFormat` using `isinstance()` check
  - Handle both `SingleDataContent` (base64) and `SingleFileReference` (URL)
  - Extract text using `pdfplumber.open()` with `io.BytesIO()`
  - Append extracted text to context string
  - Process with LLM and stream response
- Optionally create `cite()` with `CitationHighlightBoundingBox` for text highlighting

### OpenBB AI SDK
- `PdfDataFormat`: Identifies PDF content in widget data
- `SingleDataContent`: Contains base64-encoded PDF data
- `SingleFileReference`: Contains URL reference to PDF
- `DataContent`/`DataFileReferences`: Containers for data items
- `CitationHighlightBoundingBox`: Defines text highlighting coordinates
- `cite(widget, input_arguments, extra_details)`: Creates citations with bounding boxes
- `get_widget_data()`: Requests PDF data from widgets

## Core logic

Detect PDF data, extract text, and accumulate as context:

```python
import base64
import io
import pdfplumber
import httpx
from openbb_ai import get_widget_data, cite, citations
from openbb_ai.models import (
    QueryRequest, WidgetRequest, PdfDataFormat, 
    SingleDataContent, SingleFileReference, 
    DataContent, DataFileReferences,
    CitationHighlightBoundingBox
)

async def _download_file(url: str) -> bytes:
    async with httpx.AsyncClient() as client:
        response = await client.get(url)
        return response.content

async def _get_pdf_text(item) -> str:
    if isinstance(item, SingleDataContent):
        # Handle base64 PDF
        file_content = base64.b64decode(item.content)
    elif isinstance(item, SingleFileReference):
        # Handle URL PDF
        file_content = await _download_file(str(item.url))
    
    with pdfplumber.open(io.BytesIO(file_content)) as pdf:
        document_text = ""
        for page in pdf.pages:
            document_text += page.extract_text() + "\n\n"
    return document_text

async def handle_widget_data(data: list[DataContent | DataFileReferences]) -> str:
    result_str = "--- PDF Content ---\n"
    for result_item in data:
        for item in result_item.items:
            if isinstance(item.data_format, PdfDataFormat):
                result_str += f"===== {item.data_format.filename} =====\n"
                result_str += await _get_pdf_text(item)
                result_str += "------\n"
            else:
                result_str += str(item.content) + "\n"
    return result_str
```

Add citation highlights with bounding boxes:

```python
# Create citations with text highlighting
citations_list = []
for widget in request.widgets.primary:
    citation = cite(
        widget=widget,
        input_arguments={p.name: p.current_value for p in widget.params},
        extra_details={"filename": "document.pdf"}
    )
    
    # Add bounding boxes for specific text regions
    citation.quote_bounding_boxes = [
        [
            CitationHighlightBoundingBox(
                text="Key financial metrics",
                page=1,
                x0=72.0, top=117, x1=259, bottom=135
            ),
            CitationHighlightBoundingBox(
                text="Revenue increased 15%", 
                page=1,
                x0=110.0, top=140, x1=275, bottom=160
            )
        ]
    ]
    citations_list.append(citation)

if citations_list:
    yield citations(citations_list).model_dump()
```

