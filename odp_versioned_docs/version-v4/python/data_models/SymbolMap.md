---
title: "Symbol Map"
description: "Map a CIK number to a ticker symbol, leading 0s can be omitted or included"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `SymbolMap` | `SymbolMapQueryParams` | `SymbolMapData` |

### Import Statement

```python
from openbb_core.provider.standard_models. import (
SymbolMapData,
SymbolMapQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**query**: `str`<br/>
Search query.

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
Whether or not to use cache. If True, cache will store for seven days.

</TabItem>
<TabItem value='sec' label='sec'>

**query**: `str`<br/>
Search query.

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
Whether or not to use cache. If True, cache will store for seven days.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='sec' label='sec'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

</TabItem>
</Tabs>

