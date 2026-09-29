---
title: "treasury_rates"
description: "Government Treasury Rates"
keywords:
- fixedincome
- government
- treasury_rates
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="fixedincome/government/treasury_rates - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Government Treasury Rates.

Examples
--------

```python
from openbb import obb
obb.fixedincome.government.treasury_rates()
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

</TabItem>
<TabItem value='fmp' label='fmp'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
</Tabs>

---

## Returns

**results**: `TreasuryRates`

Serializable results.

**provider**: `Optional[Literal['federal_reserve', 'fmp']]`

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

**week_4**: `float | None`<br/>
4 week Treasury bills rate (secondary market).

**month_1**: `float | None`<br/>
1 month Treasury rate.

**month_2**: `float | None`<br/>
2 month Treasury rate.

**month_3**: `float | None`<br/>
3 month Treasury rate.

**month_6**: `float | None`<br/>
6 month Treasury rate.

**year_1**: `float | None`<br/>
1 year Treasury rate.

**year_2**: `float | None`<br/>
2 year Treasury rate.

**year_3**: `float | None`<br/>
3 year Treasury rate.

**year_5**: `float | None`<br/>
5 year Treasury rate.

**year_7**: `float | None`<br/>
7 year Treasury rate.

**year_10**: `float | None`<br/>
10 year Treasury rate.

**year_20**: `float | None`<br/>
20 year Treasury rate.

**year_30**: `float | None`<br/>
30 year Treasury rate.

</TabItem>
<TabItem value='federal_reserve' label='federal_reserve'>

**date**: `date | str`<br/>
The date of the data.

**week_4**: `float | None`<br/>
4 week Treasury bills rate (secondary market).

**month_1**: `float | None`<br/>
1 month Treasury rate.

**month_2**: `float | None`<br/>
2 month Treasury rate.

**month_3**: `float | None`<br/>
3 month Treasury rate.

**month_6**: `float | None`<br/>
6 month Treasury rate.

**year_1**: `float | None`<br/>
1 year Treasury rate.

**year_2**: `float | None`<br/>
2 year Treasury rate.

**year_3**: `float | None`<br/>
3 year Treasury rate.

**year_5**: `float | None`<br/>
5 year Treasury rate.

**year_7**: `float | None`<br/>
7 year Treasury rate.

**year_10**: `float | None`<br/>
10 year Treasury rate.

**year_20**: `float | None`<br/>
20 year Treasury rate.

**year_30**: `float | None`<br/>
30 year Treasury rate.

</TabItem>
<TabItem value='fmp' label='fmp'>

**date**: `date | str`<br/>
The date of the data.

**week_4**: `float | None`<br/>
4 week Treasury bills rate (secondary market).

**month_1**: `float | None`<br/>
1 month Treasury rate.

**month_2**: `float | None`<br/>
2 month Treasury rate.

**month_3**: `float | None`<br/>
3 month Treasury rate.

**month_6**: `float | None`<br/>
6 month Treasury rate.

**year_1**: `float | None`<br/>
1 year Treasury rate.

**year_2**: `float | None`<br/>
2 year Treasury rate.

**year_3**: `float | None`<br/>
3 year Treasury rate.

**year_5**: `float | None`<br/>
5 year Treasury rate.

**year_7**: `float | None`<br/>
7 year Treasury rate.

**year_10**: `float | None`<br/>
10 year Treasury rate.

**year_20**: `float | None`<br/>
20 year Treasury rate.

**year_30**: `float | None`<br/>
30 year Treasury rate.

</TabItem>
</Tabs>

