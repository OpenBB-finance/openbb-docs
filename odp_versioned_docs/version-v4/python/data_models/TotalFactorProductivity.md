---
title: "Total Factor Productivity"
description: "Total Factor Productivity (TFP)

A real-time, quarterly series on total factor productivity (TFP) for the U"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `TotalFactorProductivity` | `TotalFactorProductivityQueryParams` | `TotalFactorProductivityData` |

### Import Statement

```python
from openbb_core.provider.standard_models. import (
TotalFactorProductivityData,
TotalFactorProductivityQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='federal_reserve' label='federal_reserve'>

**frequency**: `Literal['quarter', 'annual', 'summary'] | None`<br/>
*Default:* quarter<br/>
Type of data to return. 'quarter' for quarterly time series, 'annual' for annual time series, 'summary' for summary statistics (period means).

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format. Only applicable for time series data (quarter/annual).

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format. Only applicable for time series data (quarter/annual).

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='federal_reserve' label='federal_reserve'>

**date**: `date | None | str`<br/>
The date of the data.

**d_y_prod**: `float | None`<br/>
Business output, expenditure (product) side. From NIPA tables, Gross Value Added: Total Business: Quantity Index.

**d_y_inc**: `float | None`<br/>
Business output, measured from income side. Nominal business output is GDI less nominal non-business output. Real business income uses expenditure-side deflator.

**d_y**: `float | None`<br/>
Output. Average of d_y_prod and d_y_inc (weighted equally). If d_y_inc not yet available, equals d_y_prod.

**d_hours**: `float | None`<br/>
Hours worked in the business sector. From BLS productivity and cost release.

**d_lp**: `float | None`<br/>
Business-sector labor productivity, defined as d_y - d_hours. Note: Labor productivity in the BLS productivity-and-cost release equals d_y_prod - d_hours.

**d_k**: `float | None`<br/>
Capital input. Perpetual inventory stocks calculated from disaggregated quarterly NIPA investment data, then growth rates are weighted by estimated rental prices.

**d_lq_bls_interpolated**: `float | None`<br/>
Labor composition/quality from BLS. Pre-1979 is interpolated annual BLS MFP estimate of labor composition (interpolated using Denton (1971) relative to changes in hours).

**d_lq_aaronson_sullivan**: `float | None`<br/>
Labor composition/quality following Aaronson-Sullivan. 1979:Q1 - present follows Aaronson and Sullivan (2001), as extended by Bart Hobijn and Joyce Kwok (FRBSF).

**d_lq**: `float | None`<br/>
Labor composition/quality actually used. Pre-1979 is d_lq_bls_interpolated, 1979:Q1 onward uses d_lq_aaronson_sullivan.

**alpha**: `float | None`<br/>
Capital's share of income (ratio between 0 and 1). Based primarily on NIPA data for the corporate sector, assuming private noncorporate factor shares match corporate shares.

**d_tfp**: `float | None`<br/>
Business sector Total Factor Productivity. Calculated as d_y - alpha*d_k - (1-alpha)*(d_hours+d_lq), i.e., output growth less the contribution of capital and labor.

**d_util**: `float | None`<br/>
Utilization adjustment for capital and labor. Uses Basu, Fernald, Fisher, and Kimball (2013) estimates applied to quarterly data.

**d_tfp_util**: `float | None`<br/>
Utilization-adjusted Total Factor Productivity. Calculated as d_tfp - d_util, adjusting for variations in factor utilization.

**relative_price**: `float | None`<br/>
Relative price growth of 'consumption' to price of 'equipment'. Measures the relative price of non-equipment goods and services to price of equipment (with consumer durables classified as equipment).

**inv_share**: `float | None`<br/>
Equipment and consumer durables share of business output (ratio between 0 and 1). Represents the proportion of output devoted to equipment investment and consumer durables.

**d_tfp_i**: `float | None`<br/>
TFP in equipment and consumer durables sector. Calculated from d_tfp assuming that relative price growth reflects relative TFP growth.

**d_tfp_c**: `float | None`<br/>
TFP in non-equipment business output ('consumption' goods and services). Calculated from d_tfp assuming that relative price growth reflects relative TFP growth.

**d_u_invest**: `float | None`<br/>
Utilization adjustment in producing investment goods. Uses estimates from Basu, Fernald, Fisher, and Kimball to calculate utilization for producing equipment and consumer durables.

**d_u_consumption**: `float | None`<br/>
Utilization adjustment in producing non-investment business output ('consumption'). Uses estimates from Basu, Fernald, Fisher, and Kimball to calculate utilization for producing non-investment goods and services.

**d_tfp_i_util**: `float | None`<br/>
Utilization-adjusted TFP in producing equipment and consumer durables. Calculated as d_tfp_i - d_u_invest.

**d_tfp_c_util**: `float | None`<br/>
Utilization-adjusted TFP in producing non-equipment business output ('consumption'). Calculated as d_tfp_c - d_u_consumption.

**variable**: `str | None`<br/>
The variable name (e.g., 'd_y', 'd_tfp', 'd_tfp_util').

**variable_title**: `str | None`<br/>
Human-readable title for the variable.

**full_sample_mean**: `float | None`<br/>
Mean value over the full sample period.

**past_4_quarters**: `float | None`<br/>
Mean value over the past 4 quarters.

**past_8_quarters**: `float | None`<br/>
Mean value over the past 8 quarters.

**since_2019**: `float | None`<br/>
Mean value since 2019:Q4.

**period_2004_2019**: `float | None`<br/>
Mean value for the period 2004:Q4 to 2019:Q4.

**period_1995_2004**: `float | None`<br/>
Mean value for the period 1995:Q4 to 2004:Q4.

**period_1973_1995**: `float | None`<br/>
Mean value for the period 1973:Q1 to 1995:Q4.

**period_1947_1973**: `float | None`<br/>
Mean value for the period 1947:Q1 to 1973:Q1.

</TabItem>
</Tabs>

