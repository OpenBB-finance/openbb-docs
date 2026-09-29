---
title: "forward_eps"
description: "Get forward EPS estimates"
keywords:
- equity
- estimates
- forward_eps
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/estimates/forward_eps - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get forward EPS estimates.

Examples
--------

```python
from openbb import obb
obb.equity.estimates.forward_eps(symbol='AAPL')
obb.equity.estimates.forward_eps(fiscal_year=2025, fiscal_period='fy')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | None | list[str | None]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp, intrinio, seeking_alpha.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str | None | list[str | None]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp, intrinio, seeking_alpha.

**fiscal_period**: `Literal['annual', 'quarter'] | None`<br/>
*Default:* annual<br/>
The future fiscal period to retrieve estimates for.

**limit**: `int | None`<br/>
The number of data entries to return. Number of historical periods.

**include_historical**: `bool | None`<br/>
*Default:* False<br/>
If True, the data will include all past data and the limit will be ignored.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str | None | list[str | None]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp, intrinio, seeking_alpha.

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
Symbol to get data for. Multiple items allowed for provider(s): fmp, intrinio, seeking_alpha.

**period**: `Literal['annual', 'quarter'] | None`<br/>
*Default:* quarter<br/>
The reporting period.

</TabItem>
</Tabs>

---

## Returns

**results**: `ForwardEpsEstimates`

Serializable results.

**provider**: `Optional[Literal['fmp', 'intrinio', 'seeking_alpha']]`

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

**low_estimate**: `float | None`<br/>
Estimated EPS low for the period.

**high_estimate**: `float | None`<br/>
Estimated EPS high for the period.

**mean**: `float | None`<br/>
Estimated EPS mean for the period.

**median**: `float | None`<br/>
Estimated EPS median for the period.

**standard_deviation**: `float | None`<br/>
Estimated EPS standard deviation for the period.

**number_of_analysts**: `int | None`<br/>
Number of analysts providing estimates for the period.

</TabItem>
<TabItem value='fmp' label='fmp'>

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

**low_estimate**: `float | None`<br/>
Estimated EPS low for the period.

**high_estimate**: `float | None`<br/>
Estimated EPS high for the period.

**mean**: `float | None`<br/>
Estimated EPS mean for the period.

**median**: `float | None`<br/>
Estimated EPS median for the period.

**standard_deviation**: `float | None`<br/>
Estimated EPS standard deviation for the period.

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

**low_estimate**: `float | None`<br/>
Estimated EPS low for the period.

**high_estimate**: `float | None`<br/>
Estimated EPS high for the period.

**mean**: `float | None`<br/>
Estimated EPS mean for the period.

**median**: `float | None`<br/>
Estimated EPS median for the period.

**standard_deviation**: `float | None`<br/>
Estimated EPS standard deviation for the period.

**number_of_analysts**: `int | None`<br/>
Number of analysts providing estimates for the period.

**revisions_change_percent**: `float | None`<br/>
The earnings per share (EPS) percent change in estimate for the period.

**mean_1w**: `float | None`<br/>
The mean estimate for the period one week ago.

**mean_1m**: `float | None`<br/>
The mean estimate for the period one month ago.

**mean_2m**: `float | None`<br/>
The mean estimate for the period two months ago.

**mean_3m**: `float | None`<br/>
The mean estimate for the period three months ago.

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

**low_estimate**: `float | None`<br/>
Estimated EPS low for the period.

**high_estimate**: `float | None`<br/>
Estimated EPS high for the period.

**mean**: `float | None`<br/>
Estimated EPS mean for the period.

**median**: `float | None`<br/>
Estimated EPS median for the period.

**standard_deviation**: `float | None`<br/>
Estimated EPS standard deviation for the period.

**number_of_analysts**: `int | None`<br/>
Number of analysts providing estimates for the period.

**normalized_actual**: `float | None`<br/>
Actual normalized EPS.

**period_growth**: `float | None`<br/>
Estimated (or actual if reported) EPS growth for the period.

**low_estimate_gaap**: `float | None`<br/>
Estimated GAAP EPS low for the period.

**high_estimate_gaap**: `float | None`<br/>
Estimated GAAP EPS high for the period.

**mean_gaap**: `float | None`<br/>
Estimated GAAP EPS mean for the period.

**gaap_actual**: `float | None`<br/>
Actual GAAP EPS.

</TabItem>
</Tabs>

