---
title: Omni, SQL, Python
sidebar_position: 12
description: Learn how to create versatile Omni widgets for OpenBB Workspace that can dynamically return different content types based on input parameters, including SQL query and Python chart widgets.
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
- SQL widget
- Python widget
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Omni, SQL, Python | OpenBB Workspace Docs" />

The Omni widget is a versatile widget type that can dynamically return different content formats (markdown, tables, or charts). Unlike other widgets that use GET requests, the Omni widget uses POST requests and passes all parameters in the request body. This widget requires the `prompt` parameter to be passed in the params section of the widget configuration.

<img className="pro-border-gradient" width="800" alt="Basic Plotly Chart Example" src="https://openbb-cms.directus.app/assets/8740e757-a800-41b7-809c-f0ef3def1729.png" />

## Basic Omni Widget

Below is an example of a basic Omni widget that demonstrates the versatility by returning different content types based on the `type` parameter. In a real world example you might choose to dynamically return different content types based on your backend logic.

<img className="pro-border-gradient" width="800" alt="Omni Widget Example" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/omni-widget.png" />

```python
import json
from fastapi import FastAPI, Body
import plotly.graph_objects as go
from pydantic import BaseModel, Field
from typing import Any, Literal

app = FastAPI()

class DataFormat(BaseModel):
    data_type: str
    parse_as: Literal["text", "table", "chart"]

class OmniWidgetResponse(BaseModel):
    content: Any
    data_format: DataFormat
    citable: bool = Field(default=False)

@app.post("/omni-widget")
async def get_omni_widget_post(data: str | dict = Body(...)):
    """Basic Omni Widget example showing different return types"""
    if isinstance(data, str):
        data = json.loads(data)

    prompt = data.get("prompt", "Hello World")

    if data.get("type") == "table":
        # 2x2 matrix with prompt value in all cells
        content = [
            {"col1": prompt, "col2": prompt},
            {"col1": prompt, "col2": prompt},
        ]
        return OmniWidgetResponse(
            content=content,
            data_format=DataFormat(data_type="object", parse_as="table"),
            citable=False,
        )

    if data.get("type") == "chart":
        fig = go.Figure()
        fig.add_trace(
            go.Scatter(x=[1, 2, 3], y=[1, 3, 2], mode="lines", line=dict(color="#26a69a"))
        )
        fig.update_layout(title=prompt, showlegend=False)

        content = json.loads(fig.to_json())

        return OmniWidgetResponse(
            content=content,
            data_format=DataFormat(data_type="object", parse_as="chart"),
            citable=False,
        )

    # Default to markdown - just output the prompt
    return OmniWidgetResponse(
        content=prompt,
        data_format=DataFormat(data_type="object", parse_as="text"),
        citable=False,
    )
```

### Widget Configuration

```json
{
  "omni_widget": {
    "name": "Basic Omni Widget",
    "description": "A versatile omni widget that can display multiple types of content",
    "category": "General",
    "type": "omni",
    "endpoint": "omni-widget",
    "params": [
      {
        "paramName": "prompt",
        "type": "text",
        "description": "The prompt to send to the widget",
        "label": "Prompt",
        "show": false
      },
      {
        "paramName": "type",
        "type": "text",
        "description": "Type of content to return",
        "label": "Content Type",
        "show": true,
        "options": [
          {"value": "markdown", "label": "Markdown"},
          {"value": "chart", "label": "Chart"},
          {"value": "table", "label": "Table"}
        ]
      }
    ],
    "gridData": {"w": 30, "h": 12}
  }
}
```

## SQL Query Widget

This example demonstrates an Omni widget that executes SQL queries against mock data. The `language` parameter enables SQL syntax highlighting in the input.


<img className="pro-border-gradient" width="800" alt="Basic Plotly Chart Example" src="https://openbb-cms.directus.app/assets/e7c186e2-753b-4ae9-8b86-990f0b93c008.png" />


