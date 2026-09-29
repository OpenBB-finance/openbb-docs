---
title: "money_measures"
description: "Get Money Measures (M1/M2 and components)"
keywords:
- economy
- money_measures
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="economy/money_measures - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get Money Measures (M1/M2 and components).

The Federal Reserve publishes as part of the H.6 Release.

Examples
--------

```python
from openbb import obb
obb.economy.money_measures()
obb.economy.money_measures(adjusted=False)
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

---

## Returns

**results**: `MoneyMeasures`

Serializable results.

**provider**: `Optional[Literal['federal_reserve']]`

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

