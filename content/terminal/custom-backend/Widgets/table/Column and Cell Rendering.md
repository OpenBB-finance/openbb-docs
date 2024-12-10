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

Each widgets.json entry for your table widget can have a `columnsDefs` property that defines the columns for the table. This property is an array of column definitions, each defined with specific properties to control its appearance and behavior. While we try to automatically detect the correct settings, you can override them here. Here are the main properties you can set for each column:

- **field**: The name of the field from the JSON data. This is required and should match a key in the data source.
- **headerName**: The display name of the column header. This is what users will see in the widget.
- **cellDataType**: Defines the data type of the cell. Options include `"text"`, `"number"`, `"boolean"`, `"date"`, `"dateString"`, and `"object"`.
- **formatterFn**: Specifies a function to format the data. Options include `"int"`, `"none"`, `"percent"`, `"normalized"`, `"normalizedPercent"`, and `"dateToYear"`.
- **renderFn**: Specifies a rendering function for cell data. Options include `"greenRed"`, `"titleCase"`, `"cellOnClick"`.
- **renderFnParams**: Required if `renderFn` cellOnClick is used. Specifies the parameters for the render function. Options include `{"actionType": "groupBy"}`.
- **width**: The width of the column in pixels.
- **maxWidth**: The maximum width of the column in pixels.
- **minWidth**: The minimum width of the column in pixels.
- **hide**: A boolean to hide the column from the table.
- **pinned**: Pins the column to the left or right of the table. Options are `"left"` or `"right"`.

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

Cell rendering can be customized using the `renderFn` property, which allows you to apply specific styles or transformations to the data. For example, using `"greenRed"` can visually indicate positive or negative values, while `"titleCase"` can format text data to title case. You can also use the `cellOnClick` render function to group data by the cell value - see the [Grouping and Parameters](/terminal/custom-backend/Advanced Controls/Grouping and Parameters) section for more details on this.

## Cell Data Type

The `cellDataType` property defines the data type of the cell, which affects how the data is displayed and interacted with in the widget. Here are the options available:

- **text**: Displays the data as plain text. This is suitable for string data that does not require special formatting.
- **number**: Displays the data as a number, which can be formatted further using the [formatter function](#formatter-function) property.
- **boolean**: Displays the data as a boolean value, typically represented as true/false or yes/no.
- **date**: Displays the data as a date object, which can be formatted to show different date representations, see the [formatter function](#formatter-function) section for more details.
- **dateString**: Displays the data as a string representation of a date, which is useful when the date is stored as a string in the data source (example: `2024-01-01`).
- **object**: Displays the data as an object, which can be useful for complex data structures that require custom rendering logic.

## Formatter Function

The `formatterFn` property specifies a function used to format the data in the table. This allows for customization of how numerical and date data is presented. Here are the allowed values:

- **int**: Formats the number as an integer, removing any decimal places.
- **none**: Does not apply any formatting to the number, displaying it as is.
- **percent**: Adds a percentage sign to the number, which is useful for data that represents percentages.
- **normalized**: Multiplies the number by 100, which can be useful for normalizing data to a percentage scale.
- **normalizedPercent**: Multiplies the number by 100 and adds a percentage sign, converting a decimal to a percentage (e.g., `0.5` becomes `50%`).
- **dateToYear**: Converts a date to just the year, which is useful for summarizing date data to a yearly level.
