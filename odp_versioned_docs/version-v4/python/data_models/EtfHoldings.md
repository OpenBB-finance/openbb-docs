---
title: "Etf Holdings"
description: "Get the holdings for an individual ETF"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `EtfHoldings` | `EtfHoldingsQueryParams` | `EtfHoldingsData` |

### Import Statement

```python
from openbb_core.provider.standard_models.etf_holdings import (
EtfHoldingsData,
EtfHoldingsQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol to get data for. (ETF)

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str`<br/>
Symbol to get data for. (ETF)

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str`<br/>
Symbol to get data for. (ETF)

**date**: `date | None | str`<br/>
A specific date to get data for.

</TabItem>
<TabItem value='tmx' label='tmx'>

**symbol**: `str`<br/>
Symbol to get data for. (ETF)

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
Whether to use a cached request. All ETF data comes from a single JSON file that is updated daily. To bypass, set to False. If True, the data will be cached for 4 hours.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the asset.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the asset.

**cusip**: `str | None`<br/>
The CUSIP of the holding.

**isin**: `str | None`<br/>
The ISIN of the holding.

**weight**: `float | None`<br/>
The weight of the holding, as a normalized percent.

**shares**: `float | str | None`<br/>
The number of shares held.

**value**: `float | None`<br/>
The market value of the holding.

**updated**: `date | datetime | None`<br/>
The date the data was updated.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
The common name for the holding.

**security_type**: `str | None`<br/>
The type of instrument for this holding. Examples(Bond='BOND', Equity='EQUI')

**isin**: `str | None`<br/>
The International Securities Identification Number.

**ric**: `str | None`<br/>
The Reuters Instrument Code.

**sedol**: `str | None`<br/>
The Stock Exchange Daily Official list.

**share_class_figi**: `str | None`<br/>
The OpenFIGI symbol for the holding.

**country**: `str | None`<br/>
The country or region of the holding.

**maturity_date**: `date | None`<br/>
The maturity date for the debt security, if available.

**contract_expiry_date**: `date | None`<br/>
Expiry date for the futures contract held, if available.

**coupon**: `float | None`<br/>
The coupon rate of the debt security, if available.

**balance**: `int | float | None`<br/>
The number of units of the security held, if available.

**unit**: `str | None`<br/>
The units of the 'balance' field.

**units_per_share**: `float | None`<br/>
Number of units of the security held per share outstanding of the ETF, if available.

**face_value**: `float | None`<br/>
The face value of the debt security, if available.

**derivatives_value**: `float | None`<br/>
The notional value of derivatives contracts held.

**value**: `float | None`<br/>
The market value of the holding, on the 'as_of' date.

**weight**: `float | None`<br/>
The weight of the holding, as a normalized percent.

**updated**: `date | None`<br/>
The 'as_of' date for the holding.

</TabItem>
<TabItem value='tmx' label='tmx'>

**symbol**: `str | None`<br/>
The ticker symbol of the asset.

**name**: `str | None`<br/>
The name of the asset.

**weight**: `float | None`<br/>
The weight of the asset in the portfolio, as a normalized percentage.

**shares**: `int | str | None`<br/>
The value of the assets under management.

**market_value**: `float | str | None`<br/>
The market value of the holding.

**currency**: `str | None`<br/>
The currency of the holding.

**share_percentage**: `float | None`<br/>
The share percentage of the holding, as a normalized percentage.

**share_change**: `float | str | None`<br/>
The change in shares of the holding.

**country**: `str | None`<br/>
The country of the holding.

**exchange**: `str | None`<br/>
The exchange code of the holding.

**type_id**: `str | None`<br/>
The holding type ID of the asset.

**fund_id**: `str | None`<br/>
The fund ID of the asset.

</TabItem>
</Tabs>

