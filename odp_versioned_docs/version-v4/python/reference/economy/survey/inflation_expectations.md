---
title: "inflation_expectations"
description: "Survey of forward inflation expectations from the Survey of Professional Forecasters"
keywords:
- economy
- survey
- inflation_expectations
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="economy/survey/inflation_expectations - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Survey of forward inflation expectations from the Survey of Professional Forecasters.

Examples
--------

```python
from openbb import obb
obb.economy.survey.inflation_expectations()
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='federal_reserve' label='federal_reserve'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format. Data begins from 1970-04-01 and is quarterly.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
</Tabs>

---

## Returns

**results**: `InflationExpectations`

Serializable results.

**provider**: `Optional[Literal['federal_reserve']]`

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

</TabItem>
<TabItem value='federal_reserve' label='federal_reserve'>

**date**: `date | str`<br/>
The date of the survey (first day of the survey quarter).

**infpgdp1yr**: `float | None`<br/>
One-year-ahead annual-average GDP price index inflation forecast. Computed from median forecasts of GDP price index levels (PGDP2 and PGDP6). Formula: ((PGDP6/PGDP2) - 1) * 100. Available from 1970:Q2.

**infcpi1yr**: `float | None`<br/>
One-year-ahead annual-average CPI inflation forecast. Computed as the geometric average of quarter-over-quarter median CPI forecasts (CPI3 to CPI6). Available from 1981:Q3.

**infcpi10yr**: `float | None`<br/>
Ten-year-ahead annual-average CPI inflation forecast. Expected average annual rate of CPI inflation over the next 10 years. Available from 1991:Q4.

</TabItem>
</Tabs>

