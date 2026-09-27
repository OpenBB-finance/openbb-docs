---
title: "Personal Consumption Expenditures"
description: "Get Personal Consumption Expenditures (PCE) reports"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `PersonalConsumptionExpenditures` | `PersonalConsumptionExpendituresQueryParams` | `PersonalConsumptionExpendituresData` |

### Import Statement

```python
from openbb_core.provider.standard_models.personal_consumption_expenditures import (
PersonalConsumptionExpendituresData,
PersonalConsumptionExpendituresQueryParams,
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

**category**: `Literal['personal_income', 'wages_by_industry', 'real_pce_percent_change', 'real_pce_quantity_index', 'pce_price_index', 'pce_dollars', 'real_pce_chained_dollars', 'pce_price_percent_change'] | None`<br/>
*Default:* personal_income<br/>
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

**line**: `int`<br/>
The line number of the series in the table.

</TabItem>
</Tabs>

