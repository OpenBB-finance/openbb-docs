---
title: "revenue_per_segment"
description: "Learn how to get revenue data for a specific business line using the  equity fundamental revenue per segment function."
keywords:
- Revenue Business Line
- business line revenue data
- equity fundamental revenue per segment
- symbol
- period
- structure
- provider
- results
- RevenueBusinessLine
- chart
- metadata
- data
- date
- business line
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/fundamental/revenue_per_segment - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get the revenue breakdown by business segment for a given company over time.

Examples
--------

```python
from openbb import obb
obb.equity.fundamental.revenue_per_segment(symbol='AAPL')
obb.equity.fundamental.revenue_per_segment(symbol='AAPL', period='quarter')
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

---

## Returns

**results**: `RevenueBusinessLine`

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

**period_ending**: `date`<br/>
The end date of the reporting period.

**fiscal_period**: `str | None`<br/>
The fiscal period of the reporting period.

**fiscal_year**: `int | None`<br/>
The fiscal year of the reporting period.

**filing_date**: `date | None`<br/>
The filing date of the report.

**business_line**: `str | None`<br/>
The business line represented by the revenue data.

**revenue**: `int | float`<br/>
The total revenue attributed to the business line.

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

**business_line**: `str | None`<br/>
The business line represented by the revenue data.

**revenue**: `int | float`<br/>
The total revenue attributed to the business line.

</TabItem>
</Tabs>

