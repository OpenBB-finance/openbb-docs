---
title: "skew"
description: "Get Rolling Skew"
keywords:
- quantitative
- rolling
- skew
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="quantitative/rolling/skew - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get Rolling Skew.

Skew is a statistical measure that reveals the degree of asymmetry of a distribution around its mean.
Positive skewness indicates a distribution with an extended tail to the right, while negative skewness shows a tail
that stretches left. Understanding skewness can provide insights into potential biases in data and help anticipate
the nature of future data points. It's particularly useful for identifying the likelihood of extreme outcomes in
financial returns, enabling more informed decision-making based on the distribution's shape over a specified period.

Examples
--------

```python
from openbb import obb
# Get Rolling Mean.
stock_data = obb.equity.price.historical(symbol="TSLA", start_date="2023-01-01", provider="fmp").to_df()
returns = stock_data["close"].pct_change().dropna()
obb.quantitative.rolling.skew(data=returns, target="close")
obb.quantitative.rolling.skew(target='close', window=2, data='[{'date': '2023-01-02', 'close': 0.05}, {'date': '2023-01-03', 'close': 0.08}, {'date': '2023-01-04', 'close': 0.07}, {'date': '2023-01-05', 'close': 0.06}, {'date': '2023-01-06', 'close': 0.06}]')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**data**: `ForwardRef('Data') | ForwardRef('DataFrame') | ForwardRef('Series') | ForwardRef('ndarray') | dict | list`<br/>
Time series data.

**target**: `str`<br/>
Target column name.

**window**: `int`<br/>
*Default:* 21<br/>
Window size.

**index**: `str`<br/>
*Default:* date<br/>
Index column name, by default "date"

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
