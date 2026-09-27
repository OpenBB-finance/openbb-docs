---
title: "university_of_michigan"
description: "Get University of Michigan Consumer Sentiment and Inflation Expectations Surveys"
keywords:
- economy
- survey
- university_of_michigan
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="economy/survey/university_of_michigan - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get University of Michigan Consumer Sentiment and Inflation Expectations Surveys.

Examples
--------

```python
from openbb import obb
obb.economy.survey.university_of_michigan()
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

**frequency**: `Literal['quarter', 'annual'] | None`<br/>
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

**results**: `UniversityOfMichigan`

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

**consumer_sentiment**: `float | None`<br/>
Index of the results of the University of Michigan's monthly Survey of Consumers, which is used to estimate future spending and saving.  (1966:Q1=100).

**inflation_expectation**: `float | None`<br/>
Median expected price change next 12 months, Surveys of Consumers.

</TabItem>
<TabItem value='fred' label='fred'>

**date**: `date | str`<br/>
The date of the data.

**consumer_sentiment**: `float | None`<br/>
Index of the results of the University of Michigan's monthly Survey of Consumers, which is used to estimate future spending and saving.  (1966:Q1=100).

**inflation_expectation**: `float | None`<br/>
Median expected price change next 12 months, Surveys of Consumers.

</TabItem>
</Tabs>

