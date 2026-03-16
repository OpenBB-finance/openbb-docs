---
title: Tabs
sidebar_position: 28
description: Learn how to implement tabs parameters in OpenBB Workspace widgets to create tabbed interfaces for switching between different data views
keywords:
- tabs
- tab parameter
- tabbed interface
- widget parameters
- data views
- dynamic columns
- OpenBB Workspace
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Tabs | OpenBB Workspace Docs" />

A parameter type that renders as clickable tabs, allowing users to switch between different data views within a single widget. Tabs are ideal for organizing related data categories that share a similar structure or context.

## Basic Tabs Parameter

The tabs parameter uses `"type": "tabs"` and requires an `options` array defining the available tabs.

```json
{
  "paramName": "category",
  "type": "tabs",
  "value": "liquidity",
  "label": "Category",
  "description": "Select the category to display",
  "options": [
    {
      "label": "Liquidity",
      "value": "liquidity"
    },
    {
      "label": "Efficiency",
      "value": "efficiency"
    },
    {
      "label": "Profitability",
      "value": "profitability"
    }
  ]
}
```

## Tabs with Dynamic Columns

In this example, each tab returns data with **different columns**. The table columns automatically regenerate based on the data returned by each tab selection.

<img className="pro-border-gradient" width="800" alt="Basic YouTube Widget" src="https://openbb-cms.directus.app/assets/f5b76ac4-e78b-4456-b25c-6d58e93c6f16.png" />

**Widget Configuration (widgets.json):**

```json
{
  "tabs_dynamic_columns": {
    "name": "Financial Ratios - Dynamic Columns",
    "description": "Each tab shows different metrics with different columns",
    "category": "Financial Analysis",
    "endpoint": "financial_ratios_dynamic",
    "gridData": {
      "w": 45,
      "h": 12
    },
    "params": [
      {
        "paramName": "category",
        "type": "tabs",
        "value": "liquidity",
        "label": "Ratio Category",
        "description": "Select the financial ratio category",
        "options": [
          {
            "label": "Liquidity",
            "value": "liquidity"
          },
          {
            "label": "Efficiency",
            "value": "efficiency"
          },
          {
            "label": "Profitability",
            "value": "profitability"
          },
          {
            "label": "Leverage",
            "value": "leverage"
          }
        ]
      }
    ]
  }
}
```

**Backend Implementation:**

```python
@app.get("/financial_ratios_dynamic")
def get_financial_ratios_dynamic(category: str = "liquidity"):
    """
    Returns different columns based on the selected category tab.
    The table columns will change when switching tabs.
    """
    data = []

    for company in COMPANIES:
        row = {
            "symbol": company["symbol"],
            "company": company["company"],
        }

        if category == "liquidity":
            row["current_ratio"] = round(random.uniform(0.5, 4.0), 2)
            row["quick_ratio"] = round(random.uniform(0.3, 3.5), 2)
            row["cash_ratio"] = round(random.uniform(0.1, 2.0), 2)
            row["working_capital_m"] = round(random.uniform(-5000, 50000), 0)

        elif category == "efficiency":
            row["asset_turnover"] = round(random.uniform(0.3, 2.0), 2)
            row["inventory_turnover"] = round(random.uniform(2.0, 50.0), 1)
            row["receivables_turnover"] = round(random.uniform(3.0, 20.0), 1)
            row["days_sales_outstanding"] = round(random.uniform(20, 90), 0)

        elif category == "profitability":
            row["gross_margin_pct"] = round(random.uniform(20, 80), 1)
            row["operating_margin_pct"] = round(random.uniform(5, 50), 1)
            row["net_margin_pct"] = round(random.uniform(2, 40), 1)
            row["roe_pct"] = round(random.uniform(5, 150), 1)

        elif category == "leverage":
            row["debt_to_equity"] = round(random.uniform(0.1, 3.0), 2)
            row["debt_to_assets"] = round(random.uniform(0.05, 0.6), 2)
            row["interest_coverage"] = round(random.uniform(2.0, 200.0), 1)

        data.append(row)

    return data
```

## Tabs with Static Columns

When you want the same columns across all tabs (only data values change), define `columnsDefs` in the widget configuration. This ensures consistent column structure regardless of which tab is selected.

<img className="pro-border-gradient" width="800" alt="Basic YouTube Widget" src="https://openbb-cms.directus.app/assets/a3109091-fe49-4a6a-97c9-c3f48e1dc037.png" />

**Widget Configuration (widgets.json):**

