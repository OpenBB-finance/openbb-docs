---
title: "search"
description: "Learn how to search for available currency pairs using the `obb.currency.search`  function, and retrieve a list of results, including provider name, warnings, chart,  and metadata. Explore the various parameters such as provider, symbol, date, search  terms, active tickers, order data, sort field, and limit. Dive into the details  of the returned data, including name, symbol, currency, stock exchange, exchange  short name, code, base currency, quote currency, market, locale, currency symbol,  currency name, base currency symbol, base currency name, last updated timestamp  in UTC, and delisted timestamp in UTC."
keywords:
- currency search
- available currency pairs
- obb.currency.search
- provider
- symbol
- date
- search terms
- active tickers
- order data
- sort field
- limit
- results
- warnings
- chart
- metadata
- name
- symbol
- currency
- stock exchange
- exchange short name
- code
- base currency
- quote currency
- market
- locale
- currency symbol
- currency name
- base currency symbol
- base currency name
- last updated utc
- delisted utc
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="currency/search - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Currency Search.

Search available currency pairs.
Currency pairs are the national currencies from two countries coupled for trading on
the foreign exchange (FX) marketplace.
Both currencies will have exchange rates on which the trade will have its position basis.
All trading within the forex market, whether selling, buying, or trading, will take place through currency pairs.
(ref: Investopedia)
Major currency pairs include pairs such as EUR/USD, USD/JPY, GBP/USD, etc.

Examples
--------

```python
from openbb import obb
obb.currency.search()
# Search for 'EUR' currency pair using 'intrinio' as provider.
obb.currency.search(query='EUR')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**query**: `str | None`<br/>
Query to search for currency pairs.

</TabItem>
<TabItem value='fmp' label='fmp'>

**query**: `str | None`<br/>
Query to search for currency pairs.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**query**: `str | None`<br/>
Query to search for currency pairs.

</TabItem>
</Tabs>

---

## Returns

**results**: `CurrencyPairs`

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

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the currency pair.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str`<br/>
Symbol of the currency pair.

**name**: `str | None`<br/>
Name of the currency pair.

**from_currency**: `str`<br/>
Base currency of the currency pair.

**to_currency**: `str`<br/>
Quote currency of the currency pair.

**from_name**: `str`<br/>
Name of the base currency.

**to_name**: `str`<br/>
Name of the quote currency.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the currency pair.

**base_currency**: `str`<br/>
ISO 4217 currency code of the base currency.

**quote_currency**: `str`<br/>
ISO 4217 currency code of the quote currency.

</TabItem>
</Tabs>

