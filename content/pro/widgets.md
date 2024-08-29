---
title: Widgets
sidebar_position: 21
description: The page contains detailed information about the interactive elements
  and functionalities of OpenBB Terminal Pro widgets. From grouping mechanisms to
  settings, these widgets offer an interactive dashboard experience for users to track
  and analyze their investments and data. The widgets support both raw data and chart
  interpretations for data visualization.
keywords:
- Widgets
- Upper Tab
- Interactive elements
- Additional information
- Symbol
- Group
- Staleness Indicator
- Chat with Widget
- Grouping Mechanism
- Settings
- Close
- Content
- Raw Data
- Charts
- Interactive dashboard
- Investment positions
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Widgets | OpenBB Terminal Pro Docs" />

import TutorialVideo from '@site/src/components/General/TutorialVideo.tsx';

<TutorialVideo
  youtubeLink="https://www.youtube.com/embed/_kg8bCTNM14?si=OLAa1ehCEm57SFjd"
  videoLegend="Short introduction to widgets"
/>

## Tables

<img width="800" alt="Widget-rev" src="https://github.com/user-attachments/assets/d44a279f-fb47-44f0-87de-add2b20cec7c" />

### Terminology

- **Title**: The title identifies the widget. Hovering on top shows the description and the source of where the data comes from.

<div style={{display: 'flex', justifyContent: 'center'}}>
    <img width="300" alt="hover on title" src="https://github.com/user-attachments/assets/7d1ea855-e77a-4eab-9330-b8a4d9e58bf5" />
</div>

- **Staleness Indicator**: When the user hovers on the indicator it shows how recent the data is: Green if updated within the last 30 seconds; Yellow if updated between 30 seconds and 5 minutes ago; Red oif updated over 5 minutes ago. If the user wants to get latest data for a particular widget all that is needed is clicking in the indicator icon to fetch/refresh the data.

<div style={{display: 'flex', justifyContent: 'center'}}>
    <img width="300" alt="staleness indicator" src="https://github.com/user-attachments/assets/ca21f129-5c3d-4c33-9997-338f1180677b" />
</div>

- **Symbol**: Some widgets are associated with a symbol. Changing this symbol updates the table content to reflect the new symbol.

<div style={{display: 'flex', justifyContent: 'center'}}>
    <img width="300" alt="click on symbol" src="https://github.com/user-attachments/assets/322668a5-1d6e-44df-9a8e-39cc51e49c41" />
</div>

- **Group**: If multiple widgets belong to the same group, updating the symbol in one will automatically update the symbol in the others. When you click on the group icon, you can set a new group for the current widget.

<div style={{display: 'flex', justifyContent: 'center'}}>
    <img width="300" alt="click on group" src="https://github.com/user-attachments/assets/4c8f5fcd-4e44-4e1a-9723-d98c64f8294c" />
</div>

When widgets are grouped, they share the same color and number in the group icon. You can see which dashboards have which groupings by looking at the text below the dashboard title in the sidebar.

<div style={{display: 'flex', justifyContent: 'center'}}>
    <img width="300" alt="check dashboard sidebar grouping" src="https://github.com/user-attachments/assets/22285fcf-46d5-42a1-a359-81670d43d356" />
</div>

Here's a short introduction to the grouping concept.

<TutorialVideo
  youtubeLink="https://www.youtube.com/embed/cOH8qjOBWTI?si=I_NLm7UP4vgNBjo4"
  videoLegend="Short introduction to grouping"
/>

### Manipulating data

<TutorialVideo
  youtubeLink="https://www.youtube.com/embed/g_cdzenT6ck?si=wbCHt-Y5lQACeM9o"
  videoLegend="Short introduction to tabular data"
/>

In the realm of investment research, financial data often comes in tabular form. This is because it's predominantly quantitative, and analysts and quants frequently need to delve into the raw data to make informed decisions. To enhance your navigation experience through this data, we've incorporated basic data manipulation capabilities.

- **Column Resizing**: You have the flexibility to manually adjust the width of the table columns. Alternatively, you can use the "Autosize all columns" feature for automatic resizing.

- **Column Reorganization**: Reorganize your columns effortlessly with our drag-and-drop feature. Simply click and hold the mouse on the column header and drag it to your desired position.

- **Column Filtering**: To reduce visual clutter, you can temporarily hide any columns that aren't currently relevant to your analysis. This can be done easily in the column settings.

- **Sorting**: By clicking on a column header, you can sort the data in ascending or descending order based on that column's values.

- **Transposing**: Our platform allows you to transpose tables, turning columns into rows and vice versa. This feature can be particularly useful for rendering time series from tabular data.

## Chart from raw data

In the world of investment research, data is king. But raw, tabular data can be overwhelming and difficult to interpret.
That's where charts come in. They transform complex data sets into visual narratives, making it easier to spot trends, compare variables, and make informed decisions.

With OpenBB Terminal Pro, you can create charts directly from your tabular data in two ways.

1. Simply select the data you want to visualize, choose your preferred charting style, and let the software do the rest. It's a powerful tool for quants and analysts alike.

2. If available pm the widget, you can click on the "ChartView" icon and we will generate a chart for you. The biggest advantage here is that the data will update automatically and be reflected in your chart.

