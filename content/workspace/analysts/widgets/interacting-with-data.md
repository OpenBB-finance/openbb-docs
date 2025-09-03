---
title: Interacting With Data
sidebar_position: 3
description: Learn how to work with tables and charts in OpenBB Workspace, including parameter selection and synchronization across widgets.
keywords:
- data interaction
- table widgets
- chart widgets
- parameter linking
- AgGrid
- Plotly
- TradingView
- data visualization
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Interacting With Data | OpenBB Workspace Docs" />

# Interacting With Data

OpenBB Workspace provides powerful tools for analysts to explore and visualize financial data through interactive tables and charts.

## Working With Parameters

Parameters are the foundation of interactive analysis in OpenBB Workspace, allowing you to customize what data your widgets display.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img
    className="pro-border-gradient"
    alt="Parameter selection interface"
    src="https://openbb-web-assets.s3.us-east-1.amazonaws.com/docs/screenshots/parameters.jpg"
    width="800"
  />
</div>

Input parameters let you focus your analysis by setting date ranges, selecting specific tickers, or applying filters that narrow down the dataset to exactly what you need.

### Grouping Widgets Through Parameter Linking

A powerful feature of parameters is their ability to be linked across multiple widgets. When widgets share parameter names and options, changing a value in one widget automatically updates all linked widgets, creating a cohesive analytical experience.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img
    className="pro-border-gradient"
    alt="Parameter linking across widgets"
    src="https://openbb-web-assets.s3.us-east-1.amazonaws.com/docs/screenshots/parameter-grouping.jpg"
    width="800"
  />
</div>

For example, when you change a ticker symbol or date range in one widget, all widgets in the same group that use that parameter will update automatically. This synchronization ensures your entire analysis remains focused on the same context without manual intervention.

This capability transforms your dashboard from a collection of isolated visualizations into an intelligent, responsive workspace where your analytical focus drives all data presentation.

## Interactive Tables

Interactive tables provide powerful data manipulation capabilities for detailed financial analysis. These tables have professional-grade features that allow you to explore and analyze large datasets.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img
    className="pro-border-gradient"
    alt="selection-charting"
    src="https://openbb-assets.s3.amazonaws.com/docs/pro/selection-charting-1.png"
    width="900"
  />
</div>

### Key Features

- **Column Management**: Resize and reorder to focus on relevant data
- **Sorting and filtering**: Click column headers to sort and filter data
- **Data Selection**: Select specific data points or ranges to generate visualizations
- **Sparklines**: Visualize trends directly within table cells using line, area, and bar sparklines
- **Hover Cards**: Access additional context and detailed information on specific data points
- **Chart-view Mode**: Transform the entire table into a dynamic chart with a single click

### Table to Chart Conversion

The widget interface supports conversion between table and chart views, enabling you to switch between detailed data exploration and visual trend analysis as needed.

1. **Selection-based Charting**: Select desired data points, choose a chart type, and generate visualizations instantly
2. **Chart-view Mode**: Access the "Chart-view" icon to transform the entire table into a dynamic chart

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img
    className="pro-border-gradient"
    alt="chartview"
    src="https://openbb-assets.s3.amazonaws.com/docs/pro/chartview-setting.png"
    width="900"
  />
</div>

### Chart Customization

You can change the chart settings by clicking on the three dots and then the `Chart Settings` in the dropdown menu.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img
    className="pro-border-gradient"
    alt="chart"
    src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/chart+settings.png"
    width="400"
  />
</div>

Here you can change the chart type, the chart settings, and some other settings in each tab.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img
    className="pro-border-gradient"
    alt="chart"
    src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/chart+settings+2.png"
    width="400"
  />
</div>

The customization interface provides three main configuration areas:

- **Visual Customization**: Modify chart appearance, including titles, colors, and styling elements.
- **Data Series Management**: Control the visibility and configuration of data series.
- **Chart Type Selection**: Choose from various chart types to best represent your data.

Example of a customized chart with multiple visualization types:

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img
    className="pro-border-gradient"
    alt="Customized chart example"
    src="https://openbb-assets.s3.amazonaws.com/docs/pro/combo-chart.png"
    width="800"
  />
</div>

The final example demonstrates how to combine different chart types for enhanced data visualization.

## Plotly Charts

Plotly charts give your developers complete freedom to create the right visualization for your data, whether you need a simple line chart or a complex 3D plot. The integration is straightforward, with charts automatically adapting to your workspace theme in both light and dark modes.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img
    className="pro-border-gradient"
    alt="Plotly Chart with Raw Data Switch"
    src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/plotly+switch.png"
    width="900"
  />
</div>

As a user you will find everything you need for in-depth analysis: interactive toolbars with drawing tools and annotations.

### Raw Data Toggle

The raw data toggle is particularly useful for AI-assisted analysis. With a simple switch in the top-right corner, you can move between the visual representation and the underlying dataset. This gives the AI copilot direct access to the numbers behind the chart while keeping your dashboard clean and focused on insights.

## TradingView Charts

TradingView charts bring professional trading visualization tools directly into your workspace, using the same interface that traders around the world rely on for their analysis.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img
    className="pro-border-gradient"
    alt="TradingView Chart Example"
    src="https://openbb-cms.directus.app/assets/1e1dff4c-8698-4a82-9863-31e911e7cf3b.png"
    width="900"
  />
</div>

You get the full TradingView experience: real-time and historical market data, technical indicators, and all the drawing tools you need for your analysis. Whether you're drawing trend lines, applying Fibonacci retracement levels, or highlighting chart patterns, everything works just like it does in the native TradingView platform. The ability to switch between timeframes makes it easy to zoom in on short-term movements or step back for a broader market view.
