---
title: "Unemployment"
description: "Get global unemployment data"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `Unemployment` | `UnemploymentQueryParams` | `UnemploymentData` |

### Import Statement

```python
from openbb_core.provider.standard_models.unemployment import (
UnemploymentData,
UnemploymentQueryParams,
)
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

