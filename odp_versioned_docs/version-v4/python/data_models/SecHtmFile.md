---
title: "Sec Htm File"
description: "Download a raw HTML object from the SEC website"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `SecHtmFile` | `SecHtmFileQueryParams` | `SecHtmFileData` |

### Import Statement

```python
from openbb_core.provider.standard_models. import (
SecHtmFileData,
SecHtmFileQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='sec' label='sec'>

**url**: `str | None`<br/>
URL for the SEC filing.

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
Cache the file for use later. Default is True.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='sec' label='sec'>

**url**: `str`<br/>
URL of the downloaded file.

**content**: `str`<br/>
Raw content of the HTM/HTML file.

</TabItem>
</Tabs>

