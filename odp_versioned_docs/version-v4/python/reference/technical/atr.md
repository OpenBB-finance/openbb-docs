---
title: "atr"
description: "Learn about the Average True Range indicator used to measure volatility  in financial data and how to apply it with examples."
keywords:
- Average True Range
- volatility measurement
- gaps
- limit moves
- data
- index column
- length
- moving average mode
- difference period
- offset
- OBBject
- List
- examples
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="technical/atr - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Calculate the Average True Range.

Used to measure volatility, especially volatility caused by gaps or limit moves.
The ATR metric helps understand how much the values in your data change on average,
giving insights into the stability or unpredictability during a certain period.
It's particularly useful for spotting trends of increase or decrease in variations,
without getting into technical trading details.
The method considers not just the day-to-day changes but also accounts for any
sudden jumps or drops, ensuring you get a comprehensive view of movement.

Examples
--------

```python
from openbb import obb
# Get the Average True Range.
stock_data = obb.equity.price.historical(symbol='TSLA', start_date='2023-01-01', provider='fmp')
atr_data = obb.technical.atr(data=stock_data.results)
obb.technical.atr(length=2, data='[{'date': '2023-01-02', 'open': 110.0, 'high': 120.0, 'low': 100.0, 'close': 115.0, 'volume': 10000.0}, {'date': '2023-01-03', 'open': 165.0, 'high': 180.0, 'low': 150.0, 'close': 172.5, 'volume': 15000.0}, {'date': '2023-01-04', 'open': 146.67, 'high': 160.0, 'low': 133.33, 'close': 153.33, 'volume': 13333.33}, {'date': '2023-01-05', 'open': 137.5, 'high': 150.0, 'low': 125.0, 'close': 143.75, 'volume': 12500.0}, {'date': '2023-01-06', 'open': 132.0, 'high': 144.0, 'low': 120.0, 'close': 138.0, 'volume': 12000.0}]')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**data**: `ForwardRef('Data') | ForwardRef('DataFrame') | ForwardRef('Series') | ForwardRef('ndarray') | dict | list`<br/>
list of data to apply the indicator to.

**index**: `str`<br/>
*Default:* date<br/>
Index column name, by default "date"

**length**: `int`<br/>
*Default:* 14<br/>
It's period, by default 14

**mamode**: `Literal['rma', 'ema', 'sma', 'wma']`<br/>
*Default:* rma<br/>
Moving average mode, by default "rma"

**drift**: `int`<br/>
*Default:* 1<br/>
The difference period, by default 1

**offset**: `int`<br/>
*Default:* 0<br/>
How many periods to offset the result, by default 0

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
