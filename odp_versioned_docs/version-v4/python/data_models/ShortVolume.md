---
title: "Short Volume"
description: "Get reported Fail-to-deliver (FTD) data"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `ShortVolume` | `ShortVolumeQueryParams` | `ShortVolumeData` |

### Import Statement

```python
from openbb_core.provider.standard_models.short_volume import (
ShortVolumeData,
ShortVolumeQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol to get data for.

</TabItem>
<TabItem value='stockgrid' label='stockgrid'>

**symbol**: `str`<br/>
Symbol to get data for.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | None | str`<br/>
The date of the data.

**market**: `str | None`<br/>
Reporting Facility ID. N=NYSE TRF, Q=NASDAQ TRF Carteret, B=NASDAQ TRY Chicago, D=FINRA ADF

**short_volume**: `int | None`<br/>
Aggregate reported share volume of executed short sale and short sale exempt trades during regular trading hours

**short_exempt_volume**: `int | None`<br/>
Aggregate reported share volume of executed short sale exempt trades during regular trading hours

**total_volume**: `int | None`<br/>
Aggregate reported share volume of executed trades during regular trading hours

</TabItem>
<TabItem value='stockgrid' label='stockgrid'>

**date**: `date | None | str`<br/>
The date of the data.

**market**: `str | None`<br/>
Reporting Facility ID. N=NYSE TRF, Q=NASDAQ TRF Carteret, B=NASDAQ TRY Chicago, D=FINRA ADF

**short_volume**: `int | None`<br/>
Aggregate reported share volume of executed short sale and short sale exempt trades during regular trading hours

**short_exempt_volume**: `int | None`<br/>
Aggregate reported share volume of executed short sale exempt trades during regular trading hours

**total_volume**: `int | None`<br/>
Aggregate reported share volume of executed trades during regular trading hours

**close**: `float | None`<br/>
Closing price of the stock on the date.

**short_volume_percent**: `float | None`<br/>
Percentage of the total volume that was short volume.

</TabItem>
</Tabs>

