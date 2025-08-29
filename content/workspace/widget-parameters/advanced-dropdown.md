---
title: Advanced Dropdown
sidebar_position: 28
description: Learn how to implement and use advanced dropdown parameters in OpenBB Workspace widgets, including dynamic options from endpoints and additional information display
keywords:
- advanced dropdown
- dynamic dropdown
- endpoint dropdown
- widget parameters
- enhanced selection
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Advanced Dropdown | OpenBB Workspace Docs" />

Sometimes you may want to pass a list from an endpoint rather then specify the options in the `widgets.json` file.

By using `type: "endpoint"`, you'll need to specify an `optionsEndpoint` that returns the available options.

Below is an example of an advanced dropdown parameter that includes additional information for each option.

<img className="pro-border-gradient" width="800" alt="Advanced Dropdown Parameter Example" src="https://openbb-cms.directus.app/assets/9ae41bfc-65ad-4578-aeeb-efca97112bfc.png" />

The dropdown options are fetched from an endpoint and can include extra details.

```python
@app.get("/advanced_dropdown_options")
def advanced_dropdown_options():
    """Returns a list of stocks with their details"""
    return [
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

Note how the `optionsEndpoint` is pointing to the endpoint `"/advanced_dropdown_options"`.

We also set the `style` parameter to `popupWidth` to `450` to set the width of the dropdown.

```python
@register_widget({
    "name": "Markdown Widget with Multi Select Advanced Dropdown",
    "description": "A markdown widget with a multi select advanced dropdown parameter",
    "endpoint": "markdown_widget_with_multi_select_advanced_dropdown",
    "gridData": {"w": 16, "h": 6},
    "type": "markdown",
    "params": [
        {
            "paramName": "stock_picker",
            "description": "Select a stock to analyze",
            "value": "AAPL",
            "label": "Select Stock",
            "type": "endpoint",
            "multiSelect": True,
            "optionsEndpoint": "/advanced_dropdown_options",
            "style": {
                "popupWidth": 450
            }
        }
    ]
})
@app.get("/markdown_widget_with_multi_select_advanced_dropdown")
def markdown_widget_with_multi_select_advanced_dropdown(stock_picker: str):
    """Returns a markdown widget with multi select advanced dropdown parameter"""
    return f"""# Multi Select Advanced Dropdown
Selected stocks: {stock_picker}
""" 