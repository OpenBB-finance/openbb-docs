---
title: "bill_text_urls"
description: "Get document choices for a specific bill"
keywords:
- uscongress
- bill_text_urls
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="uscongress/bill_text_urls - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get document choices for a specific bill.

This function is used by the Congressional Bills Viewer widget, in OpenBB Workspace,
to populate PDF document choices for the selected bill.

When 'is_workspace' is False (default), it returns a list of the available text versions
of the specified bill and their download links for the different formats.

Examples
--------

```python
from openbb import obb
obb.uscongress.bill_text_urls(bill_url='https://api.congress.gov/v3/bill/119/s/1947?')
obb.uscongress.bill_text_urls(bill_url='119/s/1947')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**bill_url**: `str`<br/>
The base URL of the bill (e.g., "https://api.congress.gov/v3/bill/119/s/1947?format=json"). This can also be a shortened version like "119/s/1947".

**is_workspace**: `bool`<br/>
*Default:* False<br/>
Whether the request is coming from the OpenBB Workspace. This alters the output format to conform to the Workspace's expectations.

**provider**: `str | None`<br/>
*Default:* congress_gov<br/>
The provider name, always "congress_gov". This is a dummy parameter.

</TabItem>
</Tabs>

---

## Returns

---
