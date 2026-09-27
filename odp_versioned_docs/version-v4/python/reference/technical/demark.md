---
title: "demark"
description: "Learn how to use the Demark sequential indicator function in the OBBject  library to analyze stock market data and calculate specific values. See examples  of its implementation with the OpenBB package."
keywords:
- Demark sequential indicator
- data
- index
- target
- show_all
- asint
- offset
- OBBject
- List[Data]
- calculated data
- examples
- openbb
- equity
- price
- historical
- symbol
- start_date
- provider
- fmp
- technical
- demark
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="technical/demark - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Calculate the Demark sequential indicator.

This indicator offers a strategic way to spot potential reversals in market trends.
It's designed to highlight moments when the current trend may be running out of steam,
suggesting a possible shift in direction. By focusing on specific patterns in price movements, it provides
valuable insights for making informed decisions on future changes and identifies trend exhaustion points
with precision.

Examples
--------

```python
from openbb import obb
# Get the Demark Sequential Indicator.
stock_data = obb.equity.price.historical(symbol='TSLA', start_date='2023-01-01', provider='fmp')
demark_data = obb.technical.demark(data=stock_data.results, offset=0)
obb.technical.demark(data='[{'date': '2023-01-02', 'open': 110.0, 'high': 120.0, 'low': 100.0, 'close': 115.0, 'volume': 10000.0}, {'date': '2023-01-03', 'open': 165.0, 'high': 180.0, 'low': 150.0, 'close': 172.5, 'volume': 15000.0}, {'date': '2023-01-04', 'open': 146.67, 'high': 160.0, 'low': 133.33, 'close': 153.33, 'volume': 13333.33}, {'date': '2023-01-05', 'open': 137.5, 'high': 150.0, 'low': 125.0, 'close': 143.75, 'volume': 12500.0}, {'date': '2023-01-06', 'open': 132.0, 'high': 144.0, 'low': 120.0, 'close': 138.0, 'volume': 12000.0}]')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**data**: `ForwardRef('Data') | ForwardRef('DataFrame') | ForwardRef('Series') | ForwardRef('ndarray') | dict | list`<br/>
list of data to be used for the calculation.

**index**: `str`<br/>
*Default:* date<br/>
Index column name to use with `data`, by default "date".

**target**: `str`<br/>
*Default:* close<br/>
Target column name, by default "close".

**show_all**: `bool`<br/>
*Default:* True<br/>
Show 1 - 13. If set to False, show 6 - 9

**asint**: `bool`<br/>
*Default:* True<br/>
If True, fill NAs with 0 and change type to int, by default True.

**offset**: `int`<br/>
*Default:* 0<br/>
How many periods to offset the result

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
