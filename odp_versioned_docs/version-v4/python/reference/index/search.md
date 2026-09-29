---
title: "search"
description: "Learn how to perform index search and retrieve index data using this  Python API. Understand the different parameters and their defaults, and get detailed  information about index symbols, names, and additional attributes such as ISIN code,  region, description, currency, and trading times."
keywords:
- index search
- search indices
- Python search query
- index data
- index symbol
- index name
- European indices
- US indices
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="index/search - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Filter indices for rows containing the query.

Examples
--------

```python
from openbb import obb
obb.index.search()
obb.index.search(query='SPX')
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

---

## Returns

**results**: `IndexSearch`

Serializable results.

**provider**: `Optional[Literal['cboe']]`

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

