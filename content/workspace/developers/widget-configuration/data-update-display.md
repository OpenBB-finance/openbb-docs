---
title: Data Update Display
sidebar_position: 21
description: Learn about configuring data update display for widgets in OpenBB Workspace.
keywords:
- data update
- cron schedule
- displayed schedule
- update display
- widget updates
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Data Update Display | OpenBB Workspace Docs" />

The data update display allows you to show users when a widget's data is expected to update. It renders an informational tooltip on the widget's refresh button showing the configured schedule, the previous scheduled data update time, and the next scheduled update time.

- Accepts a cron expression string (e.g., `"0 8 * * 1-5"` for weekdays at 8:00AM)
- Displays the schedule in human-readable format (e.g., "At 8:00AM, Monday through Friday")
- Shows the previous update timestamp calculated from the cron expression
- Shows the next update timestamp calculated from the cron expression
- Appears as a "Data update" section in the widget's refresh tooltip

`dataUpdateDisplay` is display-only. It does not trigger data fetching by itself, and the "Last update" value is calculated from the cron expression. It represents the last expected data update time, not the widget's last refresh time.

<img className="pro-border-gradient" width="400" alt="data update display hover" src="https://openbb-cms.directus.app/assets/2acdfbcf-13a5-4c9e-84e7-94c100a6a464.png" />

<img className="pro-border-gradient" width="600" alt="data update display widget" src="https://openbb-cms.directus.app/assets/c2001272-20e3-4183-a7ee-60c2618e8914.png" />

```python
@register_widget({
    "name": "Markdown Widget with Data Update Display Only",
    "description": "A markdown widget that displays a data update schedule without configuring automatic refresh.",
    "type": "markdown",
    "endpoint": "markdown_widget_with_data_update_display_only",
    "dataUpdateDisplay": "0 10 * * *",  # Displays as updated every day at 10:00 without driving refetches
    "gridData": {"w": 20, "h": 6},
})
@router.get("/markdown_widget_with_data_update_display_only")
def markdown_widget_with_data_update_display_only():
    """Returns a markdown widget with display-only data update metadata"""
    updated_at = last_daily_data_update(hour=10, minute=0)
    return (
        "# Data Update Display Only\n\n"
        f"Data updated at: {updated_at}\n\n"
        "Backend data schedule: Every day at 10:00\n\n"
        "This timestamp is controlled by the backend data schedule, not request time."
    )
```

## Combined with Cron Refetch Interval

You can use `dataUpdateDisplay` together with a cron-based `refetchInterval` to both schedule the actual widget refresh and display the schedule to users. When both use the same cron expression, the widget will refetch at the scheduled time while it is active on the page, and the tooltip will show the previous and next expected update times.

The displayed "Last update" value follows the cron schedule. Manual refreshes can still update the widget data, but they do not change the scheduled data update timestamp shown in this section.


<img className="pro-border-gradient" width="400" alt="Refetch interval hover" src="https://openbb-cms.directus.app/assets/d2b3ebb5-3d52-4e42-b3f8-33c245e59c90.png" />

<img className="pro-border-gradient" width="600" alt="Refetch interval widget" src="https://openbb-cms.directus.app/assets/cdb5993d-eb0d-4d93-bbb7-6bb59ce6fbbb.png" />

```python
@register_widget({
    "name": "Markdown Widget with Cron Refetch Interval",
    "description": "A markdown widget that auto-refreshes on cron schedule boundaries and displays its data update schedule in widget metadata.",
    "type": "markdown",
    "endpoint": "markdown_widget_with_cron_refetch_interval",
    "refetchInterval": "*/1 * * * *",  # Every minute, using standard 5-field cron syntax
    "dataUpdateDisplay": "*/1 * * * *",  # Shows the data update schedule in the refresh indicator tooltip
    "gridData": {"w": 20, "h": 6},
})
@router.get("/markdown_widget_with_cron_refetch_interval")
def markdown_widget_with_cron_refetch_interval():
    """Returns a markdown widget that auto-refreshes every minute via cron"""
    updated_at = last_minute_data_update()
    return (
        "# Cron Refetch Interval\n\n"
        f"Data updated at: {updated_at}\n\n"
        "Backend data schedule: Every minute\n\n"
        "This timestamp is controlled by the backend data schedule, not request time."
    )
```

## Common Cron Expressions

| Expression | Description |
|---|---|
| `* * * * *` | Every minute |
| `*/5 * * * *` | Every 5 minutes |
| `0 * * * *` | Every hour |
| `0 8 * * 1-5` | At 8:00AM, Monday through Friday |
| `0 10 * * *` | Daily at 10:00AM |
| `0 0 * * 0` | Weekly on Sunday at midnight |
