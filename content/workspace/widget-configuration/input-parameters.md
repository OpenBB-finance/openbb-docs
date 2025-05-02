---
title: Input Parameters
sidebar_position: 17
description: Comprehensive guide to different input parameter types available in OpenBB Workspace including Date Picker, Text Input, Boolean Toggle, Number Input, Dropdown, and Advanced Dropdown
keywords:
- input
- parameters
- configuration
- date picker
- text input
- boolean toggle
- number input
- dropdown
- advanced dropdown
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Input Parameters | OpenBB Workspace Docs" />

## Date Picker Parameter

A widget that includes a date picker parameter allowing users to select a specific date. The selected date is passed to the widget as a parameter.

<img className="pro-border-gradient" width="800" alt="Date Picker Parameter Example" src="https://openbb-cms.directus.app/assets/9adb2a80-cca6-4efd-a106-f76d570f0a5c.png" />

```python
@register_widget({
    "name": "Markdown Widget with Date Picker",
    "description": "A markdown widget with a date picker parameter",
    "endpoint": "markdown_widget_with_date_picker",
    "gridData": {"w": 16, "h": 6},
    "type": "markdown",
    "params": [
        {
            "paramName": "date_picker",
            "description": "Choose a date to display",
            "value": (datetime.now() - timedelta(days=1)).strftime("%Y-%m-%d"),
            "label": "Select Date",
            "type": "date"
        }
    ]
})
@app.get("/markdown_widget_with_date_picker")
def markdown_widget_with_date_picker(
    date_picker: str = (datetime.now() - timedelta(days=1)).strftime("%Y-%m-%d")
):
    """Returns a markdown widget with date picker parameter"""
    return f"""# Date Picker
Selected date: {date_picker}
"""
```

## Text Input Parameter

A widget that includes a text input parameter allowing users to enter custom text. The entered text is passed to the widget as a parameter.

<img className="pro-border-gradient" width="800" alt="Text Input Parameter Example" src="https://openbb-cms.directus.app/assets/b126ba58-ff29-4923-b124-1a0314ad4842.png" />

```python
@register_widget({
    "name": "Markdown Widget with Text Input",
    "description": "A markdown widget with a text input parameter",
    "endpoint": "markdown_widget_with_text_input",
    "gridData": {"w": 16, "h": 6},
    "type": "markdown",
    "params": [
        {
            "paramName": "text_box",
            "value": "hello",
            "label": "Enter Text",
            "description": "Type something to display",
            "type": "text"
        }
    ]
})
@app.get("/markdown_widget_with_text_input")
def markdown_widget_with_text_input(text_box: str):
    """Returns a markdown widget with text input parameter"""
    return f"""# Text Input
Entered text: {text_box}
"""
```

## Boolean Toggle Parameter

A widget that includes a boolean toggle parameter allowing users to enable or disable features. The toggle state is passed to the widget as a parameter.

<img className="pro-border-gradient" width="800" alt="Boolean Toggle Parameter Example" src="https://openbb-cms.directus.app/assets/c4cc2d7f-c8f0-417c-a7ac-3842150e1aa1.png" />

```python
@register_widget({
    "name": "Markdown Widget with Boolean Toggle",
    "description": "A markdown widget with a boolean parameter",
    "endpoint": "markdown_widget_with_boolean",
    "gridData": {"w": 16, "h": 6},
    "type": "markdown",
    "params": [
        {
            "paramName": "condition",
            "description": "Enable or disable this feature",
            "label": "Toggle Option",
            "type": "boolean",
            "value": True,
        }
    ]
})
@app.get("/markdown_widget_with_boolean")
def markdown_widget_with_boolean(condition: bool):
    """Returns a markdown widget with boolean parameter"""
    return f"""# Boolean Toggle
Current state: {'Enabled' if condition else 'Disabled'}
"""
```

## Number Input Parameter

A widget that includes a number input parameter allowing users to enter numerical values. The entered number is passed to the widget as a parameter.

<img className="pro-border-gradient" width="800" alt="Number Input Parameter Example" src="https://openbb-cms.directus.app/assets/dc2395cf-a452-46a6-9ae4-e2be882a21c2.png" />

