---
title: Refetch Interval with Run Button
sidebar_position: 6
description: Learn how to combine refetch intervals with run button functionality in OpenBB Workspace widgets.
keywords:
- refetch interval
- run button
- manual refresh
- auto refresh
- widget control
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Refetch Interval with Run Button | OpenBB Workspace Docs" />

The refresh interval is set to 10000ms (10 seconds) but the run button is enabled, which means that the user can refresh the widget manually.

<img className="pro-border-gradient" width="800" alt="Markdown Widget with Short Refetch Interval and Run Button Example" src="https://openbb-cms.directus.app/assets/24d777ae-d455-412d-9832-255e28eea11e.png" />

```python
@register_widget({
    "name": "Markdown Widget with Short Refetch Interval and a Run Button",
    "description": "A markdown widget with a short refetch interval and a run button",
    "type": "markdown",
    "endpoint": "markdown_widget_with_short_refetch_interval_and_run_button",
    "gridData": {"w": 12, "h": 4},
    "refetchInterval": 10000,
    "runButton": True
})
@app.get("/markdown_widget_with_short_refetch_interval_and_run_button")
def markdown_widget_with_short_refetch_interval_and_run_button():
    """Returns a markdown widget with current time"""
    current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    return f"### Current time: {current_time}"
``` 