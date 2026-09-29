---
title: "snapshots"
description: "Index Snapshots documentation page with information on current levels  for all indices from a specific provider, and details on parameters, query, returns,  and data."
keywords:
- index snapshots
- current levels
- provider
- parameters
- region
- query
- returns
- data
- symbol
- name
- currency
- price
- open
- high
- low
- close
- prev close
- change
- change percent
- isin code
- last trade timestamp
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="index/snapshots - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Index Snapshots. Current levels for all indices from a provider, grouped by `region`.

Examples
--------

```python
from openbb import obb
obb.index.snapshots()
obb.index.snapshots(region='us')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**region**: `str | None`<br/>
*Default:* us<br/>
The region of focus for the data - i.e., us, eu.

</TabItem>
<TabItem value='cboe' label='cboe'>

**region**: `Literal['us', 'eu'] | None`<br/>
*Default:* us<br/>
None

</TabItem>
<TabItem value='tmx' label='tmx'>

**region**: `Literal['ca', 'us'] | None`<br/>
*Default:* ca<br/>
None

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
Whether to use a cached request. Index data is from a single JSON file, updated each day after close. It is cached for one day. To bypass, set to False.

</TabItem>
</Tabs>

---

## Returns

**results**: `IndexSnapshots`

Serializable results.

**provider**: `Optional[Literal['cboe', 'tmx']]`

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

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the index.

**currency**: `str | None`<br/>
Currency of the index.

**price**: `float | None`<br/>
Current price of the index.

**open**: `float | None`<br/>
The open price.

**high**: `float | None`<br/>
The high price.

**low**: `float | None`<br/>
The low price.

**close**: `float | None`<br/>
The close price.

**volume**: `int | None`<br/>
The trading volume.

**prev_close**: `float | None`<br/>
The previous close price.

**change**: `float | None`<br/>
Change in value of the index.

**change_percent**: `float | None`<br/>
Change, in normalized percentage points, of the index.

</TabItem>
<TabItem value='cboe' label='cboe'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the index.

**currency**: `str | None`<br/>
Currency of the index.

**price**: `float | None`<br/>
Current price of the index.

**open**: `float | None`<br/>
The open price.

**high**: `float | None`<br/>
The high price.

**low**: `float | None`<br/>
The low price.

**close**: `float | None`<br/>
The close price.

**volume**: `int | None`<br/>
The trading volume.

**prev_close**: `float | None`<br/>
The previous close price.

**change**: `float | None`<br/>
Change in price.

**change_percent**: `float | None`<br/>
Change in price as a normalized percentage.

**bid**: `float | None`<br/>
Current bid price.

**ask**: `float | None`<br/>
Current ask price.

**last_trade_time**: `datetime | None`<br/>
Last trade timestamp for the symbol.

**status**: `str | None`<br/>
Status of the market, open or closed.

</TabItem>
<TabItem value='tmx' label='tmx'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the index.

**currency**: `str | None`<br/>
Currency of the index.

**price**: `float | None`<br/>
Current price of the index.

**open**: `float | None`<br/>
The open price.

**high**: `float | None`<br/>
The high price.

**low**: `float | None`<br/>
The low price.

**close**: `float | None`<br/>
The close price.

**volume**: `int | None`<br/>
The trading volume.

**prev_close**: `float | None`<br/>
The previous close price.

**change**: `float | None`<br/>
Change in value of the index.

**change_percent**: `float | None`<br/>
Change, in normalized percentage points, of the index.

**year_high**: `float | None`<br/>
The 52-week high of the index.

**year_low**: `float | None`<br/>
The 52-week low of the index.

**return_mtd**: `float | None`<br/>
The month-to-date return of the index, as a normalized percent.

**return_qtd**: `float | None`<br/>
The quarter-to-date return of the index, as a normalized percent.

**return_ytd**: `float | None`<br/>
The year-to-date return of the index, as a normalized percent.

**total_market_value**: `float | None`<br/>
The total quoted market value of the index.

**number_of_constituents**: `int | None`<br/>
The number of constituents in the index.

**constituent_average_market_value**: `float | None`<br/>
The average quoted market value of the index constituents.

**constituent_median_market_value**: `float | None`<br/>
The median quoted market value of the index constituents.

**constituent_top10_market_value**: `float | None`<br/>
The sum of the top 10 quoted market values of the index constituents.

**constituent_largest_market_value**: `float | None`<br/>
The largest quoted market value of the index constituents.

**constituent_largest_weight**: `float | None`<br/>
The largest weight of the index constituents, as a normalized percent.

**constituent_smallest_market_value**: `float | None`<br/>
The smallest quoted market value of the index constituents.

**constituent_smallest_weight**: `float | None`<br/>
The smallest weight of the index constituents, as a normalized percent.

</TabItem>
</Tabs>

