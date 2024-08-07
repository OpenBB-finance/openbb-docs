# Widget JSON Schema Documentation

## Overview
This document outlines the structure of the JSON schema for widgets.

## Definitions

### ChartType
- **Type**: `string`
- **Enum**: `"column"`, `"groupedColumn"`, `"stackedColumn"`, `"normalizedColumn"`, `"bar"`, `"groupedBar"`, `"stackedBar"`, `"normalizedBar"`, `"line"`, `"scatter"`, `"bubble"`, `"pie"`, `"donut"`, `"doughnut"`, `"area"`, `"stackedArea"`, `"normalizedArea"`, `"histogram"`, `"radarLine"`, `"radarArea"`, `"nightingale"`, `"radialColumn"`, `"radialBar"`, `"sunburst"`, `"rangeBar"`, `"rangeArea"`, `"boxPlot"`, `"treemap"`, `"heatmap"`, `"waterfall"`
- **Default**: `"line"`

### Storage
- **Type**: `object`
- **Additional Properties**: `true`

### Table
- **Type**: `object`
- **Properties**:
  - **chartView**:
    - **Type**: `object`
    - **Properties**:
      - `enabled`: **Type**: `boolean`, **Default**: `false`
      - `chartType`: **Type**: `string`, **Ref**: `ChartType`
    - **Default**: `{ "enabled": false, "chartType": "line" }`
  - **colDefs**:
    - **Type**: `array`
    - **Items**:
      - **Type**: `object`
      - **Properties**:
        - `field`: **Type**: `string`
        - `headerName`: **Type**: `string`
        - `chartDataType`: **Type**: `string`, **Enum**: `"category"`, `"series"`, `"time"`, `"excluded"`
        - `cellDataType`: **Type**: `string`, **Enum**: `"text"`, `"number"`, `"boolean"`, `"date"`, `"dateString"`, `"object"`
        - `formatterFn`: **Type**: `string`, **Enum**: `"int"`, `"none"`, `"percent"`, `"normalized"`, `"normalizedPercent"`, `"dateToYear"`
        - `renderFn`: **Type**: `string`, **Enum**: `"greenRed"`, `"titleCase"`
        - `width`: **Type**: `number`
        - `maxWidth`: **Type**: `number`
        - `minWidth`: **Type**: `number`
        - `hide`: **Type**: `boolean`
        - `rowGroup`: **Type**: `boolean`
        - `aggFunc`: **Type**: `string`
      - **Required**: `field`, `headerName`

### Data
- **Type**: `object`
- **Properties**:
  - `table`: **Ref**: `Table`
- **Required**: `table`

### ParamDef
- **Type**: `object`
- **Properties**:
  - `name`: **Type**: `string`, **MinLength**: `1`
  - `label`: **Type**: `string`
  - `default`: Any
  - `type`: **Type**: `string`, **Enum**: `"text"`, `"date"`, `"ticker"`, **Default**: `"text"`
  - `optional`: **Type**: `boolean`
  - `options`:
    - **Type**: `array`
    - **Items**:
      - **Type**: `object`
      - **Properties**:
        - `label`: **Type**: `string`
        - `value`: **Type**: `string`, `number`
      - **Required**: `label`, `value`
- **Required**: `name`

### Widget
- **Type**: `object`
- **Properties**:
  - `id`: **Type**: `string`
  - `name`: **Type**: `string`
  - `params`:
    - **Type**: `array`
    - **Items**: **Ref**: `ParamDef`
- **Required**: `id`, `widgetId`

## Main Schema

### connectionType
- **Type**: `string`
- **Enum**: `"single"`, `"advanced-backend"`, `"file"`, `"database"`, `"snowflake"`

### endpoint
- **Type**: `object`
- **Properties**:
  - `url`: **Type**: `string`
  - `method`: **Type**: `string`, **Enum**: `"GET"`, `"POST"`
  - `headers`:
    - **Type**: `object`
    - **Additional Properties**: **Type**: `string`
  - `query`:
    - **Type**: `object`
    - **Additional Properties**: **Type**: `string`
- **Required**: `url`, `method`

### source
- **Type**: `oneOf`
  - **Array**: **Type**: `array`, **Items**: **Type**: `string`
  - **String**: **Type**: `string`

### data
- **Type**: **Ref**: `Data`

### description
- **Type**: `string`

### type
- **Type**: `string`
- **Enum**: `"chart"`, `"table"`

### sourceDatabase
- **Type**: `string`

## Required Fields
- `id`
- `widgetId`
- `endpoint`
- `data`
