---
title: "ETF Active"
description: "Get the most active ETFs"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `ETFActive` | `ETFActiveQueryParams` | `ETFActiveData` |

### Import Statement

```python
from openbb_core.provider.standard_models. import (
ETFActiveData,
ETFActiveQueryParams,
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

