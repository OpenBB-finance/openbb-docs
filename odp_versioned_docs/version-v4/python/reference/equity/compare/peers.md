---
title: "peers"
description: "Learn how to compare and analyze equity peers with the `obb.equity.compare.peers`  function. This function allows you to retrieve a list of company peers based on  symbol, sector, exchange, and market cap. Understand the parameters, returns, and  data structure provided by this function."
keywords:
- equity peers
- company peers
- compare peers
- symbol
- provider
- parameter
- returns
- data
- list of peers
- sector
- exchange
- market cap
- serializable results
- chart object
- metadata
- command execution
- warnings
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/compare/peers - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get the closest peers for a given company.

Peers consist of companies trading on the same exchange, operating within the same sector
and with comparable market capitalizations.

Examples
--------

```python
from openbb import obb
obb.equity.compare.peers(symbol='AAPL')
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

---

## Returns

**results**: `EquityPeers`

Serializable results.

**provider**: `Optional[Literal['fmp']]`

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