```python
import json
import sqlite3
import re
from fastapi import FastAPI, Body

app = FastAPI()

# Mock data for SQL widget
MOCK_DATA = [
    {"id": 1, "symbol": "AAPL", "name": "Apple Inc.", "price": 150.25, "volume": 45000000, "sector": "Technology"},
    {"id": 2, "symbol": "MSFT", "name": "Microsoft Corporation", "price": 350.50, "volume": 32000000, "sector": "Technology"},
    {"id": 3, "symbol": "GOOGL", "name": "Alphabet Inc.", "price": 140.75, "volume": 28000000, "sector": "Technology"},
    {"id": 4, "symbol": "AMZN", "name": "Amazon.com Inc.", "price": 178.25, "volume": 38000000, "sector": "Consumer Cyclical"},
    {"id": 5, "symbol": "TSLA", "name": "Tesla Inc.", "price": 245.80, "volume": 52000000, "sector": "Automotive"},
    {"id": 6, "symbol": "JPM", "name": "JPMorgan Chase", "price": 195.30, "volume": 12000000, "sector": "Financial"},
    {"id": 7, "symbol": "V", "name": "Visa Inc.", "price": 275.40, "volume": 8000000, "sector": "Financial"},
    {"id": 8, "symbol": "JNJ", "name": "Johnson & Johnson", "price": 155.60, "volume": 6500000, "sector": "Healthcare"},
    {"id": 9, "symbol": "WMT", "name": "Walmart Inc.", "price": 165.20, "volume": 7200000, "sector": "Consumer Defensive"},
    {"id": 10, "symbol": "PG", "name": "Procter & Gamble", "price": 158.90, "volume": 5800000, "sector": "Consumer Defensive"},
]


def execute_sql_on_mock_data(sql: str) -> list[dict]:
    """Execute SQL query against mock data using in-memory SQLite"""
    conn = sqlite3.connect(":memory:")
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()

    # Create table and insert mock data
    cursor.execute("""
        CREATE TABLE stocks (
            id INTEGER,
            symbol TEXT,
            name TEXT,
            price REAL,
            volume INTEGER,
            sector TEXT
        )
    """)

    for row in MOCK_DATA:
        cursor.execute(
            "INSERT INTO stocks VALUES (?, ?, ?, ?, ?, ?)",
            (row["id"], row["symbol"], row["name"], row["price"], row["volume"], row["sector"])
        )
    conn.commit()

    # Execute the user's query (replace DATA with stocks)
    normalized_sql = re.sub(r'\bDATA\b', 'stocks', sql, flags=re.IGNORECASE)
    cursor.execute(normalized_sql)
    rows = cursor.fetchall()
    conn.close()

    return [dict(row) for row in rows]


@app.post("/omni-sql-widget")
async def get_omni_sql_widget(data: str | dict = Body(...)):
    """SQL Query Widget - executes SQL against mock stock data"""
    if isinstance(data, str):
        data = json.loads(data)

    sql_query = data.get("prompt", "SELECT * FROM DATA LIMIT 5")

    try:
        results = execute_sql_on_mock_data(sql_query)

        if not results:
            return OmniWidgetResponse(
                content="No results found for the query.",
                data_format=DataFormat(data_type="object", parse_as="text"),
                citable=False,
            )

        return OmniWidgetResponse(
            content=results,
            data_format=DataFormat(data_type="object", parse_as="table"),
            citable=False,
        )

    except Exception as e:
        error_content = f"""### SQL Query Error

**Query:** `{sql_query}`

**Error:** {str(e)}

**Available columns:** id, symbol, name, price, volume, sector

**Example queries:**
- `SELECT * FROM DATA LIMIT 5`
- `SELECT symbol, price FROM DATA WHERE sector = 'Technology'`
- `SELECT sector, AVG(price) as avg_price FROM DATA GROUP BY sector`
"""
        return OmniWidgetResponse(
            content=error_content,
            data_format=DataFormat(data_type="object", parse_as="text"),
            citable=False,
        )
```

### SQL Widget Configuration

```json
{
  "omni_sql_widget": {
    "name": "SQL Query Widget",
    "description": "Execute SQL queries against mock stock data. Use 'DATA' as the table name.",
    "category": "General",
    "type": "omni",
    "endpoint": "omni-sql-widget",
    "params": [
      {
        "paramName": "prompt",
        "type": "text",
        "description": "Enter a SQL query. Available columns: id, symbol, name, price, volume, sector",
        "label": "SQL Query",
        "value": "SELECT * FROM DATA LIMIT 5",
        "show": false,
        "language": "sql"
      }
    ],
    "gridData": {"w": 30, "h": 12}
  }
}
```

Note the `language: "sql"` parameter which enables SQL syntax highlighting in the input field.

## Python Widget

This example demonstrates an Omni widget that executes Python code to create Plotly charts dynamically.

<img className="pro-border-gradient" width="800" alt="Basic Plotly Chart Example" src="https://openbb-cms.directus.app/assets/a39f2dbb-12f5-47c5-93fa-9206c7435545.png" />


