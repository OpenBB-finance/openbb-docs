---
title: "spot_rates"
description: "Learn about spot rates and how they are used to calculate the yield on  a bond. Understand the concept of discounting and its application in evaluating  pension liabilities. Explore the parameters needed to query and retrieve spot rate  data. Get the serializable results, provider information, warnings, chart, and metadata  associated with the query. Access the spot rate data including the date and rate."
keywords:
- spot rates
- yield
- bond
- zero coupon bond
- interest rate
- discounting
- pension liability
- maturities
- query
- results
- provider
- warnings
- chart
- metadata
- data
- date
- rate
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="fixedincome/corporate/spot_rates - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Spot Rates.

The spot rates for any maturity is the yield on a bond that provides a single payment at that maturity.
This is a zero coupon bond.
Because each spot rate pertains to a single cashflow, it is the relevant interest rate
concept for discounting a pension liability at the same maturity.

Examples
--------

```python
from openbb import obb
obb.fixedincome.corporate.spot_rates()
obb.fixedincome.corporate.spot_rates(maturity='10,20,30,50')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**maturity**: `float | str | None | list[float | str | None]`<br/>
*Default:* 10.0<br/>
Maturities in years. Multiple items allowed for provider(s): fred.

**category**: `str | None | list[str | None]`<br/>
*Default:* spot_rate<br/>
Rate category. Options: spot_rate, par_yield. Multiple items allowed for provider(s): fred.

<details>
<summary mdxType="summary">Choices</summary>

- par_yield
- spot_rate
</details>

</TabItem>
<TabItem value='fred' label='fred'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**maturity**: `float | str | None | list[float | str | None]`<br/>
*Default:* 10.0<br/>
Maturities in years. Multiple items allowed for provider(s): fred.

**category**: `str | None | list[str | None]`<br/>
*Default:* spot_rate<br/>
Rate category. Options: spot_rate, par_yield. Multiple items allowed for provider(s): fred.

<details>
<summary mdxType="summary">Choices</summary>

- par_yield
- spot_rate
</details>

</TabItem>
</Tabs>

---

## Returns

**results**: `SpotRate`

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

**rate**: `float | None`<br/>
Spot Rate.

</TabItem>
<TabItem value='fred' label='fred'>

**date**: `date | str`<br/>
The date of the data.

**rate**: `float | None`<br/>
Spot Rate.

</TabItem>
</Tabs>

