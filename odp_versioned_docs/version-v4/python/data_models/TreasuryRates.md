---
title: "Treasury Rates"
description: "Government Treasury Rates"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `TreasuryRates` | `TreasuryRatesQueryParams` | `TreasuryRatesData` |

### Import Statement

```python
from openbb_core.provider.standard_models.treasury_rates import (
TreasuryRatesData,
TreasuryRatesQueryParams,
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

</TabItem>
<TabItem value='fmp' label='fmp'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
</Tabs>

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

