---
title: "Historical Attributes"
description: "Get the historical values of a data tag from Intrinio"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `HistoricalAttributes` | `HistoricalAttributesQueryParams` | `HistoricalAttributesData` |

### Import Statement

```python
from openbb_core.provider.standard_models.historical_attributes import (
HistoricalAttributesData,
HistoricalAttributesQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): intrinio.

**tag**: `str | list[str]`<br/>
Intrinio data tag ID or code. Multiple items allowed for provider(s): intrinio.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**frequency**: `Literal['daily', 'weekly', 'monthly', 'quarterly', 'yearly'] | None`<br/>
*Default:* yearly<br/>
The frequency of the data.

**limit**: `int | None`<br/>
*Default:* 1000<br/>
The number of data entries to return.

**tag_type**: `str | None`<br/>
Filter by type, when applicable.

**sort**: `Literal['asc', 'desc'] | None`<br/>
*Default:* desc<br/>
Sort order.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): intrinio.

**tag**: `str | list[str]`<br/>
Intrinio data tag ID or code. Multiple items allowed for provider(s): intrinio.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**frequency**: `Literal['daily', 'weekly', 'monthly', 'quarterly', 'yearly'] | None`<br/>
*Default:* yearly<br/>
The frequency of the data.

**limit**: `int | None`<br/>
*Default:* 1000<br/>
The number of data entries to return.

**tag_type**: `str | None`<br/>
Filter by type, when applicable.

**sort**: `Literal['asc', 'desc'] | None`<br/>
*Default:* desc<br/>
Sort order.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | str`<br/>
The date of the data.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**tag**: `str | None`<br/>
Tag name for the fetched data.

**value**: `float | None`<br/>
The value of the data.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**date**: `date | str`<br/>
The date of the data.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**tag**: `str | None`<br/>
Tag name for the fetched data.

**value**: `float | None`<br/>
The value of the data.

</TabItem>
</Tabs>

