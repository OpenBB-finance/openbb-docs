---
title: "Top Retail"
description: "Track over $30B USD/day of individual investors trades"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `TopRetail` | `TopRetailQueryParams` | `TopRetailData` |

### Import Statement

```python
from openbb_core.provider.standard_models.top_retail import (
TopRetailData,
TopRetailQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**limit**: `int | None`<br/>
*Default:* 5<br/>
The number of data entries to return.

</TabItem>
<TabItem value='nasdaq' label='nasdaq'>

**limit**: `int | None`<br/>
*Default:* 5<br/>
The number of data entries to return.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | str`<br/>
The date of the data.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**activity**: `float`<br/>
Activity of the symbol.

**sentiment**: `float`<br/>
Sentiment of the symbol. 1 is bullish, -1 is bearish.

</TabItem>
<TabItem value='nasdaq' label='nasdaq'>

**date**: `date | str`<br/>
The date of the data.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**activity**: `float`<br/>
Activity of the symbol.

**sentiment**: `float`<br/>
Sentiment of the symbol. 1 is bullish, -1 is bearish.

</TabItem>
</Tabs>

