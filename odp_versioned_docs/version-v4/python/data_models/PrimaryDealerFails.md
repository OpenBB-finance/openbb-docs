---
title: "Primary Dealer Fails"
description: "Primary Dealer Statistics for Fails to Deliver and Fails to Receive"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `PrimaryDealerFails` | `PrimaryDealerFailsQueryParams` | `PrimaryDealerFailsData` |

### Import Statement

```python
from openbb_core.provider.standard_models.primary_dealer_fails import (
PrimaryDealerFailsData,
PrimaryDealerFailsQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
<TabItem value='federal_reserve' label='federal_reserve'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**asset_class**: `Literal['all', 'treasuries', 'tips', 'agency', 'mbs', 'corporate'] | None`<br/>
*Default:* all<br/>
Asset class to return, default is 'all'.

**unit**: `Literal['value', 'percent'] | None`<br/>
*Default:* value<br/>
Unit of the data returned to the 'value' field. Default is 'value', which represents millions of USD. 'percent' returns data as the percentage of the total fails-to-receive and fails-to-deliver, by asset class.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | str`<br/>
The date of the data.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

</TabItem>
<TabItem value='federal_reserve' label='federal_reserve'>

**date**: `date | str`<br/>
The date of the data.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**title**: `str`<br/>
Title of the series' symbol.

**value**: `int | float`<br/>
Value of the data returned, in millions of USD if the `unit` parameter is 'value' else a normalized percent.

</TabItem>
</Tabs>

