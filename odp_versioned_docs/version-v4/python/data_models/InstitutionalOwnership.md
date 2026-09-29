---
title: "Institutional Ownership"
description: "Net statistics on institutional ownership for a given company, reported on 13-F filings"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `InstitutionalOwnership` | `InstitutionalOwnershipQueryParams` | `InstitutionalOwnershipData` |

### Import Statement

```python
from openbb_core.provider.standard_models.institutional_ownership import (
InstitutionalOwnershipData,
InstitutionalOwnershipQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp.

**year**: `int | None`<br/>
Calendar year for the data. If not provided, the latest year is used.

**quarter**: `int | None`<br/>
Calendar quarter for the data. Valid values are 1, 2, 3, or 4. If not provided, the quarter previous to the current quarter is used.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**cik**: `str | None`<br/>
Central Index Key (CIK) for the requested entity.

**date**: `date | str`<br/>
The date of the data.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**cik**: `str | None`<br/>
Central Index Key (CIK) for the requested entity.

**date**: `date | str`<br/>
The date of the data.

**investors_holding**: `int`<br/>
Number of investors holding the stock.

**last_investors_holding**: `int`<br/>
Number of investors holding the stock in the last quarter.

**investors_holding_change**: `int`<br/>
Change in the number of investors holding the stock.

**number_of_13f_shares**: `int | None`<br/>
Number of 13F shares.

**last_number_of_13f_shares**: `int | None`<br/>
Number of 13F shares in the last quarter.

**number_of_13f_shares_change**: `int | None`<br/>
Change in the number of 13F shares.

**total_invested**: `float`<br/>
Total amount invested.

**last_total_invested**: `float`<br/>
Total amount invested in the last quarter.

**total_invested_change**: `float`<br/>
Change in the total amount invested.

**ownership_percent**: `float`<br/>
Ownership percent.

**last_ownership_percent**: `float`<br/>
Ownership percent in the last quarter.

**ownership_percent_change**: `float`<br/>
Change in the ownership percent.

**new_positions**: `int`<br/>
Number of new positions.

**last_new_positions**: `int`<br/>
Number of new positions in the last quarter.

**new_positions_change**: `int`<br/>
Change in the number of new positions.

**increased_positions**: `int`<br/>
Number of increased positions.

**last_increased_positions**: `int`<br/>
Number of increased positions in the last quarter.

**increased_positions_change**: `int`<br/>
Change in the number of increased positions.

**closed_positions**: `int`<br/>
Number of closed positions.

**last_closed_positions**: `int`<br/>
Number of closed positions in the last quarter.

**closed_positions_change**: `int`<br/>
Change in the number of closed positions.

**reduced_positions**: `int`<br/>
Number of reduced positions.

**last_reduced_positions**: `int`<br/>
Number of reduced positions in the last quarter.

**reduced_positions_change**: `int`<br/>
Change in the number of reduced positions.

**total_calls**: `int`<br/>
Total number of call options contracts traded for Apple Inc. on the specified date.

**last_total_calls**: `int`<br/>
Total number of call options contracts traded for Apple Inc. on the previous reporting date.

**total_calls_change**: `int`<br/>
Change in the total number of call options contracts traded between the current and previous reporting dates.

**total_puts**: `int`<br/>
Total number of put options contracts traded for Apple Inc. on the specified date.

**last_total_puts**: `int`<br/>
Total number of put options contracts traded for Apple Inc. on the previous reporting date.

**total_puts_change**: `int`<br/>
Change in the total number of put options contracts traded between the current and previous reporting dates.

**put_call_ratio**: `float`<br/>
Put-call ratio, which is the ratio of the total number of put options to call options traded on the specified date.

**last_put_call_ratio**: `float`<br/>
Put-call ratio on the previous reporting date.

**put_call_ratio_change**: `float`<br/>
Change in the put-call ratio between the current and previous reporting dates.

</TabItem>
</Tabs>

