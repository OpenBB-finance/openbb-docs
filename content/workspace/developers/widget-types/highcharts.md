---
title: Highcharts Chart
sidebar_position: 14
description: Highcharts Chart
keywords:
- highcharts
- charts
- visualization
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Highcharts Chart | OpenBB Workspace Docs" />

A widget that demonstrates how to use the Highcharts library to create a chart. This gives you the ability to create any interactive type of charts with the Highcharts ecosystem.

For Highcharts integration, we're using the `highcharts_core` Python package to create and configure the chart. Install it with:

```bash
pip install highcharts-core
```

<img className="pro-border-gradient" width="800" alt="Basic Plotly Chart Example" src="https://openbb-cms.directus.app/assets/fc125d0e-f26b-45f7-84ae-0562c20befdf.png" />

```python
@register_widget({
    "name": "Chains TVL Highcharts",
    "description": "Get current TVL of all chains using Defi Llama and plot with Highcharts",
    "category": "crypto",
    "type": "chart-highcharts",
    "endpoint": "chains_highchart",
    "gridData": {"w": 20, "h": 9}
})
@app.get("/chains_highchart")
def get_chains_highchart(theme: str = "dark"):
    """Get current TVL of all chains using Defi Llama"""
    response = requests.get("https://api.llama.fi/v2/chains")

    if response.status_code == 200:
        chains = response.json()

        # Sort by TVL and get top 30
        top_30 = sorted(chains, key=lambda x: x.get('tvl', 0), reverse=True)[:30]

        # Extract categories and format TVL values (in billions)
        categories = [chain['name'] for chain in top_30]
        data = [round(chain['tvl'] / 1e9, 2) for chain in top_30]

        # Configure chart options with theme support
        chart_options = {
            'chart': {
                'type': 'column',
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
                'title': {'text': 'Top 30 Chains by TVL', 'style': {'color': '#ffffff'}},
                'legend': {'itemStyle': {'color': '#ffffff'}},
                'xAxis': {
                    **chart_options['xAxis'],
                    'title': {'text': 'Chain Name', 'style': {'color': '#ffffff'}},
                    'lineColor': '#555555',
                    'tickColor': '#555555'
                },
                'yAxis': {
                    **chart_options['yAxis'],
                    'title': {'text': 'Total Value Locked (TVL in billions $)', 'style': {'color': '#ffffff'}},
                    'gridLineColor': '#333333'
                },
                'plotOptions': {
                    'series': {
                        'color': '#3498db'
                    }
                }
            })
        else:
            chart_options.update({
                'title': {'text': 'Top 30 Chains by TVL', 'style': {'color': '#333333'}},
                'legend': {'itemStyle': {'color': '#333333'}},
                'xAxis': {
                    **chart_options['xAxis'],
                    'title': {'text': 'Chain Name', 'style': {'color': '#333333'}},
                    'lineColor': '#cccccc',
                    'tickColor': '#cccccc'
                },
                'yAxis': {
                    **chart_options['yAxis'],
                    'title': {'text': 'Total Value Locked (TVL in billions $)', 'style': {'color': '#333333'}},
                    'gridLineColor': '#e6e6e6'
                },
                'plotOptions': {
                    'series': {
                        'color': '#2980b9'
                    }
                }
            })

        chart = Chart.from_options(chart_options)
        return chart.to_dict()

    return JSONResponse(
        content={"error": response.text}, status_code=response.status_code
    )
```

Note that for Highcharts, the `type` field is set to `"chart-highcharts"` instead of just `"chart"` which is used for Plotly charts.

### Theme Support

The example includes full theme support for both dark and light modes. The theme parameter is automatically provided by OpenBB Workspace based on the user's current display mode (dark/light). This enables dynamic chart styling that matches the workspace theme.

- **Dark mode**: White text, dark grid lines, blue series color (#3498db)
- **Light mode**: Dark text, light grid lines, darker blue series color (#2980b9)

## Additional Resources

For more information on Highcharts configuration options, visit the [Highcharts API Documentation](https://api.highcharts.com/highcharts/).

You can find more examples of how to set up your own backend in the [Backend for OpenBB Workspace GitHub](https://github.com/OpenBB-finance/backend-examples-for-openbb-workspace).
