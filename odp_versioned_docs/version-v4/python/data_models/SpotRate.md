---
title: "Spot Rate"
description: "Spot Rates"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `SpotRate` | `SpotRateQueryParams` | `SpotRateData` |

### Import Statement

```python
from openbb_core.provider.standard_models.spot import (
SpotRateData,
SpotRateQueryParams,
)
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

