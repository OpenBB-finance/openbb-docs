---
title: "sectors"
description: "Get Index Sectors"
keywords:
- index
- sectors
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="index/sectors - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get Index Sectors. Sector weighting of an index.

Examples
--------

```python
from openbb import obb
obb.index.sectors(symbol='^TX60')
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

---

## Returns

**results**: `IndexSectors`

Serializable results.

**provider**: `Optional[Literal['tmx']]`

Provider name.

**warnings**: `Optional[list[Warning_]]`

list of warnings.

**chart**: `Optional[Chart]`

Chart object.

**extra**: `dict[str, Any]`

Extra info.

---
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

