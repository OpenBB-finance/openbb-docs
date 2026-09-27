---
title: "Equity Historical"
description: "Get historical price data for a given stock"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `EquityHistorical` | `EquityHistoricalQueryParams` | `EquityHistoricalData` |

### Import Statement

```python
from openbb_core.provider.standard_models.equity_historical import (
EquityHistoricalData,
EquityHistoricalQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): alpha_vantage, cboe, fmp, tiingo, tmx, tradier, yfinance.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
<TabItem value='alpha_vantage' label='alpha_vantage'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): alpha_vantage, cboe, fmp, tiingo, tmx, tradier, yfinance.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**interval**: `Literal['1m', '5m', '15m', '30m', '60m', '1d', '1W', '1M'] | None`<br/>
*Default:* 1d<br/>
Time interval of the data to return.

**adjustment**: `Literal['splits_only', 'splits_and_dividends', 'unadjusted'] | None`<br/>
*Default:* splits_only<br/>
The adjustment factor to apply. 'splits_only' is not supported for intraday data.

**extended_hours**: `bool | None`<br/>
*Default:* False<br/>
Include Pre and Post market data.

</TabItem>
<TabItem value='cboe' label='cboe'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): alpha_vantage, cboe, fmp, tiingo, tmx, tradier, yfinance.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**interval**: `Literal['1m', '1d'] | None`<br/>
*Default:* 1d<br/>
Time interval of the data to return. The most recent trading day is not including in daily historical data. Intraday data is only available for the most recent trading day at 1 minute intervals.

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
When True, the company directories will be cached for 24 hours and are used to validate symbols. The results of the function are not cached. Set as False to bypass.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): alpha_vantage, cboe, fmp, tiingo, tmx, tradier, yfinance.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**interval**: `Literal['1m', '5m', '15m', '30m', '1h', '4h', '1d'] | None`<br/>
*Default:* 1d<br/>
Time interval of the data to return.

**adjustment**: `Literal['splits_only', 'splits_and_dividends', 'unadjusted'] | None`<br/>
*Default:* splits_only<br/>
Type of adjustment for historical prices. Only applies to daily data.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str`<br/>
A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID).

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**interval**: `Literal['1m', '5m', '10m', '15m', '30m', '60m', '1h', '1d', '1W', '1M', '1Q', '1Y'] | None`<br/>
*Default:* 1d<br/>
Time interval of the data to return.

**start_time**: `datetime.time | None`<br/>
Return intervals starting at the specified time on the `start_date` formatted as 'HH:MM:SS'.

**end_time**: `datetime.time | None`<br/>
Return intervals stopping at the specified time on the `end_date` formatted as 'HH:MM:SS'.

**timezone**: `str | None`<br/>
*Default:* America/New_York<br/>
Timezone of the data, in the IANA format (Continent/City).

**source**: `Literal['realtime', 'delayed', 'nasdaq_basic'] | None`<br/>
*Default:* realtime<br/>
The source of the data.

</TabItem>
<TabItem value='tiingo' label='tiingo'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): alpha_vantage, cboe, fmp, tiingo, tmx, tradier, yfinance.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**interval**: `Literal['1m', '5m', '15m', '30m', '90m', '1h', '2h', '4h', '1d', '1W', '1M', '1Y'] | None`<br/>
*Default:* 1d<br/>
Time interval of the data to return.

</TabItem>
<TabItem value='tmx' label='tmx'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): alpha_vantage, cboe, fmp, tiingo, tmx, tradier, yfinance.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**interval**: `Literal['1m', '2m', '5m', '15m', '30m', '60m', '1h', '1d', '1W', '1M'] | None`<br/>
*Default:* day<br/>
Time interval of the data to return. Or, any integer (entered as a string) representing the number of minutes. Default is daily data. There is no extended hours data, and intraday data is limited to after April 12 2022.

**adjustment**: `Literal['splits_only', 'splits_and_dividends', 'unadjusted'] | None`<br/>
*Default:* splits_only<br/>
The adjustment factor to apply. Only valid for daily data.

