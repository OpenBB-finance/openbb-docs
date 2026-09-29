---
title: "Calendar Events"
description: "Get historical and upcoming company events, such as Investor Day, Conference Call, Earnings Release"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `CalendarEvents` | `CalendarEventsQueryParams` | `CalendarEventsData` |

### Import Statement

```python
from openbb_core.provider.standard_models.calendar_events import (
CalendarEventsData,
CalendarEventsQueryParams,
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
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | str`<br/>
The date of the data. The date of the event.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

</TabItem>
<TabItem value='fmp' label='fmp'>

**date**: `date | str`<br/>
The date of the data. The date of the event.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**exchange**: `str | None`<br/>
Exchange where the symbol is listed.

**time**: `str | None`<br/>
The estimated time of the event, local to the exchange.

**timing**: `str | None`<br/>
The timing of the event - e.g. before, during, or after market hours.

**description**: `str | None`<br/>
The title of the event.

**url**: `str | None`<br/>
The URL to the press release for the announcement.

**announcement_date**: `date | None`<br/>
The date when the event was announced.

</TabItem>
</Tabs>

