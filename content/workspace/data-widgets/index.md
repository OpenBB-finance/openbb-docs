---
title: Data Widgets
sidebar_position: 11
description: Build powerful financial dashboards with OpenBB Workspace's flexible widget system
keywords:
- widgets
- data
- visualization
- charts
- tables
- forms
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Data Widgets | OpenBB Workspace Docs" />

# Data Widgets in OpenBB Workspace

OpenBB Workspace provides a powerful and flexible UI framework that lets you create sophisticated financial dashboards through customizable data widgets.

## Getting Started

In our [Data Integration](../data-integration.md) guide, we introduced the basic structure using `main.py` and `widgets.json`. To make development even easier, we've created a Python decorator that keeps your widget specifications right next to their implementation code. You can add it as part of the initial boilerplate, so you can build a backend with a single `main.py` file:

```python
# Import required libraries
from pathlib import Path
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from functools import wraps
import asyncio

# Initialize empty dictionary for widgets
WIDGETS = {}

# Decorator that registers a widget configuration in the WIDGETS dictionary.
def register_widget(widget_config):
    """
    Decorator that registers a widget configuration in the WIDGETS dictionary.
    
    Args:
        widget_config (dict): The widget configuration to add to the WIDGETS 
            dictionary. This should follow the same structure as other entries 
            in WIDGETS.
    
    Returns:
        function: The decorated function.
    """
    def decorator(func):
        @wraps(func)
        async def async_wrapper(*args, **kwargs):
            # Call the original function
            return await func(*args, **kwargs)
            
        @wraps(func)
        def sync_wrapper(*args, **kwargs):
            # Call the original function
            return func(*args, **kwargs)
        
        # Extract the endpoint from the widget_config
        endpoint = widget_config.get("endpoint")
        if endpoint:
            # Add an id field to the widget_config if not already present
            if "id" not in widget_config:
                widget_config["id"] = endpoint
            
            WIDGETS[endpoint] = widget_config
        
        # Return the appropriate wrapper based on whether the function is async
        if asyncio.iscoroutinefunction(func):
            return async_wrapper
        return sync_wrapper
    return decorator

# Initialize FastAPI application with metadata
app = FastAPI(
    title="Simple Backend",
    description="Simple backend app for OpenBB Workspace",
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

ROOT_PATH = Path(__file__).parent.resolve()

@app.get("/")
def read_root():
    """Root endpoint that returns basic information about the API"""
    return {"Info": "Hello World"}


# Endpoint that returns the registered widgets configuration
# The WIDGETS dictionary is maintained by the registry.py helper
# which automatically registers widgets when using the @register_widget decorator
@app.get("/widgets.json")
def get_widgets():
    """Returns the configuration of all registered widgets
    
    The widgets are automatically registered through the @register_widget decorator
    and stored in the WIDGETS dictionary from registry.py
    
    Returns:
        dict: The configuration of all registered widgets
    """
    return WIDGETS


# Simple markdown widget
@register_widget({
    "name": "Markdown Widget",
    "description": "A markdown widget",
    "type": "markdown",
    "endpoint": "markdown_widget",
    "gridData": {"w": 12, "h": 4},
})
@app.get("/markdown_widget")
def markdown_widget():
    """Returns a markdown widget"""
    return "# Markdown Widget"
```

## Example Widgets

Throughout this documentation, you'll find examples that include both a visual preview and the corresponding code implementation, using our `register_widget` decorator. Each example includes the complete widget configuration and data.

<div className="flex justify-center">
  <img width="800" alt="Example Markdown Widget" src="https://openbb-cms.directus.app/assets/60cbbcb5-194e-4c03-905e-65f3de7f4efe.png" />
</div>

```python
# Simple markdown widget
@register_widget({
    "name": "Markdown Widget",
    "description": "A markdown widget",
    "type": "markdown",
    "endpoint": "markdown_widget",
    "gridData": {"w": 12, "h": 4},
})
@app.get("/markdown_widget")
def markdown_widget():
    """Returns a markdown widget"""
    return "# Markdown Widget"
```

For more examples and complete implementations, visit our [reference backend repository](https://github.com/OpenBB-finance/backend-examples-for-openbb-workspace/tree/main/getting-started/reference-backend).
