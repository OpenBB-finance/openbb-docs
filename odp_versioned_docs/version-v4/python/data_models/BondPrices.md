---
title: "Bond Prices"
description: "Corporate Bond Prices"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `BondPrices` | `BondPricesQueryParams` | `BondPricesData` |

### Import Statement

```python
from openbb_core.provider.standard_models.bond_prices import (
BondPricesData,
BondPricesQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**country**: `str | None`<br/>
The country to get data. Matches partial name.

**issuer_name**: `str | None`<br/>
Name of the issuer.  Returns partial matches and is case insensitive.

**isin**: `list | str | None | list[list | str | None]`<br/>
International Securities Identification Number(s) of the bond(s). Multiple items allowed for provider(s): tmx.

**lei**: `str | None`<br/>
Legal Entity Identifier of the issuing entity.

**currency**: `list | str | None`<br/>
Currency of the bond. Formatted as the 3-letter ISO 4217 code (e.g. GBP, EUR, USD).

**coupon_min**: `float | None`<br/>
Minimum coupon rate of the bond.

**coupon_max**: `float | None`<br/>
Maximum coupon rate of the bond.

**issued_amount_min**: `int | None`<br/>
Minimum issued amount of the bond.

**issued_amount_max**: `str | None`<br/>
Maximum issued amount of the bond.

**maturity_date_min**: `date | None`<br/>
Minimum maturity date of the bond.

**maturity_date_max**: `date | None`<br/>
Maximum maturity date of the bond.

</TabItem>
<TabItem value='tmx' label='tmx'>

**country**: `str | None`<br/>
The country to get data. Matches partial name.

**issuer_name**: `str | None`<br/>
Name of the issuer.  Returns partial matches and is case insensitive.

**isin**: `list | str | None | list[list | str | None]`<br/>
International Securities Identification Number(s) of the bond(s). Multiple items allowed for provider(s): tmx.

**lei**: `str | None`<br/>
Legal Entity Identifier of the issuing entity.

**currency**: `list | str | None`<br/>
Currency of the bond. Formatted as the 3-letter ISO 4217 code (e.g. GBP, EUR, USD).

**coupon_min**: `float | None`<br/>
Minimum coupon rate of the bond.

**coupon_max**: `float | None`<br/>
Maximum coupon rate of the bond.

**issued_amount_min**: `int | None`<br/>
Minimum issued amount of the bond.

**issued_amount_max**: `str | None`<br/>
Maximum issued amount of the bond.

**maturity_date_min**: `date | None`<br/>
Minimum maturity date of the bond.

**maturity_date_max**: `date | None`<br/>
Maximum maturity date of the bond.

**issue_date_min**: `date | None`<br/>
Filter by the minimum original issue date.

**issue_date_max**: `date | None`<br/>
Filter by the maximum original issue date.

**last_traded_min**: `date | None`<br/>
Filter by the minimum last trade date.

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
All bond data is sourced from a single JSON file that is updated daily. The file is cached for one day to eliminate downloading more than once. Caching will significantly speed up subsequent queries. To bypass, set to False.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**isin**: `str | None`<br/>
International Securities Identification Number of the bond.

**lei**: `str | None`<br/>
Legal Entity Identifier of the issuing entity.

**figi**: `str | None`<br/>
FIGI of the bond.

**cusip**: `str | None`<br/>
CUSIP of the bond.

**coupon_rate**: `float | None`<br/>
Coupon rate of the bond.

</TabItem>
<TabItem value='tmx' label='tmx'>

**isin**: `str | None`<br/>
International Securities Identification Number of the bond.

**lei**: `str | None`<br/>
Legal Entity Identifier of the issuing entity.

**figi**: `str | None`<br/>
FIGI of the bond.

**cusip**: `str | None`<br/>
CUSIP of the bond.

**coupon_rate**: `float | None`<br/>
Coupon rate of the bond.

**ytm**: `float | None`<br/>
Yield to maturity (YTM) is the rate of return anticipated on a bond if it is held until the maturity date. It takes into account the current market price, par value, coupon rate and time to maturity. It is assumed that all coupons are reinvested at the same rate. Values are returned as a normalized percent.

**price**: `float | None`<br/>
The last price for the bond.

**highest_price**: `float | None`<br/>
The highest price for the bond on the last traded date.

**lowest_price**: `float | None`<br/>
The lowest price for the bond on the last traded date.

**total_trades**: `int | None`<br/>
Total number of trades on the last traded date.

**last_traded_date**: `date | None`<br/>
Last traded date of the bond.

**maturity_date**: `date | None`<br/>
Maturity date of the bond.

**issue_date**: `date | None`<br/>
Issue date of the bond. This is the date when the bond first accrues interest.

**issuer_name**: `str | None`<br/>
Name of the issuing entity.

</TabItem>
</Tabs>

