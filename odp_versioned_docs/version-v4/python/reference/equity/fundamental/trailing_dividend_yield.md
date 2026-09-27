---
title: "trailing_dividend_yield"
description: "Trailing 1yr dividend yield"
keywords:
- equity
- fundamental
- trailing_dividend_yield
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/fundamental/trailing_dividend_yield - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get the 1 year trailing dividend yield for a given company over time.

Examples
--------

```python
from openbb import obb
obb.equity.fundamental.trailing_dividend_yield(symbol='AAPL')
obb.equity.fundamental.trailing_dividend_yield(symbol='AAPL', limit=252)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol to get data for.

**limit**: `int | None`<br/>
*Default:* 252<br/>
The number of data entries to return. Default is 252, the number of trading days in a year.

</TabItem>
<TabItem value='tiingo' label='tiingo'>

**symbol**: `str`<br/>
Symbol to get data for.

**limit**: `int | None`<br/>
*Default:* 252<br/>
The number of data entries to return. Default is 252, the number of trading days in a year.

</TabItem>
</Tabs>

---

## Returns

**results**: `TrailingDividendYield`

Serializable results.

**provider**: `Optional[Literal['tiingo']]`

Provider name.

**warnings**: `Optional[list[Warning_]]`

list of warnings.

**chart**: `Optional[Chart]`

Chart object.

**extra**: `dict[str, Any]`

Extra info.

---
## Data

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | str`<br/>
The date of the data.

**trailing_dividend_yield**: `float`<br/>
Trailing dividend yield.

</TabItem>
<TabItem value='tiingo' label='tiingo'>

**date**: `date | str`<br/>
The date of the data.

**trailing_dividend_yield**: `float`<br/>
Trailing dividend yield.

</TabItem>
</Tabs>

