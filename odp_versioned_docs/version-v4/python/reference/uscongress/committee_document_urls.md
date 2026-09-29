---
title: "committee_document_urls"
description: "Get document choices for a Congressional Committee"
keywords:
- uscongress
- committee_document_urls
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="uscongress/committee_document_urls - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get document choices for a Congressional Committee.

This endpoint populates the Committee Document Viewer file selector
with the committee's available documents by type.

Examples
--------

```python
from openbb import obb
obb.uscongress.committee_document_urls(chamber='senate', committee='ssaf00')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**chamber**: `str`<br/>
**committee**: `str`<br/>
**subcommittee**: `str | None`<br/>
**doc_type**: `str`<br/>
*Default:* all<br/>
**congress**: `int | None`<br/>
**is_workspace**: `bool`<br/>
*Default:* False<br/>
**use_cache**: `bool`<br/>
*Default:* True<br/>
**provider**: `str | None`<br/>
*Default:* congress_gov<br/>
</TabItem>
</Tabs>

---

## Returns

---
