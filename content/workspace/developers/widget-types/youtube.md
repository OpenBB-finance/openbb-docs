---
title: YouTube
sidebar_position: 12
description: Learn how to create YouTube video widgets in OpenBB Workspace, including basic video embedding and transcript support for AI assistants.
keywords:
- youtube widget
- video widget
- youtube embed
- video player
- transcript
- AI context
- OpenBB Workspace
- widget development
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="YouTube | OpenBB Workspace Docs" />

A widget that embeds and displays YouTube videos. The YouTube widget supports two modes: basic video playback and video with transcript support for AI context.

## Basic YouTube Widget

A simple widget that displays a YouTube video player. The endpoint returns the YouTube video URL as plain text.

<img className="pro-border-gradient" width="800" alt="Basic YouTube Widget" src="https://openbb-cms.directus.app/assets/f30f91a8-340e-46f5-a690-18e01a9d7447.png" />

```python
from fastapi import Query
from fastapi.responses import PlainTextResponse
from typing import List
from pydantic import BaseModel

class FileOption(BaseModel):
    label: str
    value: str

# Sample YouTube videos data
SAMPLE_VIDEOS = [
    {
        "name": "OpenBB Workspace Demo",
        "url": "https://www.youtube.com/watch?v=uYyhswnZkSw",
    },
    {
        "name": "Open Data Platform Demo",
        "url": "https://www.youtube.com/watch?v=MSlhOFxEdxg",
    }
]

# Options endpoint for video selection dropdown
@app.get("/get_video_options")
async def get_video_options() -> List[FileOption]:
    """Get list of available videos"""
    return [
        FileOption(label=video["name"], value=video["name"])
        for video in SAMPLE_VIDEOS
    ]

# YouTube widget - video player only
@register_widget({
    "name": "Video Library",
    "description": "View YouTube videos",
    "type": "youtube",
    "endpoint": "/get_video",
    "gridData": {"w": 20, "h": 12},
    "params": [
        {
            "paramName": "video_name",
            "description": "Video to display",
            "type": "endpoint",
            "label": "Video",
            "optionsEndpoint": "/get_video_options",
            "value": "OpenBB Workspace Demo",
        }
    ]
})
@app.get("/get_video")
async def get_video(
    video_name: str = Query("", description="Selected video"),
):
    """Get YouTube video URL"""
    video = next((v for v in SAMPLE_VIDEOS if v["name"] == video_name), None)

    if not video:
        return PlainTextResponse(content="")

    return PlainTextResponse(content=video["url"])
```

The widget configuration specifies `"type": "youtube"` which tells OpenBB Workspace to render the returned URL in an embedded YouTube player.

## YouTube Widget with Transcript Support

This variant adds transcript support for AI assistants. When the `raw` configuration is set to `True`, the frontend will request the endpoint with `?raw=true` to get the transcript content instead of the video URL.

<div style={{display: 'flex', gap: '10px'}}>
<img className="pro-border-gradient" width="49%" alt="YouTube Widget with Transcript Support" src="https://openbb-cms.directus.app/assets/da80b714-c121-49de-ac73-c4b9b587ed83.png" />
<img className="pro-border-gradient" width="49%" alt="YouTube Widget AI Context" src="https://openbb-cms.directus.app/assets/ef5c1a64-c009-4b19-b2e3-d0742ded8de4.png" />
</div>

```python
from fastapi import Query
from fastapi.responses import PlainTextResponse
from typing import List
from pydantic import BaseModel

class FileOption(BaseModel):
    label: str
    value: str

# Sample YouTube videos data with transcripts
SAMPLE_VIDEOS = [
    {
        "name": "OpenBB Workspace Demo",
        "url": "https://www.youtube.com/watch?v=uYyhswnZkSw",
        "transcript": "# OpenBB Workspace Demo\n\nThis video demonstrates the OpenBB Workspace features..."
    },
    {
        "name": "Open Data Platform Demo",
        "url": "https://www.youtube.com/watch?v=MSlhOFxEdxg",
        "transcript": "# Open Data Platform Demo\n\nIn this video we explore the Open Data Platform..."
    }
]

# Options endpoint for video selection dropdown
@app.get("/get_video_options")
async def get_video_options() -> List[FileOption]:
    """Get list of available videos"""
    return [
        FileOption(label=video["name"], value=video["name"])
        for video in SAMPLE_VIDEOS
    ]

# YouTube widget with transcript support for AI
@register_widget({
    "name": "Video Library with Transcript",
    "description": "View YouTube videos with transcript support for AI",
    "type": "youtube",
    "endpoint": "/get_video_with_transcript",
    "raw": True,
    "gridData": {"w": 20, "h": 12},
    "params": [
        {
            "paramName": "video_name",
            "description": "Video to display",
            "type": "endpoint",
            "label": "Video",
            "optionsEndpoint": "/get_video_options",
            "value": "OpenBB Workspace Demo",
        }
    ]
})
@app.get("/get_video_with_transcript")
async def get_video_with_transcript(
    video_name: str = Query("", description="Selected video"),
    raw: bool = Query(False, description="Return transcript instead of URL"),
):
    """Get YouTube video URL or transcript"""
    video = next((v for v in SAMPLE_VIDEOS if v["name"] == video_name), None)

    if not video:
        return PlainTextResponse(content="*No video selected*" if raw else "")

    if raw:
        return PlainTextResponse(content=video["transcript"], media_type="text/markdown")

    return PlainTextResponse(content=video["url"])
```

### How AI Context Works

When `"raw": True` is set in the widget configuration:

1. **Normal viewing**: The frontend requests the endpoint without the `raw` parameter (or `raw=false`), and the endpoint returns the YouTube URL for the video player.

2. **AI context**: When an AI assistant needs to understand the widget content, the frontend requests the endpoint with `?raw=true`, and the endpoint returns the transcript in markdown format.

This allows AI assistants to read and understand the video content without having to watch the video, enabling them to answer questions about the video or provide summaries.

## Key Configuration Options

| Property | Type | Description |
|----------|------|-------------|
| `type` | `string` | Must be `"youtube"` for YouTube widgets |
| `raw` | `boolean` | Set to `True` to enable transcript requests for AI context |
| `endpoint` | `string` | The endpoint that returns the video URL (or transcript when `raw=true`) |
| `gridData` | `object` | Widget dimensions (`w` for width, `h` for height) |

## Response Format

- **Video URL**: Return as `PlainTextResponse` with the full YouTube URL (e.g., `https://www.youtube.com/watch?v=VIDEO_ID`)
- **Transcript**: Return as `PlainTextResponse` with `media_type="text/markdown"` for formatted content
