---
title: "Cik Map"
description: "Map a ticker symbol to a CIK number"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `CikMap` | `CikMapQueryParams` | `CikMapData` |

### Import Statement

```python
from openbb_core.provider.standard_models.cik_map import (
CikMapData,
CikMapQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol to get data for.

</TabItem>
<TabItem value='sec' label='sec'>

**symbol**: `str`<br/>
Symbol to get data for.

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
Whether or not to use cache for the request, default is True.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**cik**: `str | int | None`<br/>
Central Index Key (CIK) for the requested entity.

</TabItem>
<TabItem value='sec' label='sec'>

**cik**: `str | int | None`<br/>
Central Index Key (CIK) for the requested entity.

</TabItem>
</Tabs>

