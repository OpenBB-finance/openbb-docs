---
title: Apps
sidebar_position: 30
description: Create and customize your own OpenBB Apps for optimized workflows
keywords:
- OpenBB Apps
- Custom Apps
- Workflow Optimization
- Dashboard Templates
- AI Agents
- Data Integration
- Custom Solutions
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Apps | OpenBB Workspace Docs" />

OpenBB Apps are powerful, customizable solutions that combine data widgets, prompts and AI agents to create optimized workflows for your specific needs.

<img width="800" alt="OpenBB Workspace Multiple Applications View" src="https://openbb-cms.directus.app/assets/2fc9097e-0941-49df-8d83-7d6b5a87bb45.png" />

Built on the principle that there's no one-size-fits-all approach to financial analysis, Apps empower you to own your workflows end-to-end.

## What are OpenBB Apps?

OpenBB Apps are comprehensive solutions that combine:

- **Data Integration**: Seamless connection with your data sources
- **Custom Dashboards**: Pre-configured layouts with specialized widgets
- **AI Agents**: Intelligent automation for your analysis workflows
- **Pre-saved Prompts**: Reusable AI interactions for consistent results

<img className="pro-border-gradient" width="800" alt="OpenBB Apps Example" src="https://openbb-cms.directus.app/assets/5778561c-5c09-4d70-bde8-952acbccaa01.png" />

## Why Use OpenBB Apps?

### Complete Control

- Build solutions tailored to your specific workflows
- Integrate your proprietary data and preferred AI models
- Customize every aspect of your analysis environment

### No Vendor Lock-in

- Avoid being limited by vendor data or technology
- Maintain ownership of your workflows and data
- Choose your preferred data sources and AI models

### Optimized Workflows

- Save time with pre-configured analysis templates
- Automate repetitive tasks with AI agents
- Create consistent, reproducible analysis processes

## Creating Your Own App

### Exporting an App

1. Integrate your data widgets in OpenBB Workspace
2. Organize them in a certain layout
3. Group widgets together and/or change their display (e.g. table or charts)
4. Right click on the dashboard and select "Export apps.json"
<img className="pro-border-gradient" width="800" alt="OpenBB Apps Example" src="https://openbb-cms.directus.app/assets/fd20914a-5557-43fd-a320-96dec1e70a38.png" />

5. This will create a `apps.json` file with your configuration
<img className="pro-border-gradient" width="800" alt="OpenBB Apps Example" src="https://openbb-cms.directus.app/assets/2250bf63-e7e9-447d-b2e3-14d71d23fe92.png" />

This is what you should expect as a file:

<details>
<summary mdxType="summary">apps.json</summary>

