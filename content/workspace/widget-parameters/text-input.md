---
title: Text Input Parameter
sidebar_position: 21
description: Learn how to implement and use text input parameters in OpenBB Workspace widgets, including configuration options and example usage
keywords:
- text input
- text box
- input field
- widget parameters
- text entry
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Text Input | OpenBB Workspace Docs" />

A widget that includes a text input parameter allowing users to enter custom text. The entered text is passed to the widget as a parameter.

<img className="pro-border-gradient" width="800" alt="Text Input Parameter Example" src="https://openbb-cms.directus.app/assets/b126ba58-ff29-4923-b124-1a0314ad4842.png" />

```python
@register_widget({
    "name": "Markdown Widget with Text Input",
    "description": "A markdown widget with a text input parameter",
    "endpoint": "markdown_widget_with_text_input",
    "gridData": {"w": 16, "h": 6},
    "type": "markdown",
    "params": [
        {
            "paramName": "text_box",
            "value": "hello",
            "label": "Enter Text",
            "description": "Type something to display",
            "type": "text"
        }
    ]
})
@app.get("/markdown_widget_with_text_input")
def markdown_widget_with_text_input(text_box: str):
    """Returns a markdown widget with text input parameter"""
    return f"""# Text Input
Entered text: {text_box}
""" 