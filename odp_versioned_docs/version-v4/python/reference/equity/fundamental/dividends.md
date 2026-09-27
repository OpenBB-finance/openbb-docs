---
title: "dividends"
description: "Get historical dividends data for a given company with the OBB.equity.fundamental.dividends  function. Explore parameters like symbol and provider, and understand the returned  results, warnings, and metadata. View the data fields, including date, label, adj_dividend,  dividend, record_date, payment_date, and declaration_date."
keywords:
- historical dividends
- dividends data
- company dividends
- symbol
- data provider
- default provider
- results
- warnings
- chart
- metadata
- date
- label
- adj_dividend
- dividend
- record_date
- payment_date
- declaration_date
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/fundamental/dividends - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get historical dividend data for a given company.

Examples
--------

```python
from openbb import obb
obb.equity.fundamental.dividends(symbol='AAPL')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp, nasdaq.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp, nasdaq.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**limit**: `int | None`<br/>
Return N most recent payments.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp, nasdaq.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**limit**: `int | None`<br/>
*Default:* 100<br/>
The number of data entries to return.

</TabItem>
<TabItem value='nasdaq' label='nasdaq'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp, nasdaq.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
<TabItem value='tmx' label='tmx'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp, nasdaq.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
<TabItem value='yfinance' label='yfinance'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp, nasdaq.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
</Tabs>

---

## Returns

**results**: `HistoricalDividends`

Serializable results.

**provider**: `Optional[Literal['fmp', 'intrinio', 'nasdaq', 'tmx', 'yfinance']]`

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

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**ex_dividend_date**: `date`<br/>
The ex-dividend date - the date on which the stock begins trading without rights to the dividend.

**amount**: `float`<br/>
The dividend amount per share.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**ex_dividend_date**: `date`<br/>
The ex-dividend date - the date on which the stock begins trading without rights to the dividend.

**amount**: `float`<br/>
The dividend amount per share.

**declaration_date**: `date | None`<br/>
Declaration date of the historical dividends.

**record_date**: `date | None`<br/>
Record date of the historical dividends.

**payment_date**: `date | None`<br/>
Payment date of the historical dividends.

**adjusted_amount**: `float`<br/>
Split-adjusted dividend amount.

**dividend_yield**: `float | None`<br/>
Dividend yield represented by the payment.

**frequency**: `str | None`<br/>
Frequency of the payment.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**ex_dividend_date**: `date`<br/>
The ex-dividend date - the date on which the stock begins trading without rights to the dividend.

**amount**: `float`<br/>
The dividend amount per share.

**factor**: `float | None`<br/>
factor by which to multiply stock prices before this date, in order to calculate historically-adjusted stock prices.

**currency**: `str | None`<br/>
The currency in which the dividend is paid.

**split_ratio**: `float | None`<br/>
The ratio of the stock split, if a stock split occurred.

</TabItem>
<TabItem value='nasdaq' label='nasdaq'>

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**ex_dividend_date**: `date`<br/>
The ex-dividend date - the date on which the stock begins trading without rights to the dividend.

**amount**: `float`<br/>
The dividend amount per share.

**dividend_type**: `str | None`<br/>
The type of dividend - i.e., cash, stock.

**currency**: `str | None`<br/>
The currency in which the dividend is paid.

**record_date**: `date | None`<br/>
The record date of ownership for eligibility.

**payment_date**: `date | None`<br/>
The payment date of the dividend.

**declaration_date**: `date | None`<br/>
Declaration date of the dividend.

</TabItem>
<TabItem value='tmx' label='tmx'>

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**ex_dividend_date**: `date`<br/>
The ex-dividend date - the date on which the stock begins trading without rights to the dividend.

**amount**: `float`<br/>
The dividend amount per share.

**currency**: `str | None`<br/>
The currency the dividend is paid in.

**declaration_date**: `date | None`<br/>
The date of the announcement.

**record_date**: `date | None`<br/>
The record date of ownership for rights to the dividend.

**payment_date**: `date | None`<br/>
The date the dividend is paid.

</TabItem>
<TabItem value='yfinance' label='yfinance'>

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**ex_dividend_date**: `date`<br/>
The ex-dividend date - the date on which the stock begins trading without rights to the dividend.

**amount**: `float`<br/>
The dividend amount per share.

</TabItem>
</Tabs>

