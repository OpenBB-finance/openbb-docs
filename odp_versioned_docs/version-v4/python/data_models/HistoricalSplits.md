---
title: "Historical Splits"
description: "Get historical stock splits for a given company"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `HistoricalSplits` | `HistoricalSplitsQueryParams` | `HistoricalSplitsData` |

### Import Statement

```python
from openbb_core.provider.standard_models.historical_splits import (
HistoricalSplitsData,
HistoricalSplitsQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol to get data for.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str`<br/>
Symbol to get data for.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | str`<br/>
The date of the data.

**numerator**: `float | None`<br/>
Numerator of the split.

**denominator**: `float | None`<br/>
Denominator of the split.

**split_ratio**: `str | None`<br/>
Split ratio.

</TabItem>
<TabItem value='fmp' label='fmp'>

**date**: `date | str`<br/>
The date of the data.

**numerator**: `float | None`<br/>
Numerator of the split.

**denominator**: `float | None`<br/>
Denominator of the split.

**split_ratio**: `str | None`<br/>
Split ratio.

</TabItem>
</Tabs>

