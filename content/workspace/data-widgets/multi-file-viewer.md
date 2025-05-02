---
title: Multi File Viewer
sidebar_position: 6
description: Learn how to integrate your own backend with OpenBB Workspace using the cookie-cutter or language-agnostic API approaches, with illustrative guides and principles for handling widget.json files, APIs, interfaces, Python, FastAPI, and more.
keywords:
- widgets.json
- OpenBB API
- Endpoint integration
- widget configuration
- Language-Agnostic API
- API implementation
- Python
- FastAPI
- Workspace widgets
- Widget definitions
---

# Multi File Viewer Widget

This guide will walk you through the process of creating a multi-file viewer widget for OpenBB Workspace. By the end of this guide, you will have a working multi-file viewer widget that allows users to view and compare multiple files.

**Note : For now, this widget only supports PDF files.**

## Step 1: Set Up Your Project

To get started, create the main application file and the widget configuration file. You will only need these two files:

- `main.py`: This file will contain your FastAPI application code.
- `widgets.json`: This file will define the configuration for your widget.

The backend will use the same FastAPI setup and structure as described in the [Overview](/content/workspace/data-integration#1-create-the-api-server.md) page.

## Step 2: Create the Multi-File Viewer Endpoints

The multi-file viewer widget requires two endpoints:

1. An endpoint to get the list of available files.
2. An endpoint to view the file content.

Below we will create a simple example of a multi-file viewer widget that allows users to view and compare multiple PDFs.

Edit the main.py file and add the following code. This code sets up a FastAPI application with endpoints to serve the widget configuration and data for a multi-file viewer widget:

```python
import json
from pathlib import Path
from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, FileResponse
import base64

app = FastAPI()

# ... existing code ...


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

The multi-file viewer widget supports two methods for serving files:

1. Base64 Encoding: The file content is encoded in base64 and sent directly in the response.

2. URL Reference: A URL to the file is provided, which can be a presigned URL for secure access to files stored in cloud storage.

### Response Format

The endpoint should return a JSON response with the following structure:

```json
{
  "headers": {"Content-Type": "application/json"},
  "data_format": {"data_type": "pdf", "filename": "example.pdf"},
  "content": "base64_encoded_content"  // For base64 method
  // OR
  "file_reference": "https://example.com/path/to/file.pdf"  // For URL method
}
```

data_format.data_type: The type of file (e.g., "pdf", "csv", "txt")
data_format.filename: The name of the file to display
content: Base64-encoded file content (for base64 method)
file_reference: URL to the file (for URL method)

## Step 3: Edit the widgets.json File

The multi-file-viewer widget introduces a new parameter called `optionsParams` which allows you to pass the options to an endpoint from a different parameter.

In our case we want to pass the options in the `type` parameter to the `/random/whitepapers` endpoint to filter the list of whitepapers.

Edit the widgets.json file and add the following JSON data. This configuration defines the widget's properties and how it should be displayed:



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

For more information on the widgets.json file, see the Widgets.json page.

## Step 4: Run the Application

Start the FastAPI Server using Uvicorn. This will host your backend locally:

```bash
uvicorn main:app --host localhost --port 5050
```

## Step 5: Add to OpenBB Pro

Navigate to [OpenBB Pro Apps](https://pro.openbb.co/app) and add your backend by clicking on the `Manage Backends` button in the top right corner. Select `Add Backend` and fill in the details. Your URL will be `http://localhost:5050`.

Once you have added your backend, you can find the widget in the `Other` category with the name `Whitepapers`.

<img className="pro-border-gradient" width="600" alt="multi-file-viewer" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/multi-file-viewer.png" />

## Additional Resources

You can find more examples of how to set up your own backend in the [Backend for OpenBB Workspace GitHub](https://github.com/OpenBB-finance/backend-examples-for-openbb-workspace).