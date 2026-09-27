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

<HeadTitle title="currency/price/historical - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Currency Historical Price. Currency historical data.

Currency historical prices refer to the past exchange rates of one currency against
another over a specific period.
This data provides insight into the fluctuations and trends in the foreign exchange market,
helping analysts, traders, and economists understand currency performance,
evaluate economic health, and make predictions about future movements.

Examples
--------

```python
from openbb import obb
obb.currency.price.historical(symbol='EURUSD')
# Filter historical data with specific start and end date.
obb.currency.price.historical(symbol='EURUSD', start_date='2023-01-01', end_date='2023-12-31')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Can use CURR1-CURR2 or CURR1CURR2 format. Multiple items allowed for provider(s): fmp, tiingo, yfinance.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Can use CURR1-CURR2 or CURR1CURR2 format. Multiple items allowed for provider(s): fmp, tiingo, yfinance.

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
Symbol to get data for. Can use CURR1-CURR2 or CURR1CURR2 format. Multiple items allowed for provider(s): fmp, tiingo, yfinance.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**interval**: `Literal['1m', '5m', '15m', '30m', '90m', '1h', '2h', '4h', '1d', '5d', '21d'] | None`<br/>
*Default:* 1d<br/>
Time interval of the data to return.

</TabItem>
<TabItem value='yfinance' label='yfinance'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Can use CURR1-CURR2 or CURR1CURR2 format. Multiple items allowed for provider(s): fmp, tiingo, yfinance.

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

**results**: `CurrencyHistorical`

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
Percent change in the price from the previous close.

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

