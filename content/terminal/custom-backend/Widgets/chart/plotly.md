---
title: Plotly Charting Example
sidebar_position: 2
description: Learn how to integrate your own backend with OpenBB Terminal Pro using the cookie-cutter or language-agnostic API approaches, with illustrative guides and principles for handling widget.json files, APIs, interfaces, Python, FastAPI, and more.
keywords:
- widgets.json
- OpenBB API
- Endpoint integration
- widget configuration
- Language-Agnostic API
- API implementation
- Python
- FastAPI
- Terminal Pro widgets
- Widget definitions
---

# Introduction

This guide will walk you through the process of creating a chart widget for OpenBB Terminal Pro. We will be using Plotly to create the chart in our example. By the end of this guide, you will have a working chart widget that you can add to OpenBB Terminal Pro.

> **Prerequisite:** Ensure you have Python > 3.11 installed on your system before proceeding.

## Step 1: Set Up Your Project

To get started, create the main application file and the widget configuration file. You will only need these two files:

- `main.py`: This file will contain your FastAPI application code.
- `widgets.json`: This file will define the configuration for your widget.

## Step 2: Create the Backend

The backend will use the same FastAPI setup and structure as described in the [Custom Backend](/content/terminal/custom-backend/custom-backend.md) page.

### Edit the Main Application File

Edit the `main.py` file and add the following code. This code sets up a FastAPI application with an endpoint to serve the widget configuration and data for a chart:

```python
...
# Chart endpoint
@app.get("/chains")
def get_chains():
    """Fetch and display the current TVL of all chains using Defi Llama."""
    params = {}
    response = requests.get("https://api.llama.fi/v2/chains", params=params)

    if response.status_code == 200:
        # Create a DataFrame from the JSON data
        df = pd.DataFrame(response.json())

        # Sort the DataFrame by 'tvl' in descending order and select the top 30
        top_30_df = df.sort_values(by='tvl', ascending=False).head(30)

        # Create a bar chart using Plotly
        figure = go.Figure(
            data=[go.Bar(x=top_30_df["tokenSymbol"], y=top_30_df["tvl"])],
            layout=go.Layout(
                title="Top 30 Chains by TVL",
                xaxis_title="Token Symbol",
                yaxis_title="Total Value Locked (TVL)"
            )
        )

        # Return the Plotly JSON
        return json.loads(figure.to_json())

    print(f"Request error {response.status_code}: {response.text}")
    return JSONResponse(
        content={"error": response.text}, status_code=response.status_code
    )
```

### Edit the widgets.json File

Edit the `widgets.json` file and add the following JSON data. This configuration defines the widget's properties and how it should be displayed:

```json
{
  "chains_plotly": {
    "name": "Chains chart example",
    "description": "Get current TVL of all chains and plot it!",
    "category": "crypto",
    "searchCategory": "crypto",
    "type": "chart",
    "endpoint": "chains",
    "gridData": {
      "w": 20,
      "h": 9
    }
  }
}
```

For more information on the `widgets.json` file, see the [Widgets.json](/content/terminal/custom-backend/widgets.json) page.

## Step 3: Run the Application

Start the FastAPI Server using Uvicorn. This will host your backend locally:

```bash
uvicorn main:app --port 5050
```

## Step 4: Add to OpenBB Pro

Navigate to [OpenBB Pro Data Connectors](https://pro.openbb.co/app/data-connectors) and add your backend by clicking on the `+ Add Data` button in the top right corner. Select `Custom Backend` and fill in the details. Your URL will be `http://127.0.0.1:5050`.

Once you have added your backend, you can find the widget in the `Crypto` category with the name `Chains chart example`.

## Additional Resources

You can find more examples of how to set up your own backend in the [Backend for Terminal Pro GitHub](https://github.com/OpenBB-finance/backend-for-terminal-pro).