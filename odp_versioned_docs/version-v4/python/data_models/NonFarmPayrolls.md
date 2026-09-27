---
title: "Non Farm Payrolls"
description: "Get Nonfarm Payrolls Survey"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `NonFarmPayrolls` | `NonFarmPayrollsQueryParams` | `NonFarmPayrollsData` |

### Import Statement

```python
from openbb_core.provider.standard_models.non_farm_payrolls import (
NonFarmPayrollsData,
NonFarmPayrollsQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | str | None | list[date | str | None]`<br/>
A specific date to get data for. Default is the latest report. Multiple items allowed for provider(s): fred.

</TabItem>
<TabItem value='fred' label='fred'>

**date**: `date | str | None | list[date | str | None]`<br/>
A specific date to get data for. Default is the latest report. Multiple items allowed for provider(s): fred.

**category**: `Literal['employees_nsa', 'employees_sa', 'employees_production_and_nonsupervisory', 'employees_women', 'employees_women_percent', 'avg_hours', 'avg_hours_production_and_nonsupervisory', 'avg_hours_overtime', 'avg_hours_overtime_production_and_nonsupervisory', 'avg_earnings_hourly', 'avg_earnings_hourly_production_and_nonsupervisory', 'avg_earnings_weekly', 'avg_earnings_weekly_production_and_nonsupervisory', 'index_weekly_hours', 'index_weekly_hours_production_and_nonsupervisory', 'index_weekly_payrolls', 'index_weekly_payrolls_production_and_nonsupervisory'] | None`<br/>
*Default:* employees_nsa<br/>
The category to query.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | str`<br/>
The date of the data.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**value**: `float`<br/>
</TabItem>
<TabItem value='fred' label='fred'>

**date**: `date | str`<br/>
The date of the data.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**value**: `float`<br/>
**name**: `str`<br/>
The name of the series.

**element_id**: `str`<br/>
The element id in the parent/child relationship.

**parent_id**: `str`<br/>
The parent id in the parent/child relationship.

**children**: `str | None`<br/>
The element_id of each child, as a comma-separated string.

**level**: `int`<br/>
The indentation level of the element.

</TabItem>
</Tabs>

