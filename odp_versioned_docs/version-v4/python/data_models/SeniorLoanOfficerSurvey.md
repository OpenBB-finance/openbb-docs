---
title: "Senior Loan Officer Survey"
description: "Get Senior Loan Officers Opinion Survey"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `SeniorLoanOfficerSurvey` | `SeniorLoanOfficerSurveyQueryParams` | `SeniorLoanOfficerSurveyData` |

### Import Statement

```python
from openbb_core.provider.standard_models.senior_loan_officer_survey import (
SeniorLoanOfficerSurveyData,
SeniorLoanOfficerSurveyQueryParams,
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

**category**: `Literal['spreads', 'consumer', 'auto', 'credit_card', 'firms', 'mortgage', 'commercial_real_estate', 'standards', 'demand', 'foreign_banks'] | None`<br/>
*Default:* spreads<br/>
Category of survey response.

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

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**value**: `float`<br/>
Survey value.

**title**: `str | None`<br/>
Survey title.

</TabItem>
<TabItem value='fred' label='fred'>

**date**: `date | str`<br/>
The date of the data.

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**value**: `float`<br/>
Survey value.

**title**: `str | None`<br/>
Survey title.

</TabItem>
</Tabs>

