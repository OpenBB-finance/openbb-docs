---
title: "Latest Attributes"
description: "Get the latest value of a data tag from Intrinio"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `LatestAttributes` | `LatestAttributesQueryParams` | `LatestAttributesData` |

### Import Statement

```python
from openbb_core.provider.standard_models.latest_attributes import (
LatestAttributesData,
LatestAttributesQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): intrinio.

**tag**: `str | list[str]`<br/>
Intrinio data tag ID or code. Multiple items allowed for provider(s): intrinio.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): intrinio.

**tag**: `str | list[str]`<br/>
Intrinio data tag ID or code. Multiple items allowed for provider(s): intrinio.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**tag**: `str | None`<br/>
Tag name for the fetched data.

**value**: `str | float | None`<br/>
The value of the data.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**tag**: `str | None`<br/>
Tag name for the fetched data.

**value**: `str | float | None`<br/>
The value of the data.

</TabItem>
</Tabs>

