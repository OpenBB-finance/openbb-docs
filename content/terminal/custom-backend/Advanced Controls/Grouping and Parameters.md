## Grouping and Parameters

In the `widgets.json` configuration, you can specify parameters/inputs that can be used to customize the data retrieval and display. Widgets can also be grouped if you have multiple widgets on the same dashboard that share a parameter. This section will guide you through setting up these features.

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

When using `type: "endpoint"`, you'll need to specify an `optionsEndpoint` that returns the available options. This is useful for dynamic dropdowns where the options need to be fetched from an API:

- **optionsEndpoint**: The API endpoint that returns the options for the parameter. The endpoint should return an array of objects with `label` and `value` properties.
- **optionsParams**: (Optional) Additional parameters to pass to the options endpoint.

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
                "optionsEndpoint": "/api/companies",
                "optionsParams": {
                    "region": "US",
                    "active": true
                }
            }
        ]
    }
}
```

The `optionsEndpoint` should return data in this format:

```json
[
    { "label": "Apple Inc.", "value": "AAPL" },
    { "label": "Microsoft Corporation", "value": "MSFT" },
    { "label": "Google", "value": "GOOGL" }
]
```

### Grouping

Widget grouping is a powerful feature that allows multiple widgets to share and respond to the same parameter inputs, creating a more cohesive and efficient user experience. When widgets are grouped, users only need to select a value once (such as a ticker symbol or chain name) to update all related widgets simultaneously. This is particularly useful when building dashboards where multiple widgets need to display different aspects of the same data source. OpenBB Terminal Pro automatically handles this grouping in two ways: through shared endpoint parameters and through ticker parameters. This means you don't need any additional configuration to enable grouping - simply using the same parameter types and configurations across widgets will trigger the automatic grouping behavior.

1. **Endpoint Parameters**: If multiple widgets use the same `optionsEndpoint` and `endpoint` parameter configuration, they can be grouped together. This allows users to select a value once and have it apply to all related widgets. Currently, this grouping works for only the first parameter in the `params` array specified this way.

Example of widgets that will be automatically grouped due to shared endpoint parameters:

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
                "label": "Symbol"
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
                "label": "Symbol"
            }
        ]
    }
}
```

### Example

Here's an example of how grouping and parameters might be configured in a `widgets.json` entry:

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
            }
        ]
    }
}
```

This configuration allows users to filter data by start date and ticker symbol, with the widget organized under the "finance" category and "stocks" subcategory.



### Example

Here's an example of how grouping and parameters might be configured in a `widgets.json` entry with multiple widgets:

```json
{
    "stock_performance_widget": {
        "name": "Stock Performance",
        "description": "Track stock performance over time",
        "endpoint": "stock-performance",
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
                "type": "endpoint",
                "paramName": "company",
                "label": "Company",
                "show": true,
                "description": "Select a company to analyze",
                "optionsEndpoint": "/api/companies",
                "optionsParams": {
                    "market": "US",
                    "active": true
                }
            }
        ]
    },
    "market_overview_widget": {
        "name": "Market Overview",
        "description": "General market statistics and trends",
        "endpoint": "market-overview",
        "category": "finance",
        "subCategory": "market-analysis",
        "params": [
            {
                "type": "endpoint",
                "paramName": "marketIndex",
                "label": "Market Index",
                "show": true,
                "description": "Select market index to analyze",
                "optionsEndpoint": "/api/market-indices",
                "multiSelect": true
            }
        ]
    }
}
```

This example shows two widgets organized under the "finance" category but with different subcategories. The first widget uses an endpoint parameter for company selection, while the second widget demonstrates a multi-select endpoint parameter for market indices.