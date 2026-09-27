---
title: "Index Search"
description: "Filter indices for rows containing the query"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `IndexSearch` | `IndexSearchQueryParams` | `IndexSearchData` |

### Import Statement

```python
from openbb_core.provider.standard_models.index_search import (
IndexSearchData,
IndexSearchQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**query**: `str | None`<br/>
Search query.

**is_symbol**: `bool | None`<br/>
*Default:* False<br/>
Whether to search by ticker symbol.

</TabItem>
<TabItem value='cboe' label='cboe'>

**query**: `str | None`<br/>
Search query.

**is_symbol**: `bool | None`<br/>
*Default:* False<br/>
Whether to search by ticker symbol.

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
When True, the Cboe Index directory will be cached for 24 hours. Set as False to bypass.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str`<br/>
Name of the index.

</TabItem>
<TabItem value='cboe' label='cboe'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str`<br/>
Name of the index.

**description**: `str | None`<br/>
Description for the index.

**data_delay**: `int | None`<br/>
Data delay for the index. Valid only for US indices.

**currency**: `str | None`<br/>
Currency for the index.

**time_zone**: `str | None`<br/>
Time zone for the index. Valid only for US indices.

**open_time**: `datetime.time | None`<br/>
Opening time for the index. Valid only for US indices.

**close_time**: `datetime.time | None`<br/>
Closing time for the index. Valid only for US indices.

**tick_days**: `str | None`<br/>
The trading days for the index. Valid only for US indices.

**tick_frequency**: `str | None`<br/>
Tick frequency for the index. Valid only for US indices.

**tick_period**: `str | None`<br/>
Tick period for the index. Valid only for US indices.

</TabItem>
</Tabs>

