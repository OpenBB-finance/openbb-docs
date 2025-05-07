---
title: Structured API Widget Organization
sidebar_position: 7
description: Learn how to organize API endpoints by vendor/domain for better maintainability in OpenBB Workspace.
keywords:
- API structure
- endpoint organization
- vendor organization
- domain organization
- API maintainability
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Structured API Widget Organization | OpenBB Workspace Docs" />

This example demonstrates how to organize API endpoints by vendor/domain for better maintainability.

Benefits:
- Clear separation of concerns
- Reusable parameter names and options across related endpoints
- Easier to manage vendor-specific configurations
- Improved code organization and readability

Example structure: /vendor1/endpoint1, /vendor1/endpoint2, /vendor2/endpoint1, /vendor2/endpoint2, etc.
This can be done not only based on vendors, but also based on the type of data, e.g. /stocks/endpoint1, /commodities/endpoint2, etc.

<img className="pro-border-gradient" width="800" alt="Structured API Widget Example" src="https://openbb-cms.directus.app/assets/e90c6a8d-2e18-4727-95cb-8866ebc3a294.png" />

```python
@register_widget({
    "name": "Markdown Widget with better structured API",
    "description": "A simple markdown widget with a better structured API",
    "type": "markdown",
    "endpoint": "/vendor1/markdown_widget_with_better_structured_api",
    "gridData": {"w": 12, "h": 4},
    "refetchInterval": 10000,
    "runButton": True
})
@app.get("/vendor1/markdown_widget_with_better_structured_api")
def markdown_widget_with_better_structured_api():
    """Returns a markdown widget with current time"""
    return "vendor1/markdown_widget_with_better_structured_api"
``` 