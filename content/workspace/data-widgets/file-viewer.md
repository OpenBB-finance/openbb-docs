---
title: File Viewer
sidebar_position: 7
description: Guide to using PDF and multi-PDF viewer widgets in OpenBB Workspace
keywords:
- widgets
- pdf
- file viewer
- base64
- multi-file viewer
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="File Viewer | OpenBB Workspace Docs" />

## Single File

The (multi) file viewer widget supports two methods for serving files:

1. Base64 Encoding: The file content is encoded in base64 and sent directly in the response.

2. URL Reference: A URL to the file is provided, which can be a presigned URL for secure access to files stored in cloud storage.

The endpoint should return a JSON response with the following structure:

```json
{
  "headers": {
    "Content-Type": "application/json"
  },
  "data_format": {
    "data_type": "pdf",
    "filename": "example.pdf"
  },
  "content": "base64_encoded_content",  // For base64 method
  // OR
  "file_reference": "https://example.com/path/to/file.pdf"  // For URL method
}
```

Note:

- **data_format.data_type**: The type of file (e.g., "pdf", "csv", "txt")
- **data_format.filename**: The name of the file to display
- **content**: Base64-encoded file content (for base64 method)
- **file_reference**: URL to the file (for URL method)

### PDF Widget with Base64

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

### PDF Widget with URL

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

## Multi File

The main difference, in implementation, between multi and single file viewer is that the multi-file viewer requires two endpoints:

1. An endpoint to get the list of available files.
2. An endpoint to view the file content.

For the endpoint with the list of available files, we are going to utilize:

```python

# Sample PDF files data
SAMPLE_PDFS = [
    {
        "name": "Sample",
        "location": "sample.pdf",
        "url": "https://openbb-assets.s3.us-east-1.amazonaws.com/testing/sample.pdf",
    },
    {
        "name": "Bitcoin Whitepaper", 
        "location": "bitcoin.pdf",
        "url": "https://openbb-assets.s3.us-east-1.amazonaws.com/testing/bitcoin.pdf",
    }
]

# Sample PDF options endpoint
# This is a simple endpoint to get the list of available PDFs
# and return it in the JSON format. The reason why we need this endpoint is because the multi_file_viewer widget
# needs to know the list of available PDFs to display and we pass this endpoint to the widget as the optionsEndpoint
@app.get("/get_pdf_options")
async def get_pdf_options():
    """Get list of available PDFs"""
    return [
        {
            "label": pdf["name"],
            "value": pdf["name"]
        } for pdf in SAMPLE_PDFS
    ]
```


### Multi PDF Viewer with Base64

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

### Multi PDF Viewer with URL

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

### More complex example

<img className="pro-border-gradient" width="600" alt="multi-file-viewer" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/multi-file-viewer.png" />

This multi-file-viewer widget introduces a parameter called `optionsParams` which allows you to pass the options to an endpoint from a different parameter. More information [here](workspace/widget-parameters/dependent-dropdown).

In our case we want to pass the options in the `type` parameter to the `/random/whitepapers` endpoint to filter the list of whitepapers.