```python
@register_widget({
    "name": "Markdown Widget with Number Input",
    "description": "A markdown widget with a number input parameter",
    "endpoint": "markdown_widget_with_number_input",
    "gridData": {"w": 16, "h": 6},
    "type": "markdown",
    "params": [
        {
            "paramName": "number_box",
            "description": "Enter a number",
            "value": 20,
            "label": "Enter Number",
            "type": "number"
        }
    ]
})
@app.get("/markdown_widget_with_number_input")
def markdown_widget_with_number_input(number_box: int):
    """Returns a markdown widget with number input parameter"""
    return f"""# Number Input
Entered number: {number_box}
"""
```

## Dropdown Parameter

A widget that includes a dropdown parameter allowing users to select from predefined options. The selected option is passed to the widget as a parameter.

Note that multiSelect can be turned on and off.

<img className="pro-border-gradient" width="800" alt="Dropdown Parameter Example" src="https://openbb-cms.directus.app/assets/d657c7d2-e096-42ea-9d9a-92a10093afd0.png" />

```python
@register_widget({
    "name": "Markdown Widget with Dropdown",
    "description": "A markdown widget with a dropdown parameter",
    "endpoint": "markdown_widget_with_dropdown",
    "gridData": {"w": 16, "h": 6},
    "type": "markdown",
    "params": [
        {
            "paramName": "days_picker",
            "description": "Number of days to look back",
            "value": "1",
            "label": "Select Days",
            "type": "text",
            "multiSelect": True,
            "options": [
                {
                    "value": "1",
                    "label": "1"
                },
                {
                    "value": "5",
                    "label": "5"
                },
                {
                    "value": "10",
                    "label": "10"
                },
                {
                    "value": "20",
                    "label": "20"
                },
                {
                    "value": "30",
                    "label": "30"
                }
            ]
        }
    ]
})
@app.get("/markdown_widget_with_dropdown")
def markdown_widget_with_dropdown(days_picker: str):
    """Returns a markdown widget with dropdown parameter"""
    return f"""# Dropdown
Selected days: {days_picker}
"""
```

## Advanced Dropdown Parameter

Sometimes you may want to pass a list from an endpoint rather then specify the options in the `widgets.json` file.

By using `type: "endpoint"`, you'll need to specify an `optionsEndpoint` that returns the available options.

Below is an example of an advanced dropdown parameter that includes additional information for each option.

<img className="pro-border-gradient" width="800" alt="Advanced Dropdown Parameter Example" src="https://openbb-cms.directus.app/assets/9ae41bfc-65ad-4578-aeeb-efca97112bfc.png" />

The dropdown options are fetched from an endpoint and can include extra details.

```python
@app.get("/advanced_dropdown_options")
def advanced_dropdown_options():
    """Returns a list of stocks with their details"""
    return [
        {
            "label": "Apple Inc.",
            "value": "AAPL", 
            "extraInfo": {
                "description": "Technology Company",
                "rightOfDescription": "NASDAQ"
            }
        },
        {
            "label": "Microsoft Corporation",
            "value": "MSFT",
            "extraInfo": {
                "description": "Software Company", 
                "rightOfDescription": "NASDAQ"
            }
        },
        {
            "label": "Google",
            "value": "GOOGL",
            "extraInfo": {
                "description": "Search Engine",
                "rightOfDescription": "NASDAQ"
            }
        }
    ]
```

Note how the `optionsEndpoint` is `/advanced_dropdown_options`.

```python
@register_widget({
    "name": "Markdown Widget with Multi Select Advanced Dropdown",
    "description": "A markdown widget with a multi select advanced dropdown parameter",
    "endpoint": "markdown_widget_with_multi_select_advanced_dropdown",
    "gridData": {"w": 16, "h": 6},
    "type": "markdown",
    "params": [
        {
            "paramName": "stock_picker",
            "description": "Select a stock to analyze",
            "value": "AAPL",
            "label": "Select Stock",
            "type": "endpoint",
            "multiSelect": True,
            "optionsEndpoint": "/advanced_dropdown_options",
            "style": {
                "popupWidth": 450
            }
        }
    ]
})
@app.get("/markdown_widget_with_multi_select_advanced_dropdown")
def markdown_widget_with_multi_select_advanced_dropdown(stock_picker: str):
    """Returns a markdown widget with multi select advanced dropdown parameter"""
    return f"""# Multi Select Advanced Dropdown
Selected stocks: {stock_picker}
"""
```

