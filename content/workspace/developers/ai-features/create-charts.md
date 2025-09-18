---
title: Create charts
sidebar_position: 6
description: Stream inline charts as part of your agent’s response
keywords:
- charts
- visualization
- artifacts
- SSE
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="AI Features — Create charts | OpenBB Workspace Docs" />

Stream visualizations (line, bar, scatter, pie, donut) with `chart(...)`. Charts appear below the message that emitted them.

Reference implementation in [this GitHub repository](https://github.com/OpenBB-finance/agents-for-openbb/tree/main/33-vanilla-agent-charts/vanilla_agent_charts/main.py).

<img className="pro-border-gradient" width="800" alt="Charts" src="https://openbb-cms.directus.app/assets/e9d93282-20cb-4b3a-bf58-17032191e82a.png" />

## Architecture

Emit chart artifacts so visualizations render below the answer. The example shows multiple chart types in one response.

`agents.json` configuration with `widget-dashboard-select` feature enabled:

```python
return JSONResponse(content={
  "vanilla_agent_charts": {
    "endpoints": {"query": "http://localhost:7777/v1/query"},
    "features": {
      "widget-dashboard-select": False,
      "widget-dashboard-search": False,
    },
  }
})
```

### Query flow

- Process user request and prepare data for visualization
- Stream explanatory text with `message_chunk()`
- Create chart data as list of dictionaries
- Choose appropriate chart type based on data characteristics:
  - **Line/Bar/Scatter**: Use `x_key` and `y_keys` for XY data
  - **Pie/Donut**: Use `angle_key` for values, `callout_label_key` for labels
- Emit `chart()` artifacts with proper configuration
- Charts render interactively below streamed content

### OpenBB AI SDK

- `chart(type, data, x_key, y_keys, name, description)`: Creates `MessageArtifactSSE` for chart display
- Chart types: `"line"`, `"bar"`, `"scatter"`, `"pie"`, `"donut"`
- Chart parameters handled by specific models:
  - `LineChartParameters`, `BarChartParameters`, `ScatterChartParameters`
  - `PieChartParameters`, `DonutChartParameters`
- `message_chunk(text)`: Streams explanatory text around charts
- Charts support interactive features like zoom, hover, and data export

## Core logic

```python
from openbb_ai import message_chunk, chart
from openbb_ai.models import QueryRequest
import datetime

async def query(request: QueryRequest) -> EventSourceResponse:
    async def execution_loop():
        # Stream introduction
        yield message_chunk("Let me create some visualizations to illustrate the data trends.\n\n").model_dump()

        # Prepare time series data
        price_data = [
            {"date": "2024-01-01", "price": 150.0, "volume": 1200000},
            {"date": "2024-01-02", "price": 152.5, "volume": 1350000},
            {"date": "2024-01-03", "price": 148.2, "volume": 1100000},
            {"date": "2024-01-04", "price": 155.8, "volume": 1450000},
        ]

        # Create line chart for price trend
        yield chart(
            type="line",
            data=price_data,
            x_key="date",
            y_keys=["price"],
            name="Stock Price Trend",
            description="Daily stock price movement over time"
        ).model_dump()

        yield message_chunk("\n\nThe line chart shows an overall upward trend. Now let's look at volume distribution:\n\n").model_dump()

        # Create bar chart for volume
        yield chart(
            type="bar",
            data=price_data,
            x_key="date",
            y_keys=["volume"],
            name="Trading Volume",
            description="Daily trading volume by date"
        ).model_dump()

        # Portfolio allocation pie chart
        portfolio_data = [
            {"asset": "Stocks", "allocation": 60},
            {"asset": "Bonds", "allocation": 25},
            {"asset": "Cash", "allocation": 10},
            {"asset": "Real Estate", "allocation": 5}
        ]

        yield message_chunk("\n\nHere's the portfolio allocation breakdown:\n\n").model_dump()

        yield chart(
            type="pie",
            data=portfolio_data,
            angle_key="allocation",
            callout_label_key="asset",
            name="Portfolio Allocation",
            description="Investment portfolio distribution by asset class"
        ).model_dump()

    return EventSourceResponse(execution_loop(), media_type="text/event-stream")
```
