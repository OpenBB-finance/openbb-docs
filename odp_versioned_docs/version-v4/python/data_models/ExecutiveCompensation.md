---
title: "Executive Compensation"
description: "Get executive management team compensation for a given company over time"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `ExecutiveCompensation` | `ExecutiveCompensationQueryParams` | `ExecutiveCompensationData` |

### Import Statement

```python
from openbb_core.provider.standard_models.executive_compensation import (
ExecutiveCompensationData,
ExecutiveCompensationQueryParams,
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
*Default:* -1<br/>
Filters results by year, enter 0 for all data available. Default is the most recent year in the dataset, -1.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**cik**: `str | None`<br/>
Central Index Key (CIK) for the requested entity.

**report_date**: `date | None`<br/>
Date of reported compensation.

**company_name**: `str | None`<br/>
The name of the company.

**executive**: `str | None`<br/>
Name and position.

**year**: `int | None`<br/>
Year of the compensation.

**salary**: `int | float | None`<br/>
Base salary.

**bonus**: `int | float | None`<br/>
Bonus payments.

**stock_award**: `int | float | None`<br/>
Stock awards.

**option_award**: `int | float | None`<br/>
Option awards.

**incentive_plan_compensation**: `int | float | None`<br/>
Incentive plan compensation.

**all_other_compensation**: `int | float | None`<br/>
All other compensation.

**total**: `int | float | None`<br/>
Total compensation.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**cik**: `str | None`<br/>
Central Index Key (CIK) for the requested entity.

**report_date**: `date | None`<br/>
Date of reported compensation.

**company_name**: `str | None`<br/>
The name of the company.

**executive**: `str | None`<br/>
Name and position.

**year**: `int | None`<br/>
Year of the compensation.

**salary**: `int | float | None`<br/>
Base salary.

**bonus**: `int | float | None`<br/>
Bonus payments.

**stock_award**: `int | float | None`<br/>
Stock awards.

**option_award**: `int | float | None`<br/>
Option awards.

**incentive_plan_compensation**: `int | float | None`<br/>
Incentive plan compensation.

**all_other_compensation**: `int | float | None`<br/>
All other compensation.

**total**: `int | float | None`<br/>
Total compensation.

**accepted_date**: `datetime | None`<br/>
Date the filing was accepted.

**url**: `str | None`<br/>
URL to the filing data.

</TabItem>
</Tabs>

