---
title: Create tables
sidebar_position: 5
description: Stream tabular data as an artifact in the conversation
keywords:
- tables
- artifacts
- SSE
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="AI Features — Create tables | OpenBB Workspace Docs" />

Emit a table artifact with `table(...)`. Provide an array of objects; column names are inferred from object keys.

Reference implementation in [this GitHub repository](https://github.com/OpenBB-finance/agents-for-openbb/tree/main/34-vanilla-agent-tables/vanilla_agent_tables/main.py).

<img className="pro-border-gradient" width="800" alt="Tables" src="https://openbb-cms.directus.app/assets/9024844b-2b40-4878-80d0-4be2309a8297.png" />

## Architecture

Emit table artifacts in-line so tabular data renders below the answer.

`agents.json` configuration:

```python
return JSONResponse(content={
  "vanilla_agent_tables": {
    "endpoints": {"query": "http://localhost:7777/v1/query"},
    "features": {
      "widget-dashboard-select": False,
      "widget-dashboard-search": False,
    },
  }
})
```

### Query flow

- Process user request and generate data (from widgets, analysis, or computation)
- Stream explanatory text with `message_chunk()`
- Create table data as list of dictionaries (column names from object keys)
- Emit `table()` artifact with data, name, and description
- Table renders below the streamed text in Workspace UI
- Continue with additional content or complete response

### OpenBB AI SDK

- `table(data, name, description)`: Creates `MessageArtifactSSE` for table display
  - `data`: List of dictionaries where keys become column headers
  - `name`: Table title displayed in UI
  - `description`: Optional table description
- `message_chunk(text)`: Streams explanatory text before/after tables
- Tables automatically handle data formatting and sorting in UI

## Core logic

```python
from openbb_ai import message_chunk, table
from openbb_ai.models import QueryRequest

async def query(request: QueryRequest) -> EventSourceResponse:
    async def execution_loop():
        # Stream introduction
        yield message_chunk("Let me analyze the financial data and create a summary table.\n\n").model_dump()

        # Generate or process data (from widgets, calculations, etc.)
        financial_data = [
            {"symbol": "AAPL", "price": 150.25, "change": 2.5, "volume": 1200000},
            {"symbol": "MSFT", "price": 280.75, "change": -1.2, "volume": 890000},
            {"symbol": "GOOGL", "price": 2650.80, "change": 15.3, "volume": 560000},
        ]

        # Create table artifact
        yield table(
            data=financial_data,
            name="Stock Market Summary",
            description="Current stock prices with daily changes and trading volume"
        ).model_dump()

        # Stream additional analysis
        yield message_chunk("\n\nThe table above shows the current market status. AAPL and GOOGL are up, while MSFT is down slightly.").model_dump()

    return EventSourceResponse(execution_loop(), media_type="text/event-stream")
```
