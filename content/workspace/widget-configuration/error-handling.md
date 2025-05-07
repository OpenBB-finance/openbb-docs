---
title: Error Handling
sidebar_position: 3
description: Learn how to handle errors in your widgets in OpenBB Workspace.
keywords:
- error handling
- HTTPException
- error management
- widgets
- status codes
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Error Handling | OpenBB Workspace Docs" />

This is a simple widget that demonstrates how to handle errors in your widgets.

We display the error detail message in the markdown widget that is returned from the endpoint.

<img className="pro-border-gradient" width="800" alt="Markdown Widget with Error Handling Example" src="https://openbb-cms.directus.app/assets/c8671675-d4d0-4b3d-ada1-d4eae95ca859.png" />

```python
@register_widget({
    "name": "Markdown Widget with Error Handling",
    "description": "A markdown widget with error handling",
    "type": "markdown",
    "endpoint": "markdown_widget_with_error_handling",
    "gridData": {"w": 12, "h": 4},
})
@app.get("/markdown_widget_with_error_handling")
def markdown_widget_with_error_handling():
    """Returns a markdown widget with error handling"""
    raise HTTPException(
        status_code=500,
        detail="Error that just occurred"
    )
``` 