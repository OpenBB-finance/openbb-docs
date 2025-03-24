---
title: Column and Cell Rendering
sidebar_position: 5
description: Learn how to configure column and cell rendering for widgets in OpenBB Terminal Pro using the widgets.json file.
keywords:
- widgets.json
- OpenBB API
- Column rendering
- Cell rendering
- Widget configuration
- Data visualization
---

# Column and Cell Rendering

When creating a table widget, you can customize the columns and cells to create many different data visualization options. Below are the key components and settings you can use to define column and cell rendering:

## Column Definitions

Each widgets.json entry for your table widget can have a `columnsDefs` property that defines the columns for the table. **Note that setting columnsDefs is entirely optional** - tables will work with default settings, and columnsDefs should only be used when you need to fine-tune the visualization.

When defined, columnsDefs is an array of column definitions, each with the following properties:

<details>
<summary mdxType="summary">Column and Cell Properties</summary>

**field**  
_Type:_ `string`  
The name of the field from the JSON data. Must match a key in the data source.  
_Example:_ `"strike_price"`

**headerName**  
_Type:_ `string`  
The display name of the column header shown in the widget. 
_Example:_ `"Strike Price"`

**cellDataType**  
_Type:_ `string`  
Defines the data type of the cell.  
_Possible values:_ `"text"`, `"number"`, `"boolean"`, `"date"`, `"dateString"`, `"object"`  
_Default:_ `"text"`

**formatterFn**  
_Type:_ `string`  
Specifies a function to format the data.  
_Possible values:_ `"int"`, `"none"`, `"percent"`, `"normalized"`, `"normalizedPercent"`, `"dateToYear"`  
_Default:_ `"none"`

**renderFn**  
_Type:_ `string`
Specifies a rendering function for cell data.  
_Possible values:_ `"greenRed"`, `"titleCase"`, `"cellOnClick"`

**renderFnParams**  
_Type:_ `object`  
Parameters for the render function.  
_Example:_ `{"actionType": "groupBy"}`

**width**  
_Type:_ `number`  
The width of the column in pixels.

**maxWidth**  
_Type:_ `number`  
The maximum width of the column in pixels.  

**minWidth**  
_Type:_ `number`  
The minimum width of the column in pixels.  

**hide**  
_Type:_ `boolean`  
Whether to hide the column from the table.  
_Default:_ `false`

**pinned**  
_Type:_ `string`  
Pins the column to the left or right of the table.  
_Possible values:_ `"left"`, `"right"`

</details>


## Example Configuration

Below is an example of how you might configure your columns in the `widgets.json` file:

```json
"columnsDefs": [
    {
        "field": "column1",
        "headerName": "Column 1",
        "cellDataType": "text",
        "formatterFn": "none",
        "renderFn": "titleCase",
        "width": 100,
        "maxWidth": 200,
        "minWidth": 50,
        "hide": false,
        "pinned": "left"
    },
    {
        "field": "column2",
        "headerName": "Column 2",
        "cellDataType": "number",
        "formatterFn": "int",
        "renderFn": "greenRed",
        "width": 150
    }
]
```

## Customizing Cell Rendering

Cell rendering can be customized using the `renderFn` property, which allows you to apply specific styles or transformations to the data. For example, using `"greenRed"` can visually indicate positive or negative values, while `"titleCase"` can format text data to title case. You can also use the `cellOnClick` render function to group data by the cell value - see the [Grouping and Parameters](/workspace/custom-backend/advanced-controls/grouping-and-parameters) section for more details on this.

## Cell Data Type

The `cellDataType` property defines the data type of the cell, which affects how the data is displayed and interacted with in the widget. Here are the options available:

| Property | Type | Description |
|----------|------|-------------|
| text | string | Displays the data as plain text. Suitable for string data that does not require special formatting |
| number | string | Displays the data as a number. Can be formatted further using the [formatter function](#formatter-function) property |
| boolean | string | Displays the data as a boolean value |
| date | string | Displays the data as a date object. Can be formatted to show different date representations |
| dateString | string | Displays the data as a string representation of a date |
| object | string | Displays the data as an object. Useful for complex data structures requiring custom rendering logic |

## Formatter Function

The `formatterFn` property specifies a function used to format the data in the table. This allows for customization of how numerical and date data is presented. Here are the allowed values:

| Value | Type | Description |
|-------|------|-------------|
| int | string | Formats the number as an integer, removing any decimal places |
| none | string | Does not apply any formatting to the number, displaying it as is |
| percent | string | Adds a percentage sign to the number, which is useful for data that represents percentages |
| normalized | string | Multiplies the number by 100, which can be useful for normalizing data to a percentage scale |
| normalizedPercent | string | Multiplies the number by 100 and adds a percentage sign, converting a decimal to a percentage (e.g., `0.5` becomes `50%`) |
| dateToYear | string | Converts a date to just the year, which is useful for summarizing date data to a yearly level |
