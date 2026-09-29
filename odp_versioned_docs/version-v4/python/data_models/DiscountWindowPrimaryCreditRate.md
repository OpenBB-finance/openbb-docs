---
title: "Discount Window Primary Credit Rate"
description: "Discount Window Primary Credit Rate"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `DiscountWindowPrimaryCreditRate` | `DiscountWindowPrimaryCreditRateQueryParams` | `DiscountWindowPrimaryCreditRateData` |

### Import Statement

```python
from openbb_core.provider.standard_models.dwpcr_rates import (
DiscountWindowPrimaryCreditRateData,
DiscountWindowPrimaryCreditRateQueryParams,
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
<TabItem value='fred' label='fred'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**parameter**: `Literal['daily_excl_weekend', 'monthly', 'weekly', 'daily', 'annual'] | None`<br/>
*Default:* daily_excl_weekend<br/>
FRED series ID of DWPCR data.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | str`<br/>
The date of the data.

**rate**: `float | None`<br/>
Discount Window Primary Credit Rate.

</TabItem>
<TabItem value='fred' label='fred'>

**date**: `date | str`<br/>
The date of the data.

**rate**: `float | None`<br/>
Discount Window Primary Credit Rate.

</TabItem>
</Tabs>

