---
title: "sortino_ratio"
description: "Get rolling Sortino Ratio"
keywords:
- quantitative
- performance
- sortino_ratio
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="quantitative/performance/sortino_ratio - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get rolling Sortino Ratio.

The Sortino Ratio enhances the evaluation of investment returns by distinguishing harmful volatility
from total volatility. Unlike other metrics that treat all volatility as risk, this command specifically assesses
the volatility of negative returns relative to a target or desired return.
It's particularly useful for investors who are more concerned with downside risk than with overall volatility.
By calculating the Sortino Ratio, investors can better understand the risk-adjusted return of their investments,
focusing on the likelihood and impact of negative returns.
This approach offers a more nuanced tool for portfolio optimization, especially in strategies aiming
to minimize the downside.

For method & terminology see:
http://www.redrockcapital.com/Sortino__A__Sharper__Ratio_Red_Rock_Capital.pdf

Examples
--------

```python
from openbb import obb
# Get Rolling Sortino Ratio.
stock_data = obb.equity.price.historical(symbol="TSLA", start_date="2023-01-01", provider="fmp").to_df()
returns = stock_data["close"].pct_change().dropna()
obb.quantitative.performance.sortino_ratio(data=stock_data, target="close")
obb.quantitative.performance.sortino_ratio(data=stock_data, target="close", target_return=0.01, window=126, adjusted=True)
obb.quantitative.performance.sortino_ratio(target='close', window=2, data='[{'date': '2023-01-02', 'close': 0.05}, {'date': '2023-01-03', 'close': 0.08}, {'date': '2023-01-04', 'close': 0.07}, {'date': '2023-01-05', 'close': 0.06}, {'date': '2023-01-06', 'close': 0.06}]')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**data**: `ForwardRef('Data') | ForwardRef('DataFrame') | ForwardRef('Series') | ForwardRef('ndarray') | dict | list`<br/>
Time series data.

**target**: `str`<br/>
Target column name.

**target_return**: `float`<br/>
*Default:* 0.0<br/>
Target return, by default 0.0

**window**: `int`<br/>
*Default:* 252<br/>
Window size, by default 252

**adjusted**: `bool`<br/>
*Default:* False<br/>
Adjust sortino ratio to compare it to sharpe ratio, by default False

**index**: `str`<br/>
*Default:* date<br/>
Index column for input data

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
