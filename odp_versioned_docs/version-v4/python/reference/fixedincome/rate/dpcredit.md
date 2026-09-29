---
title: "dpcredit"
description: "Discount Window Primary Credit Rate"
keywords:
- fixedincome
- rate
- dpcredit
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="fixedincome/rate/dpcredit - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Discount Window Primary Credit Rate.

A bank rate is the interest rate a nation's central bank charges to its domestic banks to borrow money.
The rates central banks charge are set to stabilize the economy.
In the United States, the Federal Reserve System's Board of Governors set the bank rate,
also known as the discount rate.

Examples
--------

```python
from openbb import obb
obb.fixedincome.rate.dpcredit()
obb.fixedincome.rate.dpcredit(start_date='2023-02-01', end_date='2023-05-01')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
<TabItem value='fred' label='fred'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**parameter**: `Literal['daily_excl_weekend', 'monthly', 'weekly', 'daily', 'annual'] | None`<br/>
*Default:* daily_excl_weekend<br/>
FRED series ID of DWPCR data.

</TabItem>
</Tabs>

---

## Returns

**results**: `DiscountWindowPrimaryCreditRate`

Serializable results.

**provider**: `Optional[Literal['fred']]`

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

**date**: `date | str`<br/>
The date of the data.

**rate**: `float | None`<br/>
Discount Window Primary Credit Rate.

</TabItem>
<TabItem value='fred' label='fred'>

**date**: `date | str`<br/>
The date of the data.

**rate**: `float | None`<br/>
Discount Window Primary Credit Rate.

</TabItem>
</Tabs>

