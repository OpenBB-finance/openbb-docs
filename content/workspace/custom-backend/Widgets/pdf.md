---
title: PDF Viewer
sidebar_position: 6
description: Learn how to integrate your own backend with OpenBB Terminal Pro using the cookie-cutter or language-agnostic API approaches, with illustrative guides and principles for handling widget.json files, APIs, interfaces, Python, FastAPI, and more.
keywords:
- widgets.json
- OpenBB API
- Endpoint integration
- widget configuration
- Language-Agnostic API
- API implementation
- Python
- FastAPI
- Terminal Pro widgets
- Widget definitions
---

# PDF Viewer Widget

This guide will walk you through the process of creating a PDF Viewer widget for OpenBB Terminal Pro. By the end of this guide, you will have a working PDF Viewer widget that you can add to OpenBB Terminal Pro.

## Step 1: Set Up Your Project

To get started, create the main application file and the widget configuration file. You will only need these two files:

- `main.py`: This file will contain your FastAPI application code.
- `widgets.json`: This file will define the configuration for your widget.

The backend will use the same FastAPI setup and structure as described in the [Custom Backend](/content/workspace/custom-backend/custom-backend.md) page.

## Step 2: Create the PDF Viewer Endpoint

Edit the `main.py` file and add the following code.

You can use two different endpoints to serve the PDF Viewer widget. The first one is the base64 endpoint, which serves the PDF file as a base64 encoded string. The second one is the URL endpoint, which serves the PDF file as a URL (this works best as a presigned URL - The URL must be publicly accessible). The code below sets up the endpoints for the PDF Viewer widget.

```python
...
# PDF Viewer base64 endpoint
@app.get("/files-base64")
def get_files_base64(name: str):
    """Serve a file through base64 encoding."""
    try:
        with open(ROOT_PATH / name, "rb") as file:
            file_data = file.read()
            encoded_data = base64.b64encode(file_data)
            content = encoded_data.decode("utf-8")
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="File not found")
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

# PDF Viewer URL endpoint
@app.get("/files-url")
def get_files_url(name: str):
    """Serve a file through URL."""
    FILES = {
        "openbb-story.pdf": "https://openbb-assets.s3.us-east-1.amazonaws.com/testing/openbb_story.pdf",
        "sample.pdf": "https://openbb-assets.s3.us-east-1.amazonaws.com/testing/sample.pdf",
    }
    file_reference = FILES.get(name)
    if not file_reference:
        raise HTTPException(status_code=404, detail="File not found")
    return JSONResponse(
        headers={"Content-Type": "application/json"},
        content={
            "data_format": {
                "data_type": "pdf",
                "filename": name,
            },
            "file_reference": file_reference,
        },
    )
```

### Edit the widgets.json File

Open the `widgets.json` file and add the following JSON data. This configuration defines the widget's properties and how it should be displayed in the OpenBB Terminal Pro.

```json
{
  "base64_pdf": {
    "name": "Base 64 PDF",
    "description": "Display a PDF file",
    "category": "Other",
    "type": "pdf",
    "endpoint": "files-base64",
    "gridData": {
      "w": 20,
      "h": 20
    },
    "params": [
      {
        "paramName": "name",
        "value": "sample.pdf",
        "label": "Name",
        "type": "text",
        "description": "Name of the file"
      }
    ]
  },
  "url_pdf": {
    "name": "URL PDF files",
    "description": "Display a PDF file",
    "category": "Other",
    "type": "pdf",
    "endpoint": "files-url",
    "gridData": {
      "w": 20,
      "h": 20
    },
    "params": [
      {
        "paramName": "name",
        "value": "openbb-story.pdf",
        "label": "Name",
        "description": "Name of the file",
        "options": [
          {
            "value": "openbb-story.pdf",
            "label": "OpenBB Story"
          },
          {
            "value": "sample.pdf",
            "label": "Sample"
          }
        ]
      }
    ]
  }
}
```

## Step 3: Run the Application

Start the FastAPI Server using Uvicorn. This will host your backend locally:

```bash
uvicorn main:app --host localhost --port 5050
```

## Step 4: Add to OpenBB Pro

Navigate to [OpenBB Pro Data Connectors](https://pro.openbb.co/app/data-connectors) and add your backend by clicking on the `+ Add Data` button in the top right corner. Select `Custom Backend` and fill in the details. Your URL will be `http://localhost:5050`.

Once you have added your backend, you can find the widget in the `Documents` category with the name `PDF Viewer`.

<img className="pro-border-gradient" width="600" alt="pdf-viewer" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/pdf-widget.png" />

## Additional Resources

You can find more examples of how to set up your own backend in the [Backend for Terminal Pro GitHub](https://github.com/OpenBB-finance/backend-for-terminal-pro).