```python
# You can find these files in the OpenBB GitHub repository in the backend-examples-for-openbb-workspace folder.
# https://github.com/OpenBB-finance/backend-examples-for-openbb-workspace
# Sample whitepaper data for the multi-file viewer widget
# This is a list of dictionaries, each representing a whitepaper
# Each whitepaper has the following properties:
# - name: The name of the whitepaper
# - location: The location of the whitepaper on the server
# - url: The URL to the whitepaper
# - category: The type of whitepaper
whitepapers = [
    {
        "name": "Bitcoin",
        "location": "bitcoin.pdf",
        "url": "https://openbb-assets.s3.us-east-1.amazonaws.com/testing/bitcoin.pdf",
        "category": "l1",
    },
    {
        "name": "Ethereum",
        "location": "ethereum.pdf",
        "url": "https://openbb-assets.s3.us-east-1.amazonaws.com/testing/ethereum.pdf",
        "category": "l1",
    },
    {
        "name": "ChainLink",
        "location": "chainlink.pdf",
        "url": "https://openbb-assets.s3.us-east-1.amazonaws.com/testing/chainlink.pdf",
        "category": "oracles",
    },
    {
        "name": "Solana",
        "location": "solana.pdf",
        "url": "https://openbb-assets.s3.us-east-1.amazonaws.com/testing/solana.pdf",
        "category": "l1",
    },
]


@app.get("/whitepapers")
async def get_whitepapers(category: str = Query("all")):
    if category == "all":
        return [{"label": wp["name"], "value": wp["name"]} for wp in whitepapers]
    return [
        {"label": wp["name"], "value": wp["name"]}
        for wp in whitepapers
        if wp["category"] == category
    ]


# This is a simple example of how to return a base64 encoded pdf.
@app.get("/whitepapers/view-base64")
async def view_whitepaper_base64(whitepaper: str):
    wp = next((wp for wp in whitepapers if wp["name"] == whitepaper), None)
    if not wp:
        raise HTTPException(status_code=404, detail="Whitepaper not found")

    file_path = Path.cwd() / wp["location"]
    if not file_path.exists():
        raise HTTPException(status_code=404, detail="Whitepaper file not found")

    with open(file_path, "rb") as file:
        base64_content = base64.b64encode(file.read()).decode("utf-8")

    return JSONResponse(
        headers={"Content-Type": "application/json"},
        content={
            "data_format": {"data_type": "pdf", "filename": f"{wp['name']}.pdf"},
            "content": base64_content,
        },
    )


# This is a simple example of how to return a url
# if you are using this endpoint you will need to change the widgets.json file to use this endpoint as well.
# You would want to return your own presigned url here for the file to load correctly or else the file will not load due to CORS policy.
@app.get("/whitepapers/view-url")
async def view_whitepaper_url(whitepaper: str):
    wp = next((wp for wp in whitepapers if wp["name"] == whitepaper), None)
    if not wp:
        raise HTTPException(status_code=404, detail="Whitepaper not found")

    # Fetch the presigned url and return it for the `url`.
    # In the code below, we are simulating the presigned url by returning the url directly.
    presigned_url = wp["url"]

    file_path = Path.cwd() / wp["location"]
    if not file_path.exists():
        raise HTTPException(status_code=404, detail="Whitepaper file not found")

    return JSONResponse(
        headers={"Content-Type": "application/json"},
        content={
            "data_format": {"data_type": "pdf", "filename": f"{wp['name']}.pdf"},
            "url": presigned_url,
        },
    )
```

The corresponding `widgets.json` would have the following format:

```json
{
  "whitepapers": {
    "type": "multi_file_viewer",
    "name": "Whitepapers",
    "description": "A collection of crypto whitepapers.",
    "endpoint": "/whitepapers/view-base64",
    "gridData": {
      "w": 40,
      "h": 10
    },
    "params": [
      {
        "type": "endpoint",
        "paramName": "whitepaper",
        "value": ["Bitcoin"],
        "label": "Whitepaper",
        "description": "Whitepaper to display.",
        "optionsEndpoint": "/whitepapers",
        "show": false,
        "optionsParams": {
          "category": "$category"
        },
        "multiSelect": true,
        "roles": ["fileSelector"]
      },
      {
        "type": "text",
        "paramName": "category",
        "value": "all",
        "label": "Category",
        "description": "Category of whitepaper to fetch.",
        "options": [
          {
            "label": "All",
            "value": "all"
          },
          {
            "label": "L1",
            "value": "l1"
          },
          {
            "label": "L2",
            "value": "l2"
          },
          {
            "label": "Oracles",
            "value": "oracles"
          },
          {
            "label": "Defi",
            "value": "defi"
          }
        ]
      }
    ]
  }
}
```

Key configuration elements:

- `type`: Set to "multi_file_viewer" to use this widget type
- `endpoint`: The endpoint that will return the file content
- `params`: Parameters for filtering and selecting files to display
- The `whitepaper` parameter uses an endpoint to dynamically load options
- The `category` parameter allows filtering by category
