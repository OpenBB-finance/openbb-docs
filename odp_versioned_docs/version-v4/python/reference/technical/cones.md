---
title: "cones"
description: "Calculate realized volatility quantiles over rolling windows of time  using different volatility models. Understand the parameters and their effects,  such as index, quantile values, and is_crypto. Examples and code snippets provided."
keywords:
- realized volatility quantiles
- rolling windows of time
- calculate volatility
- parameter data
- quantile value
- volatility models
- standard deviation
- Parkinson volatility
- Garman-Klass volatility
- Hodges-Tompkins volatility
- Rogers-Satchell volatility
- Yang-Zhang volatility
- is_crypto
- cones data
- code example
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="technical/cones - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Calculate the realized volatility quantiles over rolling windows of time.

The cones indicator is designed to map out the ebb and flow of price movements through a detailed analysis of
volatility quantiles. By examining the range of volatility within specific time frames, it offers a nuanced view of
market behavior, highlighting periods of stability and turbulence.

The model for calculating volatility is selectable and can be one of the following:
- Standard deviation
- Parkinson
- Garman-Klass
- Hodges-Tompkins
- Rogers-Satchell
- Yang-Zhang

Read more about it in the model parameter description.

Examples
--------

```python
from openbb import obb
# Realized Volatility Cones.
stock_data = obb.equity.price.historical(symbol='TSLA', start_date='2023-01-01', provider='yfinance')
cones_data = obb.technical.cones(data=stock_data.results, lower_q=0.25, upper_q=0.75, model='std')
obb.technical.cones(data='[{'date': '2023-01-02', 'open': 110.0, 'high': 120.0, 'low': 100.0, 'close': 115.0, 'volume': 10000.0}, {'date': '2023-01-03', 'open': 165.0, 'high': 180.0, 'low': 150.0, 'close': 172.5, 'volume': 15000.0}, {'date': '2023-01-04', 'open': 146.67, 'high': 160.0, 'low': 133.33, 'close': 153.33, 'volume': 13333.33}, {'date': '2023-01-05', 'open': 137.5, 'high': 150.0, 'low': 125.0, 'close': 143.75, 'volume': 12500.0}, {'date': '2023-01-06', 'open': 132.0, 'high': 144.0, 'low': 120.0, 'close': 138.0, 'volume': 12000.0}]')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**data**: `ForwardRef('Data') | ForwardRef('DataFrame') | ForwardRef('Series') | ForwardRef('ndarray') | dict | list`<br/>
The data to use for the calculation.

**index**: `str`<br/>
*Default:* date<br/>
Index column name to use with `data`, by default "date"

**lower_q**: `float`<br/>
*Default:* 0.25<br/>
The lower quantile value for calculations

**upper_q**: `float`<br/>
*Default:* 0.75<br/>
The upper quantile value for calculations

**model**: `Literal['std', 'parkinson', 'garman_klass', 'hodges_tompkins', 'rogers_satchell', 'yang_zhang']`<br/>
*Default:* std<br/>
The model used to calculate realized volatility Standard deviation measures how widely returns are dispersed from the average return. It is the most common (and biased) estimator of volatility. Parkinson volatility uses the high and low price of the day rather than just close to close prices. It is useful for capturing large price movements during the day. Garman-Klass volatility extends Parkinson volatility by taking into account the opening and closing price. As markets are most active during the opening and closing of a trading session; it makes volatility estimation more accurate. Hodges-Tompkins volatility is a bias correction for estimation using an overlapping data sample. It produces unbiased estimates and a substantial gain in efficiency. Rogers-Satchell is an estimator for measuring the volatility with an average return not equal to zero. Unlike Parkinson and Garman-Klass estimators, Rogers-Satchell incorporates a drift term, mean return not equal to zero. Yang-Zhang volatility is the combination of the overnight (close-to-open volatility). It is a weighted average of the Rogers-Satchell volatility and the open-to-close volatility.

**is_crypto**: `bool`<br/>
*Default:* False<br/>
Whether the data is crypto or not. If True, volatility is calculated for 365 days instead of 252

**trading_periods**: `int | None`<br/>
Number of trading periods in a year.

**chart**: `bool`<br/>
*Default:* False<br/>
Whether to create a chart or not, by default False.

</TabItem>
</Tabs>

---

## Returns

**results**: `list[Data]`

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