```python
import json
from fastapi import FastAPI, Body
import plotly.graph_objects as go

app = FastAPI()

DEFAULT_PYTHON_CODE = '''# Create a simple bar chart
fig = go.Figure()

fig.add_trace(go.Bar(
    x=["Q1", "Q2", "Q3", "Q4"],
    y=[100, 150, 130, 180],
    name="Revenue",
    marker_color="#26a69a"
))

fig.add_trace(go.Bar(
    x=["Q1", "Q2", "Q3", "Q4"],
    y=[80, 120, 110, 150],
    name="Profit",
    marker_color="#ef5350"
))

fig.update_layout(
    title="Quarterly Performance",
    barmode="group",
    xaxis_title="Quarter",
    yaxis_title="Amount ($M)"
)'''


@app.post("/omni-python-widget")
async def get_omni_python_widget(data: str | dict = Body(...)):
    """Python Chart Widget - executes Python code to create Plotly charts"""
    if isinstance(data, str):
        data = json.loads(data)

    python_code = data.get("prompt", DEFAULT_PYTHON_CODE)

    try:
        # Create a restricted namespace for execution
        namespace = {"go": go}
        exec(python_code, namespace)

        fig = namespace.get("fig")
        if fig is None:
            return OmniWidgetResponse(
                content="Error: No 'fig' variable found. Please assign your Plotly figure to 'fig'.",
                data_format=DataFormat(data_type="object", parse_as="text"),
                citable=False,
            )

        content = json.loads(fig.to_json())

        return OmniWidgetResponse(
            content=content,
            data_format=DataFormat(data_type="object", parse_as="chart"),
            citable=False,
        )

    except Exception as e:
        error_content = f"### Python Execution Error\n\n**Error:** {str(e)}\n\n**Example code:**\n\nfig = go.Figure()\nfig.add_trace(go.Bar(x=['A', 'B', 'C'], y=[1, 2, 3]))"
        return OmniWidgetResponse(
            content=error_content,
            data_format=DataFormat(data_type="object", parse_as="text"),
            citable=False,
        )
```

### Python Widget Configuration

```json
{
  "omni_python_widget": {
    "name": "Python Chart Widget",
    "description": "Write Python code to create Plotly charts. Use 'fig' as the figure variable.",
    "category": "General",
    "type": "omni",
    "endpoint": "omni-python-widget",
    "params": [
      {
        "paramName": "prompt",
        "type": "text",
        "description": "Enter Python code to create a Plotly chart. Use 'go' for plotly.graph_objects.",
        "label": "Python Code",
        "show": false,
        "language": "python"
      }
    ],
    "gridData": {"w": 30, "h": 12}
  }
}
```

Note the `language: "python"` parameter which enables Python syntax highlighting in the input field.

## Important Implementation Notes

### POST Request Method

Unlike other widget types that use GET requests, the Omni widget uses POST requests. This allows for more complex parameter handling and larger payloads:

```python
@app.post("/omni-widget")  # Note: POST, not GET
async def omni_endpoint(
    data: str | dict = Body(...)      # Main parameters in request body
):
    # Handle both string and dict formats
    if isinstance(data, str):
        data = json.loads(data)

    # All widget parameters are available in the 'data' object
    param_value = data.get("paramName")
```

### Dynamic Output Control

<img className="pro-border-gradient" width="800" alt="Basic Plotly Chart Example" src="https://openbb-cms.directus.app/assets/039a99d7-1b18-4501-b477-d233256b5ff7.png" />

The Omni widget can return different content types based on the parse_as field in the DataFormat:

- "text": For markdown/text content
- "table": For tabular data (list of dictionaries)
- "chart": For Plotly chart objects

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

### Language Parameter

The `language` parameter in widget configuration enables syntax highlighting for the input:

```json
{
  "paramName": "prompt",
  "type": "text",
  "language": "sql"  // or "python" or nothing for text
}
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
        "show": false
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

### Hide text/SQL/Python Area

You can edit the input area text and run each widget with the run button.

<img className="pro-border-gradient" width="800" alt="Basic Plotly Chart Example" src="https://openbb-cms.directus.app/assets/8740e757-a800-41b7-809c-f0ef3def1729.png" />

But once you are happy you can hide that input area and when you want to run it again you can just click on the run button on the top left corner, and the business logic remains.

<img className="pro-border-gradient" width="800" alt="Basic Plotly Chart Example" src="https://openbb-cms.directus.app/assets/4d32eeeb-2d39-4c4e-a7fd-54bdac58da20.png" />



## Use Cases

The Omni widget is particularly useful for:

- AI/LLM Integration: Dynamic content generation based on user prompts
- Multi-format Data Display: Single endpoint that can return different visualizations
- SQL Query Interfaces: Execute queries and display results as tables
- Code Execution: Run Python code to generate charts dynamically
- Citation-heavy Applications: Research tools that need to track data sources
