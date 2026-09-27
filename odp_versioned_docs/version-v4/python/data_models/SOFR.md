---
title: "SOFR"
description: "Secured Overnight Financing Rate"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `SOFR` | `SOFRQueryParams` | `SOFRData` |

### Import Statement

```python
from openbb_core.provider.standard_models.sofr import (
SOFRData,
SOFRQueryParams,
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

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | str`<br/>
The date of the data.

**rate**: `float`<br/>
Effective federal funds rate.

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
<TabItem value='fred' label='fred'>

**date**: `date | str`<br/>
The date of the data.

**rate**: `float`<br/>
Effective federal funds rate.

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

**average_30d**: `float | None`<br/>
30-Day Average SOFR

**average_90d**: `float | None`<br/>
90-Day Average SOFR

**average_180d**: `float | None`<br/>
180-Day Average SOFR

**index**: `float | None`<br/>
SOFR index as 2018-04-02 = 1

</TabItem>
</Tabs>

