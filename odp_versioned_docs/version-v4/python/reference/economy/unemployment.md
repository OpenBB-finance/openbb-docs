---
title: "unemployment"
description: "Get global unemployment data"
keywords:
- economy
- unemployment
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="economy/unemployment - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get global unemployment data.

Examples
--------

```python
from openbb import obb
obb.economy.unemployment()
obb.economy.unemployment(country='all', frequency='quarter')
# Demographics for the statistics are selected with the `age` parameter.
obb.economy.unemployment(country='all', frequency='quarter', age='total')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**country**: `str | None | list[str | None]`<br/>
*Default:* united_states<br/>
The country to get data. Multiple items allowed for provider(s): oecd.

**frequency**: `Literal['monthly', 'quarter', 'annual'] | None`<br/>
*Default:* monthly<br/>
The frequency of the data.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
<TabItem value='oecd' label='oecd'>

**country**: `str | None`<br/>
*Default:* united_states<br/>
The country to get data.

**frequency**: `Literal['monthly', 'quarter', 'annual'] | None`<br/>
*Default:* monthly<br/>
The frequency of the data.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**sex**: `Literal['total', 'male', 'female'] | None`<br/>
*Default:* total<br/>
Sex to get unemployment for.

**age**: `Literal['total', '15-24', '25+'] | None`<br/>
*Default:* total<br/>
Age group to get unemployment for. Total indicates 15 years or over

**seasonal_adjustment**: `bool | None`<br/>
*Default:* False<br/>
Whether to get seasonally adjusted unemployment. Defaults to False.

</TabItem>
</Tabs>

---

## Returns

**results**: `Unemployment`

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

**country**: `str | None`<br/>
Country for which unemployment rate is given

**value**: `float | None`<br/>
Unemployment rate, as a normalized percent.

</TabItem>
<TabItem value='oecd' label='oecd'>

**date**: `date | None | str`<br/>
The date of the data.

**country**: `str | None`<br/>
Country for which unemployment rate is given

**value**: `float | None`<br/>
Unemployment rate, as a normalized percent.

</TabItem>
</Tabs>

