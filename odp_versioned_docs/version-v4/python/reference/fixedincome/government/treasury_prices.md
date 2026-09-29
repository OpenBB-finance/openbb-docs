---
title: "treasury_prices"
description: "Government Treasury Prices by date"
keywords:
- fixedincome
- government
- treasury_prices
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="fixedincome/government/treasury_prices - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Government Treasury Prices by date.

Examples
--------

```python
from openbb import obb
obb.fixedincome.government.treasury_prices()
obb.fixedincome.government.treasury_prices(date='2019-02-05')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | None | str`<br/>
A specific date to get data for. Defaults to the last business day.

</TabItem>
<TabItem value='government_us' label='government_us'>

**date**: `date | None | str`<br/>
A specific date to get data for. Defaults to the last business day.

**cusip**: `str | None`<br/>
Filter by CUSIP.

**security_type**: `Literal['bill', 'note', 'bond', 'tips', 'frn'] | None`<br/>
Filter by security type.

</TabItem>
<TabItem value='tmx' label='tmx'>

**date**: `date | None | str`<br/>
A specific date to get data for. Defaults to the last business day.

**govt_type**: `Literal['federal', 'provincial', 'municipal'] | None`<br/>
*Default:* federal<br/>
The level of government issuer.

**issue_date_min**: `date | None`<br/>
Filter by the minimum original issue date.

**issue_date_max**: `date | None`<br/>
Filter by the maximum original issue date.

**last_traded_min**: `date | None`<br/>
Filter by the minimum last trade date.

**maturity_date_min**: `date | None`<br/>
Filter by the minimum maturity date.

**maturity_date_max**: `date | None`<br/>
Filter by the maximum maturity date.

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
All bond data is sourced from a single JSON file that is updated daily. The file is cached for one day to eliminate downloading more than once. Caching will significantly speed up subsequent queries. To bypass, set to False.

</TabItem>
</Tabs>

---

## Returns

**results**: `TreasuryPrices`

Serializable results.

**provider**: `Optional[Literal['government_us', 'tmx']]`

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

**issuer_name**: `str | None`<br/>
Name of the issuing entity.

**cusip**: `str | None`<br/>
CUSIP of the security.

**isin**: `str | None`<br/>
ISIN of the security.

**security_type**: `str | None`<br/>
The type of Treasury security - i.e., Bill, Note, Bond, TIPS, FRN.

**issue_date**: `date | None`<br/>
The original issue date of the security.

**maturity_date**: `date | None`<br/>
The maturity date of the security.

**call_date**: `date | None`<br/>
The call date of the security.

**bid**: `float | None`<br/>
The bid price of the security.

**offer**: `float | None`<br/>
The offer price of the security.

**eod_price**: `float | None`<br/>
The end-of-day price of the security.

**last_traded_date**: `date | None`<br/>
The last trade date of the security.

**total_trades**: `int | None`<br/>
Total number of trades on the last traded date.

**last_price**: `float | None`<br/>
The last price of the security.

**highest_price**: `float | None`<br/>
The highest price for the bond on the last traded date.

**lowest_price**: `float | None`<br/>
The lowest price for the bond on the last traded date.

**rate**: `float | None`<br/>
The annualized interest rate or coupon of the security.

**ytm**: `float | None`<br/>
Yield to maturity (YTM) is the rate of return anticipated on a bond if it is held until the maturity date. It takes into account the current market price, par value, coupon rate and time to maturity. It is assumed that all coupons are reinvested at the same rate.

</TabItem>
<TabItem value='government_us' label='government_us'>

**issuer_name**: `str | None`<br/>
Name of the issuing entity.

**cusip**: `str | None`<br/>
CUSIP of the security.

**isin**: `str | None`<br/>
ISIN of the security.

**security_type**: `str | None`<br/>
The type of Treasury security - i.e., Bill, Note, Bond, TIPS, FRN.

**issue_date**: `date | None`<br/>
The original issue date of the security.

**maturity_date**: `date | None`<br/>
The maturity date of the security.

**call_date**: `date | None`<br/>
The call date of the security.

**bid**: `float | None`<br/>
The bid price of the security.

**offer**: `float | None`<br/>
The offer price of the security.

**eod_price**: `float | None`<br/>
The end-of-day price of the security.

**last_traded_date**: `date | None`<br/>
The last trade date of the security.

**total_trades**: `int | None`<br/>
Total number of trades on the last traded date.

**last_price**: `float | None`<br/>
The last price of the security.

**highest_price**: `float | None`<br/>
The highest price for the bond on the last traded date.

**lowest_price**: `float | None`<br/>
The lowest price for the bond on the last traded date.

**rate**: `float | None`<br/>
The annualized interest rate or coupon of the security.

**ytm**: `float | None`<br/>
Yield to maturity (YTM) is the rate of return anticipated on a bond if it is held until the maturity date. It takes into account the current market price, par value, coupon rate and time to maturity. It is assumed that all coupons are reinvested at the same rate.

</TabItem>
<TabItem value='tmx' label='tmx'>

**issuer_name**: `str | None`<br/>
Name of the issuing entity.

**cusip**: `str | None`<br/>
CUSIP of the security.

**isin**: `str | None`<br/>
ISIN of the security.

**security_type**: `str | None`<br/>
The type of Treasury security - i.e., Bill, Note, Bond, TIPS, FRN.

**issue_date**: `date | None`<br/>
The original issue date of the security.

**maturity_date**: `date | None`<br/>
The maturity date of the security.

**call_date**: `date | None`<br/>
The call date of the security.

**bid**: `float | None`<br/>
The bid price of the security.

**offer**: `float | None`<br/>
The offer price of the security.

**eod_price**: `float | None`<br/>
The end-of-day price of the security.

**last_traded_date**: `date | None`<br/>
The last trade date of the security.

**total_trades**: `int | None`<br/>
Total number of trades on the last traded date.

**last_price**: `float | None`<br/>
The last price of the security.

**highest_price**: `float | None`<br/>
The highest price for the bond on the last traded date.

**lowest_price**: `float | None`<br/>
The lowest price for the bond on the last traded date.

**rate**: `float | None`<br/>
The annualized interest rate or coupon of the security.

**ytm**: `float | None`<br/>
Yield to maturity (YTM) is the rate of return anticipated on a bond if it is held until the maturity date. It takes into account the current market price, par value, coupon rate and time to maturity. It is assumed that all coupons are reinvested at the same rate.

</TabItem>
</Tabs>

