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

In the `widgets.json` configuration, you can specify parameters/inputs that can be used to customize the data retrieval and display. Widgets can also be grouped if you have multiple widgets on the same dashboard that share a parameter. This section will guide you through setting up these features.

## Parameters

Parameters are used to pass dynamic values to your API endpoints, allowing for customizable data queries from the widget. Each parameter is defined in the `params` array within your widgets.json file and can include the following fields:

<details>
<summary mdxType="summary">Parameter values</summary>

**type**  
_Type:_ `string`  
The data type of the parameter.  
_Possible values:_ `"date"`, `"text"`, `"ticker"`, `"number"`, `"boolean"`, `"endpoint"`, `"form"`

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

**style**  
_Type:_ `object`  
Styling options for the parameter. Only popupWidth is currently supported minimum value is 200px max value is 1000px. 
_Example:_ `{"popupWidth": 450}`

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

## Form Parameter

The form parameter type (`"type": "form"`) allows you to create complex input forms with a parameter. This is useful if you want to update some data that is tied to the table or chart and have it update when the form is submitted. Possible use cases are updating a database entry or sending data to an endpoint to be processed then a chart created.

Forms require a dedicated endpoint and are always sent with a POST request. This endpoint will be called when the form is submitted.

You can see a full example of this in the [Form Example](https://github.com/OpenBB-finance/backend-examples-for-openbb-workspace/tree/main/advanced_examples/form_parameter) section.

<img className="pro-border-gradient" width="500" alt="form-parameter" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/form-parameter.png" />

A form can include various input types:

- **Date**: Select a specific date for the data
- **Number**: Numeric input field
- **Dropdown**: Selection menu (can be populated dynamically from an API)
- **Text**: Text input field
- **Button**: Button to trigger the data submission

<details>
<summary mdxType="summary">Example form parameter configuration</summary>

```json
{
  "form_submit_widget": {
    "name": "Financial Entry Form",
    "description": "Example of a financial data entry form",
    "category": "forms",
    "searchCategory": "form",
    "endpoint": "all_forms",
    "type": "table",
    "gridData": {
      "w": 20,
      "h": 9
    },
    "params": [
      {
        "paramName": "form",
        "description": "Form example",
        "type": "form",
        "endpoint": "form_submit",
        "inputParams": [
          {
            "paramName": "client_first_name",
            "type": "text",
            "value": "",
            "label": "First Name",
            "description": "Client's first name"
          },
          {
            "paramName": "client_last_name",
            "type": "text",
            "value": "",
            "label": "Last Name",
            "description": "Client's last name"
          },
          {
            "paramName": "investment_types",
            "type": "text",
            "value": null,
            "label": "Investment Types",
            "description": "Selected investment vehicles",
            "multiSelect": true,
            "options": [
              {
                "label": "Stocks",
                "value": "stocks"
              },
              {
                "label": "Bonds",
                "value": "bonds"
              },
              {
                "label": "Mutual Funds",
                "value": "mutual_funds"
              },
              {
                "label": "ETFs",
                "value": "etfs"
              },
              {
                "label": "Real Estate",
                "value": "real_estate"
              },
              {
                "label": "Commodities",
                "value": "commodities"
              },
              {
                "label": "Cryptocurrency",
                "value": "cryptocurrency"
              },
              {
                "label": "Options",
                "value": "options"
              },
              {
                "label": "Futures",
                "value": "futures"
              },
              {
                "label": "Retirement Accounts",
                "value": "retirement_accounts"
              },
              {
                "label": "CDs",
                "value": "cds"
              }
            ]
          },
          {
            "paramName": "risk_profile",
            "type": "text",
            "value": "",
            "label": "Risk Profile",
            "description": "Client risk tolerance assessment"
          },
          {
            "paramName": "add_record",
            "type": "button",
            "value": true,
            "label": "Add Client",
            "description": "Add client record"
          },
          {
            "paramName": "update_record",
            "type": "button",
            "value": true,
            "label": "Update Client",
            "description": "Update client record"
          }
        ]
      }
    ]
  }
}
```

</details>

### Backend Implementation

For forms to work properly, you need to implement two endpoints in your backend:

1. **POST endpoint** to handle form submission (specified in the `endpoint` field of the form parameter)
2. **GET endpoint** to retrieve and display the updated data (specified in the widget's main `endpoint` field)

Below you can find a quick example of how to implement the endpoints and have a form that updates a table.

<details>
<summary mdxType="summary">Example backend implementation</summary>

```python
...
ALL_FORMS = []

# Submit form endpoint to handle the form submission
@app.post("/form_submit")
async def form_submit(params: dict) -> JSONResponse:
    global ALL_FORMS
    
    # Check if first name and last name are provided
    if not params.get("client_first_name") or not params.get("client_last_name"):
        # IMPORTANT: Even with a 400 status code, the error message is passed to the frontend
        # and can be displayed to the user in the OpenBB widget
        return JSONResponse(
            status_code=400,
            content={"error": "Client first name and last name are required"}
        )
    
    # Check if investment types and risk profile are provided
    if not params.get("investment_types") or not params.get("risk_profile"):
        return JSONResponse(
            status_code=400,
            content={"error": "Investment types and risk profile are required"}
        )

    # Check if add_record or update_record is provided
    add_record = params.pop("add_record", None)
    if add_record:
        ALL_FORMS.append(
            {k: ",".join(v) if isinstance(v, list) else v for k, v in params.items()}
        )
    update_record = params.pop("update_record", None)
    if update_record:
        for record in ALL_FORMS:
            if record["client_first_name"] == params.get("client_first_name") and record[
                "client_last_name"
            ] == params.get("client_last_name"):
                record.update(params)
    
    # IMPORTANT: The OpenBB Workspace only checks for a 200 status code from this endpoint
    # The actual content returned doesn't matter for the widget refresh mechanism
    # After a successful submission, Workspace will automatically refresh the widget
    # by calling the GET endpoint defined in the widget configuration
    return JSONResponse(content={"success": True})


# Get all forms
@app.get("/all_forms")
async def all_forms() -> list:
    print(ALL_FORMS)
    # IMPORTANT: This GET endpoint is called by the OpenBB widget after form submission
    # The widget refresh mechanism works by:
    # 1. User submits form (POST to /form_submit)
    # 2. If POST returns 200, widget automatically refreshes
    # 3. Widget refresh calls this GET endpoint to fetch updated data
    # 4. This function must return ALL data needed to display the updated widget
    return (
        ALL_FORMS
        if ALL_FORMS
        else [
            {"client_first_name": None, "client_last_name": None, "investment_types": None, "risk_profile": None}
        ]
    )
```

</details>

## Endpoint Parameter

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

2. **Grouping by Ticker**: If multiple widgets use the same `ticker` parameter configuration, they can be grouped together. The widgets will then use the same built in security list we provide in OpenBB Terminal Pro. This allows users to select a value once and have it apply to all related widgets. You won't need to specify the group in the template.json file for a ticker parameter.

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