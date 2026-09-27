---
title: "Gdp Forecast"
description: "Get Forecasted GDP Data"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `GdpForecast` | `GdpForecastQueryParams` | `GdpForecastData` |

### Import Statement

```python
from openbb_core.provider.standard_models.gdp_forecast import (
GdpForecastData,
GdpForecastQueryParams,
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

