---
title: Create HTML artifacts
sidebar_position: 7
description: Stream inline HTML artifacts as part of your agent's response
keywords:
- html
- artifacts
- visualization
- custom rendering
- SSE
- widgets
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="AI Features — Create HTML artifacts | OpenBB Workspace Docs" />

Stream custom HTML content with `html_artifact(...)`. HTML artifacts are rendered inline in the chat and can be converted to dashboard widgets by users.

Reference implementation in [this GitHub repository](https://github.com/OpenBB-finance/agents-for-openbb/tree/main/39-vanilla-agent-html-artifacts).

<img className="pro-border-gradient" width="800" alt="Charts" src="https://openbb-cms.directus.app/assets/e74e0b8e-3858-47e8-bcd6-d59dfe1cbfe7.png" />

## Architecture

Emit HTML artifacts so custom visualizations render below the answer. HTML content is sanitized with DOMPurify before rendering for security.

`agents.json` configuration:

```python
return JSONResponse(content={
    "vanilla_agent_html": {
        "name": "HTML Artifacts Agent",
        "description": "An example agent that produces HTML artifacts rendered inline in the chat.",
        "endpoints": {"query": "/v1/query"},
        "features": {
            "streaming": True,
            "widget-dashboard-select": False,
            "widget-dashboard-search": False,
        },
    }
})
```

### Query flow

- Process user request and prepare HTML content
- Stream explanatory text with `message_chunk()`
- Create HTML content as a string (inline styles supported)
- Emit `html_artifact()` events with proper configuration
- HTML renders inline below streamed content
- Users can click widget icon to add artifacts to dashboard

### SSE event format

HTML artifacts are sent as SSE events with the following structure:

```python
{
    "event": "copilotMessageArtifact",
    "data": {
        "type": "html",
        "uuid": "unique-id",
        "name": "artifact_name",
        "description": "A description of the artifact",
        "content": "<div>Your HTML content here</div>"
    }
}
```

## Core logic

```python
import json
import uuid
from typing import AsyncGenerator
from openbb_ai import message_chunk
from openbb_ai.models import QueryRequest
from sse_starlette.sse import EventSourceResponse

def html_artifact(content: str, name: str, description: str) -> dict:
    """
    Create an HTML artifact SSE event.

    Args:
        content: The HTML content to render
        name: A unique name for the artifact
        description: A description of the artifact

    Returns:
        SSE event dict with type="html" artifact
    """
    return {
        "event": "copilotMessageArtifact",
        "data": json.dumps({
            "type": "html",
            "uuid": str(uuid.uuid4()),
            "name": name,
            "description": description,
            "content": content,
        }),
    }

# Example HTML template
DASHBOARD_CARD_HTML = """
<div style="font-family: system-ui, -apple-system, sans-serif; padding: 24px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 16px; color: white; max-width: 400px;">
  <h2 style="margin: 0 0 16px 0; font-size: 20px; font-weight: 600;">Portfolio Summary</h2>
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
    <div style="background: rgba(255,255,255,0.15); padding: 16px; border-radius: 12px;">
      <div style="font-size: 28px; font-weight: bold;">$124.5K</div>
      <div style="font-size: 13px; opacity: 0.8; margin-top: 4px;">Total Value</div>
    </div>
    <div style="background: rgba(255,255,255,0.15); padding: 16px; border-radius: 12px;">
      <div style="font-size: 28px; font-weight: bold; color: #4ade80;">+12.3%</div>
      <div style="font-size: 13px; opacity: 0.8; margin-top: 4px;">Today's Change</div>
    </div>
  </div>
</div>
"""

@app.post("/v1/query")
async def query(request: QueryRequest) -> EventSourceResponse:
    async def execution_loop() -> AsyncGenerator[dict, None]:
        client = openai.AsyncOpenAI()

        # Stream the LLM response
        async for event in await client.chat.completions.create(
            model="gpt-4o",
            messages=openai_messages,
            stream=True,
        ):
            if chunk := event.choices[0].delta.content:
                yield message_chunk(chunk).model_dump()

        # Emit HTML artifact
        yield message_chunk("\n\nHere's a portfolio dashboard card:\n\n").model_dump()
        yield html_artifact(
            content=DASHBOARD_CARD_HTML,
            name="portfolio_dashboard",
            description="A portfolio summary dashboard card",
        )

        yield message_chunk(
            "\n\nYou can click the widget icon to add this to your dashboard!"
        ).model_dump()

    return EventSourceResponse(
        content=execution_loop(),
        media_type="text/event-stream",
    )
```

## Example templates

### Metric cards

```html
<div style="font-family: system-ui, -apple-system, sans-serif; display: flex; gap: 16px; flex-wrap: wrap;">
  <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 12px; min-width: 140px;">
    <div style="color: #64748b; font-size: 13px; margin-bottom: 8px;">Revenue</div>
    <div style="font-size: 24px; font-weight: 600; color: #0f172a;">$2.4M</div>
    <div style="color: #22c55e; font-size: 13px; margin-top: 4px;">↑ 14.2%</div>
  </div>
  <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 12px; min-width: 140px;">
    <div style="color: #64748b; font-size: 13px; margin-bottom: 8px;">Users</div>
    <div style="font-size: 24px; font-weight: 600; color: #0f172a;">48.2K</div>
    <div style="color: #22c55e; font-size: 13px; margin-top: 4px;">↑ 8.1%</div>
  </div>
</div>
```

### Alert box

```html
<div style="font-family: system-ui, -apple-system, sans-serif; background: #fef3c7; border: 1px solid #f59e0b; border-radius: 12px; padding: 16px; display: flex; gap: 12px; align-items: flex-start; max-width: 500px;">
  <div style="background: #f59e0b; color: white; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-weight: bold;">!</div>
  <div>
    <div style="font-weight: 600; color: #92400e; margin-bottom: 4px;">Market Alert</div>
    <div style="color: #a16207; font-size: 14px; line-height: 1.5;">Unusual trading volume detected in AAPL. Volume is 3.2x higher than the 20-day average.</div>
  </div>
</div>
```

## Security considerations

The frontend sanitizes all HTML with DOMPurify before rendering. Keep the following in mind:

| Element/Attribute | Status |
|-------------------|--------|
| `<script>` tags | Stripped |
| `<style>` tags | Stripped |
| `<iframe>`, `<form>`, `<object>`, `<embed>` | Stripped |
| `on*` event handlers (onclick, onload, etc.) | Stripped |
| Inline styles | Supported |
| Standard HTML elements (div, span, img, etc.) | Supported |

## Best practices

- Use inline styles for all styling (external stylesheets not supported)
- Keep HTML self-contained with no external dependencies
- Use system fonts for consistent cross-platform rendering
- Test artifacts at different viewport sizes for responsiveness
- Provide meaningful `name` and `description` for widget creation
