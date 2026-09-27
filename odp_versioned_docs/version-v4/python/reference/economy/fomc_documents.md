---
title: "fomc_documents"
description: "Get lists of FOMC documents by year and document type"
keywords:
- economy
- fomc_documents
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="economy/fomc_documents - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get lists of FOMC documents by year and document type.

Source: https://www.federalreserve.gov/monetarypolicy/fomc_historical.htm

Source: https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm

Examples
--------

```python
from openbb import obb
obb.economy.fomc_documents()
# Filter all documents by year.
obb.economy.fomc_documents(year=2022)
# Filter all documents by year and document type.
obb.economy.fomc_documents(year=2022, document_type='minutes')
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

---

## Returns

**results**: `FomcDocuments`

Serializable results.

**provider**: `Optional[Literal['federal_reserve']]`

Provider name.

**warnings**: `Optional[list[Warning_]]`

list of warnings.

**chart**: `Optional[Chart]`

Chart object.

**extra**: `dict[str, Any]`

Extra info.

---
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

