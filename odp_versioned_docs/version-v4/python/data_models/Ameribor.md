---
title: "Ameribor"
description: "AMERIBOR"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `Ameribor` | `AmeriborQueryParams` | `AmeriborData` |

### Import Statement

```python
from openbb_core.provider.standard_models.ameribor import (
AmeriborData,
AmeriborQueryParams,
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

**maturity**: `Literal['all', 'overnight', 'average_30d', 'average_90d', 'term_30d', 'term_90d'] | None`<br/>
*Default:* all<br/>
Period of AMERIBOR rate.

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

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**maturity**: `str`<br/>
Maturity length of the item.

**rate**: `float`<br/>
Interest rate.

**title**: `str | None`<br/>
Title of the series.

</TabItem>
<TabItem value='fred' label='fred'>

**date**: `date | str`<br/>
The date of the data.

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**maturity**: `str`<br/>
Maturity length of the item.

**rate**: `float`<br/>
Interest rate.

**title**: `str | None`<br/>
Title of the series.

</TabItem>
</Tabs>

