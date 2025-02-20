---
title: widgets.json Reference
sidebar_position: 7
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

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Widgets.json | OpenBB Terminal Pro Docs" />

# Widgets.json Overview

The `widgets.json` file is your configuration file that connects custom backend data to the widgets displayed in the application. Key components include:

- **Basic Information**: Defines the widget's name, description, and API endpoint that the data comes from.
- **Metadata**: Provide categories for organization and AI enhancement.
- **Display Settings**: Specifies widget type and grid dimensions.
- **Data Configuration**:  Details table and chart settings, including column level information and data types.
- **Parameters**: Details query parameters that can be passed to the API endpoint for customization.

Each entry in this file will directly map to a widget in the app. You can find example backends [here](https://github.com/OpenBB-finance/backend-for-terminal-pro/tree/main), where each folder contains a `widgets.json` file specifying the available widgets.

Below are all of the configurable fields and their descriptions.

A `Widgets.json` table is a configuration structure with any of the named attributes listed below.

### Attributes

- **name**  
  _Type:_ `string` (required)  
  Sets the display name of the widget shown to the user.  
  _Example:_ `"Options EOD Data"`

- **description**  
  _Type:_ `string` (required)  
  Provides a brief description of the widget for user info and selection menu. 
  This is important for Copilot to understand what the widget does. 
  _Example:_ `"Provides EOD data for all options chains for a given ticker."`

- **endpoint**  
  _Type:_ `string` (required)  
  Specifies the backend API endpoint for retrieving data.  
  _Example:_ `"chains"`  
  _Possible values:_ Any valid API endpoint path as a string.

- **wsEndpoint**  
  _Type:_ `string`  
  Specifies the WebSocket endpoint for live data updates. Only used with the Live Grid Widget.
  _Example:_ `"ws"`

- **category**  
  _Type:_ `string`  
  Defines the category for organizing widgets.  
  _Example:_ `"Equity"`  
  _Possible values:_ Any string representing a category.

- **subCategory**  
  _Type:_ `string`  
  Provides a secondary category for refining search results.  
  _Example:_ `"Options"`

- **type**  
  _Type:_ `string`  
  Sets the default visualization type for the widget.  
  _Possible values:_ `"chart"`, `"table"`, `"markdown"`, `"metric"`, `"note"`  
  _Default:_ `"table"`

- **runButton**  
  _Type:_ `boolean`  
  If true, a run button will be displayed instead of the refresh button.  
  _Possible values:_ `true`, `false`  
  _Default:_ `false`

- **gridData**  
  _Type:_ object containing the following keys:

  - **w**  
    _Type:_ `number`  
    Sets the width of the widget in grid units.  
    _Example:_ `20`  
    _Maximum value:_ `40`

  - **h**  
    _Type:_ `number`  
    Sets the height of the widget in grid units.  
    _Example:_ `9`  
    _Maximum value:_ `100`

- **data**  
  _Type:_ object containing the following keys:

  - **dataKey**  
    _Type:_ `string`  
    A key to identify the data within the widget.  
    _Example:_ `"customDataKey"`

  - **wsRowIdColumn**  
    _Type:_ `string`  
    The column that will be used to identify the row. This is important to set correctly to ensure the live updates are displayed correctly. 
    This the key between your ws and the initial data. Only used with the Live Grid Widget.
    _Example:_ `"symbol"`

  - **table**  
    _Type:_ object containing the following keys:

    - **enableCharts**  
      _Type:_ `boolean`  
      Enables chart visualization for table data.  
      _Example:_ `true`

    - **showAll**  
      _Type:_ `boolean`  
      Displays all available data in the table.  
      _Example:_ `true`

    - **chartView**  
      _Type:_ object containing the following keys:

      - **enabled**  
        _Type:_ `boolean`  
        Sets the chart view as the default view.  
        _Example:_ `true`

      - **chartType**  
        _Type:_ `string`  
        Specifies the type of chart to display.  
        _Example:_ `"column"`  
        _Possible values:_ see [ChartView chart types](#chartview-chart-types)

      - **ignoreCellRange**  
        _Type:_ `boolean`  
        Ignores stored cell range for the chart.  
        _Example:_ `false`

    - **columnsDefs**  
      _Type:_ list of objects, each containing the following keys:

      - **field**  
        _Type:_ `string`  
        The name of the field from the JSON data.  
        _Example:_ `"column1"`

      - **headerName**  
        _Type:_ `string`  
        The display name of the column header.  
        _Example:_ `"Column 1"`

      - **chartDataType**  
        _Type:_ `string`  
        Specifies how data is treated in a chart.  
        _Example:_ `"category"`  
        _Possible values:_ `"category"`, `"series"`, `"time"`, `"excluded"`

      - **cellDataType**  
        _Type:_ `string`  
        Specifies the data type of the cell.  
        _Example:_ `"text"`  
        _Possible values:_ `"text"`, `"number"`, `"boolean"`, `"date"`, `"dateString"`, `"object"`

      - **enableCellChangeWs**  
        _Type:_ `boolean`  
        Controls whether the cell can be updated via WebSocket messages. Only used with the Live Grid Widget.
        _Default:_ `true`  
        _Example:_ `false`

      - **formatterFn**  
        _Type:_ `string`  
        Specifies how to format the data.  
        _Example:_ `"int"`  
        _Possible values:_ see [`formatterFn`](#formatterfn)

      - **renderFn**  
        _Type:_ `string`  
        Specifies a rendering function for cell data. See [Render Functions](/content/terminal/custom-backend/advanced-controls/render-functions.md) for more information.  
        _Example:_ `"titleCase"`  
        _Possible values:_ `"greenRed"`, `"titleCase"`, `"hoverCard"`, `"cellOnClick"`, `"columnColor"`, `"showCellChange"`

      - **renderFnParams**  
        _Type:_ `object`  
        Required if `renderFn` is used. Specifies the parameters for the render function.  
        _Example:_ `{"actionType": "groupBy"}`

      - **width**  
        _Type:_ `number`  
        Specifies the width of the column in pixels.  
        _Example:_ `100`

      - **maxWidth**  
        _Type:_ `number`  
        Specifies the maximum width of the column in pixels.  
        _Example:_ `200`

      - **minWidth**  
        _Type:_ `number`  
        Specifies the minimum width of the column in pixels.  
        _Example:_ `50`

      - **hide**  
        _Type:_ `boolean`  
        Hides the column from the table.  
        _Example:_ `false`

      - **pinned**  
        _Type:_ `string`  
        Pins the column to the left or right of the table.  
        _Example:_ `"left"`  
        _Possible values:_ `"left"`, `"right"`

      - **headerTooltip**  
        _Type:_ `string`  
        Tooltip text for the column header.  
        _Example:_ `"This is a tooltip"`

- **params**  
  _Type:_ list of objects, each containing the following keys:

  - **type**  
    _Type:_ `string`  
    The type of the parameter.  
    _Example:_ `"date"`  
    _Possible values:_ `"date"`, `"text"`, `"ticker"`, `"number"`, `"boolean"`, `"endpoint"`

  - **paramName**  
    _Type:_ `string`  
    The name of the parameter in the URL.  
    _Example:_ `"startDate"`

  - **value**  
    _Type:_ `string`, `number`, `boolean`  
    The default value of the parameter.  
    _Example:_ `"2024-01-01"`

  - **label**  
    _Type:_ `string`  
    The label to display in the UI for the parameter.  
    _Example:_ `"Start Date"`

  - **optionsEndpoint**  
    _Type:_ `string`  
    Endpoint to fetch options for the parameter.  
    _Example:_ `"v1/test/values"`

  - **show**  
    _Type:_ `boolean`  
    Displays the parameter in the UI.  
    _Example:_ `true`

  - **description**  
    _Type:_ `string`  
    Description of the parameter, shown on hover.  
    _Example:_ `"The start date for the data"`

  - **multiSelect**  
    _Type:_ `boolean`  
    Allows multiple values to be selected from your parameter options.  
    _Example:_ `true`

  - **options**  
    _Type:_ list of objects, each containing the following keys:

    - **label**  
      _Type:_ `string`  
      The label for a dropdown option.  
      _Example:_ `"Option 1"`

    - **value**  
      _Type:_ `string`, `number`, `boolean`  
      The value for a dropdown option.  
      _Example:_ `"option1"`

- **source**  
  _Type:_ array of strings  
  Specifies the data source(s) for the widget.  
  _Example:_ `["API", "Database"]`

- **refetchInterval**  
  _Type:_ `number`  
  Time in milliseconds before the widget's data will refresh if on the page.  
  _Default:_ `900000` (15m)

- **staleTime**  
  _Type:_ `number`  
  Time in milliseconds before the widget's data is considered stale and will refresh on the next visit to the dashboard.  
  _Default:_ `300000` (5m)

## Example widgets.json

Below is an example `widgets.json` with a single widget defined. This widget will default to a column chart but have the ability to switch between a table and chart view.  The widget will have a start date parameter, a ticker parameter, and a colors parameter, all of which will be able to be selected on the widget in the application.

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
                "description": "The start date for the data",
            },
            {
                "type": "text",
                "paramName": "ticker",
                "value": "AAPL",
                "label": "Ticker",
                "show": true,
                "description": "Stock ticker symbol",
            },
            {
                "type": "text",
                "paramName": "colors",
                "value": "red",
                "label": "Colors",
                "show": true,
                "description": "Stock ticker symbol",
                "multiSelect": true,
                "options": [
                  { "label": "Red", "value": "red" },
                  { "label": "Green", "value": "green" },
                  { "label": "Blue", "value": "blue" }
                ],
            }
        ],
        "source": [
            "My First API"
        ],
        "refetchInterval" : 900000,
        "staleTime": 300000
    }
}

