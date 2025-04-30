---
title: Parameters, Grouping and Table output
sidebar_position: 19
description: Learn how to configure and use grouping and parameters in OpenBB Workspace.
keywords:
- grouping
- parameters
- OpenBB API
- widget configuration
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Parameters, Grouping and Table output | OpenBB Workspace Docs" />

In the `widgets.json` configuration, you can specify parameters/inputs that can be used to customize the data retrieval and display. Widgets can also be grouped if you have multiple widgets on the same dashboard that share a parameter. This section will guide you through setting up these features.

## Parameters

Parameters are used to pass dynamic values to your API endpoints, allowing for customizable data queries from the widget. Each parameter is defined in the `params` array within your widgets.json file and can include the following fields:
| Parameter | Type | Description | Example/Default |
|-----------|------|-------------|-----------------|
| `type` | `string` | The data type of the parameter | `"date"`, `"text"`, `"ticker"`, `"number"`, `"boolean"`, `"endpoint"`, `"form"` |
| `paramName` | `string` | The name of the parameter as it appears in the URL | `"startDate"` |
| `value` | `string`, `number`, `boolean` | The default value for the parameter | `"2024-01-01"` |
| `label` | `string` | The label displayed in the UI for the parameter | `"Start Date"` |
| `show` | `boolean` | Indicates whether the parameter should be visible in the UI | `true` |
| `description` | `string` | A brief description of the parameter, shown on hover | `"The start date for the data"` |
| `multiSelect` | `boolean` | Indicates if multiple values can be selected (only applicable for certain types) | `false` |
| `options` | `list of objects` | An array of options for dropdown parameters, each with a `label` and `value` | `[{"label": "Option 1", "value": "option1"}]` |
| `optionsEndpoint` | `string` | An endpoint to fetch options dynamically, used when `type` is `"endpoint"` | `"/api/companies"` |
| `optionsParams` | `object` | Parameters to pass to your `optionsEndpoint`. This allows you to create dynamic, filtered dropdowns based on other parameter selections | `{"category": "$category"}` |
| `style` | `object` | Styling options for the parameter. Only popupWidth is currently supported (min: 200px, max: 1000px) | `{"popupWidth": 450}` |

### Example

<img className="pro-border-gradient" width="700" alt="widget-parameters" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/parameters.png" />

```json
  "show_example_params": {
    "name": "Example Backend Params",
    "description": "Show example param options",
    "category": "New Category",
    "searchCategory": "Custom",
    "endpoint": "show_example_params",
    "gridData": {
      "w": 20,
      "h": 9
    },
    "params": [
      {
        "paramName": "datePicker1",
        "value": "$currentDate-1d",
        "label": "Param 1",
        "description": "I'm a Date Picker!",
        "type": "date"
      },
      {
        "paramName": "textBox1",
        "value": "Hello!",
        "label": "Param 2",
        "description": "I'm a text input box!",
        "type": "text"
      },
      {
        "paramName": "TrueFalse",
        "value": true,
        "label": "True/False",
        "description": "I'm a True/False selector!",
        "type": "boolean"
      },
      {
        "paramName": "daysPicker1",
        "value": "1",
        "label": "Days",
        "type": "text",
        "multiSelect": true,
        "description": "Number of days to look back",
        "options": [
          {
            "value": "1",
            "label": "1"
          },
          {
            "value": "5",
            "label": "5"
          },
          {
            "value": "10",
            "label": "10"
          },
          {
            "value": "20",
            "label": "20"
          },
          {
            "value": "30",
            "label": "30"
          }
        ]
      }
    ]
  },
```

## Grouping

Widget grouping allows multiple widgets to share and respond to the same parameter input. When widgets are grouped, you only need to select a value once to update all related widgets simultaneously. This is useful for dashboards where multiple widgets display different aspects of the same data source.

1. **Grouping Parameters**: If multiple widgets use the same `paramName` and `options` parameter configuration, they can be grouped together. This allows users to select a value once and have it apply to all related widgets. You can have multiple parameters grouped across many widgets giving you a lot of flexibility.

<img className="pro-border-gradient" width="600" alt="grouping" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/new-grouping.png" />


```json
{
    "chain_tvl_widget": {
        "name": "Chain TVL",
        "endpoint": "chain-tvl",
        "params": [
            {
                "type": "endpoint",
                "paramName": "chain",
                "label": "Chain",
                "optionsEndpoint": "get_chains_list"
            }
        ]
    },
    "chain_volume_widget": {
        "name": "Chain Volume",
        "endpoint": "chain-volume",
        "params": [
            {
                "type": "endpoint",
                "paramName": "chain",
                "label": "Chain",
                "optionsEndpoint": "get_chains_list",
                "style": {
                  "popupWidth": 450
                }
            }
        ]
    }
}
```

