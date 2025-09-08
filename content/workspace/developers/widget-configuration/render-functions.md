---
title: Render Functions
sidebar_position: 21
description: Learn how to configure and use custom render functions in OpenBB Workspace to customize data display and interactions.
keywords:
- custom render functions
- OpenBB API
- widget configuration
- data visualization
- interactive widgets
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Render Functions | OpenBB Workspace Docs" />

In the `widgets.json` configuration, you can specify render functions to customize how the data is displayed in the widget - These functions are only compatible with widgets that use a `columnsDefs`.

### Available Render Functions

| Function | Description |
|----------|-------------|
| `greenRed` | Applies a green or red color based on conditions |
| `titleCase` | Converts text to title case |
| `hoverCard` | Displays additional information when hovering over a cell |
| `cellOnClick` | Triggers an action when a cell is clicked |
| `columnColor` | Changes the color of a column based on specified rules |
| `showCellChange` | Highlights cells when their values change via WebSocket updates. Only used with the [Live Grid Widget](../widget-types/live-grid.md) |

### Render Function Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| **actionType** | `string` | Specifies the action type for the render function (`"openUrl"`, `"groupBy"`, `"sendToAgent"`) |
| **colorValueKey** | `string` | Specifies which field to use for determining the color when showing cell changes |
| **hoverCardData** | `array of strings` | Specifies columns to show in the hover card |
| **colorRules** | `array of objects` | An array of rules for conditional coloring |
| **sendToAgent** | `object` | Configuration for sending data to an AI agent |

### Send to Agent Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| **markdown** | `string` | Markdown content to send to the agent, supports template variables from row data |
| **agentId** | `string` | (Optional) Specific agent ID to send the message to |

### Color Rules Parameters

| Parameter | Type | Description | Options |
|-----------|------|-------------|---------|
| **condition** | `string` | The condition for applying the color | `"eq"`, `"ne"`, `"gt"`, `"lt"`, `"gte"`, `"lte"`, `"between"` |
| **value** | `number` | The value for the condition | - |
| **range** | `object` | An object specifying `min` and `max` values for the between condition | `{min: number, max: number}` |
| **color** | `string` | The color to apply | Hex code or `"green"`, `"red"`, `"blue"` |
| **fill** | `boolean` | Indicates if the color should fill the cell | `true`/`false` |

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

### Multiple Render Functions and Color Rules

If you want to use multiple render functions, you can pass an array of render functions to the `renderFn` parameter. Below is an example of a column that uses both the `cellOnClick` and `columnColor` render functions. We also specify the `colorValueKey` so that the `columnColor` render function knows which field to use for determining the color. In this case we want to color the symbol cell based on the `Analyst` field.

```json
{
    ...
      "columnsDefs": [
          {
            "field": "Symbol",
            "headerName": "Symbol",
            "renderFn": [
              "cellOnClick",
              "columnColor"
            ],
            "renderFnParams": {
              "actionType": "groupBy",
              "groupByParamName": "symbol",
              "colorValueKey": "Analyst",
              "colorRules": [
                {
                  "condition": "eq",
                  "value": "Sarah Johnson",
                  "color": "blue",
                  "fill": true
                }
              ]
            }
        },
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

### Prefix and Suffix

The `prefix` and `suffix` parameters can also be used in the `columnsDefs` to add a prefix or suffix to the column values. [See the widgets-json-reference](../json-specs/widgets-json-reference) for more information.

### Send to Agent

The `sendToAgent` action type allows users to click on table cells to send contextual data directly to an AI agent for analysis. This is particularly useful for getting insights about specific data points or rows.

```json
{
    ...
    "columnsDefs": [
        {
            "field": "company",
            "headerName": "Company",
            "renderFn": "cellOnClick",
            "renderFnParams": {
                "actionType": "sendToAgent",
                "sendToAgent": {
                    "markdown": "Please analyze the company **{company}** with the following details:\n\n- **Revenue:** ${revenue}M\n- **Growth Rate:** {growth_rate}%\n- **Market Cap:** ${market_cap}B\n- **Sector:** {sector}\n\nProvide insights on the company's financial performance, growth prospects, and market position."
                }
            }
        },
        {
            "field": "revenue",
            "headerName": "Revenue (M)",
            "renderFn": "cellOnClick",
            "renderFnParams": {
                "actionType": "sendToAgent",
                "sendToAgent": {
                    "markdown": "Analyze the revenue figure of **${revenue}M** for {company}. How does this compare to industry standards in the {sector} sector?",
                    "agentId": "financial-analyst-agent"
                }
            }
        }
    ]
}
```

#### Template Variables

The `markdown` content in `sendToAgent` supports template variables using curly braces `{}`. You can reference any field from the row data:

- `{company}` - References the company field value
- `{revenue}` - References the revenue field value  
- `{growth_rate}` - References the growth_rate field value
- And so on for any field in your data
