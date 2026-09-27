---
title: "estr"
description: "Euro Short-Term Rate"
keywords:
- fixedincome
- rate
- estr
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="fixedincome/rate/estr - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Euro Short-Term Rate.

The euro short-term rate (€STR) reflects the wholesale euro unsecured overnight borrowing costs of banks located in
the euro area. The €STR is published on each TARGET2 business day based on transactions conducted and settled on
the previous TARGET2 business day (the reporting date “T”) with a maturity date of T+1 which are deemed to have been
executed at arm's length and thus reflect market rates in an unbiased way.

Examples
--------

```python
from openbb import obb
obb.fixedincome.rate.estr()
obb.fixedincome.rate.estr(transform='ch1')
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

---

## Returns

**results**: `EuroShortTermRate`

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

