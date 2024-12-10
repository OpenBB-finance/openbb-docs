---
title: Metric Example
sidebar_position: 3
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

This guide will walk you through the process of creating a metric widget for OpenBB Terminal Pro. By the end of this guide, you will have a working metric widget that you can add to OpenBB Terminal Pro.

> **Prerequisite:** Ensure you have Python > 3.11 installed on your system before proceeding.

## Step 1: Set Up Your Project

To get started, create the main application file and the widget configuration file. You will only need these two files:

- `main.py`: This file will contain your FastAPI application code.
- `widgets.json`: This file will define the configuration for your widget.

## Step 2: Create the Backend

### Edit the Main Application File

Edit the `main.py` file and add the following code. This code sets up a FastAPI application with an endpoint to serve the widget configuration and data for a metric:

```python
...
# Metric endpoint
@app.get("/test_metric")
def test_metric():
    """Example endpoint to provide metric data."""
    # Example data structure
    data = {
        "label": "Example Label",
        "value": "12345",
        "delta": "5.67"
    }

    return JSONResponse(content=data)
```

### Edit the widgets.json File

Edit the `widgets.json` file and add the following JSON data. This configuration defines the widget's properties and how it should be displayed:

```json
{
  "test_metric": {
    "name": "Test Metric",
    "description": "Test Metric",
    "category": "test",
    "endpoint": "test_metric",
    "type": "metric"
  }
}
```

For more information on the `widgets.json` file, see the [Widgets.json](/content/terminal/custom-backend/widgets.json) page.

## Step 3: Run the Application

Start the FastAPI Server using Uvicorn. This will host your backend locally:

```bash
uvicorn main:app --port 5050
```

## Step 4: Add to OpenBB Pro

Navigate to [OpenBB Pro Data Connectors](https://pro.openbb.co/app/data-connectors) and add your backend by clicking on the `+ Add Data` button in the top right corner. Select `Custom Backend` and fill in the details. Your URL will be `http://127.0.0.1:5050`.

Once you have added your backend, you can find the widget in the `Test` category with the name `Test Metric`.

## Additional Resources

You can find more examples of how to set up your own backend in the [Backend for Terminal Pro GitHub](https://github.com/OpenBB-finance/backend-for-terminal-pro).