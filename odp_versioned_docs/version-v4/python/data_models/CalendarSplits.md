---
title: "Calendar Splits"
description: "Get historical and upcoming stock split operations"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `CalendarSplits` | `CalendarSplitsQueryParams` | `CalendarSplitsData` |

### Import Statement

```python
from openbb_core.provider.standard_models.calendar_splits import (
CalendarSplitsData,
CalendarSplitsQueryParams,
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

