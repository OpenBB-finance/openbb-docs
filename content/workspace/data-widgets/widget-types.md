---
title: Widget Types
sidebar_position: 12
description: Comprehensive guide to different widget types available in OpenBB Workspace including Markdown, Metric, Table, PDF, and Multi-PDF viewers
keywords:
- widgets
- markdown
- metrics
- tables
- pdf
- data visualization
- workspace
- grid system
- base64
- file viewers
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Widget Types | OpenBB Workspace Docs" />

## Markdown Widget

A simple widget that displays markdown content. The gridData parameter specifies the widget's size in the OpenBB Workspace grid system.

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

## Metric Widget
A widget that displays key metrics with labels, values, and delta changes. Useful for showing important statistics and their trends.

<img className="pro-border-gradient" width="800" alt="Metric Widget Example" src="https://openbb-cms.directus.app/assets/ba37bbbb-371a-40e8-a7e1-e48edcc6c0c8.png" />

```python
@register_widget({
    "name": "Metric Widget",
    "description": "A metric widget",
    "endpoint": "metric_widget",
    "gridData": {
      "w": 5,
      "h": 5
    },
    "type": "metric"
})
@app.get("/metric_widget")
def metric_widget():
    data = [
        {
            "label": "Total Users",
            "value": "1,234,567",
            "delta": "12.5"
        },
        {
            "label": "Active Sessions",
            "value": "45,678",
            "delta": "-2.3"
        },
        {
            "label": "Revenue (USD)",
            "value": "$89,432",
            "delta": "8.9"
        },
        {
            "label": "Conversion Rate",
            "value": "3.2%",
            "delta": "0.0"
        },
        {
            "label": "Avg. Session Duration",
            "value": "4m 32s",
            "delta": "0.5"
        }
    ]

    return JSONResponse(content=data)
```

## Table Widget

A widget that displays data in a tabular format. This example shows how to create a table with cryptocurrency data including TVL and price changes.

<img className="pro-border-gradient" width="800" alt="Table Widget Example" src="https://openbb-cms.directus.app/assets/96f31526-87c1-40f3-8ecb-6cc869d2e910.png" />

```python
@register_widget({
    "name": "Table Widget",
    "description": "A table widget",
    "type": "table",
    "endpoint": "table_widget",
    "gridData": {"w": 12, "h": 4},
})
@app.get("/table_widget")
def table_widget():
    """Returns a mock table data for demonstration"""
    mock_data = [
        {
            "name": "Ethereum",
            "tvl": 45000000000,
            "change_1d": 2.5,
            "change_7d": 5.2
        },
        {
            "name": "Bitcoin",
            "tvl": 35000000000,
            "change_1d": 1.2,
            "change_7d": 4.8
        },
        {
            "name": "Solana",
            "tvl": 8000000000,
            "change_1d": -0.5,
            "change_7d": 2.1
        }
    ]
    return mock_data
```

## Table Widget from API

A widget that fetches and displays data from an external API. This example demonstrates integration with the DeFi Llama API to show chain TVL data.

<img className="pro-border-gradient" width="800" alt="Table Widget from API Example" src="https://openbb-cms.directus.app/assets/ab850520-843d-4fe2-b95c-c8346b41ac93.png" />

```python
@register_widget({
    "name": "Table Widget from API Endpoint",
    "description": "A table widget from an API endpoint",
    "type": "table",
    "endpoint": "table_widget_from_api_endpoint",
    "gridData": {"w": 12, "h": 4},
})
@app.get("/table_widget_from_api_endpoint")
def table_widget_from_api_endpoint():
    """Get current TVL of all chains using Defi LLama"""
    response = requests.get("https://api.llama.fi/v2/chains")

    if response.status_code == 200:
        return response.json()

    print(f"Request error {response.status_code}: {response.text}")
    raise HTTPException(
        status_code=response.status_code,
        detail=response.text
    )
```

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

## PDF Widget with Base64

A widget that displays a PDF file using base64 encoding. This method is useful for displaying PDFs directly in the workspace.

<img className="pro-border-gradient" width="800" alt="PDF Widget with Base64 Example" src="https://openbb-cms.directus.app/assets/9e202a65-eb71-4e43-b111-5f5c79dfa6dc.png" />

```python
@register_widget({
    "name": "PDF Widget with Base64",
    "description": "Display a PDF file with base64 encoding",
    "endpoint": "pdf_widget_base64",
    "gridData": {
        "w": 20,
        "h": 20
    },
    "type": "pdf",
})
@app.get("/pdf_widget_base64")
def get_pdf_widget_base64():
    """Serve a file through base64 encoding."""
    try:
        name = "sample.pdf"
        with open(ROOT_PATH / name, "rb") as file:
            file_data = file.read()
            encoded_data = base64.b64encode(file_data)
            content = encoded_data.decode("utf-8")
    
    except FileNotFoundError as exc:
        raise HTTPException(
            status_code=404,
            detail="File not found"
        ) from exc
    
    return JSONResponse(
        headers={"Content-Type": "application/json"},
        content={
            "data_format": {
                "data_type": "pdf",
                "filename": name,
            },
            "content": content,
        },
    )
```

