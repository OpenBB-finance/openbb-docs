---
title: "Rss Litigation"
description: "Get the RSS feed that provides links to litigation releases concerning civil lawsuits brought by the Commission in federal court"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `RssLitigation` | `RssLitigationQueryParams` | `RssLitigationData` |

### Import Statement

```python
from openbb_core.provider.standard_models. import (
RssLitigationData,
RssLitigationQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='sec' label='sec'>

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='sec' label='sec'>

**published**: `datetime`<br/>
The date of publication.

**title**: `str`<br/>
The title of the release.

**summary**: `str`<br/>
Short summary of the release.

**id**: `str`<br/>
The identifier associated with the release.

**link**: `str`<br/>
URL to the release.

</TabItem>
</Tabs>

