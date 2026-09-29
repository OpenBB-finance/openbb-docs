---
title: "spot"
description: "Commodity Spot Prices"
keywords:
- commodity
- price
- spot
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="commodity/price/spot - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Commodity Spot Prices.

Examples
--------

```python
from openbb import obb
obb.commodity.price.spot()
obb.commodity.price.spot(commodity='wti')
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

**commodity**: `Literal['wti', 'brent', 'natural_gas', 'jet_fuel', 'propane', 'heating_oil', 'diesel_gulf_coast', 'diesel_ny_harbor', 'diesel_la', 'gasoline_ny_harbor', 'gasoline_gulf_coast', 'rbob', 'all'] | None`<br/>
*Default:* all<br/>
Commodity name associated with the EIA spot price commodity data, default is 'all'.

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
</Tabs>

---

## Returns

**results**: `CommoditySpotPrices`

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

**commodity**: `str | None`<br/>
Commodity name.

**price**: `float`<br/>
Price of the commodity.

**unit**: `str | None`<br/>
Unit of the commodity price.

</TabItem>
<TabItem value='fred' label='fred'>

**date**: `date | str`<br/>
The date of the data.

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**commodity**: `str | None`<br/>
Commodity name.

**price**: `float`<br/>
Price of the commodity.

**unit**: `str | None`<br/>
Unit of the commodity price.

</TabItem>
</Tabs>

