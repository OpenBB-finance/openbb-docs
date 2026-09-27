---
title: "Export Destinations"
description: "Get top export destinations by country from the UN Comtrade International Trade Statistics Database"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `ExportDestinations` | `ExportDestinationsQueryParams` | `ExportDestinationsData` |

### Import Statement

```python
from openbb_core.provider.standard_models.export_destinations import (
ExportDestinationsData,
ExportDestinationsQueryParams,
)
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

