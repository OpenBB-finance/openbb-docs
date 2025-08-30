---
title: Custom Widgets
sidebar_position: 3
description: Explore the diverse types of custom widgets available in OpenBB Workspace - from interactive tables to advanced charts and document viewers.
keywords:
- custom widgets
- widget types
- table widgets
- chart widgets
- PDF widgets
- feed widgets
- metric widgets
- markdown widgets
- data visualization
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Custom Widgets | OpenBB Workspace Docs" />

# Custom Widgets

Beyond the core widgets that provide foundational functionality, OpenBB Workspace offers a rich ecosystem of custom widgets designed for specialized financial analysis. Each widget type is optimized for specific data characteristics and analytical needs.

## Markdown

Markdown widgets enable rich text content and documentation integration within your analytical workspace. Perfect for creating dynamic reports that combine formatted text with live data integration.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="800" alt="markdown" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/markdown-widget.png" />
</div>

**Benefits:**

- Create comprehensive analysis reports with formatted text, headers, and structured content
- Embed images directly in your documentation (both local files and web-based images)
- Generate dynamic content that updates with live data from APIs
- Document methodologies and analysis approaches within your dashboard
- Build standardized reporting templates with consistent formatting

## Metric

Metric widgets display key performance indicators and statistics with clear visual emphasis on trends and changes. Essential for tracking critical numbers at a glance.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="900" alt="Metric Widget Example" src="https://openbb-cms.directus.app/assets/ba37bbbb-371a-40e8-a7e1-e48edcc6c0c8.png" />
</div>

**Benefits:**

- Monitor essential KPIs with clean, focused displays showing label, value, and change indicators
- Track performance metrics with automatic color-coding for positive and negative trends
- Create executive dashboard summaries with multiple metrics in compact layouts
- Display portfolio performance, risk metrics, and trading statistics efficiently
- Support for custom units and formatting to match your analytical requirements

## File Viewer

File viewer widgets bring external documents and reports directly into your analytical workspace, enabling seamless integration of static content with live data analysis.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="800" alt="multi-file-viewer" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/multi-file-viewer.png" />
</div>

### Adding documents to context

You are able to select all documents from this multi-file viewer to be added to the context of your AI agent. Or do an individual selection.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="800" alt="Multi PDF Viewer with Base64 Example" src="https://openbb-cms.directus.app/assets/610ec2bc-2768-4d48-9f0b-0ad08a69b41e.png" />
</div>

**Benefits:**

- Access research reports, regulatory filings, and company presentations without leaving your dashboard
- Compare multiple documents side by side for comprehensive analysis
- Navigate large documents with built-in page controls and search functionality
- Integrate both local files and cloud-hosted documents through URL references
- Maintain document formatting and quality for professional presentation

## AgGrid Table Charts

Advanced table widgets powered by AgGrid that provide comprehensive data manipulation capabilities for detailed analytical workflows.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="900" alt="selection-charting" src="https://openbb-assets.s3.amazonaws.com/docs/pro/selection-charting-1.png" />
</div>

### Table Interface

The AgGrid table widget offers comprehensive data manipulation and visualization capabilities:

- **Column Resizing**: Adjust column widths manually or use the "Autosize all columns" feature for automatic optimization
- **Column Reorganization**: Drag-and-drop functionality to reorder columns - click and hold any column header to reposition it
- **Column Filtering**: Toggle column visibility through column settings to focus on relevant data for your analysis
- **Sorting**: Click column headers to sort data in ascending or descending order
- **Data Selection**: Select specific data points or ranges to generate visualizations
- **Sparklines**: Visualize trends directly within table cells with line, area, and bar sparklines
- **Hover Cards**: Access additional context and detailed information on specific data points

### Table to Chart Conversion

The widget supports seamless conversion between table and chart views:

1. **Selection-based Charting**: Select desired data points, choose a chart type, and generate visualizations instantly
2. **ChartView Mode**: Access the "ChartView" icon to transform the entire table into a dynamic chart

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="900" alt="chartview" src="https://openbb-assets.s3.amazonaws.com/docs/pro/chartview-setting.png" />
</div>

### Chart Customization

You can change the chart settings by clicking on the three dots and then the `Chart Settings` in the dropdown menu.

<img className="pro-border-gradient" width="400" alt="chart" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/chart+settings.png" />

Here you can change the chart type, the chart settings, and some other settings in each tab.

<img className="pro-border-gradient" width="400" alt="chart" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/chart+settings+2.png" />

The customization interface provides three main configuration areas:

