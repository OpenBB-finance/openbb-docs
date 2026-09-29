---
title: "presentation_table"
description: "Get a formatted presentation table from the IMF database"
keywords:
- imf_utils
- presentation_table
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="imf_utils/presentation_table - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get a formatted presentation table from the IMF database. Returns as HTML or JSON list.

Examples
--------

```python
from openbb import obb
# Get the most recent Balance of Payments table for Japan.
obb.imf_utils.presentation_table(dataflow_group='bop', table='bop_standard', country='JPN', frequency='Q', limit=4)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**dataflow_group**: `str | None`<br/>
The IMF dataflow group. See presentation_table_choices() for options.

**table**: `str | None`<br/>
The IMF presentation table ID. See presentation_table_choices() for options.

**country**: `str | None`<br/>
Country code to filter the data. Enter multiple codes by joining on '+'. See presentation_table_choices() for options. Typical values are ISO3 country codes.

**frequency**: `str | None`<br/>
The data frequency. See presentation_table_choices() for options. Typical values are 'A' (annual), 'Q' (quarter), 'M' (month), or 'D' (day).

**dimension_values**: `list[str] | str | None`<br/>
Dimension selection for filtering. Format: 'DIM_ID1:VAL1+VAL2.' See presentation_table_choices() and list_dataflow_choices() for available dimensions and values.

**limit**: `int`<br/>
*Default:* 1<br/>
Maximum number of records to retrieve per series.

**raw**: `bool`<br/>
*Default:* False<br/>
Return presentation table as raw JSON data if True.

</TabItem>
</Tabs>

---

## Returns

---
