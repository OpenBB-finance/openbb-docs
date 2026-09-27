---
title: "pce"
description: "Get Personal Consumption Expenditures (PCE) reports"
keywords:
- economy
- pce
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="economy/pce - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get Personal Consumption Expenditures (PCE) reports.

Examples
--------

```python
from openbb import obb
obb.economy.pce()
# Get reports for multiple dates, entered as a comma-separated string.
obb.economy.pce(date='2024-05-01,2024-04-01,2023-05-01', category='pce_price_index')
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

---

## Returns

**results**: `PersonalConsumptionExpenditures`

Serializable results.

**provider**: `Optional[Literal['fred']]`

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

