---
title: "economic_conditions_chicago"
description: "Get The Survey Of Economic Conditions For The Chicago Region"
keywords:
- economy
- survey
- economic_conditions_chicago
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="economy/survey/economic_conditions_chicago - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get The Survey Of Economic Conditions For The Chicago Region.

Examples
--------

```python
from openbb import obb
obb.economy.survey.economic_conditions_chicago()
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

**frequency**: `Literal['annual', 'quarter'] | None`<br/>
Frequency aggregation to convert monthly data to lower frequency. None is monthly.

**aggregation_method**: `Literal['avg', 'sum', 'eop'] | None`<br/>
<details>
<summary mdxType="summary">Description</summary>

A key that indicates the aggregation method used for frequency aggregation.<br/>
        <br/>
    avg = Average<br/>
        <br/>
    sum = Sum<br/>
        <br/>
    eop = End of Period<br/>
</details>

**transform**: `Literal['chg', 'ch1', 'pch', 'pc1', 'pca', 'cch', 'cca', 'log'] | None`<br/>
<details>
<summary mdxType="summary">Description</summary>

Transformation type<br/>
        <br/>
    None = No transformation<br/>
        <br/>
    chg = Change<br/>
        <br/>
    ch1 = Change from Year Ago<br/>
        <br/>
    pch = Percent Change<br/>
        <br/>
    pc1 = Percent Change from Year Ago<br/>
        <br/>
    pca = Compounded Annual Rate of Change<br/>
        <br/>
    cch = Continuously Compounded Rate of Change<br/>
        <br/>
    cca = Continuously Compounded Annual Rate of Change<br/>
        <br/>
    log = Natural Log<br/>
</details>

</TabItem>
</Tabs>

---

## Returns

**results**: `SurveyOfEconomicConditionsChicago`

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

**activity_index**: `float | None`<br/>
Activity Index.

**one_year_outlook**: `float | None`<br/>
One Year Outlook Index.

**manufacturing_activity**: `float | None`<br/>
Manufacturing Activity Index.

**non_manufacturing_activity**: `float | None`<br/>
Non-Manufacturing Activity Index.

**capital_expenditures_expectations**: `float | None`<br/>
Capital Expenditures Expectations Index.

**hiring_expectations**: `float | None`<br/>
Hiring Expectations Index.

**current_hiring**: `float | None`<br/>
Current Hiring Index.

**labor_costs**: `float | None`<br/>
Labor Costs Index.

**non_labor_costs**: `float | None`<br/>
Non-Labor Costs Index.

</TabItem>
<TabItem value='fred' label='fred'>

**date**: `date | str`<br/>
The date of the data.

**activity_index**: `float | None`<br/>
Activity Index.

**one_year_outlook**: `float | None`<br/>
One Year Outlook Index.

**manufacturing_activity**: `float | None`<br/>
Manufacturing Activity Index.

**non_manufacturing_activity**: `float | None`<br/>
Non-Manufacturing Activity Index.

**capital_expenditures_expectations**: `float | None`<br/>
Capital Expenditures Expectations Index.

**hiring_expectations**: `float | None`<br/>
Hiring Expectations Index.

**current_hiring**: `float | None`<br/>
Current Hiring Index.

**labor_costs**: `float | None`<br/>
Labor Costs Index.

**non_labor_costs**: `float | None`<br/>
Non-Labor Costs Index.

</TabItem>
</Tabs>