</TabItem>
<TabItem value='tradier' label='tradier'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): alpha_vantage, cboe, fmp, tiingo, tmx, tradier, yfinance.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**interval**: `Literal['1m', '5m', '15m', '1d', '1W', '1M'] | None`<br/>
*Default:* 1d<br/>
Time interval of the data to return.

**extended_hours**: `bool | None`<br/>
*Default:* False<br/>
Include Pre and Post market data.

</TabItem>
<TabItem value='yfinance' label='yfinance'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): alpha_vantage, cboe, fmp, tiingo, tmx, tradier, yfinance.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**interval**: `Literal['1m', '2m', '5m', '15m', '30m', '60m', '90m', '1h', '1d', '5d', '1W', '1M', '1Q'] | None`<br/>
*Default:* 1d<br/>
Time interval of the data to return.

**extended_hours**: `bool | None`<br/>
*Default:* False<br/>
Include Pre and Post market data.

**include_actions**: `bool | None`<br/>
*Default:* True<br/>
Include dividends and stock splits in results.

**adjustment**: `Literal['splits_only', 'splits_and_dividends'] | None`<br/>
*Default:* splits_only<br/>
The adjustment factor to apply. Default is splits only.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | datetime | str`<br/>
The date of the data.

**open**: `float`<br/>
The open price.

**high**: `float`<br/>
The high price.

**low**: `float`<br/>
The low price.

**close**: `float`<br/>
The close price.

**volume**: `float | int | None`<br/>
The trading volume.

**vwap**: `float | None`<br/>
Volume Weighted Average Price over the period.

</TabItem>
<TabItem value='alpha_vantage' label='alpha_vantage'>

**date**: `date | datetime | str`<br/>
The date of the data.

**open**: `float`<br/>
The open price.

**high**: `float`<br/>
The high price.

**low**: `float`<br/>
The low price.

**close**: `float`<br/>
The close price.

**volume**: `float | int | None`<br/>
The trading volume.

**vwap**: `float | None`<br/>
Volume Weighted Average Price over the period.

**adj_close**: `float | None`<br/>
The adjusted close price.

**dividend**: `float | None`<br/>
Dividend amount, if a dividend was paid.

**split_ratio**: `float | None`<br/>
Split coefficient, if a split occurred.

</TabItem>
<TabItem value='cboe' label='cboe'>

**date**: `date | datetime | str`<br/>
The date of the data.

**open**: `float`<br/>
The open price.

**high**: `float`<br/>
The high price.

**low**: `float`<br/>
The low price.

**close**: `float`<br/>
The close price.

**volume**: `float | int | None`<br/>
The trading volume.

**vwap**: `float | None`<br/>
Volume Weighted Average Price over the period.

**calls_volume**: `int | None`<br/>
Number of calls traded during the most recent trading period. Only valid if interval is 1m.

**puts_volume**: `int | None`<br/>
Number of puts traded during the most recent trading period. Only valid if interval is 1m.

**total_options_volume**: `int | None`<br/>
Total number of options traded during the most recent trading period. Only valid if interval is 1m.

</TabItem>
<TabItem value='fmp' label='fmp'>

**date**: `date | datetime | str`<br/>
The date of the data.

**open**: `float`<br/>
The open price.

**high**: `float`<br/>
The high price.

**low**: `float`<br/>
The low price.

**close**: `float`<br/>
The close price.

**volume**: `float | int | None`<br/>
The trading volume.

**vwap**: `float | None`<br/>
Volume Weighted Average Price over the period.

**change**: `float | None`<br/>
Change in the price from the previous close.

**change_percent**: `float | None`<br/>
Change in the price from the previous close, as a normalized percent.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**date**: `date | datetime | str`<br/>
The date of the data.

**open**: `float`<br/>
The open price.

**high**: `float`<br/>
The high price.

**low**: `float`<br/>
The low price.

**close**: `float`<br/>
The close price.

**volume**: `float | int | None`<br/>
The trading volume.

**vwap**: `float | None`<br/>
Volume Weighted Average Price over the period.

**average**: `float | None`<br/>
Average trade price of an individual equity during the interval.

**change**: `float | None`<br/>
Change in the price of the symbol from the previous day.

**change_percent**: `float | None`<br/>
Percent change in the price of the symbol from the previous day.

**adj_open**: `float | None`<br/>
The adjusted open price.

**adj_high**: `float | None`<br/>
The adjusted high price.

**adj_low**: `float | None`<br/>
The adjusted low price.

**adj_close**: `float | None`<br/>
The adjusted close price.

**adj_volume**: `float | None`<br/>
The adjusted volume.

**fifty_two_week_high**: `float | None`<br/>
52 week high price for the symbol.

**fifty_two_week_low**: `float | None`<br/>
52 week low price for the symbol.

**factor**: `float | None`<br/>
factor by which to multiply equity prices before this date, in order to calculate historically-adjusted equity prices.

**split_ratio**: `float | None`<br/>
Ratio of the equity split, if a split occurred.

**dividend**: `float | None`<br/>
Dividend amount, if a dividend was paid.

**close_time**: `datetime | None`<br/>
The timestamp that represents the end of the interval span.

**interval**: `str | None`<br/>
The data time frequency.

**intra_period**: `bool | None`<br/>
If true, the equity price represents an unfinished period (be it day, week, quarter, month, or year), meaning that the close price is the latest price available, not the official close price for the period

</TabItem>
<TabItem value='tiingo' label='tiingo'>

**date**: `date | datetime | str`<br/>
The date of the data.

**open**: `float`<br/>
The open price.

**high**: `float`<br/>
The high price.

**low**: `float`<br/>
The low price.

**close**: `float`<br/>
The close price.

**volume**: `float | int | None`<br/>
The trading volume.

**vwap**: `float | None`<br/>
Volume Weighted Average Price over the period.

**adj_open**: `float | None`<br/>
The adjusted open price.

**adj_high**: `float | None`<br/>
The adjusted high price.

**adj_low**: `float | None`<br/>
The adjusted low price.

**adj_close**: `float | None`<br/>
The adjusted close price.

**adj_volume**: `float | None`<br/>
The adjusted volume.

**split_ratio**: `float | None`<br/>
Ratio of the equity split, if a split occurred.

**dividend**: `float | None`<br/>
Dividend amount, if a dividend was paid.

</TabItem>
<TabItem value='tmx' label='tmx'>

**date**: `date | datetime | str`<br/>
The date of the data.

**open**: `float`<br/>
The open price.

**high**: `float`<br/>
The high price.

**low**: `float`<br/>
The low price.

**close**: `float`<br/>
The close price.

**volume**: `float | int | None`<br/>
The trading volume.

**vwap**: `float | None`<br/>
Volume weighted average price for the day.

**change**: `float | None`<br/>
Change in price.

**change_percent**: `float | None`<br/>
Change in price, as a normalized percentage.

**transactions**: `int | None`<br/>
Total number of transactions recorded.

**transactions_value**: `float | None`<br/>
Nominal value of recorded transactions.

</TabItem>
<TabItem value='tradier' label='tradier'>

**date**: `date | datetime | str`<br/>
The date of the data.

**open**: `float`<br/>
The open price.

**high**: `float`<br/>
The high price.

**low**: `float`<br/>
The low price.

**close**: `float`<br/>
The close price.

**volume**: `float | int | None`<br/>
The trading volume.

**vwap**: `float | None`<br/>
Volume Weighted Average Price over the period.

**last_price**: `float | None`<br/>
The last price of the equity.

</TabItem>
<TabItem value='yfinance' label='yfinance'>

**date**: `date | datetime | str`<br/>
The date of the data.

**open**: `float`<br/>
The open price.

**high**: `float`<br/>
The high price.

**low**: `float`<br/>
The low price.

**close**: `float`<br/>
The close price.

**volume**: `float | int | None`<br/>
The trading volume.

**vwap**: `float | None`<br/>
Volume Weighted Average Price over the period.

**split_ratio**: `float | None`<br/>
Ratio of the equity split, if a split occurred.

**dividend**: `float | None`<br/>
Dividend amount (split-adjusted), if a dividend was paid.

</TabItem>
</Tabs>

