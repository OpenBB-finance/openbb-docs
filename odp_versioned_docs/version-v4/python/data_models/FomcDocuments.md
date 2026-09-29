---
title: "Fomc Documents"
description: "Get lists of FOMC documents by year and document type"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `FomcDocuments` | `FomcDocumentsQueryParams` | `FomcDocumentsData` |

### Import Statement

```python
from openbb_core.provider.standard_models. import (
FomcDocumentsData,
FomcDocumentsQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='federal_reserve' label='federal_reserve'>

**year**: `int | None`<br/>
The year of FOMC documents to retrieve. If None, all years since 1959 are returned.

**document_type**: `str | None`<br/>
Filter by document type. Default is all. Choose from: all, monetary_policy, minutes, projections, materials, press_release, press_conference, agenda, transcript, speaker_key, beige_book, teal_book, green_book, blue_book, red_book

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='federal_reserve' label='federal_reserve'>

**date**: `date | str`<br/>
The date of the document, formatted as YYYY-MM-DD.

**doc_type**: `str`<br/>
The type of the FOMC document.

**doc_format**: `str`<br/>
The format of the document (e.g., pdf, htm).

**url**: `str`<br/>
The URL of the document.

</TabItem>
</Tabs>

