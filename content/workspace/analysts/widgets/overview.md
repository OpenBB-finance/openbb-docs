---
title: Overview
sidebar_position: 1
description: Understanding widgets - the building blocks of OpenBB Workspace dashboards that transform raw data into actionable insights.
keywords:
- widgets
- data visualization
- dashboard components
- financial widgets
- widget metadata
- widget parameters
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Widgets Overview | OpenBB Workspace Docs" />

# Widgets Overview

Widgets are the fundamental building blocks of OpenBB Workspace, transforming raw financial data into interactive, visual components that drive your analysis. Each widget is a self-contained unit that combines data, visualization, and interactivity into a powerful analytical tool.

## What is a Widget?

A widget is more than just a chart or table – it's an intelligent data container that knows how to fetch, process, and display information relevant to your analysis. Think of widgets as specialized financial instruments, each designed to answer specific questions about markets, portfolios, or economic conditions.

<img width="800" alt="Widget Metadata Structure and Components" src="https://openbb-cms.directus.app/assets/132e5cda-b062-4094-8036-8c2d41db1527.png" />

## Anatomy of a Widget

Every widget in OpenBB Workspace consists of four essential components that work together seamlessly:

### 1. Data Source
The foundation of every widget – where the information comes from. This could be: Real-time market data feeds, Historical price databases, Company fundamental data, Economic indicators, Custom data from your organization, Static files you've uploaded and more.

### 2. Metadata Layer
The intelligence that makes widgets discoverable and usable:
- **Title**: Clear identification of what the widget shows
- **Description**: Context about the data and its purpose
- **Category**: Logical grouping (e.g., Equity, Fixed Income, Macro)
- **Sub-category**: Further classification for easy navigation
- **Source**: Attribution and data provenance

### 3. Visual Presentation
How the data comes to life on your dashboard:
- **Tables**: For detailed, sortable data exploration
- **Charts**: For trend analysis and pattern recognition
- **PDFs**: For reports and static documents
- **Feeds**: For real-time streaming information
- **Custom Views**: Tailored to specific data types

### 4. Parameters

Interactive elements that customize what data your widget displays. Input parameters allow you to focus your analysis by setting date ranges, selecting specific tickers, or applying filters that narrow down the dataset to exactly what you need. These parameters transform generic widgets into personalized analytical tools tailored to your specific research questions.

Linked parameters create powerful synchronization across multiple widgets on your dashboard. When you change a ticker symbol or date range in one widget, all widgets sharing that parameter update automatically, maintaining consistency across your entire analytical workspace. This creates a cohesive experience where your dashboard responds intelligently to your focus areas.

### 5. Controls

Controls are highly specific to each widget type, providing specialized functionality that matches the data and visualization format. These widget-specific controls give you powerful ways to interact with and manipulate your data directly within each widget.

Table widgets powered by AgGrid offer advanced data manipulation capabilities including column sorting, filtering, and grouping functions that let you slice and dice your data without leaving the widget. You can create custom filters, sort by multiple columns, and group data by categories to uncover patterns and insights within large datasets.

Chart widgets, particularly those using TradingView integration, provide sophisticated analytical tools including technical indicator overlays, and timeframe adjustments. Plotly charts allow to render any figure that is supported by Plotly.

Universal controls available across most widget types include refresh settings for managing data update frequency, export options for saving data in formats like CSV, JSON, and Excel, and view toggles that let you switch between visual representations and raw data tables.

Table widgets also generate Excel Add-in formulas automatically, allowing you to pull the same data directly into spreadsheets for hybrid analysis workflows.

## How Widgets Work

Widgets operate on a simple yet powerful principle: they connect to data sources, apply your configurations, and render the results in real-time. Here's their data flow:

1. **Request**: Widget sends a query with your parameters
2. **Processing**: Backend systems fetch and prepare the data
3. **Delivery**: Formatted data returns to the widget (via `widgets.json`)
4. **Rendering**: Widget displays the information visually
5. **Interaction**: You can interact with the data in the widget

Beyond this data flow, widgets exhibit two powerful capabilities that transform them from simple displays into intelligent analytical tools.

**Parameter linking** creates seamless coordination across your dashboard. When widgets share parameter names, changing a ticker symbol or date range in one widget automatically updates all linked widgets, ensuring your entire analysis remains synchronized and focused on the same context without manual intervention.

**AI-readable metadata** enables intelligent automation through rich widget metadata that AI agents can interpret and act upon. Unlike simple screen scraping, AI agents understand the underlying data source, parameter structure, and query methods for each widget. This deep understanding allows agents to dynamically request data with different parameters to answer your specific questions, accessing the full dataset behind each widget rather than just the currently displayed information.

## Your Widget Library

OpenBB Workspace enables you to build a comprehensive widget library containing thousands of different data widgets, all easily accessible and intelligently categorized for efficient analysis. This library becomes your personal data universe, where every piece of financial information you need is just a search away.

The beauty of the widget library lies in its organization and accessibility. Whether you're analyzing portfolios, tracking macro trends, researching equities, or monitoring alternative investments, your widgets are categorized in ways that match your analytical thinking. Need to analyze a specific stock? Search for equity widgets and instantly access price data, fundamentals, options chains, and analyst estimates. Working on portfolio analysis? Find all your position tracking, performance attribution, and risk widgets grouped together.

This approach transforms data consumption from a tedious search process into an intuitive discovery experience. Instead of remembering complex data sources or navigating multiple platforms, you simply search your widget library and add the exact data visualization you need to your dashboard. The categorization system grows with your needs, accommodating new data sources and custom integrations while maintaining the logical organization that makes thousands of widgets manageable and useful.
