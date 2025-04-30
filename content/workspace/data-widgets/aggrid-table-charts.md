---
title: AgGrid Table Charts
sidebar_position: 13
description:  AgGrid Table Charts
keywords:
- asd
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title=" AgGrid Table Charts | OpenBB Workspace Docs" />


### Manipulating data

- **Column Resizing**: You have the flexibility to manually adjust the width of the table columns. Alternatively, you can use the "Autosize all columns" feature for automatic resizing.

- **Column Reorganization**: Reorganize your columns effortlessly with our drag-and-drop feature. Simply click and hold the mouse on the column header and drag it to your desired position.

- **Column Filtering**: To reduce visual clutter, you can temporarily hide any columns that aren't currently relevant to your analysis. This can be done easily in the column settings.

- **Sorting**: By clicking on a column header, you can sort the data in ascending or descending order based on that column's values.

### Dynamic Chart

By utilizing the button on the top right corner, users are able to have access to the data in a chart form. And that chart is updated based on the data being updated.

### Static Chart

With OpenBB Workspace, you can create charts directly from your tabular data in two ways.

1. Simply select the data you want to visualize, choose your preferred charting style, and let the software do the rest. It's a powerful tool for quants and analysts alike.

2. If available pm the widget, you can click on the "ChartView" icon and we will generate a chart for you. The biggest advantage here is that the data will update automatically and be reflected in your chart.

<div style={{display: 'flex', justifyContent: 'center'}}>
<img className="pro-border-gradient" width="800" alt="selection-charting" src="https://openbb-assets.s3.amazonaws.com/docs/pro/selection-charting-1.png" />
</div>

- In this example we've highlighted some data and with a simple "right-click" you can pick a line chart.

<div style={{display: 'flex', justifyContent: 'center'}}>
<img className="pro-border-gradient" width="800" alt="chartview" src="https://openbb-assets.s3.amazonaws.com/docs/pro/chartview-setting.png" />
</div>

- In this example we're utilizing the "ChartView" highlighted in blue. This allows us to change the widget into a chart instead of a table.

<div style={{display: 'flex', justifyContent: 'center'}}>
<img className="pro-border-gradient" width="800" alt="example" src="https://openbb-assets.s3.amazonaws.com/docs/pro/combo-chart.png" />
</div>

- Finally we're customizing the chart to show a different way then a simple line.

## OpenBB Core Widgets

### Table

The Table widget was highlighted previously, in the Widget Structure section.

### Chart

@TODO get a similar cheatsheet for charts like shared above for tables

When a chart is created you can customize almost anything within it by clicking on the three dots and then Chart Settings.

<div style={{display: 'flex', justifyContent: 'center'}}>
<img className="pro-border-gradient" width="200" alt="example" src="https://openbb-assets.s3.amazonaws.com/docs/pro/chart-settings-small.png" />
</div>

Once you bring up the "Customize" tab on your chart, you'll have a tab like below to change anything from title to colors. In the other tabs you'll also be able
to change what series are shown on the chart in the "Set Up" tab and the chart type under the "Chart" tab. All of these customizations let you create beautiful visualizations.

<div style={{display: 'flex', justifyContent: 'center'}}>
<img className="pro-border-gradient" width="800" alt="example" src="https://openbb-assets.s3.amazonaws.com/docs/pro/customization.png" />
</div>



:::note
Guidelines for JSON Format in Tables:

- The JSON data for tables should be in a flat structure, meaning that there should be no nested dictionaries or arrays within the individual objects unless you specify the dataKey in your `widgets.json` file.
- Each object should contain key-value pairs where the values are simple data types (e.g., strings, numbers, booleans).
- Avoid nesting other objects or arrays inside any of the values.

The JSON should resemble the following structure:

<details>
<summary mdxType="summary">Example JSON</summary>

```json
[
      {
        "ticker": "AAPL",
        "name": "Apple Inc.",
        "price": 150.5,
        "marketCap": 2500000000,
        "change": 1.25
      },
      {
        "ticker": "GOOGL",
        "name": "Alphabet Inc.",
        "price": 2800.75,
        "marketCap": 1900000000,
        "change": -0.75
      },
      {
        "ticker": "MSFT",
        "name": "Microsoft Corporation",
        "price": 300.25,
        "marketCap": 220000000,
        "change": 0.98
      }
]
```

</details>

:::