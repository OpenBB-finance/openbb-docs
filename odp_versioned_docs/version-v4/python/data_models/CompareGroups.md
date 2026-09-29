---
title: "Compare Groups"
description: "Get company data grouped by sector, industry or country and display either performance or valuation metrics"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `CompareGroups` | `CompareGroupsQueryParams` | `CompareGroupsData` |

### Import Statement

```python
from openbb_core.provider.standard_models.compare_groups import (
CompareGroupsData,
CompareGroupsQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='finviz' label='finviz'>

**group**: `Literal['sector', 'industry', 'country', 'capitalization', 'energy', 'materials', 'industrials', 'consumer_cyclical', 'consumer_defensive', 'healthcare', 'financial', 'technology', 'communication_services', 'utilities', 'real_estate'] | None`<br/>
*Default:* sector<br/>
US-listed stocks only. When an individual sector is selected, it is broken down by industry. The default is 'sector'.

**metric**: `Literal['performance', 'valuation', 'overview'] | None`<br/>
*Default:* performance<br/>
Statistical metric to return. Select from: ['performance', 'valuation', 'overview'] The default is 'performance'.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='finviz' label='finviz'>

**name**: `str`<br/>
Name or label of the group.

**stocks**: `int | None`<br/>
The number of stocks in the group.

**market_cap**: `int | None`<br/>
The market cap of the group.

**performance_1d**: `float | None`<br/>
The performance in the last day, as a normalized percent.

**performance_1w**: `float | None`<br/>
The performance in the last week, as a normalized percent.

**performance_1m**: `float | None`<br/>
The performance in the last month, as a normalized percent.

**performance_3m**: `float | None`<br/>
The performance in the last quarter, as a normalized percent.

**performance_6m**: `float | None`<br/>
The performance in the last half year, as a normalized percent.

**performance_1y**: `float | None`<br/>
The performance in the last year, as a normalized percent.

**performance_ytd**: `float | None`<br/>
The performance in the year to date, as a normalized percent.

**dividend_yield**: `float | None`<br/>
The dividend yield of the group, as a normalized percent.

**pe**: `float | None`<br/>
The P/E ratio of the group.

**forward_pe**: `float | None`<br/>
The forward P/E ratio of the group.

**peg**: `float | None`<br/>
The PEG ratio of the group.

**eps_growth_past_5y**: `float | None`<br/>
The EPS growth of the group for the past 5 years, as a normalized percent.

**eps_growth_next_5y**: `float | None`<br/>
The estimated EPS growth of the groupo for the next 5 years, as a normalized percent.

**sales_growth_past_5y**: `float | None`<br/>
The sales growth of the group for the past 5 years, as a normalized percent.

**float_short**: `float | None`<br/>
The percent of the float shorted for the group, as a normalized value.

**analyst_recommendation**: `float | None`<br/>
The analyst consensus, on a scale of 1-5 where 1 is a buy and 5 is a sell.

**volume**: `int | None`<br/>
The trading volume.

**volume_average**: `int | None`<br/>
The 3-month average volume of the group.

**volume_relative**: `float | None`<br/>
The relative volume compared to the 3-month average volume.

</TabItem>
</Tabs>

