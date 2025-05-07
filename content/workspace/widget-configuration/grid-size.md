---
title: Grid Size
sidebar_position: 1
description: Learn about the grid-based layout system for widgets in OpenBB Workspace, including width and height specifications.
keywords:
- grid
- layout
- width
- height
- widgets
- gridData
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Grid Size | OpenBB Workspace Docs" />

Widgets use a grid-based layout system where you can specify their width and height in the `gridData` object. Here's a simple example:

<img className="pro-border-gradient" width="800" alt="Markdown Widget with Error Handling Example" src="https://openbb-cms.directus.app/assets/efd6fb45-063a-4aa7-ae42-64b440bc8682.png" />

```python
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

The grid system works as follows:

**Width (w)**: Horizontal span (10-40 units)

- 12 units is a good default for most widgets
- Use 40 units for full-width widgets

**Height (h)**: Vertical span (4-100 units)

- 4-8 units for simple widgets
- 8-20 units for standard widgets
- Larger values for detailed charts or tables

### Example

This is the code utilized to add the widgets in the image above.

```python
@register_widget({
    "name": "Markdown Widget w-12 x h-20",
    "description": "A markdown widget",
    "type": "markdown",
    "endpoint": "markdown_widget2",
    "gridData": {"w": 12, "h": 20},
})
@app.get("/markdown_widget2")
def markdown_widget2():
    """Returns a markdown widget"""
    return "# Markdown Widget w-12 x h-20"

@register_widget({
    "name": "Markdown Widget w-40 x h-4",
    "description": "A markdown widget",
    "type": "markdown",
    "endpoint": "markdown_widget3",
    "gridData": {"w": 40, "h": 4},
})
@app.get("/markdown_widget3")
def markdown_widget3():
    """Returns a markdown widget"""
    return "# Markdown Widget w-40 x h-4"

@register_widget({
    "name": "Markdown Widget w-14 x h-12",
    "description": "A markdown widget",
    "type": "markdown",
    "endpoint": "markdown_widget4",
    "gridData": {"w": 14, "h": 12},
})
@app.get("/markdown_widget4")
def markdown_widget4():
    """Returns a markdown widget"""
    return "# Markdown Widget w-14 x h-12"

@register_widget({
    "name": "Markdown Widget w-28 x h-8",
    "description": "A markdown widget",
    "type": "markdown",
    "endpoint": "markdown_widget5",
    "gridData": {"w": 28, "h": 8},
})
@app.get("/markdown_widget5")
def markdown_widget5():
    """Returns a markdown widget"""
    return "# Markdown Widget w-28 x h-8"

@register_widget({
    "name": "Markdown Widget w-14 x h-6",
    "description": "A markdown widget",
    "type": "markdown",
    "endpoint": "markdown_widget6",
    "gridData": {"w": 14, "h": 6},
})
@app.get("/markdown_widget6")
def markdown_widget6():
    """Returns a markdown widget"""
    return "# Markdown Widget w-14 x h-6"
```