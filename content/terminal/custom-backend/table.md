---
title: Table Example
sidebar_position: 1
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

This guide will walk you through the process of creating a table widget for OpenBB Terminal Pro. By the end of this guide, you will have a working table widget that you can add to OpenBB Terminal Pro.

> **Prerequisite:** Ensure you have Python > 3.11 installed on your system before proceeding.

## Step 1: Set Up Your Project

To get started, create the main application file and the widget configuration file. You will only need these two files:

- `main.py`: This file will contain your FastAPI application code.
- `widgets.json`: This file will define the configuration for your widget.

## Step 2: Create the Backend

### Edit the Main Application File

Edit the `main.py` file and add the following code. This code sets up a FastAPI application with an endpoint to serve the widget configuration and data for a table:

```python
import json
from pathlib import Path
import requests
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

app = FastAPI()

# Define allowed origins for CORS
origins = [
    "https://pro.openbb.co",
    "https://excel.openbb.co"
]

# Add CORS middleware to the application
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

ROOT_PATH = Path(__file__).parent.resolve()

@app.get("/")
def read_root():
    """Root endpoint providing basic information."""
    return {"Info": "Full example for OpenBB Custom Backend"}

@app.get("/widgets.json")
def get_widgets():
    """Endpoint to serve the widgets configuration file."""
    return JSONResponse(
        content=json.load((ROOT_PATH / "widgets.json").open())
    )

@app.get("/chains_table")
def chains_table():
    """Endpoint to fetch the current TVL of all chains using Defi Llama."""
    params = {}
    response = requests.get("https://api.llama.fi/v2/chains", params=params)

    if response.status_code == 200:
        return response.json()

    print(f"Request error {response.status_code}: {response.text}")
    return JSONResponse(
        content={"error": response.text}, status_code=response.status_code
    )
```

### Edit the widgets.json File

Open the `widgets.json` file and add the following JSON data. This configuration defines the widget's properties and how it should be displayed in the OpenBB Terminal Pro.

```json
{
  "chains_table": {
    "name": "Chains table example",
    "description": "Get current TVL of all chains using Defi LLama",
    "category": "crypto",
    "searchCategory": "crypto",
    "endpoint": "chains_table",
    "gridData": {
      "w": 20,
      "h": 9
    },
    "data": {
      "table": {
        "showAll": true,
        "columnsDefs": [
          {
            "headerName": "Name",
            "field": "name",
            "chartDataType": "category"
          },
          {
            "headerName": "Total Value Locked",
            "field": "tvl"
          },
          {
            "headerName": "Token Symbol",
            "field": "tokenSymbol",
            "chartDataType": "category"
          }
        ]
      }
    }
  }
}
```

In the chains_table section of the widgets.json file, we're crafting a widget that showcases the current Total Value Locked (TVL) for various blockchain chains using data from the Defi Llama API. We've set it up under the "crypto" category. We're defining the columnsDefs to further configure the table. We'll also set gridData to determine the widget's size on the dashboard. This setup ensures that users can easily access and analyze key blockchain metrics right within the OpenBB Terminal Pro, making it a handy tool for anyone interested in crypto data.

For more information on the `widgets.json` file, see the [Widgets.json](/content/terminal/custom-backend/widgets.json) page.

## Step 3: Run the Application

Start the FastAPI Server: Use Uvicorn to run your FastAPI application.

```python
Run `uvicorn main:app --port 5050`
```

## Step 4: Add to OpenBB Pro

Navigate to https://pro.openbb.co/app/data-connectors and add your backend by clicking on the `+ Add Data` button in the top right corner. Once there select `Custom Backend` and fill in the details. Your URL will be `http://127.0.0.1:5050`.

Once you have added your backend you can find the widget in the `Crypto` category with the name `Chains table example`.

## Additional Resources

You can find more examples of how to set up your own backend in the [Backend for Terminal Pro GitHub](https://github.com/OpenBB-finance/backend-for-terminal-pro).
