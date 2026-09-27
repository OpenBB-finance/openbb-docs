---
title: "sic_search"
description: "Learn how to perform a search for industry titles, reporting office,  and SIC codes using Python. Explore the parameters, returns, and data associated  with the `obb.regulators.sec.sic_search` function."
keywords:
- search
- industry titles
- reporting office
- SIC codes
- Python
- search query
- provider
- cache
- results
- warnings
- chart
- metadata
- data
- sector industrial code
- industry title
- reporting office
- Corporate Finance Office
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="regulators/sec/sic_search - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Search for Industry Titles, Reporting Office, and SIC Codes. An empty query string returns all results.

Examples
--------

```python
from openbb import obb
obb.regulators.sec.sic_search()
obb.regulators.sec.sic_search(query='real estate investment trusts')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='sec' label='sec'>

**query**: `str`<br/>
Search query to match against SIC code, industry title, or office.

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
Whether or not to use cache.

</TabItem>
</Tabs>

---

## Returns

**results**: `SicSearch`

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

**sic**: `int`<br/>
Sector Industrial Code (SIC)

**industry**: `str`<br/>
Industry title.

**office**: `str`<br/>
Reporting office within the Corporate Finance Office

</TabItem>
</Tabs>

