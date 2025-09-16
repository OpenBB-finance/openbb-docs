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

The OpenBB AI SDK simplifies building custom agents for OpenBB Workspace by providing type-safe models and helper functions that handle schema validation for streaming Server-Sent Events (SSE). Instead of manually crafting SSE messages and managing event types, you can use simple Python functions prepare events that will stream text, show reasoning steps, fetch widget data, and create visualizations.

The SDK handles all the SSE formatting and data serialization for you.

Install the package in your agent backend:

```bash
pip install openbb-ai
```

The code is open source and is [available in this repository](https://github.com/OpenBB-finance/openbb-ai).

## Request Handling

The SDK provides `QueryRequest` to access everything your agent needs in a single, type-safe model:

```python
from openbb_ai.models import QueryRequest

async def query(request: QueryRequest):
    # Access chat history
    messages = request.messages

    # Access widgets (primary, secondary, extra)
    widgets = request.widgets

    # Use workspace context
    timezone = request.timezone
    workspace_state = request.workspace_state
```

**Key fields in QueryRequest:**

- `messages` - chat conversation message history
- `widgets` - all widgets data
  - `primary` - widgets added as explicit context
  - `secondary` - widgets in the current dashboard
  - `extra` - artifacts and files in the chat
- `urls` - URL pages shared in chat
- `timezone` - timezone identified by the user's browser
- `tools` - available MCP tools
- `workspace_options` - features enabled in the Workspace
- `workspace_state` - dashboard state and context
  - `action_history` - user actions history
  - `agents` - available agents
  - `current_dashboard_uuid` - dashboard ID
  - `current_dashboard_info` - dashboard metadata
  - `current_page_context` - current page context

We recommend making backends stateless and not cache server state between calls.

## Streaming Text

The SDK simplifies streaming responses by handling SSE formatting automatically. You can yield message chunks like this:

```python
from openbb_ai import message_chunk

# Yield message chunks for the response stream
for chunk in llm_response:
    yield message_chunk(chunk).model_dump()
```

**Related models:**

- `MessageChunkSSE` - For streaming text/markdown tokens.
- `MessageArtifactSSE` - For streaming larger content blocks like tables or charts.

## Reasoning Steps

Show users what your agent is thinking and doing with reasoning steps. The SDK handles the SSE event formatting:

```python
from openbb_ai import reasoning_step

# Show progress
yield reasoning_step(event_type="INFO", message="Analyzing market data").model_dump()

# Include details
yield reasoning_step(
    event_type="SUCCESS",
    message="Data retrieved",
    details={"records": 1000, "timeframe": "1Y"}
).model_dump()
```

**Related models:**

- `StatusUpdateSSE` - Formats reasoning steps and status updates
  - Event types: `INFO`, `SUCCESS`, `WARNING`, `ERROR`
  - Optional details dictionary for key-value pairs

## Widget Data Access

The SDK simplifies fetching data from dashboard widgets. Widget data is retrieved by yielding a special event that triggers a function call on the Workspace (client) side. Instead of manually creating these events, use the helper functions:

```python
from openbb_ai import get_widget_data
from openbb_ai.models import WidgetRequest, Widget

# Request data from multiple widgets
widget_requests = [
    WidgetRequest(
        widget=widget,
        input_arguments={p.name: p.current_value for p in widget.params}
    )
]

# SDK handles the SSE formatting
yield get_widget_data(widget_requests).model_dump()
```

Important: Once this event is sent, the execution loop of the agent should break and wait for the Workspace to call the `/query` endpoint again with the widget data added to context.

**Related models:**

- `Widget` - Dashboard widget with metadata and parameters
  - Contains widget ID, name, type
  - Includes parameter definitions
- `WidgetParam` - Individual parameter configuration
  - `name` - parameter identifier
  - `type` - data type
  - `current_value` - current value
- `WidgetCollection` - Container for widget groups
  - `primary` - user-selected widgets
  - `secondary` - dashboard widgets
  - `extra` - artifacts and files
- `WidgetRequest` - Data request specification
- `FunctionCallSSE` - The SSE that triggers widget data retrieval

**Widget features to declare in `/agents.json`:**

- `widget-dashboard-select` - access user-selected widgets. When true, the widgets explicitly added to context by the user appear in `request.widgets.primary`.
- `widget-dashboard-search` - access dashboard widgets

## Parsing Widget Data

When widgets return data, it comes in various formats that need to be parsed appropriately. The SDK provides data format models to identify and handle each type:

```python
from openbb_ai.models import (
    PdfDataFormat,
    ImageDataFormat,
    SpreadsheetDataFormat,
    RawObjectDataFormat,
    SingleDataContent,
    SingleFileReference,
    DataContent,
    DataFileReferences
)

async def handle_widget_data(data: list[DataContent | DataFileReferences]) -> str:
    result_str = ""
    for result in data:
        for item in result.items:
            if isinstance(item.data_format, PdfDataFormat):
                # Parse PDF content
                if isinstance(item, SingleDataContent):
                    # Base64 encoded PDF
                    content = base64.b64decode(item.content)
                    # Extract text using pdfplumber or similar
                elif isinstance(item, SingleFileReference):
                    # PDF from URL
                    content = await download_file(item.url)
                    # Process PDF content

            elif isinstance(item.data_format, SpreadsheetDataFormat):
                # Parse Excel/CSV data
                # Convert to dataframe or table structure

            elif isinstance(item.data_format, ImageDataFormat):
                # Handle image data
                # May contain charts, screenshots, etc.

            else:
                # RawObjectDataFormat - JSON/dict data
                result_str += str(item.content)

    return result_str
```

**Data format models:**

- `PdfDataFormat` - Identifies PDF documents from widgets
  - Contains filename and metadata
  - Data comes as base64 or URL reference
  - Use libraries like `pdfplumber` to extract text and tables

- `SpreadsheetDataFormat` - Identifies Excel/CSV data
  - Tabular data from financial widgets
  - Parse with `pandas` or similar libraries

- `ImageDataFormat` - Identifies image content
  - Charts, graphs, screenshots from widgets
  - May require OCR or image analysis

- `RawObjectDataFormat` - Default JSON/dictionary format
  - Structured data from API responses
  - Direct access to nested fields

**Data delivery models:**

- `SingleDataContent` - Data embedded as base64
- `SingleFileReference` - Data available via URL
- `DataContent` - Container for multiple data items
- `DataFileReferences` - References to external files

## Data Attribution & Citations

The SDK makes it easy to cite your sources, ensuring transparency about where data comes from:

```python
from openbb_ai import cite, citations

# Create citations for widgets used
citation = cite(
    widget=price_widget,
    input_arguments={"symbol": "AAPL"},
    extra_details={"timeframe": "1D"}
)

# Send all citations at once
yield citations([citation]).model_dump()
```

**Related models:**

- `Citation` - Links outputs to data sources
  - `widget` - source widget reference
  - `input_arguments` - parameters used
  - `extra_details` - additional metadata
- `SourceInfo` - Provides detailed source attribution
- `CitationHighlightBoundingBox` - Visual highlighting for line-level citations in PDF documents

## Visualizations

The SDK abstracts the complexity of creating interactive charts and tables. Simply provide your data and configuration:

```python
from openbb_ai import table, chart

# Create a data table
yield table(
    data=[{"symbol": "AAPL", "price": 150.25, "change": 2.5}],
    name="Stock Prices",
    description="Current market prices"
).model_dump()

# Create interactive charts
yield chart(
    type="line",
    data=price_history,
    x_key="date",
    y_keys=["price"],
    name="Price History",
    description="Stock price over time"
).model_dump()
```

**Supported chart types and models:**

- `LineChartParameters` - Time series and trends
- `BarChartParameters` - Comparisons and distributions
- `ScatterChartParameters` - Correlations and relationships
- `PieChartParameters` - Proportions and percentages
- `DonutChartParameters` - Hierarchical proportions
