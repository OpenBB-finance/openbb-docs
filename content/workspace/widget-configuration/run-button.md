---
title: Run Button
sidebar_position: 4
description: Learn about the run button functionality in OpenBB Workspace widgets.
keywords:
- run button
- manual refresh
- widget control
- refresh
- manual execution
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Run Button | OpenBB Workspace Docs" />

The run button allows you to run a widget by clicking it rather than having it run automatically when you change a parameter. It is located in the top right corner of the widget and replaces the refresh button. A Ctrl-click on the run button performs a hard refresh, while a regular click runs the new parameters.

Setting the refreshInterval will allow you to still refresh the widget automatically, but it is off by default when using the run button.

<img className="pro-border-gradient" width="800" alt="Markdown Widget with Run Button Example" src="https://openbb-cms.directus.app/assets/48d7d762-a39f-46f3-b205-2b1ffe13c3ef.png" />

```python
@register_widget({
    "name": "Markdown Widget with Run Button",
    "description": "A markdown widget with a run button",
    "type": "markdown",
    "endpoint": "markdown_widget_with_run_button",
    "gridData": {"w": 12, "h": 4},
    "runButton": True,
})
@app.get("/markdown_widget_with_run_button")
def markdown_widget_with_run_button():
    """Returns a markdown widget with current time"""
    current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    return f"### Current time: {current_time}"
``` 