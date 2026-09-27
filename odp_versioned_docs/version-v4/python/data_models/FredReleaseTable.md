---
title: "Fred Release Table"
description: "Get economic release data by ID and/or element from FRED"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `FredReleaseTable` | `FredReleaseTableQueryParams` | `FredReleaseTableData` |

### Import Statement

```python
from openbb_core.provider.standard_models. import (
FredReleaseTableData,
FredReleaseTableQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**release_id**: `str`<br/>
The ID of the release. Use `fred_search` to find releases.

**element_id**: `str | None`<br/>
The element ID of a specific table in the release.

**date**: `None | date | str | None | list[None | date | str | None]`<br/>
A specific date to get data for. Multiple items allowed for provider(s): fred.

</TabItem>
<TabItem value='fred' label='fred'>

**release_id**: `str`<br/>
The ID of the release. Use `fred_search` to find releases.

**element_id**: `str | None`<br/>
The element ID of a specific table in the release.

**date**: `None | date | str | None | list[None | date | str | None]`<br/>
A specific date to get data for. Multiple items allowed for provider(s): fred.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | None | str`<br/>
The date of the data.

**level**: `int | None`<br/>
The indentation level of the element.

**element_type**: `str | None`<br/>
The type of the element.

**line**: `int | None`<br/>
The line number of the element.

**element_id**: `str | None`<br/>
The element id in the parent/child relationship.

**parent_id**: `str | None`<br/>
The parent id in the parent/child relationship.

**children**: `str | None`<br/>
The element_id of each child, as a comma-separated string.

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
The name of the series.

**value**: `float | None`<br/>
The reported value of the series.

</TabItem>
<TabItem value='fred' label='fred'>

**date**: `date | None | str`<br/>
The date of the data.

**level**: `int | None`<br/>
The indentation level of the element.

**element_type**: `str | None`<br/>
The type of the element.

**line**: `int | None`<br/>
The line number of the element.

**element_id**: `str | None`<br/>
The element id in the parent/child relationship.

**parent_id**: `str | None`<br/>
The parent id in the parent/child relationship.

**children**: `str | None`<br/>
The element_id of each child, as a comma-separated string.

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
The name of the series.

**value**: `float | None`<br/>
The reported value of the series.

</TabItem>
</Tabs>

