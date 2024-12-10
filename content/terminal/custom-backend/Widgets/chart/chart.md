---
title: Charting
sidebar_position: 2
description: Learn how to integrate your own backend with OpenBB Terminal Pro using the cookie-cutter or language-agnostic API approaches, with illustrative guides and principles for handling widget.json files, APIs, interfaces, Python, FastAPI, and more.
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

# Introduction

Currently, OpenBB Terminal Pro supports two types of charts for the custom backends. Check out the examples below to see how to create them.

- [Native charts](/content/terminal/custom-backend/Widgets/chart/native.md)

The simplest way to create a chart widget is by using the native charting. This allows you to create a chart widget with ease from any table widget with minimal effort.

<img className="pro-border-gradient" width="600" alt="chart" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/native+chart.png" />

- [Plotly charts](/content/terminal/custom-backend/Widgets/chart/plotly.md)

Plotly charts are more customizable and allow you to create more advanced charts.

<img className="pro-border-gradient" width="600" alt="chart" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/plotly-chart.png" />


We will be adding support for more chart types in the future.
