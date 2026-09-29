---
title: "market_snapshots"
description: "Get a current, complete market snapshot with the obb.equity.market_snapshots  Python method. Retrieve equity data such as stock information, financial data, market  analysis, and trading volume. Explore details like stock performance, price change,  moving averages, 52-week high and low, market cap, earnings per share, price to  earnings ratio, and stock exchange."
keywords:
- market snapshot
- equity data
- market data
- stock information
- financial data
- market analysis
- trading volume
- stock performance
- price change
- moving averages
- 52-week high
- 52-week low
- market cap
- earnings per share
- price to earnings ratio
- stock exchange
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/market_snapshots - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get an updated equity market snapshot. This includes price data for thousands of stocks.

Examples
--------

```python
from openbb import obb
obb.equity.market_snapshots()
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='fmp' label='fmp'>

**market**: `Literal['amex', 'ams', 'ase', 'asx', 'ath', 'bme', 'bru', 'bud', 'bue', 'cai', 'cnq', 'commodity', 'cph', 'crypto', 'dfm', 'doh', 'dus', 'etf', 'euronext', 'forex', 'hel', 'hkse', 'ice', 'iob', 'index', 'ist', 'jkt', 'jnb', 'jpx', 'kls', 'koe', 'ksc', 'kuw', 'lse', 'mex', 'mil', 'mutual_fund', 'nasdaq', 'neo', 'nse', 'nyse', 'nze', 'osl', 'otc', 'pnk', 'pra', 'ris', 'sao', 'sau', 'ses', 'set', 'sgo', 'shh', 'shz', 'six', 'sto', 'tai', 'tlv', 'tsx', 'two', 'vie', 'wse', 'xetra'] | None`<br/>
*Default:* nasdaq<br/>
The market to fetch data for.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**date**: `date | datetime | str | None | str`<br/>
The date of the data. Can be a datetime or an ISO datetime string. Historical data appears to go back to mid-June 2022. Example: '2024-03-08T12:15:00+0400'

</TabItem>
</Tabs>

---

## Returns

**results**: `MarketSnapshots`

Serializable results.

**provider**: `Optional[Literal['fmp', 'intrinio']]`

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

**exchange**: `str | None`<br/>
Exchange the security is listed on.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the company, fund, or security.

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
The change in price from the previous close.

**change_percent**: `float | None`<br/>
The change in price from the previous close, as a normalized percent.

</TabItem>
<TabItem value='fmp' label='fmp'>

**exchange**: `str | None`<br/>
Exchange the security is listed on.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the company, fund, or security.

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
The change in price from the previous close.

**change_percent**: `float | None`<br/>
The change in price from the previous close, as a normalized percent.

**ma50**: `float | None`<br/>
The 50-day moving average.

**ma200**: `float | None`<br/>
The 200-day moving average.

**year_high**: `float | None`<br/>
The 52-week high.

**year_low**: `float | None`<br/>
The 52-week low.

**market_cap**: `int | float | None`<br/>
Market cap of the stock.

**last_price_timestamp**: `datetime | date | None`<br/>
The timestamp of the last price.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**exchange**: `str | None`<br/>
Exchange the security is listed on.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the company, fund, or security.

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
The change in price from the previous close.

**change_percent**: `float | None`<br/>
The change in price from the previous close, as a normalized percent.

**last_price**: `float | None`<br/>
The last trade price.

**last_size**: `int | None`<br/>
The last trade size.

**last_volume**: `int | None`<br/>
The last trade volume.

**last_trade_timestamp**: `datetime | None`<br/>
The timestamp of the last trade.

**bid_size**: `int | None`<br/>
The size of the last bid price. Bid price and size is not always available.

**bid_price**: `float | None`<br/>
The last bid price. Bid price and size is not always available.

**ask_price**: `float | None`<br/>
The last ask price. Ask price and size is not always available.

**ask_size**: `int | None`<br/>
The size of the last ask price. Ask price and size is not always available.

**last_bid_timestamp**: `datetime | None`<br/>
The timestamp of the last bid price. Bid price and size is not always available.

**last_ask_timestamp**: `datetime | None`<br/>
The timestamp of the last ask price. Ask price and size is not always available.

</TabItem>
</Tabs>

