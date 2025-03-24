---
title: Render Functions
sidebar_position: 6
description: Learn how to configure and use custom render functions in OpenBB Workspace.
keywords:
- custom render functions
- OpenBB API
- widget configuration
---

## Render Functions

In the `widgets.json` configuration, you can specify render functions to customize how the data is displayed in the widget - These functions are only compatible with widgets that use a `columnsDefs`.

### Available Render Functions

- **`greenRed`**: Applies a green or red color based on conditions.
- **`titleCase`**: Converts text to title case.
- **`hoverCard`**: Displays additional information when hovering over a cell.
- **`cellOnClick`**: Triggers an action when a cell is clicked.
- **`columnColor`**: Changes the color of a column based on specified rules.
- **`showCellChange`**: Highlights cells when their values change via WebSocket updates. Only used with the [Live Grid Widget](/content/terminal/custom-backend/widgets/live_grid.md)

<details>
<summary mdxType="summary">Render Function Parameters</summary>

**actionType**  
_Type:_ `string`  
Specifies the action type for the render function.  
_Possible values:_ `"groupBy"`  
_Used with:_ `cellOnClick` render function

**colorValueKey**  
_Type:_ `string`  
Specifies which field to use for determining the color when showing cell changes.  
_Used with:_ `showCellChange` render function  
_Example:_ `"change"`

**hoverCardData**  
_Type:_ `array of strings`  
Specifies columns to show in the hover card.  
_Used with:_ `hoverCard` render function

**colorRules**  
_Type:_ `array of objects`  
An array of rules for conditional coloring.  
_Used with:_ `columnColor` render function

Each rule can include:

- **condition**  
  _Type:_ `string`  
  The condition for applying the color.  
  _Options:_ `"eq"`, `"ne"`, `"gt"`, `"lt"`, `"gte"`, `"lte"`, `"between"`

- **value**  
  _Type:_ `number`  
  The value for the condition.

- **range**  
  _Type:_ `object`  
  An object specifying `min` and `max` values for the condition.

- **color**  
  _Type:_ `string`  
  The color to apply, specified as a hex code or `"green"`, `"red"`, `"blue"`.

- **fill**  
  _Type:_ `boolean`  
  Indicates if the color should fill the cell.

</details>

## Example Configurations

### Column Color

To use the column color render function, you need to add it to the `columnsDefs` array in your `widgets.json` file for the column you want to apply it to.

The below example would apply a green color to the cell if the value is between 50 and 90, a red color if the value is less than 50, and a blue color if the value is greater than 90.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="color example" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/color.png" />
</div>

```json
{
    ...
    "columnsDefs": [
        {
            "field": "Analyst",
            "headerName": "Analyst",
            "renderFn": "columnColor",
            "renderFnParams": {
                "colorRules": [
                    {
                        "condition": "between",
                        "range": {
                            "min": 50,
                            "max": 90
                        },
                        "color": "blue",
                        "fill": true
                    },
                    {
                        "condition": "lt",
                        "value": 50,
                        "color": "red",
                        "fill": true
                    },
                    {
                        "condition": "gt",
                        "value": 90,
                        "color": "green",
                        "fill": true
                    }
                ]
            }
        }
    ]
}
```

### Hover Card

To use the hover card render function, you need to add it to the `columnsDefs` array in your `widgets.json` file for the column you want to apply it to.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="color example" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/hover+data.png" />
</div>

```json
{
    ...
    "columnsDefs": [
          {
            "field": "analyst",
            "headerName": "Analyst",
            "renderFn": "hoverCard",
            "renderFnParams": {
              "hoverCard": {
                "cellField": "value",
                "title": "Analyst Details",
                "markdown": "### {value}\n- **Description:** {description}\n- **Additional Info:** {additionalInfo}"
              }
            }
          }
        ]
}
```

The hover card example would use the below data to display the hover card.

```json
[
  {
    "id": 1,
    "name": "Item 1",
    "analyst": {
      "value": "Cool Guy 1",
      "description": "This is a detailed description for Item 1, but it's not as long as the others",
      "additionalInfo": "Some additional information about Item 1"
    }
  },
  {
    "id": 2,
    "name": "Item 2",
    "analyst": {
      "value": "Cool Guy 2",
      "description": "This is a detailed description for Item 2, but it's a bit longer than the first one",
      "additionalInfo": "Some additional information about Item 2"
    }
  },
  {
    "id": 3,
    "name": "Item 3",
    "analyst": {
      "value": "Cool Guy 3",
      "description": "This is a detailed description for Item 3, but it's the longest one yet and it's still going",
      "additionalInfo": "Some additional information about Item 3"
    }
  }
]
```

#### Additional Notes for Hover Card

- You can pass a simple configuration to get a hover card with default settings, excluding the title and value.
- The `hoverCard` render function allows for markdown customization, providing flexibility in how information is displayed.