---
title: Cell Click Grouping
sidebar_position: 28
description: Learn how to implement cell click grouping in OpenBB Workspace widgets, allowing users to click on cells in a table to update related widgets
keywords:
- cell click grouping
- table cell click
- interactive tables
- widget parameters
- cell interaction
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Cell Click Grouping | OpenBB Workspace Docs" />

A widget that demonstrates how to use cell clicks to trigger parameter updates across multiple widgets. This feature allows users to click on cells in a table to automatically update related widgets with the selected data.

<img className="pro-border-gradient" width="1000" alt="Cell Click Grouping Example" src="https://openbb-cms.directus.app/assets/9e3fe731-2a87-4c85-8650-0404c3c400b2.png" />

The implementation consists of three main components:

1. An endpoint that provides a list of available stock symbols that can be selected in the widgets.

```python
@app.get("/get_tickers_list")
def get_tickers_list():
    """Returns a list of available stock symbols"""
    return [
        {"label": "Apple Inc.", "value": "AAPL"},
        {"label": "Microsoft Corporation", "value": "MSFT"},
        {"label": "Google", "value": "GOOGL"},
        {"label": "Amazon", "value": "AMZN"},
        {"label": "Tesla", "value": "TSLA"}
    ]
```

2. A table widget that displays stock data and allows users to click on symbol cells to update related widgets. The key feature is the `cellOnClick` renderFn in the symbol column, which triggers the `groupBy` action when a cell is clicked.

```python
@register_widget({
    "name": "Table widget with grouping by cell click",
    "description": "A table widget that groups data when clicking on symbols. Click on a symbol to update all related widgets.",
    "type": "table",
    "endpoint": "table_widget_with_grouping_by_cell_click",
    "params": [
        {
            "paramName": "symbol",  # This parameter name is crucial - it's used for grouping
            "description": "Select stocks to display",
            "value": "AAPL",
            "label": "Symbol",
            "type": "endpoint",
            "optionsEndpoint": "/get_tickers_list",
            "multiSelect": False,
            "show": True
        }
    ],
    "data": {
        "table": {
            "showAll": True,
            "columnsDefs": [
                {
                    "field": "symbol",
                    "headerName": "Symbol",
                    "cellDataType": "text",
                    "width": 120,
                    "pinned": "left",
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
                    "formatterFn": "none",
                    "width": 120
                },
                {
                    "field": "change",
                    "headerName": "Change",
                    "cellDataType": "number",
                    "formatterFn": "percent",
                    "renderFn": "greenRed",
                    "width": 120
                },
                {
                    "field": "volume",
                    "headerName": "Volume",
                    "cellDataType": "number",
                    "formatterFn": "int",
                    "width": 150
                }
            ]
        }
    },
    "gridData": {
        "w": 20,
        "h": 9
    }
})
```

3. A markdown widget that displays detailed information about the selected stock. This widget uses the same `symbol` parameter as the table widget, so it automatically updates when a symbol is clicked in the table.

```python
@register_widget({
    "name": "Widget managed by parameter from cell click on table widget",
    "description": "This widget demonstrates how to use the grouped symbol parameter from a table widget. When a symbol is clicked in the table, this widget will automatically update to show details for the selected symbol.",
    "type": "markdown",
    "endpoint": "widget_managed_by_parameter_from_cell_click_on_table_widget",
    "params": [
        {
            "paramName": "symbol",  # Must match the groupByParamName in the table widget
            "description": "The symbol to get details for",
            "value": "AAPL",
            "label": "Symbol",
            "type": "endpoint",
            "optionsEndpoint": "/get_tickers_list",
            "show": True
        }
    ],
    "gridData": {
        "w": 20,
        "h": 6
    }
})
```

This functionality is achieved through three key components:

1. Both widgets must share the same `paramName` (in this case "symbol") to enable parameter synchronization
2. The table widget's `cellOnClick` renderFn must be configured with `actionType: "groupBy"` and specify the `groupByParamName` as "symbol"
3. Both widgets must reference the same endpoint (`/get_tickers_list`) for their options data

The interaction flow works as follows:

1. When a user clicks a symbol cell in the table, the `cellOnClick` renderFn activates the `groupBy` action
2. The `groupBy` action then updates the shared `symbol` parameter value
3. Any widget that uses the `symbol` parameter will automatically refresh to display data for the newly selected symbol

This implementation creates an intuitive user experience where selecting a symbol in the table instantly updates all connected widgets with the corresponding stock information. 