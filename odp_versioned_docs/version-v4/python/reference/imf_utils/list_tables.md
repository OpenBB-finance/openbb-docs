---
title: "list_tables"
description: "Get the list of presentation tables available from the IMF"
keywords:
- imf_utils
- list_tables
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="imf_utils/list_tables - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get the list of presentation tables available from the IMF.

Examples
--------

```python
from openbb import obb
# Get the list of available presentation tables.
obb.imf_utils.list_tables()
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
</Tabs>

---

## Returns

**results**: `list[ImfTableMetadata]`

Serializable results.

**provider**: `str`

Provider name.

**warnings**: `Optional[list[Warning_]]`

list of warnings.

**chart**: `Optional[Chart]`

Chart object.

**extra**: `dict[str, Any]`

Extra info.

---
