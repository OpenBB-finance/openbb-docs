---
title: "snapshots"
description: "Get a snapshot of the options market universe"
keywords:
- derivatives
- options
- snapshots
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="derivatives/options/snapshots - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get a snapshot of the options market universe.

Examples
--------

```python
from openbb import obb
obb.derivatives.options.snapshots()
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**date**: `date | datetime | str | None | str`<br/>
The date of the data. Can be a datetime or an ISO datetime string. Data appears to go back to around 2022-06-01 Example: '2024-03-08T12:15:00+0400'

**only_traded**: `bool | None`<br/>
*Default:* True<br/>
Only include options that have been traded during the session, default is True. Setting to false will dramatically increase the size of the response - use with caution.

</TabItem>
</Tabs>

---

## Returns

**results**: `OptionsSnapshots`

Serializable results.

**provider**: `Optional[Literal['intrinio']]`

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

**underlying_symbol**: `list[str]`<br/>
Ticker symbol of the underlying asset.

**contract_symbol**: `list[str]`<br/>
Symbol of the options contract.

**expiration**: `list[date]`<br/>
Expiration date of the options contract.

**dte**: `list[int | None]`<br/>
Number of days to expiration of the options contract.

**strike**: `list[float]`<br/>
Strike price of the options contract.

**option_type**: `list[str]`<br/>
The type of option.

**volume**: `list[int | None]`<br/>
The trading volume.

**open_interest**: `list[int | None]`<br/>
Open interest at the time.

**last_price**: `list[float | None]`<br/>
Last trade price at the time.

**last_size**: `list[int | None]`<br/>
Lot size of the last trade.

**last_timestamp**: `list[datetime | None]`<br/>
Timestamp of the last price.

**open**: `list[float | None]`<br/>
The open price.

**high**: `list[float | None]`<br/>
The high price.

**low**: `list[float | None]`<br/>
The low price.

**close**: `list[float | None]`<br/>
The close price.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**underlying_symbol**: `list[str]`<br/>
Ticker symbol of the underlying asset.

**contract_symbol**: `list[str]`<br/>
Symbol of the options contract.

**expiration**: `list[date]`<br/>
Expiration date of the options contract.

**dte**: `list[int | None]`<br/>
Number of days to expiration of the options contract.

**strike**: `list[float]`<br/>
Strike price of the options contract.

**option_type**: `list[str]`<br/>
The type of option.

**volume**: `list[int | None]`<br/>
The trading volume.

**open_interest**: `list[int | None]`<br/>
Open interest at the time.

**last_price**: `list[float | None]`<br/>
Last trade price at the time.

**last_size**: `list[int | None]`<br/>
Lot size of the last trade.

**last_timestamp**: `list[datetime | None]`<br/>
Timestamp of the last price.

**open**: `list[float | None]`<br/>
The open price.

**high**: `list[float | None]`<br/>
The high price.

**low**: `list[float | None]`<br/>
The low price.

**close**: `list[float | None]`<br/>
The close price.

**bid**: `list[float | None]`<br/>
The last bid price at the time.

**bid_size**: `list[int | None]`<br/>
The size of the last bid price.

**bid_timestamp**: `list[datetime | None]`<br/>
The timestamp of the last bid price.

**ask**: `list[float | None]`<br/>
The last ask price at the time.

**ask_size**: `list[int | None]`<br/>
The size of the last ask price.

**ask_timestamp**: `list[datetime | None]`<br/>
The timestamp of the last ask price.

**total_bid_volume**: `list[int | None]`<br/>
Total volume of bids.

**bid_high**: `list[float | None]`<br/>
The highest bid price.

**bid_low**: `list[float | None]`<br/>
The lowest bid price.

**total_ask_volume**: `list[int | None]`<br/>
Total volume of asks.

**ask_high**: `list[float | None]`<br/>
The highest ask price.

**ask_low**: `list[float | None]`<br/>
The lowest ask price.

</TabItem>
</Tabs>

