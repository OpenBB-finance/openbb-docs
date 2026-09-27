---
title: "factors"
description: "Fama-French factors"
keywords:
- famafrench
- factors
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="famafrench/factors - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Fama-French factors.

Metadata for the selected dataset are returned in the
`extra['results_metadata']` field of the response.

Source
------

https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html

All returns are in U.S. dollars, include dividends and capital gains,
and are not continuously compounded.

Market is the return on a region's value-weight market portfolio
minus the U.S. one month T-bill rate.

The Fama/French 5 factors (2x3) are constructed using the 6,
value-weight, portfolios formed on size and book-to-market, the 6,
value-weight, portfolios formed on size and operating profitability,
and the 6, value-weight, portfolios formed on size and investment.

To construct the SMB, HML, RMW, and CMA factors, we sort stocks in a
region into two market cap and three respective book-to-market equity (B/M),
operating profitability (OP), and investment (INV) groups at the end of each June.

Big stocks are those in the top 90% of June market cap for the region,
and small stocks are those in the bottom 10%.
The B/M, OP, and INV breakpoints for a region are the 30th and 70th percentiles
of respective ratios for the big stocks of the region.

Rm–Rf for July of year t to June of t+1 include all stocks
for which we have market equity data for June of t.
SMB, HML, RMW, and CMA for July of year t to June of t+1 include all stocks
for which we have market equity data for December of t-1
and June of t, (positive) book equity data for t-1 (for SMB, HML, and RMW),
non-missing revenues and at least one of the following: cost of goods sold,
selling, general and administrative expenses, or interest expense for
t-1 (for SMB and RMW), and total assets data for t-2 and t-1 (for SMB and CMA).

The momentum and short term reversal portfolios are reconstituted monthly
and the other research portfolios are reconstituted annually.
We reconstruct the full history of returns each month when we update the portfolios.

Examples
--------

```python
from openbb import obb
# Fama-French 3-factors data for America, default is monthly.
obb.famafrench.factors()
# Fama-French 5-factors data for Europe.
obb.famafrench.factors(region='europe', factor='5_factors')
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

---

## Returns

**results**: `FamaFrenchFactors`

Serializable results.

**provider**: `Optional[Literal['famafrench']]`

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

