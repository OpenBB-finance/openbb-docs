---
title: Omni
sidebar_position: 19
description: Learn how to create versatile Omni widgets for OpenBB Workspace that can dynamically return different content types based on input parameters.
keywords:
- omni widget
- dynamic content
- POST request
- multi-format output
- widget configuration
- citations
- flexible widgets
- OpenBB Workspace
- widget development
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Omni Widget | OpenBB Workspace Docs" />

The Omni widget is a versatile widget type that can dynamically return different content formats (markdown, tables, or charts). Unlike other widgets that use GET requests, the Omni widget uses POST requests and passes all parameters in the request body. This widget requires the `prompt` parameter to be passed in the params section of the widget configuration.

## Key Features

- **Dynamic Output Control**: Can return different content types (text, table, chart)
- **Create Widgets from Responses**: Create widgets directly from the response types returned by the backend.
- **POST Request Method**: Uses POST instead of GET, with parameters passed in the request body
- **Citation Support**: Built-in support for adding citations and source information
- **Flexible Parameter Handling**: All widget parameters are passed in the POST data

## Basic Omni Widget

Below is an example of a basic Omni widget that demonstrates the versatility by returning different content types based on the `type` parameter. In a real world example you might choose to dynamically return different content types based on your backend logic.

<img className="pro-border-gradient" width="800" alt="Omni Widget Example" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/omni-widget.png" />

```python
from pydantic import BaseModel, Field
from typing import Any, List, Literal
from uuid import UUID
from fastapi import FastAPI, Body, Query
import json

class DataFormat(BaseModel):
    data_type: str
    parse_as: Literal["text", "table", "chart"]

class OmniWidgetResponse(BaseModel):
    content: Any
    data_format: DataFormat
    extra_citations: list[ExtraCitation] | None = Field(default_factory=list)
    citable: bool = Field(default=True)

@register_widget({
    "name": "Omni Widget Example",
    "description": "A versatile omni widget that can display multiple types of content",
    "category": "General",
    "type": "omni",
    "endpoint": "omni-widget",
    "params": [
        {
            "paramName": "prompt",
            "type": "text",
            "description": "The prompt to send to the LLM to make queries or ask questions.",
            "label": "Prompt",
            "show": False
        },
        {
            "paramName": "type",
            "type": "text",
            "description": "Type of content to return",
            "label": "Content Type",
            "show": True,
            "options": [
                {"value": "markdown", "label": "Markdown"},
                {"value": "chart", "label": "Chart"},
                {"value": "table", "label": "Table"}
            ]
        }
    ],
    "gridData": {"w": 30, "h": 12}
})
@app.post("/omni-widget")
async def get_omni_widget(
    search: str = Query(default="search"),
    data: str | dict = Body(...)
):
    if isinstance(data, str):
        data = json.loads(data)

    # Return table format
    if data.get("type") == "table":
        content = [
            {"col1": "value1", "col2": "value2", "col3": "value3", "col4": "value4"},
            {"col1": "value5", "col2": "value6", "col3": "value7", "col4": "value8"},
            {"col1": "value9", "col2": "value10", "col3": "value11", "col4": "value12"},
        ]
        
        return OmniWidgetResponse(
            content=content,
            data_format=DataFormat(data_type="object", parse_as="table")
        )

    # Return chart format
    if data.get("type") == "chart":
        content = {
            "data": [
                {"x": [1, 2, 3], "y": [4, 1, 2], "type": "bar"},
                {"x": [1, 2, 3], "y": [2, 4, 5], "type": "bar"},
                {"x": [1, 2, 3], "y": [2, 3, 6], "type": "bar"},
            ],
            "layout": {
                "title": "Dynamic Chart",
                "template": "plotly_dark"
            },
        }
        
        return OmniWidgetResponse(
            content=content,
            data_format=DataFormat(data_type="object", parse_as="chart")
        )

    # Return markdown format (default)
    content = f"""### Dynamic Omni Widget Response

**Input Parameters:**
- **Search Query:** `{search}`
- **Content Type:** `{data.get('type', 'markdown')}`
- **Prompt:** `{data.get('prompt', 'No prompt provided')}`

#### Raw Data:
    {json.dumps(data, indent=2)}        

    """
        
    return OmniWidgetResponse(
        content=content,
        data_format=DataFormat(data_type="object", parse_as="text")
    )
```

## Omni Widget with Citations

This example demonstrates how to add citation support to your Omni widget, which is useful when you want to use the widget in conjunction with an agent. The citations are added to the response if the `citable` parameter is set to `True`. This is shown in the example below and returned when the user is interacting with the widget through an agent.

<img className="pro-border-gradient" width="800" alt="Omni Widget with Citations Example" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/omni-widget+with+citation.png" />

