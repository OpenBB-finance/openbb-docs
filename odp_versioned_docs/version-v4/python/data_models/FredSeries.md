---
title: "Fred Series"
description: "Get data by series ID from FRED"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `FredSeries` | `FredSeriesQueryParams` | `FredSeriesData` |

### Import Statement

```python
from openbb_core.provider.standard_models. import (
FredSeriesData,
FredSeriesQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fred.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**limit**: `int | None`<br/>
*Default:* 100000<br/>
The number of data entries to return.

</TabItem>
<TabItem value='fred' label='fred'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fred.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**limit**: `int | None`<br/>
*Default:* 100000<br/>
The number of data entries to return.

**frequency**: `Literal['a', 'q', 'm', 'w', 'd', 'wef', 'weth', 'wew', 'wetu', 'wem', 'wesu', 'wesa', 'bwew', 'bwem'] | None`<br/>
<details>
<summary mdxType="summary">Description</summary>

Frequency aggregation to convert high frequency data to lower frequency.<br/>
    None = No change<br/>
    a = Annual<br/>
    q = Quarterly<br/>
    m = Monthly<br/>
    w = Weekly<br/>
    d = Daily<br/>
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
*Default:* eop<br/>
<details>
<summary mdxType="summary">Description</summary>

A key that indicates the aggregation method used for frequency aggregation.<br/>
        This parameter has no affect if the frequency parameter is not set.<br/>
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
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fred.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**limit**: `int | None`<br/>
*Default:* 100000<br/>
The number of data entries to return.

**all_pages**: `bool | None`<br/>
*Default:* False<br/>
Returns all pages of data from the API call at once.

**sleep**: `float | None`<br/>
*Default:* 1.0<br/>
Time to sleep between requests to avoid rate limiting.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | str`<br/>
The date of the data.

</TabItem>
<TabItem value='fred' label='fred'>

**date**: `date | str`<br/>
The date of the data.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**date**: `date | str`<br/>
The date of the data.

**value**: `float | None`<br/>
Value of the index.

</TabItem>
</Tabs>

