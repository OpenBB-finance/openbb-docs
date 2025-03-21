---
title: Templates
sidebar_position: 6
description: Learn how to configure and use custom templates in OpenBB, including setting up endpoints and structuring templates.json files.
keywords:
- custom templates
- OpenBB API
- templates.json
- FastAPI
- widget configuration
---

# Custom Templates

This guide provides an overview of how to set up and use custom templates in OpenBB. Custom templates allow you to define and manage the layout and behavior of widgets on your dashboard.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="color example" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/templates+example.png" />
</div>

Templates can only be used with custom backends at this time.

## Setting Up the Templates Endpoint

To serve custom templates, you need to define an endpoint in your FastAPI application that returns the content of a `templates.json` file. This file contains the configuration for your templates.

### Exporting Templates

The easiest way to create a template is to set up your custom widgets in OpenBB Workspace and then right click on the dashboard and select "Export Template". This will create a `templates.json` file for you. Simply follow the step below then to create your endpoint and your templates will show up on the OpenBB Workspace tab under "Templates" and then "My Templates" tab. The export function will capture the current state of the dashboard so you can easily create a dashboard quickly in the future.

### FastAPI Endpoint

Here's how you can define the `/templates.json` endpoint in your FastAPI application:

```python
@app.get("/templates.json")
def get_templates():
    """Templates configuration file for the OpenBB Custom Backend"""
    return JSONResponse(
        content=json.load((Path(__file__).parent.resolve() / "templates.json").open())
    )
```

## Structure of the templates.json File

If you want to create your own templates.json file, you can do so by following the structure below.

The `templates.json` file should be structured to define templates, including their properties like name, image, customization options, tabs, and groups. Below is an example structure:

```json
[
    {
        "name": "My First Template",
        "img": "img here",
        "img_dark": "",
        "img_light": "",
        "description": "test",
        "allowCustomization": true,
        "tabs": {
            "overview": {
                "id": "tab1",
                "name": "Tab 1",
                "layout": [
                    {
                        "i": "Widget1",
                        "x": 0,
                        "y": 0,
                        "w": 40,
                        "h": 15,
                        "state": {
                            "chartView": {
                                "enabled": false,
                                "chartType": "line"
                            }
                        }
                    },
                    {
                        "i": "Widget2",
                        "x": 0,
                        "y": 15,
                        "w": 40,
                        "h": 15,
                        "state": {
                            "params": {
                                "symbol": "ACYH"
                            }
                        }
                    }
                ]
            },
            "group2": {
                "id": "tab2",
                "name": "Tab 2",
                "layout": [
                    {
                        "i": "Widget3",
                        "x": 0,
                        "y": 0,
                        "w": 20,
                        "h": 15
                    }
                ]
            }
        },
        "groups": [
            {
                "name": "Group 1",
                "paramName": "chain",
                "type" : "endpoint",
                "defaultValue": "Ethereum",
                "widgetIds": [
                    "historical_chains_table",
                    "historical_chains_table_advanced_dropdown"
                ]
            },
            {
                "name": "Group 2",
                "paramName": "test",
                "defaultValue": "all",
                "widgetIds": [
                    "historical_chains_table",
                    "historical_chains_table_advanced_dropdown"
                ]
            },
        ],
        "prompts": [
            "What is the price of Ethereum?",
            "What is the price of Bitcoin?"
        ]
    }
]
```

In the `templates.json` file, each widget's layout is defined using specific properties that determine its position and size on the dashboard. Here's a breakdown of these properties:

- **`i` (ID)**: 
  - This is the identifier for the widget, which corresponds to the widget's ID in the `widgets.json` file (not the name).

  ```jsonc
    "Widget1": { (Widget ID)
        "name": "Widget 1",
        "description": "Widget 1",
        "category": "stocks",
        "searchCategory": "stocks",
        "endpoint": "chains_table",
        "gridData": {
        "w": 20,
        "h": 9
        },
    }
  ```

  - It links the layout configuration in the `templates.json` file with the actual widget configuration in the `widgets.json` file.
  - Example: `"i": "Widget2"` indicates that this layout configuration is for the widget with the ID "Widget2".

- **`x` (X-coordinate)**: 
  - Specifies the horizontal position of the widget on the grid.
  - The value represents the number of grid units from the left edge of the dashboard.
  - Example: `"x": 0` places the widget at the far left.

- **`y` (Y-coordinate)**: 
  - Specifies the vertical position of the widget on the grid.
  - The value represents the number of grid units from the top edge of the dashboard.
  - Example: `"y": 15` places the widget 15 grid units down from the top.

- **`w` (Width)**: 
  - Defines the width of the widget in grid units.
  - Example: `"w": 40` means the widget spans 40 grid units horizontally.

- **`h` (Height)**: 
  - Defines the height of the widget in grid units.
  - Example: `"h": 15` means the widget spans 15 grid units vertically.

- **`groupById`**: This is the parameter that will be used to group the widgets together. If you have multiple widgets on the same dashboard that share the same parameter, you can group them together.
    This value will be the optionsEndpoint value in the `widgets.json` file.

- **`defaultValue`**: This is the default value for the parameter that will be used to group the widgets together.

- **`state`**: This is the state of the widget. This is where you can define the default parameters for the widget.

- **`prompts`** (optional): This is the prompts that can be used in the OpenBB Copilot for this template.

## Other Features

- **Name and Image**: Define the template's name and an optional image. This will show up on the template selection screen.
- **Customization**: Use `allowCustomization` to enable or disable users to change/move the widgets on the template.
- **Tabs and Layout**: Organize widgets into tabs and define their layout using grid coordinates. If you only define one tab, it will be the default tab. Define multiple tabs to allow users to switch between them like in the example above.
- **Groups**: This will group the widgets together automatically if they share the same parameter.
- **Prompts**: This will allow you to add a prompt to the template to use in the OpenBB Copilot.

An example of a template can be found [here](https://github.com/OpenBB-finance/backend-for-terminal-pro/tree/main).