## Dependent Dropdown Parameters

A widget that demonstrates how to create dependent dropdowns where the options in one dropdown depend on the selection in another dropdown. This is useful when you want to filter options in a second dropdown based on the selection in the first dropdown.

<img className="pro-border-gradient" width="800" alt="Dependent Dropdown Parameters Example" src="https://openbb-cms.directus.app/assets/4900061b-078a-4294-8d76-a36f55bbad80.png" />

<img className="pro-border-gradient" width="800" alt="Dependent Dropdown Parameters Example 2" src="https://openbb-cms.directus.app/assets/2f16ae18-78c4-4657-b569-8faed443fce1.png" />

First, we create an endpoint that will provide the filtered list of documents based on the selected category. This endpoint takes a `category` parameter and returns only the documents that match that category.

```python
@app.get("/document_options")
def get_document_options(category: str = "all"):
    """Get filtered list of documents based on category"""
    SAMPLE_DOCUMENTS = [
        {
            "name": "Q1 Report",
            "category": "reports"
        },
        {
            "name": "Q2 Report",
            "category": "reports"
        },
        {
            "name": "Investor Presentation",
            "category": "presentations"
        },
        {
            "name": "Product Roadmap",
            "category": "presentations"
        }
    ]

    filtered_docs = (
        SAMPLE_DOCUMENTS if category == "all"
        else [doc for doc in SAMPLE_DOCUMENTS if doc["category"] == category]
    )
    
    return [
        {
            "label": doc["name"],
            "value": doc["name"]
        }
        for doc in filtered_docs
    ]
```

Next, we create the widget that uses these dependent dropdowns. The widget has two parameters:
1. A category dropdown that lets users select between "All", "Reports", or "Presentations"
2. A document dropdown that shows documents filtered based on the selected category

The key to making this work is the `optionsParams` field in the second parameter, which uses `$category` to reference the value from the first parameter. This creates the dependency between the two dropdowns.

```python
@register_widget({
    "name": "Dropdown Dependent Widget",
    "description": "A simple widget with a dropdown depending on another dropdown",
    "endpoint": "dropdown_dependent_widget",
    "gridData": {"w": 16, "h": 6},
    "type": "markdown",
    "params": [
        {
            "paramName": "category",
            "description": "Category of documents to fetch",
            "value": "all",
            "label": "Category",
            "type": "text",
            "options": [
                {"label": "All", "value": "all"},
                {"label": "Reports", "value": "reports"},
                {"label": "Presentations", "value": "presentations"}
            ]
        },
        {
            "paramName": "document_type",
            "description": "Document to display",
            "label": "Select Document",
            "type": "endpoint",
            "optionsEndpoint": "/document_options",
            "optionsParams": {
                "category": "$category"
            }
        },
    ]
})
@app.get("/dropdown_dependent_widget")
def dropdown_dependent_widget(category: str = "all", document_type: str = "all"):
    """Returns a dropdown dependent widget"""
    return f"""# Dropdown Dependent Widget
- Selected category: **{category}**
- Selected document: **{document_type}**
"""
```

When a user selects a category in the first dropdown, the second dropdown will automatically update to show only the documents that belong to that category. For example:
- If "Reports" is selected, only "Q1 Report" and "Q2 Report" will appear in the second dropdown
- If "Presentations" is selected, only "Investor Presentation" and "Product Roadmap" will appear
- If "All" is selected, all documents will be shown

## Parameter Grouping

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

## Cell Click Grouping

A widget that demonstrates how to use cell clicks to trigger parameter updates across multiple widgets. This feature allows users to click on cells in a table to automatically update related widgets with the selected data.

