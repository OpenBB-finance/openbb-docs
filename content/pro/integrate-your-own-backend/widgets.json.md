---
title: widgets.json
sidebar_position: 13
description: Learn how to integrate your own backend with OpenBB Terminal Pro using
  the cookie-cutter or language-agnostic API approaches, with illustrative guides
  and principles for handling widget.json files, APIs, interfaces, Python, FastAPI
  and more.
keywords:
- OpenBB cookie-cutter
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
`string`

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
`string` (optional)

Name of the widget in the list the user sees. Displayed on the top left of the widget.

---

## `description`

Description to show the user on the info button and on the search/add widget menu.

---

## `endpoint`
`string`

Endpoint on your API backend for the widget to get data from.

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

## `params`
`object` (optional)

Parameters to send to your API - each parameter object will be a field on the widget to enter in data.

- `type`: Type of input for the user - Allowed values: "date" | "string" | "number" | "boolean" | "ticker"
- `default`: Value to show by default in the input - Type : DateModifierValue | string | number | boolean
    - note : DateModifierValue is to show a dynamic date - `$currentDate+` or `$currentDate-` "h" | "d" | "w" | "M" | "y" (ex. `$currentDate-1w` - for one week ago)
- `field`: What the field is called. Type : string
- `label`: Label for the input. Type: String
- `optional`: If you want the parameter to show or not. Type: boolean
- `options` (optional): If you want the table to be a chart by default, Type: object
    - label Type: string
    - value Type: string | number

---

## `data`
`object`

The data key is the most powerful section of the widgets.json configuration - here you set up the table and the columns in your table, along with a few other settings.

- `hideControls`: Indicates if all controls should be hidden on the widget. Type: boolean
- `dataKey`: Key for the data - If you have a nested JSON return you can set the key here on which data to grab. Type: string

### `table`
`object`

- `enableCharts`: Indicates if the table should have charts options enabled (selecting data to chart). Type: boolean

- `showAll`: Indicates if all data series should be shown regardless of columns defined in `columnsDefs`. If True shows all defined columns plus all other data that comes back. Type: boolean

### `columnsDefs`
`object` (optional)

- `field` (optional): Field name returned from the JSON on the API. Type: string
- `headerName` (optional): What the user will see as the header name for a column. Type: string
- `chartDataType` (optional): Chart data type. - You must have at least one category and one series to be able to chart from the data. If you don't define this we assume any string value is a category and any number is a series. Allowed values: "category", "series", "time", "excluded"
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
- `aggFunc` (optional): Aggregation function for the column. Type: string
- `pinned` (optional): Pinned column. Allowed values: "left", "right"
- `chartView` (optional): If you want the table to be a chart by default (Using our AgGrid chart Types) Type: object
    - `enabled` (optional): Indicates if the chart view is the default view. Type: boolean
    - `chartType` (optional): Type of chart to display by default. Allowed values: "column", "groupedColumn", "stackedColumn", "normalizedColumn", "bar", "groupedBar", "stackedBar", "normalizedBar", "line", "scatter", "bubble", "pie", "donut", "doughnut", "area", "stackedArea", "normalizedArea", "histogram", "radarLine", "radarArea", "nightingale", "radialColumn", "radialBar", "sunburst", "rangeBar", "rangeArea", "boxPlot", "treemap", "heatmap", "waterfall"


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
`string` (optional)

Main widget type. Allowed values: `chart`, `table`, `note`, `custom`.

---

## `source`
`object` (optional)

Source for the widget. Where the data for the widget is coming from. (optional)

---

## `defaultViz`
`string` (optional)

Default visualization for the widget. Allowed values: `chart`, `table`. Default : `table`(optional)

---

## `dataKey`
`string` (optional)

Nested reference to the data. (optional)

---

## `category`
`string` (optional)


---

## `subCategory`
`string` (optional)

---
