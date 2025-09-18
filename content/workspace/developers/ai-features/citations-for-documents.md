---
title: Citations for documents
sidebar_position: 5
description: Add document-specific citations with PDF text highlighting for source attribution
keywords:
- citations
- documents
- PDF
- highlighting
- pdfplumber
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="AI Features — Citations for documents | OpenBB Workspace Docs" />

Extract and cite specific content from PDF documents with precise text highlighting. Use `pdfplumber` to get text positions and create visual citations in Workspace.

Reference implementation [in this GitHub repository](https://github.com/OpenBB-finance/agents-for-openbb/tree/main/vanilla-agent-pdf-citations).

<img className="pro-border-gradient" width="800" alt="Document Citations" src="https://openbb-cms.directus.app/assets/c47a15c0-562c-4fc1-a221-a11cef487826.png" />

## Architecture

This pattern extends widget citations by adding document-level text extraction and positioning. Extract PDF content with character-level precision for accurate highlighting.

`agents.json` configuration:

```python
return JSONResponse(content={
  "vanilla_agent_pdf_citations": {
    "name": "Vanilla Agent PDF Citations",
    "description": "A vanilla agent that handles PDF data with citation support.",
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

- Extract PDF content when widget data contains PDF format
- Use `pdfplumber` to get text with character positions
- Store text positions for citation highlighting
- Create multiple citation types:
  - Basic widget citation for data source
  - Highlighted citation for specific text passages
- Stream citations with bounding boxes for visual highlighting

### OpenBB AI SDK

- `CitationHighlightBoundingBox`: Precise text highlighting with coordinates
- `PdfDataFormat`: Identifies PDF content in widget data
- `quote_bounding_boxes`: Attach visual highlights to citations
- Text position tracking: `x0`, `top`, `x1`, `bottom` for accurate placement

## Core logic

Extract PDF text with positions for precise highlighting:

```python
import pdfplumber
from openbb_ai import cite, citations
from openbb_ai.models import CitationHighlightBoundingBox

def extract_pdf_with_positions(pdf_bytes: bytes) -> Tuple[str, List[Dict[str, Any]]]:
    """Extract text and positions from PDF."""
    document_text = ""
    text_positions = []

    with pdfplumber.open(io.BytesIO(pdf_bytes)) as pdf:
        for page_num, page in enumerate(pdf.pages, 1):
            # Extract character-level data for positioning
            if page.chars:
                # Group characters into lines
                lines = {}
                for char in page.chars:
                    y = round(char['top'])
                    if y not in lines:
                        lines[y] = {'chars': [], 'x0': char['x0'], 'x1': char['x1']}
                    lines[y]['chars'].append(char['text'])
                    lines[y]['x0'] = min(lines[y]['x0'], char['x0'])
                    lines[y]['x1'] = max(lines[y]['x1'], char['x1'])

                # Get first meaningful line for citation
                sorted_lines = sorted(lines.items())
                for y_pos, line_data in sorted_lines[:5]:
                    line_text = ''.join(line_data['chars']).strip()
                    if line_text and len(line_text) > 10:
                        text_positions.append({
                            'text': line_text,
                            'page': page_num,
                            'x0': line_data['x0'],
                            'top': y_pos,
                            'x1': line_data['x1'],
                            'bottom': y_pos + 12
                        })
                        break

            # Extract full text for context
            page_text = page.extract_text()
            if page_text:
                document_text += page_text + "\\n\\n"

    return document_text, text_positions
```

Create citations with line/word level highlighting in the PDF:

```python
async def handle_widget_data(data: list[DataContent | DataFileReferences]):
    """Process widget data and create PDF citations."""

    widget_text, pdf_text_positions = await handle_widget_data(message.data)
    context_str += widget_text

    # Create citations for widget data
    for widget_data_request in message.input_arguments["data_sources"]:
        widget = matching_widgets[0]

        # Basic widget citation
        basic_citation = cite(
            widget=widget,
            input_arguments=widget_data_request["input_args"],
        )
        citations_list.append(basic_citation)

        # PDF citation with highlighting
        if pdf_text_positions and len(pdf_text_positions) > 0:
            first_line = pdf_text_positions[0]

            pdf_citation = cite(
                widget=widget,
                input_arguments=widget_data_request["input_args"],
                extra_details={
                    "Page": first_line['page'],
                    "Reference": "First sentence of document"
                }
            )

            # Add precise text highlighting
            pdf_citation.quote_bounding_boxes = [[
                CitationHighlightBoundingBox(
                    text=first_line['text'][:100],
                    page=first_line['page'],
                    x0=first_line['x0'],
                    top=first_line['top'],
                    x1=first_line['x1'],
                    bottom=first_line['bottom']
                )
            ]]

            citations_list.append(pdf_citation)
```
