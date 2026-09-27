---
title: "stdev"
description: "Calculate the rolling standard deviation of a target column"
keywords:
- quantitative
- stats
- stdev
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="quantitative/stats/stdev - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Calculate the rolling standard deviation of a target column.

Standard deviation is a measure of the amount of variation or dispersion of a set of values.
It is widely used to assess the risk and volatility of financial returns or other time series data
It is the square root of the variance.

Examples
--------

```python
from openbb import obb
# Get Standard Deviation.
stock_data = obb.equity.price.historical(symbol="TSLA", start_date="2023-01-01", provider="fmp").to_df()
returns = stock_data["close"].pct_change().dropna()
obb.quantitative.stats.stdev(data=returns, target="close")
obb.quantitative.stats.stdev(target='close', data='[{'date': '2023-01-02', 'close': 0.05}, {'date': '2023-01-03', 'close': 0.08}, {'date': '2023-01-04', 'close': 0.07}, {'date': '2023-01-05', 'close': 0.06}, {'date': '2023-01-06', 'close': 0.06}]')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**data**: `ForwardRef('Data') | ForwardRef('DataFrame') | ForwardRef('Series') | ForwardRef('ndarray') | dict | list`<br/>
The time series data as a list of data points.

**target**: `str`<br/>
The name of the column for which to calculate standard deviation.

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
