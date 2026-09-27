---
title: "Equity Peers"
description: "Get the closest peers for a given company"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `EquityPeers` | `EquityPeersQueryParams` | `EquityPeersData` |

### Import Statement

```python
from openbb_core.provider.standard_models.equity_peers import (
EquityPeersData,
EquityPeersQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol to get data for.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str`<br/>
Symbol to get data for.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str`<br/>
The name of the company.

**price**: `float | None`<br/>
The current stock price of the company.

**market_cap**: `int | None`<br/>
The market capitalization of the company.

</TabItem>
</Tabs>

