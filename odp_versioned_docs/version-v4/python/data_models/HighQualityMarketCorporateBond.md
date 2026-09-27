---
title: "High Quality Market Corporate Bond"
description: "High Quality Market Corporate Bond"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `HighQualityMarketCorporateBond` | `HighQualityMarketCorporateBondQueryParams` | `HighQualityMarketCorporateBondData` |

### Import Statement

```python
from openbb_core.provider.standard_models.high_quality_market import (
HighQualityMarketCorporateBondData,
HighQualityMarketCorporateBondQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | str | None | list[date | str | None]`<br/>
A specific date to get data for. Multiple items allowed for provider(s): fred.

</TabItem>
<TabItem value='fred' label='fred'>

**date**: `date | str | None | list[date | str | None]`<br/>
A specific date to get data for. Multiple items allowed for provider(s): fred.

**yield_curve**: `Literal['spot', 'par'] | None`<br/>
*Default:* spot<br/>
The yield curve type.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | str`<br/>
The date of the data.

**rate**: `float`<br/>
Interest rate.

**maturity**: `str`<br/>
Maturity.

</TabItem>
<TabItem value='fred' label='fred'>

**date**: `date | str`<br/>
The date of the data.

**rate**: `float`<br/>
Interest rate.

**maturity**: `str`<br/>
Maturity.

</TabItem>
</Tabs>