<img className="pro-border-gradient" width="800" alt="selection-charting" src="https://openbb-assets.s3.amazonaws.com/docs/pro/selection-charting-1.png" />
- In this example we've highlighted some data and with a simple "right-click" you can pick a line chart.

<img className="pro-border-gradient" width="800" alt="chartview" src="https://openbb-assets.s3.amazonaws.com/docs/pro/chartview-setting.png" />
- In this example we're utilizing the "ChartView" highlighted in blue. This allows us to change the widget into a chart instead of a table.

<img className="pro-border-gradient" width="800" alt="example" src="https://openbb-assets.s3.amazonaws.com/docs/pro/combo-chart.png" />
- Finally we're customizing the chart to show a different way then a simple line.

## Charts

@TODO: Get a similar cheatsheet for charts like shared above for tables

### Customizing Charts

When a chart is created you can customize almost anything within it by clicking on the three dots and then Chart Settings.

<img className="pro-border-gradient" width="200" alt="example" src="https://openbb-assets.s3.amazonaws.com/docs/pro/chart-settings-small.png" />

Once you bring up the "Customize" tab on your chart, you'll have a tab like below to change anything from title to colors. In the other tabs you'll also be able
to change what series are shown on the chart in the "Set Up" tab and the chart type under the "Chart" tab. All of these customizations let you create beautiful visualizations.

<img className="pro-border-gradient" width="800" alt="example" src="https://openbb-assets.s3.amazonaws.com/docs/pro/customization.png" />

## Custom widgets

The OpenBB team has built custom widgets based on the type of data that they want to offer to users. These don't follow a standard table or chart format.

<img className="pro-border-gradient" width="800" alt="newswidget" src="https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/5ada7e7f-c619-46fb-850f-006c6e0d0cd2" />

### Charting

Our charting widget is powered by the renowned TradingView charting library, offering you a comprehensive and intuitive platform for financial analysis. With this feature, you can access all the functionalities typically available on TradingView. To get the most out of this feature, we recommend familiarizing yourself with TradingView's capabilities here: [TradingView](https://www.tradingview.com/charting-library-docs/latest/getting_started)

<img className="pro-border-gradient" width="800" alt="charting" src="https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/0012510b-fb13-4dd5-9aef-cd5600a5684f" />

Here's a quick rundown of what you can do with our charting feature:

- Adjust the time interval and timeline based on your preferred data vendor

- Utilize TradingView's robust suite of technical analysis indicators for in-depth market insights

- Access a variety of editing tools for annotations, line drawings, measurements, Fibonacci retracements, and more

- Overlay charts of other tickers of interest, whether they're in forex, crypto, equity, or macroeconomics

<img className="pro-border-gradient" width="800" alt="charting add" src="https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/b94fe659-9b53-48df-aa58-fb33e2a24f51" />

It also allows users to **Overlay Financials**:

When analyzing equity data, you'll notice the "Financial" text above the chart. This powerful tool allows you to overlay financial data (e.g., revenue, cost of goods, etc.) over time, providing a visual representation of how financials impact the equity price trajectory. It's a powerful way to understand the correlation between a company's financial performance and its stock price.

### Watchlist and grouping

The watchlist widget has a special property in relation to grouping. Since this widget doesn't have a single symbol but many, users can select the row of their ticker of interest, and widgets that are grouped with the watchlist will get updated accordingly.

<img className="pro-border-gradient" width="800" alt="watchlist" src="https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/d36380df-743a-4676-bec4-6bd34567e661" />

If a user selects a new ticker in another widget that is grouped with the watchlist, that ticker will be added to the watchlist and will become the one selected by default.

### News and ticker

When scrolling our news widgets, we allow you to quickly pull information for a company and create a dashboard to do more in depth research. Simply hover on the ticker and you will get a popup like below. Clicking on "Create dashboard for ..." will pull up our Equity or ETF Dashboard, allowing you to perform in depth research with just a few clicks.

<img className="pro-border-gradient" width="800" alt="news-hover" src="https://openbb-assets.s3.amazonaws.com/docs/pro/news-hover.png" />

@TODO: Think if there are other special widgets that are worth pointing out

## Analytics

OpenBB Terminal Pro allows you to run analytics on top of your data.

Currently we only support running latest TimeGEN-1 timeseries forecasting from Nixtla. This is supported by having users creating a line chart and clicking on the Nixtla icon on the top right corner which will trigger the forecast.

<img className="pro-border-gradient" width="800" alt="news-hover" src="https://openbb-assets.s3.amazonaws.com/docs/pro/nxtla-forecast.png" />

## Data Source

OpenBB's primary role is to aggregate and standardize financial data. So, we empower data vendors by showcasing their data through our products, providing them with an application where they are able to monetize their offerings to OpenBB users.

Each widget in OpenBB is powered by a specific data provider. In some instances, multiple data vendors may supply the same type of data. You are in control to choose the right data vendor based on factors such as data quality, availability, trustworthiness, and cost.

<img className="pro-border-gradient" width="800" alt="mgmt team settings" src="https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/d399331d-bfdb-40d3-8c99-595d97d1bf7b" />
