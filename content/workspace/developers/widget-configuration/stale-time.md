---
title: Stale Time
sidebar_position: 19
description: Learn about configuring stale time for widgets in OpenBB Workspace.
keywords:
- stale time
- data freshness
- refresh indicators
- data staleness
- widget updates
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Stale Time | OpenBB Workspace Docs" />

The stale time is the time after which the data will be considered stale. You will see a refresh button in the widget becoming orange to indicate that the data is stale.

- Default: 300000 (5 minutes)
- Data older than this value will trigger a refresh when the widget is viewed again
- Should typically be less than or equal to `refetchInterval`
- Set higher for data that updates infrequently

<img className="pro-border-gradient" width="800" alt="Markdown Widget with Stale Time Example" src="https://openbb-cms.directus.app/assets/d601fda5-0ea3-40cc-8290-d0789ccb0e33.png" />

```python
@register_widget({
    "name": "Markdown Widget with Stale Time",
    "description": "A markdown widget with stale time",
    "type": "markdown",
    "endpoint": "markdown_widget_with_stale_time",
    "gridData": {"w": 12, "h": 4},
    "staleTime": 5000
})
@app.get("/markdown_widget_with_stale_time")
def markdown_widget_with_stale_time():
    """Returns a markdown widget with current time"""
    current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    return f"### Current time: {current_time}"
``` 