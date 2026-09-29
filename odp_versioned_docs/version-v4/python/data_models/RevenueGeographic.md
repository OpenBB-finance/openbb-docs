---
title: "Revenue Geographic"
description: "Get the geographic breakdown of revenue for a given company over time"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `RevenueGeographic` | `RevenueGeographicQueryParams` | `RevenueGeographicData` |

### Import Statement

```python
from openbb_core.provider.standard_models.revenue_geographic import (
RevenueGeographicData,
RevenueGeographicQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol to get data for.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str`<br/>
Symbol to get data for.

**period**: `Literal['quarter', 'annual'] | None`<br/>
*Default:* annual<br/>
Time period of the data to return.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**period_ending**: `date`<br/>
The end date of the reporting period.

**fiscal_period**: `str | None`<br/>
The fiscal period of the reporting period.

**fiscal_year**: `int | None`<br/>
The fiscal year of the reporting period.

**filing_date**: `date | None`<br/>
The filing date of the report.

**region**: `str | None`<br/>
The region represented by the revenue data.

**revenue**: `int | float`<br/>
The total revenue attributed to the region.

</TabItem>
<TabItem value='fmp' label='fmp'>

**period_ending**: `date`<br/>
The end date of the reporting period.

**fiscal_period**: `str | None`<br/>
The fiscal period of the reporting period.

**fiscal_year**: `int | None`<br/>
The fiscal year of the reporting period.

**filing_date**: `date | None`<br/>
The filing date of the report.

**region**: `str | None`<br/>
The region represented by the revenue data.

**revenue**: `int | float`<br/>
The total revenue attributed to the region.

</TabItem>
</Tabs>

