---
title: TradingView Charts
sidebar_position: 15
description: How to implement TradingView charts in OpenBB using UDF (Universal Data Feed)
keywords:
- tradingview
- charts
- visualization
- UDF
- data feed
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="TradingView Charts | OpenBB Workspace Docs" />

This guide explains how to implement TradingView charts in OpenBB using TradingView's Universal Data Feed (UDF) protocol. The UDF protocol allows you to create custom data feeds for TradingView charts.

## Prerequisites

1. FastAPI or similar web framework for implementing the UDF endpoints
2. Data source for market data (OHLCV)

## Required UDF Endpoints

To implement TradingView charts, you need to create the following UDF endpoints:

### 1. Configuration Endpoint (`/udf/config`)

```python
@app.get("/udf/config")
async def get_config():
    """UDF configuration endpoint"""
    return {
        "supported_resolutions": ["1", "5", "15", "30", "60", "D", "W", "M"],
        "supports_group_request": False,
        "supports_marks": False,
        "supports_search": True,
        "supports_timescale_marks": False,
        "supports_time": True,
        "exchanges": [
            {"value": "", "name": "All Exchanges", "desc": ""},
            {"value": "NASDAQ", "name": "NASDAQ", "desc": "NASDAQ Stock Exchange"}
        ],
        "symbols_types": [
            {"name": "All types", "value": ""},
            {"name": "Stocks", "value": "stock"}
        ]
    }
```

### 2. Symbol Search Endpoint (`/udf/search`)

```python
@app.get("/udf/search")
async def search_symbols(
    query: str = Query("", description="Search query"),
    limit: int = Query(30, description="Limit of results")
):
    """UDF symbol search endpoint"""
    results = []
    # Implement your symbol search logic here
    return results
```

### 3. Symbol Info Endpoint (`/udf/symbols`)

```python
@app.get("/udf/symbols")
async def get_symbol_info(symbol: str = Query(..., description="Symbol to get info for")):
    """UDF symbol info endpoint"""
    return {
        "name": symbol,
        "description": "Symbol Description",
        "type": "stock",
        "exchange": "NASDAQ",
        "pricescale": 100,
        "minmov": 1,
        "volume_precision": 0,
        "has_volume": True,
        "has_intraday": True,
        "has_daily": True,
        "has_weekly_and_monthly": True,
        "supported_resolutions": ["1", "5", "15", "30", "60", "D", "W", "M"],
        "session-regular": "0930-1600",
        "timezone": "America/New_York"
    }
```

### 4. Historical Data Endpoint (`/udf/history`)

```python
@app.get("/udf/history")
async def get_history(
    symbol: str = Query(..., description="Symbol"),
    resolution: str = Query(..., description="Resolution"),
    from_time: int = Query(..., alias="from", description="From timestamp"),
    to_time: int = Query(..., alias="to", description="To timestamp")
):
    """UDF historical data endpoint"""
    # Implement your data fetching logic here
    return {
        "s": "ok",
        "t": [timestamp1, timestamp2, ...],  # Time array
        "o": [open1, open2, ...],  # Open prices array
        "h": [high1, high2, ...],  # High prices array
        "l": [low1, low2, ...],  # Low prices array
        "c": [close1, close2, ...],  # Close prices array
        "v": [volume1, volume2, ...]  # Volume array
    }
```

### 5. Server Time Endpoint (`/udf/time`)

```python
@app.get("/udf/time")
async def get_server_time():
    """UDF server time endpoint"""
    return int(datetime.now().timestamp())
```

## Widget Registration

To register the TradingView chart widget in OpenBB:

```python
@register_widget({
    "name": "TradingView Chart",
    "description": "Advanced charting with TradingView",
    "category": "Finance",
    "type": "advanced_charting",
    "endpoint": "/udf",
    "gridData": {
        "w": 20,
        "h": 20
    },
    "data": {
        "defaultSymbol": "AAPL",
        "updateFrequency": 60000,
        }
    }
})
def tradingview_chart():
    """Dummy function for TradingView chart widget registration"""
    pass

```

## Data Format Requirements

The historical data endpoint must return data in the following format:

```python
{
    "s": "ok",  # Status: ok
    "t": [timestamp1, timestamp2, ...],  # Time array (Unix timestamps)
    "o": [open1, open2, ...],  # Open prices array
    "h": [high1, high2, ...],  # High prices array
    "l": [low1, low2, ...],  # Low prices array
    "c": [close1, close2, ...],  # Close prices array
    "v": [volume1, volume2, ...]  # Volume array
}
```

## Best Practices

1. **Error Handling**: Implement proper error handling for all endpoints
2. **Data Validation**: Validate all input parameters
3. **Caching**: Implement caching for frequently accessed data
4. **Rate Limiting**: Add rate limiting to prevent abuse
5. **Security**: Implement proper authentication and authorization
6. **Performance**: Optimize data fetching and processing
7. **Documentation**: Document all endpoints and their parameters

## Example Implementation

Here's a complete example of implementing the historical data endpoint with mock data:

```python
def generate_mock_price_data(symbol: str, from_time: int, to_time: int, resolution: str) -> dict:
    """Generate mock OHLCV data for a symbol"""
    resolution_minutes = {
        "1": 1, "5": 5, "15": 15, "30": 30, "60": 60,
        "D": 1440, "W": 10080, "M": 43200
    }.get(resolution, 60)

    current_time = from_time
    timestamps = []
    while current_time <= to_time:
        timestamps.append(current_time)
        current_time += resolution_minutes * 60

    base_price = 100.0
    prices = []
    current_price = base_price

    for _ in timestamps:
        change = random.uniform(-2, 2)
        current_price += change
        current_price = max(current_price, 1.0)
        prices.append(current_price)

    opens = []
    highs = []
    lows = []
    closes = []
    volumes = []

    for price in prices:
        is_bullish = random.random() > 0.5
        if is_bullish:
            open_price = price * 0.99
            close_price = price * 1.01
        else:
            open_price = price * 1.01
            close_price = price * 0.99

        high_price = max(open_price, close_price) * 1.02
        low_price = min(open_price, close_price) * 0.98

        opens.append(open_price)
        highs.append(high_price)
        lows.append(low_price)
        closes.append(close_price)

        volume = int(1000000 * (1 + random.uniform(-0.2, 0.2)))
        volumes.append(volume)

    return {
        "s": "ok",
        "t": timestamps,
        "o": opens,
        "h": highs,
        "l": lows,
        "c": closes,
        "v": volumes
    }
```

## Additional Resources

- [TradingView Charting Library Documentation](https://www.tradingview.com/charting-library-docs/)
- [UDF Protocol Documentation](https://www.tradingview.com/charting-library-docs/latest/connecting_data/UDF)

The charting technology is provided by TradingView — a platform for traders and investors offering real-time market data, crypto heatmaps, screeners, and other professional tools, making it easy to follow Bitcoin, [Ethereum price](https://www.tradingview.com/symbols/ETHUSD/), and charts for any other asset.