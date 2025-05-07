---
title: Boolean Toggle
sidebar_position: 22
description: Learn how to implement and use boolean toggle parameters in OpenBB Workspace widgets, including configuration options and example usage
keywords:
- boolean toggle
- switch
- toggle
- widget parameters
- enable/disable
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Boolean Toggle | OpenBB Workspace Docs" />

A widget that includes a boolean toggle parameter allowing users to enable or disable features. The toggle state is passed to the widget as a parameter.

<img className="pro-border-gradient" width="800" alt="Boolean Toggle Parameter Example" src="https://openbb-cms.directus.app/assets/c4cc2d7f-c8f0-417c-a7ac-3842150e1aa1.png" />

```python
@register_widget({
    "name": "Markdown Widget with Boolean Toggle",
    "description": "A markdown widget with a boolean parameter",
    "endpoint": "markdown_widget_with_boolean",
    "gridData": {"w": 16, "h": 6},
    "type": "markdown",
    "params": [
        {
            "paramName": "condition",
            "description": "Enable or disable this feature",
            "label": "Toggle Option",
            "type": "boolean",
            "value": True,
        }
    ]
})
@app.get("/markdown_widget_with_boolean")
def markdown_widget_with_boolean(condition: bool):
    """Returns a markdown widget with boolean parameter"""
    return f"""# Boolean Toggle
Current state: {'Enabled' if condition else 'Disabled'}
""" 