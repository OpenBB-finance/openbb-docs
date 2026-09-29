---
title: "COT Search"
description: "Search current Commitment of Traders Reports"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `COTSearch` | `COTSearchQueryParams` | `COTSearchData` |

### Import Statement

```python
from openbb_core.provider.standard_models. import (
COTSearchData,
COTSearchQueryParams,
)
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

