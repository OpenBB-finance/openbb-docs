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

<div style={{display: 'flex-col', justifyContent: 'center'}}>
  <img width="800" alt="PWA" src="https://openbb-cms.directus.app/assets/b1d5b799-3abe-4d45-b04c-601e2b652b18.png" />
</div>

Built on the principle that there's no one-size-fits-all approach to financial analysis, Apps empower you to own your workflows end-to-end.

## What are OpenBB Apps?

OpenBB Apps are comprehensive solutions that combine:

- **Data Integration**: Seamless connection with your data sources
- **Custom Dashboards**: Pre-configured layouts with specialized widgets
- **AI Agents**: Intelligent automation for your analysis workflows
- **Pre-saved Prompts**: Reusable AI interactions for consistent results



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

### App Structure Reference

The `apps.json` file follows this structure:

| Property | Type | Description |
|----------|------|-------------|
| `name` | string | The name of your app |
| `description` | string | A detailed description of what your app does |
| `img` | string | URL to the app's thumbnail image |
| `img_dark` | string | Optional URL to the app's thumbnail for dark mode |
| `img_light` | string | Optional URL to the app's thumbnail for light mode |
| `allowCustomization` | boolean | Whether users can customize the app |
| `selected_agent` | string | Optional ID of the default AI agent for this app |
| `authentication` | string | Optional authentication requirements |
| `tabs` | object | Collection of tabs, each with an ID, name, and layout configuration |
| `groups` | array | Widget groupings for synchronized parameters |
| `prompts` | array | Optional list of prompt IDs associated with the app |

Each tab contains:
- `id`: Unique identifier for the tab
- `name`: Display name for the tab
- `layout`: Array of widget configurations with positioning and state

Each group contains:
- `name`: Display name for the group
- `type`: Type of grouping (e.g., "param", "endpointParam")
- `paramName`: The parameter being synchronized
- `widgetIds`: Array of widget IDs in this group
- `defaultValue`: Default value for the parameter

Each layout contains a reference to a widget:
- `i`: The id of the widget - This will be used to identify the widget in the app (if the widget endpoint is "test/widget_1 the id will be test_widget_1")
- `x`: The x position of the widget
- `y`: The y position of the widget
- `w`: The width of the widget
- `h`: The height of the widget
- `state`: The state of the widget

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

**Note**: The ideal image size is 250x200px

Remember, the best part is that you can build your own apps tailored to your specific needs.
