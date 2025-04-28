---
title: Table
sidebar_position: 1
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

# Table Widget

This guide will walk you through the process of creating a table widget for OpenBB Workspace. By the end of this guide, you will have a working table widget that you can add to OpenBB.

## Step 1: Set Up Your Project

To get started, create the main application file and the widget configuration file. You will only need these two files:

- `main.py`: This file will contain your FastAPI application code.
- `widgets.json`: This file will define the configuration for your widget.

The backend will use the same FastAPI setup and structure as described in the [Custom Backend](/content/workspace/custom-backend/custom-backend.md) page.

## Step 2: Create your Table Endpoint

Edit the `main.py` file and add the following code. This code sets up an endpoint to serve the widget configuration, in this case we are using the api.llama.fi/v2/chains endpoint to fetch the data for the table :

```python
...
# Table endpoint
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

Open the `widgets.json` file and add the following JSON data. This configuration defines the widget's properties and how it should be displayed in OpenBB Workspace.

```json
{
  "chains_table": {
    "name": "Chains table example",
    "description": "Get current TVL of all chains using Defi LLama",
    "category": "Crypto",
    "endpoint": "chains_table",
    "gridData": {
      "w": 20,
      "h": 9
    }
  }
}
```

In the widgets.json file, we're creating a widget that shows the current Total Value Locked (TVL) for various blockchain chains using data from the Defi Llama API.

For more information on the `widgets.json` file, see the [Widgets.json](/workspace/custom-backend/widgets-json-reference).

## Step 3: Run the Application

Start the FastAPI Server: Use Uvicorn to run your FastAPI application.

```bash
uvicorn main:app --host localhost --port 5050
```

## Step 4: Add to OpenBB Pro

Navigate to https://pro.openbb.co/app/data-connectors and add your backend by clicking on the `+ Add Data` button in the top right corner. Once there select `Custom Backend` and fill in the details. Your URL will be `http://localhost:5050`.

Once you have added your backend you can find the widget in the `Crypto` category with the name `Chains table example`.

To further configure the columns and headers in your table you can set the `columnsDefs` property in the `widgets.json` file - see [Column and Cell Rendering](Column%20and%20Cell%20Rendering.md).

<img className="pro-border-gradient" width="600" alt="table" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/simple-table.png" />

## Additional Resources

You can find more examples of how to set up your own backend in the [Backend for OpenBB Workspace GitHub](https://github.com/OpenBB-finance/backend-examples-for-openbb-workspace).
