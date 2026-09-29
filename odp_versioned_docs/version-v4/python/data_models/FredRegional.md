---
title: "Fred Regional"
description: "Query the Geo Fred API for regional economic data by series group"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `FredRegional` | `FredRegionalQueryParams` | `FredRegionalData` |

### Import Statement

```python
from openbb_core.provider.standard_models. import (
FredRegionalData,
FredRegionalQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol to get data for.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**limit**: `int | None`<br/>
*Default:* 100000<br/>
The number of data entries to return.

</TabItem>
<TabItem value='fred' label='fred'>

**symbol**: `str`<br/>
For this function, it is the series_group ID or series ID. If the symbol provided is for a series_group, set the `is_series_group` parameter to True. Not all series that are in FRED have geographical data.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**limit**: `int | None`<br/>
*Default:* 100000<br/>
The number of data entries to return.

**is_series_group**: `bool | None`<br/>
*Default:* False<br/>
When True, the symbol provided is for a series_group, else it is for a series ID.

**region_type**: `Literal['bea', 'msa', 'frb', 'necta', 'state', 'country', 'county', 'censusregion'] | None`<br/>
The type of regional data. Parameter is only valid when `is_series_group` is True.

**season**: `Literal['sa', 'nsa', 'ssa'] | None`<br/>
*Default:* nsa<br/>
The seasonal adjustments to the data. Parameter is only valid when `is_series_group` is True.

**units**: `str | None`<br/>
The units of the data. This should match the units returned from searching by series ID. An incorrect field will not necessarily return an error. Parameter is only valid when `is_series_group` is True.

**frequency**: `Literal['a', 'q', 'm', 'w', 'd', 'wef', 'weth', 'wew', 'wetu', 'wem', 'wesu', 'wesa', 'bwew', 'bwem'] | None`<br/>
<details>
<summary mdxType="summary">Description</summary>

Frequency aggregation to convert high frequency data to lower frequency.<br/>
        <br/>
    None = No change<br/>
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
*Default:* eop<br/>
<details>
<summary mdxType="summary">Description</summary>

A key that indicates the aggregation method used for frequency aggregation.<br/>
        This parameter has no affect if the frequency parameter is not set.<br/>
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

</TabItem>
<TabItem value='fred' label='fred'>

**date**: `date | str`<br/>
The date of the data.

**region**: `str`<br/>
The name of the region.

**code**: `str | int`<br/>
The code of the region.

**value**: `int | float | None`<br/>
The observation value. The units are defined in the search results by series ID.

**series_id**: `str`<br/>
The individual series ID for the region.

</TabItem>
</Tabs>

