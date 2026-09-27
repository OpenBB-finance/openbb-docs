---
title: "Selected Treasury Bill"
description: "Select Treasury Bill"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `SelectedTreasuryBill` | `SelectedTreasuryBillQueryParams` | `SelectedTreasuryBillData` |

### Import Statement

```python
from openbb_core.provider.standard_models.tbffr import (
SelectedTreasuryBillData,
SelectedTreasuryBillQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**maturity**: `Literal['3m', '6m'] | None`<br/>
*Default:* 3m<br/>
The maturity

</TabItem>
<TabItem value='fred' label='fred'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**maturity**: `Literal['3m', '6m'] | None`<br/>
*Default:* 3m<br/>
The maturity

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | str`<br/>
The date of the data.

**rate**: `float | None`<br/>
SelectedTreasuryBill Rate.

</TabItem>
<TabItem value='fred' label='fred'>

**date**: `date | str`<br/>
The date of the data.

**rate**: `float | None`<br/>
SelectedTreasuryBill Rate.

</TabItem>
</Tabs>

