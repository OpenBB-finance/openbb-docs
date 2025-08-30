---
title: Dropdown
sidebar_position: 27
description: Learn how to implement and use dropdown parameters in OpenBB Workspace widgets, including configuration options and example usage
keywords:
- dropdown
- select
- combobox
- widget parameters
- selection list
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Dropdown | OpenBB Workspace Docs" />

A widget that includes a dropdown parameter allowing users to select from predefined options. The selected option is passed to the widget as a parameter.

Note that multiSelect can be turned on and off.

<img className="pro-border-gradient" width="800" alt="Dropdown Parameter Example" src="https://openbb-cms.directus.app/assets/d657c7d2-e096-42ea-9d9a-92a10093afd0.png" />

```python
@register_widget({
    "name": "Markdown Widget with Dropdown",
    "description": "A markdown widget with a dropdown parameter",
    "endpoint": "markdown_widget_with_dropdown",
    "gridData": {"w": 16, "h": 6},
    "type": "markdown",
    "params": [
        {
            "paramName": "days_picker",
            "description": "Number of days to look back",
            "value": "1",
            "label": "Select Days",
            "type": "text",
            "multiSelect": True,
            "options": [
                {
                    "value": "1",
                    "label": "1"
                },
                {
                    "value": "5",
                    "label": "5"
                },
                {
                    "value": "10",
                    "label": "10"
                },
                {
                    "value": "20",
                    "label": "20"
                },
                {
                    "value": "30",
                    "label": "30"
                }
            ]
        }
    ]
})
@app.get("/markdown_widget_with_dropdown")
def markdown_widget_with_dropdown(days_picker: str):
    """Returns a markdown widget with dropdown parameter"""
    return f"""# Dropdown
Selected days: {days_picker}
""" 