```

## Special Properties

### Date Modifier

This is used to display a dynamic date.

The reference is `$currentDate` and if a user wants to add or subtract they need to append to the variable:

- h, for hour
- d, for day
- w, for week
- M, for month
- y, for year

For instance, `$currentDate-1w` stands for 1 week ago.

If you don't want to set a date you can omit the value parameter or pass ```null```.

#### Examples

```json
[
  {
    "paramName": "start_date",
    "value": "$currentDate-2y",
    "label": "Start Date",
    "type": "date",
    "description": "Current Date for the stock price"
  },
  {
    "paramName": "end_date",
    "value": "$currentDate+1d",
    "label": "End Date",
    "type": "date",
    "description": "End Date for the stock price"
  },
    {
    "paramName": "end_date",
    "value": null,
    "label": "End Date",
    "type": "date",
    "description": "End Date for the stock price"
  },
  {
    "paramName": "interval",
    "value": "1d",
    "label": "Interval",
    "options": [
      { "label": "Daily", "value": "1d" },
      { "label": "Weekly", "value": "1w" },
      { "label": "Monthly", "value": "1m" }
    ],
    "type": "text",
    "description": "Select the interval"
  }
]
```

### ChartView chart types

**`chartType`**: The type of chart to display by default. These charts are provided using the AgGrid library. Custom charts can also be created using Plotly. For examples, refer to the [GitHub repository](https://github.com/OpenBB-finance/backend-for-terminal-pro/tree/main).
  
**Allowed values:** column, groupedColumn, stackedColumn, normalizedColumn, bar, groupedBar, stackedBar, normalizedBar, line, scatter, bubble, pie, donut, doughnut, area, stackedArea, normalizedArea, histogram, radarLine, radarArea, nightingale, radialColumn, radialBar, sunburst, rangeBar, rangeArea, boxPlot, treemap, heatmap, waterfall

### formatterFn

`formatterFn` (optional): Specifies the function used to format the data in the table. The following values are allowed:

- `int`: Formats the number as an integer.
- `none`: Does not format the number.
- `percent`: Adds `%` to the number.
- `normalized`: Multiplies the number by 100.
- `normalizedPercent`: Multiplies the number by 100 and adds `%` (e.g., `0.5` becomes `50 %`).
- `dateToYear`: Converts a date to just the year.