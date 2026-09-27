---
title: "OTC Aggregate"
description: "Get the weekly aggregate trade data for Over The Counter deals"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `OTCAggregate` | `OTCAggregateQueryParams` | `OTCAggregateData` |

### Import Statement

```python
from openbb_core.provider.standard_models.otc_aggregate import (
OTCAggregateData,
OTCAggregateQueryParams,
)
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

