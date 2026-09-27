---
title: "interest_rates"
description: "Get interest rates by country(s) and duration"
keywords:
- economy
- interest_rates
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="economy/interest_rates - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get interest rates by country(s) and duration.
Most OECD countries publish short-term, a long-term, and immediate rates monthly.

Examples
--------

```python
from openbb import obb
obb.economy.interest_rates()
# For OECD, duration can be 'immediate', 'short', or 'long'. Default is 'short', which is the 3-month rate. Overnight interbank rate is 'immediate', and 10-year rate is 'long'.
obb.economy.interest_rates(country='all', duration='immediate', frequency='quarter')
# Multiple countries can be passed in as a list.
obb.economy.interest_rates(duration='long', country='united_kingdom,germany', frequency='monthly')
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

---

## Returns

**results**: `CountryInterestRates`

Serializable results.

**provider**: `Optional[Literal['oecd']]`

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

