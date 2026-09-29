---
title: "Sic Search"
description: "Search for Industry Titles, Reporting Office, and SIC Codes"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `SicSearch` | `SicSearchQueryParams` | `SicSearchData` |

### Import Statement

```python
from openbb_core.provider.standard_models. import (
SicSearchData,
SicSearchQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='sec' label='sec'>

**query**: `str`<br/>
Search query to match against SIC code, industry title, or office.

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
Whether or not to use cache.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='sec' label='sec'>

**sic**: `int`<br/>
Sector Industrial Code (SIC)

**industry**: `str`<br/>
Industry title.

**office**: `str`<br/>
Reporting office within the Corporate Finance Office

</TabItem>
</Tabs>

