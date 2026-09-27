---
title: "forward_sales"
description: "Get forward sales estimates"
keywords:
- equity
- estimates
- forward_sales
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/estimates/forward_sales - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get forward sales estimates.

Examples
--------

```python
from openbb import obb
obb.equity.estimates.forward_sales(symbol='AAPL')
obb.equity.estimates.forward_sales(fiscal_year=2025, fiscal_period='fy')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | None | list[str | None]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): intrinio, seeking_alpha.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str | None | list[str | None]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): intrinio, seeking_alpha.

**fiscal_year**: `int | None`<br/>
The future fiscal year to retrieve estimates for. When no symbol and year is supplied the current calendar year is used.

**fiscal_period**: `Literal['fy', 'q1', 'q2', 'q3', 'q4'] | None`<br/>
The future fiscal period to retrieve estimates for.

**calendar_year**: `int | None`<br/>
The future calendar year to retrieve estimates for. When no symbol and year is supplied the current calendar year is used.

**calendar_period**: `Literal['q1', 'q2', 'q3', 'q4'] | None`<br/>
The future calendar period to retrieve estimates for.

</TabItem>
<TabItem value='seeking_alpha' label='seeking_alpha'>

**symbol**: `str | None | list[str | None]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): intrinio, seeking_alpha.

**period**: `Literal['annual', 'quarter'] | None`<br/>
*Default:* quarter<br/>
The reporting period.

</TabItem>
</Tabs>

---

## Returns

**results**: `ForwardSalesEstimates`

Serializable results.

**provider**: `Optional[Literal['intrinio', 'seeking_alpha']]`

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

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the entity.

**date**: `date | str`<br/>
The date of the data.

**fiscal_year**: `int | None`<br/>
Fiscal year for the estimate.

**fiscal_period**: `str | None`<br/>
Fiscal quarter for the estimate.

**calendar_year**: `int | None`<br/>
Calendar year for the estimate.

**calendar_period**: `str | None`<br/>
Calendar quarter for the estimate.

**low_estimate**: `int | None`<br/>
The sales estimate low for the period.

**high_estimate**: `int | None`<br/>
The sales estimate high for the period.

**mean**: `int | None`<br/>
The sales estimate mean for the period.

**median**: `int | None`<br/>
The sales estimate median for the period.

**standard_deviation**: `int | None`<br/>
The sales estimate standard deviation for the period.

**number_of_analysts**: `int | None`<br/>
Number of analysts providing estimates for the period.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the entity.

**date**: `date | str`<br/>
The date of the data.

**fiscal_year**: `int | None`<br/>
Fiscal year for the estimate.

**fiscal_period**: `str | None`<br/>
Fiscal quarter for the estimate.

**calendar_year**: `int | None`<br/>
Calendar year for the estimate.

**calendar_period**: `str | None`<br/>
Calendar quarter for the estimate.

**low_estimate**: `int | None`<br/>
The sales estimate low for the period.

**high_estimate**: `int | None`<br/>
The sales estimate high for the period.

**mean**: `int | None`<br/>
The sales estimate mean for the period.

**median**: `int | None`<br/>
The sales estimate median for the period.

**standard_deviation**: `int | None`<br/>
The sales estimate standard deviation for the period.

**number_of_analysts**: `int | None`<br/>
Number of analysts providing estimates for the period.

**revisions_1w_up**: `int | None`<br/>
Number of revisions up in the last week.

**revisions_1w_down**: `int | None`<br/>
Number of revisions down in the last week.

**revisions_1w_change_percent**: `float | None`<br/>
The analyst revisions percent change in estimate for the period of 1 week.

**revisions_1m_up**: `int | None`<br/>
Number of revisions up in the last month.

**revisions_1m_down**: `int | None`<br/>
Number of revisions down in the last month.

**revisions_1m_change_percent**: `float | None`<br/>
The analyst revisions percent change in estimate for the period of 1 month.

**revisions_3m_up**: `int | None`<br/>
Number of revisions up in the last 3 months.

**revisions_3m_down**: `int | None`<br/>
Number of revisions down in the last 3 months.

**revisions_3m_change_percent**: `float | None`<br/>
The analyst revisions percent change in estimate for the period of 3 months.

</TabItem>
<TabItem value='seeking_alpha' label='seeking_alpha'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the entity.

**date**: `date | str`<br/>
The date of the data.

**fiscal_year**: `int | None`<br/>
Fiscal year for the estimate.

**fiscal_period**: `str | None`<br/>
Fiscal quarter for the estimate.

**calendar_year**: `int | None`<br/>
Calendar year for the estimate.

**calendar_period**: `str | None`<br/>
Calendar quarter for the estimate.

**low_estimate**: `int | None`<br/>
The sales estimate low for the period.

**high_estimate**: `int | None`<br/>
The sales estimate high for the period.

**mean**: `int | None`<br/>
The sales estimate mean for the period.

**median**: `int | None`<br/>
The sales estimate median for the period.

**standard_deviation**: `int | None`<br/>
The sales estimate standard deviation for the period.

**number_of_analysts**: `int | None`<br/>
Number of analysts providing estimates for the period.

**actual**: `int | None`<br/>
Actual sales (revenue) for the period.

**period_growth**: `float | None`<br/>
Estimated (or actual if reported) EPS growth for the period.

</TabItem>
</Tabs>

