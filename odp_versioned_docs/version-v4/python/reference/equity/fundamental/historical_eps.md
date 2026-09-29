---
title: "historical_eps"
description: "Historical earnings-per-share for a given company"
keywords:
- equity
- fundamental
- historical_eps
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/fundamental/historical_eps - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get historical earnings per share data for a given company.

Examples
--------

```python
from openbb import obb
obb.equity.fundamental.historical_eps(symbol='AAPL')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): alpha_vantage, fmp.

</TabItem>
<TabItem value='alpha_vantage' label='alpha_vantage'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): alpha_vantage, fmp.

**period**: `Literal['annual', 'quarter'] | None`<br/>
*Default:* quarter<br/>
Time period of the data to return.

**limit**: `int | None`<br/>
The number of data entries to return.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): alpha_vantage, fmp.

**limit**: `int | None`<br/>
The number of data entries to return. Default is all.

</TabItem>
</Tabs>

---

## Returns

**results**: `HistoricalEps`

Serializable results.

**provider**: `Optional[Literal['alpha_vantage', 'fmp']]`

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

**date**: `date | str`<br/>
The date of the data.

**eps_actual**: `int | float | None`<br/>
Actual EPS from the earnings date.

**eps_estimated**: `int | float | None`<br/>
Estimated EPS for the earnings date.

</TabItem>
<TabItem value='alpha_vantage' label='alpha_vantage'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**date**: `date | str`<br/>
The date of the data.

**eps_actual**: `int | float | None`<br/>
Actual EPS from the earnings date.

**eps_estimated**: `int | float | None`<br/>
Estimated EPS for the earnings date.

**surprise**: `float | None`<br/>
Surprise in EPS (Actual - Estimated).

**surprise_percent**: `float | str | None`<br/>
EPS surprise as a normalized percent.

**reported_date**: `date | None`<br/>
Date of the earnings report.

**report_time**: `str | None`<br/>
Time of day when the earnings report was released, e.g., 'post-market'.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**date**: `date | str`<br/>
The date of the data.

**eps_actual**: `int | float | None`<br/>
Actual EPS from the earnings date.

**eps_estimated**: `int | float | None`<br/>
Estimated EPS for the earnings date.

**revenue_estimated**: `int | float | None`<br/>
Estimated consensus revenue for the reporting period.

**revenue_actual**: `int | float | None`<br/>
The actual reported revenue.

**updated**: `date | None`<br/>
The date when the data was last updated.

</TabItem>
</Tabs>