## PDF Widget with URL

A widget that displays a PDF file using a direct URL. This method is more efficient for larger PDFs as it doesn't require base64 encoding.

<img className="pro-border-gradient" width="800" alt="PDF Widget with URL Example" src="https://openbb-cms.directus.app/assets/7d4fc0e6-f458-49a1-9be9-161d2bec1886.png" />

```python
@register_widget({
    "name": "PDF Widget with URL",
    "description": "Display a PDF file",
    "type": "pdf", 
    "endpoint": "pdf_widget_url",
    "gridData": {
        "w": 20,
        "h": 20
    },
})
@app.get("/pdf_widget_url")
def get_pdf_widget_url():
    """Serve a file through URL."""
    file_reference = "https://openbb-assets.s3.us-east-1.amazonaws.com/testing/sample.pdf"
    if not file_reference:
        raise HTTPException(status_code=404, detail="File not found")
    return JSONResponse(
        headers={"Content-Type": "application/json"},
        content={
            "data_format": {
                "data_type": "pdf",
                "filename": "Sample.pdf",
            },
            "url": file_reference,
        },
    )
```

## Multi PDF Viewer with Base64

A widget that allows viewing multiple PDF files using base64 encoding. Includes a file selector parameter for choosing which PDFs to display.

<img className="pro-border-gradient" width="800" alt="Multi PDF Viewer with Base64 Example" src="https://openbb-cms.directus.app/assets/610ec2bc-2768-4d48-9f0b-0ad08a69b41e.png" />

```python
@register_widget({
    "name": "Multi PDF Viewer - Base64",
    "description": "View multiple PDF files using base64 encoding",
    "type": "multi_file_viewer",
    "endpoint": "multi_pdf_base64",
    "gridData": {
        "w": 20,
        "h": 10
    },
    "params": [
        {
            "paramName": "pdf_name",
            "description": "PDF file to display",
            "type": "endpoint",
            "label": "PDF File",
            "optionsEndpoint": "/get_pdf_options",
            "show": False,
            "value": ["Bitcoin Whitepaper"],
            "multiSelect": True,
            "roles": ["fileSelector"]
        }
    ]
})
@app.get("/multi_pdf_base64")
async def get_multi_pdf_base64(pdf_name: str):
    """Get PDF content in base64 format"""
    pdf = next((p for p in SAMPLE_PDFS if p["name"] == pdf_name), None)
    if not pdf:
        raise HTTPException(status_code=404, detail="PDF not found")

    file_path = ROOT_PATH / pdf["location"]
    if not file_path.exists():
        raise HTTPException(status_code=404, detail="PDF file not found")

    with open(file_path, "rb") as file:
        base64_content = base64.b64encode(file.read()).decode("utf-8")

    return JSONResponse(
        headers={"Content-Type": "application/json"},
        content={
            "data_format": {
                "data_type": "pdf",
                "filename": f"{pdf['name']}.pdf"
            },
            "content": base64_content,
        },
    )
```

## Multi PDF Viewer with URL

A widget that allows viewing multiple PDF files using direct URLs. More efficient for larger PDFs as it doesn't require base64 encoding.

<img className="pro-border-gradient" width="800" alt="Multi PDF Viewer with URL Example" src="https://openbb-cms.directus.app/assets/8a269267-acd3-4c4f-93cb-0b64c4a87eda.png" />

```python
@register_widget({
    "name": "Multi PDF Viewer - URL",
    "description": "View multiple PDF files using URLs",
    "type": "multi_file_viewer", 
    "endpoint": "multi_pdf_url",
    "gridData": {
        "w": 20,
        "h": 10
    },
    "params": [
        {
            "paramName": "pdf_name",
            "description": "PDF file to display",
            "type": "endpoint",
            "label": "PDF File",
            "optionsEndpoint": "/get_pdf_options",
            "value": ["Sample"],
            "show": False,
            "multiSelect": True,
            "roles": ["fileSelector"]
        }
    ]
})
@app.get("/multi_pdf_url")
async def get_multi_pdf_url(pdf_name: str):
    """Get PDF URL"""
    pdf = next((p for p in SAMPLE_PDFS if p["name"] == pdf_name), None)
    if not pdf:
        raise HTTPException(status_code=404, detail="PDF not found")

    return JSONResponse(
        headers={"Content-Type": "application/json"},
        content={
            "data_format": {"data_type": "pdf", "filename": f"{pdf['name']}.pdf"},
            "url": pdf["url"],
        },
    )
```
