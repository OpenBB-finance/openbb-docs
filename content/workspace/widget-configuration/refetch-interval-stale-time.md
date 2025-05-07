---
title: Refetch Interval and Stale Time
sidebar_position: 9
description: Learn how to combine refetch intervals with stale time in OpenBB Workspace widgets.
keywords:
- refetch interval
- stale time
- data freshness
- refresh indicators
- widget updates
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Refetch Interval and Stale Time | OpenBB Workspace Docs" />

The refetch interval is set to 10000ms (10 seconds) and the stale time is set to 5000ms (5 seconds). Data older than stale time will make the refresh button in the widget become orange to indicate that the data is stale, and once it reaches the refetch interval, the widget will be refreshed and the indicator will turn green again.

<img className="pro-border-gradient" width="800" alt="Markdown Widget with Refetch Interval and Stale Time Example" src="https://openbb-cms.directus.app/assets/9313f7e3-0ab6-42ae-877d-8868c84d044b.png" />

```python
@register_widget({
    "name": "Markdown Widget with Refetch Interval and Shorter Stale Time",
    "description": "A markdown widget with a short refetch interval and a shorter stale time",
    "type": "markdown",
    "endpoint": "markdown_widget_with_refetch_interval_and_shorter_stale_time",
    "gridData": {"w": 12, "h": 4},
    "refetchInterval": 10000,
    "staleTime": 5000
})
@app.get("/markdown_widget_with_refetch_interval_and_shorter_stale_time")
def markdown_widget_with_refetch_interval_and_shorter_stale_time():
    """Returns a markdown widget with current time"""
    current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    return f"### Current time: {current_time}"
``` 