```json
[
  {
    "name": "Fama French Factors and Research Portfolio",
    "img": "https://github.com/user-attachments/assets/8b2409d6-5ddc-4cbc-b20c-89a29b1bd923",
    "img_dark": "",
    "img_light": "",
    "description": "Examine sample portfolio holdings distribution across countries, sectors, and industries, while also understanding how different assets correlate with each other over various time periods. This app provides insights into how portfolios respond to different market factors using Fama-French analysis, helping investors understand their portfolio's underlying drivers of returns and risk exposures.",
    "allowCustomization": true,
    "tabs": {
      "reference-data": {
        "id": "reference-data",
        "name": "Reference Data",
        "layout": [
          {
            "i": "fama_french_info_custom_obb",
            "x": 0,
            "y": 2,
            "w": 12,
            "h": 25
          },
          {
            "i": "load_factors_custom_obb",
            "x": 12,
            "y": 13,
            "w": 28,
            "h": 14,
            "state": {
              "params": {
                "frequency": "monthly",
                "start_date": "2021-01-01",
                "end_date": "2025-03-27"
              },
              "chartView": {
                "enabled": false,
                "chartType": "line"
              }
            }
          },
          {
            "i": "load_portfolios_custom_obb",
            "x": 12,
            "y": 2,
            "w": 28,
            "h": 11,
            "state": {
              "params": {
                "portfolio": "Portfolios_Formed_on_OP",
                "start_date": "2021-01-01",
                "end_date": "2025-03-27"
              },
              "chartView": {
                "enabled": false,
                "chartType": "line"
              }
            }
          }
        ]
      },
      "portfolio-price--performance": {
        "id": "portfolio-price--performance",
        "name": "Portfolio Price & Performance",
        "layout": [
          {
            "i": "portfolio_unit_price_custom_obb",
            "x": 0,
            "y": 2,
            "w": 40,
            "h": 24,
            "state": {
              "params": {
                "portfolio": "Client 2",
                "returns": "True"
              },
              "chartView": {
                "enabled": true,
                "chartType": "line"
              }
            }
          }
        ]
      },
      "portfolio-region-and-sector-exposure": {
        "id": "portfolio-region-and-sector-exposure",
        "name": "Portfolio Region and Sector Exposure",
        "layout": [
          {
            "i": "portfolio_sectors_custom_obb",
            "x": 0,
            "y": 13,
            "w": 19,
            "h": 14,
            "state": {
              "chartView": {
                "enabled": true,
                "chartType": "pie"
              }
            }
          },
          {
            "i": "portfolio_countries_custom_obb",
            "x": 0,
            "y": 2,
            "w": 19,
            "h": 11,
            "state": {
              "chartView": {
                "enabled": true,
                "chartType": "pie"
              }
            }
          },
          {
            "i": "portfolio_industries_custom_obb",
            "x": 19,
            "y": 2,
            "w": 21,
            "h": 25,
            "state": {
              "params": {
                "portfolio": "Client 3"
              },
              "chartView": {
                "enabled": true,
                "chartType": "pie"
              }
            }
          }
        ]
      },
      "portfolio-holdings": {
        "id": "portfolio-holdings",
        "name": "Portfolio Holdings",
        "layout": [
          {
            "i": "portfolio_holdings_custom_obb",
            "x": 0,
            "y": 2,
            "w": 40,
            "h": 25,
            "state": {
              "params": {
                "portfolio": "Client 2"
              },
              "chartView": {
                "enabled": true,
                "chartType": "bar"
              }
            }
          }
        ]
      },
      "portfolio-holdings-correlations": {
        "id": "portfolio-holdings-correlations",
        "name": "Portfolio Holdings Correlations",
        "layout": [
          {
            "i": "holdings_correlation_custom_obb",
            "x": 0,
            "y": 2,
            "w": 40,
            "h": 26,
            "state": {
              "params": {
                "portfolio": "Client 2"
              }
            }
          }
        ]
      },
      "portfolio-factor-correlations": {
        "id": "portfolio-factor-correlations",
        "name": "Portfolio Factor Attributions",
        "layout": [
          {
            "i": "portfolio_factors_custom_obb",
            "x": 0,
            "y": 2,
            "w": 30,
            "h": 20,
            "state": {
              "params": {
                "portfolio": "Client 2"
              }
            }
          }
        ]
      }
    },
    "groups": [
      {
        "name": "Group 3",
        "type": "param",
        "paramName": "frequency",
        "defaultValue": "monthly",
        "widgetIds": [
          "load_factors_custom_obb",
          "load_portfolios_custom_obb"
        ]
      },
      {
        "name": "Group 2",
        "type": "param",
        "paramName": "start_date",
        "defaultValue": "2021-01-01",
        "widgetIds": [
          "load_factors_custom_obb",
          "load_portfolios_custom_obb"
        ]
      },
      {
        "name": "Group 4",
        "type": "param",
        "paramName": "end_date",
        "defaultValue": "2025-03-27",
        "widgetIds": [
          "load_factors_custom_obb",
          "load_portfolios_custom_obb"
        ]
      },
      {
        "name": "Group 5",
        "type": "param",
        "paramName": "region",
        "defaultValue": "america",
        "widgetIds": [
          "load_factors_custom_obb",
          "load_portfolios_custom_obb"
        ]
      },
      {
        "name": "Group 6",
        "type": "endpointParam",
        "paramName": "factor",
        "defaultValue": "america",
        "widgetIds": [
          "load_factors_custom_obb",
          "load_portfolios_custom_obb"
        ]
      },
      {
        "name": "Group 7",
        "type": "param",
        "paramName": "portfolio",
        "defaultValue": "Client 1",
        "widgetIds": [
          "portfolio_sectors_custom_obb",
          "portfolio_countries_custom_obb",
          "portfolio_industries_custom_obb",
          "portfolio_holdings_custom_obb",
          "portfolio_unit_price_custom_obb",
          "holdings_correlation_custom_obb",
          "portfolio_factors_custom_obb"
        ]
      }
    ]
  }
]
```

</details>

### Setting up the Apps endpoint

To serve custom apps, you need to define an endpoint in your FastAPI application that returns the content of your `apps.json` file.

Here's how to define the `/apps.json` endpoint in your FastAPI application:

```python
from fastapi import FastAPI
from fastapi.responses import JSONResponse

app = FastAPI()

@app.get("/apps.json")
async def get_apps():
    # Load your apps.json file
    with open("path/to/your/apps.json", "r") as f:
        apps_config = json.load(f)
    return JSONResponse(content=apps_config)
```

Your custom apps will appear in the OpenBB Workspace under the "Apps" tab in the "My Apps" section, as shown in here:

<img width="800" alt="OpenBB Workspace Multiple Applications View" src="https://openbb-cms.directus.app/assets/2fc9097e-0941-49df-8d83-7d6b5a87bb45.png" />

Remember, the best part is that you can build your own apps tailored to your specific needs.
