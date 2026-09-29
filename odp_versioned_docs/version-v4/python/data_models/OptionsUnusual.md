---
title: "Options Unusual"
description: "Get the complete options chain for a ticker"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `OptionsUnusual` | `OptionsUnusualQueryParams` | `OptionsUnusualData` |

### Import Statement

```python
from openbb_core.provider.standard_models.options_unusual import (
OptionsUnusualData,
OptionsUnusualQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | None`<br/>
Symbol to get data for. (the underlying symbol)

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str | None`<br/>
Symbol to get data for. (the underlying symbol)

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format. If no symbol is supplied, requests are only allowed for a single date. Use the start_date for the target date. Intrinio appears to have data beginning Feb/2022, but is unclear when it actually began.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format. If a symbol is not supplied, do not include an end date.

**trade_type**: `Literal['block', 'sweep', 'large'] | None`<br/>
The type of unusual activity to query for.

**sentiment**: `Literal['bullish', 'bearish', 'neutral'] | None`<br/>
The sentiment type to query for.

**min_value**: `int | float | None`<br/>
The inclusive minimum total value for the unusual activity.

**max_value**: `int | float | None`<br/>
The inclusive maximum total value for the unusual activity.

**limit**: `int | None`<br/>
*Default:* 100000<br/>
The number of data entries to return. A typical day for all symbols will yield 50-80K records. The API will paginate at 1000 records. The high default limit (100K) is to be able to reliably capture the most days. The high absolute limit (1.25M) is to allow for outlier days. Queries at the absolute limit will take a long time, and might be unreliable. Apply filters to improve performance.

**source**: `Literal['delayed', 'realtime'] | None`<br/>
*Default:* delayed<br/>
The source of the data. Either realtime or delayed.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**underlying_symbol**: `str | None`<br/>
Symbol representing the entity requested in the data. (the underlying symbol)

**contract_symbol**: `str`<br/>
Contract symbol for the option.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**underlying_symbol**: `str | None`<br/>
Symbol representing the entity requested in the data. (the underlying symbol)

**contract_symbol**: `str`<br/>
Contract symbol for the option.

**trade_timestamp**: `datetime`<br/>
The datetime of order placement.

**trade_type**: `Literal['block', 'sweep', 'large']`<br/>
The type of unusual trade.

**sentiment**: `Literal['bullish', 'bearish', 'neutral']`<br/>
Bullish, Bearish, or Neutral Sentiment is estimated based on whether the trade was executed at the bid, ask, or mark price.

**bid_at_execution**: `float`<br/>
Bid price at execution.

**ask_at_execution**: `float`<br/>
Ask price at execution.

**average_price**: `float`<br/>
The average premium paid per option contract.

**underlying_price_at_execution**: `float | None`<br/>
Price of the underlying security at execution of trade.

**total_size**: `int`<br/>
The total number of contracts involved in a single transaction.

**total_value**: `int | float`<br/>
The aggregated value of all option contract premiums included in the trade.

</TabItem>
</Tabs>