- **Visual Customization**: Modify chart appearance, including titles, colors, and styling elements.
- **Data Series Management**: Control the visibility and configuration of data series.
- **Chart Type Selection**: Choose from various chart types to best represent your data.

Example of a customized chart with multiple visualization types:

<div style={{display: 'flex', justifyContent: 'center'}}>
<img className="pro-border-gradient" width="800" alt="example" src="https://openbb-assets.s3.amazonaws.com/docs/pro/combo-chart.png" />
</div>

The final example demonstrates how to combine different chart types for enhanced data visualization.
## SSRM Mode

Server-Side Rendered Mode enables efficient analysis of massive datasets that would otherwise overwhelm traditional table widgets. Designed for enterprise-scale data exploration.

**Benefits:**

- Analyze datasets with hundreds of thousands or millions of rows without performance degradation
- Use real-time filtering and sorting on massive datasets with instant response times
- Reduce memory usage and maintain fast dashboard performance even with complex data
- Access enterprise databases directly through optimized query engines
- Maintain full analytical capabilities regardless of dataset size

## Plotly Charts

Plotly charts provide unlimited flexibility for creating any type of interactive visualization, from simple line charts to complex 3D plots and heatmaps.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="900" alt="Plotly Chart with Raw Data Switch" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/plotly+switch.png" />
</div>

**Benefits:**

- Create any visualization type supported by Plotly including heatmaps, 3D plots, scatter plots, and statistical charts
- Benefit from automatic theme adaptation that matches your workspace appearance in both light and dark modes
- Use interactive toolbars with drawing tools, annotation capabilities, and advanced analytical features
- Build complex multi-axis charts for comparing different data series and relationships

### Raw Data Toggle

Plotly charts include a powerful raw data feature that enhances AI integration:

- Toggle between chart visualization and raw data view using the switch in the top-right corner
- Enable AI copilot to better understand and analyze the underlying data
- Access both visual insights and raw datasets within the same widget
- Maintain data accessibility for AI-driven analysis while preserving visual presentation

## TradingView Charts

TradingView charts deliver professional-grade trading visualization with the same interface trusted by millions of traders worldwide.

**Benefits:**

- Access the complete TradingView interface with professional technical indicators and drawing tools
- Analyze real-time and historical market data with industry-standard charting capabilities
- Use advanced technical analysis tools including trend lines, Fibonacci retracements, and pattern recognition
- Switch between multiple timeframes seamlessly for comprehensive market analysis
- Leverage the same visualization platform used by professional traders and institutional analysts

## Live Grid

Live grid widgets display real-time streaming data in table format, perfect for monitoring live market conditions and tracking dynamic information.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="800" alt="live-feed" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/live_grid.png" />
</div>

**Benefits:**

- Monitor live market data with real-time updates that highlight changing values
- Track multiple securities simultaneously with automatic refresh and change visualization
- Configure which data points update in real-time to focus on critical metrics
- Use color-coded change indicators to quickly identify market movements
- Maintain awareness of live market conditions while conducting other analysis

## Newsfeed

Newsfeed widgets aggregate breaking news and market information directly within your analytical workspace, keeping you informed of market-moving events.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="800" alt="newsfeed" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/newsfeed.png" />
</div>

**Benefits:**

- Stay informed with curated financial news from multiple sources without leaving your analysis
- Access article previews and full-text content for comprehensive market intelligence
- Filter and categorize news feeds to focus on relevant sectors or topics
- Maintain historical news access for retrospective analysis and event correlation
- Integrate breaking news awareness directly into your analytical workflow

## Highcharts

Highcharts provides enterprise-grade charting optimized for performance and professional presentation, ideal for client-facing analysis and reports.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="800" alt="highcharts-chart" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/highcharts.png" />
</div>

**Benefits:**

- Create professional-quality charts suitable for client presentations and executive reports
- Handle large datasets efficiently without compromising visualization quality or performance
- Access extensive chart type library with enterprise features and customization options
- Benefit from advanced accessibility features that ensure compliance with organizational standards
- Use sophisticated animation and interaction capabilities for engaging presentations

## Omni

Omni widgets provide ultimate flexibility by dynamically returning different content types based on your input parameters, making them ideal for AI-driven analysis and adaptive workflows.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="800" alt="Omni Widget Example" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/omni-widget.png" />
</div>

**Benefits:**

- Receive different visualizations (text, tables, or charts) based on your specific analytical needs
- Integrate seamlessly with AI agents through built-in prompt handling and citation support
- Track data sources and methodology through comprehensive citation management
- Access flexible parameter handling for complex analytical workflows
- Use single widgets that adapt their output format based on the type of analysis required