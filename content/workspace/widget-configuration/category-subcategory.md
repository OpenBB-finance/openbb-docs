---
title: Categories and Subcategories
sidebar_position: 16
description: Learn how to organize widgets using categories and subcategories in OpenBB Workspace.
keywords:
- category
- subcategory
- organization
- widgets
- structure
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Categories and Subcategories | OpenBB Workspace Docs" />

The category and subcategory specify the category and subcategory of the widget in the OpenBB Workspace. This is important to organize the widgets in the search for OpenBB Workspace and also for AI agents to find the best widgets to utilize for a given task.

<img className="pro-border-gradient" width="800" alt="Markdown Widget with Category and Subcategory Example" src="https://openbb-cms.directus.app/assets/bdedbc4e-64ac-44b4-a176-8f2ca31b99cf.png" />

```python
@register_widget({
    "name": "Markdown Widget with Category and Subcategory",
    "description": "A markdown widget with category and subcategory",
    "type": "markdown",
    "category": "Widgets",
    "subcategory": "Markdown Widgets",
    "endpoint": "markdown_widget_with_category_and_subcategory",
    "gridData": {"w": 12, "h": 4},
})
@app.get("/markdown_widget_with_category_and_subcategory")
def markdown_widget_with_category_and_subcategory():
    """Returns a markdown widget with category and subcategory"""
    return f"# Markdown Widget with Category and Subcategory"
``` 