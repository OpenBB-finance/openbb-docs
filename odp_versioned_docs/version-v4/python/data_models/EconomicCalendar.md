---
title: "Economic Calendar"
description: "Get the upcoming, or historical, economic calendar of global events"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `EconomicCalendar` | `EconomicCalendarQueryParams` | `EconomicCalendarData` |

### Import Statement

```python
from openbb_core.provider.standard_models.economic_calendar import (
EconomicCalendarData,
EconomicCalendarQueryParams,
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
<TabItem value='fred' label='fred'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**release_id**: `int | None`<br/>
Filter by release ID.

</TabItem>
<TabItem value='nasdaq' label='nasdaq'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**country**: `str | None`<br/>
Country of the event. Accepts country names, ISO 3166-1 alpha-2/alpha-3 codes. Multiple comma-separated values allowed.

</TabItem>
<TabItem value='tradingeconomics' label='tradingeconomics'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**country**: `str | None`<br/>
Country of the event.

**importance**: `Literal['low', 'medium', 'high'] | None`<br/>
Importance of the event.

**group**: `Literal['interest_rate', 'inflation', 'bonds', 'consumer', 'gdp', 'government', 'housing', 'labour', 'markets', 'money', 'prices', 'trade', 'business'] | None`<br/>
Grouping of events.

**calendar_id**: `None | int | str | None`<br/>
Get events by TradingEconomics Calendar ID.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `datetime | None | str`<br/>
The date of the data.

**country**: `str | None`<br/>
Country of event.

**category**: `str | None`<br/>
Category of event.

**event**: `str | None`<br/>
Event name.

**importance**: `str | None`<br/>
The importance level for the event.

**source**: `str | None`<br/>
Source of the data.

**currency**: `str | None`<br/>
Currency of the data.

**unit**: `str | None`<br/>
Unit of the data.

**consensus**: `str | float | None`<br/>
Average forecast among a representative group of economists.

**previous**: `str | float | None`<br/>
Value for the previous period after the revision (if revision is applicable).

**revised**: `str | float | None`<br/>
Revised previous value, if applicable.

**actual**: `str | float | None`<br/>
Latest released value.

</TabItem>
<TabItem value='fmp' label='fmp'>

**date**: `datetime | None | str`<br/>
The date of the data.

**country**: `str | None`<br/>
Country of event.

**category**: `str | None`<br/>
Category of event.

**event**: `str | None`<br/>
Event name.

**importance**: `str | None`<br/>
The importance level for the event.

**source**: `str | None`<br/>
Source of the data.

**currency**: `str | None`<br/>
Currency of the data.

**unit**: `str | None`<br/>
Unit of the data.

**consensus**: `str | float | None`<br/>
Average forecast among a representative group of economists.

**previous**: `str | float | None`<br/>
Value for the previous period after the revision (if revision is applicable).

**revised**: `str | float | None`<br/>
Revised previous value, if applicable.

**actual**: `str | float | None`<br/>
Latest released value.

**change**: `float | None`<br/>
Value change since previous.

**change_percent**: `float | None`<br/>
Percentage change since previous.

</TabItem>
<TabItem value='fred' label='fred'>

**date**: `datetime | None | str`<br/>
The date of the data.

**country**: `str | None`<br/>
Country of event.

**category**: `str | None`<br/>
Category of event.

**event**: `str | None`<br/>
Event name.

**importance**: `str | None`<br/>
The importance level for the event.

**source**: `str | None`<br/>
Source of the data.

**currency**: `str | None`<br/>
Currency of the data.

**unit**: `str | None`<br/>
Unit of the data.

**consensus**: `str | float | None`<br/>
Average forecast among a representative group of economists.

**previous**: `str | float | None`<br/>
Value for the previous period after the revision (if revision is applicable).

**revised**: `str | float | None`<br/>
Revised previous value, if applicable.

**actual**: `str | float | None`<br/>
Latest released value.

**release_id**: `int | None`<br/>
Release ID associated with the economic event.

</TabItem>
<TabItem value='nasdaq' label='nasdaq'>

**date**: `datetime | None | str`<br/>
The date of the data.

**country**: `str | None`<br/>
Country of event.

**category**: `str | None`<br/>
Category of event.

**event**: `str | None`<br/>
Event name.

**importance**: `str | None`<br/>
The importance level for the event.

**source**: `str | None`<br/>
Source of the data.

**currency**: `str | None`<br/>
Currency of the data.

**unit**: `str | None`<br/>
Unit of the data.

**consensus**: `str | float | None`<br/>
Average forecast among a representative group of economists.

**previous**: `str | float | None`<br/>
Value for the previous period after the revision (if revision is applicable).

**revised**: `str | float | None`<br/>
Revised previous value, if applicable.

**actual**: `str | float | None`<br/>
Latest released value.

**description**: `str | None`<br/>
Event description.

</TabItem>
<TabItem value='tradingeconomics' label='tradingeconomics'>

**date**: `datetime | None | str`<br/>
The date of the data.

**country**: `str | None`<br/>
Country of event.

**category**: `str | None`<br/>
Category of event.

**event**: `str | None`<br/>
Event name.

**importance**: `str | None`<br/>
The importance level for the event.

**source**: `str | None`<br/>
Source of the data.

**currency**: `str | None`<br/>
Currency of the data.

**unit**: `str | None`<br/>
Unit of the data.

**consensus**: `str | float | None`<br/>
Average forecast among a representative group of economists.

**previous**: `str | float | None`<br/>
Value for the previous period after the revision (if revision is applicable).

**revised**: `str | float | None`<br/>
Revised previous value, if applicable.

**actual**: `str | float | None`<br/>
Latest released value.

**forecast**: `str | float | None`<br/>
TradingEconomics projections.

**reference**: `str | None`<br/>
Abbreviated period for which released data refers to.

**reference_date**: `date | None`<br/>
Date for the reference period.

**calendar_id**: `int | None`<br/>
TradingEconomics Calendar ID.

**date_span**: `int | None`<br/>
Date span of the event.

**symbol**: `str | None`<br/>
TradingEconomics Symbol.

**ticker**: `str | None`<br/>
TradingEconomics Ticker symbol.

**te_url**: `str | None`<br/>
TradingEconomics URL path.

**source_url**: `str | None`<br/>
Source URL.

**last_updated**: `datetime | None`<br/>
Last update of the data.

</TabItem>
</Tabs>

