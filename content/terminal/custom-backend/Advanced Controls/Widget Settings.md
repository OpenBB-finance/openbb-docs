---
title: Widget Settings
sidebar_position: 5
description: Learn how to integrate your own backend with OpenBB Terminal Pro using
  the cookie-cutter or language-agnostic API approaches, with illustrative guides
  and principles for handling widget.json files, APIs, interfaces, Python, FastAPI
  and more.
keywords:
- widgets.json
- OpenBB API
- Endpoint integration
- widget configuration
- Language-Agnostic API
- API implementation
- Python
- FastAPI
- Terminal Pro widgets
- Widget definitions
---

# Widget Settings

This guide covers the essential settings for configuring widget appearance, positioning, and data refresh behavior in OpenBB Terminal Pro.

## Grid Dimensions

Widgets use a grid-based layout system where you can specify their width and height. Configure these in the `gridData` object:

```json
{
    "gridData": {
        "w": 20,  // Width in grid units (max: 40)
        "h": 9    // Height in grid units (max: 100)
    }
}
```

- **Width (w)**: Determines the horizontal span of the widget
  - Maximum value: 40 units
  - Recommended range: 10-30 units for most widgets
  - Full-width widgets - 40 units

- **Height (h)**: Sets the vertical span of the widget
  - Maximum value: 100 units
  - Recommended range: 8-20 units for standard widgets
  - Larger values useful for detailed charts or tables

## Data Refresh Settings

Control how and when widget data updates using these two key settings:

### Refresh Interval

The `refetchInterval` determines how often the widget updates its data while visible on screen:

```json
{
    "refetchInterval": 900000  // 15 minutes in milliseconds
}
```

- Default: 900000 (15 minutes)
- Set to `0` to disable automatic refreshing
- Use lower values for real-time data (e.g., 60000 for 1-minute updates)
- Higher values recommended for static or slowly changing data

### Stale Time

The `staleTime` setting controls when data is considered outdated and needs refreshing when revisiting a dashboard:

```json
{
    "staleTime": 300000  // 5 minutes in milliseconds
}
```

- Default: 300000 (5 minutes)
- Data older than this value will trigger a refresh when the widget is viewed again
- Should typically be less than or equal to `refetchInterval`
- Set higher for data that updates infrequently

#### Example Configuration

Here's a complete example combining all these settings:

```json
{
    "custom_widget": {
        "name": "Market Overview",
        "description": "Real-time market data display",
        "gridData": {
            "w": 20,
            "h": 12
        },
        "refetchInterval": 60000,  // Update every minute
        "staleTime": 30000,        // Consider data stale after 30 seconds
        // ... other widget configuration ...
    }
}
```

## Search Category Settings

In the `widgets.json` configuration, you can define how widgets are organized using categories and subcategories. This helps users easily find and interact with widgets by grouping them logically.

- **category**: A primary category for the widget. Example: `"crypto"`.
- **subCategory**: A secondary category for more refined organization. Example: `"fundamentals"`.

These fields allow you to structure your widgets in a way that enhances user experience by making it easier to navigate through different types of widgets based on their purpose or data source.

## Best Practices

1. **Grid Sizing**
   - Match dimensions to content type (e.g., wider for tables, squarer for charts)
   - Consider screen real estate and readability
   - Test different sizes for optimal user experience

2. **Refresh Settings**
   - Balance data freshness against server load
   - Consider your data source's update frequency
   - Use shorter intervals only when necessary for real-time data
   - Set `staleTime` lower than `refetchInterval` for consistent behavior

3. **Performance**
   - Higher refresh rates increase server load and API calls
   - Group similar widgets with matching refresh intervals
   - Consider using longer intervals for historical or static data