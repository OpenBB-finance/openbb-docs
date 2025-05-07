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