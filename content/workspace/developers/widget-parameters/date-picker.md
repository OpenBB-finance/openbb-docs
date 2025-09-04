---
title: Date Picker
sidebar_position: 23
description: Learn how to implement and use date picker parameters in OpenBB Workspace widgets, including configuration options and example usage
keywords:
- date picker
- date input
- calendar
- widget parameters
- date selection
- datetime
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Date Picker | OpenBB Workspace Docs" />

A widget that includes a date picker parameter allowing users to select a specific date. The selected date is passed to the widget as a parameter.

<img className="pro-border-gradient" width="800" alt="Date Picker Parameter Example" src="https://openbb-cms.directus.app/assets/9adb2a80-cca6-4efd-a106-f76d570f0a5c.png" />

```python
@register_widget({
    "name": "Markdown Widget with Date Picker",
    "description": "A markdown widget with a date picker parameter",
    "endpoint": "markdown_widget_with_date_picker",
    "gridData": {"w": 16, "h": 6},
    "type": "markdown",
    "params": [
        {
            "paramName": "date_picker",
            "description": "Choose a date to display",
            "value": "$currentDate-1d",
            "label": "Select Date",
            "type": "date"
        }
    ]
})
@app.get("/markdown_widget_with_date_picker")
def markdown_widget_with_date_picker(
    date_picker: str = (datetime.now() - timedelta(days=1)).strftime("%Y-%m-%d")
):
    """Returns a markdown widget with date picker parameter"""
    return f"""# Date Picker
Selected date: {date_picker}
"""
```

Note : We use the `$currentDate` variable to get the current date. More info here : [Date Modifier in widgets.json](../json-specs/widgets-json-reference#date-modifier)
