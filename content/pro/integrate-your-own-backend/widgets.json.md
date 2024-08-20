---
title: widgets.json
sidebar_position: 13
description: Learn how to integrate your own backend with OpenBB Terminal Pro using
  the cookie-cutter or language-agnostic API approaches, with illustrative guides
  and principles for handling widget.json files, APIs, interfaces, Python, FastAPI
  and more.
keywords:
- widgets.json
- OpenBB API
- Endpoint integration
- widget configuration
- Language-Agnostic API
- API implementation
- Python
- FastAPI
- Terminal Pro widgets
- Widget definitions
---

The widgets.json file is the bridge between your API and OpenBB Terminal Pro widgets. Below are all of the values you can set along with a description for each.

## `id`
`text`

Unique identifier for the widget -> Each widget starts here and all other configurations start under each `id`. All `id` values must be unique throughout OpenBB Terminal Pro.

#### Example

```json
{
  "id_widget_1": {
    ...
  },
  "id_widget_2": {
    ...
  }
}
```

---

## `name`
`text` (optional)

Name of the widget in the list the user sees. Displayed on the top left of the widget.

---

## `description`
`text` (optional)

Description to show the user on the info button and on the search/add widget menu.

---

## `category`
`text` (optional)


---

## `subCategory`
`text` (optional)

---

## `endpoint`
`text`

Endpoint on your API backend for the widget to get data from.

---

---

## `params`
`object` (optional)

Parameters to send to your API - each parameter object will be a field on the widget to enter in data.

- `paramName`: What the field is called on your backend. Type : text
- `type`: Type of input for the user - Allowed values: "date" | "text" | "number" | "boolean" | "ticker"
- `value`: Value to show by default in the input - Type : DateModifierValue | text | number | boolean
    - note : DateModifierValue is to show a dynamic date - `$currentDate+` or `$currentDate-` "h" | "d" | "w" | "M" | "y" (ex. `$currentDate-1w` - for one week ago)
- `label`: Label for the input. Type: String
- `show`: If you want the parameter to show or not. Type: boolean
- `description`: Description for the parameter (will show on hover for widget inside OpenBB Terminal Pro)
- `options` (optional): List of options to pass for a dropdown, Type: object
    - `label`  Type: text
    - `value` Type: text | number


#### Example

```json
[
  {
    paramName: "start_date",
    value: "$currentDate-2y",
    label: "Start Date",
    type: "date",
    description: "Current Date for the stock price"
  },
  {
    paramName: "end_date",
    value: "$currentDate+1d",
    label: "End Date",
    type: "date",
    description: "End Date for the stock price"
  },
  {
    paramName: "interval",
    value: "1d",
    label: "Interval",
    options: [
      { label: "Daily", value: "1d" },
      { label: "Weekly", value: "1w" },
      { label: "Monthly", value: "1m" },
    ],
    type: "text"
    description: "Select the interval",

  },
]
```

---

### `gridData`
`object` (optional)

Grid data for the widget. Used to set the positioning and size of the widget. Can also set the minimum and maximum sizes.

- `x` (optional): Horizontal grid position. Type: `number`
- `y` (optional): Vertical grid position. Type: `number`
- `w` (optional): Width for the widget in the grid. Type: `number`
- `h` (optional): Height for the widget in the grid. Type: `number`
- `minH` (optional): Minimum height. Type: `number`
- `minW` (optional): Minimum width. Type: `number`
- `maxH` (optional): Maximum height. Type: `number`
- `maxW` (optional): Maximum width. Type: `number`

#### Example

```json
{
  "id_widget_1": {
    ...
    "gridData": {
        "w": 20,
        "h": 5,
        "minH": 10,
        "maxH" : 30,
    },
    ...
  }
}
```

---

## `data`
`object`

The data key is the most powerful section of the widgets.json configuration - here you set up the table and the columns in your table, along with a few other settings.