2. **Grouping by Ticker**: If multiple widgets use the same `ticker` parameter configuration, they can be grouped together. The widgets will then use the same built in security list we provide in OpenBB Workspace. This allows users to select a value once and have it apply to all related widgets. You won't need to specify the group in the template.json file for a ticker parameter.

Example of widgets that will be grouped using the ticker parameter:

```json
{
    "stock_price_widget": {
        "name": "Stock Price",
        "endpoint": "stock-price",
        "params": [
            {
                "type": "ticker",
                "paramName": "symbol",
                "label": "Symbol",
                "value": "AAPL",
                "description": "Stock ticker symbol"
            }
        ]
    },
    "company_info_widget": {
        "name": "Company Info",
        "endpoint": "company-info",
        "params": [
            {
                "type": "ticker",
                "paramName": "symbol",
                "label": "Symbol",
                "value": "AAPL",
                "description": "Stock ticker symbol"
            }
        ]
    }
}
```


3. **Render Functions**: You can also use render functions when you group data.

Let's say you want to group by the symbol in a widget and you want other widgets to change when you click on a cell in the table. You can do this by adding to your `columnsDefs` the render function `cellOnClick` and the `actionType` of `groupBy` along with the `paramName` of the parameter you want to group by. This will group the data by the symbol and update the other widgets that are grouped by the same parameter.

```json
    "params": [
      {
        "paramName": "symbol",
        "description": "The symbol to get details for",
        "value": "AXXI",
        "label": "Symbol",
        "type": "endpoint",
        "show": false,
        "optionsEndpoint": "get_tickers_list"
      }
    ],
    "data": {
      "table": {
        "showAll": true,
        "columnsDefs": [
          {
            "field": "Symbol",
            "headerName": "Symbol",
            "renderFn": "cellOnClick",
            "renderFnParams": {
              "actionType": "groupBy",
              "groupByParamName": "symbol"
            }
          }
        ]
      }
    },
    "gridData": {
      "w": 20,
      "h": 9
    }
```

## Data Output

When working with table widgets, you can customize how data is displayed and formatted using various column and cell rendering options. These settings allow you to create rich, interactive data visualizations.

### Column Definitions

Each table widget can have a `columnsDefs` property that defines how columns are displayed. This is optional - tables will work with default settings, but `columnsDefs` can be used to fine-tune the visualization.

Here are the key properties you can use in your column definitions:

| Property | Type | Description | Example |
|----------|------|-------------|---------|
| `field` | string | The name of the field from the JSON data | `"strike_price"` |
| `headerName` | string | The display name of the column header | `"Strike Price"` |
| `cellDataType` | string | The data type of the cell | `"text"`, `"number"`, `"boolean"`, `"date"`, `"dateString"`, `"object"` |
| `formatterFn` | string | Function to format the data | `"int"`, `"none"`, `"percent"`, `"normalized"`, `"normalizedPercent"`, `"dateToYear"` |
| `renderFn` | string | Function to render cell data | `"greenRed"`, `"titleCase"`, `"cellOnClick"` |
| `renderFnParams` | object | Parameters for the render function | `{"actionType": "groupBy"}` |
| `width` | number | Column width in pixels | `100` |
| `maxWidth` | number | Maximum column width in pixels | `200` |
| `minWidth` | number | Minimum column width in pixels | `50` |
| `hide` | boolean | Whether to hide the column | `false` |
| `pinned` | string | Pin column to left or right | `"left"`, `"right"` |

### Example Configuration

Here's an example of how to configure columns in your `widgets.json` file:

```json
"columnsDefs": [
    {
        "field": "symbol",
        "headerName": "Symbol",
        "cellDataType": "text",
        "renderFn": "cellOnClick",
        "renderFnParams": {
            "actionType": "groupBy",
            "groupByParamName": "symbol"
        }
    },
    {
        "field": "price",
        "headerName": "Price",
        "cellDataType": "number",
        "formatterFn": "int",
        "renderFn": "greenRed"
    },
    {
        "field": "change",
        "headerName": "Change",
        "cellDataType": "number",
        "formatterFn": "percent",
        "renderFn": "greenRed"
    }
]
```

### Cell Data Types

The `cellDataType` property defines how data is displayed and interacted with:

- `text`: Plain text display
- `number`: Numerical data that can be formatted
- `boolean`: True/false values
- `date`: Date objects with formatting options
- `dateString`: String representation of dates
- `object`: Complex data structures requiring custom rendering

### Formatter Functions

The `formatterFn` property customizes how data is presented:

- `int`: Removes decimal places
- `none`: No formatting applied
- `percent`: Adds percentage sign
- `normalized`: Multiplies by 100
- `normalizedPercent`: Multiplies by 100 and adds percentage sign
- `dateToYear`: Converts date to year only

### Render Functions

The `renderFn` property applies specific styles or transformations:

- `greenRed`: Visually indicates positive/negative values
- `titleCase`: Formats text to title case
- `cellOnClick`: Enables grouping by cell value when clicked