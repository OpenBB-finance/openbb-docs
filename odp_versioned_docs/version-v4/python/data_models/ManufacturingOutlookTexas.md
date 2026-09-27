---
title: "Manufacturing Outlook Texas"
description: "Get The Manufacturing Outlook Survey For The Texas Region"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `ManufacturingOutlookTexas` | `ManufacturingOutlookTexasQueryParams` | `ManufacturingOutlookTexasData` |

### Import Statement

```python
from openbb_core.provider.standard_models.manufacturing_outlook_texas import (
ManufacturingOutlookTexasData,
ManufacturingOutlookTexasQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
<TabItem value='fred' label='fred'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**topic**: `Literal['business_activity', 'business_outlook', 'capex', 'prices_paid', 'production', 'inventory', 'new_orders', 'new_orders_growth', 'unfilled_orders', 'shipments', 'delivery_time', 'employment', 'wages', 'hours_worked'] | None`<br/>
*Default:* new_orders_growth<br/>
The topic for the survey response.

**frequency**: `Literal['annual', 'quarter'] | None`<br/>
Frequency aggregation to convert monthly data to lower frequency. None is monthly.

**aggregation_method**: `Literal['avg', 'sum', 'eop'] | None`<br/>
<details>
<summary mdxType="summary">Description</summary>

A key that indicates the aggregation method used for frequency aggregation.<br/>
            avg = Average<br/>
            sum = Sum<br/>
            eop = End of Period<br/>
</details>

**transform**: `Literal['chg', 'ch1', 'pch', 'pc1', 'pca', 'cch', 'cca', 'log'] | None`<br/>
<details>
<summary mdxType="summary">Description</summary>

Transformation type<br/>
            None = No transformation<br/>
            chg = Change<br/>
            ch1 = Change from Year Ago<br/>
            pch = Percent Change<br/>
            pc1 = Percent Change from Year Ago<br/>
            pca = Compounded Annual Rate of Change<br/>
            cch = Continuously Compounded Rate of Change<br/>
            cca = Continuously Compounded Annual Rate of Change<br/>
            log = Natural Log<br/>
</details>

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | str`<br/>
The date of the data.

**topic**: `str | None`<br/>
Topic of the survey response.

**diffusion_index**: `float | None`<br/>
Diffusion Index.

**percent_reporting_increase**: `float | None`<br/>
Percent of respondents reporting an increase over the last month.

**percent_reporting_decrease**: `float | None`<br/>
Percent of respondents reporting a decrease over the last month.

**percent_reporting_no_change**: `float | None`<br/>
Percent of respondents reporting no change over the last month.

</TabItem>
<TabItem value='fred' label='fred'>

**date**: `date | str`<br/>
The date of the data.

**topic**: `str | None`<br/>
Topic of the survey response.

**diffusion_index**: `float | None`<br/>
Diffusion Index.

**percent_reporting_increase**: `float | None`<br/>
Percent of respondents reporting an increase over the last month.

**percent_reporting_decrease**: `float | None`<br/>
Percent of respondents reporting a decrease over the last month.

**percent_reporting_no_change**: `float | None`<br/>
Percent of respondents reporting no change over the last month.

</TabItem>
</Tabs>

