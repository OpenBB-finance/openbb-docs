---
title: "tcm"
description: "Treasury Constant Maturity"
keywords:
- fixedincome
- spreads
- tcm
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="fixedincome/spreads/tcm - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Treasury Constant Maturity.

Get data for 10-Year Treasury Constant Maturity Minus Selected Treasury Constant Maturity.
Constant maturity is the theoretical value of a U.S. Treasury that is based on recent values of auctioned U.S.
Treasuries. The value is obtained by the U.S. Treasury on a daily basis through interpolation of the Treasury
yield curve which, in turn, is based on closing bid-yields of actively-traded Treasury securities.

Examples
--------

```python
from openbb import obb
obb.fixedincome.spreads.tcm()
obb.fixedincome.spreads.tcm(maturity='2y')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**maturity**: `Literal['3m', '2y'] | None`<br/>
*Default:* 3m<br/>
The maturity

</TabItem>
<TabItem value='fred' label='fred'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**maturity**: `Literal['3m', '2y'] | None`<br/>
*Default:* 3m<br/>
The maturity

</TabItem>
</Tabs>

---

## Returns

**results**: `TreasuryConstantMaturity`

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

**rate**: `float | None`<br/>
TreasuryConstantMaturity Rate.

</TabItem>
<TabItem value='fred' label='fred'>

**date**: `date | str`<br/>
The date of the data.

**rate**: `float | None`<br/>
TreasuryConstantMaturity Rate.

</TabItem>
</Tabs>

