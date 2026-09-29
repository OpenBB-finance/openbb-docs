---
title: "export_destinations"
description: "Get top export destinations by country from the UN Comtrade International Trade Statistics Database"
keywords:
- economy
- export_destinations
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="economy/export_destinations - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get top export destinations by country from the UN Comtrade International Trade Statistics Database.

Examples
--------

```python
from openbb import obb
obb.economy.export_destinations(country='us')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**country**: `str | list[str]`<br/>
The country to get data. Multiple items allowed for provider(s): econdb.

</TabItem>
<TabItem value='econdb' label='econdb'>

**country**: `str | list[str]`<br/>
The country to get data. Multiple items allowed for provider(s): econdb.

</TabItem>
</Tabs>

---

## Returns

**results**: `ExportDestinations`

Serializable results.

**provider**: `Optional[Literal['econdb']]`

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

**origin_country**: `str`<br/>
The country of origin.

**destination_country**: `str`<br/>
The destination country.

**value**: `float | int`<br/>
The value of the export.

</TabItem>
<TabItem value='econdb' label='econdb'>

**origin_country**: `str`<br/>
The country of origin.

**destination_country**: `str`<br/>
The destination country.

**value**: `float | int`<br/>
The value of the export.

**units**: `str`<br/>
The units of measurement for the value.

**title**: `str`<br/>
The title of the data.

**footnote**: `str | None`<br/>
The footnote for the data.

</TabItem>
</Tabs>

