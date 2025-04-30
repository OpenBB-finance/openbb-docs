---
title: Overview
sidebar_position: 10
description: Learn how to integrate your own data sources and APIs into OpenBB Workspace with a custom backend solution.
keywords:
- Data Integration
- Custom Backend
- API Endpoints
- Widget Configuration
- Data Connectors
- User Interface
- Real-time Updates
- Single Widget
- Data Key Parameter
- Nested JSON
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';
import TutorialVideo from '@site/src/components/General/TutorialVideo.tsx';

<HeadTitle title="Data Integration | OpenBB Workspace Docs" />

OpenBB Workspace provides a powerful custom backend feature that enables you to integrate your own data sources and APIs directly into the platform. This integration capability allows you to:

- Create personalized widgets that display your custom data
- Leverage OpenBB's AI agents with your proprietary data
- Build a seamless workflow between your data sources and OpenBB's analysis tools

A custom backend is an API that returns data in a format that OpenBB Workspace understands, with specifications defined in a `widgets.json` file. This approach gives you complete flexibility in choosing your technology stack while ensuring compatibility with OpenBB Workspace.

<TutorialVideo
  youtubeLink="https://www.youtube.com/embed/BbAGb-fciIc?si=IM_WJ9miEaqFKJAN"
  videoLegend="Learn how to integrate your custom backend with OpenBB Workspace"
/>

## Getting Started: Hello World Example

Let's walk through a simple example to demonstrate how to integrate a custom backend. We'll create a basic "Hello World" application that you can use as a template for your own integrations.

The complete example code is available in our [GitHub repository](https://github.com/OpenBB-finance/backend-examples-for-openbb-workspace/tree/refactor-docs/getting-started/hello-world).

### 0. Prerequisites

Before we begin, ensure you have the following installed:

```bash
pip install fastapi uvicorn
```

### 1. Create the API Server

Create a `main.py` file with the following code:

```python
# Import required libraries
import json
from pathlib import Path
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

# Initialize FastAPI application with metadata
app = FastAPI(
    title="Hello World",
    description="Hello World app for OpenBB Workspace",
    version="0.0.1"
)

# Define allowed origins for CORS (Cross-Origin Resource Sharing)
# This restricts which domains can access the API
origins = [
    "https://pro.openbb.co",
]

# Configure CORS middleware to handle cross-origin requests
# This allows the specified origins to make requests to the API
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

@app.get("/")
def read_root():
    """Root endpoint that returns basic information about the API"""
    return {"Info": "Hello World example"}

# Widgets configuration file for the OpenBB Workspace
# it contains the information and configuration about all the
# widgets that will be displayed in the OpenBB Workspace
@app.get("/widgets.json")
def get_widgets():
    """Widgets configuration file for the OpenBB Workspace
    
    Returns:
        JSONResponse: The contents of widgets.json file
    """
    # Read and return the widgets configuration file
    return JSONResponse(
        content=json.load((Path(__file__).parent.resolve() / "widgets.json").open())
    )

# Apps configuration file for the OpenBB Workspace
# it contains the information and configuration about all the
# apps that will be displayed in the OpenBB Workspace
@app.get("/apps.json")
def get_apps():
    """Apps configuration file for the OpenBB Workspace
    
    Returns:
        JSONResponse: The contents of apps.json file
    """
    # Read and return the apps configuration file
    return JSONResponse(
        content=json.load((Path(__file__).parent.resolve() / "apps.json").open())
    )

# Hello World endpoint - for it to be recognized by the OpenBB Workspace
# it needs to be added to the widgets.json file endpoint
@app.get("/hello_world")
def hello_world(name: str = ""):
    """Returns a personalized greeting message.

    Args:
        name (str, optional): Name to include in the greeting. Defaults to empty string.

    Returns:
        str: A greeting message with the provided name in markdown format.
    """
    # Return a markdown-formatted greeting with the provided name
    return f"# Hello World {name}"
```

### 2. Configure Widgets

Create a `widgets.json` file to define your widget's properties. This file is your main configuration and defines widget properties such as name, description, category, endpoint, type of widget, and other information. Each widget will be defined in this file:

```json
{
    "hello_world": {
        "name": "Hello World",
        "description": "A simple markdown widget that displays Hello World",
        "category": "Hello World",
        "type": "markdown",
        "endpoint": "hello_world",
        "gridData": {"w": 12, "h": 4},
        "source": "None",
        "params": [
            {
                "paramName": "name",
                "value": "",
                "label": "Name",
                "type": "text",
                "description": "Enter your name"
            }
        ]
    }
}
```

### 3. Configure App Layout (Optional)

Create an `apps.json` file to define the app's layout. This makes it so that there is a new App on OpenBB with a single markdown widget that says Hello World:

```json
[
  {
    "name": "Hello World",
    "img": "",
    "img_dark": "",
    "img_light": "",
    "description": "Hello World template",
    "allowCustomization": true,
    "tabs": {
      "": {
        "id": "",
        "name": "",
        "layout": [
          {
            "i": "hello_world",
            "x": 0,
            "y": 0,
            "w": 12,
            "h": 4,
            "state": {
              "params": {
                "name": ""
              }
            }
          }
        ]
      }
    },
    "groups": []
  }
]
```

### 4. Run the Application

Your project structure should look like this:
```
backend/
├── main.py
├── widgets.json
└── apps.json
```

Start the server with:
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 7779
```

You should see output similar to:
```bash
$ uvicorn main:app --reload --host 0.0.0.0 --port 7779
INFO:     Uvicorn running on http://0.0.0.0:7779 (Press CTRL+C to quit)
INFO:     Started reloader process [59166] using WatchFiles
INFO:     Started server process [59168]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

The application will be available at `http://127.0.0.1:7779`.

### 5. Add to OpenBB

You can then add this backend to OpenBB Workspace by right clicking on the dashboard and clicking "Add data", and do the following:

<img width="800" alt="Apps" src="https://openbb-cms.directus.app/assets/80898c79-cb04-4361-afdd-945eb3e531be.png" />

### 6. Voila

<img width="800" alt="Apps" src="https://openbb-cms.directus.app/assets/b34f315c-0f17-4e14-9b0d-0288d1cf7a5c.png" />
