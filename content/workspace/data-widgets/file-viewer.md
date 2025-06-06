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

1. An endpoint to get the list of available options.
2. A POST endpoint to request the list of selected file names and receive a list of results.

Model that we need:

```python
from typing import List, Literal
from pydantic import BaseModel


class FileOption(BaseModel):
    label: str
    value: str


class FileRequest(BaseModel):
    filenames: List[str]


class DataFormat(BaseModel):
    data_type: Literal["pdf"]
    filename: str


class DataContent(BaseModel):
    content: str
    data_format: DataFormat


class DataUrl(BaseModel):
    url: str
    data_format: DataFormat


class DataError(BaseModel):
    error_type: Literal["not_found"]
    content: str


FileOptions = List[FileOption]
FileResponse = List[DataContent | DataUrl | DataError]
```

For the endpoint with the list of available files, we are going to utilize:

```python

# PDF files data
PDFS = {
    "sample.pdf": {
        "label": "Sample",
        "filename": "Sample",
        "url": "https://openbb-assets.s3.us-east-1.amazonaws.com/testing/sample.pdf",
    },
    "bitcoin.pdf": {
        "label": "Bitcoin",
        "filename": "bitcoin.pdf",
        "url": "https://openbb-assets.s3.us-east-1.amazonaws.com/testing/bitcoin.pdf",
    }
}

# Sample PDF options endpoint
# This is a simple endpoint to get the list of available PDFs
# and return it in the JSON format. The reason why we need this endpoint is because the multi_file_viewer widget
# needs to know the list of available PDFs to display and we pass this endpoint to the widget as the optionsEndpoint
@app.get("/get_pdf_options")
async def get_pdf_options():
    """Get list of available PDFs"""
    return [
        FileOption(label=pdf["label"], value=pdf["filename"])
        for pdf in PDFS.values()
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
            "paramName": "filenames",
            "description": "PDF files to display",
            "type": "endpoint",
            "label": "PDF File",
            "optionsEndpoint": "/get_pdf_options",
            "show": False,
            "value": ["bitcoin.pdf"],
            "multiSelect": True,
            "roles": ["fileSelector"]
        }
    ]
})
@app.post("/multi_pdf_base64")
async def get_multi_pdf_base64(
    request: FileRequest,
) -> List[DataContent | DataUrl | DataError]:
    """Get PDF content in base64 format"""
    files = []
    for name in request.filenames:
        if whitepaper := PDFS.get(name):
            file_name_with_extension = whitepaper["filename"]
            file_path = Path.cwd() / file_name_with_extension
            if file_path.exists():
                with open(file_path, "rb") as file:
                    base64_content = base64.b64encode(file.read()).decode("utf-8")
                    files.append(
                        DataContent(
                            content=base64_content,
                            data_format=DataFormat(
                                data_type="pdf",
                                filename=file_name_with_extension,
                            ),
                        ).model_dump()
                    )
            else:
                files.append(
                    DataError(
                        error_type="not_found",
                        content="File not found"
                    ).model_dump()
                )
        else:
            files.append(
                DataError(
                    error_type="not_found",
                    content=f"Whitepaper '{name}' not found"
                ).model_dump()
            )                    
    return JSONResponse(headers={"Content-Type": "application/json"}, content=files)
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
            "paramName": "filenames",
            "description": "PDF files to display",
            "type": "endpoint",
            "label": "PDF File",
            "optionsEndpoint": "/get_pdf_options",
            "value": ["sample.pdf"],
            "show": False,
            "multiSelect": True,
            "roles": ["fileSelector"]
        }
    ]
})
@app.post("/multi_pdf_url")
async def get_multi_pdf_url(
    request: FileRequest,
) -> List[DataContent | DataUrl | DataError]:
    files = []
    for name in request.filenames:
        if whitepaper := PDFS.get(name):
            file_name_with_extension = whitepaper["filename"]
            if url := whitepaper.get("url"):
                files.append(
                    DataUrl(
                        url=url,
                        data_format=DataFormat(
                            data_type="pdf",
                            filename=file_name_with_extension
                        ),
                    ).model_dump()
                )
            else:
                files.append(
                    DataError(
                        error_type="not_found",
                        content="URL not found"
                    ).model_dump()
                )
        else:
            files.append(
                DataError(
                    error_type="not_found",
                    content=f"Whitepaper '{name}' not found"
                ).model_dump()
            )
    return JSONResponse(headers={"Content-Type": "application/json"}, content=files)    
```

### More complex example

<img className="pro-border-gradient" width="600" alt="multi-file-viewer" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/multi-file-viewer.png" />

This multi-file-viewer widget introduces a parameter called `optionsParams` which allows you to pass the options to an endpoint from a different parameter. More information [here](../widget-parameters/dependent-dropdown.md).

