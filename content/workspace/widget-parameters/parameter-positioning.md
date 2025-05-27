---
title: Parameter Positioning
sidebar_position: 30
description: Learn how to control the layout and positioning of widget parameters in OpenBB Workspace, including row positioning and parameter ordering
keywords:
- parameter positioning
- parameter layout
- parameter rows
- widget parameters
- parameter ordering
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Parameter Positioning | OpenBB Workspace Docs" />

By default, widget parameters are displayed in a single row at the top of the widget. However, you can control the positioning and layout of parameters by organizing them into multiple rows and changing their order within those rows.

## Row Positioning

To position parameters in different rows, you can structure the `params` array as a nested array where each sub-array represents a row of parameters.

### Single Row (Default)

```python
"params": [
    {
        "paramName": "param1",
        "type": "text",
        "value": "value1"
    },
    {
        "paramName": "param2",
        "type": "text",
        "value": "value2"
    }
]
```

### Multiple Rows

```python
"params": [
    [], # Empty first row
    [ # Second row with parameters
        {
            "paramName": "param1",
            "type": "text",
            "value": "value1"
        },
        {
            "paramName": "param2",
            "type": "text",
            "value": "value2"
        }
    ]
]
```

## Complete Example

Here's a comprehensive example showing how to position different types of parameters across multiple rows:

```python
@register_widget({
    "name": "Moving Parameters Example",
    "description": "Show example of moving parameter positions",
    "endpoint": "moving_parameters_example",
    "gridData": {"w": 20, "h": 9},
    "type": "table",
    "params": [
        [],  # Empty first row - pushes all parameters to second row
        [    # Second row with all parameters
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
                "value": True,
                "label": "True/False",
                "description": "I'm a True/False selector!",
                "type": "boolean"
            },
            {
                "paramName": "daysPicker1",
                "value": "1",
                "label": "Days",
                "type": "text",
                "multiSelect": True,
                "description": "Number of days to look back",
                "options": [
                    {"value": "1", "label": "1"},
                    {"value": "5", "label": "5"},
                    {"value": "10", "label": "10"},
                    {"value": "20", "label": "20"},
                    {"value": "30", "label": "30"}
                ]
            }
        ]
    ]
})
@app.get("/moving_parameters_example")
def moving_parameters_example(
    datePicker1: str = None,
    textBox1: str = None,
    daysPicker1: str = "1",
    TrueFalse: bool = True
):
    """Show example of how to move parameters - This will put them all on the second row of the widget"""
    return {
        "datePicker1": datePicker1,
        "textBox1": textBox1,
        "daysPicker1": daysPicker1.split(","),
        "TrueFalse": TrueFalse
    }
```

## Advanced Positioning Examples

### Parameters Across Multiple Rows

```python
"params": [
    [ # First row
        {
            "paramName": "symbol",
            "type": "text",
            "value": "AAPL",
            "label": "Symbol"
        }
    ],
    [ # Second row
        {
            "paramName": "start_date",
            "type": "date",
            "value": "$currentDate-30d",
            "label": "Start Date"
        },
        {
            "paramName": "end_date",
            "type": "date",
            "value": "$currentDate",
            "label": "End Date"
        }
    ],
    [ # Third row
        {
            "paramName": "show_volume",
            "type": "boolean",
            "value": True,
            "label": "Show Volume"
        }
    ]
]

### Skipping Multiple Rows

```python
"params": [
    [], # Skip first row
    [], # Skip second row
    [ # Parameters on third row
    {
        "paramName": "param1",
        "type": "text",
        "value": "value1"
    }
    ]
]
```

## Parameter Ordering

Within each row, parameters are displayed in the order they appear in the array. You can change the visual order by rearranging the parameter objects:

```python
# Original order: Date, Text, Boolean, Dropdown
[
    {"paramName": "date_param", "type": "date", ...},
    {"paramName": "text_param", "type": "text", ...},
    {"paramName": "bool_param", "type": "boolean", ...},
    {"paramName": "dropdown_param", "type": "text", "options": [...], ...}
]
# Reordered: Boolean, Dropdown, Date, Text
[
    {"paramName": "bool_param", "type": "boolean", ...},
    {"paramName": "dropdown_param", "type": "text", "options": [...], ...},
    {"paramName": "date_param", "type": "date", ...},
    {"paramName": "text_param", "type": "text", ...}
]
```

In the above example, the parameters are displayed in the order: Date, Text, Boolean, Dropdown. Then, the parameters are reordered to: Boolean, Dropdown, Date, Text based on the order of the parameters in the array.
