---
title: Parameter Grouping
sidebar_position: 27
description: Learn how to implement parameter grouping in OpenBB Workspace widgets, allowing multiple widgets to share and respond to the same parameter input
keywords:
- parameter grouping
- shared parameters
- synchronized parameters
- widget parameters
- parameter synchronization
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Parameter Grouping | OpenBB Workspace Docs" />

Parameter grouping allows multiple widgets to share and respond to the same parameter input. When widgets are grouped, you only need to select a value once to update all related widgets simultaneously. This is useful for dashboards where multiple widgets display different aspects of the same data source. If multiple widgets use the same `paramName` and `options` parameter configuration, they can be grouped together.

Below is an example of how to group parameters across multiple widgets, allowing them to share and synchronize parameter values.

<img className="pro-border-gradient" width="1000" alt="Parameter Grouping Example" src="https://openbb-cms.directus.app/assets/0cac96ae-6915-4183-b5db-a02e2be96fe0.png" />

The implementation consists of three main components that work together to create a cohesive user interface:

1. Provides a list of available car manufacturers that can be selected in the widgets.

```python
@app.get("/company_options")
def get_company_options():
    """Returns a list of available car manufacturers"""
    return [
        {"label": "Toyota Motor Corporation", "value": "TM"},
        {"label": "Volkswagen Group", "value": "VWAGY"},
        {"label": "General Motors", "value": "GM"},
        {"label": "Ford Motor Company", "value": "F"},
        {"label": "Tesla Inc.", "value": "TSLA"}
    ]
```

2. Displays performance metrics for the selected car manufacturer in a table format. This widget uses parameters (`company` and `year`) that are grouped with other widgets. As it is possible to see by the color box before the parameter and the same id. When a user selects a company or year, all widgets using these parameters will update automatically.

