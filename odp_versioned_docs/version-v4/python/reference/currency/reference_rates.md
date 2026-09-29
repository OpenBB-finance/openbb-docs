---
title: "reference_rates"
description: "Current, official, currency reference rates"
keywords:
- currency
- reference_rates
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="currency/reference_rates - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get current, official, currency reference rates.

Foreign exchange reference rates are the exchange rates set by a major financial institution or regulatory body,
serving as a benchmark for the value of currencies around the world.
These rates are used as a standard to facilitate international trade and financial transactions,
ensuring consistency and reliability in currency conversion.
They are typically updated on a daily basis and reflect the market conditions at a specific time.
Central banks and financial institutions often use these rates to guide their own exchange rates,
impacting global trade, loans, and investments.

Examples
--------

```python
from openbb import obb
obb.currency.reference_rates()
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='ecb' label='ecb'>

</TabItem>
</Tabs>

---

## Returns

**results**: `CurrencyReferenceRates`

Serializable results.

**provider**: `Optional[Literal['ecb']]`

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

**EUR**: `float | None`<br/>
Euro.

**USD**: `float | None`<br/>
US Dollar.

**JPY**: `float | None`<br/>
Japanese Yen.

**BGN**: `float | None`<br/>
Bulgarian Lev.

**CZK**: `float | None`<br/>
Czech Koruna.

**DKK**: `float | None`<br/>
Danish Krone.

**GBP**: `float | None`<br/>
Pound Sterling.

**HUF**: `float | None`<br/>
Hungarian Forint.

**PLN**: `float | None`<br/>
Polish Zloty.

**RON**: `float | None`<br/>
Romanian Leu.

**SEK**: `float | None`<br/>
Swedish Krona.

**CHF**: `float | None`<br/>
Swiss Franc.

**ISK**: `float | None`<br/>
Icelandic Krona.

**NOK**: `float | None`<br/>
Norwegian Krone.

**TRY**: `float | None`<br/>
Turkish Lira.

**AUD**: `float | None`<br/>
Australian Dollar.

**BRL**: `float | None`<br/>
Brazilian Real.

**CAD**: `float | None`<br/>
Canadian Dollar.

**CNY**: `float | None`<br/>
Chinese Yuan.

**HKD**: `float | None`<br/>
Hong Kong Dollar.

**IDR**: `float | None`<br/>
Indonesian Rupiah.

**ILS**: `float | None`<br/>
Israeli Shekel.

**INR**: `float | None`<br/>
Indian Rupee.

**KRW**: `float | None`<br/>
South Korean Won.

**MXN**: `float | None`<br/>
Mexican Peso.

**MYR**: `float | None`<br/>
Malaysian Ringgit.

**NZD**: `float | None`<br/>
New Zealand Dollar.

**PHP**: `float | None`<br/>
Philippine Peso.

**SGD**: `float | None`<br/>
Singapore Dollar.

**THB**: `float | None`<br/>
Thai Baht.

**ZAR**: `float | None`<br/>
South African Rand.

</TabItem>
<TabItem value='ecb' label='ecb'>

**date**: `date | str`<br/>
The date of the data.

**EUR**: `float | None`<br/>
Euro.

**USD**: `float | None`<br/>
US Dollar.

**JPY**: `float | None`<br/>
Japanese Yen.

**BGN**: `float | None`<br/>
Bulgarian Lev.

**CZK**: `float | None`<br/>
Czech Koruna.

**DKK**: `float | None`<br/>
Danish Krone.

**GBP**: `float | None`<br/>
Pound Sterling.

**HUF**: `float | None`<br/>
Hungarian Forint.

**PLN**: `float | None`<br/>
Polish Zloty.

**RON**: `float | None`<br/>
Romanian Leu.

**SEK**: `float | None`<br/>
Swedish Krona.

**CHF**: `float | None`<br/>
Swiss Franc.

**ISK**: `float | None`<br/>
Icelandic Krona.

**NOK**: `float | None`<br/>
Norwegian Krone.

**TRY**: `float | None`<br/>
Turkish Lira.

**AUD**: `float | None`<br/>
Australian Dollar.

**BRL**: `float | None`<br/>
Brazilian Real.

**CAD**: `float | None`<br/>
Canadian Dollar.

**CNY**: `float | None`<br/>
Chinese Yuan.

**HKD**: `float | None`<br/>
Hong Kong Dollar.

**IDR**: `float | None`<br/>
Indonesian Rupiah.

**ILS**: `float | None`<br/>
Israeli Shekel.

**INR**: `float | None`<br/>
Indian Rupee.

**KRW**: `float | None`<br/>
South Korean Won.

**MXN**: `float | None`<br/>
Mexican Peso.

**MYR**: `float | None`<br/>
Malaysian Ringgit.

**NZD**: `float | None`<br/>
New Zealand Dollar.

**PHP**: `float | None`<br/>
Philippine Peso.

**SGD**: `float | None`<br/>
Singapore Dollar.

**THB**: `float | None`<br/>
Thai Baht.

**ZAR**: `float | None`<br/>
South African Rand.

</TabItem>
</Tabs>

