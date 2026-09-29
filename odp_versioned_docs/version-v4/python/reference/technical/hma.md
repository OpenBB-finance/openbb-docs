---
title: "hma"
description: "Learn about the Hull Moving Average (HMA), a responsive and smooth moving  average indicator. Understand how to use the HMA, its parameters, and see examples  using the OBBject library."
keywords:
- Hull Moving Average
- moving average
- lag
- smoothing
- data
- target column
- index column
- length
- offset
- OBBject
- examples
- openbb
- equity
- price
- historical
- symbol
- start date
- provider
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="technical/hma - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Calculate the Hull Moving Average (HMA).

Solves the age old dilemma of making a moving average more responsive to current
price activity whilst maintaining curve smoothness.
In fact the HMA almost eliminates lag altogether and manages to improve smoothing
at the same time.

Examples
--------

```python
from openbb import obb
# Calculate HMA with historical stock data.
stock_data = obb.equity.price.historical(symbol='TSLA', start_date='2023-01-01', provider='fmp')
hma_data = obb.technical.hma(data=stock_data.results, target='close', length=50, offset=0)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**data**: `ForwardRef('Data') | ForwardRef('DataFrame') | ForwardRef('Series') | ForwardRef('ndarray') | dict | list`<br/>
list of data to be used for the calculation.

**target**: `str`<br/>
*Default:* close<br/>
Target column name.

**index**: `str`<br/>
*Default:* date<br/>
Index column name to use with `data`, by default "date".

**length**: `int`<br/>
*Default:* 50<br/>
Number of periods for the HMA, by default 50.

**offset**: `int`<br/>
*Default:* 0<br/>
Offset of the HMA, by default 0.

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
