---
title: File Viewer
sidebar_position: 6
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

## Multi File Viewer

### Multi File Viewer with Base64

A widget that displays multiple PDF files using base64 encoding. This method is useful for smaller files that you want to serve directly (vs URL).

<img className="pro-border-gradient" width="800" alt="Multi PDF Viewer with Base64 Example" src="https://openbb-cms.directus.app/assets/610ec2bc-2768-4d48-9f0b-0ad08a69b41e.png" />

```python
from pydantic import BaseModel
from typing import List, Union
from fastapi import Body

class FileOption(BaseModel):
    label: str
    value: str

class FileDataFormat(BaseModel):
    data_type: str
    filename: str

class DataContent(BaseModel):
    content: str
    data_format: FileDataFormat

class DataUrl(BaseModel):
    url: str
    data_format: FileDataFormat

class DataError(BaseModel):
    error_type: str
    content: str

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

# Options endpoint for file selection
@app.get("/get_pdf_options")
async def get_pdf_options() -> List[FileOption]:
    """Get list of available PDFs"""
    return [
        FileOption(label=pdf["name"], value=pdf["name"]) 
        for pdf in SAMPLE_PDFS
    ]

@register_widget({
    "name": "Multi PDF Viewer - Base64",
    "description": "View multiple PDF files using base64 encoding",
    "type": "multi_file_viewer",
    "endpoint": "/multi_pdf_base64",
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
@app.post("/multi_pdf_base64")
async def get_multi_pdf_base64(
    pdf_name: List[str] = Body(..., embed=True)
) -> List[Union[DataContent, DataError]]:
    """Get multiple PDF files in base64 format"""
    files = []
    for name in pdf_name:
        pdf = next((p for p in SAMPLE_PDFS if p["name"] == name), None)
        if not pdf:
            files.append(
                DataError(
                    error_type="not_found", 
                    content=f"PDF '{name}' not found"
                ).model_dump()
            )
            continue

        file_path = ROOT_PATH / pdf["location"]
        if not file_path.exists():
            files.append(
                DataError(
                    error_type="not_found",
                    content=f"PDF file '{pdf['location']}' not found on disk"
                ).model_dump()
            )
            continue

        with open(file_path, "rb") as file:
            base64_content = base64.b64encode(file.read()).decode("utf-8")
            files.append(
                DataContent(
                    content=base64_content,
                    data_format=FileDataFormat(
                        data_type="pdf",
                        filename=f"{pdf['name']}.pdf"
                    )
                ).model_dump()
            )

    return JSONResponse(
        headers={"Content-Type": "application/json"},
        content=files
    )
```

### Multi File Viewer with URL

A widget that displays multiple PDF files using URLs. This method is more efficient for larger files as they're loaded directly from the URL.

<img className="pro-border-gradient" width="800" alt="Multi PDF Viewer with URL Example" src="https://openbb-cms.directus.app/assets/7d4fc0e6-f458-49a1-9be9-161d2bec1886.png" />

```python
from pydantic import BaseModel
from typing import List, Union
from fastapi import Body

class FileOption(BaseModel):
    label: str
    value: str

class FileDataFormat(BaseModel):
    data_type: str
    filename: str

class DataContent(BaseModel):
    content: str
    data_format: FileDataFormat

class DataUrl(BaseModel):
    url: str
    data_format: FileDataFormat

class DataError(BaseModel):
    error_type: str
    content: str

@register_widget({
    "name": "Multi PDF Viewer - URL",
    "description": "View multiple PDF files using URLs",
    "type": "multi_file_viewer", 
    "endpoint": "/multi_pdf_url",
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
@app.post("/multi_pdf_url")
async def get_multi_pdf_url(
    pdf_name: List[str] = Body(..., embed=True)
) -> List[Union[DataUrl, DataError]]:
    """Get multiple PDF files via URLs"""
    files = []
    for name in pdf_name:
        pdf = next((p for p in SAMPLE_PDFS if p["name"] == name), None)
        if not pdf:
            files.append(
                DataError(
                    error_type="not_found",
                    content=f"PDF '{name}' not found"
                ).model_dump()
            )
            continue

        if url := pdf.get("url"):
            files.append(
                DataUrl(
                    url=url,
                    data_format=FileDataFormat(
                        data_type="pdf",
                        filename=f"{pdf['name']}.pdf"
                    )
                ).model_dump()
            )
        else:
            files.append(
                DataError(
                    error_type="not_found",
                    content=f"URL not found for '{name}'"
                ).model_dump()
            )

    return JSONResponse(
        headers={"Content-Type": "application/json"},
        content=files
    )
```

