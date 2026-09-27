---
title: "Federal Funds Rate"
description: "Fed Funds Rate"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `FederalFundsRate` | `FederalFundsRateQueryParams` | `FederalFundsRateData` |

### Import Statement

```python
from openbb_core.provider.standard_models.federal_funds_rate import (
FederalFundsRateData,
FederalFundsRateQueryParams,
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
<TabItem value='fred' label='fred'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**frequency**: `Literal['a', 'q', 'm', 'w', 'wef', 'weth', 'wew', 'wetu', 'wem', 'wesu', 'wesa', 'bwew', 'bwem'] | None`<br/>
<details>
<summary mdxType="summary">Description</summary>

Frequency aggregation to convert daily data to lower frequency.<br/>
            a = Annual<br/>
            q = Quarterly<br/>
            m = Monthly<br/>
            w = Weekly<br/>
            wef = Weekly, Ending Friday<br/>
            weth = Weekly, Ending Thursday<br/>
            wew = Weekly, Ending Wednesday<br/>
            wetu = Weekly, Ending Tuesday<br/>
            wem = Weekly, Ending Monday<br/>
            wesu = Weekly, Ending Sunday<br/>
            wesa = Weekly, Ending Saturday<br/>
            bwew = Biweekly, Ending Wednesday<br/>
            bwem = Biweekly, Ending Monday<br/>
</details>

**aggregation_method**: `Literal['avg', 'sum', 'eop'] | None`<br/>
<details>
<summary mdxType="summary">Description</summary>

A key that indicates the aggregation method used for frequency aggregation.<br/>
            avg = Average<br/>
            sum = Sum<br/>
            eop = End of Period<br/>
</details>

**transform**: `Literal['chg', 'ch1', 'pch', 'pc1', 'pca', 'cch', 'cca', 'log'] | None`<br/>
<details>
<summary mdxType="summary">Description</summary>

Transformation type<br/>
            None = No transformation<br/>
            chg = Change<br/>
            ch1 = Change from Year Ago<br/>
            pch = Percent Change<br/>
            pc1 = Percent Change from Year Ago<br/>
            pca = Compounded Annual Rate of Change<br/>
            cch = Continuously Compounded Rate of Change<br/>
            cca = Continuously Compounded Annual Rate of Change<br/>
            log = Natural Log<br/>
</details>

**effr_only**: `bool | None`<br/>
*Default:* False<br/>
Return data without quantiles, target ranges, and volume.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | str`<br/>
The date of the data.

**rate**: `float`<br/>
Effective federal funds rate.

**target_range_upper**: `float | None`<br/>
Upper bound of the target range.

**target_range_lower**: `float | None`<br/>
Lower bound of the target range.

**percentile_1**: `float | None`<br/>
1st percentile of the distribution.

**percentile_25**: `float | None`<br/>
25th percentile of the distribution.

**percentile_75**: `float | None`<br/>
75th percentile of the distribution.

**percentile_99**: `float | None`<br/>
99th percentile of the distribution.

**volume**: `float | None`<br/>
The trading volume.The notional volume of transactions (Billions of $).

</TabItem>
<TabItem value='federal_reserve' label='federal_reserve'>

**date**: `date | str`<br/>
The date of the data.

**rate**: `float`<br/>
Effective federal funds rate.

**target_range_upper**: `float | None`<br/>
Upper bound of the target range.

**target_range_lower**: `float | None`<br/>
Lower bound of the target range.

**percentile_1**: `float | None`<br/>
1st percentile of the distribution.

**percentile_25**: `float | None`<br/>
25th percentile of the distribution.

**percentile_75**: `float | None`<br/>
75th percentile of the distribution.

**percentile_99**: `float | None`<br/>
99th percentile of the distribution.

**volume**: `float | None`<br/>
The trading volume.The notional volume of transactions (Billions of $).

**intraday_low**: `float | None`<br/>
Intraday low. This field is only present for data before 2016.

**intraday_high**: `float | None`<br/>
Intraday high. This field is only present for data before 2016.

**standard_deviation**: `float | None`<br/>
Standard deviation. This field is only present for data before 2016.

**revision_indicator**: `str | None`<br/>
Indicates a revision of the data for that date.

</TabItem>
<TabItem value='fred' label='fred'>

**date**: `date | str`<br/>
The date of the data.

**rate**: `float`<br/>
Effective federal funds rate.

**target_range_upper**: `float | None`<br/>
Upper bound of the target range.

**target_range_lower**: `float | None`<br/>
Lower bound of the target range.

**percentile_1**: `float | None`<br/>
1st percentile of the distribution.

**percentile_25**: `float | None`<br/>
25th percentile of the distribution.

**percentile_75**: `float | None`<br/>
75th percentile of the distribution.

**percentile_99**: `float | None`<br/>
99th percentile of the distribution.

**volume**: `float | None`<br/>
The trading volume.The notional volume of transactions (Billions of $).

</TabItem>
</Tabs>