```python
@register_widget({
    "name": "Car Manufacturer Performance",
    "description": "Displays performance metrics for the selected car manufacturer",
    "type": "table",
    "endpoint": "company_performance",
    "gridData": {"w": 16, "h": 8},
    "params": [
        {
            "paramName": "company",  # Shared paramName with company_details widget
            "description": "Select a car manufacturer to view performance",
            "value": "TM",
            "label": "Manufacturer",
            "type": "endpoint",
            "optionsEndpoint": "/company_options"  # Shared endpoint with company_details widget
        },
        {
            "paramName": "year",  # Shared paramName with company_details widget
            "description": "Select model year to view performance",
            "value": "2024",
            "label": "Model Year",
            "type": "text",
            "options": [
                {"label": "2024", "value": "2024"},
                {"label": "2023", "value": "2023"},
                {"label": "2022", "value": "2022"}
            ]
        }
    ],
    "data": {
        "table": {
            "showAll": True,
            "columnsDefs": [
                {
                    "field": "metric",
                    "headerName": "Metric",
                    "cellDataType": "text",
                    "width": 150
                },
                {
                    "field": "value",
                    "headerName": "Value",
                    "cellDataType": "text",
                    "width": 150
                },
                {
                    "field": "change",
                    "headerName": "Change",
                    "cellDataType": "number",
                    "formatterFn": "percent",
                    "renderFn": "greenRed",
                    "width": 150
                }
            ]
        }
    }
})
@app.get("/company_performance")
def get_company_performance(company: str, year: str = "2024"):
    """Returns car manufacturer performance metrics"""
    performance_data = {
        "TM": {
            "2024": [
                {"metric": "Global Sales", "value": "10.5M", "change": 5.2},
                {"metric": "EV Sales", "value": "1.2M", "change": 45.8},
                {"metric": "Operating Margin", "value": "8.5%", "change": 1.2},
                {"metric": "R&D Investment", "value": "$12.5B", "change": 15.3}
            ],
            "2023": [
                {"metric": "Global Sales", "value": "9.98M", "change": 3.1},
                {"metric": "EV Sales", "value": "0.82M", "change": 35.2},
                {"metric": "Operating Margin", "value": "7.3%", "change": 0.8},
                {"metric": "R&D Investment", "value": "$10.8B", "change": 12.5}
            ],
            "2022": [
                {"metric": "Global Sales", "value": "9.67M", "change": 1.2},
                {"metric": "EV Sales", "value": "0.61M", "change": 25.4},
                {"metric": "Operating Margin", "value": "6.5%", "change": -0.5},
                {"metric": "R&D Investment", "value": "$9.6B", "change": 8.7}
            ]
        },
        "VWAGY": {
            "2024": [
                {"metric": "Global Sales", "value": "9.2M", "change": 4.8},
                {"metric": "EV Sales", "value": "1.5M", "change": 52.3},
                {"metric": "Operating Margin", "value": "7.8%", "change": 1.5},
                {"metric": "R&D Investment", "value": "$15.2B", "change": 18.5}
            ],
            "2023": [
                {"metric": "Global Sales", "value": "8.78M", "change": 3.2},
                {"metric": "EV Sales", "value": "0.98M", "change": 42.1},
                {"metric": "Operating Margin", "value": "6.3%", "change": 0.9},
                {"metric": "R&D Investment", "value": "$12.8B", "change": 15.2}
            ],
            "2022": [
                {"metric": "Global Sales", "value": "8.5M", "change": 1.8},
                {"metric": "EV Sales", "value": "0.69M", "change": 32.5},
                {"metric": "Operating Margin", "value": "5.4%", "change": -0.7},
                {"metric": "R&D Investment", "value": "$11.1B", "change": 10.8}
            ]
        },
        "GM": {
            "2024": [
                {"metric": "Global Sales", "value": "6.8M", "change": 3.5},
                {"metric": "EV Sales", "value": "0.8M", "change": 48.2},
                {"metric": "Operating Margin", "value": "8.2%", "change": 1.8},
                {"metric": "R&D Investment", "value": "$9.5B", "change": 16.5}
            ],
            "2023": [
                {"metric": "Global Sales", "value": "6.57M", "change": 2.1},
                {"metric": "EV Sales", "value": "0.54M", "change": 38.5},
                {"metric": "Operating Margin", "value": "6.4%", "change": 1.2},
                {"metric": "R&D Investment", "value": "$8.15B", "change": 14.2}
            ],
            "2022": [
                {"metric": "Global Sales", "value": "6.43M", "change": 0.8},
                {"metric": "EV Sales", "value": "0.39M", "change": 28.7},
                {"metric": "Operating Margin", "value": "5.2%", "change": -0.5},
                {"metric": "R&D Investment", "value": "$7.13B", "change": 9.8}
            ]
        },
        "F": {
            "2024": [
                {"metric": "Global Sales", "value": "4.2M", "change": 2.8},
                {"metric": "EV Sales", "value": "0.6M", "change": 42.5},
                {"metric": "Operating Margin", "value": "7.5%", "change": 1.5},
                {"metric": "R&D Investment", "value": "$8.2B", "change": 15.8}
            ],
            "2023": [
                {"metric": "Global Sales", "value": "4.08M", "change": 1.5},
                {"metric": "EV Sales", "value": "0.42M", "change": 35.2},
                {"metric": "Operating Margin", "value": "6.0%", "change": 1.0},
                {"metric": "R&D Investment", "value": "$7.08B", "change": 13.5}
            ],
            "2022": [
                {"metric": "Global Sales", "value": "4.02M", "change": 0.5},
                {"metric": "EV Sales", "value": "0.31M", "change": 25.8},
                {"metric": "Operating Margin", "value": "5.0%", "change": -0.8},
                {"metric": "R&D Investment", "value": "$6.24B", "change": 8.9}
            ]
        },
        "TSLA": {
            "2024": [
                {"metric": "Global Sales", "value": "2.1M", "change": 35.2},
                {"metric": "EV Sales", "value": "2.1M", "change": 35.2},
                {"metric": "Operating Margin", "value": "15.5%", "change": 3.7},
                {"metric": "R&D Investment", "value": "$4.5B", "change": 25.8}
            ],
            "2023": [
                {"metric": "Global Sales", "value": "1.55M", "change": 28.5},
                {"metric": "EV Sales", "value": "1.55M", "change": 28.5},
                {"metric": "Operating Margin", "value": "11.8%", "change": 2.5},
                {"metric": "R&D Investment", "value": "$3.58B", "change": 22.3}
            ],
            "2022": [
                {"metric": "Global Sales", "value": "1.21M", "change": 21.8},
                {"metric": "EV Sales", "value": "1.21M", "change": 21.8},
                {"metric": "Operating Margin", "value": "9.3%", "change": 1.8},
                {"metric": "R&D Investment", "value": "$2.93B", "change": 18.5}
            ]
        }
    }
    
    return performance_data.get(company, {}).get(year, [
        {"metric": "No Data", "value": "N/A", "change": 0}
    ])
```

3. Displays detailed information about the selected car manufacturer in a markdown format. Like the Performance widget, it uses the same shared parameters and updates automatically when they change. The widget includes error handling to display fallback data when the selected company or year is not found.