```json
{
  "tabs_static_columns": {
    "name": "Financial Ratios - Static Columns",
    "description": "Same columns for all tabs - only data values change",
    "category": "Financial Analysis",
    "endpoint": "financial_ratios_static",
    "gridData": {
      "w": 40,
      "h": 12
    },
    "params": [
      {
        "paramName": "category",
        "type": "tabs",
        "value": "liquidity",
        "label": "Category",
        "description": "Select category - columns stay the same",
        "options": [
          {
            "label": "Liquidity",
            "value": "liquidity"
          },
          {
            "label": "Efficiency",
            "value": "efficiency"
          },
          {
            "label": "Profitability",
            "value": "profitability"
          },
          {
            "label": "Leverage",
            "value": "leverage"
          }
        ]
      }
    ],
    "data": {
      "table": {
        "columnsDefs": [
          {
            "field": "symbol",
            "headerName": "Symbol",
            "pinned": "left"
          },
          {
            "field": "company",
            "headerName": "Company"
          },
          {
            "field": "category",
            "headerName": "Selected Category"
          },
          {
            "field": "metric_1",
            "headerName": "Metric 1"
          },
          {
            "field": "metric_2",
            "headerName": "Metric 2"
          },
          {
            "field": "metric_3",
            "headerName": "Metric 3"
          }
        ]
      }
    }
  }
}
```

**Backend Implementation:**

```python
@app.get("/financial_ratios_static")
def get_financial_ratios_static(category: str = "liquidity"):
    """
    Same columns for all tabs - only data values change.
    """
    data = []
    for company in COMPANIES:
        row = {
            "symbol": company["symbol"],
            "company": company["company"],
            "category": category,
            "metric_1": round(random.uniform(0.5, 100), 2),
            "metric_2": round(random.uniform(0.5, 100), 2),
            "metric_3": round(random.uniform(0.5, 100), 2),
        }
        data.append(row)
    return data
```

## Tabs Combined with Other Parameters

Tabs can be used alongside other parameter types like dropdowns. In this example, tabs control the data category (which changes columns) while a dropdown controls the reporting period.

<img className="pro-border-gradient" width="800" alt="Basic YouTube Widget" src="https://openbb-cms.directus.app/assets/1297128e-3bbc-43a1-86fc-37938002c2b0.png" />

**Widget Configuration (widgets.json):**

```json
{
  "tabs_with_dropdown": {
    "name": "Financial Analysis with Period",
    "description": "Tabs control category, dropdown controls period",
    "category": "Financial Analysis",
    "endpoint": "comparison_with_period",
    "gridData": {
      "w": 50,
      "h": 14
    },
    "params": [
      {
        "paramName": "period",
        "type": "text",
        "value": "annual",
        "label": "Period",
        "description": "Select the reporting period",
        "options": [
          {
            "label": "Annual",
            "value": "annual"
          },
          {
            "label": "Quarterly",
            "value": "quarterly"
          }
        ]
      },
      {
        "paramName": "category",
        "type": "tabs",
        "value": "liquidity",
        "label": "Category",
        "description": "Select the financial ratio category",
        "options": [
          {
            "label": "Liquidity",
            "value": "liquidity"
          },
          {
            "label": "Efficiency",
            "value": "efficiency"
          },
          {
            "label": "Profitability",
            "value": "profitability"
          },
          {
            "label": "Leverage",
            "value": "leverage"
          }
        ]
      }
    ]
  }
}
```

**Backend Implementation:**

```python
@app.get("/comparison_with_period")
def get_comparison_with_period(category: str = "liquidity", period: str = "annual"):
    """
    Tabs control the category (changes columns), dropdown controls the period.
    """
    data = generate_random_data(category)

    # Add period info to each row
    for row in data:
        row["period"] = period
        row["fiscal_year"] = 2024 if period == "annual" else "Q4 2024"

    return data
```

## Parameter Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `paramName` | `string` | Yes | The parameter name passed to the endpoint |
| `type` | `string` | Yes | Must be `"tabs"` |
| `value` | `string` | Yes | Default selected tab value |
| `label` | `string` | No | Display label for the parameter |
| `description` | `string` | No | Tooltip description |
| `options` | `array` | Yes | Array of tab options with `label` and `value` |

## When to Use Tabs vs Dropdown

| Use Case | Recommended |
|----------|-------------|
| 2-5 mutually exclusive categories | **Tabs** - Better visibility, quick switching |
| Many options (6+) | **Dropdown** - Saves space |
| Frequent switching between views | **Tabs** - One-click access |
| Options need search/filter | **Dropdown** - Built-in search |
| Different data schemas per option | **Tabs** - Visual indication of view change |
