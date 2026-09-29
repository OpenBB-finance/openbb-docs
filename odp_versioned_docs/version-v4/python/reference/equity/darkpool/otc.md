---
title: "otc"
description: "Get weekly aggregate trade data for Over The Counter deals, including  ATS trading data and non-ATS trading data. The data is provided for each ATS/firm  with trade reporting obligations under FINRA rules."
keywords:
- Over The Counter deals
- ATS trading data
- FINRA rules
- symbol
- provider
- tier
- is_ats
- OBBject
- results
- OTCAggregate
- warnings
- Chart
- Metadata
- data
- update_date
- share_quantity
- trade_quantity
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/darkpool/otc - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get the weekly aggregate trade data for Over The Counter deals.

ATS and non-ATS trading data for each ATS/firm
with trade reporting obligations under FINRA rules.

Examples
--------

```python
from openbb import obb
obb.equity.darkpool.otc()
# Get OTC data for a symbol
obb.equity.darkpool.otc(symbol='AAPL')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | None`<br/>
Symbol to get data for.

</TabItem>
<TabItem value='finra' label='finra'>

**symbol**: `str | None`<br/>
Symbol to get data for.

**tier**: `Literal['T1', 'T2', 'OTCE'] | None`<br/>
*Default:* T1<br/>
<details>
<summary mdxType="summary">Description</summary>

'T1 - Securities included in the S&P 500, Russell 1000 and selected exchange-traded products;<br/>
        T2 - All other NMS stocks; OTC - Over-the-Counter equity securities<br/>
</details>

**is_ats**: `bool | None`<br/>
*Default:* True<br/>
ATS data if true, NON-ATS otherwise

</TabItem>
</Tabs>

---

## Returns

**results**: `OTCAggregate`

Serializable results.

**provider**: `Optional[Literal['finra']]`

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

**update_date**: `date`<br/>
Most recent date on which total trades is updated based on data received from each ATS/OTC.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**share_quantity**: `float`<br/>
Aggregate weekly total number of shares reported by each ATS for the Symbol.

**trade_quantity**: `float`<br/>
Aggregate weekly total number of trades reported by each ATS for the Symbol

</TabItem>
<TabItem value='finra' label='finra'>

**update_date**: `date`<br/>
Most recent date on which total trades is updated based on data received from each ATS/OTC.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**share_quantity**: `float`<br/>
Aggregate weekly total number of shares reported by each ATS for the Symbol.

**trade_quantity**: `float`<br/>
Aggregate weekly total number of trades reported by each ATS for the Symbol

</TabItem>
</Tabs>

