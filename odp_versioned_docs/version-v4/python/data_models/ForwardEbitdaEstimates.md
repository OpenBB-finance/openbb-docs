---
title: "Forward Ebitda Estimates"
description: "Get forward EBITDA estimates"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `ForwardEbitdaEstimates` | `ForwardEbitdaEstimatesQueryParams` | `ForwardEbitdaEstimatesData` |

### Import Statement

```python
from openbb_core.provider.standard_models.forward_ebitda_estimates import (
ForwardEbitdaEstimatesData,
ForwardEbitdaEstimatesQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | None | list[str | None]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp, intrinio.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str | None | list[str | None]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp, intrinio.

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
Symbol to get data for. Multiple items allowed for provider(s): fmp, intrinio.

**fiscal_period**: `Literal['quarter', 'annual'] | None`<br/>
Filter for only full-year or quarterly estimates.

**estimate_type**: `Literal['ebitda', 'ebit', 'enterprise_value', 'cash_flow_per_share', 'pretax_income'] | None`<br/>
Limit the EBITDA estimates to this type.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the entity.

**last_updated**: `date | None`<br/>
The date of the last update.

**period_ending**: `date | None`<br/>
The end date of the reporting period.

**fiscal_year**: `int | None`<br/>
Fiscal year for the estimate.

**fiscal_period**: `str | None`<br/>
Fiscal quarter for the estimate.

**calendar_year**: `int | None`<br/>
Calendar year for the estimate.

**calendar_period**: `int | str | None`<br/>
Calendar quarter for the estimate.

**low_estimate**: `int | None`<br/>
The EBITDA estimate low for the period.

**high_estimate**: `int | None`<br/>
The EBITDA estimate high for the period.

**mean**: `int | None`<br/>
The EBITDA estimate mean for the period.

**median**: `int | None`<br/>
The EBITDA estimate median for the period.

**standard_deviation**: `int | None`<br/>
The EBITDA estimate standard deviation for the period.

**number_of_analysts**: `int | None`<br/>
Number of analysts providing estimates for the period.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the entity.

**last_updated**: `date | None`<br/>
The date of the last update.

**period_ending**: `date | None`<br/>
The end date of the reporting period.

**fiscal_year**: `int | None`<br/>
Fiscal year for the estimate.

**fiscal_period**: `str | None`<br/>
Fiscal quarter for the estimate.

**calendar_year**: `int | None`<br/>
Calendar year for the estimate.

**calendar_period**: `int | str | None`<br/>
Calendar quarter for the estimate.

**low_estimate**: `int | None`<br/>
The EBITDA estimate low for the period.

**high_estimate**: `int | None`<br/>
The EBITDA estimate high for the period.

**mean**: `int | None`<br/>
The EBITDA estimate mean for the period.

**median**: `int | None`<br/>
The EBITDA estimate median for the period.

**standard_deviation**: `int | None`<br/>
The EBITDA estimate standard deviation for the period.

**number_of_analysts**: `int | None`<br/>
Number of analysts providing estimates for the period.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the entity.

**last_updated**: `date | None`<br/>
The date of the last update.

**period_ending**: `date | None`<br/>
The end date of the reporting period.

**fiscal_year**: `int | None`<br/>
Fiscal year for the estimate.

**fiscal_period**: `str | None`<br/>
Fiscal quarter for the estimate.

**calendar_year**: `int | None`<br/>
Calendar year for the estimate.

**calendar_period**: `int | str | None`<br/>
Calendar quarter for the estimate.

**low_estimate**: `int | None`<br/>
The EBITDA estimate low for the period.

**high_estimate**: `int | None`<br/>
The EBITDA estimate high for the period.

**mean**: `int | None`<br/>
The EBITDA estimate mean for the period.

**median**: `int | None`<br/>
The EBITDA estimate median for the period.

**standard_deviation**: `int | None`<br/>
The EBITDA estimate standard deviation for the period.

**number_of_analysts**: `int | None`<br/>
Number of analysts providing estimates for the period.

**conensus_type**: `Literal['ebitda', 'ebit', 'enterprise_value', 'cash_flow_per_share', 'pretax_income'] | None`<br/>
The type of estimate.

</TabItem>
</Tabs>

