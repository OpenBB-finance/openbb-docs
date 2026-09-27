---
title: "Search Attributes"
description: "Search Intrinio data tags to search in latest or historical attributes"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `SearchAttributes` | `SearchAttributesQueryParams` | `SearchAttributesData` |

### Import Statement

```python
from openbb_core.provider.standard_models.search_attributes import (
SearchAttributesData,
SearchAttributesQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**query**: `str`<br/>
Query to search for.

**limit**: `int | None`<br/>
*Default:* 1000<br/>
The number of data entries to return.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**query**: `str`<br/>
Query to search for.

**limit**: `int | None`<br/>
*Default:* 1000<br/>
The number of data entries to return.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**id**: `str`<br/>
ID of the financial attribute.

**name**: `str`<br/>
Name of the financial attribute.

**tag**: `str`<br/>
Tag of the financial attribute.

**statement_code**: `str`<br/>
Code of the financial statement.

**statement_type**: `str | None`<br/>
Type of the financial statement.

**parent_name**: `str | None`<br/>
Parent's name of the financial attribute.

**sequence**: `int | None`<br/>
Sequence of the financial statement.

**factor**: `str | None`<br/>
Unit of the financial attribute.

**transaction**: `str | None`<br/>
Transaction type (credit/debit) of the financial attribute.

**type**: `str | None`<br/>
Type of the financial attribute.

**unit**: `str | None`<br/>
Unit of the financial attribute.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**id**: `str`<br/>
ID of the financial attribute.

**name**: `str`<br/>
Name of the financial attribute.

**tag**: `str`<br/>
Tag of the financial attribute.

**statement_code**: `str`<br/>
Code of the financial statement.

**statement_type**: `str | None`<br/>
Type of the financial statement.

**parent_name**: `str | None`<br/>
Parent's name of the financial attribute.

**sequence**: `int | None`<br/>
Sequence of the financial statement.

**factor**: `str | None`<br/>
Unit of the financial attribute.

**transaction**: `str | None`<br/>
Transaction type (credit/debit) of the financial attribute.

**type**: `str | None`<br/>
Type of the financial attribute.

**unit**: `str | None`<br/>
Unit of the financial attribute.

</TabItem>
</Tabs>

