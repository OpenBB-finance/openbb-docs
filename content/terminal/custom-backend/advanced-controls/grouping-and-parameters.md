---
title: Grouping and Parameters
sidebar_position: 6
description: Learn how to configure and use grouping and parameters in OpenBB Workspace.
keywords:
- grouping
- parameters
- OpenBB API
- widget configuration
---

## Grouping and Parameters

In the `widgets.json` configuration, you can specify parameters/inputs that can be used to customize the data retrieval and display. Widgets can also be grouped if you have multiple widgets on the same dashboard that share a parameter. This section will guide you through setting up these features.

### Parameters

Parameters are used to pass dynamic values to your API endpoints, allowing for customizable data queries from the widget. Each parameter is defined in the `params` array within your widgets.json file and can include the following fields:

<details>
<summary mdxType="summary">Parameter values</summary>

**type**  
_Type:_ `string`  
The data type of the parameter.  
_Possible values:_ `"date"`, `"text"`, `"ticker"`, `"number"`, `"boolean"`, `"endpoint"`

**paramName**  
_Type:_ `string`  
The name of the parameter as it appears in the URL.  
_Example:_ `"startDate"`

**value**  
_Type:_ `string`, `number`, `boolean`  
The default value for the parameter.  
_Example:_ `"2024-01-01"`

**label**  
_Type:_ `string`  
The label displayed in the UI for the parameter.  
_Example:_ `"Start Date"`

**show**  
_Type:_ `boolean`  
Indicates whether the parameter should be visible in the UI.  
_Default:_ `true`

**description**  
_Type:_ `string`  
A brief description of the parameter, shown on hover.  
_Example:_ `"The start date for the data"`

**multiSelect**  
_Type:_ `boolean`  
Indicates if multiple values can be selected (only applicable for certain types).  
_Default:_ `false`

**options**  
_Type:_ list of objects  
An array of options for dropdown parameters, each with a `label` and `value`.  
_Example:_ `[{"label": "Option 1", "value": "option1"}]`

**optionsEndpoint**  
_Type:_ `string`  
An endpoint to fetch options dynamically, used when `type` is `"endpoint"`.  
_Example:_ `"/api/companies"`

</details>

<img className="pro-border-gradient" width="700" alt="widget-parameters" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/parameters.png" />

<details>
<summary mdxType="summary">Example for above parameters</summary>

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

</details>

### Passing custom dropdown options

Sometimes you may want to pass a list from an endpoint rather then specify the options in the `widgets.json` file.

By using `type: "endpoint"`, you'll need to specify an `optionsEndpoint` that returns the available options.

<img className="pro-border-gradient" width="300" alt="dropdown" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/dropdown.png" />

Here's an example using an endpoint parameter:

```json
{
    "custom_widget": {
        "name": "Dynamic Options Widget",
        "endpoint": "custom-endpoint",
        "params": [
            {
                "type": "endpoint",
                "paramName": "company",
                "label": "Company",
                "show": true,
                "description": "Select a company",
                "optionsEndpoint": "/api/companies"
            }
        ]
    }
}
```

The `optionsEndpoint` should return data in this format for a simple dropdown:

```json
[
    { "label": "Apple Inc.", "value": "AAPL" },
    { "label": "Microsoft Corporation", "value": "MSFT" },
    { "label": "Google", "value": "GOOGL" }
]
```

You can also return a dropdown with some advanced options passed - Your returned data on the endpoint should be in this format:

```json
[
    {
        "label": "Apple Inc.",
        "value": "AAPL",
        "extraInfo": {
            "description": "Technology Company",
            "rightOfDescription": "NASDAQ"
        }
    },
    {
        "label": "Microsoft Corporation",
        "value": "MSFT",
        "extraInfo": {
            "description": "Software Company",
            "rightOfDescription": "NASDAQ"
        }
    },
    {
        "label": "Google",
        "value": "GOOGL",
        "extraInfo": {
            "description": "Search Engine",
            "rightOfDescription": "NASDAQ"
        }
    }
]
```

These values can also be grouped which we will cover below.

### Grouping

Widget grouping allows multiple widgets to share and respond to the same parameter input. When widgets are grouped, you only need to select a value once to update all related widgets simultaneously. This is useful for dashboards where multiple widgets display different aspects of the same data source.

1. **Endpoint Parameters**: If multiple widgets use the same `optionsEndpoint` and `endpoint` parameter configuration, they can be grouped together. This allows users to select a value once and have it apply to all related widgets. Currently, this grouping works for only the first parameter in the `params` array specified this way.

Example of widgets that will be automatically grouped due to shared endpoint parameters:

<img className="pro-border-gradient" width="600" alt="grouping" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/grouping.png" />


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
                "optionsEndpoint": "get_chains_list"
            }
        ]
    }
}
```

2. **Ticker Parameters**: If multiple widgets use the same `ticker` parameter configuration, they can be grouped together. The widgets will then use the same built in security list we provide in OpenBB Terminal Pro. This allows users to select a value once and have it apply to all related widgets.

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

Let's say you want to group by the symbol in a widget and you want other widgets to change when you click on a cell in the table. You can do this by adding to your `columnsDefs` the render function `cellOnClick` and the `actionType` of `groupBy`. This will group the data by the symbol and update the other widgets that are grouped by the same parameter.

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
              "actionType": "groupBy"
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