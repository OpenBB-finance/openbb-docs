---
title: Refetch Interval
sidebar_position: 20
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

## Refetch Interval with Stale Time


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

## Refetch interval with Run Button


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