---
title: Markdown Example
sidebar_position: 4
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

# Introduction

This guide will walk you through the process of creating a markdown widget for OpenBB Terminal Pro. By the end of this guide, you will have a working markdown widget that you can add to OpenBB Terminal Pro.

## Step 1: Set Up Your Project

To get started, create the main application file and the widget configuration file. You will only need these two files:

- `main.py`: This file will contain your FastAPI application code.
- `widgets.json`: This file will define the configuration for your widget.

The backend will use the same FastAPI setup and structure as described in the [Custom Backend](/content/terminal/custom-backend/custom-backend.md) page.

## Step 2: Create the Markdown Endpoint

Edit the `main.py` file and add the following code. This code sets up a FastAPI application with an endpoint to serve the widget configuration and data for a markdown widget to display:

```python
...
# Markdown endpoint
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

> **Note:** The `dedent` function is used to remove leading whitespace from the markdown string. This is a good practice to ensure the markdown is formatted correctly.

### Edit the widgets.json File

Open the `widgets.json` file and add the following JSON data. This configuration defines the widget's properties and how it should be displayed in the OpenBB Terminal Pro.

```json
{
  "defi_llama_protocol_details": {
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

Once you have added your backend, you can find the widget in the `Crypto` category with the name `Defi Llama Protocol Details`.

<img className="pro-border-gradient" width="600" alt="markdown" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/markdown-widget.png" />

## Additional Resources

You can find more examples of how to set up your own backend in the [Backend for Terminal Pro GitHub](https://github.com/OpenBB-finance/backend-for-terminal-pro).
