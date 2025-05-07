---
title: Refetch Interval
sidebar_position: 5
description: Learn about configuring refetch intervals for widgets in OpenBB Workspace.
keywords:
- refetch interval
- auto refresh
- data updates
- refresh rate
- widget updates
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Refetch Interval | OpenBB Workspace Docs" />

The refetch interval is the interval at which the widget will be refreshed. Use lower values for real-time data (e.g., 60000 for 1-minute updates). Higher values are recommended for static or slowly changing data.

- Default: 900000 (15 minutes) (minimum 1000)
- Set to `false` to disable automatic refreshing
- Use lower values for real-time data (e.g., 60000 for 1-minute updates)
- Higher values recommended for static or slowly changing data

Note that when interacting with a particular widget this will trigger a refresh.

<img className="pro-border-gradient" width="800" alt="Markdown Widget with Short Refetch Interval Example" src="https://openbb-cms.directus.app/assets/4b016db5-5265-4e3b-84f9-506aa4fd9c42.png" />

```python
@register_widget({
    "name": "Markdown Widget with Short Refetch Interval",
    "description": "A markdown widget with a short refetch interval",
    "type": "markdown",
    "endpoint": "markdown_widget_with_short_refetch_interval",
    "gridData": {"w": 12, "h": 4},
    "refetchInterval": 1000
})
@app.get("/markdown_widget_with_short_refetch_interval")
def markdown_widget_with_short_refetch_interval():
    """Returns a markdown widget with current time"""
    current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    return f"### Current time: {current_time}"
``` 