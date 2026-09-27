---
title: "historical"
description: "Learn about historical analyst estimates and analyst stock recommendations  with the OBBPy library in Python. Explore the usage of the `obb.equity.estimates.historical`  function and its parameters, including `symbol`, `period`, `limit`, and `provider`.  Understand the structure of the returned object, `OBBject`, with `results`, `provider`,  `warnings`, `chart`, and `metadata` properties. Dive into the available data such  as `symbol`, `date`, `estimated revenue`, `ebitda`, `ebit`, `net income`, `SGA expense`,  `EPS`, and the number of analysts who estimated revenue and EPS."
keywords:
- historical analyst estimates
- analyst stock recommendations
- python obb.equity.estimates.historical
- parameters
- standard
- symbol
- union[str, list[str]]
- period
- literal['quarter', 'annual']
- limit
- int
- provider
- literal['fmp']
- returns
- obbject
- list[analystestimates]
- serializable results
- optional[literal['fmp']]
- optional[list[warning_]]
- optional[chart]
- optional[metadata]
- data
- symbol
- str
- date
- estimated revenue low
- estimated revenue high
- estimated revenue average
- estimated ebitda low
- estimated ebitda high
- estimated ebitda average
- estimated ebit low
- estimated ebit high
- estimated ebit average
- estimated net income low
- estimated net income high
- estimated net income average
- estimated sga expense low
- estimated sga expense high
- estimated sga expense average
- estimated eps average
- estimated eps high
- estimated eps low
- number of analysts who estimated revenue
- number of analysts who estimated eps
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/estimates/historical - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get historical analyst estimates for earnings and revenue.

Examples
--------

```python
from openbb import obb
obb.equity.estimates.historical(symbol='AAPL')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp.

**period**: `Literal['quarter', 'annual'] | None`<br/>
*Default:* annual<br/>
Time period of the data to return.

**limit**: `int | None`<br/>
The number of data entries to return.

**page**: `int | None`<br/>
Page number for paginated results. Used with limit.

</TabItem>
</Tabs>

---

## Returns

**results**: `AnalystEstimates`

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

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**date**: `date | str`<br/>
The date of the data.

**estimated_revenue_low**: `int | None`<br/>
Estimated revenue low.

**estimated_revenue_high**: `int | None`<br/>
Estimated revenue high.

**estimated_revenue_avg**: `int | None`<br/>
Estimated revenue average.

**estimated_sga_expense_low**: `int | None`<br/>
Estimated SGA expense low.

**estimated_sga_expense_high**: `int | None`<br/>
Estimated SGA expense high.

**estimated_sga_expense_avg**: `int | None`<br/>
Estimated SGA expense average.

**estimated_ebitda_low**: `int | None`<br/>
Estimated EBITDA low.

**estimated_ebitda_high**: `int | None`<br/>
Estimated EBITDA high.

**estimated_ebitda_avg**: `int | None`<br/>
Estimated EBITDA average.

**estimated_ebit_low**: `int | None`<br/>
Estimated EBIT low.

**estimated_ebit_high**: `int | None`<br/>
Estimated EBIT high.

**estimated_ebit_avg**: `int | None`<br/>
Estimated EBIT average.

**estimated_net_income_low**: `int | None`<br/>
Estimated net income low.

**estimated_net_income_high**: `int | None`<br/>
Estimated net income high.

**estimated_net_income_avg**: `int | None`<br/>
Estimated net income average.

**estimated_eps_avg**: `float | None`<br/>
Estimated EPS average.

**estimated_eps_high**: `float | None`<br/>
Estimated EPS high.

**estimated_eps_low**: `float | None`<br/>
Estimated EPS low.

**number_analyst_estimated_revenue**: `int | None`<br/>
Number of analysts who estimated revenue.

**number_analysts_estimated_eps**: `int | None`<br/>
Number of analysts who estimated EPS.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**date**: `date | str`<br/>
The date of the data.

**estimated_revenue_low**: `int | None`<br/>
Estimated revenue low.

**estimated_revenue_high**: `int | None`<br/>
Estimated revenue high.

**estimated_revenue_avg**: `int | None`<br/>
Estimated revenue average.

**estimated_sga_expense_low**: `int | None`<br/>
Estimated SGA expense low.

**estimated_sga_expense_high**: `int | None`<br/>
Estimated SGA expense high.

**estimated_sga_expense_avg**: `int | None`<br/>
Estimated SGA expense average.

**estimated_ebitda_low**: `int | None`<br/>
Estimated EBITDA low.

**estimated_ebitda_high**: `int | None`<br/>
Estimated EBITDA high.

**estimated_ebitda_avg**: `int | None`<br/>
Estimated EBITDA average.

**estimated_ebit_low**: `int | None`<br/>
Estimated EBIT low.

**estimated_ebit_high**: `int | None`<br/>
Estimated EBIT high.

**estimated_ebit_avg**: `int | None`<br/>
Estimated EBIT average.

**estimated_net_income_low**: `int | None`<br/>
Estimated net income low.

**estimated_net_income_high**: `int | None`<br/>
Estimated net income high.

**estimated_net_income_avg**: `int | None`<br/>
Estimated net income average.

**estimated_eps_avg**: `float | None`<br/>
Estimated EPS average.

**estimated_eps_high**: `float | None`<br/>
Estimated EPS high.

**estimated_eps_low**: `float | None`<br/>
Estimated EPS low.

**number_analyst_estimated_revenue**: `int | None`<br/>
Number of analysts who estimated revenue.

**number_analysts_estimated_eps**: `int | None`<br/>
Number of analysts who estimated EPS.

</TabItem>
</Tabs>

