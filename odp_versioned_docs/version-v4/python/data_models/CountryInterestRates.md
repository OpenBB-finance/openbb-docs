---
title: "Country Interest Rates"
description: "Get interest rates by country(s) and duration"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `CountryInterestRates` | `CountryInterestRatesQueryParams` | `CountryInterestRatesData` |

### Import Statement

```python
from openbb_core.provider.standard_models.country_interest_rates import (
CountryInterestRatesData,
CountryInterestRatesQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**country**: `str | None | list[str | None]`<br/>
*Default:* united_states<br/>
The country to get data. Multiple items allowed for provider(s): oecd.

<details>
<summary mdxType="summary">Choices</summary>

- belgium
- bulgaria
- brazil
- ireland
- mexico
- indonesia
- new_zealand
- japan
- united_kingdom
- france
- chile
- canada
- netherlands
- united_states
- south_korea
- norway
- austria
- south_africa
- denmark
- switzerland
- hungary
- luxembourg
- australia
- germany
- sweden
- iceland
- turkey
- greece
- israel
- czech_republic
- latvia
- slovenia
- poland
- estonia
- lithuania
- portugal
- costa_rica
- slovakia
- finland
- spain
- romania
- russia
- euro_area19
- colombia
- italy
- india
- china
- croatia
- all
</details>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
<TabItem value='oecd' label='oecd'>

**country**: `str | None | list[str | None]`<br/>
*Default:* united_states<br/>
The country to get data. Multiple items allowed for provider(s): oecd.

<details>
<summary mdxType="summary">Choices</summary>

- belgium
- bulgaria
- brazil
- ireland
- mexico
- indonesia
- new_zealand
- japan
- united_kingdom
- france
- chile
- canada
- netherlands
- united_states
- south_korea
- norway
- austria
- south_africa
- denmark
- switzerland
- hungary
- luxembourg
- australia
- germany
- sweden
- iceland
- turkey
- greece
- israel
- czech_republic
- latvia
- slovenia
- poland
- estonia
- lithuania
- portugal
- costa_rica
- slovakia
- finland
- spain
- romania
- russia
- euro_area19
- colombia
- italy
- india
- china
- croatia
- all
</details>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**duration**: `Literal['immediate', 'short', 'long'] | None`<br/>
*Default:* short<br/>
Duration of the interest rate. 'immediate' is the overnight rate, 'short' is the 3-month rate, and 'long' is the 10-year rate.

**frequency**: `Literal['monthly', 'quarter', 'annual'] | None`<br/>
*Default:* monthly<br/>
Frequency to get interest rate for for.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | None | str`<br/>
The date of the data.

**value**: `float | None`<br/>
The interest rate value.

**country**: `str | None`<br/>
Country for which the interest rate is given.

</TabItem>
<TabItem value='oecd' label='oecd'>

**date**: `date | None | str`<br/>
The date of the data.

**value**: `float | None`<br/>
The interest rate value.

**country**: `str | None`<br/>
Country for which the interest rate is given.

</TabItem>
</Tabs>

