---
title: Live Grid
sidebar_position: 4
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

# Live Grid Widget

This guide will walk you through the process of creating a live grid widget for OpenBB Terminal Pro. By the end of this guide, you will have a working live grid widget that can display real-time data updates for a table. The live grid widget can be configured to only update certain cells when their values change or all of the cells.

## Step 1: Set Up Your Project

To get started, create the main application file and the widget configuration file. You will only need these two files:

- `main.py`: This file will contain your FastAPI application code.
- `widgets.json`: This file will define the configuration for your widget.

The backend will use the same FastAPI setup and structure as described in the [Custom Backend](/content/workspace/custom-backend/custom-backend.md) page.

## Step 2: Create the Live Feed Endpoints

Edit the `main.py` file and add the following code. This sets up both a REST endpoint for initial data and a WebSocket endpoint for live updates:

```python
from fastapi import APIRouter, WebSocket, WebSocketDisconnect, HTTPException
from fastapi.websockets import WebSocketState
import numpy as np
import asyncio
from typing import List
from datetime import datetime


# Sample data store
WS_DATA = {
    "AAPL": {
        "price": 150.0,
        "prev_close": 145.54,
        "volume": 1000000,
        "change": 4.46,
        "change_percent": 0.03,
    },
    # ... other symbols ...
}

def get_ws_data(symbol: str):
    """Generate real-time data for a symbol"""
    data = WS_DATA.get(symbol, {"price": 100.0, "prev_close": 100.0, "volume": 1000000})
    
    price = data["price"] + np.random.uniform(-10, 10)
    volume = data["volume"] + np.random.randint(100, 1000)
    change = price - data["prev_close"]
    change_percent = change / data["prev_close"]
    
    WS_DATA[symbol].update(dict(price=price, volume=volume))
    
    return {
        "symbol": symbol,
        "price": price,
        "change": change,
        "change_percent": change_percent,
        "volume": volume,
    }

# Live Feed Initial Data Endpoint (This sets the initial data for the widget + allows Copilot to grab the data)
@app.get("/test_websocket")
def test_websocket(symbol: str):
    """Initial data endpoint"""
    symbols = symbol.split(",")
    return [
        {
            "date": datetime.now().date(),
            **get_ws_data(symbol),
            "market_cap": np.random.randint(1000000000, 2000000000),
        }
        for symbol in symbols
    ]

# Live Feed WebSocket Endpoint
@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    """WebSocket endpoint for live updates"""
    await websocket.accept()
    try:
        await websocket_handler(websocket)
    except WebSocketDisconnect:
        return
    except Exception as e:
        await websocket.close(code=1011)
        raise HTTPException(status_code=500, detail=str(e))

# Sample WebSocket Handler
async def websocket_handler(websocket: WebSocket):
    subbed_symbols: set[str] = set()

    async def consumer_handler(ws: WebSocket):
        try:
            async for data in ws.iter_json():
                if symbols := data.get("params", {}).get("symbol"):
                    if isinstance(symbols, str):
                        symbols = symbols.split(",")

                    subbed_symbols.clear()
                    subbed_symbols.update(set(symbols))

        except WebSocketDisconnect:
            pass
        except RuntimeError:
            await ws.close()

    async def producer_handler(ws: WebSocket):
        try:
            while websocket.client_state != WebSocketState.DISCONNECTED:
                current_symbols = list(subbed_symbols)
                np.random.shuffle(current_symbols)

                for symbol in current_symbols:
                    await ws.send_json(get_ws_data(symbol))
                    await asyncio.sleep(np.random.uniform(0.5, 0.8))

                await asyncio.sleep(np.random.uniform(0.1, 0.3))

        except WebSocketDisconnect:
            pass
        except RuntimeError:
            await ws.close()

    consumer_task = asyncio.create_task(consumer_handler(websocket))
    producer_task = asyncio.create_task(producer_handler(websocket))

    done, pending = await asyncio.wait(
        [consumer_task, producer_task], return_when=asyncio.FIRST_COMPLETED
    )

    for task in pending:
        task.cancel()
```

### Edit the widgets.json File

Open the `widgets.json` file and add the following configuration:

```json
{
  "live_grid_example": {
    "name": "Live Grid",
    "description": "Live Grid",
    "type": "live_grid",
    "endpoint": "test_websocket",
    "wsEndpoint": "ws",
    "data": {
      "wsRowIdColumn": "symbol",
      "table": {
        "showAll": true,
        "columnsDefs": [
          {
            "field": "symbol",
            "headerName": "Symbol"
          },
          {
            "field": "price",
            "headerName": "Price",
            "renderFn": "showCellChange",
            "renderFnParams": {
              "colorValueKey": "change"
            }
          },
          {
            "field": "change_percent",
            "headerName": "Change %",
            "renderFn": "greenRed"
          },
          {
            "field": "volume",
            "enableCellChangeWs": false,
            "headerName": "Volume"
          }
        ]
      }
    },
    "params": [
      {
        "paramName": "symbol",
        "description": "The symbol to get details for",
        "value": "TSLA",
        "label": "Symbol",
        "type": "text",
        "multiSelect": true,
        "options": [
          {"label": "AAPL", "value": "AAPL"},
          {"label": "GOOGL", "value": "GOOGL"},
          {"label": "MSFT", "value": "MSFT"},
          {"label": "AMZN", "value": "AMZN"},
          {"label": "TSLA", "value": "TSLA"}
        ]
      }
    ],
    "gridData": {
      "w": 20,
      "h": 9
    }
  }
}
```

A few key points:

- The `endpoint` is the endpoint that will be used to get the initial data for the widget.
- The `wsEndpoint` is the endpoint that will be used to get the live updates for the widget.
- The `enableCellChangeWs` is a boolean that will be used to determine if the cell change will be sent over the WebSocket. Use this to prevent the cell from being updated over the WebSocket. By default, it is set to `true` for fields that are sent in the websocket and appear in the data. The only field that is special here is the `wsRowIdColumn` which is the column that will be used to identify the row.
- The `wsRowIdColumn` is the column that will be used to identify the row. This is important to set correctly to ensure the live updates are displayed correctly. This the key between your ws and the initial data.
- The `renderFn` is the function that will be used to render the cell. You can find more information on the [Render Functions](/content/workspace/custom-backend/advanced-controls/render-functions.md) page. In our case we are using a custom function `showCellChange` to display the change in price and providing the key to use.

## Step 3: Run the Application

Start the FastAPI Server using Uvicorn. This will host your backend locally:

```bash
uvicorn main:app --host localhost --port 5050
```

## Step 4: Add to OpenBB Pro

Navigate to [OpenBB Pro Data Connectors](https://pro.openbb.co/app/data-connectors) and add your backend by clicking on the `+ Add Data` button in the top right corner. Select `Custom Backend` and fill in the details. Your URL will be `http://localhost:5050`.

Once you have added your backend, you can find the widget in the default category with the name `Live Grid`. The widget will display real-time price updates for the selected symbols.

<img className="pro-border-gradient" width="600" alt="live-feed" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/live_grid.png" />

## Additional Resources

You can find more examples of how to set up your own backend in the [Backend for Terminal Pro GitHub](https://github.com/OpenBB-finance/backend-for-terminal-pro).