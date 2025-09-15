---
title: Agents Integration
sidebar_position: 6
description: How to integrate your own AI agent service with OpenBB Workspace
keywords:
- AI
- Agents
- Integration
- SSE
- agents.json
- QueryRequest
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Agents Integration | OpenBB Workspace Docs" />

Integrate your own stateless AI agent service with OpenBB Workspace using a simple HTTP contract. Your service streams responses back to Workspace and can access dashboard data when enabled.

## Service Endpoints

- `/agents.json` returns agent metadata and capabilities (name, description, image, `endpoints.query`, `features`).
- `/query` receives a `QueryRequest` and streams responses via Server‑Sent Events (SSE).

Recommended stack: FastAPI with `EventSourceResponse` from `sse_starlette`.

## Minimal Shape

```python
from fastapi import FastAPI
from fastapi.responses import JSONResponse
from sse_starlette.sse import EventSourceResponse
from openbb_ai.models import QueryRequest
from openbb_ai import message_chunk

app = FastAPI()

@app.get("/agents.json")
def agents_json():
    return JSONResponse(content={
        "my-agent": {
            "name": "My Agent",
            "description": "Demo agent",
            "endpoints": {"query": "http://localhost:7777/query"},
            "features": {
                "streaming": True,
                "widget-dashboard-select": False,
                "widget-dashboard-search": False,
            },
        }
    })

@app.post("/query")
async def query(request: QueryRequest):
    async def loop():
        yield message_chunk("Hello from my agent").model_dump()
    return EventSourceResponse(loop(), media_type="text/event-stream")
```

## Adding an Agent in Workspace

1. Deploy your service (locally or remote).
2. In Workspace, open “Add AI agent”.
3. Enter your base URL; Workspace fetches `/agents.json` and uses `/query` for conversations.

Ensure CORS and SSE are configured on your service.

## Next Steps

- OpenBB AI SDK: /workspace/developers/openbb-ai-sdk
- AI Features: feature guides at /workspace/developers/ai-features
- agents.json Reference: /workspace/developers/json-specs/agents-json-reference
