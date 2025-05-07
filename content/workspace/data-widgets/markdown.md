---
title: Markdown
sidebar_position: 4
description: Learn how to create and customize markdown widgets in OpenBB Workspace, including basic markdown display and data-rich markdown with dynamic content integration.
keywords:
- markdown widget
- widget configuration
- dynamic markdown
- data integration
- widget display
- markdown formatting
- widget customization
- OpenBB Workspace
- widget development
- markdown content
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Markdown | OpenBB Workspace Docs" />

A simple widget that displays markdown content.

<img className="pro-border-gradient" width="800" alt="Markdown Widget Example" src="https://openbb-cms.directus.app/assets/60cbbcb5-194e-4c03-905e-65f3de7f4efe.png" />

```python
@register_widget({
    "name": "Markdown Widget",
    "description": "A markdown widget",
    "type": "markdown",
    "endpoint": "markdown_widget",
    "gridData": {"w": 12, "h": 4},
})
@app.get("/markdown_widget")
def markdown_widget():
    """Returns a markdown widget"""
    return "# Markdown Widget"
```

The gridData parameter specifies the widget's size in the OpenBB Workspace grid system. More on that can be found [here](/workspace/widget-configuration/grid-size).

## Data rich markdown

<img className="pro-border-gradient" width="600" alt="markdown" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/markdown-widget.png" />

```python
@register_widget({
  "name": "Defi Llama Protocol Details",
  "description": "Details for a given protocol",
  "category": "Crypto",
  "defaultViz": "markdown",
  "endpoint": "defi_llama_protocol_details",
  "gridData": {"w": 20, "h": 9},
  "source": "Defi Llama",
  "params": [
    {
      "paramName": "protocol_id",
      "value": "aave",
      "label": "Protocol",
      "type": "text",
      "description": "Defi Llama ID of the protocol"
    }
  ]
})
@app.get("/defi_llama_protocol_details")
def defi_llama_protocol_details(protocol_id: str = None):
    """Get details for a given protocol using Defi Llama"""
    data = requests.get(f'https://api.llama.fi/protocol/{protocol_id}')

    if data.status_code == 200:
        data = data.json()
    else:
        return JSONResponse(content={"error": data.text}, status_code=data.status_code)

    github_links = ""
    if 'github' in data and data['github']:
        github_links = "**GitHub:** " + ", ".join(data['github'])

    # Use HTML for multi-column layout
    markdown = dedent(f"""
        ![{data.get('name', 'N/A')} Logo]({data.get('logo', '')}) 
        # {data.get('name', 'N/A')} ({data.get('symbol', 'N/A').upper()})
        **Description:** {data.get('description', 'N/A')}
        ---
        ## Twitter
        **Twitter:** {data.get('twitter', 'N/A')}
        ## Links
        **Website:** {data.get('url', 'N/A')}
        {github_links}
    """)
    return markdown
```

**Note:** The `dedent` function is used to remove leading whitespace from the markdown string. This is a good practice to ensure the markdown is formatted correctly.




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

The Markdown widget also provides image handling capabilities, supporting both local and remote images. Images are converted to base64 format for displaying.

Below is a markdown widget that displays markdown content with an image fetched from a URL. The image is converted to base64 for display.

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