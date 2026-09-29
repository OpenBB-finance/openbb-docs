---
title: "Congress Bill Info"
description: "Get summary, status, and other metadata for a specific bill"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `CongressBillInfo` | `CongressBillInfoQueryParams` | `CongressBillInfoData` |

### Import Statement

```python
from openbb_core.provider.standard_models. import (
CongressBillInfoData,
CongressBillInfoQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='congress_gov' label='congress_gov'>

**bill_url**: `str`<br/>
Enter a base URL of a bill (e.g., 'https://api.congress.gov/v3/bill/119/s/1947?format=json'). Alternatively, you can enter a bill number (e.g., '119/s/1947').

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='congress_gov' label='congress_gov'>

**markdown_content**: `str`<br/>
Aggregated metadata for the bill in Markdown format.

**raw_data**: `dict[str, Any]`<br/>
Raw JSON data from the collected bill information.

</TabItem>
</Tabs>

