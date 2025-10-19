---
title: Technical Indicators
sidebar_position: 2
description: A tutorial of the technical indicators included with the openbb-charting library, including how to get started using them.
keywords:
- tutorial
- OpenBB Platform
- getting started
- extensions
- charting
- view
- Plotly
- toolkits
- indicators
- Plotly
- OpenBBFigure
- PyWry
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Technical Indicators - OpenBB Charting | OpenBB Platform Docs" />

Select indicators (technical) can be added to a chart where the data is OHLC+V prices over time, and the data is for one symbol only.
They are meant as quick visualizations, and a way to build more complex charts.
As starting points, they can be refined to perfection by manipulating the figure object directly.

```python
from datetime import datetime, timedelta
from openbb import obb
data = obb.equity.price.historical(
    "TSLA",
    provider="yfinance",
    interval="15m",
    start_date=(datetime.now()-timedelta(days=21)).date(),
    chart=True,
    chart_params=dict(
        heikin_ashi=True,
        indicators=(dict(
            ema=dict(length=[8,32]),
            srlines={}, # For indicators, an empty dictionary implies the default state.
            rsi=dict(length=32)
        ))
    )
)
data.show()
```

![TSLA Intraday With Indicators](https://github.com/OpenBB-finance/OpenBB/assets/85772166/7d8d95d8-0383-4e9d-9477-7ad2424328df)

## Available Indicators

To get all the indicators, use the `charting.indicators()` method.
The object returned is a Pydantic model where each indicator is field.
If you don't catch it, it will print as a docstring to the console.

```python
data.charting.indicators()
```

<details>
<summary mdxType="summary">Indicator Details</summary>

```console
SMA:
    length : Union[int, list[int]]
        Window length for the moving average, by default is 50.
        The number is relative to the interval of the time series data.
    offset : int
        Number of periods to offset for the moving average, by default is 0.

EMA:
    length : Union[int, list[int]]
        Window length for the moving average, by default is 50.
        The number is relative to the interval of the time series data.
    offset : int
        Number of periods to offset for the moving average, by default is 0.

HMA:
    length : Union[int, list[int]]
        Window length for the moving average, by default is 50.
        The number is relative to the interval of the time series data.
    offset : int
        Number of periods to offset for the moving average, by default is 0.

WMA:
    length : Union[int, list[int]]
        Window length for the moving average, by default is 50.
        The number is relative to the interval of the time series data.
    offset : int
        Number of periods to offset for the moving average, by default is 0.

ZLMA:
    length : Union[int, list[int]]
        Window length for the moving average, by default is 50.
        The number is relative to the interval of the time series data.
    offset : int
        Number of periods to offset for the moving average, by default is 0.

AD:
    offset : int
        Offset value for the AD, by default is 0.

AD Oscillator:
    fast : int
        Number of periods to use for the fast calculation, by default 3.
    slow : int
        Number of periods to use for the slow calculation, by default 10.
    offset : int
        Offset to be used for the calculation, by default is 0.

ADX:
    length : int
        Window length for the ADX, by default is 50.
    scalar : float
        Scalar to multiply the ADX by, default is 100.
    drift : int
        Drift value for the ADX, by default is 1.

Aroon:
    length : int
        Window length for the Aroon, by default is 50.
    scalar : float
        Scalar to multiply the Aroon by, default is 100.

ATR:
    length : int
        Window length for the ATR, by default is 14.
    mamode : Literal[rma, ema, sma, wma]
        The mode to use for the moving average calculation.
    drift : int
        The difference period.
    offset : int
        Number of periods to offset the result, by default is 0.

CCI:
    length : int
        Window length for the CCI, by default is 14.
    scalar : float
        Scalar to multiply the CCI by, default is 0.015.

Clenow:
    period : int
        The number of periods for the momentum, by default 90.

Demark:
    show_all : bool
        Show 1 - 13.
        If set to False, show 6 - 9.
    offset : int
        Number of periods to offset the result, by default is 0.

Donchian:
    lower : Union[int, NoneType]
        Window length for the lower band, by default is 20.
    upper : Union[int, NoneType]
        Window length for the upper band, by default is 20.
    offset : Union[int, NoneType]
        Number of periods to offset the result, by default is 0.

Fib:
    period : int
        The period to calculate the Fibonacci Retracement, by default 120.
    start_date : Union[str, NoneType]
        The start date for the Fibonacci Retracement.
    end_date : Union[str, NoneType]
        The end date for the Fibonacci Retracement.

Fisher:
    length : int
        Window length for the Fisher Transform, by default is 14.
    signal : int
        Fisher Signal Period

Ichimoku:
    conversion : int
        The conversion line period, by default 9.
    base : int
        The base line period, by default 26
    lagging : int
        The lagging line period, by default 52.
    offset : int
        The offset period, by default 26.
    lookahead : bool
        Drops the Chikou Span Column to prevent potential data leak

KC:
    length : int
        Window length for the Keltner Channel, by default is 20.
    scalar : float
        Scalar to multiply the ATR, by default is 2.
    mamode : Literal[ema, sma, wma, hna, zlma, rma]
        The mode to use for the moving average calculation, by default is ema.
    offset : int
        Number of periods to offset the result, by default is 0.

MACD:
    fast : Union[int, NoneType]
        Window length for the fast EMA, by default is 12.
    slow : Union[int, NoneType]
        Window length for the slow EMA, by default is 26.
    signal : Union[int, NoneType]
        Window length for the signal line, by default is 9.
    scalar : Union[float, NoneType]
        Scalar to multiply the MACD by, default is 100.

OBV:
    offset : int
        Number of periods to offset the result, by default is 0.

RSI:
    length : int
        Window length for the RSI, by default is 14.
    scalar : float
        Scalar to multiply the RSI by, default is 100.
    drift : int
        Drift value for the RSI, by default is 1.

SRLines:
    show : bool
        Show the support and resistance lines.

Stoch:
    fast_k : int
        The fast K period, by default 14.
    slow_d : int
        The slow D period, by default 3.
    slow_k : int
        The slow K period, by default 3.
```
</details>

The model can be converted to a dictionary and then passed through the `indicators` params.

:::warning
Some indicators, like RSI and MACD, create subplots. Only 4 subplots (not including the main candles + volume) can be created within the same view.
:::

The chart below is built from the same object as the one above.

```python
indicators = data.charting.indicators().dict()
macd=indicators.get("macd")
kc=indicators.get("kc")
chart_params=dict(
    candles=False,
    title="My New Chart",
    indicators=(dict(
        macd=macd,
        kc=kc,
    ))
)
data.charting.to_chart(**chart_params)
```

![indicators2](https://github.com/OpenBB-finance/OpenBB/assets/85772166/76c06aff-a568-4b7f-80d4-c58a73c0f1d7)

:::tip
Data can be exported directly from the chart as a CSV. Use the button at the bottom-right of the mode bar.
:::
