---
title: "Reported Financials"
description: "Get financial statements as reported by the company"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `ReportedFinancials` | `ReportedFinancialsQueryParams` | `ReportedFinancialsData` |

### Import Statement

```python
from openbb_core.provider.standard_models.reported_financials import (
ReportedFinancialsData,
ReportedFinancialsQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol to get data for.

**period**: `str | None`<br/>
*Default:* annual<br/>
Time period of the data to return.

**statement_type**: `str | None`<br/>
*Default:* balance<br/>
The type of financial statement - i.e, balance, income, cash.

**limit**: `int | None`<br/>
*Default:* 100<br/>
The number of data entries to return. Although the response object contains multiple results, because of the variance in the fields, year-to-year and quarter-to-quarter, it is recommended to view results in small chunks.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str`<br/>
Symbol to get data for.

**period**: `Literal['annual', 'quarter'] | None`<br/>
*Default:* annual<br/>
None

**statement_type**: `Literal['balance', 'income', 'cash'] | None`<br/>
*Default:* income<br/>
Cash flow statements are reported as YTD, Q4 is the same as FY.

**limit**: `int | None`<br/>
*Default:* 100<br/>
The number of data entries to return. Although the response object contains multiple results, because of the variance in the fields, year-to-year and quarter-to-quarter, it is recommended to view results in small chunks.

**fiscal_year**: `int | None`<br/>
The specific fiscal year.  Reports do not go beyond 2008.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**period_ending**: `date`<br/>
The ending date of the reporting period.

**fiscal_period**: `str`<br/>
The fiscal period of the report (e.g. FY, Q1, etc.).

**fiscal_year**: `int | None`<br/>
The fiscal year of the fiscal period.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**period_ending**: `date`<br/>
The ending date of the reporting period.

**fiscal_period**: `str`<br/>
The fiscal period of the report (e.g. FY, Q1, etc.).

**fiscal_year**: `int | None`<br/>
The fiscal year of the fiscal period.

</TabItem>
</Tabs>

