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

## Architecture

- `/agents.json` returns agent metadata and capabilities (name, description, image, `endpoints.query`, `features`).
- `/query` receives a `QueryRequest` and streams responses via Server‑Sent Events (SSE).

Recommended stack: FastAPI with `EventSourceResponse` from `sse_starlette` and OpenBB AI SDK (`openbb-ai`).

See this repository to [get started](https://github.com/OpenBB-finance/agents-for-openbb).

## Adding an Agent in Workspace

1. Deploy your service (locally or remote).

2. In Workspace, click on the copilot and on the plus or pencil icon.

<img className="pro-border-gradient" width="400" alt="No tab no param primary" src="https://openbb-cms.directus.app/assets/412540b0-ef86-4285-8303-b9faf83bdc66.png" />

3. Enter your base URL; Workspace fetches `/agents.json` and uses `/query` for conversations.

<img className="pro-border-gradient" width="800" alt="No tab no param primary" src="https://openbb-cms.directus.app/assets/ce3bebd7-98cf-4598-9d6c-68a2ecc1ba1c.png" />

Ensure CORS and SSE are configured on your service.

## Example

Simplistic example that allows users to communicate with an agent that can just improve the user prompt. The code is open source [here](https://github.com/OpenBB-finance/agents-for-openbb/tree/feat/add-agent-dashboard-widgets-example/financial-prompt-optimizer).

<img className="pro-border-gradient" width="800" alt="No tab no param primary" src="https://openbb-cms.directus.app/assets/d2eaa645-eb6e-4411-b9d1-74b70409483a.png" />

But this agent does nothing else - it doesn't parse data added to context, doesn't pass data in the dashboard, doesn't share step-by-step reasoning or citations, doesn't create artifacts, etc. We will dive on each of these features in the AI features tab.

```python
from typing import AsyncGenerator
import openai

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from sse_starlette.sse import EventSourceResponse

from openbb_ai.models import MessageChunkSSE, QueryRequest
from openbb_ai import message_chunk

from openai.types.chat import (
    ChatCompletionMessageParam,
    ChatCompletionUserMessageParam,
    ChatCompletionAssistantMessageParam,
    ChatCompletionSystemMessageParam,
)


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/agents.json")
def get_copilot_description():
    """Agent descriptor for the OpenBB Workspace."""
    return JSONResponse(
        content={
            "financial_prompt_optimizer": {
                "name": "Financial Prompt Optimizer",
                "description": "Optimizes a user's prompt for finance: clearer, more specific, and actionable.",
                "image": "https://github.com/OpenBB-finance/copilot-for-terminal-pro/assets/14093308/7da2a512-93b9-478d-90bc-b8c3dd0cabcf",
                "endpoints": {"query": "http://localhost:7777/v1/query"},
                "features": {
                    "streaming": True,
                    "widget-dashboard-select": False,
                    "widget-dashboard-search": False,
                },
            }
        }
    )


@app.post("/v1/query")
async def query(request: QueryRequest) -> EventSourceResponse:
    """Stream a concise optimized prompt and rationale."""

    openai_messages: list[ChatCompletionMessageParam] = [
        ChatCompletionSystemMessageParam(
            role="system",
            content=(
                "You are a concise Financial Prompt Optimizer.\n"
                "Rewrite the user's prompt to be clearer, more specific, and immediately actionable for financial analysis.\n"
                "Always return exactly the improved prompt:\n"
                "Optimized Prompt: <detailed improved prompt with step-by-step>\n"
            ),
        )
    ]

    for message in request.messages:
        if message.role == "human":
            openai_messages.append(
                ChatCompletionUserMessageParam(role="user", content=message.content)
            )
        elif message.role == "ai" and isinstance(message.content, str):
            openai_messages.append(
                ChatCompletionAssistantMessageParam(
                    role="assistant", content=message.content
                )
            )

    async def execution_loop() -> AsyncGenerator[MessageChunkSSE, None]:
        client = openai.AsyncOpenAI()
        async for event in await client.chat.completions.create(
            model="gpt-4o",
            messages=openai_messages,
            stream=True,
        ):
            if chunk := event.choices[0].delta.content:
                yield message_chunk(chunk)

    return EventSourceResponse(
        content=(
            event.model_dump(exclude_none=True) async for event in execution_loop()
        ),
        media_type="text/event-stream",
    )


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("main:app", host="0.0.0.0", port=7777, reload=True)
```
