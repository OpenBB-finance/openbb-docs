---
title: "Money Measures"
description: "Get Money Measures (M1/M2 and components)"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `MoneyMeasures` | `MoneyMeasuresQueryParams` | `MoneyMeasuresData` |

### Import Statement

```python
from openbb_core.provider.standard_models.money_measures import (
MoneyMeasuresData,
MoneyMeasuresQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**adjusted**: `bool | None`<br/>
*Default:* True<br/>
Whether to return seasonally adjusted data.

</TabItem>
<TabItem value='federal_reserve' label='federal_reserve'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**adjusted**: `bool | None`<br/>
*Default:* True<br/>
Whether to return seasonally adjusted data.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**month**: `date`<br/>
The date of the data.

**m1**: `float`<br/>
Value of the M1 money supply in billions.

**m2**: `float`<br/>
Value of the M2 money supply in billions.

**currency**: `float | None`<br/>
Value of currency in circulation in billions.

**demand_deposits**: `float | None`<br/>
Value of demand deposits in billions.

**retail_money_market_funds**: `float | None`<br/>
Value of retail money market funds in billions.

**other_liquid_deposits**: `float | None`<br/>
Value of other liquid deposits in billions.

**small_denomination_time_deposits**: `float | None`<br/>
Value of small denomination time deposits in billions.

</TabItem>
<TabItem value='federal_reserve' label='federal_reserve'>

**month**: `date`<br/>
The date of the data.

**m1**: `float`<br/>
Value of the M1 money supply in billions.

**m2**: `float`<br/>
Value of the M2 money supply in billions.

**currency**: `float | None`<br/>
Value of currency in circulation in billions.

**demand_deposits**: `float | None`<br/>
Value of demand deposits in billions.

**retail_money_market_funds**: `float | None`<br/>
Value of retail money market funds in billions.

**other_liquid_deposits**: `float | None`<br/>
Value of other liquid deposits in billions.

**small_denomination_time_deposits**: `float | None`<br/>
Value of small denomination time deposits in billions.

</TabItem>
</Tabs>

