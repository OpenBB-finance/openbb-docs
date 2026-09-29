---
title: "relative_rotation"
description: "Calculate the Relative Strength Ratio and Relative Strength Momentum for a group of symbols against a benchmark"
keywords:
- technical
- relative_rotation
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="technical/relative_rotation - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Calculate the Relative Strength Ratio and Relative Strength Momentum for a group of symbols against a benchmark.

Examples
--------

```python
from openbb import obb
# Calculate the Relative Strength Ratio and Relative Strength Momentum for a group of symbols against a benchmark.
stock_data = obb.equity.price.historical(symbol='AAPL,MSFT,GOOGL,META,AMZN,TSLA,SPY', start_date='2022-01-01', provider='yfinance')
rr_data = obb.technical.relative_rotation(data=stock_data.results, benchmark='SPY')
rs_ratios = rr_data.results.rs_ratios
rs_momentum = rr_data.results.rs_momentum
# When the assets are not traded 252 days per year,adjust the momentum and volatility periods accordingly.
crypto_data = obb.crypto.price.historical( symbol='BTCUSD,ETHUSD,SOLUSD', start_date='2021-01-01', provider='yfinance')
rr_data = obb.technical.relative_rotation(data=crypto_data.results, benchmark='BTC-USD', long_period=365, short_period=30, window=30, trading_periods=365)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**data**: `ForwardRef('Data') | ForwardRef('DataFrame') | ForwardRef('Series') | ForwardRef('ndarray') | dict | list`<br/>
The data to be used for the relative rotation calculations. This should be the multi-symbol output from the 'equity.price.historical' endpoint, or similar. Or a pivot table with the 'date' column as the index, the symbols as the columns, and the 'study' as the values. It is recommended to use the 'equity.price.historical' endpoint to get the data, and feed the results as-is.

**benchmark**: `str`<br/>
The symbol to be used as the benchmark.

**study**: `Literal['price', 'volume', 'volatility']`<br/>
*Default:* price<br/>
The data point for the calculations. If 'price', the closing price will be used. If 'volatility', the standard deviation of the closing price will be used. If 'data' is supplied as a pivot table, the 'study' will assume the values are the closing price and 'volume' will be ignored.

**long_period**: `int | None`<br/>
*Default:* 252<br/>
The length of the long period for momentum calculation, by default 252. Adjust this value when supplying a time series with an interval that is not daily. For example, if the data is monthly, the long period should be 12.

**short_period**: `int | None`<br/>
*Default:* 21<br/>
The length of the short period for momentum calculation, by default 21. Adjust this value when supplying a time series with an interval that is not daily.

**window**: `int | None`<br/>
*Default:* 21<br/>
The length of window for the standard deviation calculation, by default 21. Adjust this value when supplying a time series with an interval that is not daily.

**trading_periods**: `int | None`<br/>
*Default:* 252<br/>
The number of trading periods per year, for the standard deviation calculation, by default 252. Adjust this value when supplying a time series with an interval that is not daily.

**chart_params**: `dict[str, Any] | None`<br/>
Additional parameters to pass when `chart=True` and the `openbb-charting` extension is installed. Parameters can be passed again to redraw the chart using the charting.to_chart() method of the response. ChartParams -----------

**chart**: `bool`<br/>
*Default:* False<br/>
Whether to create a chart or not, by default False.

</TabItem>
</Tabs>

---

## Returns

**results**: `RelativeRotationData`

Serializable results.

**provider**: `str`

Provider name.

**warnings**: `Optional[list[Warning_]]`

list of warnings.

**chart**: `Optional[Chart]`

Chart object.

**extra**: `dict[str, Any]`

Extra info.

---
