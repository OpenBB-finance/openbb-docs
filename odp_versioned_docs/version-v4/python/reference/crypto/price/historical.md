---
title: "historical"
description: "Learn how to use the `obb.equity.price.historical` function to load historical  price data for a specific stock ticker. Find out about the available parameters  and providers, as well as the structure of the returned data and the columns it  contains."
keywords:
- equity historical price
- load stock data
- specific ticker
- python function
- equity data parameters
- alpha vantage provider
- fmp provider
- intrinio provider
- polygon provider
- yfinance provider
- equity historical data returns
- equity data columns
- alpha vantage data columns
- cboe data columns
- fmp data columns
- intrinio data columns
- polygon data columns
- yfinance data columns
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="crypto/price/historical - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get historical price data for cryptocurrency pair(s) within a provider.

Examples
--------

```python
from openbb import obb
obb.crypto.price.historical(symbol='BTCUSD')
obb.crypto.price.historical(symbol='BTCUSD', start_date='2024-01-01', end_date='2024-01-31')
# Get monthly historical prices from Yahoo Finance for Ethereum.
obb.crypto.price.historical(symbol='ETH-USD', interval='1m', start_date='2024-01-01', end_date='2024-12-31')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp, tiingo, yfinance.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp, tiingo, yfinance.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**interval**: `Literal['1m', '5m', '1h', '1d'] | None`<br/>
*Default:* 1d<br/>
Time interval of the data to return.

</TabItem>
<TabItem value='tiingo' label='tiingo'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp, tiingo, yfinance.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**interval**: `Literal['1m', '5m', '15m', '30m', '90m', '1h', '2h', '4h', '1d', '7d', '30d'] | None`<br/>
*Default:* 1d<br/>
Time interval of the data to return.

**exchanges**: `list[str] | str | None`<br/>
To limit the query to a subset of exchanges e.g. ['POLONIEX', 'GDAX']

</TabItem>
<TabItem value='yfinance' label='yfinance'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp, tiingo, yfinance.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**interval**: `Literal['1m', '2m', '5m', '15m', '30m', '60m', '90m', '1h', '1d', '5d', '1W', '1M', '1Q'] | None`<br/>
*Default:* 1d<br/>
Time interval of the data to return.

</TabItem>
</Tabs>

---

## Returns

**results**: `CryptoHistorical`

Serializable results.

**provider**: `Optional[Literal['fmp', 'tiingo', 'yfinance']]`

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

**date**: `date | datetime | str`<br/>
The date of the data.

**open**: `float | None`<br/>
The open price.

**high**: `float | None`<br/>
The high price.

**low**: `float | None`<br/>
The low price.

**close**: `float`<br/>
The close price.

**volume**: `float | None`<br/>
The trading volume.

**vwap**: `float | None`<br/>
Volume Weighted Average Price over the period.

</TabItem>
<TabItem value='fmp' label='fmp'>

**date**: `date | datetime | str`<br/>
The date of the data.

**open**: `float | None`<br/>
The open price.

**high**: `float | None`<br/>
The high price.

**low**: `float | None`<br/>
The low price.

**close**: `float`<br/>
The close price.

**volume**: `float | None`<br/>
The trading volume.

**vwap**: `float | None`<br/>
Volume Weighted Average Price over the period.

**change**: `float | None`<br/>
Change in the price from the previous close.

**change_percent**: `float | None`<br/>
Change in the price from the previous close, as a normalized percent.

</TabItem>
<TabItem value='tiingo' label='tiingo'>

**date**: `date | datetime | str`<br/>
The date of the data.

**open**: `float | None`<br/>
The open price.

**high**: `float | None`<br/>
The high price.

**low**: `float | None`<br/>
The low price.

**close**: `float`<br/>
The close price.

**volume**: `float | None`<br/>
The trading volume.

**vwap**: `float | None`<br/>
Volume Weighted Average Price over the period.

**transactions**: `int | None`<br/>
Number of transactions for the symbol in the time period.

**volume_notional**: `float | None`<br/>
The last size done for the asset on the specific date in the quote currency. The volume of the asset on the specific date in the quote currency.

</TabItem>
<TabItem value='yfinance' label='yfinance'>

**date**: `date | datetime | str`<br/>
The date of the data.

**open**: `float | None`<br/>
The open price.

**high**: `float | None`<br/>
The high price.

**low**: `float | None`<br/>
The low price.

**close**: `float`<br/>
The close price.

**volume**: `float | None`<br/>
The trading volume.

**vwap**: `float | None`<br/>
Volume Weighted Average Price over the period.

</TabItem>
</Tabs>

