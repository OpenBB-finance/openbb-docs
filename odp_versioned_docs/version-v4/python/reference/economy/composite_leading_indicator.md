---
title: "composite_leading_indicator"
description: "Get the composite leading indicator (CLI)"
keywords:
- economy
- composite_leading_indicator
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="economy/composite_leading_indicator - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get the composite leading indicator (CLI).

It is designed to provide early signals of turning points
in business cycles showing fluctuation of the economic activity around its long term potential level.

CLIs show short-term economic movements in qualitative rather than quantitative terms.

Examples
--------

```python
from openbb import obb
obb.economy.composite_leading_indicator()
obb.economy.composite_leading_indicator(country='all', growth_rate=True)
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

**country**: `Literal['g20', 'g7', 'asia5', 'north_america', 'europe4', 'australia', 'brazil', 'canada', 'china', 'france', 'germany', 'india', 'indonesia', 'italy', 'japan', 'mexico', 'south_africa', 'south_korea', 'spain', 'turkey', 'united_kingdom', 'united_states', 'all'] | None`<br/>
*Default:* g20<br/>
Country to get the CLI for, default is G20.

**adjustment**: `Literal['amplitude', 'normalized'] | None`<br/>
*Default:* amplitude<br/>
Adjustment of the data, either 'amplitude' or 'normalized'. Default is amplitude.

**growth_rate**: `bool | None`<br/>
*Default:* False<br/>
Return the 1-year growth rate (%) of the CLI, default is False.

</TabItem>
</Tabs>

---

## Returns

**results**: `CompositeLeadingIndicator`

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

**value**: `float | None`<br/>
CLI value

**country**: `str`<br/>
Country for the CLI value.

</TabItem>
<TabItem value='oecd' label='oecd'>

**date**: `date | str`<br/>
The date of the data.

**value**: `float | None`<br/>
CLI value

**country**: `str`<br/>
Country for the CLI value.

</TabItem>
</Tabs>

