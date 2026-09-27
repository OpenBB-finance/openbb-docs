---
title: "institutions_search"
description: "Learn how to use the OBB.regulators.sec.institutions_search() method  to look up institutions regulated by the SEC. This method allows you to search for  institutions based on various parameters such as the query and provider. It returns  a list of search results and provides additional attributes like warnings, chart,  and metadata. Explore the attributes like name and cik for more details on the institution."
keywords:
- institutions regulated by the SEC
- SEC regulated institutions lookup
- SEC regulated institutions search
- SEC institutions search query
- OBB regulator
- InstitutionsSearch class
- provider parameter
- query parameter
- use_cache parameter
- results attribute
- warnings attribute
- chart attribute
- metadata attribute
- name attribute
- cik attribute
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="regulators/sec/institutions_search - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Search SEC-regulated institutions by name and return a list of results with CIK numbers.

Examples
--------

```python
from openbb import obb
obb.regulators.sec.institutions_search()
obb.regulators.sec.institutions_search(query='blackstone real estate')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='sec' label='sec'>

**query**: `str | None`<br/>
Search query.

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
Whether or not to use cache.

</TabItem>
</Tabs>

---

## Returns

**results**: `InstitutionsSearch`

Serializable results.

**provider**: `Optional[Literal['sec']]`

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
<TabItem value='sec' label='sec'>

**name**: `str | None`<br/>
The name of the institution.

**cik**: `str | int | None`<br/>
Central Index Key (CIK)

</TabItem>
</Tabs>

