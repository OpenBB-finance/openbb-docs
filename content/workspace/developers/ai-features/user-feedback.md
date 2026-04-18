---
title: User feedback
sidebar_position: 10
description: Receive and persist user feedback (thumbs up/down) from the workspace UI
keywords:
- feedback
- thumbs up
- thumbs down
- user feedback
- vote
- SSE
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="AI Features — User feedback | OpenBB Workspace Docs" />

Enable thumbs up/down buttons on agent responses and receive user feedback at a dedicated endpoint. This lets agents collect ratings, comments, and tags on their responses for quality monitoring and improvement.

Reference implementation in [this GitHub repository](https://github.com/OpenBB-finance/agents-for-openbb/tree/main/42-vanilla-agent-feedback).

<img className="pro-border-gradient" width="500" alt="Custom agent features - on and off" src="https://openbb-cms.directus.app/assets/fc5bd25c-0909-47d3-912a-44d3bbb73198.png" />

<img className="pro-border-gradient" width="500" alt="Custom agent features - on and off" src="https://openbb-cms.directus.app/assets/054422c0-f883-4456-a4c6-516440af9361.png" />

<img className="pro-border-gradient" width="500" alt="Custom agent features - on and off" src="https://openbb-cms.directus.app/assets/729268ee-2389-4fbb-bc51-5bba6d1e0943.png" />

<img className="pro-border-gradient" width="1000" alt="Custom agent features - on and off" src="https://openbb-cms.directus.app/assets/6ddfcf92-e8d8-4a58-bf06-f25bf5109182.png" />

## Architecture

Declare feedback support in the agent descriptor and expose a POST endpoint to receive votes. When feedback is enabled, the workspace renders thumbs up/down buttons on each agent response.

`agents.json` configuration:

```python
return JSONResponse(content={
    "vanilla_agent_feedback": {
        "name": "Vanilla Agent Feedback",
        "description": "A vanilla agent that receives and persists user feedback (thumbs up/down).",
        "endpoints": {
            "query": "/v1/query",
            "feedback": "/v1/feedback",
        },
        "features": {
            "streaming": True,
            "widget-dashboard-select": False,
            "widget-dashboard-search": False,
            "feedback": True,
        },
    }
})
```

- `"feedback": True` in `features` enables the thumbs up/down UI on agent responses
- `"feedback": "/v1/feedback"` in `endpoints` tells the workspace where to POST feedback data

### Query flow

- User sends a query and the agent streams a normal response
- After the response, the workspace renders thumbs up/down buttons
- User clicks a thumb and optionally adds tags or a comment
- Workspace POSTs a feedback payload to the agent's `/v1/feedback` endpoint
- Agent persists the feedback (to a file, database, or analytics service)

### OpenBB AI SDK

- `QueryRequest` and `message_chunk(text)` handle the standard query flow
- The feedback endpoint is a plain FastAPI POST route — no SDK wrapper is required
- `FeedbackRequest` is a custom Pydantic model defined by the agent

## Core logic

### Feedback model

```python
from pydantic import BaseModel

class FeedbackRequest(BaseModel):
    vote: str                  # "thumbs_up" or "thumbs_down"
    tags: list[str] = []       # e.g. ["Not factually correct / Hallucinations / Inaccurate"]
    user_comment: str = ""     # Optional free-text comment
    ai_response: str = ""      # The AI response that was rated
    user_prompt: str = ""      # The user's original prompt
    trace_id: str = ""         # Request trace ID for correlation
```

### Feedback endpoint

```python
import json
from datetime import datetime, timezone
from pathlib import Path
from fastapi.responses import JSONResponse

FEEDBACK_FILE = Path(__file__).parent.parent / "feedback.json"

@app.post("/v1/feedback")
async def feedback(request: FeedbackRequest):
    """Receive and persist user feedback to a local JSON file."""
    entry = {
        "timestamp": datetime.now(timezone.utc).isoformat(),
        **request.model_dump(),
    }

    entries = []
    if FEEDBACK_FILE.exists():
        entries = json.loads(FEEDBACK_FILE.read_text())

    entries.append(entry)
    FEEDBACK_FILE.write_text(json.dumps(entries, indent=2))

    return JSONResponse(content={"status": "ok"})
```

### Query endpoint

The query endpoint is a standard streaming handler — nothing feedback-specific is required:

```python
from typing import AsyncGenerator
import openai
from openbb_ai import message_chunk
from openbb_ai.models import MessageChunkSSE, QueryRequest
from sse_starlette.sse import EventSourceResponse

@app.post("/v1/query")
async def query(request: QueryRequest) -> EventSourceResponse:
    openai_messages = [
        {"role": "system", "content": "You are a helpful financial assistant."}
    ]

    for message in request.messages:
        if message.role == "human":
            openai_messages.append({"role": "user", "content": message.content})
        elif message.role == "ai" and isinstance(message.content, str):
            openai_messages.append({"role": "assistant", "content": message.content})

    async def execution_loop() -> AsyncGenerator[MessageChunkSSE, None]:
        client = openai.AsyncOpenAI()
        async for event in await client.chat.completions.create(
            model="gpt-4o",
            messages=openai_messages,
            stream=True,
        ):
            if chunk := event.choices[0].delta.content:
                yield message_chunk(chunk).model_dump()

    return EventSourceResponse(
        content=execution_loop(),
        media_type="text/event-stream",
    )
```

## Feedback payload

The workspace sends the following JSON to the feedback endpoint:

```json
{
  "vote": "thumbs_up",
  "tags": ["Not factually correct / Hallucinations / Inaccurate"],
  "user_comment": "Optional additional comment",
  "ai_response": "The AI response that was rated",
  "user_prompt": "The user's original prompt",
  "trace_id": "request-trace-id"
}
```

| Field | Type | Description |
|-------|------|-------------|
| `vote` | string | `"thumbs_up"` or `"thumbs_down"` |
| `tags` | string[] | Predefined feedback categories selected by the user |
| `user_comment` | string | Optional free-text comment |
| `ai_response` | string | The agent response that was rated |
| `user_prompt` | string | The user's original prompt |
| `trace_id` | string | Trace ID for correlating feedback with requests |
