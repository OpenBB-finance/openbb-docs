---
title: "amendment_text_urls"
description: "Get document choices for a specific amendment"
keywords:
- uscongress
- amendment_text_urls
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="uscongress/amendment_text_urls - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get document choices for a specific amendment.

This function is used by the Congressional Amendment Viewer widget, in OpenBB Workspace,
to populate document choices for the selected amendment.

Examples
--------

```python
from openbb import obb
obb.uscongress.amendment_text_urls(amendment_url='119/hamdt/2')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**amendment_url**: `str`<br/>
**is_workspace**: `bool`<br/>
*Default:* False<br/>
**provider**: `str | None`<br/>
*Default:* congress_gov<br/>
</TabItem>
</Tabs>

---

## Returns

---
