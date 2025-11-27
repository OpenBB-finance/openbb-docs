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

The OpenBB AI SDK simplifies building custom agents for OpenBB Workspace by providing type-safe models and helper functions that handle schema validation for streaming Server-Sent Events (SSE). Instead of manually crafting SSE messages and managing event types, you can use simple Python functions to stream text, show reasoning steps, fetch widget data, and create visualizations.

Install the package in your agent backend:

```bash
pip install openbb-ai
```

The code is open source and is [available in this repository](https://github.com/OpenBB-finance/openbb-ai).

## Building Your First Agent

Every agent starts with a query handler that receives a `QueryRequest` object containing everything your agent needs:

```python
from openbb_ai.models import QueryRequest
from openbb_ai import message_chunk, reasoning_step

async def query(request: QueryRequest):
    """Main entry point for your agent."""

    # Show the user what you're doing
    yield reasoning_step(
        event_type="INFO",
        message="Processing your request..."
    ).model_dump()

    # Access the user's latest message
    last_message = request.messages[-1]
    if last_message.role == "human":
        user_query = last_message.content

    # Stream a response from LLM
    client = openai.AsyncOpenAI()
    async for event in await client.chat.completions.create(
        model="gpt-4o",
        messages=[{"role": "user", "content": user_query}],
        stream=True,
    ):
        if chunk := event.choices[0].delta.content:
            yield message_chunk(chunk).model_dump()
```

### Understanding the QueryRequest

The `QueryRequest` object contains all context your agent needs:

#### Core Fields

**`messages`** - Chat conversation history

```python
for message in request.messages:
    if message.role == "human":
        user_query = message.content
    elif message.role == "ai":
        previous_response = message.content
```

**`widgets`** - Widgets available to your agent

```python
# User-selected widgets (requires widget-dashboard-select feature)
if request.widgets and request.widgets.primary:
    for widget in request.widgets.primary:
        print(f"User added: {widget.name}")

# Dashboard widgets (requires widget-dashboard-search feature)
if request.widgets and request.widgets.secondary:
    for widget in request.widgets.secondary:
        print(f"On dashboard: {widget.name}")
```

See the [agents.json reference](https://docs.openbb.co/workspace/developers/json-specs/agents-json-reference) for details how to enable the `widget-dashboard-select` and `widget-dashboard-search` features.

**`workspace_state`** - Current workspace context

```python
if request.workspace_state and request.workspace_state.current_dashboard_info:
    dashboard = request.workspace_state.current_dashboard_info
    print(f"Active tab: {dashboard.current_tab_id}")
```

#### Additional Fields

- **`tools`** - MCP tools available for execution
- **`urls`** - URLs shared in chat (max 4)
- **`timezone`** - User's browser timezone (e.g., "America/New_York")
- **`api_keys`** - Custom API keys from user
- **`workspace_options`** - Enabled feature flags (including custom ones)

## Requesting Widget Data

`get_widget_data` is a client-side tool call. When you yield it, Workspace pauses your agent, fetches the widget data in the browser, and calls your agent again with a `tool` message that contains the results.

Example:

```python
from openbb_ai import WidgetRequest, message_chunk, reasoning_step, get_widget_data
from openbb_ai.models import QueryRequest, ClientFunctionCallError, DataContent

async def query(request: QueryRequest):
    last_message = request.messages[-1]
    
    # Check if this is a tool response first
    is_tool_response = (
        last_message
        and hasattr(last_message, "role")
        and last_message.role == "tool"
        and hasattr(last_message, "data")
        and last_message.data
    )
    
    if is_tool_response:
        # Process widget data (Step 3)
        yield reasoning_step(event_type="INFO", message="Processing data...").model_dump()
        
        for item in last_message.data:
            if isinstance(item, DataContent):
                # Process the data and respond
                yield message_chunk("Here's what I found in the data...").model_dump()
        return
    
    # Check for orchestration requests
    orchestration_requested = (
        last_message.role == "ai" and last_message.agent_id == "openbb-copilot"
    )
    
    # Phase 1: Check if we need to fetch primary data (added to context)
    if ((last_message.role == "human" or orchestration_requested) 
        and request.widgets and request.widgets.primary):
        widget_requests = [
            WidgetRequest(
                widget=widget,
                input_arguments={
                    param.name: param.current_value for param in widget.params
                }
            )
            for widget in request.widgets.primary
        ]
        
        yield reasoning_step(event_type="INFO", message="Fetching widget data...").model_dump()
        yield get_widget_data(widget_requests).model_dump()
        return  # EXIT AND WAIT
    
    # Phase 2: Process fetched data
    if hasattr(last_message, 'data'):
        yield reasoning_step(event_type="INFO", message="Processing data...").model_dump()
        
        for item in last_message.data:
            if isinstance(item, DataContent):
                # Process the data and respond
                yield message_chunk("Here's what I found in the data...").model_dump()
```

Use `request.widgets.primary` for widgets the user selected in chat and `request.widgets.secondary` for widgets already on the dashboard (when the dashboard features are enabled). The SDK formats the tool call for you. Your only responsibility is to pause after yielding `get_widget_data` and handle the callback that arrives as a `tool` message.

## Streaming Responses

The SDK provides several ways to stream content back to users:

### Text Streaming

```python
from openbb_ai import message_chunk

# Stream from LLM response
async for event in await client.chat.completions.create(
    model="gpt-4o",
    messages=messages,
    stream=True,
):
    if chunk := event.choices[0].delta.content:
        yield message_chunk(chunk).model_dump()
```

### Reasoning Steps

Show users what your agent is thinking:

```python
from openbb_ai import reasoning_step

# Different event types for different states
yield reasoning_step(event_type="INFO", message="Analyzing market data").model_dump()
yield reasoning_step(event_type="SUCCESS", message="Found 50 matching results").model_dump()
yield reasoning_step(event_type="WARNING", message="Some data may be delayed").model_dump()
yield reasoning_step(event_type="ERROR", message="Failed to fetch real-time data").model_dump()

# Include additional details
yield reasoning_step(
    event_type="SUCCESS",
    message="Data retrieved",
    details={"records": 1000, "timeframe": "1Y"}
).model_dump()
```

### Tables

Create interactive data tables:

```python
from openbb_ai import table

yield table(
    data=[
        {"Symbol": "AAPL", "Price": 150.25, "Change": "+2.5%"},
        {"Symbol": "GOOGL", "Price": 2800.00, "Change": "-0.3%"},
        {"Symbol": "MSFT", "Price": 380.50, "Change": "+1.2%"}
    ],
    name="Stock Prices",
    description="Current market prices"
).model_dump()
```

### Charts

Create visualizations with different chart types:

```python
from openbb_ai import chart

# Line chart for time series
yield chart(
    type="line",
    data=[
        {"date": "2024-01-01", "price": 150.25},
        {"date": "2024-01-02", "price": 151.30},
        {"date": "2024-01-03", "price": 148.90}
    ],
    x_key="date",
    y_keys=["price"],
    name="Price History",
    description="Stock price over time"
).model_dump()

# Bar chart for comparisons
yield chart(
    type="bar",
    data=[
        {"symbol": "AAPL", "volume": 50000000},
        {"symbol": "GOOGL", "volume": 25000000},
        {"symbol": "MSFT", "volume": 40000000}
    ],
    x_key="symbol",
    y_keys=["volume"],
    name="Trading Volume",
    description="Volume by symbol"
).model_dump()
```

Supported chart types: `line`, `bar`, `scatter`, `pie`, `donut`

## Citations & Attribution

Always cite your data sources to maintain transparency:

```python
from openbb_ai import cite, citations

# Create citations for widgets you used
citation_list = []

for widget in request.widgets.primary:
    citation_list.append(
        cite(
            widget=widget,
            input_arguments={
                param.name: param.current_value
                for param in widget.params
            },
            extra_details={"timeframe": "1D"}
        )
    )

# Send all citations at once
yield citations(citation_list).model_dump()
```

## Data Format Reference

Widget data can come in various formats:

```python
from openbb_ai.models import (
    PdfDataFormat,
    ImageDataFormat,
    SpreadsheetDataFormat,
    RawObjectDataFormat,
    SingleDataContent,
    SingleFileReference
)

async def handle_widget_data(data: list[DataContent | DataFileReferences]):
    for result in data:
        for item in result.items:
            if isinstance(item.data_format, PdfDataFormat):
                # Handle PDF - use pdfplumber or similar
                if isinstance(item, SingleDataContent):
                    pdf_bytes = base64.b64decode(item.content)
                elif isinstance(item, SingleFileReference):
                    pdf_url = item.url

            elif isinstance(item.data_format, SpreadsheetDataFormat):
                # Handle Excel/CSV - use pandas
                df = pd.read_json(item.content)

            elif isinstance(item.data_format, ImageDataFormat):
                # Handle images - may need OCR
                image_data = base64.b64decode(item.content)

            else:  # RawObjectDataFormat
                # Handle JSON/dict data
                data = json.loads(item.content)
```

## Complete Agent Example

Here's a minimal but complete agent that demonstrates the key concepts:

```python
from openbb_ai import WidgetRequest, message_chunk, reasoning_step, cite, citations, table, get_widget_data
from openbb_ai.models import QueryRequest, DataContent, ClientFunctionCallError
import json

async def query(request: QueryRequest):
    """Complete agent implementation with widget data flow."""

    last_message = request.messages[-1]

    # Check for orchestration requests
    orchestration_requested = (
        last_message.role == "ai" and last_message.agent_id == "openbb-copilot"
    )

    # Phase 1: Fetch widget data if needed
    if ((last_message.role == "human" or orchestration_requested)
        and request.widgets and request.widgets.primary):
        widget_requests = [
            WidgetRequest(
                widget=widget,
                input_arguments={
                    param.name: param.current_value for param in widget.params
                }
            )
            for widget in request.widgets.primary
        ]

        yield reasoning_step(
            event_type="INFO",
            message="Fetching market data..."
        ).model_dump()

        yield get_widget_data(widget_requests).model_dump()
        return  # Exit and wait for callback

    # Phase 2: Process widget data
    if hasattr(last_message, 'data'):
        yield reasoning_step(
            event_type="INFO",
            message="Analyzing data..."
        ).model_dump()

        # Process the data
        results = []
        for item in last_message.data:
            if isinstance(item, ClientFunctionCallError):
                yield reasoning_step(
                    event_type="ERROR",
                    message=f"Failed: {item.content}"
                ).model_dump()
                continue

            if isinstance(item, DataContent):
                for data_item in item.items:
                    data = json.loads(data_item.content)
                    results.append(data)

        # Stream response from LLM
        yield message_chunk("Based on the market data analysis:\n").model_dump()

        # Continue with LLM streaming
        client = openai.AsyncOpenAI()
        async for event in await client.chat.completions.create(
            model="gpt-4o",
            messages=openai_messages,
            stream=True,
        ):
            if chunk := event.choices[0].delta.content:
                yield message_chunk(chunk).model_dump()

        # Show data table
        if results:
            yield table(
                data=results[:5],  # Show top 5
                name="Market Summary",
                description="Key metrics"
            ).model_dump()

        # Add citations
        citation_list = [
            cite(widget=widget, input_arguments={
                param.name: param.current_value for param in widget.params
            })
            for widget in request.widgets.primary
        ]
        yield citations(citation_list).model_dump()

        yield reasoning_step(
            event_type="SUCCESS",
            message="Analysis complete"
        ).model_dump()

    # Phase 3: Handle regular chat without widgets
    else:
        yield message_chunk("Please add some widgets to analyze market data.").model_dump()
```

## Model Reference

To see the available models check [https://github.com/OpenBB-finance/openbb-ai/blob/main/openbb_ai/models.py](https://github.com/OpenBB-finance/openbb-ai/blob/main/openbb_ai/models.py).

<!--


### Core Models

**`QueryRequest`** - Main request object containing all context
- `messages` - Chat conversation history between user and agents. List of `LlmMessage` objects with roles ("human", "ai", "tool")
- `widgets` - Widget collections organized by priority:
  - `primary` - Widgets explicitly selected by user (requires `"widget-dashboard-select": true` feature)
  - `secondary` - All widgets on current dashboard (requires `"widget-dashboard-search": true` feature)
  - `extra` - Files, artifacts, and custom data sources uploaded to chat
- `workspace_state` - Current workspace context including:
  - Dashboard info, current tab, available agents, user action history
- `tools` - Available MCP (Model Context Protocol) tools that agents can execute
- `urls` - URL pages shared in chat for context (maximum 4 URLs allowed)
- `timezone` - User's browser-detected timezone (e.g., "America/New_York", "Europe/London", "UTC")
- `api_keys` - Custom API keys provided by user
- `workspace_options` - Feature flags and custom options. Standard flags include:
  - `"widget-dashboard-select"` - Access to user-selected widgets
  - `"widget-dashboard-search"` - Access to all dashboard widgets
  - Custom features defined in agent's `agents.json` by the user

**`Widget`** - Widget definition representing a data source endpoint
- `uuid` - Unique identifier for this widget instance (UUID format: `550e8400-e29b-41d4-a716-446655440000`)
- `origin` - Data source provider (e.g., "openbb" for OpenBB widgets, "custom" for user-defined sources)
- `widget_id` - Endpoint identifier for the data source (e.g., "equity.price", "crypto.price", "economy.gdp")
- `name` - Human-readable display name (e.g., "Equity Price", "Economic Calendar")
- `description` - Detailed description of what data this widget provides
- `params` - List of `WidgetParam` objects defining the widget's input parameters
- `metadata` - Additional widget-specific data (configuration, caching info, etc.)

**`WidgetParam`** - Individual parameter for configuring widget data requests
- `name` - Parameter identifier used in API calls (e.g., "symbol", "start_date", "interval")
- `type` - Data type and input validation:
  - `"string"` - Text input (company names, descriptions)
  - `"number"` - Numeric values (prices, quantities)
  - `"integer"` - Whole numbers (years, counts)
  - `"boolean"` - True/false flags
  - `"date"` - Date picker inputs
  - `"ticker"` - Stock/crypto symbol with validation
  - `"endpoint"` - Sub-endpoint selection
- `description` - Human-readable explanation of the parameter
- `default_value` - Default value if none provided (can be `null` for required params)
- `current_value` - Currently active value (set by user or inherited from defaults)
- `multi_select` - Boolean flag allowing multiple values (e.g., multiple stock symbols)
- `options` - Static list of allowed values for dropdown/select inputs
- `get_options` - Boolean flag to fetch parameter options dynamically from an endpoint

**`WidgetRequest`** - Request to fetch widget data from a specific widget
- `widget` - The `Widget` object to fetch data from
- `input_arguments` - Dictionary mapping parameter names to values:
  ```python
  {
      "symbol": "AAPL",
      "start_date": "2024-01-01",
      "interval": "1d"
  }
  ```

**`WidgetCollection`** - Container organizing widgets by access level and priority
- `primary` - User-explicitly selected widgets (highest priority)
  - Added via "Add to Context" button or explicit selection
  - Only available when agent has `"widget-dashboard-select": true` feature
- `secondary` - All widgets currently on the dashboard (secondary priority)
  - Includes all widgets visible on current dashboard tab
  - Only available when agent has `"widget-dashboard-search": true` feature
- `extra` - Files, artifacts, and custom data sources (lowest priority)
  - User-uploaded PDFs, CSVs, images
  - Chat artifacts and file attachments
  - Custom data sources not tied to dashboard widgets

### SSE Event Models

**`MessageChunkSSE`** - For streaming text/markdown responses token by token
- `event` - Always `"copilotMessageChunk"`
- `data.delta` - Individual text chunk/token to stream to the user interface
  - Used for real-time text streaming from LLM responses
  - Chunks are concatenated by the client to form complete message

**`MessageArtifactSSE`** - For streaming large structured content blocks
- `event` - Always `"copilotMessageArtifact"`
- `data` - `ClientArtifact` object containing:
  - Large tables, code blocks, or formatted content
  - Content that should be displayed as a separate UI component

**`StatusUpdateSSE`** - For showing reasoning steps and agent progress
- `event` - Always `"copilotStatusUpdate"`
- `data.eventType` - Status level indicating importance:
  - `"INFO"` - General progress updates (e.g., "Analyzing data...")
  - `"SUCCESS"` - Successful completion (e.g., "Data retrieved successfully")
  - `"WARNING"` - Non-critical issues (e.g., "Some data may be delayed")
  - `"ERROR"` - Failures that users should know about (e.g., "Failed to fetch data")
- `data.message` - Human-readable status message shown to user
- `data.details` - Optional array of key-value pairs for additional context
- `data.group` - Always `"reasoning"` for reasoning step updates
- `data.hidden` - Optional boolean to hide from UI (for internal logging)

**`FunctionCallSSE`** - For triggering Workspace functions (pauses agent execution)
- `event` - Always `"copilotFunctionCall"`
- `data.function` - Function name to execute. Available functions:
  - `"get_widget_data"` - Fetch data from widgets (most common)
  - `"get_extra_widget_data"` - Fetch additional widget data
  - `"get_params_options"` - Get dynamic parameter options
  - `"add_widget_to_dashboard"` - Add widget to current dashboard
  - `"update_widget_in_dashboard"` - Update existing widget parameters
  - `"assign_tasks_to_agents"` - Delegate tasks to other agents
  - `"execute_agent_tool"` - Execute MCP tools
- `data.input_arguments` - Arguments specific to the function being called
- `data.extra_state` - Optional state data to maintain between function call and response

**`CitationCollectionSSE`** - For sending source attribution all at once
- `event` - Always `"copilotCitationCollection"`
- `data.citations` - Array of `Citation` objects linking outputs to their data sources
  - Sent after analysis is complete to show where information came from
  - Ensures transparency and allows users to verify sources

### Data Format Models

**`RawObjectDataFormat`** - Most common data format for JSON/dictionary data from APIs
- `data_type` - Always `"object"`
- `parse_as` - How to interpret the data:
  - `"text"` - Plain text representation
  - `"table"` - Tabular data for display (default, most common)
  - `"chart"` - Data ready for visualization
- `chart_params` - Chart configuration required when `parse_as="chart"`
  - Specifies chart type, axes, and display parameters

**`PdfDataFormat`** - PDF document files (earnings reports, research papers, etc.)
- `data_type` - Always `"pdf"`
- `filename` - Original filename with `.pdf` extension
- Requires external libraries like `pdfplumber` for text extraction
- Common for financial documents, research reports, regulatory filings

**`SpreadsheetDataFormat`** - Excel and CSV files with structured tabular data
- `data_type` - File format: `"xlsx"`, `"xls"`, or `"csv"`
- `parse_as` - Processing approach:
  - `"text"` - Convert to plain text representation
  - `"table"` - Maintain tabular structure (default, recommended)
- `filename` - Original filename with appropriate extension
- Best handled with `pandas` for data manipulation

**`ImageDataFormat`** - Image files (charts, screenshots, diagrams)
- `data_type` - Image format: `"jpg"`, `"jpeg"`, or `"png"`
- `filename` - Original filename with image extension
- May contain charts, graphs, or screenshots from widgets
- Requires OCR libraries if text extraction is needed

**`SingleDataContent`** - Data embedded directly in the response
- `content` - The actual data content:
  - JSON string for structured data (most common)
  - Base64 encoded string for binary data (PDFs, images)
  - Plain text for simple content
- `data_format` - Format specification determining how to parse `content`
- `citable` - Boolean indicating if this data source should be cited (default: `true`)

**`SingleFileReference`** - Data available via external URL
- `url` - HTTP/HTTPS URL pointing to the data file
- `data_format` - Format specification for the file at the URL
- `citable` - Boolean indicating if this data source should be cited (default: `true`)
- Requires fetching the URL to access actual data content

**`DataContent`** - Container for multiple embedded data items
- `items` - List of `SingleDataContent` objects from the same source
- `extra_citations` - Additional `Citation` objects for this data collection
- Most widget responses return this format with multiple data items

**`DataFileReferences`** - Container for multiple external file references
- `items` - List of `SingleFileReference` objects pointing to external files
- `extra_citations` - Additional `Citation` objects for this file collection
- Less common than `DataContent`, used when data is stored externally

### Citation Models

**`Citation`** - Links outputs to data sources
- `id` - Unique citation identifier
- `source_info` - Source information
- `details` - Extra detail (e.g., page numbers)
- `quote_bounding_boxes` - PDF highlight coordinates

**`SourceInfo`** - Source attribution details
- `type` - "widget", "direct retrieval", "web", "artifact"
- `uuid` - Source UUID
- `origin` - Data origin
- `widget_id` - Widget identifier
- `name` - Source name
- `description` - Source description
- `metadata` - Additional metadata
- `citable` - Whether source is citable

### Chart Parameter Models

**`LineChartParameters`** - Time series and trends
- `chartType` - "line"
- `xKey` - X-axis variable key
- `yKey` - Y-axis variable keys (array)

**`BarChartParameters`** - Comparisons and distributions
- `chartType` - "bar"
- `xKey` - X-axis variable key
- `yKey` - Y-axis variable keys (array)

**`ScatterChartParameters`** - Correlations and relationships
- `chartType` - "scatter"
- `xKey` - X-axis variable key (numerical only)
- `yKey` - Y-axis variable keys (numerical only)

**`PieChartParameters`** - Proportions and percentages
- `chartType` - "pie"
- `angleKey` - Angle/size variable key
- `calloutLabelKey` - Label variable key

**`DonutChartParameters`** - Hierarchical proportions
- `chartType` - "donut"
- `angleKey` - Angle/size variable key
- `calloutLabelKey` - Label variable key

-->
