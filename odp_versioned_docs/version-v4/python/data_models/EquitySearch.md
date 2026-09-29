---
title: "Equity Search"
description: "Search for stock symbol, CIK, LEI, or company name"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `EquitySearch` | `EquitySearchQueryParams` | `EquitySearchData` |

### Import Statement

```python
from openbb_core.provider.standard_models.equity_search import (
EquitySearchData,
EquitySearchQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**query**: `str | None`<br/>
Search query.

**is_symbol**: `bool | None`<br/>
*Default:* False<br/>
Whether to search by ticker symbol.

</TabItem>
<TabItem value='cboe' label='cboe'>

**query**: `str | None`<br/>
Search query.

**is_symbol**: `bool | None`<br/>
*Default:* False<br/>
Whether to search by ticker symbol.

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
Whether to use the cache or not.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**query**: `str | None`<br/>
Search query.

**is_symbol**: `bool | None`<br/>
*Default:* False<br/>
Whether to search by ticker symbol.

**active**: `bool | None`<br/>
*Default:* True<br/>
When true, return companies that are actively traded (having stock prices within the past 14 days). When false, return companies that are not actively traded or never have been traded.

**limit**: `int | None`<br/>
*Default:* 10000<br/>
The number of data entries to return.

</TabItem>
<TabItem value='nasdaq' label='nasdaq'>

**query**: `str | None`<br/>
Search query.

**is_symbol**: `bool | None`<br/>
*Default:* False<br/>
Whether to search by ticker symbol.

**is_etf**: `bool | None`<br/>
*Default:* False<br/>
If True, returns only ETFs.

</TabItem>
<TabItem value='sec' label='sec'>

**query**: `str | None`<br/>
Search query.

**is_symbol**: `bool | None`<br/>
*Default:* False<br/>
Whether to search by ticker symbol.

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
Whether to use the cache or not.

**is_fund**: `bool | None`<br/>
*Default:* False<br/>
Whether to direct the search to the list of mutual funds and ETFs.

</TabItem>
<TabItem value='tmx' label='tmx'>

**query**: `str | None`<br/>
Search query.

**is_symbol**: `bool | None`<br/>
*Default:* False<br/>
Whether to search by ticker symbol.

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
Whether to use a cached request. The list of companies is cached for two days.

</TabItem>
<TabItem value='tradier' label='tradier'>

**query**: `str | None`<br/>
Search query.

**is_symbol**: `bool | None`<br/>
*Default:* False<br/>
Whether the query is a symbol. Defaults to False.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the company.

</TabItem>
<TabItem value='cboe' label='cboe'>

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the company.

**dpm_name**: `str | None`<br/>
Name of the primary market maker.

**post_station**: `str | None`<br/>
Post and station location on the CBOE trading floor.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the company.

**cik**: `str | None`<br/>
**lei**: `str | None`<br/>
The Legal Entity Identifier (LEI) of the company.

**intrinio_id**: `str`<br/>
The Intrinio ID of the company.

</TabItem>
<TabItem value='nasdaq' label='nasdaq'>

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the company.

**nasdaq_traded**: `str | None`<br/>
Is Nasdaq traded?

**exchange**: `str | None`<br/>
Primary Exchange

**market_category**: `str | None`<br/>
Market Category

**etf**: `str | None`<br/>
Is ETF?

**round_lot_size**: `float | None`<br/>
Round Lot Size

**test_issue**: `str | None`<br/>
Is test Issue?

**financial_status**: `str | None`<br/>
Financial Status

**cqs_symbol**: `str | None`<br/>
CQS Symbol

**nasdaq_symbol**: `str | None`<br/>
NASDAQ Symbol

**next_shares**: `str | None`<br/>
Is NextShares?

</TabItem>
<TabItem value='sec' label='sec'>

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the company.

**cik**: `str`<br/>
Central Index Key

</TabItem>
<TabItem value='tmx' label='tmx'>

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the company.

</TabItem>
<TabItem value='tradier' label='tradier'>

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the company.

**exchange**: `str`<br/>
Exchange where the security is listed.

**security_type**: `Literal['stock', 'option', 'etf', 'index', 'mutual_fund']`<br/>
Type of security.

</TabItem>
</Tabs>

