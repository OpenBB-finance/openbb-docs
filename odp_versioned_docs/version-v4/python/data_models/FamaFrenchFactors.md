---
title: "Fama French Factors"
description: "Fama-French factors"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `FamaFrenchFactors` | `FamaFrenchFactorsQueryParams` | `FamaFrenchFactorsData` |

### Import Statement

```python
from openbb_core.provider.standard_models. import (
FamaFrenchFactorsData,
FamaFrenchFactorsQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='famafrench' label='famafrench'>

**region**: `Literal['america', 'north_america', 'europe', 'japan', 'asia_pacific_ex_japan', 'developed', 'developed_ex_us', 'emerging'] | None`<br/>
*Default:* america<br/>
Region of focus. Default is America.

**factor**: `Literal['5_factors', '3_factors', 'momentum', 'st_reversal', 'lt_reversal'] | None`<br/>
*Default:* 3_factors<br/>
Factor to fetch. Default is the 3-Factor Model.Short/long-term reversals are available only for America.

**frequency**: `Literal['daily', 'weekly', 'monthly', 'annual'] | None`<br/>
*Default:* monthly<br/>
Frequency of the factor data.Not all are available for all regions, and intervals depend on the factor selected. Weekly is only available for the US 3-Factor Model.

**start_date**: `date | None`<br/>
Start date of the data. Defaults to the complete data range.

**end_date**: `date | None`<br/>
End date of the data. Defaults to the complete data range.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='famafrench' label='famafrench'>

**date**: `date | str`<br/>
Date of the factor data.

**mkt_rf**: `float | None`<br/>
Excess return on the market, value-weighted return of all firms, minus the one-month Treasury bill rate. Not returned for momentum or reversal factors.

**smb**: `float | None`<br/>
Small minus big (SMB) factor returns. Average return of small minus big stock portfolios. Not returned for momentum or reversal factors.

**hml**: `float | None`<br/>
High minus low (HML) factor returns. Average return on value minus average return on growth portfolios. Not returned for momentum or reversal factors.

**rmw**: `float | None`<br/>
Robust minus weak (RMW) factor returns. Average return on robust operating profitability portfolios, minus average return on weak operating profitability portfolios. Only returned when 5 Factor model is selected.

**cma**: `float | None`<br/>
Conservative minus aggressive (CMA) factor returns. Average return on conservative investment portfolios, minus average return on aggressive investment portfolios. Only returned when 5 Factor model is selected.

**rf**: `float | None`<br/>
Risk-free rate (RF) returns. The one-month US Treasury bill rate. Not returned when momentum or reversal factors are selected.

**mom**: `float | None`<br/>
Momentum (Mom) factor returns. Returned only when the momentum factor is selected and the region is 'america'.

**wml**: `float | None`<br/>
Winners minus losers (WML) factor returns. Equal-weight average of the returns for the winner portfolios minus the average of the returns for the loser portfolios. Returned only when the momentum factor is selected, and the region is not 'america'.

**lt_rev**: `float | None`<br/>
Long-term reversal (LT_Rev) factor returns. Returned only when the long-term reversal factor is selected, and the region is 'america'.

**st_rev**: `float | None`<br/>
Short-term reversal (ST_Rev) factor returns. Returned only when the short-term reversal factor is selected, and the region is 'america'.

</TabItem>
</Tabs>

