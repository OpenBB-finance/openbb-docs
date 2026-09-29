---
title: "Congress Amendment Info"
description: "Get details for a specific amendment"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `CongressAmendmentInfo` | `CongressAmendmentInfoQueryParams` | `CongressAmendmentInfoData` |

### Import Statement

```python
from openbb_core.provider.standard_models. import (
CongressAmendmentInfoData,
CongressAmendmentInfoQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='congress_gov' label='congress_gov'>

**amendment_url**: `str`<br/>
Enter a base URL of an amendment (e.g., 'https://api.congress.gov/v3/amendment/119/hamdt/2?format=json'). Alternatively, you can enter a shorthand (e.g., '119/hamdt/2').

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='congress_gov' label='congress_gov'>

**markdown_content**: `str`<br/>
Aggregated metadata for the amendment in Markdown format.

**raw_data**: `dict[str, Any]`<br/>
Raw JSON data from the collected amendment information.

</TabItem>
</Tabs>