<img className="pro-border-gradient" width="1000" alt="Cell Click Grouping Example" src="https://openbb-cms.directus.app/assets/9e3fe731-2a87-4c85-8650-0404c3c400b2.png" />

The implementation consists of three main components:

1. An endpoint that provides a list of available stock symbols that can be selected in the widgets.

```python
@app.get("/get_tickers_list")
def get_tickers_list():
    """Returns a list of available stock symbols"""
    return [
        {"label": "Apple Inc.", "value": "AAPL"},
        {"label": "Microsoft Corporation", "value": "MSFT"},
        {"label": "Google", "value": "GOOGL"},
        {"label": "Amazon", "value": "AMZN"},
        {"label": "Tesla", "value": "TSLA"}
    ]
```

2. A table widget that displays stock data and allows users to click on symbol cells to update related widgets. The key feature is the `cellOnClick` renderFn in the symbol column, which triggers the `groupBy` action when a cell is clicked.

```python
@register_widget({
    "name": "Table widget with grouping by cell click",
    "description": "A table widget that groups data when clicking on symbols. Click on a symbol to update all related widgets.",
    "type": "table",
    "endpoint": "table_widget_with_grouping_by_cell_click",
    "params": [
        {
            "paramName": "symbol",  # This parameter name is crucial - it's used for grouping
            "description": "Select stocks to display",
            "value": "AAPL",
            "label": "Symbol",
            "type": "endpoint",
            "optionsEndpoint": "/get_tickers_list",
            "multiSelect": False,
            "show": True
        }
    ],
    "data": {
        "table": {
            "showAll": True,
            "columnsDefs": [
                {
                    "field": "symbol",
                    "headerName": "Symbol",
                    "cellDataType": "text",
                    "width": 120,
                    "pinned": "left",
                    "renderFn": "cellOnClick",
                    "renderFnParams": {
                        "actionType": "groupBy",
                        "groupByParamName": "symbol"
                    }
                },
                {
                    "field": "price",
                    "headerName": "Price",
                    "cellDataType": "number",
                    "formatterFn": "none",
                    "width": 120
                },
                {
                    "field": "change",
                    "headerName": "Change",
                    "cellDataType": "number",
                    "formatterFn": "percent",
                    "renderFn": "greenRed",
                    "width": 120
                },
                {
                    "field": "volume",
                    "headerName": "Volume",
                    "cellDataType": "number",
                    "formatterFn": "int",
                    "width": 150
                }
            ]
        }
    },
    "gridData": {
        "w": 20,
        "h": 9
    }
})
```

3. A markdown widget that displays detailed information about the selected stock. This widget uses the same `symbol` parameter as the table widget, so it automatically updates when a symbol is clicked in the table.

```python
@register_widget({
    "name": "Widget managed by parameter from cell click on table widget",
    "description": "This widget demonstrates how to use the grouped symbol parameter from a table widget. When a symbol is clicked in the table, this widget will automatically update to show details for the selected symbol.",
    "type": "markdown",
    "endpoint": "widget_managed_by_parameter_from_cell_click_on_table_widget",
    "params": [
        {
            "paramName": "symbol",  # Must match the groupByParamName in the table widget
            "description": "The symbol to get details for",
            "value": "AAPL",
            "label": "Symbol",
            "type": "endpoint",
            "optionsEndpoint": "/get_tickers_list",
            "show": True
        }
    ],
    "gridData": {
        "w": 20,
        "h": 6
    }
})
```

This functionality is achieved through three key components:

1. Both widgets must share the same `paramName` (in this case "symbol") to enable parameter synchronization
2. The table widget's `cellOnClick` renderFn must be configured with `actionType: "groupBy"` and specify the `groupByParamName` as "symbol"
3. Both widgets must reference the same endpoint (`/get_tickers_list`) for their options data

The interaction flow works as follows:

1. When a user clicks a symbol cell in the table, the `cellOnClick` renderFn activates the `groupBy` action
2. The `groupBy` action then updates the shared `symbol` parameter value
3. Any widget that uses the `symbol` parameter will automatically refresh to display data for the newly selected symbol

This implementation creates an intuitive user experience where selecting a symbol in the table instantly updates all connected widgets with the corresponding stock information.
