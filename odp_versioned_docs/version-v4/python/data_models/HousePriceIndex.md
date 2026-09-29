---
title: "House Price Index"
description: "Get the House Price Index by country from the OECD Short-Term Economics Statistics"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `HousePriceIndex` | `HousePriceIndexQueryParams` | `HousePriceIndexData` |

### Import Statement

```python
from openbb_core.provider.standard_models.house_price_index import (
HousePriceIndexData,
HousePriceIndexQueryParams,
)
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

