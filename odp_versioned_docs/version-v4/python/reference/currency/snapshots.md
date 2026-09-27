---
title: "snapshots"
description: "Snapshots of currency exchange rates from an indirect or direct perspective of a base currency"
keywords:
- currency
- snapshots
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="currency/snapshots - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Snapshots of currency exchange rates from an indirect or direct perspective of a base currency.

Examples
--------

```python
from openbb import obb
obb.currency.snapshots()
# Get exchange rates from USD and XAU to EUR, JPY, and GBP using 'fmp' as provider.
obb.currency.snapshots(base='USD,XAU', counter_currencies='EUR,JPY,GBP', quote_type='indirect')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**base**: `str | None | list[str | None]`<br/>
*Default:* usd<br/>
The base currency symbol. Multiple items allowed for provider(s): fmp.

**quote_type**: `Literal['direct', 'indirect'] | None`<br/>
*Default:* indirect<br/>
Whether the quote is direct or indirect. Selecting 'direct' will return the exchange rate as the amount of domestic currency required to buy one unit of the foreign currency. Selecting 'indirect' (default) will return the exchange rate as the amount of foreign currency required to buy one unit of the domestic currency.

**counter_currencies**: `str | list[str] | None`<br/>
An optional list of counter currency symbols to filter for. None returns all.

</TabItem>
<TabItem value='fmp' label='fmp'>

**base**: `str | None | list[str | None]`<br/>
*Default:* usd<br/>
The base currency symbol. Multiple items allowed for provider(s): fmp.

**quote_type**: `Literal['direct', 'indirect'] | None`<br/>
*Default:* indirect<br/>
Whether the quote is direct or indirect. Selecting 'direct' will return the exchange rate as the amount of domestic currency required to buy one unit of the foreign currency. Selecting 'indirect' (default) will return the exchange rate as the amount of foreign currency required to buy one unit of the domestic currency.

**counter_currencies**: `str | list[str] | None`<br/>
An optional list of counter currency symbols to filter for. None returns all.

</TabItem>
</Tabs>

---

## Returns

**results**: `CurrencySnapshots`

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

**base_currency**: `str`<br/>
The base, or domestic, currency.

**counter_currency**: `str`<br/>
The counter, or foreign, currency.

**last_rate**: `float`<br/>
The exchange rate, relative to the base currency. Rates are expressed as the amount of foreign currency received from selling one unit of the base currency, or the quantity of foreign currency required to purchase one unit of the domestic currency. To inverse the perspective, set the 'quote_type' parameter as 'direct'.

**open**: `float | None`<br/>
The open price.

**high**: `float | None`<br/>
The high price.

**low**: `float | None`<br/>
The low price.

**close**: `float | None`<br/>
The close price.

**volume**: `int | None`<br/>
The trading volume.

**prev_close**: `float | None`<br/>
The previous close price.

</TabItem>
<TabItem value='fmp' label='fmp'>

**base_currency**: `str`<br/>
The base, or domestic, currency.

**counter_currency**: `str`<br/>
The counter, or foreign, currency.

**last_rate**: `float`<br/>
The exchange rate, relative to the base currency. Rates are expressed as the amount of foreign currency received from selling one unit of the base currency, or the quantity of foreign currency required to purchase one unit of the domestic currency. To inverse the perspective, set the 'quote_type' parameter as 'direct'.

**open**: `float | None`<br/>
The open price.

**high**: `float | None`<br/>
The high price.

**low**: `float | None`<br/>
The low price.

**close**: `float | None`<br/>
The close price.

**volume**: `int | None`<br/>
The trading volume.

**prev_close**: `float | None`<br/>
The previous close price.

**change**: `float | None`<br/>
The change in the price from the previous close.

**change_percent**: `float | None`<br/>
The change in the price from the previous close, as a normalized percent.

**ma50**: `float | None`<br/>
The 50-day moving average.

**ma200**: `float | None`<br/>
The 200-day moving average.

**year_high**: `float | None`<br/>
The 52-week high.

**year_low**: `float | None`<br/>
The 52-week low.

**last_rate_timestamp**: `datetime | None`<br/>
The timestamp of the last rate.

</TabItem>
</Tabs>

