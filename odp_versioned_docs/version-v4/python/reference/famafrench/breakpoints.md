---
title: "breakpoints"
description: "Fama-French breakpoints"
keywords:
- famafrench
- breakpoints
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="famafrench/breakpoints - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Fama-French breakpoints.

Metadata for the selected dataset are returned in the
`extra['results_metadata']` field of the response.

Source
------

https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html#Breakpoints

Examples
--------

```python
from openbb import obb
# Get US breakpoints used for constructing the research portfolios.
obb.famafrench.breakpoints()
# See the parameters description for details on the breakpoints.
obb.famafrench.breakpoints(breakpoint='op', start_date='1998-01-01')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='famafrench' label='famafrench'>

**breakpoint_type**: `Literal['me', 'be-me', 'op', 'inv', 'e-p', 'cf-p', 'd-p', '2-12'] | None`<br/>
*Default:* me<br/>
<details>
<summary mdxType="summary">Description</summary>

Type of breakpoint to fetch.<br/>
<br/>
The breakpoints for month t use all NYSE stocks that have a CRSP share code of 10 or 11<br/>
and have good shares and price data. We exclude closed end funds and REITs.<br/>
<br/>
Breakpoints are computed either monthly or annually, see the description of each breakpoint type below.<br/>
<br/>
Data contains every fifth percentile, from 5% to 100%.<br/>
<br/>
ME<br/>
--<br/>
<br/>
Market Equity. Market equity (size) is price times shares outstanding.<br/>
Price and shares outstanding are from CRSP.<br/>
<br/>
ME breakpoints are computed for each month.<br/>
It is price times shares outstanding (divided by 1,000,000) at month end.<br/>
<br/>
BE/ME<br/>
-----<br/>
<br/>
BE/ME breakpoints are computed at the end of each June.<br/>
The BE used in June of year t is the book equity for the last fiscal year end in t-1.<br/>
ME is price times shares outstanding at the end of December of t-1.<br/>
<br/>
The breakpoints for year t use all NYSE stocks for which we have ME for December of t-1<br/>
and (positive) BE for the last fiscal year end in t-1.<br/>
<br/>
Operating Profitability<br/>
-----------------------<br/>
<br/>
Operating Profitability breakpoints are computed at the end of each June.<br/>
OP for June of year t is annual revenues minus<br/>
<br/>
- cost of goods sold<br/>
- interest expense<br/>
- selling, general, and administrative expenses<br/>
<br/>
divided by book equity for the last fiscal year end in t-1.<br/>
<br/>
Please be aware that some of the value-weight averages of operating profitability for deciles 1 and 10 are extreme.<br/>
These are driven by extraordinary values of OP for individual firms.<br/>
We have spot checked the accounting data that produce the extraordinary values<br/>
and all the numbers we examined accurately reflect the data in the firm's accounting statements.<br/>
<br/>
The breakpoints for year t use all NYSE stocks for which we have (positive) book equity data for t-1,<br/>
non-missing revenues data for t-1, and non-missing data for at least one of the following:<br/>
<br/>
- cost of goods sold<br/>
- selling, general and administrative expenses<br/>
- interest expense for t-1.<br/>
<br/>
Investment<br/>
----------<br/>
<br/>
Investment breakpoints are computed at the end of each June.<br/>
Inv used in June of year t is the change in total assets from the fiscal year ending in year t-2<br/>
to the fiscal year ending in t-1, divided by t-2 total assets.<br/>
<br/>
The breakpoints for year t use all NYSE stocks for which we have total assets data for t-2 and t-1.<br/>
<br/>
E/P<br/>
---<br/>
<br/>
E/P (in percent) breakpoints are computed at the end of each June.<br/>
The E used in June of year t is the earnings for the last fiscal year end in t-1.<br/>
P (actually ME) is price times shares outstanding at the end of December of t-1.<br/>
<br/>
The breakpoints for year t use all NYSE stocks for which we have ME for December of t-1<br/>
and (positive) earnings for the last fiscal year end in t-1.<br/>
<br/>
CF/P<br/>
----<br/>
<br/>
CF/P (in percent) breakpoints is computed at the end of each June.<br/>
The CF used in June of year t is the cash flow for the last fiscal year end in t-1.<br/>
P (actually ME) is price times shares outstanding at the end of December of t-1.<br/>
<br/>
The breakpoints for year t use all NYSE stocks for which we have ME for December of t-1<br/>
and (positive) cash flow for the last fiscal year end in t-1.<br/>
<br/>
D/P<br/>
---<br/>
<br/>
D/P (in percent) breakpoints are computed at the end of each June.<br/>
The dividend yield in June of year t is the total dividends paid from July of t-1<br/>
to June of t per dollar of equity in June of t.<br/>
<br/>
The breakpoints for year t use NYSE stocks for which we have at least<br/>
seven months (to compute the dividend yield) from July of t-1 to June of t.<br/>
(Only six monthly returns are required in June 1926.)<br/>
We do not include stocks that pay no dividends from July of t-1 to June of t.<br/>
<br/>
Prior 2-12<br/>
----------<br/>
<br/>
Prior return breakpoints are computed for each month.<br/>
The prior return at the end of month t is the cumulative return from month t-11 to month t-1.<br/>
<br/>
The breakpoints for month t use NYSE stocks.<br/>
To be included, a stock must have a price for the end of month t-12 and a good return for t-1.<br/>
In addition, any missing returns from t-11 to t-2 must be -99.0, CRSP's code for a missing price.<br/>
</details>

**start_date**: `date | None | str`<br/>
Start date for the data.

**end_date**: `date | None | str`<br/>
End date for the data.

</TabItem>
</Tabs>

---

## Returns

**results**: `FamaFrenchBreakpoints`

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
Date of the data.

**num_firms**: `int | None`<br/>
Number of firms in the sample. Not returned for BE/ME breakpoints.

**num_firms_less_than_0**: `int | None`<br/>
Number of firms with ratio less than or equal to 0. This is only applicable for ratio breakpoints.

**num_firms_greater_than_0**: `int | None`<br/>
Number of firms with ratio greater than 0. This is only applicable for ratio breakpoints.

**percentile_5**: `float`<br/>
Fifth percentile of the sample.

**percentile_10**: `float`<br/>
Tenth percentile of the sample.

**percentile_15**: `float`<br/>
Fifteenth percentile of the sample.

**percentile_20**: `float`<br/>
Twentieth percentile of the sample.

**percentile_25**: `float`<br/>
Twenty-fifth percentile of the sample.

**percentile_30**: `float`<br/>
Thirtieth percentile of the sample.

**percentile_35**: `float`<br/>
Thirty-fifth percentile of the sample.

**percentile_40**: `float`<br/>
Fortieth percentile of the sample.

**percentile_45**: `float`<br/>
Forty-fifth percentile of the sample.

**percentile_50**: `float`<br/>
Fiftieth percentile of the sample.

**percentile_55**: `float`<br/>
Fifty-fifth percentile of the sample.

**percentile_60**: `float`<br/>
Sixtieth percentile of the sample.

**percentile_65**: `float`<br/>
Sixty-fifth percentile of the sample.

**percentile_70**: `float`<br/>
Seventieth percentile of the sample.

**percentile_75**: `float`<br/>
Seventy-fifth percentile of the sample.

**percentile_80**: `float`<br/>
Eightieth percentile of the sample.

**percentile_85**: `float`<br/>
Eighty-fifth percentile of the sample.

**percentile_90**: `float`<br/>
Ninetieth percentile of the sample.

**percentile_95**: `float`<br/>
Ninety-fifth percentile of the sample.

**percentile_100**: `float`<br/>
Hundredth percentile of the sample.

</TabItem>
</Tabs>

