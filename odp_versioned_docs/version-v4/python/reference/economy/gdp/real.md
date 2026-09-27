---
title: "real"
description: "Learn about Real GDP Data and how to access it using the provided parameters.  Find detailed descriptions of the available parameters and the data returned. Understand  the structure of the returns and explore the data attributes."
keywords:
- Real GDP Data
- parameters
- units
- start date
- end date
- provider
- country
- returns
- results
- GdpReal
- warnings
- chart
- metadata
- data
- date
- value
- documentation
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="economy/gdp/real - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get Real GDP Data.

Examples
--------

```python
from openbb import obb
obb.economy.gdp.real()
obb.economy.gdp.real(country='united_states,germany,japan')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
<TabItem value='econdb' label='econdb'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**country**: `str | None`<br/>
*Default:* united_states<br/>
The country to get data.Use 'all' to get data for all available countries.

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
If True, the request will be cached for one day. Using cache is recommended to avoid needlessly requesting the same data.

</TabItem>
<TabItem value='oecd' label='oecd'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**country**: `str | None`<br/>
*Default:* united_states<br/>
The country to get data. Use 'all' to get data for all available countries.

**frequency**: `Literal['quarter', 'annual'] | None`<br/>
*Default:* quarter<br/>
Frequency of the data.

</TabItem>
</Tabs>

---

## Returns

**results**: `GdpReal`

Serializable results.

**provider**: `Optional[Literal['econdb', 'oecd']]`

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

**country**: `str | None`<br/>
The country represented by the GDP value.

**value**: `int | float`<br/>
GDP value for the country and date.

</TabItem>
<TabItem value='econdb' label='econdb'>

**date**: `date | str`<br/>
The date of the data.

**country**: `str | None`<br/>
The country represented by the GDP value.

**value**: `int | float`<br/>
Real GDP value for the country and date.

**real_growth_qoq**: `float`<br/>
Real GDP growth rate quarter over quarter.

**real_growth_yoy**: `float`<br/>
Real GDP growth rate year over year.

</TabItem>
<TabItem value='oecd' label='oecd'>

**date**: `date | str`<br/>
The date of the data.

**country**: `str | None`<br/>
The country represented by the GDP value.

**value**: `int | float`<br/>
GDP value for the country and date.

</TabItem>
</Tabs>

