---
title: Metric
sidebar_position: 5
description: Learn how to integrate your own backend with OpenBB Workspace using the cookie-cutter or language-agnostic API approaches, with illustrative guides and principles for handling widget.json files, APIs, interfaces, Python, FastAPI, and more.
keywords:
- widgets.json
- OpenBB API
- Endpoint integration
- widget configuration
- Language-Agnostic API
- API implementation
- Python
- FastAPI
- Workspace widgets
- Widget definitions
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Metric | OpenBB Workspace Docs" />

A widget that displays key metrics with labels, values, and delta changes. Useful for showing important statistics and their trends.

<img className="pro-border-gradient" width="600" alt="metric" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/metric-widget.png" />

```python
@register_widget({
  "name": "Metric Widget",
  "description": "A metric widget example",
  "category": "Test",
  "endpoint": "test_metric",
  "type": "metric"
})
@app.get("/test_metric")
def test_metric():
    """Example endpoint to provide metric data."""
    # Example data structure
    data = {
        "label": "Example Label",
        "value": "12345",
        "delta": "5.67"
    }

    return JSONResponse(content=data)
```

As you can see in the example the data structure is as follows:

- `label`: The label of the metric.
- `value`: The value of the metric.
- `delta`: The delta of the metric.

## Multiple metrics

<img className="pro-border-gradient" width="800" alt="Metric Widget Example" src="https://openbb-cms.directus.app/assets/ba37bbbb-371a-40e8-a7e1-e48edcc6c0c8.png" />

```python
@register_widget({
    "name": "Metric Widget",
    "description": "A metric widget",
    "endpoint": "metric_widget",
    "gridData": {
      "w": 5,
      "h": 5
    },
    "type": "metric"
})
@app.get("/metric_widget")
def metric_widget():
    data = [
        {
            "label": "Total Users",
            "value": "1,234,567",
            "delta": "12.5"
        },
        {
            "label": "Active Sessions",
            "value": "45,678",
            "delta": "-2.3"
        },
        {
            "label": "Revenue (USD)",
            "value": "$89,432",
            "delta": "8.9"
        },
        {
            "label": "Conversion Rate",
            "value": "3.2%",
            "delta": "0.0"
        },
        {
            "label": "Avg. Session Duration",
            "value": "4m 32s",
            "delta": "0.5"
        }
    ]

    return JSONResponse(content=data)
```
