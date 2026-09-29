---
title: "splits"
description: "Get historical and upcoming stock split operations"
keywords:
- equity
- calendar
- splits
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/calendar/splits - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get historical and upcoming stock split operations.

Examples
--------

```python
from openbb import obb
obb.equity.calendar.splits()
# Get stock splits calendar for specific dates.
obb.equity.calendar.splits(start_date='2024-02-01', end_date='2024-02-07')
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

---

## Returns

**results**: `CalendarSplits`

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

**date**: `date | str`<br/>
The date of the data.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**numerator**: `float`<br/>
Numerator of the stock split.

**denominator**: `float`<br/>
Denominator of the stock split.

</TabItem>
<TabItem value='fmp' label='fmp'>

**date**: `date | str`<br/>
The date of the data.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**numerator**: `float`<br/>
Numerator of the stock split.

**denominator**: `float`<br/>
Denominator of the stock split.

</TabItem>
</Tabs>

