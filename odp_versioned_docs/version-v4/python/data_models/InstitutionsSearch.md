---
title: "Institutions Search"
description: "Search SEC-regulated institutions by name and return a list of results with CIK numbers"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `InstitutionsSearch` | `InstitutionsSearchQueryParams` | `InstitutionsSearchData` |

### Import Statement

```python
from openbb_core.provider.standard_models. import (
InstitutionsSearchData,
InstitutionsSearchQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='sec' label='sec'>

**query**: `str | None`<br/>
Search query.

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

**name**: `str | None`<br/>
The name of the institution.

**cik**: `str | int | None`<br/>
Central Index Key (CIK)

</TabItem>
</Tabs>

