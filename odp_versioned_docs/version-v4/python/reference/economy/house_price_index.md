---
title: "house_price_index"
description: "Get the House Price Index by country from the OECD Short-Term Economics Statistics"
keywords:
- economy
- house_price_index
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="economy/house_price_index - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get the House Price Index by country from the OECD Short-Term Economics Statistics.

Examples
--------

```python
from openbb import obb
obb.economy.house_price_index()
# Multiple countries can be passed in as a list.
obb.economy.house_price_index(country='united_kingdom,germany', frequency='quarter')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**country**: `str | None | list[str | None]`<br/>
*Default:* united_states<br/>
The country to get data. Multiple items allowed for provider(s): oecd.

**frequency**: `Literal['monthly', 'quarter', 'annual'] | None`<br/>
*Default:* quarter<br/>
The frequency of the data.

**transform**: `Literal['index', 'yoy', 'period'] | None`<br/>
*Default:* index<br/>
Transformation of the CPI data. Period represents the change since previous. Defaults to change from one year ago (yoy).

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
*Default:* quarter<br/>
The frequency of the data.

**transform**: `Literal['index', 'yoy', 'period'] | None`<br/>
*Default:* index<br/>
Transformation of the CPI data. Period represents the change since previous. Defaults to change from one year ago (yoy).

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
</Tabs>

---

## Returns

**results**: `HousePriceIndex`

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
**value**: `float | None`<br/>
Share price index value.

</TabItem>
<TabItem value='oecd' label='oecd'>

**date**: `date | None | str`<br/>
The date of the data.

**country**: `str | None`<br/>
**value**: `float | None`<br/>
Share price index value.

</TabItem>
</Tabs>

