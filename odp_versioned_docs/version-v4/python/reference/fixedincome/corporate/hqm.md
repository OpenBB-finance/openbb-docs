---
title: "hqm"
description: "Learn about the HQM yield curve and the high quality corporate bond market.  Get information on AAA, AA, and A bonds, market-weighted average quality, corporate  bond rates, maturity, yield curve type, provider, and data."
keywords:
- HQM yield curve
- high quality corporate bond market
- AAA bonds
- AA bonds
- A bonds
- market-weighted average quality
- corporate bond rates
- maturity
- yield curve type
- provider
- fred
- data
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="fixedincome/corporate/hqm - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

High Quality Market Corporate Bond.

The HQM yield curve represents the high quality corporate bond market, i.e.,
corporate bonds rated AAA, AA, or A.  The HQM curve contains two regression terms.
These terms are adjustment factors that blend AAA, AA, and A bonds into a single HQM yield curve
that is the market-weighted average (MWA) quality of high quality bonds.

Examples
--------

```python
from openbb import obb
obb.fixedincome.corporate.hqm()
obb.fixedincome.corporate.hqm(yield_curve='par')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | str | None | list[date | str | None]`<br/>
A specific date to get data for. Multiple items allowed for provider(s): fred.

</TabItem>
<TabItem value='fred' label='fred'>

**date**: `date | str | None | list[date | str | None]`<br/>
A specific date to get data for. Multiple items allowed for provider(s): fred.

**yield_curve**: `Literal['spot', 'par'] | None`<br/>
*Default:* spot<br/>
The yield curve type.

</TabItem>
</Tabs>

---

## Returns

**results**: `HighQualityMarketCorporateBond`

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
Interest rate.

**maturity**: `str`<br/>
Maturity.

</TabItem>
<TabItem value='fred' label='fred'>

**date**: `date | str`<br/>
The date of the data.

**rate**: `float`<br/>
Interest rate.

**maturity**: `str`<br/>
Maturity.

</TabItem>
</Tabs>

