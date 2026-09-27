---
title: "bond_indices"
description: "Bond Indices"
keywords:
- fixedincome
- bond_indices
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="fixedincome/bond_indices - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Bond Indices.

Examples
--------

```python
from openbb import obb
# The default state for FRED are series for constructing the US Corporate Bond Yield Curve.
obb.fixedincome.bond_indices()
# Multiple indices, from within the same 'category', can be requested.
obb.fixedincome.bond_indices(category='high_yield', index='us,europe,emerging', index_type='total_return')
# From FRED, there are three main categories, 'high_yield', 'us', and 'emerging_markets'. Emerging markets is a broad category.
obb.fixedincome.bond_indices(category='emerging_markets', index='corporate,private_sector,public_sector')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**index_type**: `Literal['yield', 'yield_to_worst', 'total_return', 'oas'] | None`<br/>
*Default:* yield<br/>
The type of series. OAS is the option-adjusted spread. Default is yield.

</TabItem>
<TabItem value='fred' label='fred'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**index_type**: `Literal['yield', 'yield_to_worst', 'total_return', 'oas'] | None`<br/>
*Default:* yield<br/>
The type of series. OAS is the option-adjusted spread. Default is yield.

**category**: `Literal['high_yield', 'us', 'emerging_markets'] | None`<br/>
*Default:* us<br/>
The type of index category. Used in conjunction with 'index', default is 'us'.

**index**: `str | None`<br/>
*Default:* yield_curve<br/>
<details>
<summary mdxType="summary">Description</summary>

The specific index to query. Used in conjunction with 'category' and 'index_type', default is 'yield_curve'.<br/>
        Possible values are:<br/>
            corporate<br/>
            seasoned_corporate<br/>
            liquid_corporate<br/>
            yield_curve<br/>
            crossover<br/>
            public_sector<br/>
            private_sector<br/>
            non_financial<br/>
            high_grade<br/>
            high_yield<br/>
            liquid_emea<br/>
            emea<br/>
            liquid_asia<br/>
            asia<br/>
            liquid_latam<br/>
            latam<br/>
            liquid_aaa<br/>
            liquid_bbb<br/>
            aaa<br/>
            aa<br/>
            a<br/>
            bbb<br/>
            bb<br/>
            b<br/>
            ccc<br/>
</details>

**frequency**: `Literal['a', 'q', 'm', 'w', 'd', 'wef', 'weth', 'wew', 'wetu', 'wem', 'wesu', 'wesa', 'bwew', 'bwem'] | None`<br/>
<details>
<summary mdxType="summary">Description</summary>

Frequency aggregation to convert daily data to lower frequency.<br/>
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
*Default:* avg<br/>
<details>
<summary mdxType="summary">Description</summary>

A key that indicates the aggregation method used for frequency aggregation.<br/>
        This parameter has no affect if the frequency parameter is not set, default is 'avg'.<br/>
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

---

## Returns

**results**: `BondIndices`

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

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**value**: `float`<br/>
Index values.

</TabItem>
<TabItem value='fred' label='fred'>

**date**: `date | str`<br/>
The date of the data.

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**value**: `float`<br/>
Index values.

**maturity**: `str | None`<br/>
The maturity range of the bond index. Only applicable when 'index' is 'yield_curve'.

**title**: `str`<br/>
The title of the index.

</TabItem>
</Tabs>

