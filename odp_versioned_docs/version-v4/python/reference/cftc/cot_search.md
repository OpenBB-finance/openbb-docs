---
title: "cot_search"
description: "Search current Commitment of Traders Reports"
keywords:
- cftc
- cot_search
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="cftc/cot_search - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Search current Commitment of Traders Reports.

Examples
--------

```python
from openbb import obb
obb.cftc.cot_search()
obb.cftc.cot_search(query='gold')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**code**: `str | None`<br/>
A string with the market contract code (can be partial).

**query**: `str | None`<br/>
Search query.

</TabItem>
<TabItem value='cftc' label='cftc'>

**code**: `str | None`<br/>
A string with the market contract code (can be partial).

**query**: `str | None`<br/>
Search query.

**report_type**: `Literal['legacy', 'disaggregated', 'financial', 'supplemental'] | None`<br/>
*Default:* legacy<br/>
The report type to search within.

**futures_only**: `bool | None`<br/>
*Default:* False<br/>
Search the futures-only report. Default is False, for the combined report.

**category**: `str | None`<br/>
Filter by commodity group name. Underscores are replaced with spaces. E.g, 'natural_resources' -> 'NATURAL RESOURCES'.

**subcategory**: `str | None`<br/>
Filter by commodity subgroup name. Underscores are replaced with spaces. E.g, 'precious_metals' -> 'PRECIOUS METALS'.

</TabItem>
</Tabs>

---

## Returns

**results**: `COTSearch`

Serializable results.

**provider**: `Optional[Literal['cftc']]`

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

**code**: `str`<br/>
CFTC market contract code of the report.

**name**: `str`<br/>
Name of the underlying asset.

**category**: `str | None`<br/>
Category of the underlying asset.

**subcategory**: `str | None`<br/>
Subcategory of the underlying asset.

**units**: `str | None`<br/>
The units for one contract.

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

</TabItem>
<TabItem value='cftc' label='cftc'>

**code**: `str`<br/>
CFTC market contract code of the report.

**name**: `str`<br/>
Name of the underlying asset.

**category**: `str | None`<br/>
Category of the underlying asset.

**subcategory**: `str | None`<br/>
Subcategory of the underlying asset.

**units**: `str | None`<br/>
The units for one contract.

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**commodity**: `str | None`<br/>
Name of the commodity.

</TabItem>
</Tabs>

