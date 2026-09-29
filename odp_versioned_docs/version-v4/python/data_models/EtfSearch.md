---
title: "Etf Search"
description: "Search for ETFs"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `EtfSearch` | `EtfSearchQueryParams` | `EtfSearchData` |

### Import Statement

```python
from openbb_core.provider.standard_models.etf_search import (
EtfSearchData,
EtfSearchQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**query**: `str | None`<br/>
Search query.

</TabItem>
<TabItem value='fmp' label='fmp'>

**query**: `str | None`<br/>
Search query.

**exchange**: `Literal['amex', 'nyse', 'nasdaq', 'tsx', 'euronext'] | None`<br/>
Exchange where the ETF is listed. If not provided, all exchanges are searched.

**country**: `Country | None`<br/>
Filter by country. Accepts ISO 3166-1 alpha-2 codes (e.g., 'US', 'DE'), alpha-3 codes (e.g., 'USA'), or country names (e.g., 'United States', 'united_states').

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**query**: `str | None`<br/>
Search query.

**exchange**: `Literal['xnas', 'arcx', 'bats', 'xnys', 'bvmf', 'xshg', 'xshe', 'xhkg', 'xbom', 'xnse', 'xidx', 'tase', 'xkrx', 'xkls', 'xmex', 'xses', 'roco', 'xtai', 'xbkk', 'xist'] | None`<br/>
Target a specific exchange by providing the MIC code.

</TabItem>
<TabItem value='tmx' label='tmx'>

**query**: `str | None`<br/>
Search query.

**div_freq**: `Literal['monthly', 'annually', 'quarterly'] | None`<br/>
The dividend payment frequency.

**sort_by**: `Literal['aum', 'return_1m', 'return_3m', 'return_6m', 'return_1y', 'return_3y', 'return_ytd', 'beta_1y', 'volume_avg_daily', 'management_fee', 'distribution_yield', 'pb_ratio', 'pe_ratio'] | None`<br/>
The column to sort by.

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
Whether to use a cached request. All ETF data comes from a single JSON file that is updated daily. To bypass, set to False. If True, the data will be cached for 4 hours.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.(ETF)

**name**: `str | None`<br/>
Name of the ETF.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.(ETF)

**name**: `str | None`<br/>
Name of the ETF.

**country**: `str | None`<br/>
Country where the ETF is domiciled.

**exchange**: `str | None`<br/>
Exchange where the ETF is listed.

**exchange_name**: `str | None`<br/>
The full name of the exchange.

**market_cap**: `int | float | None`<br/>
Market capitalization of the ETF.

**beta**: `float | None`<br/>
Beta of the ETF.

**price**: `float | None`<br/>
Current price of the ETF.

**last_annual_dividend**: `float | None`<br/>
Last annual dividend paid.

**volume**: `int | float | None`<br/>
Current trading volume of the ETF.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.(ETF)

**name**: `str | None`<br/>
Name of the ETF.

**exchange**: `str | None`<br/>
The exchange MIC code.

**figi_ticker**: `str | None`<br/>
The OpenFIGI ticker.

**ric**: `str | None`<br/>
The Reuters Instrument Code.

**isin**: `str | None`<br/>
The International Securities Identification Number.

**sedol**: `str | None`<br/>
The Stock Exchange Daily Official list.

**intrinio_id**: `str | None`<br/>
The unique Intrinio ID for the security.

</TabItem>
<TabItem value='tmx' label='tmx'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.(ETF)

**name**: `str | None`<br/>
Name of the ETF.

**short_name**: `str | None`<br/>
The short name of the ETF.

**inception_date**: `str | None`<br/>
The inception date of the ETF.

**issuer**: `str | None`<br/>
The issuer of the ETF.

**investment_style**: `str | None`<br/>
The investment style of the ETF.

**esg**: `bool | None`<br/>
Whether the ETF qualifies as an ESG fund.

**currency**: `str | None`<br/>
The currency of the ETF.

**unit_price**: `float | None`<br/>
The unit price of the ETF.

**close**: `float | None`<br/>
The closing price of the ETF.

**prev_close**: `float | None`<br/>
The previous closing price of the ETF.

**return_1m**: `float | None`<br/>
The one-month return of the ETF, as a normalized percent.

**return_3m**: `float | None`<br/>
The three-month return of the ETF, as a normalized percent.

**return_6m**: `float | None`<br/>
The six-month return of the ETF, as a normalized percent.

**return_ytd**: `float | None`<br/>
The year-to-date return of the ETF, as a normalized percent.

**return_1y**: `float | None`<br/>
The one-year return of the ETF, as a normalized percent.

**beta_1y**: `float | None`<br/>
The one-year beta of the ETF, as a normalized percent.

**return_3y**: `float | None`<br/>
The three-year return of the ETF, as a normalized percent.

**beta_3y**: `float | None`<br/>
The three-year beta of the ETF, as a normalized percent.

**return_5y**: `float | None`<br/>
The five-year return of the ETF, as a normalized percent.

**beta_5y**: `float | None`<br/>
The five-year beta of the ETF, as a normalized percent.

**return_10y**: `float | None`<br/>
The ten-year return of the ETF, as a normalized percent.

**beta_10y**: `float | None`<br/>
The ten-year beta of the ETF.

**beta_15y**: `float | None`<br/>
The fifteen-year beta of the ETF.

**return_from_inception**: `float | None`<br/>
The return from inception of the ETF, as a normalized percent.

**avg_volume**: `int | None`<br/>
The average daily volume of the ETF.

**avg_volume_30d**: `int | None`<br/>
The 30-day average volume of the ETF.

**aum**: `float | None`<br/>
The AUM of the ETF.

**pe_ratio**: `float | None`<br/>
The price-to-earnings ratio of the ETF.

**pb_ratio**: `float | None`<br/>
The price-to-book ratio of the ETF.

**management_fee**: `float | None`<br/>
The management fee of the ETF, as a normalized percent.

**mer**: `float | None`<br/>
The management expense ratio of the ETF, as a normalized percent.

**distribution_yield**: `float | None`<br/>
The distribution yield of the ETF, as a normalized percent.

**dividend_frequency**: `str | None`<br/>
The dividend payment frequency of the ETF.

</TabItem>
</Tabs>

