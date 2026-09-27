---
title: "Available Indices"
description: "All indices available from a given provider"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `AvailableIndices` | `AvailableIndicesQueryParams` | `AvailableIndicesData` |

### Import Statement

```python
from openbb_core.provider.standard_models.available_indices import (
AvailableIndicesData,
AvailableIndicesQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='cboe' label='cboe'>

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
When True, the Cboe Index directory will be cached for 24 hours. Set as False to bypass.

</TabItem>
<TabItem value='fmp' label='fmp'>

</TabItem>
<TabItem value='tmx' label='tmx'>

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
Whether to use a cached request. Index data is from a single JSON file, updated each day after close. It is cached for one day. To bypass, set to False.

</TabItem>
<TabItem value='yfinance' label='yfinance'>

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
**exchange**: `str | None`<br/>
Stock exchange where the index is listed.

**currency**: `str | None`<br/>
Currency the index is traded in.

</TabItem>
<TabItem value='cboe' label='cboe'>

**symbol**: `str | None`<br/>
Symbol for the index.

**name**: `str | None`<br/>
**exchange**: `str | None`<br/>
Stock exchange where the index is listed.

**currency**: `str | None`<br/>
Currency the index is traded in.

**description**: `str | None`<br/>
Description for the index. Valid only for US indices.

**data_delay**: `int | None`<br/>
Data delay for the index. Valid only for US indices.

**open_time**: `datetime.time | None`<br/>
Opening time for the index. Valid only for US indices.

**close_time**: `datetime.time | None`<br/>
Closing time for the index. Valid only for US indices.

**time_zone**: `str | None`<br/>
Time zone for the index. Valid only for US indices.

**tick_days**: `str | None`<br/>
The trading days for the index. Valid only for US indices.

**tick_frequency**: `str | None`<br/>
The frequency of the index ticks. Valid only for US indices.

**tick_period**: `str | None`<br/>
The period of the index ticks. Valid only for US indices.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
**exchange**: `str | None`<br/>
Stock exchange where the index is listed.

**currency**: `str | None`<br/>
Currency the index is traded in.

</TabItem>
<TabItem value='tmx' label='tmx'>

**symbol**: `str`<br/>
The ticker symbol of the index.

**name**: `str | None`<br/>
**exchange**: `str | None`<br/>
Stock exchange where the index is listed.

**currency**: `str | None`<br/>
Currency the index is traded in.

</TabItem>
<TabItem value='yfinance' label='yfinance'>

**symbol**: `str`<br/>
Symbol for the index.

**name**: `str | None`<br/>
**exchange**: `str | None`<br/>
Stock exchange where the index is listed.

**currency**: `str | None`<br/>
Currency the index is traded in.

**code**: `str`<br/>
ID code for keying the index in the OpenBB Terminal.

</TabItem>
</Tabs>

