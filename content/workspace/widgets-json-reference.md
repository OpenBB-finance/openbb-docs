---
title: widgets.json Reference
sidebar_position: 22
description: Learn how to integrate your own backend with OpenBB Workspace using
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
- Workspace widgets
- Widget definitions
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Widgets.json | OpenBB Workspace Docs" />

# Widgets.json Reference Guide

## Overview

The `widgets.json` file is your configuration file that connects custom backend data to the widgets displayed in the application. Each entry in this file directly maps to a widget in the app.

### Key Components

- **Basic Information**: Defines the widget's name, description, and API endpoint
- **Metadata**: Provides categories for organization and AI enhancement
- **Display Settings**: Specifies widget type and grid dimensions
- **Data Configuration**: Details table and chart settings
- **Parameters**: Details query parameters for API endpoint customization

You can find example backends [here](https://github.com/OpenBB-finance/backend-examples-for-openbb-workspace/tree/main), where each folder contains a `widgets.json` file specifying the available widgets.

## Table of Contents

- [Basic Attributes](#basic-attributes)
- [Display Settings](#display-settings)
- [Data Configuration](#data-configuration)
- [Parameters](#parameters)
- [Special Properties](#special-properties)
- [Examples](#examples)

## Basic Attributes

### Required Fields

| Attribute | Type | Description | Example |
|-----------|------|-------------|---------|
| `name` | string | Display name of the widget | `"Options EOD Data"` |
| `description` | string | Brief description for user info and Copilot | `"Provides EOD data for all options chains for a given ticker."` |
| `endpoint` | string | Backend API endpoint for data retrieval | `"chains"` |

### Optional Fields

| Attribute | Type | Description | Example |
|-----------|------|-------------|---------|
| `wsEndpoint` | string | WebSocket endpoint for live updates | `"ws"` |
| `category` | string | Category for organizing widgets | `"Equity"` |
| `subCategory` | string | Secondary category for search refinement | `"Options"` |
| `source` | string[] | Data source(s) for the widget | `["API", "Database"]` |
| `refetchInterval` | number/false | Refresh interval in milliseconds (min: 1000) | `900000` |
| `staleTime` | number | Stale data threshold in milliseconds | `300000` |

## Display Settings

### Widget Type

The `type` attribute sets the default visualization type:

| Type | Description |
|------|-------------|
| `chart` | Standard chart visualization |
| `chart-highcharts` | Highcharts-based visualization |
| `table` | Tabular data display |
| `markdown` | Markdown content |
| `metric` | Single metric display |
| `note` | Text note display |
| `multi_file_viewer` | Multiple file viewer |
| `newsfeed` | News feed display |

### Grid Configuration

```json
"gridData": {
    "w": 20,  // Width in grid units (max: 40)
    "h": 9    // Height in grid units (max: 100)
}
```

## Data Configuration

### Table Settings

```json
"data": {
    "dataKey": "customDataKey",
    "wsRowIdColumn": "symbol",  // For Live Grid Widget
    "table": {
        "enableCharts": true,
        "showAll": true,
        "chartView": {
            "enabled": true,
            "chartType": "column",
            "ignoreCellRange": false
        }
    }
}
```

### Column Definitions

```json
"columnsDefs": [
    {
        "field": "column1",
        "headerName": "Column 1",
        "chartDataType": "category",  // category, series, time, excluded
        "cellDataType": "text",       // text, number, boolean, date, dateString, object
        "formatterFn": "none",        // See formatterFn section
        "renderFn": "titleCase",      // See render functions
        "width": 100,
        "maxWidth": 200,
        "minWidth": 50,
        "hide": false,
        "pinned": "left",            // left, right
        "headerTooltip": "Tooltip text"
    }
]
```

## Parameters

### Parameter Types

| Type | Description |
|------|-------------|
| `date` | Date selection |
| `text` | Text input |
| `ticker` | Stock ticker |
| `number` | Numeric input |
| `boolean` | True/false selection |
| `endpoint` | API endpoint selection |
| `form` | Form input |

### Parameter Configuration

```json
"params": [
    {
        "type": "date",
        "paramName": "startDate",
        "value": "2024-01-01",
        "label": "Start Date",
        "show": true,
        "description": "The start date for the data",
        "multiSelect": false,
        "style": {
            "popupWidth": 450  // 200-1000px
        }
    }
]
```

## Special Properties

### Date Modifier

Use `$currentDate` with modifiers for dynamic dates:

- `h`: hour
- `d`: day
- `w`: week
- `M`: month
- `y`: year

Examples:
- `$currentDate-1w`: 1 week ago
- `$currentDate+1d`: Tomorrow
- `null`: No date set

### Chart Types

Available chart types for `chartType`:
- Basic: column, bar, line, scatter, bubble, pie
- Advanced: area, histogram, radar, sunburst, treemap
- Specialized: waterfall, heatmap, boxPlot

### Formatter Functions

| Function | Description |
|----------|-------------|
| `int` | Integer formatting |
| `none` | No formatting |
| `percent` | Add % symbol |
| `normalized` | Multiply by 100 |
| `normalizedPercent` | Multiply by 100 and add % |
| `dateToYear` | Convert date to year |

## Examples

### Basic Widget Configuration

```json
{
    "custom_widget": {
        "name": "Custom Widget Example",
        "description": "A widget to demonstrate custom configuration",
        "endpoint": "custom-endpoint",
        "runButton": false,
        "data": {
            "dataKey": "customDataKey",
            "table": {
                "enableCharts": true,
                "showAll": true,
                "chartView": {
                    "enabled": true,
                    "chartType": "column"
                },
                "columnsDefs": [
                    {
                        "field": "column1",
                        "headerName": "Column 1",
                        "chartDataType": "category",
                        "cellDataType": "text",
                        "formatterFn": "none",
                        "renderFn": "titleCase",
                        "width": 100,
                        "maxWidth": 200,
                        "minWidth": 50,
                        "hide": false,
                        "pinned": "left"
                    },
                    {
                        "field": "column2",
                        "headerName": "Column 2",
                        "chartDataType": "series",
                        "cellDataType": "number",
                        "formatterFn": "int",
                        "renderFn": "greenRed",
                        "width": 150
                    }
                ]
            }
        },
        "params": [
            {
                "type": "date",
                "paramName": "startDate",
                "value": "2024-01-01",
                "label": "Start Date",
                "show": true,
                "description": "The start date for the data"
            },
            {
                "type": "text",
                "paramName": "ticker",
                "value": "AAPL",
                "label": "Ticker",
                "show": true,
                "description": "Stock ticker symbol"
            },
            {
                "type": "text",
                "paramName": "colors",
                "value": "red",
                "label": "Colors",
                "show": true,
                "description": "Color selection",
                "multiSelect": true,
                "options": [
                    { "label": "Red", "value": "red" },
                    { "label": "Green", "value": "green" },
                    { "label": "Blue", "value": "blue" }
                ]
            }
        ],
        "source": ["My First API"],
        "refetchInterval": 900000,
        "staleTime": 300000
    }
}
```