- `hideControls`: Indicates if all controls should be hidden on the widget. Type: boolean
- `dataKey`: Key for the data - If you have a nested JSON return you can set the key here on which data to grab. Type: text

### `table`
`object`

- `enableCharts`: Indicates if the table should have charts options enabled (selecting data to chart). Type: boolean

- `showAll`: Indicates if all data series should be shown regardless of columns defined in `columnsDefs`. If True shows all defined columns plus all other data that comes back. Type: boolean

- `chartView` (optional): Will show chart view button if you pass this. If you leave it out we wont show the button. (Using our AgGrid chart Types) Type: object
    - `enabled` (optional): Indicates if the chart view button is on or off by default.
    - `chartType` (optional): Type of chart to display by default. Allowed values: "column", "groupedColumn", "stackedColumn", "normalizedColumn", "bar", "groupedBar", "stackedBar", "normalizedBar", "line", "scatter", "bubble", "pie", "donut", "doughnut", "area", "stackedArea", "normalizedArea", "histogram", "radarLine", "radarArea", "nightingale", "radialColumn", "radialBar", "sunburst", "rangeBar", "rangeArea", "boxPlot", "treemap", "heatmap", "waterfall"

- `columnsDefs` : See below

### `columnsDefs`
`object` (optional)

- `field` (optional): Field name returned from the JSON on the API. Type: text
- `headerName` (optional): What the user will see as the header name for a column. Type: text
- `chartDataType` (optional): Chart data type. - You must have at least one category and one series to be able to chart from the data. If you don't define this we assume any text value is a category and any number is a series. Allowed values: "category", "series", "time", "excluded"
- `cellDataType` (optional): Base cell data type. Allowed values: "text", "number", "boolean", "date", "dateString", "object"
- `formatterFn` (optional): Formatter function. Allowed values: "int", "none", "percent", "normalized", "normalizedPercent", "dateToYear"
    - `int` - Formats the number as an integer.
    - `none` - Does not format the number
    - `percent` - Adds `%` to the number.
    - `normalized` - Multiplies the number by 100.
    - `normalizedPercent` - Multiplies the number by 100 and adds `%` (e.g., `0.5` becomes `50 %`).
    - `dateToYear` - Converts a date to a year.
- `renderFn` (optional): Render function - will turn the text a color or put on titleCase. Allowed values: "green", "red", "titleCase"
- `width` (optional): Width of the column on the table. Type: number
- `maxWidth` (optional): Maximum width of the column on the table. Type: number
- `minWidth` (optional): Minimum width of the column on the table. Type: number
- `hide` (optional): Hide column on the table. Type: boolean
- `rowGroup` (optional): Row group column. Type: boolean
- `aggFunc` (optional): Aggregation function for the column. Type: text
- `pinned` (optional): Pinned column. Allowed values: "left", "right"


#### Example

```json
{
  "id_widget_1": {
    ...
    "data": {
      "table": {
        "showAll": true,
        "columnsDefs": [
          {
            "headerName": "Name",
            "field": "name",
            "chartDataType": "category"
          },
          {
            "headerName": "Total Value Locked",
            "field": "tvl",
            "chartDataType": "series",
            "formatterFn": "int"
          },
          {
            "headerName": "Token Symbol",
            "field": "tokenSymbol",
            "chartDataType": "category"
          }
        ]
        },
        "chartView": {
            "enabled": true,
            "chartType": "line"
      }
    }
    ...
  },
}

```

---

## `type`
`text` (optional)

Main widget type. Allowed values: `chart`, `table`, `note`, `custom`.

---

## `source`
`object` (optional)

Source for the widget. Where the data for the widget is coming from. (optional)

---

## `defaultViz`
`text` (optional)

Default visualization for the widget. Allowed values: `chart`, `table`. Default : `table`(optional)

---

## `dataKey`
`text` (optional)

Nested reference to the data. (optional)


