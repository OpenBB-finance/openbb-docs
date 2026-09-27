---
title: "Futures Info"
description: "Get current trading statistics by futures contract symbol"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `FuturesInfo` | `FuturesInfoQueryParams` | `FuturesInfoData` |

### Import Statement

```python
from openbb_core.provider.standard_models.futures_info import (
FuturesInfoData,
FuturesInfoQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='deribit' label='deribit'>

**symbol**: `str`<br/>
Symbol to get data for. Perpetual contracts can be referenced by their currency pair - i.e, SOLUSDC - or by their official Deribit symbol - i.e, SOL_USDC-PERPETUAL For a list of currently available instruments, use `derivatives.futures.instruments()`

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

</TabItem>
<TabItem value='deribit' label='deribit'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**state**: `Literal['open', 'closed']`<br/>
The state of the order book. Possible values are open and closed.

**open_interest**: `float`<br/>
The total amount of outstanding contracts in the corresponding amount units.

**index_price**: `float`<br/>
Current index (reference) price

**best_ask_amount**: `float | None`<br/>
It represents the requested order size of all best asks

**best_ask_price**: `float | None`<br/>
The current best ask price, null if there aren't any asks

**best_bid_price**: `float | None`<br/>
The current best bid price, null if there aren't any bids

**best_bid_amount**: `float | None`<br/>
It represents the requested order size of all best bids

**last_price**: `float | None`<br/>
The price for the last trade

**high**: `float | None`<br/>
Highest price during 24h

**low**: `float | None`<br/>
Lowest price during 24h

**change_percent**: `float | None`<br/>
24-hour price change expressed as a percentage, null if there weren't any trades

**volume**: `float | None`<br/>
Volume during last 24h in base currency

**volume_usd**: `float | None`<br/>
Volume in USD

**mark_price**: `float`<br/>
The mark price for the instrument

**settlement_price**: `float | None`<br/>
The settlement price for the instrument. Only when state = open

**delivery_price**: `float | None`<br/>
The settlement price for the instrument. Only when state = closed.

**estimated_delivery_price**: `float`<br/>
Estimated delivery price for the market.

**current_funding**: `float | None`<br/>
Current funding (perpetual only)

**funding_8h**: `float | None`<br/>
Funding 8h (perpetual only)

**interest_value**: `float | None`<br/>
Value used to calculate realized_funding in positions (perpetual only)

**max_price**: `float`<br/>
The maximum price for the future. Any buy orders submitted higher than this price, will be clamped to this maximum.

**min_price**: `float`<br/>
The minimum price for the future. Any sell orders submitted lower than this price will be clamped to this minimum.

**timestamp**: `datetime`<br/>
The timestamp of the data.

</TabItem>
</Tabs>

