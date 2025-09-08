---
title: Number Input
sidebar_position: 26
description: Learn how to implement and use number input parameters in OpenBB Workspace widgets, including configuration options and example usage
keywords:
- number input
- numeric input
- number field
- widget parameters
- numerical entry
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Number Input | OpenBB Workspace Docs" />

A widget that includes a number input parameter allowing users to enter numerical values. The entered number is passed to the widget as a parameter.

<img className="pro-border-gradient" width="800" alt="Number Input Parameter Example" src="https://openbb-cms.directus.app/assets/dc2395cf-a452-46a6-9ae4-e2be882a21c2.png" />

```python
@register_widget({
    "name": "Markdown Widget with Number Input",
    "description": "A markdown widget with a number input parameter",
    "endpoint": "markdown_widget_with_number_input",
    "gridData": {"w": 16, "h": 6},
    "type": "markdown",
    "params": [
        {
            "paramName": "number_box",
            "description": "Enter a number",
            "value": 20,
            "label": "Enter Number",
            "type": "number"
        }
    ]
})
@app.get("/markdown_widget_with_number_input")
def markdown_widget_with_number_input(number_box: int):
    """Returns a markdown widget with number input parameter"""
    return f"""# Number Input
Entered number: {number_box}
""" 