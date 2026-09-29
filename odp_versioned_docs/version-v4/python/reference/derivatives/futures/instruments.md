---
title: "instruments"
description: "Get reference data for available futures instruments by provider"
keywords:
- derivatives
- futures
- instruments
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="derivatives/futures/instruments - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get reference data for available futures instruments by provider.

Examples
--------

```python
from openbb import obb
obb.derivatives.futures.instruments()
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='deribit' label='deribit'>

</TabItem>
</Tabs>

---

## Returns

**results**: `FuturesInstruments`

Serializable results.

**provider**: `Optional[Literal['deribit']]`

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

</TabItem>
<TabItem value='deribit' label='deribit'>

**instrument_id**: `int`<br/>
Deribit Instrument ID

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**base_currency**: `str`<br/>
The underlying currency being traded.

**counter_currency**: `str`<br/>
Counter currency for the instrument.

**quote_currency**: `str`<br/>
The currency in which the instrument prices are quoted.

**settlement_currency**: `str | None`<br/>
Settlement currency for the instrument.

**future_type**: `str`<br/>
Type of the instrument. linear or reversed

**settlement_period**: `str | None`<br/>
The settlement period.

**price_index**: `str`<br/>
Name of price index that is used for this instrument

**contract_size**: `float`<br/>
Contract size for instrument.

**is_active**: `bool`<br/>
Indicates if the instrument can currently be traded.

**creation_timestamp**: `datetime`<br/>
The time when the instrument was first created (milliseconds since the UNIX epoch).

**expiration_timestamp**: `datetime | None`<br/>
The time when the instrument will expire (milliseconds since the UNIX epoch).

**tick_size**: `float`<br/>
Specifies minimal price change and, as follows, the number of decimal places for instrument prices.

**min_trade_amount**: `float`<br/>
Minimum amount for trading, in USD units.

**max_leverage**: `int`<br/>
Maximal leverage for instrument.

**max_liquidation_commission**: `float`<br/>
Maximal liquidation trade commission for instrument.

**block_trade_commission**: `float`<br/>
Block Trade commission for instrument.

**block_trade_min_trade_amount**: `float`<br/>
Minimum amount for block trading.

**block_trade_tick_size**: `float`<br/>
Specifies minimal price change for block trading.

**maker_commission**: `float | None`<br/>
Maker commission for instrument.

**taker_commission**: `float | None`<br/>
Taker commission for instrument.

</TabItem>
</Tabs>

