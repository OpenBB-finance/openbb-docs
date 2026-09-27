---
title: "revenue_per_geography"
description: "Learn about the revenue per geography data with the geographic revenue  data Python function in this documentation page. Understand the symbol, period,  structure, and provider parameters. Explore the returns, results, metadata, and  the data structure including the date, geographic segment, and revenue by region  (Americas, Europe, Greater China, Japan, Rest of Asia Pacific)."
keywords:
- geographic revenue data
- revenue per geography
- Python function
- documentation page
- symbol parameter
- period parameter
- structure parameter
- provider parameter
- returns
- results
- metadata
- data
- date
- geographic segment
- Americas
- Europe
- Greater China
- Japan
- Rest of Asia Pacific
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/fundamental/revenue_per_geography - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get the geographic breakdown of revenue for a given company over time.

Examples
--------

```python
from openbb import obb
obb.equity.fundamental.revenue_per_geography(symbol='AAPL')
obb.equity.fundamental.revenue_per_geography(symbol='AAPL', period='quarter')
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

**results**: `RevenueGeographic`

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