## Multi File Viewer with Category Filtering

This multi-file-viewer widget introduces a parameter called `optionsParams` which allows you to pass the options to an endpoint from a different parameter. More information [here](../widget-parameters/dependent-dropdown.md).

In our case we want to pass the options in the `type` parameter to the `/whitepapers/options` endpoint to filter the list of whitepapers.

<img className="pro-border-gradient" width="600" alt="multi-file-viewer" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/multi-file-viewer.png" />


```python
from pydantic import BaseModel
from typing import List, Union
from fastapi import Body

class FileOption(BaseModel):
    label: str
    value: str

class FileDataFormat(BaseModel):
    data_type: str
    filename: str

class DataContent(BaseModel):
    content: str
    data_format: FileDataFormat

class DataUrl(BaseModel):
    url: str
    data_format: FileDataFormat

class DataError(BaseModel):
    error_type: str
    content: str

# Sample whitepaper data with categories
WHITEPAPERS = [
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
        "name": "Chainlink",
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

@app.get("/whitepapers/options")
async def get_whitepaper_options(category: str = Query("all")) -> List[FileOption]:
    """Get list of available whitepapers filtered by category"""
    if category == "all":
        return [
            FileOption(label=wp["name"], value=wp["name"])
            for wp in WHITEPAPERS
        ]
    return [
        FileOption(label=wp["name"], value=wp["name"])
        for wp in WHITEPAPERS
        if wp["category"] == category
    ]

@register_widget({
    "name": "Whitepapers",
    "description": "A collection of crypto whitepapers.",
    "type": "multi_file_viewer",
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
            "optionsEndpoint": "/whitepapers/options",
            "show": False,
            "optionsParams": {
                "category": "$category"
            },
            "multiSelect": True,
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
})
@app.post("/whitepapers/view-base64")
async def view_whitepapers_base64(
    whitepaper: List[str] = Body(..., embed=True),
) -> List[Union[DataContent, DataError]]:
    """Get multiple whitepapers in base64 format"""
    files = []
    for name in whitepaper:
        wp = next((w for w in WHITEPAPERS if w["name"] == name), None)
        if not wp:
            files.append(
                DataError(
                    error_type="not_found",
                    content=f"Whitepaper '{name}' not found"
                ).model_dump()
            )
            continue

        file_path = ROOT_PATH / wp["location"]
        if file_path.exists():
            with open(file_path, "rb") as file:
                base64_content = base64.b64encode(file.read()).decode("utf-8")
                files.append(
                    DataContent(
                        content=base64_content,
                        data_format=FileDataFormat(
                            data_type="pdf", 
                            filename=f"{wp['name']}.pdf"
                        ),
                    ).model_dump()
                )
        else:
            files.append(
                DataError(
                    error_type="not_found", 
                    content="Whitepaper file not found"
                ).model_dump()
            )
    return JSONResponse(headers={"Content-Type": "application/json"}, content=files)

# Alternative URL version
@app.post("/whitepapers/view-url")
async def view_whitepapers_url(
    whitepaper: List[str] = Body(..., embed=True),
) -> List[Union[DataUrl, DataError]]:
    """Get multiple whitepapers via URLs"""
    files = []
    for name in whitepaper:
        wp = next((w for w in WHITEPAPERS if w["name"] == name), None)
        if not wp:
            files.append(
                DataError(
                    error_type="not_found",
                    content=f"Whitepaper '{name}' not found"
                ).model_dump()
            )
            continue
            
        if url := wp.get("url"):
            files.append(
                DataUrl(
                    url=url,
                    data_format=FileDataFormat(
                        data_type="pdf",
                        filename=f"{wp['name']}.pdf"
                    ),
                ).model_dump()
            )
        else:
            files.append(
                DataError(
                    error_type="not_found",
                    content=f"URL not found for '{name}'"
                ).model_dump()
            )
    return JSONResponse(headers={"Content-Type": "application/json"}, content=files)
```

More examples can be found on the github repository at https://github.com/OpenBB-finance/backends-for-openbb