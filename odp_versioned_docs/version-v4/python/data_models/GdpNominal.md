---
title: "Gdp Nominal"
description: "Get Nominal GDP Data"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `GdpNominal` | `GdpNominalQueryParams` | `GdpNominalData` |

### Import Statement

```python
from openbb_core.provider.standard_models.gdp_nominal import (
GdpNominalData,
GdpNominalQueryParams,
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

**units**: `Literal['level', 'index', 'capita'] | None`<br/>
*Default:* level<br/>
The unit of measurement for the data.Both 'level' and 'capita' (per) are measured in USD.

**price_base**: `Literal['current_prices', 'volume'] | None`<br/>
*Default:* current_prices<br/>
Price base for the data, volume is chain linked volume.

</TabItem>
</Tabs>

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
Nominal GDP value for the country and date.

**nominal_growth_qoq**: `float`<br/>
Nominal GDP growth rate quarter over quarter.

**nominal_growth_yoy**: `float`<br/>
Nominal GDP growth rate year over year.

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

