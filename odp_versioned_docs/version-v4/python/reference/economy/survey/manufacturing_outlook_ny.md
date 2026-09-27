---
title: "manufacturing_outlook_ny"
description: "Get the Empire State Manufacturing Survey"
keywords:
- economy
- survey
- manufacturing_outlook_ny
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="economy/survey/manufacturing_outlook_ny - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get the Empire State Manufacturing Survey.

It is a monthly survey of manufacturers in New York State conducted by the Federal Reserve Bank of New York.

Participants from across the state in a variety of industries respond to a questionnaire
and report the change in a variety of indicators from the previous month.

Respondents also state the likely direction of these same indicators six months ahead.
April 2002 is the first report, although survey data date back to July 2001.

The survey is sent on the first day of each month to the same pool of about 200
manufacturing executives in New York State, typically the president or CEO.

About 100 responses are received. Most are completed by the tenth, although surveys are accepted until the fifteenth.

Examples
--------

```python
from openbb import obb
obb.economy.survey.manufacturing_outlook_ny()
obb.economy.survey.manufacturing_outlook_ny(topic='hours_worked,new_orders', transform='pc1', seasonally_adjusted=True)
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

**topic**: `Literal['business_outlook', 'hours_worked', 'employment', 'inventories', 'prices_received', 'prices_paid', 'capex', 'unfilled_orders', 'new_orders', 'shipments', 'delivery_times'] | None`<br/>
*Default:* new_orders<br/>
The topic for the survey response.

**seasonally_adjusted**: `bool | None`<br/>
*Default:* False<br/>
Whether the data is seasonally adjusted, default is False

**frequency**: `Literal['quarter', 'annual'] | None`<br/>
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

---

## Returns

**results**: `ManufacturingOutlookNY`

Serializable results.

**provider**: `Optional[Literal['fred']]`

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

