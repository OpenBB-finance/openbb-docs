---
title: "growth_tech"
description: "Learn how to get growth tech equities, sort them, and retrieve detailed  data such as symbol, name, price, volume, and more using the OBB.equity.discovery.growth_tech  method in the provided code snippet. This documentation page also covers the parameters,  returns, and available data structures."
keywords:
- growth tech equities
- tech equities
- equity discovery
- sorting
- provider
- results
- warnings
- chart
- metadata
- data
- symbol
- name
- price
- change
- percent change
- volume
- market cap
- average volume
- P/E ratio
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/discovery/growth_tech - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get top tech stocks based on revenue and earnings growth.

Examples
--------

```python
from openbb import obb
obb.equity.discovery.growth_tech()
obb.equity.discovery.growth_tech(sort='desc')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**sort**: `Literal['asc', 'desc'] | None`<br/>
*Default:* desc<br/>
Sort order. Possible values: 'asc', 'desc'. Default: 'desc'.

</TabItem>
<TabItem value='yfinance' label='yfinance'>

**sort**: `Literal['asc', 'desc'] | None`<br/>
*Default:* desc<br/>
Sort order. Possible values: 'asc', 'desc'. Default: 'desc'.

**limit**: `int | None`<br/>
*Default:* 200<br/>
Limit the number of results.

</TabItem>
</Tabs>

---

## Returns

**results**: `GrowthTechEquities`

Serializable results.

**provider**: `Optional[Literal['yfinance']]`

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
Name of the entity.

**price**: `float`<br/>
Last price.

**change**: `float`<br/>
Change in price.

**percent_change**: `float`<br/>
Percent change.

**volume**: `int | float | None`<br/>
The trading volume.

</TabItem>
<TabItem value='yfinance' label='yfinance'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the entity.

**price**: `float`<br/>
Last price.

**change**: `float`<br/>
Change in price.

**percent_change**: `float`<br/>
Percent change.

**volume**: `int | float | None`<br/>
The trading volume.

**open**: `float | None`<br/>
Open price for the day.

**high**: `float | None`<br/>
High price for the day.

**low**: `float | None`<br/>
Low price for the day.

**previous_close**: `float | None`<br/>
Previous close price.

**ma50**: `float | None`<br/>
50-day moving average.

**ma200**: `float | None`<br/>
200-day moving average.

**year_high**: `float | None`<br/>
52-week high.

**year_low**: `float | None`<br/>
52-week low.

**market_cap**: `float | None`<br/>
Market Cap.

**shares_outstanding**: `float | None`<br/>
Shares outstanding.

**book_value**: `float | None`<br/>
Book value per share.

**price_to_book**: `float | None`<br/>
Price to book ratio.

**eps_ttm**: `float | None`<br/>
Earnings per share over the trailing twelve months.

**eps_forward**: `float | None`<br/>
Forward earnings per share.

**pe_forward**: `float | None`<br/>
Forward price-to-earnings ratio.

**dividend_yield**: `float | None`<br/>
Trailing twelve month dividend yield.

**exchange**: `str | None`<br/>
Exchange where the stock is listed.

**exchange_timezone**: `str | None`<br/>
Timezone of the exchange.

**earnings_date**: `datetime | None`<br/>
Most recent earnings date.

**currency**: `str | None`<br/>
Currency of the price data.

</TabItem>
</Tabs>

