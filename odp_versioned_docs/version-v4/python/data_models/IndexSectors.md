---
title: "Index Sectors"
description: "Get Index Sectors"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `IndexSectors` | `IndexSectorsQueryParams` | `IndexSectorsData` |

### Import Statement

```python
from openbb_core.provider.standard_models.index_sectors import (
IndexSectorsData,
IndexSectorsQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol to get data for.

</TabItem>
<TabItem value='tmx' label='tmx'>

**symbol**: `str`<br/>
Symbol to get data for.

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
Whether to use a cached request. All Index data comes from a single JSON file that is updated daily. To bypass, set to False. If True, the data will be cached for 1 day.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**sector**: `str`<br/>
The sector name.

**weight**: `float`<br/>
The weight of the sector in the index.

</TabItem>
<TabItem value='tmx' label='tmx'>

**sector**: `str`<br/>
The sector name.

**weight**: `float`<br/>
The weight of the sector in the index.

</TabItem>
</Tabs>

