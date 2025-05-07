---
title: Markdown with Images
sidebar_position: 6
description: Guide to using markdown widgets with local and remote images in OpenBB Workspace
keywords:
- widgets
- markdown
- images
- base64
- file handling
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Markdown with Images | OpenBB Workspace Docs" />

The Markdown widget provides secure image handling capabilities, supporting both local and remote images. Images are converted to base64 format for secure display, ensuring that sensitive data remains protected while maintaining the visual integrity of your content.

Note: This prevents potential security vulnerabilities that could arise from direct file access or unsecured image URLs.

## Markdown Widget with Local Image

A widget that displays markdown content with an embedded local image. The image is converted to base64 for display.

<img className="pro-border-gradient" width="800" alt="Markdown Widget with Local Image Example" src="https://openbb-cms.directus.app/assets/f2847732-a01e-4146-8095-5dc389c98c7a.png" />

```python
@register_widget({
    "name": "Markdown Widget with Local Image",
    "description": "A markdown widget with a local image",
    "type": "markdown",
    "endpoint": "markdown_widget_with_local_image",
    "gridData": {"w": 20, "h": 20},
})
@app.get("/markdown_widget_with_local_image")
def markdown_widget_with_local_image():
    """Returns a markdown widget with a local image"""
    try:
        with open("img.png", "rb") as image_file:
            image_base64 = base64.b64encode(image_file.read()).decode('utf-8')
            return f"![Local Image](data:image/png;base64,{image_base64})"
    except FileNotFoundError:
        raise HTTPException(
            status_code=500,
            detail="Image file not found"
        ) from e
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Error reading image: {str(e)}"
        ) from e
```

## Markdown Widget with Image from URL

A widget that displays markdown content with an image fetched from a URL. The image is converted to base64 for secure display.

<img className="pro-border-gradient" width="800" alt="Markdown Widget with Image from URL Example" src="https://openbb-cms.directus.app/assets/bf26f507-ec62-45d8-bec2-531fe75624e4.png" />

```python
@register_widget({
    "name": "Markdown Widget with Image from URL",
    "description": "A markdown widget with an image from a URL",
    "type": "markdown",
    "endpoint": "markdown_widget_with_image_from_url",
    "gridData": {"w": 20, "h": 20},
})
@app.get("/markdown_widget_with_image_from_url")
def markdown_widget_with_image_from_url():
    """Returns a markdown widget with an image from a URL"""
    image_url = "https://api.star-history.com/svg?repos=openbb-finance/OpenBB&type=Date&theme=dark"
    
    try:
        response = requests.get(image_url, timeout=10)
        response.raise_for_status()
        
        content_type = response.headers.get('content-type', '')
        if not content_type.startswith('image/'):
            raise HTTPException(
                status_code=500,
                detail=f"URL did not return an image. Content-Type: {content_type}"
            )

        image_base64 = base64.b64encode(response.content).decode('utf-8')
        return f"![OpenBB Logo](data:{content_type};base64,{image_base64})"
        
    except requests.RequestException as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to fetch image: {str(e)}"
        ) from e
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Error processing image: {str(e)}"
        ) from e
``` 