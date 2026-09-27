---
title: "Euro Short Term Rate"
description: "Euro Short-Term Rate"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `EuroShortTermRate` | `EuroShortTermRateQueryParams` | `EuroShortTermRateData` |

### Import Statement

```python
from openbb_core.provider.standard_models.euro_short_term_rate import (
EuroShortTermRateData,
EuroShortTermRateQueryParams,
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
<TabItem value='fred' label='fred'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**frequency**: `Literal['a', 'q', 'm', 'w', 'wef', 'weth', 'wew', 'wetu', 'wem', 'wesu', 'wesa', 'bwew', 'bwem'] | None`<br/>
<details>
<summary mdxType="summary">Description</summary>

Frequency aggregation to convert daily data to lower frequency.<br/>
        <br/>
    a = Annual<br/>
        <br/>
    q = Quarterly<br/>
        <br/>
    m = Monthly<br/>
        <br/>
    w = Weekly<br/>
        <br/>
    d = Daily<br/>
        <br/>
    wef = Weekly, Ending Friday<br/>
        <br/>
    weth = Weekly, Ending Thursday<br/>
        <br/>
    wew = Weekly, Ending Wednesday<br/>
        <br/>
    wetu = Weekly, Ending Tuesday<br/>
        <br/>
    wem = Weekly, Ending Monday<br/>
        <br/>
    wesu = Weekly, Ending Sunday<br/>
        <br/>
    wesa = Weekly, Ending Saturday<br/>
        <br/>
    bwew = Biweekly, Ending Wednesday<br/>
        <br/>
    bwem = Biweekly, Ending Monday<br/>
</details>

**aggregation_method**: `Literal['avg', 'sum', 'eop'] | None`<br/>
<details>
<summary mdxType="summary">Description</summary>

A key that indicates the aggregation method used for frequency aggregation.<br/>
        <br/>
    avg = Average<br/>
        <br/>
    sum = Sum<br/>
        <br/>
    eop = End of Period<br/>
</details>

**transform**: `Literal['chg', 'ch1', 'pch', 'pc1', 'pca', 'cch', 'cca', 'log'] | None`<br/>
<details>
<summary mdxType="summary">Description</summary>

Transformation type<br/>
        <br/>
    None = No transformation<br/>
        <br/>
    chg = Change<br/>
        <br/>
    ch1 = Change from Year Ago<br/>
        <br/>
    pch = Percent Change<br/>
        <br/>
    pc1 = Percent Change from Year Ago<br/>
        <br/>
    pca = Compounded Annual Rate of Change<br/>
        <br/>
    cch = Continuously Compounded Rate of Change<br/>
        <br/>
    cca = Continuously Compounded Annual Rate of Change<br/>
        <br/>
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
Volume-weighted trimmed mean rate.

**percentile_25**: `float | None`<br/>
Rate at 25th percentile of volume.

**percentile_75**: `float | None`<br/>
Rate at 75th percentile of volume.

**volume**: `float | None`<br/>
The trading volume. (Millions of €EUR).

**transactions**: `int | None`<br/>
Number of transactions.

**number_of_banks**: `int | None`<br/>
Number of active banks.

**large_bank_share_of_volume**: `float | None`<br/>
The percent of volume attributable to the 5 largest active banks.

</TabItem>
<TabItem value='fred' label='fred'>

**date**: `date | str`<br/>
The date of the data.

**rate**: `float`<br/>
Volume-weighted trimmed mean rate.

**percentile_25**: `float | None`<br/>
Rate at 25th percentile of volume.

**percentile_75**: `float | None`<br/>
Rate at 75th percentile of volume.

**volume**: `float | None`<br/>
The trading volume. (Millions of €EUR).

**transactions**: `int | None`<br/>
Number of transactions.

**number_of_banks**: `int | None`<br/>
Number of active banks.

**large_bank_share_of_volume**: `float | None`<br/>
The percent of volume attributable to the 5 largest active banks.

</TabItem>
</Tabs>

