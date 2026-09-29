---
title: "institutional"
description: "Learn about institutional ownership data, and how to use the OBB.equity.ownership.institutional  function in Python to access the data. Explore the symbol, include_current_quarter,  date, and provider parameters. Understand the meaning and usage of the results,  provider, warnings, chart, and metadata properties. Additionally, get detailed descriptions  of the various data fields such as symbol, cik, date, investors_holding, number_of_13f_shares,  total_invested, ownership_percent, new_positions, closed_positions, total_calls,  total_puts, and put_call_ratio."
keywords:
- institutional ownership data
- python OBB.equity.ownership.institutional function
- symbol parameter
- include_current_quarter parameter
- date parameter
- provider parameter
- results property
- provider property
- warnings property
- chart property
- metadata property
- data description
- symbol data
- cik data
- date data
- investors_holding data
- last_investors_holding data
- investors_holding_change data
- number_of_13f_shares data
- last_number_of_13f_shares data
- number_of_13f_shares_change data
- total_invested data
- last_total_invested data
- total_invested_change data
- ownership_percent data
- last_ownership_percent data
- ownership_percent_change data
- new_positions data
- last_new_positions data
- new_positions_change data
- increased_positions data
- last_increased_positions data
- increased_positions_change data
- closed_positions data
- last_closed_positions data
- closed_positions_change data
- reduced_positions data
- last_reduced_positions data
- reduced_positions_change data
- total_calls data
- last_total_calls data
- total_calls_change data
- total_puts data
- last_total_puts data
- total_puts_change data
- put_call_ratio data
- last_put_call_ratio data
- put_call_ratio_change data
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/ownership/institutional - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Net statistics on institutional ownership for a given company, reported on 13-F filings.

Examples
--------

```python
from openbb import obb
obb.equity.ownership.institutional(symbol='AAPL')
obb.equity.ownership.institutional(symbol='AAPL', year=2024, quarter=2)
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

---

## Returns

**results**: `InstitutionalOwnership`

Serializable results.

**provider**: `Optional[Literal['fmp']]`

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

