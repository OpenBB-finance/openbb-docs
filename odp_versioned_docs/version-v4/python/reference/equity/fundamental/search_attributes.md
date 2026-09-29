---
title: "search_attributes"
description: "Search Intrinio data tags to search in latest or historical attributes"
keywords:
- equity
- fundamental
- search_attributes
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/fundamental/search_attributes - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Search Intrinio data tags to search in latest or historical attributes.

Examples
--------

```python
from openbb import obb
obb.equity.fundamental.search_attributes(query='ebitda')
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

---

## Returns

**results**: `SearchAttributes`

Serializable results.

**provider**: `Optional[Literal['intrinio']]`

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

