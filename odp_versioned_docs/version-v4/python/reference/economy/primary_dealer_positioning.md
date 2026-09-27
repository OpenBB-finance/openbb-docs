---
title: "primary_dealer_positioning"
description: "Get Primary dealer positioning statistics"
keywords:
- economy
- primary_dealer_positioning
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="economy/primary_dealer_positioning - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get Primary dealer positioning statistics.

Examples
--------

```python
from openbb import obb
obb.economy.primary_dealer_positioning()
obb.economy.primary_dealer_positioning(category='abs')
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

**category**: `Literal['treasuries', 'bills', 'coupons', 'notes', 'tips', 'mbs', 'cmbs', 'municipal', 'corporate', 'commercial_paper', 'corporate_ig', 'corporate_junk', 'abs'] | None`<br/>
*Default:* treasuries<br/>
The category of asset to return, defaults to 'treasuries'.

</TabItem>
</Tabs>

---

## Returns

**results**: `PrimaryDealerPositioning`

Serializable results.

**provider**: `Optional[Literal['federal_reserve']]`

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

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

</TabItem>
<TabItem value='federal_reserve' label='federal_reserve'>

**date**: `date | str`<br/>
The date of the data.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**value**: `int`<br/>
The reported value of the net position (long - short), in millions of $USD.

**name**: `str`<br/>
Short name for the series.

**title**: `str`<br/>
Title of the series.

</TabItem>
</Tabs>

