---
title: widgets.json
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

The `widgets.json` file is essential for integrating custom widgets into the OpenBB Terminal Pro. It serves as a configuration file that connects your backend data to the widgets displayed in the application. Key components include:

- **Basic Information**: Defines the widget's name, description, and API endpoint.
- **Categorization**: Organizes widgets using primary and secondary categories.
- **Display Settings**: Specifies visualization type and grid dimensions.
- **Data Configuration**: Details how data is displayed, including table and chart settings.
- **Parameters**: Lists configurable query parameters for the widget.
- **Data Source and Refresh Settings**: Identifies data sources and sets refresh intervals.

The `widgets.json` file is the bridge between your backend and OpenBB Terminal widgets. Each entry in this file will directly map to a widget in the app. You can find examples [here](https://github.com/OpenBB-finance/backend-for-terminal-pro/tree/main).

Below are all of the values you can set along with a description for each.

| Name                           | **Type**                     | **Description**                                                                                                                                         |
|------------------------------------|------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| name                             | `string` (required)          | The display name of the widget shown to the user. Example: `"Chains chart example"`.                                                                 |
| description                      | `string` (required)          | A brief description of the widget for user info and selection menu. Example: `"Get current TVL of all chains and plot it!"`.                        |
| endpoint                         | `string` (required)          | The backend API endpoint for retrieving data. Example: `"chains"`. Possible values: Any valid API endpoint path as a string.                         |
| category                         | `string`                     | The category for organizing widgets. Example: `"crypto"`. Possible values: Any string representing a category.                                      |
| subCategory                      | `string`                     | Secondary category for refining search results. Example: `"fundamentals"`.                                   |
| type                           | `string`                     | Default visualization type for the widget. Possible values: `"chart"`, `"table"`, `"markdown"`, `"metric"`, `"note"`. Default: `"table"`.                                                |
| gridData.w                       | `number`                     | The width of the widget in grid units. Example: `20`. Possible values: Any positive integer. Maximum value : `40`                                    |
| gridData.h                       | `number`                     | The height of the widget in grid units. Example: `9`. Possible values: Any positive integer. Maximum value : `100`                                  |
| data.dataKey                     | `string`                     | A key to identify the data within the widget. Example: `"customDataKey"`. Possible values: Any string representing a data key.                       |
| data.table.enableCharts          | `boolean`                    | Enables chart visualization for table data. Example: `true`. Possible values: `true`, `false`.                                                      |
| data.table.showAll               | `boolean`                    | Displays all available data in the table. Example: `true`. Possible values: `true`, `false`.                                                        |
| data.table.chartView.enabled     | `boolean`                    | Sets the chart view as the default view. Example: `true`. Possible values: `true`, `false`.                                                         |
| data.table.chartView.chartType   | `string`                     | Specifies the type of chart to display. Example: `"column"`. Possible values: [ChartView chart types](#chartview-chart-types)                       |
| data.table.columnsDefs           | `object[]`                   | A list of the column definitions to be configured for the widget.                                                                                   |
| data.table.columnsDefs.field     | `string`                     | The name of the field from the JSON data. Example: `"column1"`. Possible values: Any string matching a key in the data source.                       |
| data.table.columnsDefs.headerName | `string`                    | The display name of the column header. Example: `"Column 1"`. Possible values: Any string.                                                          |
| data.table.columnsDefs.chartDataType | `string`                 | Specifies how data is treated in a chart. Example: `"category"`. Possible values: `"category"`, `"series"`, `"time"`, `"excluded"`.                |
| data.table.columnsDefs.cellDataType | `string`                  | Specifies the data type of the cell. Example: `"text"`. Possible values: `"text"`, `"number"`, `"boolean"`, `"date"`, `"dateString"`, `"object"`.   |
| data.table.columnsDefs.formatterFn | `string`                   | Specifies how to format the data. Example: `"int"`. Possible values: [`formatterFn`](#formatterfn)                                                  |
| data.table.columnsDefs.renderFn  | `string`                     | Specifies a rendering function for cell data. Example: `"titleCase"`. Possible values: `"greenRed"`, `"titleCase"`.                                 |
| data.table.columnsDefs.width     | `number`                     | Specifies the width of the column in pixels. Example: `100`. Possible values: Any positive integer.                                                 |
| data.table.columnsDefs.maxWidth  | `number`                     | Specifies the maximum width of the column in pixels. Example: `200`. Possible values: Any positive integer.                                         |
| data.table.columnsDefs.minWidth  | `number`                     | Specifies the minimum width of the column in pixels. Example: `50`. Possible values: Any positive integer.                                          |
| data.table.columnsDefs.hide      | `boolean`                    | Hides the column from the table. Example: `false`. Possible values: `true`, `false`.                                                                |
| data.table.columnsDefs.pinned    | `string`                     | Pins the column to the left or right of the table. Example: `"left"`. Possible values: `"left"`, `"right"`.                                         |
| params                           | `object[]`                   | A list of query parameters that can be configured for the widget - these will be passed to your API.                                                   |
| params.type                      | `string`                     | The type of the parameter. Example: `"date"`. Possible values: `"date"`, `"text"`, `"ticker"`, `"number"`, `"boolean"`, `"endpoint"`. (note: `ticker` will use our equity list)    |
| params.paramName                 | `string`                     | The name of the parameter in the URL. Example: `"startDate"`. Possible values: Any string representing a query parameter name.                      |
| params.value                     | `string`, `number`, `boolean`| The default value of the parameter. Example: `"2024-01-01"`. Possible values : `"text"`, `"number"`, `"boolean"`, [`DateModifierValue`](#date-modifier) |
| params.label                     | `string`                     | The label to display in the UI for the parameter. Example: `"Start Date"`. Possible values: Any string.                                             |
| params.optionsEndpoint           | `string`                     | Endpoint to fetch options for the parameter - only works if params.type is `"endpoint"`. Example: `"v1/test/values"`. Possible values: Any valid API endpoint in your backend.  [`optionsEndpoint`](#optionsEndpoint)  |
| params.show                      | `boolean`                    | Displays the parameter in the UI. Example: `true`. Possible values: `true`, `false`.                                                                |
| params.description               | `string`                     | Description of the parameter, shown on hover. Example: `"The start date for the data"`. Possible values: Any string.                                 |
| params.multiSelect               | `boolean`                    | If you want to allow multiple values to be selected from your parameter options Possible values: Possible values: `true`, `false`.                    |
| params.options.label             | `string`                     | The label for a dropdown option. Example: `"Option 1"`. Possible values: Any string.                                                                 |
| params.options.value             | `string`, `number`, `boolean`| The value for a dropdown option. Example: `"option1"`. Possible values: A value corresponding to the `type`.                                         |
| source                           | `array of strings`           | Specifies the data source(s) for the widget. Example: `["API", "Database"]`. Possible values: Any string describing a data source.                  |
| refetchInterval                  | `number`                     | Time in milliseconds before the widget's data will refresh if on the page - default: `900000` (15m)                                                     |
| staleTime                        | `number`                     | Time in milliseconds before the widget's data is considered stale and will refresh on the next visit to the dashboard. default: `300000`. milliseconds. (5m) |

## Example widgets.json

Below is an example `widgets.json` with a single widget defined. This widget will default to a column chart but have the ability to switch between a table and chart view.

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

The reference is `$currentDate` and if a user wants to add or substract they need to append to the variable:

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

## formatterFn

`formatterFn` (optional): Specifies the function used to format the data in the table. The following values are allowed:

- `int`: Formats the number as an integer.
- `none`: Does not format the number.
- `percent`: Adds `%` to the number.
- `normalized`: Multiplies the number by 100.
- `normalizedPercent`: Multiplies the number by 100 and adds `%` (e.g., `0.5` becomes `50 %`).
- `dateToYear`: Converts a date to just the year.

## optionsEndpoint

This is used to fetch options for a parameter. This is only available if the parameter type is `"endpoint"`.

This endpoint should return a list of strings or a list of objects with `label` and `value` properties. This will be used to populate the dropdown options for the parameter.

An example of how to implement this in your backend can be found below:

```python
@app.get("/get_chains_list")
def get_chains_list():
    """Get list of chains using Defi LLama"""
    response = requests.get("https://api.llama.fi/v2/chains")

    if response.status_code == 200:
        data = response.json()
        # can pass as list of {label, value} for dropdown or list of strings
        #  [
        #   {"label": chain.get("name"), "value": chain.get("name")}
        #   for chain in data if chain.get("name")
        #  ]
        return [chain.get("name") for chain in data if chain.get("name")]

    print(f"Request error {response.status_code}: {response.text}")
    return JSONResponse(
        content={"error": response.text}, status_code=response.status_code
    )
```

This endpoint can now be used in the `widgets.json` file as follows in another widget parameter:

```jsonc
    "params": [
      {
        "paramName": "chain",
        "description": "Select a chain to get historical TVL",
        "value": "Ethereum",
        "label": "Chain",
        "type": "endpoint",
        "optionsEndpoint": "get_chains_list"
      }
    ]
```

Now when the user selects the dropdown on the widget they configured, the `get_chains_list` endpoint will be called and the options will be populated in the dropdown.

## Grouping and Parameters

In the `widgets.json` configuration, you can define how widgets are grouped and specify parameters that can be used to customize the data retrieval and display. This section will guide you through setting up these features.

### Grouping

Grouping allows you to organize widgets into categories and subcategories, making it easier for users to find and interact with them. This is done using the `category` and `subCategory` fields.

- **category**: A primary category for the widget. Example: `"crypto"`.
- **subCategory**: A secondary category for more refined organization. Example: `"fundamentals"`.

### Parameters

Parameters are used to pass dynamic values to your API endpoints, allowing for customizable data queries. Each parameter is defined in the `params` array and can include the following fields:

- **type**: The data type of the parameter. Possible values include `"date"`, `"text"`, `"ticker"`, `"number"`, `"boolean"`, `"endpoint"`.
- **paramName**: The name of the parameter as it appears in the URL. Example: `"startDate"`.
- **value**: The default value for the parameter. This can be a string, number, or boolean.
- **label**: The label displayed in the UI for the parameter. Example: `"Start Date"`.
- **show**: A boolean indicating whether the parameter should be visible in the UI.
- **description**: A brief description of the parameter, shown on hover.
- **multiSelect**: A boolean indicating if multiple values can be selected (only applicable for certain types).
- **options**: An array of options for dropdown parameters, each with a `label` and `value`.
- **optionsEndpoint**: An endpoint to fetch options dynamically, used when `type` is `"endpoint"`.

### Example

Here's an example of how grouping and parameters might be configured in a `widgets.json` entry, including the use of `optionsEndpoint`:

```json
{
    "custom_widget": {
        "name": "Custom Widget Example",
        "description": "A widget to demonstrate custom configuration",
        "endpoint": "custom-endpoint",
        "category": "finance",
        "subCategory": "stocks",
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
                "type": "endpoint",
                "paramName": "chain",
                "value": "Ethereum",
                "label": "Chain",
                "show": true,
                "description": "Select a chain to get historical TVL",
                "optionsEndpoint": "get_chains_list"
            }
        ]
    }
}
```

This configuration allows users to filter data by start date, ticker symbol, and select a blockchain chain using a dynamically populated dropdown. The widget is organized under the "finance" category and "stocks" subcategory.
