---
title: "Congress Committee Info"
description: "Get metadata and membership for a single U"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `CongressCommitteeInfo` | `CongressCommitteeInfoQueryParams` | `CongressCommitteeInfoData` |

### Import Statement

```python
from openbb_core.provider.standard_models. import (
CongressCommitteeInfoData,
CongressCommitteeInfoQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='congress_gov' label='congress_gov'>

**chamber**: `Literal['house', 'senate', 'joint'] | None`<br/>
*Default:* senate<br/>
Chamber: house, senate, or joint.

**committee**: `str | None`<br/>
*Default:* ssaf00<br/>
System code of the committee (e.g., ssaf00, hsju00).

**subcommittee**: `str | None`<br/>
System code of a subcommittee (e.g., ssga22). Leave empty for parent committee.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='congress_gov' label='congress_gov'>

**markdown_content**: `str`<br/>
Committee metadata and membership formatted as Markdown.

**raw_data**: `dict[str, Any]`<br/>
Raw JSON data from the committee detail and member lookups.

</TabItem>
</Tabs>

