---
title: "ichimoku"
description: "Learn about Ichimoku Cloud, a versatile indicator that defines support  and resistance, identifies trend direction, gauges momentum, and provides trading  signals. Explore its parameters and usage in Python."
keywords:
- Ichimoku Cloud
- Ichimoku Kinko Hyo
- versatile indicator
- support and resistance
- trend direction
- momentum
- trading signals
- conversion line
- base line
- lagging span
- Chikou Span Column
- data leak
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="technical/ichimoku - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Calculate the Ichimoku Cloud.

Also known as Ichimoku Kinko Hyo, is a versatile indicator that defines support and
resistance, identifies trend direction, gauges momentum and provides trading
signals. Ichimoku Kinko Hyo translates into "one look equilibrium chart". With
one look, chartists can identify the trend and look for potential signals within
that trend.

Examples
--------

```python
from openbb import obb
# Get the Ichimoku Cloud.
stock_data = obb.equity.price.historical(symbol='TSLA', start_date='2023-01-01', provider='fmp')
ichimoku_data = obb.technical.ichimoku(data=stock_data.results, conversion=9, base=26, lookahead=False)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**data**: `ForwardRef('Data') | ForwardRef('DataFrame') | ForwardRef('Series') | ForwardRef('ndarray') | dict | list`<br/>
list of data to be used for the calculation.

**index**: `str`<br/>
*Default:* date<br/>
Index column name to use with `data`, by default "date".

**conversion**: `int`<br/>
*Default:* 9<br/>
Number of periods for the conversion line, by default 9.

**base**: `int`<br/>
*Default:* 26<br/>
Number of periods for the base line, by default 26.

**lagging**: `int`<br/>
*Default:* 52<br/>
Number of periods for the lagging span, by default 52.

**offset**: `int`<br/>
*Default:* 26<br/>
Number of periods for the offset, by default 26.

**lookahead**: `bool`<br/>
*Default:* False<br/>
drops the Chikou Span Column to prevent potential data leak

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
