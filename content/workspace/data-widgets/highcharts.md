---
title: Highcharts Chart
sidebar_position: 18
description: Learn how to create Highcharts widgets for OpenBB Workspace, with step-by-step instructions for backend integration, configuration, and theme support.
keywords:
- widgets.json
- OpenBB API
- Endpoint integration
- widget configuration
- Highcharts
- Chart widgets
- API implementation
- Python
- FastAPI
- Workspace widgets
- Widget definitions
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Highcharts Chart | OpenBB Workspace Docs" />

This guide will walk you through the process of creating a chart widget for OpenBB Workspace using Highcharts. By the end of this guide, you will have a working Highcharts widget that you can add to OpenBB.

## Step 1: Set Up Your Project

To get started, create the main application file and the widget configuration file. You will only need these two files:

- `main.py`: This file will contain your FastAPI application code.
- `widgets.json`: This file will define the configuration for your widget.

The backend will use the same FastAPI setup and structure as described in the [Overview](/workspace/data-integration#1-create-the-api-server) page.

## Step 2: Create the Chart Endpoint

Edit the `main.py` file and add the following code. This code sets up a FastAPI application with an endpoint to serve the widget configuration and data for a Highcharts chart:

```python
from pathlib import Path
import json
import pandas as pd
import requests
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from highcharts_core.chart import Chart

app = FastAPI()

# Configure CORS
origins = [
    "https://pro.openbb.co",
    "https://excel.openbb.co"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/widgets.json")
def get_widgets():
    """Widgets configuration file for the OpenBB Data Integration"""
    return JSONResponse(
        content=json.load((Path(__file__).parent.resolve() / "widgets.json").open())
    )

# Highcharts chart endpoint
@app.get("/chains-highchart")
def get_chains_highchart(theme: str = "dark"):
    """Get current TVL of all chains using Defi Llama"""
    response = requests.get("https://api.llama.fi/v2/chains")

    if response.status_code == 200:
        df = pd.DataFrame(response.json())

        top_30_df = df.sort_values(by='tvl', ascending=False).head(30)

        # Format TVL values to be more readable (in billions)
        top_30_df['formatted_tvl'] = top_30_df['tvl'].apply(lambda x: round(x / 1e9, 2))

        categories = top_30_df['name'].tolist()
        data = top_30_df['formatted_tvl'].tolist()

        # Configure chart options with theme support
        chart_options = {
            'chart': {
                'type': 'column',
                'height': "50%",
                'backgroundColor': 'transparent'
            },
            'title': {'text': 'Top 30 Chains by TVL'},
            'xAxis': {
                'categories': categories,
                'title': {'text': 'Chain Name'},
                'labels': {
                    'style': {
                        'color': '#ffffff' if theme == 'dark' else '#000000'
                    }
                }
            },
            'yAxis': {
                'title': {'text': 'Total Value Locked (TVL in billions $)'},
                'labels': {
                    'style': {
                        'color': '#ffffff' if theme == 'dark' else '#000000'
                    }
                }
            },
            'tooltip': {
                'pointFormat': '<b>${point.y:.2f}B</b>'
            },
            'series': [{
                'name': 'Chain',
                'data': data
            }]
        }

        # Apply theme-specific styling
        if theme == 'dark':
            chart_options.update({
                'title': {'style': {'color': '#ffffff'}},
                'legend': {'itemStyle': {'color': '#ffffff'}},
                'plotOptions': {
                    'series': {
                        'color': '#3498db'
                    }
                }
            })

        chart = Chart.from_options(chart_options)

        return chart.to_dict()

    print(f"Request error {response.status_code}: {response.text}")
    return JSONResponse(
        content={"error": response.text}, status_code=response.status_code
    )
```

For Highcharts integration, we're using the `highcharts_core` Python package to create and configure the chart. The chart is then converted to a dictionary using `chart.to_dict()` before being returned to the frontend.

## Step 3: Edit the widgets.json File

Edit the `widgets.json` file and add the following JSON data. This configuration defines the widget's properties and how it should be displayed:

```json
{
  "chains_highchart": {
    "name": "Chains chart example Highcharts",
    "description": "Get current TVL of all chains and plot it with Highcharts",
    "category": "crypto",
    "type": "chart-highcharts",
    "endpoint": "chains-highchart",
    "gridData": {
      "w": 20,
      "h": 9
    }
  }
}
```

Note that for Highcharts, the `type` field is set to `"chart-highcharts"` instead of just `"chart"` which is used for Plotly charts.

For more information on the `widgets.json` file, see the [Widgets.json](../widgets-json-reference) page.

## Step 4: Run the Application

Start the FastAPI Server using Uvicorn. This will host your backend locally:

```bash
uvicorn main:app --port 5050
```

## Step 5: Add to OpenBB Pro

Navigate to [OpenBB Pro Apps](https://pro.openbb.co/app) and add your backend by clicking on the `Manage Backends` button in the top right corner. Select `Add Backend` and fill in the details. Your URL will be `http://localhost:5050`.

Once you have added your backend, you can find the widget in the `Crypto` category with the name `Chains chart example Highchart`.

<img className="pro-border-gradient" width="600" alt="highcharts-chart" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/highcharts.png" />

### Theme Support

The example doesn't include theme support, but you can easily add it by adapting the endpoint to include the `theme` parameter.

## Additional Resources

You can find more examples of how to set up your own backend in the [Backend for OpenBB Workspace GitHub](https://github.com/OpenBB-finance/backend-examples-for-openbb-workspace).

For more information on Highcharts configuration options, visit the [Highcharts API Documentation](https://api.highcharts.com/highcharts/).
