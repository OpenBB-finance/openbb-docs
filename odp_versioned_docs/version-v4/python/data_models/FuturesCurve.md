---
title: "Futures Curve"
description: "Futures Term Structure, current or historical"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `FuturesCurve` | `FuturesCurveQueryParams` | `FuturesCurveData` |

### Import Statement

```python
from openbb_core.provider.standard_models.futures_curve import (
FuturesCurveData,
FuturesCurveQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol to get data for.

**date**: `date | str | None | list[date | str | None]`<br/>
A specific date to get data for. Multiple items allowed for provider(s): cboe, yfinance.

</TabItem>
<TabItem value='cboe' label='cboe'>

**symbol**: `Literal['VX_AM', 'VX_EOD'] | None`<br/>
*Default:* VX_EOD<br/>
<details>
<summary mdxType="summary">Description</summary>

Symbol to get data for.Default is 'VX_EOD'. Entered dates return the data nearest to the entered date.<br/>
    'VX_AM' = Mid-Morning TWAP Levels<br/>
    'VX_EOD' = 4PM Eastern Time Levels<br/>
</details>

**date**: `date | str | None | list[date | str | None]`<br/>
A specific date to get data for. Multiple items allowed for provider(s): cboe, yfinance.

</TabItem>
<TabItem value='deribit' label='deribit'>

**symbol**: `Literal['BTC', 'ETH', 'PAXG'] | None`<br/>
*Default:* BTC<br/>
Symbol to get data for. Default is 'btc' Supported symbols are: ['btc', 'eth', 'paxg']

**date**: `date | str | None | list[date | str | None]`<br/>
A specific date to get data for. Multiple items allowed for provider(s): cboe, yfinance.

**hours_ago**: `int | list[int] | str | None`<br/>
Compare the current curve with the specified number of hours ago. Default is None.

</TabItem>
<TabItem value='yfinance' label='yfinance'>

**symbol**: `str`<br/>
Symbol to get data for.

**date**: `date | str | None | list[date | str | None]`<br/>
A specific date to get data for. Multiple items allowed for provider(s): cboe, yfinance.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | None | str`<br/>
The date of the data.

**expiration**: `str`<br/>
Futures expiration month.

**price**: `float | None`<br/>
The price of the futures contract.

</TabItem>
<TabItem value='cboe' label='cboe'>

**date**: `date | None | str`<br/>
The date of the data.

**expiration**: `str`<br/>
Futures expiration month.

**price**: `float | None`<br/>
The price of the futures contract.

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

</TabItem>
<TabItem value='deribit' label='deribit'>

**date**: `date | None | str`<br/>
The date of the data.

**expiration**: `str`<br/>
Futures expiration month.

**price**: `float | None`<br/>
The price of the futures contract.

**hours_ago**: `int | None`<br/>
The number of hours ago represented by the price. Only available when hours_ago is set in the query.

</TabItem>
<TabItem value='yfinance' label='yfinance'>

**date**: `date | None | str`<br/>
The date of the data.

**expiration**: `str`<br/>
Futures expiration month.

**price**: `float | None`<br/>
The price of the futures contract.

</TabItem>
</Tabs>

