---
title: Dependent Dropdown
sidebar_position: 26
description: Learn how to implement and use dependent dropdown parameters in OpenBB Workspace widgets, where options in one dropdown depend on the selection in another
keywords:
- dependent dropdown
- cascading dropdown
- linked dropdown
- widget parameters
- dynamic options
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Dependent Dropdown | OpenBB Workspace Docs" />

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

The key to making this work is the `optionsParams` field in the second parameter, which uses `$category` to reference the value from the first parameter. This creates the dependency between the two dropdowns. These parameters are passed to the endpoint as a query parameter.

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