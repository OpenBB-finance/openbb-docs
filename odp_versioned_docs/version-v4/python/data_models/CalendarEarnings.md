---
title: "Calendar Earnings"
description: "Get historical and upcoming company earnings releases"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `CalendarEarnings` | `CalendarEarningsQueryParams` | `CalendarEarningsData` |

### Import Statement

```python
from openbb_core.provider.standard_models.calendar_earnings import (
CalendarEarningsData,
CalendarEarningsQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
<TabItem value='fmp' label='fmp'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
<TabItem value='nasdaq' label='nasdaq'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
<TabItem value='seeking_alpha' label='seeking_alpha'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**country**: `Literal['us', 'ca'] | None`<br/>
*Default:* us<br/>
The country to get calendar data for. Accepts 'us'/'ca', ISO codes ('US', 'USA', 'CA', 'CAN'), or names ('United States', 'Canada').

</TabItem>
<TabItem value='tmx' label='tmx'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**report_date**: `date`<br/>
The date of the earnings report.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the entity.

**eps_previous**: `float | None`<br/>
The earnings-per-share from the same previously reported period.

**eps_consensus**: `float | None`<br/>
The analyst conesus earnings-per-share estimate.

</TabItem>
<TabItem value='fmp' label='fmp'>

**report_date**: `date`<br/>
The date of the earnings report.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the entity.

**eps_previous**: `float | None`<br/>
The earnings-per-share from the same previously reported period.

**eps_consensus**: `float | None`<br/>
The analyst conesus earnings-per-share estimate.

**eps_actual**: `float | None`<br/>
The actual earnings per share announced.

**revenue_consensus**: `float | None`<br/>
The revenue forecast consensus.

**revenue_actual**: `float | None`<br/>
The actual reported revenue.

**last_updated**: `date | None`<br/>
The date the data was updated last.

</TabItem>
<TabItem value='nasdaq' label='nasdaq'>

**report_date**: `date`<br/>
The date of the earnings report.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the entity.

**eps_previous**: `float | None`<br/>
The earnings-per-share from the same previously reported period.

**eps_consensus**: `float | None`<br/>
The analyst conesus earnings-per-share estimate.

**eps_actual**: `float | None`<br/>
The actual earnings per share (USD) announced.

**surprise_percent**: `float | None`<br/>
The earnings surprise as normalized percentage points.

**num_estimates**: `int | None`<br/>
The number of analysts providing estimates for the consensus.

**period_ending**: `str | None`<br/>
The fiscal period end date.

**previous_report_date**: `date | None`<br/>
The previous report date for the same period last year.

**reporting_time**: `str | None`<br/>
The reporting time - e.g. after market close.

**market_cap**: `int | None`<br/>
The market cap (USD) of the reporting entity.

</TabItem>
<TabItem value='seeking_alpha' label='seeking_alpha'>

**report_date**: `date`<br/>
The date of the earnings report.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the entity.

**eps_previous**: `float | None`<br/>
The earnings-per-share from the same previously reported period.

**eps_consensus**: `float | None`<br/>
The analyst conesus earnings-per-share estimate.

**market_cap**: `float | None`<br/>
Market cap of the entity.

**reporting_time**: `str | None`<br/>
The reporting time - e.g. after market close.

**exchange**: `str | None`<br/>
The primary trading exchange.

**sector_id**: `int | None`<br/>
The Seeking Alpha Sector ID.

</TabItem>
<TabItem value='tmx' label='tmx'>

**report_date**: `date`<br/>
The date of the earnings report.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str`<br/>
The company's name.

**eps_previous**: `float | None`<br/>
The earnings-per-share from the same previously reported period.

**eps_consensus**: `float | None`<br/>
The consensus estimated EPS in dollars.

**eps_actual**: `float | None`<br/>
The actual EPS in dollars.

**eps_surprise**: `float | None`<br/>
The EPS surprise in dollars.

**surprise_percent**: `float | None`<br/>
The EPS surprise as a normalized percent.

**reporting_time**: `str | None`<br/>
The time of the report - i.e., before or after market.

</TabItem>
</Tabs>

