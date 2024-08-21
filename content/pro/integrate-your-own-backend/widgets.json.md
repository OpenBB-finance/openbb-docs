---
title: widgets.json
sidebar_position: 13
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

## widgets.json

### Welcome to the widgets.json configuration file

The widgets.json file is the bridge between your API and OpenBB Terminal Pro widgets. Each entry in your widgets.json file will directly map to a widget that can display in the app. You can find a full running example here (link to github).

Below are all of the values you can set along with a description for each.

| **Name**                           | **Type**                     | **Description**                                                                                                                                         |**Version**|
|------------------------------------|------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|----|
| `name`                             | `string` (required)          | The display name of the widget shown to the user. Example: `"Chains chart example"`.                                                                 | 1.0 |
| `description`                      | `string` (required)          | A brief description of the widget for user info and selection menu. Example: `"Get current TVL of all chains and plot it!"`.                        | 1.0 |
| `endpoint`                         | `string` (required)          | The backend API endpoint for retrieving data. Example: `"chains"`. Possible values: Any valid API endpoint path as a string.                         | 1.0 |
| `category`                         | `string`                     | The category for organizing widgets. Example: `"crypto"`. Possible values: Any string representing a category.                                      | 1.0 |
| `searchCategory`                   | `string`                     | Secondary category for refining search results. Example: `"crypto"`. Possible values: Similar to `category`.                                         | 1.0 |
| `defaultViz`                       | `string`                     | Default visualization type for the widget. Possible values: `"chart"`, `"table"`. Default: `"table"`.                                                | 1.0 |
| `gridData.w`                       | `number`                     | The width of the widget in grid units. Example: `20`. Possible values: Any positive integer. Maximum value : `40`                                    | 1.0 |
| `gridData.h`                       | `number`                     | The height of the widget in grid units. Example: `9`. Possible values: Any positive integer. Maximum value : `100`                                  | 1.0 |
| `data.dataKey`                     | `string`                     | A key to identify the data within the widget. Example: `"customDataKey"`. Possible values: Any string representing a data key.                       | 1.0 |
| `data.table.enableCharts`          | `boolean`                    | Enables chart visualization for table data. Example: `true`. Possible values: `true`, `false`.                                                      | 1.0 |
| `data.table.showAll`               | `boolean`                    | Displays all available data in the table. Example: `true`. Possible values: `true`, `false`.                                                        | 1.0 |
| `data.table.chartView.enabled`     | `boolean`                    | Sets the chart view as the default view. Example: `true`. Possible values: `true`, `false`.                                                         | 1.0 |
| `data.table.chartView.chartType`   | `string`                     | Specifies the type of chart to display. Example: `"column"`. Possible values: [ChartView chart types](#chartview-chart-types)                       | 1.0 |
| `data.table.columnsDefs`           | `object[]`                   | A list of the column definitions to be configured for the widget. More info [here](#columnsdefs)                                                    | 1.0 |
| `data.table.columnsDefs.field`     | `string`                     | The name of the field from the JSON data. Example: `"column1"`. Possible values: Any string matching a key in the data source.                       | 1.0 |
| `data.table.columnsDefs.headerName` | `string`                    | The display name of the column header. Example: `"Column 1"`. Possible values: Any string.                                                          | 1.0 |
| `data.table.columnsDefs.chartDataType` | `string`                 | Specifies how data is treated in a chart. Example: `"category"`. Possible values: `"category"`, `"series"`, `"time"`, `"excluded"`.                | 1.0 |
| `data.table.columnsDefs.cellDataType` | `string`                  | Specifies the data type of the cell. Example: `"text"`. Possible values: `"text"`, `"number"`, `"boolean"`, `"date"`, `"dateString"`, `"object"`.   | 1.0 |
| `data.table.columnsDefs.formatterFn` | `string`                   | Specifies how to format the data. Example: `"int"`. Possible values: [`formatterFn`](#formatterfn)                                                  | 1.0 |
| `data.table.columnsDefs.renderFn`  | `string`                     | Specifies a rendering function for cell data. Example: `"titleCase"`. Possible values: `"greenRed"`, `"titleCase"`.                                 | 1.0 |
| `data.table.columnsDefs.width`     | `number`                     | Specifies the width of the column in pixels. Example: `100`. Possible values: Any positive integer.                                                 | 1.0 |
| `data.table.columnsDefs.maxWidth`  | `number`                     | Specifies the maximum width of the column in pixels. Example: `200`. Possible values: Any positive integer.                                         | 1.0 |
| `data.table.columnsDefs.minWidth`  | `number`                     | Specifies the minimum width of the column in pixels. Example: `50`. Possible values: Any positive integer.                                          | 1.0 |
| `data.table.columnsDefs.hide`      | `boolean`                    | Hides the column from the table. Example: `false`. Possible values: `true`, `false`.                                                                | 1.0 |
| `data.table.columnsDefs.pinned`    | `string`                     | Pins the column to the left or right of the table. Example: `"left"`. Possible values: `"left"`, `"right"`.                                         | 1.0 |
| `params`                           | `object[]`                   | A list of query parameters that can be configured for the widget - these will be passed to your API.                                                   | 1.0 |
| `params.type`                      | `string`                     | The type of the parameter. Example: `"date"`. Possible values: `"date"`, `"text"`, `"ticker"`, `"number"`, `"boolean"`. (note: `ticker` will use our equity list)             | 1.0 |
| `params.paramName`                 | `string`                     | The name of the parameter in the URL. Example: `"startDate"`. Possible values: Any string representing a query parameter name.                      | 1.0 |
| `params.value`                     | `string`, `number`, `boolean`| The default value of the parameter. Example: `"2024-01-01"`. Possible values : `"text"`, `"number"`, `"boolean"`, [`DateModifierValue`](#date-modifier) | 1.0 |
| `params.label`                     | `string`                     | The label to display in the UI for the parameter. Example: `"Start Date"`. Possible values: Any string.                                             | 1.0 |
| `params.show`                      | `boolean`                    | Displays the parameter in the UI. Example: `true`. Possible values: `true`, `false`.                                                                | 1.0 |
| `params.description`               | `string`                     | Description of the parameter, shown on hover. Example: `"The start date for the data"`. Possible values: Any string.                                 | 1.0 |
| `params.options.label`             | `string`                     | The label for a dropdown option. Example: `"Option 1"`. Possible values: Any string.                                                                 | 1.0 |
| `params.options.value`             | `string`, `number`, `boolean`| The value for a dropdown option. Example: `"option1"`. Possible values: A value corresponding to the `type`.                                         | 1.0 |
| `source`                           | `array of strings`           | Specifies the data source(s) for the widget. Example: `["API", "Database"]`. Possible values: Any string describing a data source.                  | 1.0 |
| `staleTime`                        | `number`                     | Time in milliseconds before the widget's data is considered stale and will refresh. Example: `300000`. Possible values: Any positive integer representing milliseconds. | 1.0 |

## Example widgets.json

Below is an example widgets.json with a single widget defined. This widget will default to a column chart but have the ability to switch between a table and chart view.

```json
{
    "custom_widget": {
        "name": "Custom Widget Example",
        "description": "A widget to demonstrate custom configuration",
        "endpoint": "custom-endpoint",
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
            }
        ],
        "source": [
            "API"
        ],
        "staleTime": 300000
    }
}

```

## Date Modifier

`object` (optional)

DateModifierValue is to show a dynamic date - `$currentDate+` or `$currentDate-` "h" | "d" | "w" | "M" | "y" (ex. `$currentDate-1w` - for one week ago)

### Date Modifier Examples

```json
[
  {
    paramName: "start_date",
    value: "$currentDate-2y",
    label: "Start Date",
    type: "date",
    description: "Current Date for the stock price"
  },
  {
    paramName: "end_date",
    value: "$currentDate+1d",
    label: "End Date",
    type: "date",
    description: "End Date for the stock price"
  },
  {
    paramName: "interval",
    value: "1d",
    label: "Interval",
    options: [
      { label: "Daily", value: "1d" },
      { label: "Weekly", value: "1w" },
      { label: "Monthly", value: "1m" },
    ],
    type: "text"
    description: "Select the interval",
  },
]
```

## ChartView chart types

- **`chartType`**: The type of chart to display by default. These charts are provided using the AgGrid library. Custom charts can also be created using Plotly. For examples, refer to the [GitHub repository](#link-to-github).
  
  **Allowed values:** **`column`**, **`groupedColumn`**, **`stackedColumn`**, **`normalizedColumn`**, **`bar`**, **`groupedBar`**, **`stackedBar`**, **`normalizedBar`**, **`line`**, **`scatter`**, **`bubble`**, **`pie`**, **`donut`**, **`doughnut`**, **`area`**, **`stackedArea`**, **`normalizedArea`**, **`histogram`**, **`radarLine`**, **`radarArea`**, **`nightingale`**, **`radialColumn`**, **`radialBar`**, **`sunburst`**, **`rangeBar`**, **`rangeArea`**, **`boxPlot`**, **`treemap`**, **`heatmap`**, **`waterfall`**

## formatterFn

- `formatterFn` (optional): Specifies the function used to format the data in the table. The following values are allowed:
  - **`int`**: Formats the number as an integer.
  - **`none`**: Does not format the number.
  - **`percent`**: Adds `%` to the number.
  - **`normalized`**: Multiplies the number by 100.
  - **`normalizedPercent`**: Multiplies the number by 100 and adds `%` (e.g., `0.5` becomes `50 %`).
  - **`dateToYear`**: Converts a date to just the year.