```python
@register_widget({
    "name": "Omni Widget with Citations",
    "description": "An omni widget that includes citation information",
    "category": "General",
    "type": "omni",
    "endpoint": "omni-widget-citations",
    "params": [
        {
            "paramName": "prompt",
            "type": "text",
            "description": "The prompt to send to the LLM to make queries or ask questions.",
            "label": "Prompt",
            "show": True
        },
        {
            "paramName": "include_metadata",
            "type": "boolean",
            "description": "Include metadata in response",
            "label": "Include Metadata",
            "show": True,
            "value": True
        }
    ],
    "gridData": {"w": 30, "h": 15}
})
@app.post("/omni-widget-citations")
async def get_omni_widget_with_citations(
    search: str = Query(default=""),
    data: str | dict = Body(...)
):
    if isinstance(data, str):
        data = json.loads(data)

    # Create citation information
    source_info = SourceInfo(
        type="widget",
        widget_id="omni_widget_citations",
        origin="custom_backend",
        name="Omni Widget with Citations",
        description="Example widget demonstrating citation functionality",
        metadata={
            "prompt": data.get("prompt", ""),
            "search_term": search,
            "timestamp": "2024-01-01T00:00:00Z",
            "data_source": "Custom API"
        }
    )
    
    extra_citation = ExtraCitation(
        source_info=source_info,
        details=[
            {
                "Source": "Custom Backend API",
                "Prompt": data.get("prompt", ""),
                "Search": search,
                "Metadata_Included": data.get("include_metadata", False),
                "Response_Type": "Dynamic Content"
            }
        ]
    )

    # Generate content based on parameters
    content = f"""# Query Results

**Search Query:** {search}
**User Prompt:** {data.get('prompt', 'No prompt provided')}

## Results
This is dynamically generated content based on your input parameters.

### Metadata
"""
    
    if data.get("include_metadata"):
        content += f"""
- **Widget ID:** omni_widget_citations
- **Timestamp:** 2024-01-01T00:00:00Z
- **Data Source:** Custom API
- **Parameters:** {json.dumps(data, indent=2)}
"""
    else:
        content += "Metadata hidden (set 'Include Metadata' to true to view)"

    return OmniWidgetResponse(
        content=content,
        data_format=DataFormat(data_type="object", parse_as="text"),
        extra_citations=[extra_citation],
        citable=True
    )
```

## Important Implementation Notes

### POST Request Method

Unlike other widget types that use GET requests, the Omni widget uses POST requests. This allows for more complex parameter handling and larger payloads:

```python
@app.post("/omni-widget")  # Note: POST, not GET
async def omni_endpoint(
    search: str = Query(default=""),  # Query parameters still available
    data: str | dict = Body(...)      # Main parameters in request body
):
    # Handle both string and dict formats
    if isinstance(data, str):
        data = json.loads(data)
    
    # All widget parameters are available in the 'data' object
    param_value = data.get("paramName")
```

### Dynamic Output Control

The Omni widget can return different content types based on the parse_as field in the DataFormat:

"text": For markdown/text content
"table": For tabular data (list of dictionaries)
"chart": For Plotly chart objects

```python
# Text/Markdown output
return OmniWidgetResponse(
    content="# Markdown content",
    data_format=DataFormat(data_type="object", parse_as="text")
)
```

```python
# Table output
return OmniWidgetResponse(
    content=[{"col1": "val1", "col2": "val2"}],
    data_format=DataFormat(data_type="object", parse_as="table")
)   
```

```python
# Chart output
return OmniWidgetResponse(
    content={"data": [...], "layout": {...}},
    data_format=DataFormat(data_type="object", parse_as="chart")
)
```

### Parameter Handling

All widget parameters defined in the widget configuration are passed in the POST request body, and the `prompt` parameter is required:

```json
{
  "params": [
    {
        // Required parameter for the LLM to make queries or ask questions
        "paramName": "prompt",
        "type": "text",
        "description": "The prompt to send to the LLM to make queries or ask questions.",
        "label": "Prompt",
        "show": False
    }
    {
        "paramName": "user_input",
        "type": "text",
        "label": "User Input"
    },
    {
        "paramName": "option_select",
        "type": "text",
        "options": [...]
    }
  ]
}
```

These parameters are accessible in your endpoint:

```python
@app.post("/omni-widget")
async def omni_endpoint(data: dict = Body(...)):
    user_input = data.get("user_input")
    selected_option = data.get("option_select")
    prompt = data.get("prompt")
    # Process parameters...
```

## Use Cases

The Omni widget is particularly useful for:

- AI/LLM Integration: Dynamic content generation based on user prompts
- Multi-format Data Display: Single endpoint that can return different visualizations
- Citation-heavy Applications: Research tools that need to track data sources.