In our case we want to pass the options in the `type` parameter to the `/random/whitepapers` endpoint to filter the list of whitepapers.

```python
# You can find these files in the OpenBB GitHub repository in the backend-examples-for-openbb-workspace folder.
# https://github.com/OpenBB-finance/backend-examples-for-openbb-workspace
# Sample whitepaper data for the multi-file viewer widget
# This is a list of dictionaries, each representing a whitepaper
# Each whitepaper has the following properties:
# - label: The name of the whitepaper
# - filename: The file name of the whitepaper
# - url: The URL to the whitepaper
# - category: The type of whitepaper
WHITEPAPERS = {
    "bitcoin.pdf": {
        "label": "Bitcoin",
        "filename": "bitcoin.pdf",
        "url": "https://openbb-assets.s3.us-east-1.amazonaws.com/testing/bitcoin.pdf",
        "category": "l1",
    },
    "ethereum.pdf": {
        "label": "Ethereum",
        "filename": "ethereum.pdf",
        "url": "https://openbb-assets.s3.us-east-1.amazonaws.com/testing/ethereum.pdf",
        "category": "l1",
    },
    "chainlink.pdf": {
        "label": "ChainLink",
        "filename": "chainlink.pdf",
        "url": "https://openbb-assets.s3.us-east-1.amazonaws.com/testing/chainlink.pdf",
        "category": "oracles",
    },
    "solana.pdf": {
        "label": "Solana",
        "filename": "solana.pdf",
        "url": "https://openbb-assets.s3.us-east-1.amazonaws.com/testing/solana.pdf",
        "category": "l1",
    },
}


@app.get("/options")
async def get_options(category: str = Query("all")):
    if category == "all":
        return [
            FileOption(label=whitepaper["label"], value=whitepaper["filename"])
            for whitepaper in WHITEPAPERS.values()
        ]
    return [
        FileOption(label=whitepaper["label"], value=whitepaper["filename"])
        for whitepaper in WHITEPAPERS.values()
        if whitepaper["category"] == category
    ]

# This is a simple example of how to return a base64 encoded pdf.
@app.post("/whitepapers/base64")
async def get_whitepapers_base64(
    request: FileRequest,
) -> List[DataContent | DataUrl | DataError]:
    files = []
    for name in request.filenames:
        if whitepaper := WHITEPAPERS.get(name):
            file_name_with_extension = whitepaper["filename"]
            file_path = Path.cwd() / file_name_with_extension
            if file_path.exists():
                with open(file_path, "rb") as file:
                    base64_content = base64.b64encode(file.read()).decode("utf-8")
                    files.append(
                        DataContent(
                            content=base64_content,
                            data_format=DataFormat(
                                data_type="pdf",
                                filename=file_name_with_extension,
                            ),
                        ).model_dump()
                    )
            else:
                files.append(
                    DataError(
                        error_type="not_found", content="File not found"
                    ).model_dump()
                )
        else:
            files.append(
                DataError(
                    error_type="not_found", content=f"Whitepaper '{name}' not found"
                ).model_dump()
            )
    return JSONResponse(headers={"Content-Type": "application/json"}, content=files)


# This is a simple example of how to return a url
# if you are using this endpoint you will need to change the widgets.json file to use this endpoint as well.
# You would want to return your own presigned url here for the file to load correctly or else the file will not load due to CORS policy.
@app.post("/whitepapers/url")
async def get_whitepapers_url(
    request: FileRequest,
) -> List[DataContent | DataUrl | DataError]:
    files = []
    for name in request.filenames:
        if whitepaper := WHITEPAPERS.get(name):
            file_name_with_extension = whitepaper["filename"]
            if url := whitepaper.get("url"):
                files.append(
                    DataUrl(
                        url=url,
                        data_format=DataFormat(
                            data_type="pdf", filename=file_name_with_extension
                        ),
                    ).model_dump()
                )
            else:
                files.append(
                    DataError(
                        error_type="not_found", content="URL not found"
                    ).model_dump()
                )
        else:
            files.append(
                DataError(
                    error_type="not_found", content=f"Whitepaper '{name}' not found"
                ).model_dump()
            )
    return JSONResponse(headers={"Content-Type": "application/json"}, content=files)
```

The corresponding `widgets.json` would have the following format:

```json
{
  "whitepapers": {
    "type": "multi_file_viewer",
    "name": "Whitepapers",
    "description": "A collection of crypto whitepapers.",
    "endpoint": "/whitepapers/base64",
    "gridData": {
      "w": 40,
      "h": 10
    },
    "params": [
      {
        "type": "endpoint",
        "paramName": "filenames",
        "value": ["bitcoin.pdf"],
        "label": "Whitepaper",
        "description": "Whitepaper to display.",
        "optionsEndpoint": "/options",
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
- The `filenames` parameter uses an endpoint to fetch a list of options
- The `category` parameter allows filtering by category
