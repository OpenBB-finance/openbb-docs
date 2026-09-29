---
title: "ETF Gainers"
description: "Get the top ETF gainers"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `ETFGainers` | `ETFGainersQueryParams` | `ETFGainersData` |

### Import Statement

```python
from openbb_core.provider.standard_models. import (
ETFGainersData,
ETFGainersQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**sort**: `Literal['asc', 'desc'] | None`<br/>
*Default:* desc<br/>
Sort order. Possible values: 'asc', 'desc'. Default: 'desc'.

**limit**: `int | None`<br/>
*Default:* 10<br/>
The number of data entries to return.

</TabItem>
<TabItem value='wsj' label='wsj'>

**sort**: `Literal['asc', 'desc'] | None`<br/>
*Default:* desc<br/>
Sort order. Possible values: 'asc', 'desc'. Default: 'desc'.

**limit**: `int | None`<br/>
*Default:* 10<br/>
The number of data entries to return.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str`<br/>
Name of the entity.

**last_price**: `float`<br/>
Last price.

**percent_change**: `float`<br/>
Percent change.

**net_change**: `float`<br/>
Net change.

**volume**: `float`<br/>
The trading volume.

**date**: `date | str`<br/>
The date of the data.

</TabItem>
<TabItem value='wsj' label='wsj'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str`<br/>
Name of the entity.

**last_price**: `float`<br/>
Last price.

**percent_change**: `float`<br/>
Percent change.

**net_change**: `float`<br/>
Net change.

**volume**: `float`<br/>
The trading volume.

**date**: `date | str`<br/>
The date of the data.

**bluegrass_channel**: `str | None`<br/>
Bluegrass channel.

**country**: `str`<br/>
Country of the entity.

**mantissa**: `int`<br/>
Mantissa.

**type**: `str`<br/>
Type of the entity.

**formatted_price**: `str`<br/>
Formatted price.

**formatted_volume**: `str`<br/>
Formatted volume.

**formatted_price_change**: `str`<br/>
Formatted price change.

**formatted_percent_change**: `str`<br/>
Formatted percent change.

**url**: `str`<br/>
The source url.

</TabItem>
</Tabs>

