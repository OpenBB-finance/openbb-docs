---
title: Settings and Configurations
sidebar_position: 18
description: Learn about various widget settings and configurations in OpenBB Workspace, including refetch intervals, stale times, run buttons, and error handling.
keywords:
- settings
- configuration
- preferences
- widgets
- markdown
- refetch interval
- stale time
- run button
- error handling
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Settings | OpenBB Workspace Docs" />

## Widgets and grid-size

Widgets use a grid-based layout system where you can specify their width and height in the `gridData` object. Here's a simple example:

```python
@register_widget({
    "name": "Markdown Widget",
    "description": "A markdown widget",
    "type": "markdown",
    "endpoint": "markdown_widget",
    "gridData": {"w": 12, "h": 4},
})
@app.get("/markdown_widget")
def markdown_widget():
    """Returns a markdown widget"""
    return "# Markdown Widget"
```

The grid system works as follows:

**Width (w)**: Horizontal span (10-40 units)
  - 12 units is a good default for most widgets
  - Use 40 units for full-width widgets

**Height (h)**: Vertical span (4-100 units)
  - 4-8 units for simple widgets
  - 8-20 units for standard widgets
  - Larger values for detailed charts or tables

## Category and Subcategory

The category and subcategory specify the category and subcategory of the widget in the OpenBB Workspace. This is important to organize the widgets in the OpenBB Workspace, but also for AI agents to find the best widgets to utilize for a given task.

<img className="pro-border-gradient" width="800" alt="Markdown Widget with Category and Subcategory Example" src="https://openbb-cms.directus.app/assets/bdedbc4e-64ac-44b4-a176-8f2ca31b99cf.png" />

```python
@register_widget({
    "name": "Markdown Widget with Category and Subcategory",
    "description": "A markdown widget with category and subcategory",
    "type": "markdown",
    "category": "Widgets",
    "subcategory": "Markdown Widgets",
    "endpoint": "markdown_widget_with_category_and_subcategory",
    "gridData": {"w": 12, "h": 4},
})
@app.get("/markdown_widget_with_category_and_subcategory")
def markdown_widget_with_category_and_subcategory():
    """Returns a markdown widget with category and subcategory"""
    return f"# Markdown Widget with Category and Subcategory"
```

## Error Handling

This is a simple widget that demonstrates how to handle errors in your widgets.

<img className="pro-border-gradient" width="800" alt="Markdown Widget with Error Handling Example" src="https://openbb-cms.directus.app/assets/c8671675-d4d0-4b3d-ada1-d4eae95ca859.png" />

```python
@register_widget({
    "name": "Markdown Widget with Error Handling",
    "description": "A markdown widget with error handling",
    "type": "markdown",
    "endpoint": "markdown_widget_with_error_handling",
    "gridData": {"w": 12, "h": 4},
})
@app.get("/markdown_widget_with_error_handling")
def markdown_widget_with_error_handling():
    """Returns a markdown widget with error handling"""
    raise HTTPException(
        status_code=500,
        detail="Error that just occurred"
    )
```

## Run Button

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

## Short Refetch Interval

The refetch interval is the interval at which the widget will be refreshed. Use lower values for real-time data (e.g., 60000 for 1-minute updates). Higher values are recommended for static or slowly changing data.

- Default: 900000 (15 minutes) (minimum 1000)
- Set to `false` to disable automatic refreshing
- Use lower values for real-time data (e.g., 60000 for 1-minute updates)
- Higher values recommended for static or slowly changing data

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

## Short Refetch Interval and Run Button

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

## Structured API Widget Example

This example demonstrates how to organize API endpoints by vendor/domain for better maintainability.

Benefits:
- Clear separation of concerns
- Reusable parameter names and options across related endpoints
- Easier to manage vendor-specific configurations
- Improved code organization and readability

Example structure: /vendor1/endpoint1, /vendor1/endpoint2, /vendor2/endpoint1, /vendor2/endpoint2, etc.
This can be done not only based on vendors, but also based on the type of data, e.g. /stocks/endpoint1, /commodities/endpoint2, etc.

<img className="pro-border-gradient" width="800" alt="Structured API Widget Example" src="https://openbb-cms.directus.app/assets/e90c6a8d-2e18-4727-95cb-8866ebc3a294.png" />

```python
@register_widget({
    "name": "Markdown Widget with better structured API",
    "description": "A simple markdown widget with a better structured API",
    "type": "markdown",
    "endpoint": "/vendor1/markdown_widget_with_better_structured_api",
    "gridData": {"w": 12, "h": 4},
    "refetchInterval": 10000,
    "runButton": True
})
@app.get("/vendor1/markdown_widget_with_better_structured_api")
def markdown_widget_with_better_structured_api():
    """Returns a markdown widget with current time"""
    return "vendor1/markdown_widget_with_better_structured_api"
```

## Stale Time

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

## Refetch Interval and Stale Time

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
