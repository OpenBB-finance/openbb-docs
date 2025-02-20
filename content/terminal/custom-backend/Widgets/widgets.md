---
title: Widgets
sidebar_position: 4
description: OpenBB Terminal Pro supports various ways to visualize data through widgets. Each method offers unique features and can be configured to suit different data presentation needs.
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

# Widget Types

OpenBB Terminal Pro supports various ways to visualize data through widgets. Each method offers unique features and can be configured to suit different data presentation needs. Below are the different visualization methods available:

1. **Table Widget**:
   - Provides a structured view of data in rows and columns.
   - Ideal for displaying detailed datasets.
   - Can be configured to display charts with Native Charting.
   - [Create your own Table Widget](Widgets/table)

<img className="pro-border-gradient" width="600" alt="table" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/simple-table.png" />


2. **Chart Widgets**:
   - Offers graphical representation of data.
   - Supports Plotly charts and can be configured to display different types of charts. Support for more charting frameworks will be coming soon.
   - [Create your own Chart Widget](Widgets/chart)

<img className="pro-border-gradient" width="600" alt="chart" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/plotly-chart.png" />

3. **Markdown Widget**:
   - Displays formatted text and images.
   - Can be used to display markdown, txt, and docx files.
   - [Create your own Markdown Widget](markdown.md)

<img className="pro-border-gradient" width="600" alt="markdown" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/markdown-widget.png" />

4. **Metric Widget**:
   - Displays a single value or metric.
   - Useful for highlighting key performance indicators.
   - [Create your own Metric Widget](metric.md)

<img className="pro-border-gradient" width="600" alt="metric" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/metric-widget.png" />

5. **PDF Viewer Widget**:
   - Displays a PDF file.
   - [Create your own PDF Viewer Widget](pdf.md)

<img className="pro-border-gradient" width="600" alt="pdf" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/pdf-widget.png" />

6. **Live Grid Widget**:
   - Display updates in real-time on your table.
   - [Create your own Live Grid Widget](live_grid.md)

<img className="pro-border-gradient" width="600" alt="live-feed" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/live_grid.png" />
