---
title: Create tables
sidebar_position: 7
description: Stream tabular data as an artifact in the conversation
keywords:
- tables
- artifacts
- SSE
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="AI Features — Create tables | OpenBB Workspace Docs" />

Emit a table artifact with `table(...)`. Provide an array of objects; column names are inferred from object keys.

Reference implementation [here](https://github.com/OpenBB-finance/agents-for-openbb/blob/feat/add-agent-dashboard-widgets-example/34-vanilla-agent-tables/vanilla_agent_tables/main.py).

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
- Stream regular text with `message_chunk`.
- Emit a `table(data, name, description)` artifact. Column headers are inferred from keys.

### OpenBB AI SDK
- `table(data, name, description)`: constructs a table artifact SSE.
- `message_chunk(text)`: streams accompanying narrative.

## Core logic

```python
from openbb_ai import message_chunk, table

yield message_chunk("\n\nHere is an example table:\n\n").model_dump()
yield table(
    data=[
        {"x": 0, "y": 1, "z": 2},
        {"x": 1, "y": 2, "z": 3},
    ],
    name="My Table",
    description="Sample table",
).model_dump()
```

