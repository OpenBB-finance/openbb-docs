---
title: "forecast"
description: "Forecasted GDP Data"
keywords:
- economy
- gdp
- forecast
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="economy/gdp/forecast - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get Forecasted GDP Data.

Examples
--------

```python
from openbb import obb
obb.economy.gdp.forecast()
obb.economy.gdp.forecast(country='united_states,germany,france', frequency='annual', units='capita')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
<TabItem value='oecd' label='oecd'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**country**: `str | None`<br/>
*Default:* all<br/>
Country, or countries, to get forward GDP projections for. Default is all.

**frequency**: `Literal['annual', 'quarter'] | None`<br/>
*Default:* annual<br/>
Frequency of the data, default is annual.

**units**: `Literal['current_prices', 'volume', 'capita', 'growth', 'deflator'] | None`<br/>
*Default:* volume<br/>
<details>
<summary mdxType="summary">Description</summary>

Units of the data, default is volume (chain linked volume, 2015).<br/>
'current_prices', 'volume', and 'capita' are expressed in USD; 'growth' as a percent; 'deflator' as an index.<br/>
</details>

</TabItem>
</Tabs>

---

## Returns

**results**: `GdpForecast`

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

**date**: `date | str`<br/>
The date of the data.

**country**: `str`<br/>
None

**value**: `int | float`<br/>
Forecasted GDP value for the country and date.

</TabItem>
<TabItem value='oecd' label='oecd'>

**date**: `date | str`<br/>
The date of the data.

**country**: `str`<br/>
None

**value**: `int | float`<br/>
Forecasted GDP value for the country and date.

</TabItem>
</Tabs>

