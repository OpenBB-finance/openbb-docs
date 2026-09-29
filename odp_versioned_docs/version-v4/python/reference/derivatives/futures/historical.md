---
title: "historical"
description: "Futures Historical Price"
keywords:
- derivatives
- futures
- historical
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="derivatives/futures/historical - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Historical futures prices.

Examples
--------

```python
from openbb import obb
obb.derivatives.futures.historical(symbol='ES')
# Enter multiple symbols.
obb.derivatives.futures.historical(symbol='ES,NQ')
# Enter expiration dates as "YYYY-MM".
obb.derivatives.futures.historical(symbol='ES', expiration='2025-12')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): deribit, yfinance.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**expiration**: `str | None`<br/>
Future expiry date with format YYYY-MM

</TabItem>
<TabItem value='deribit' label='deribit'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): deribit, yfinance.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**expiration**: `str | None`<br/>
Future expiry date with format YYYY-MM

**interval**: `Literal['1m', '3m', '5m', '10m', '15m', '30m', '1h', '2h', '3h', '6h', '12h', '1d'] | None`<br/>
*Default:* 1d<br/>
Time interval of the data to return.

</TabItem>
<TabItem value='yfinance' label='yfinance'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): deribit, yfinance.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**expiration**: `str | None`<br/>
Future expiry date with format YYYY-MM

**interval**: `Literal['1m', '2m', '5m', '15m', '30m', '60m', '90m', '1h', '1d', '5d', '1W', '1M', '1Q'] | None`<br/>
*Default:* 1d<br/>
Time interval of the data to return.

</TabItem>
</Tabs>

---

## Returns

**results**: `FuturesHistorical`

Serializable results.

**provider**: `Optional[Literal['deribit', 'yfinance']]`

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

**date**: `datetime | date | str`<br/>
The date of the data.

**open**: `float | None`<br/>
The open price.

**high**: `float | None`<br/>
The high price.

**low**: `float | None`<br/>
The low price.

**close**: `float`<br/>
The close price.

**volume**: `float | None`<br/>
The trading volume.

</TabItem>
<TabItem value='deribit' label='deribit'>

**date**: `datetime | date | str`<br/>
The date of the data.

**open**: `float | None`<br/>
The open price.

**high**: `float | None`<br/>
The high price.

**low**: `float | None`<br/>
The low price.

**close**: `float`<br/>
The close price.

**volume**: `float | None`<br/>
The trading volume.

**volume_notional**: `float`<br/>
Trading volume in quote currency.

</TabItem>
<TabItem value='yfinance' label='yfinance'>

**date**: `datetime | date | str`<br/>
The date of the data.

**open**: `float | None`<br/>
The open price.

**high**: `float | None`<br/>
The high price.

**low**: `float | None`<br/>
The low price.

**close**: `float`<br/>
The close price.

**volume**: `float | None`<br/>
The trading volume.

</TabItem>
</Tabs>

