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
- cron
- cron expression
- scheduled refresh
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Refetch Interval | OpenBB Workspace Docs" />

The refetch interval is the interval at which the widget will be refreshed. Use lower values for real-time data (e.g., 60000 for 1-minute updates). Higher values are recommended for static or slowly changing data.

- Default: 900000 (15 minutes) (minimum 1000)
- Accepts a number (milliseconds), `false`, or a cron expression string
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

## Refetch Interval with Cron Expression

Instead of a fixed interval in milliseconds, you can use a cron expression to schedule refetches at specific times. The widget will calculate the time until the next cron boundary and schedule the refetch accordingly.

Cron-based `refetchInterval` controls when the widget refetches while it is active on the page. To show users the same schedule in the refresh tooltip, configure `dataUpdateDisplay` with the same cron expression. The tooltip's "Last update" value is calculated from the cron expression and represents the previous scheduled data update time, not the widget's last refresh time.

<img className="pro-border-gradient" width="800" alt="Markdown Widget with Short Refetch Interval and Run Button Example" src="https://openbb-cms.directus.app/assets/97764965-85ea-49c2-82a0-d7122605da4a.png" />

```python
@register_widget({
    "name": "Markdown Widget with Cron Refetch Only",
    "description": "A markdown widget that auto-refreshes on cron schedule boundaries without displaying a separate data update schedule.",
    "type": "markdown",
    "endpoint": "markdown_widget_with_cron_refetch_only",
    "refetchInterval": "*/1 * * * *",  # Every minute, using standard 5-field cron syntax
    "gridData": {"w": 20, "h": 6},
})
@router.get("/markdown_widget_with_cron_refetch_only")
def markdown_widget_with_cron_refetch_only():
    """Returns a markdown widget that auto-refreshes every minute via cron without display metadata"""
    updated_at = last_minute_data_update()
    return (
        "# Cron Refetch Only\n\n"
        f"Data updated at: {updated_at}\n\n"
        "Backend data schedule: Every minute\n\n"
        "This timestamp is controlled by the backend data schedule, not request time."
    )
```

Common cron expressions:

| Expression | Description |
|---|---|
| `* * * * *` | Every minute |
| `*/5 * * * *` | Every 5 minutes |
| `0 * * * *` | Every hour |
| `0 8 * * 1-5` | At 8:00AM, Monday through Friday |
| `0 10 * * *` | Daily at 10:00AM |