```python
@register_widget({
    "name": "Car Manufacturer Details",
    "description": "Displays detailed information about the selected car manufacturer",
    "type": "markdown",
    "endpoint": "company_details",
    "gridData": {"w": 16, "h": 8},
    "params": [
        {
            "paramName": "company",  # Shared paramName with company_performance widget
            "description": "Select a car manufacturer to view details",
            "value": "TM",
            "label": "Manufacturer",
            "type": "endpoint",
            "optionsEndpoint": "/company_options"  # Shared endpoint with company_performance widget
        },
        {
            "paramName": "year",  # Shared paramName with company_performance widget
            "description": "Select model year to view details",
            "value": "2024",
            "label": "Model Year",
            "type": "text",
            "options": [
                {"label": "2024", "value": "2024"},
                {"label": "2023", "value": "2023"},
                {"label": "2022", "value": "2022"}
            ]
        }
    ]
})
@app.get("/company_details")
def get_company_details(company: str, year: str = "2024"):
    """Returns car manufacturer details in markdown format"""
    company_info = {
        "TM": {
            "name": "Toyota Motor Corporation",
            "sector": "Automotive",
            "market_cap": "280B",
            "pe_ratio": 9.5,
            "dividend_yield": 2.1,
            "description": "Toyota Motor Corporation designs, manufactures, assembles, and sells passenger vehicles, minivans, commercial vehicles, and related parts and accessories worldwide.",
            "models": {
                "2024": ["Camry", "Corolla", "RAV4", "Highlander"],
                "2023": ["Camry", "Corolla", "RAV4", "Highlander"],
                "2022": ["Camry", "Corolla", "RAV4", "Highlander"]
            }
        },
        "VWAGY": {
            "name": "Volkswagen Group",
            "sector": "Automotive",
            "market_cap": "75B",
            "pe_ratio": 4.2,
            "dividend_yield": 3.5,
            "description": "Volkswagen Group manufactures and sells automobiles worldwide. The company offers passenger cars, commercial vehicles, and power engineering systems.",
            "models": {
                "2024": ["Golf", "Passat", "Tiguan", "ID.4"],
                "2023": ["Golf", "Passat", "Tiguan", "ID.4"],
                "2022": ["Golf", "Passat", "Tiguan", "ID.4"]
            }
        },
        "GM": {
            "name": "General Motors",
            "sector": "Automotive",
            "market_cap": "45B",
            "pe_ratio": 5.8,
            "dividend_yield": 1.2,
            "description": "General Motors designs, builds, and sells cars, trucks, crossovers, and automobile parts worldwide.",
            "models": {
                "2024": ["Silverado", "Equinox", "Malibu", "Corvette"],
                "2023": ["Silverado", "Equinox", "Malibu", "Corvette"],
                "2022": ["Silverado", "Equinox", "Malibu", "Corvette"]
            }
        },
        "F": {
            "name": "Ford Motor Company",
            "sector": "Automotive",
            "market_cap": "48B",
            "pe_ratio": 7.2,
            "dividend_yield": 4.8,
            "description": "Ford Motor Company designs, manufactures, markets, and services a line of Ford trucks, cars, sport utility vehicles, electrified vehicles, and Lincoln luxury vehicles.",
            "models": {
                "2024": ["F-150", "Mustang", "Explorer", "Mach-E"],
                "2023": ["F-150", "Mustang", "Explorer", "Mach-E"],
                "2022": ["F-150", "Mustang", "Explorer", "Mach-E"]
            }
        },
        "TSLA": {
            "name": "Tesla Inc.",
            "sector": "Automotive",
            "market_cap": "800B",
            "pe_ratio": 65.3,
            "dividend_yield": 0.0,
            "description": "Tesla Inc. designs, develops, manufactures, leases, and sells electric vehicles, and energy generation and storage systems in the United States, China, and internationally.",
            "models": {
                "2024": ["Model 3", "Model Y", "Model S", "Model X"],
                "2023": ["Model 3", "Model Y", "Model S", "Model X"],
                "2022": ["Model 3", "Model Y", "Model S", "Model X"]
            }
        }
    }
    
    details = company_info.get(company, {
        "name": "Unknown",
        "sector": "Unknown",
        "market_cap": "N/A",
        "pe_ratio": 0,
        "dividend_yield": 0,
        "description": "No information available for this manufacturer.",
        "models": {"2024": [], "2023": [], "2022": []}
    })
    
    models = details['models'].get(year, [])
    
    return f"""# {details['name']} ({company}) - {year} Models
**Sector:** {details['sector']}
**Market Cap:** ${details['market_cap']}
**P/E Ratio:** {details['pe_ratio']}
**Dividend Yield:** {details['dividend_yield']}%

{details['description']}

## {year} Model Lineup
{', '.join(models)}
"""
```

This implementation demonstrates how to create a cohesive user interface where multiple widgets work together to provide different views of the same data, while maintaining parameter synchronization across all components. 