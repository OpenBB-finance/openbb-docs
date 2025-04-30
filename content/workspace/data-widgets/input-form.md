---
title: Input Form
sidebar_position: 17
description: Input Form
keywords:
- input
- form
- configuration
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Input Form | OpenBB Workspace Docs" />


The form parameter type (`"type": "form"`) allows you to create complex input forms with a parameter. This is useful if you want to update some data that is tied to the table or chart and have it update when the form is submitted. Possible use cases are updating a database entry or sending data to an endpoint to be processed then a chart created.

Forms require a dedicated endpoint and are always sent with a POST request. This endpoint will be called when the form is submitted.

You can see a full example of this in the [Form Example](https://github.com/OpenBB-finance/backend-examples-for-openbb-workspace/tree/main/advanced_examples/form_parameter) section.

<img className="pro-border-gradient" width="500" alt="form-parameter" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/form-parameter.png" />

A form can include various input types:

- **Date**: Select a specific date for the data
- **Number**: Numeric input field
- **Dropdown**: Selection menu (can be populated dynamically from an API)
- **Text**: Text input field
- **Button**: Button to trigger the data submission

<details>
<summary mdxType="summary">Example form parameter configuration</summary>

```json
{
  "form_submit_widget": {
    "name": "Financial Entry Form",
    "description": "Example of a financial data entry form",
    "category": "forms",
    "searchCategory": "form",
    "endpoint": "all_forms",
    "type": "table",
    "gridData": {
      "w": 20,
      "h": 9
    },
    "params": [
      {
        "paramName": "form",
        "description": "Form example",
        "type": "form",
        "endpoint": "form_submit",
        "inputParams": [
          {
            "paramName": "client_first_name",
            "type": "text",
            "value": "",
            "label": "First Name",
            "description": "Client's first name"
          },
          {
            "paramName": "client_last_name",
            "type": "text",
            "value": "",
            "label": "Last Name",
            "description": "Client's last name"
          },
          {
            "paramName": "investment_types",
            "type": "text",
            "value": null,
            "label": "Investment Types",
            "description": "Selected investment vehicles",
            "multiSelect": true,
            "options": [
              {
                "label": "Stocks",
                "value": "stocks"
              },
              {
                "label": "Bonds",
                "value": "bonds"
              },
              {
                "label": "Mutual Funds",
                "value": "mutual_funds"
              },
              {
                "label": "ETFs",
                "value": "etfs"
              },
              {
                "label": "Real Estate",
                "value": "real_estate"
              },
              {
                "label": "Commodities",
                "value": "commodities"
              },
              {
                "label": "Cryptocurrency",
                "value": "cryptocurrency"
              },
              {
                "label": "Options",
                "value": "options"
              },
              {
                "label": "Futures",
                "value": "futures"
              },
              {
                "label": "Retirement Accounts",
                "value": "retirement_accounts"
              },
              {
                "label": "CDs",
                "value": "cds"
              }
            ]
          },
          {
            "paramName": "risk_profile",
            "type": "text",
            "value": "",
            "label": "Risk Profile",
            "description": "Client risk tolerance assessment"
          },
          {
            "paramName": "add_record",
            "type": "button",
            "value": true,
            "label": "Add Client",
            "description": "Add client record"
          },
          {
            "paramName": "update_record",
            "type": "button",
            "value": true,
            "label": "Update Client",
            "description": "Update client record"
          }
        ]
      }
    ]
  }
}
```

</details>

### Backend Implementation

For forms to work properly, you need to implement two endpoints in your backend:

1. **POST endpoint** to handle form submission (specified in the `endpoint` field of the form parameter)
2. **GET endpoint** to retrieve and display the updated data (specified in the widget's main `endpoint` field)

Below you can find a quick example of how to implement the endpoints and have a form that updates a table.

<details>
<summary mdxType="summary">Example backend implementation</summary>

```python
...
ALL_FORMS = []

# Submit form endpoint to handle the form submission
@app.post("/form_submit")
async def form_submit(params: dict) -> JSONResponse:
    global ALL_FORMS
    
    # Check if first name and last name are provided
    if not params.get("client_first_name") or not params.get("client_last_name"):
        # IMPORTANT: Even with a 400 status code, the error message is passed to the frontend
        # and can be displayed to the user in the OpenBB widget
        return JSONResponse(
            status_code=400,
            content={"error": "Client first name and last name are required"}
        )
    
    # Check if investment types and risk profile are provided
    if not params.get("investment_types") or not params.get("risk_profile"):
        return JSONResponse(
            status_code=400,
            content={"error": "Investment types and risk profile are required"}
        )

    # Check if add_record or update_record is provided
    add_record = params.pop("add_record", None)
    if add_record:
        ALL_FORMS.append(
            {k: ",".join(v) if isinstance(v, list) else v for k, v in params.items()}
        )
    update_record = params.pop("update_record", None)
    if update_record:
        for record in ALL_FORMS:
            if record["client_first_name"] == params.get("client_first_name") and record[
                "client_last_name"
            ] == params.get("client_last_name"):
                record.update(params)
    
    # IMPORTANT: The OpenBB Workspace only checks for a 200 status code from this endpoint
    # The actual content returned doesn't matter for the widget refresh mechanism
    # After a successful submission, Workspace will automatically refresh the widget
    # by calling the GET endpoint defined in the widget configuration
    return JSONResponse(content={"success": True})


# Get all forms
@app.get("/all_forms")
async def all_forms() -> list:
    print(ALL_FORMS)
    # IMPORTANT: This GET endpoint is called by the OpenBB widget after form submission
    # The widget refresh mechanism works by:
    # 1. User submits form (POST to /form_submit)
    # 2. If POST returns 200, widget automatically refreshes
    # 3. Widget refresh calls this GET endpoint to fetch updated data
    # 4. This function must return ALL data needed to display the updated widget
    return (
        ALL_FORMS
        if ALL_FORMS
        else [
            {"client_first_name": None, "client_last_name": None, "investment_types": None, "risk_profile": None}
        ]
    )
```

</details>
