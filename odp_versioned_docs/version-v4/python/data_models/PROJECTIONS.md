---
title: "Projections"
description: "Fed Funds Rate Projections"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `PROJECTIONS` | `PROJECTIONSQueryParams` | `PROJECTIONSData` |

### Import Statement

```python
from openbb_core.provider.standard_models. import (
PROJECTIONSData,
PROJECTIONSQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='fred' label='fred'>

**long_run**: `bool | None`<br/>
*Default:* False<br/>
Flag to show long run projections

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | str`<br/>
The date of the data.

**range_high**: `float | None`<br/>
High projection of rates.

**central_tendency_high**: `float | None`<br/>
Central tendency of high projection of rates.

**median**: `float | None`<br/>
Median projection of rates.

**range_midpoint**: `float | None`<br/>
Midpoint projection of rates.

**central_tendency_midpoint**: `float | None`<br/>
Central tendency of midpoint projection of rates.

**range_low**: `float | None`<br/>
Low projection of rates.

**central_tendency_low**: `float | None`<br/>
Central tendency of low projection of rates.

</TabItem>
<TabItem value='fred' label='fred'>

**date**: `date | str`<br/>
The date of the data.

**range_high**: `float | None`<br/>
High projection of rates.

**central_tendency_high**: `float | None`<br/>
Central tendency of high projection of rates.

**median**: `float | None`<br/>
Median projection of rates.

**range_midpoint**: `float | None`<br/>
Midpoint projection of rates.

**central_tendency_midpoint**: `float | None`<br/>
Central tendency of midpoint projection of rates.

**range_low**: `float | None`<br/>
Low projection of rates.

**central_tendency_low**: `float | None`<br/>
Central tendency of low projection of rates.

</TabItem>
</Tabs>

