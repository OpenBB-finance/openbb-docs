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

# Widgets.json Overview

The `widgets.json` file is your configuration file that connects custom backend data to the widgets displayed in the application. Key components include:

- **Basic Information**: Defines the widget's name, description, and API endpoint that the data comes from.
- **Metadata**: Provide categories for organization and AI enhancement.
- **Display Settings**: Specifies widget type and grid dimensions.
- **Data Configuration**:  Details table and chart settings, including column level information and data types.
- **Parameters**: Details query parameters that can be passed to the API endpoint for customization.

Each entry in this file will directly map to a widget in the app. You can find example backends [here](https://github.com/OpenBB-finance/backend-examples-for-openbb-workspace/tree/main), where each folder contains a `widgets.json` file specifying the available widgets.

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

- **imgUrl**
  _Type:_ `string`
  Image URL for the widget - will show a preview when hovering in search/add widget menu.
  _Example:_ `"https://myexample-imagelink.xyw/widget1"`

- **type**
  _Type:_ `string`
  Sets the default visualization type for the widget.
  _Possible values:_ `"chart"`, `"table"`, `"table_ssrm"`, `"markdown"`, `"metric"`, `"note"`,  `"multi_file_viewer"`, `"live_grid"`, `"newsfeed"`, `"advanced-chart"`, `"chart-highcharts"`
  _Default:_ `"table"`

- **raw**
  _Type:_ `boolean`
  ONLY used for Plotly configuration. If true will create a button on the widget to switch between the chart and raw data.
  _Possible values:_ `true`, `false`
  _Default:_ `false`

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

  - **minW**
    _Type:_ `number`
    Sets the minimum width of the widget in grid units.
    _Example:_ `10`

  - **minH**
    _Type:_ `number`
    Sets the minimum height of the widget in grid units.
    _Example:_ `10`

  - **maxW**
    _Type:_ `number`
    Sets the maximum width of the widget in grid units.
    _Example:_ `40`

  - **maxH**  
    _Type:_ `number`
    Sets the maximum height of the widget in grid units.
    _Example:_ `100`

- **data**
  _Type:_ object containing the following keys - This key is only used for widgets that utilize the AgGrid Table:

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

    - **transpose**
      _Type:_ `boolean`
      Displays transpose the data in the table.
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

      - **cellRangeCols**
        _Type:_ `object`
        Defines the default column mappings for different chart types. Each key represents a chart type, and the value is an array of column names that specify the category and series columns for that chart type.
        The array structure is: `[category, series1, series2, ...]` where:
        - First element: The category column (x-axis)
        - Remaining elements: The series columns (y-axis data)
        _Example:_ 
        ```json
        "cellRangeCols": {
          "line": ["ticker", "weight", "weight2"],
          "column": ["date", "price", "volume"]
        }
        ```

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
        _Type:_ `string` or `array`
        Specifies a rendering function for cell data. See [Render Functions](../workspace/widget-configuration/render-functions.md) for more information.
        _Example:_ `"titleCase"`
        _Possible values:_ `"greenRed"`, `"titleCase"`, `"hoverCard"`, `"cellOnClick"`, `"columnColor"`, `"showCellChange"`

      - **renderFnParams**
        _Type:_ `object`
        Required if `renderFn` is used. Specifies the parameters for the render function.
        _Example:_ `{"actionType": "sendToAgent", "sendToAgent": {"markdown": "Analyze **{company}** data"}}`

        - **actionType**
          _Type:_ `string`
          Specifies the action type for the render function.
          _Example:_ `"sendToAgent"`
          _Possible values:_ `"groupBy"`, `"sendToAgent"`

        - **groupByParamName**
          _Type:_ `string`
          Group by parameter for the render function.
          _Example:_ `"symbol"`

        - **colorValueKey**
          _Type:_ `string`
          Specifies which field to use for determining the color when showing cell changes.
          _Example:_ `"Analyst"`

        - **hoverCardData**
          _Type:_ `array of strings`
          Specifies columns to show in the hover card.
          _Example:_ `["column1", "column2"]`

        - **colorRules**
          _Type:_ `array of objects`
          An array of rules for conditional coloring.
          _Example:_ `[{"condition": "gt", "value": 50, "color": "green", "fill": true}]`

        - **hoverCard**
          _Type:_ `object`
          Hover card configuration.
          Contains the following keys:

          - **cellField**
            _Type:_ `string`
            Field to display on table cell.
            _Example:_ `"value"`

          - **title**
            _Type:_ `string`
            Title for the hover card.
            _Example:_ `"Analyst Details"`

          - **markdown**
            _Type:_ `string`
            Markdown content for the hover card.
            _Example:_ `"### {value}\n- **Description:** {description}"`

        - **sendToAgent**
          _Type:_ `object`
          Configuration for sending data to an AI agent.
          Contains the following keys:

          - **markdown**
            _Type:_ `string`
            Markdown content to send to the agent, supports template variables from row data using curly braces.
            _Example:_ `"Please analyze the company **{company}** with revenue of ${revenue}M"`

          - **agentId**
            _Type:_ `string`
            (Optional) Specific agent ID to send the message to.
            _Example:_ `"financial-analyst-agent"`

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

      - **prefix**
        _Type:_ `string`
        Prefix to be added to the column header.
        _Example:_ `"$"`

      - **suffix**
        _Type:_ `string`
        Suffix to be added to the column header.
        _Example:_ `"USD"`

      - **sparkline**
        _Type:_ `object`
        Configuration for displaying sparklines within table cells.
        Contains the following keys:

        - **type**
          _Type:_ `string`
          Specifies the type of sparkline chart.
          _Example:_ `"line"`
          _Possible values:_ `"line"`, `"area"`, `"bar"`

        - **dataField**
          _Type:_ `string`
          Alternative field name to use for sparkline data (if different from main field).
          _Example:_ `"spark_data"`

        - **options**
          _Type:_ `object`
          Configuration options for the sparkline appearance and behavior.
          Contains the following keys:

          - **stroke**
            _Type:_ `string`
            Color of the line or border.
            _Example:_ `"#3366cc"`

          - **strokeWidth**
            _Type:_ `number`
            Width of the line or border in pixels.
            _Example:_ `2`

          - **fill**
            _Type:_ `string`
            Fill color for area and bar charts.
            _Example:_ `"#e3f2fd"`

          - **fillOpacity**
            _Type:_ `number`
            Opacity of the fill color (0-1).
            _Example:_ `0.3`

          - **min**
            _Type:_ `number`
            Minimum value constraint for the sparkline.
            _Example:_ `0`

          - **max**
            _Type:_ `number`
            Maximum value constraint for the sparkline.
            _Example:_ `100`

          - **direction**
            _Type:_ `string`
            Direction for bar charts.
            _Example:_ `"vertical"`
            _Possible values:_ `"vertical"`, `"horizontal"`

          - **markers**
            _Type:_ `object`
            Configuration for markers on line and area charts.
            Contains the following keys:

            - **enabled**
              _Type:_ `boolean`
              Whether to show markers.
              _Example:_ `true`

            - **size**
              _Type:_ `number`
              Size of the markers in pixels.
              _Example:_ `3`

            - **fill**
              _Type:_ `string`
              Fill color of the markers.
              _Example:_ `"#3366cc"`

            - **stroke**
              _Type:_ `string`
              Stroke color of the markers.
              _Example:_ `"#ffffff"`

            - **strokeWidth**
              _Type:_ `number`
              Width of the marker stroke.
              _Example:_ `1`

          - **pointsOfInterest**
            _Type:_ `object`
            Configuration for highlighting special data points.
            Contains the following keys:

            - **firstLast**
              _Type:_ `object`
              Styling for first and last data points.
              Contains `fill`, `stroke`, `strokeWidth`, and `size` properties.

            - **minimum**
              _Type:_ `object`
              Styling for minimum value points.
              Contains `fill`, `stroke`, `strokeWidth`, and `size` properties.

            - **maximum**
              _Type:_ `object`
              Styling for maximum value points.
              Contains `fill`, `stroke`, `strokeWidth`, and `size` properties.

            - **highlighted**
              _Type:_ `object`
              Styling for highlighted points on hover/interaction.
              Contains `fill`, `stroke`, `strokeWidth`, and `size` properties.

            - **positiveNegative**
              _Type:_ `object`
              Separate styling for positive and negative values.
              Contains the following keys:

              - **positive**
                _Type:_ `object`
                Styling for positive values.
                Contains `fill`, `stroke`, `strokeWidth`, and `size` properties.

              - **negative**
                _Type:_ `object`
                Styling for negative values.
                Contains `fill`, `stroke`, `strokeWidth`, and `size` properties.

          - **customFormatter**
            _Type:_ `string`
            JavaScript function as a string for complete control over individual data point styling.
            _Example:_ `"(params) => ({ fill: params.yValue >= 0 ? '#22c55e' : '#ef4444', stroke: params.yValue >= 0 ? '#16a34a' : '#dc2626' })"`

          - **padding**
            _Type:_ `object`
            Padding configuration for the sparkline.
            Contains the following keys:

            - **top**
              _Type:_ `number`
              Top padding in pixels.
              _Example:_ `5`

            - **right**
              _Type:_ `number`
              Right padding in pixels.
              _Example:_ `5`

            - **bottom**
              _Type:_ `number`
              Bottom padding in pixels.
              _Example:_ `5`

            - **left**
              _Type:_ `number`
              Left padding in pixels.
              _Example:_ `5`

- **params**
  _Type:_ list of objects, each containing the following keys:

  - **type**
    _Type:_ `string`
    The type of the parameter.
    _Example:_ `"date"`
    _Possible values:_ `"date"`, `"text"`, `"ticker"`, `"number"`, `"boolean"`, `"endpoint"`, `"form"`

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

  - **multiple**
    _Type:_ `boolean`
    If true, the parameter will be a dropdown with multiple selectable options that you can add add-hoc.
    _Example:_ `true`

  - **optionsParams**
    _Type:_ `object`
    Parameters to pass to the options endpoint. You can use the parameter name from the `params` array to pass a value to the options endpoint.
    _Example:_ `{"type": "$type"}`

  - **show**
    _Type:_ `boolean`
    Displays the parameter in the UI.
    _Example:_ `true`

  - **description**
    _Type:_ `string`
    Description of the parameter, shown on hover.
    _Example:_ `"The start date for the data"`

  - **roles**
    _Type:_ `array`
    Only used on the Multi-File Viewer Widget - Specifies which parameter is used to select the files.
    _Example:_ `["fileSelector"]`

  - **multiSelect**
    _Type:_ `boolean`
    Allows multiple values to be selected from your parameter options.
    _Example:_ `true`

  - **style**
    _Type:_ `object`
    Styling options for the parameter. Only popupWidth is currently supported minimum value is 200px max value is 1000px.
    _Example:_ `{"popupWidth": 450}`

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

    - **extraInfo**
      _Type:_ `object`
      Additional information to display for the dropdown option.
      _Example:_ `{"description": "Technology Company", "rightOfDescription": "NASDAQ"}`

      Contains the following keys:

      - **description**
        _Type:_ `string`
        Additional descriptive text shown below the label.
        _Example:_ `"Technology Company"`

      - **rightOfDescription**
        _Type:_ `string`
        Text shown to the right of the description.
        _Example:_ `"NASDAQ"`

- **source**
  _Type:_ array of strings
  Specifies the data source(s) for the widget.
  _Example:_ `["API", "Database"]`

- **refetchInterval**
  _Type:_ `number` or `false`
  Time in milliseconds before the widget's data will refresh if on the page.  Minimum value is `1000`.
  _Default:_ `900000` (15m)

- **staleTime**
  _Type:_ `number`
  Time in milliseconds before the widget's data is considered stale and will refresh on the next visit to the dashboard.
  _Default:_ `300000` (5m)

## Example widgets.json {#example-widgets-json}

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
                    "chartType": "column",
                    "cellRangeCols" : {
                        "line": ["ticker", "weight"]
                    }
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
                },
                {
                    "field": "price_trend",
                    "headerName": "Price Trend",
                    "width": 200,
                    "sparkline": {
                        "type": "line",
                        "options": {
                            "stroke": "#3366cc",
                            "strokeWidth": 2,
                            "markers": {
                                "enabled": true,
                                "size": 3
                            },
                            "pointsOfInterest": {
                                "maximum": {
                                    "fill": "#22c55e",
                                    "stroke": "#16a34a",
                                    "size": 5
                                },
                                "minimum": {
                                    "fill": "#ef4444",
                                    "stroke": "#dc2626",
                                    "size": 5
                                }
                            }
                        }
                    }
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

**`chartType`**: The type of chart to display by default. These charts are provided using the AgGrid library. Custom charts can also be created using Plotly. For examples, refer to the [GitHub repository](https://github.com/OpenBB-finance/backend-examples-for-openbb-workspace/tree/main).

**Allowed values:** column, groupedColumn, stackedColumn, normalizedColumn, bar, groupedBar, stackedBar, normalizedBar, line, scatter, bubble, pie, donut, doughnut, area, stackedArea, normalizedArea, histogram, radarLine, radarArea, nightingale, radialColumn, radialBar, sunburst, rangeBar, rangeArea, boxPlot, treemap, heatmap, waterfall

### formatterFn

`formatterFn` (optional): Specifies the function used to format the data in the table. The following values are allowed:

- `int`: Formats the number as an integer.
- `none`: Does not format the number.
- `percent`: Adds `%` to the number.
- `normalized`: Multiplies the number by 100.
- `normalizedPercent`: Multiplies the number by 100 and adds `%` (e.g., `0.5` becomes `50 %`).
- `dateToYear`: Converts a date to just the year.
