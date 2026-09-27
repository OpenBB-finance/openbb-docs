---
title: "nport_disclosure"
description: "Get SEC NPORT-P disclosure filings for a given ETF or mutual fund (US only)"
keywords:
- etf
- nport_disclosure
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="etf/nport_disclosure - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get SEC NPORT-P disclosure filings for a given ETF or mutual fund (US only).

Examples
--------

```python
from openbb import obb
obb.etf.nport_disclosure(symbol='XLK', year=2025, quarter=1)
# The same data can be returned from the SEC directly.
obb.etf.nport_disclosure(symbol='XLK', year=2025, quarter=1)
# Additional disclosures, such as flow and returns are included in the SEC's response under the `extra['results_metadata']` field.
response = obb.etf.nport_disclosure(symbol='XLK', provider='sec', year=2025, quarter=1)
print(response.extra['results_metadata'])
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol to get data for. (Fund ticker or CIK)

**year**: `int | None`<br/>
Reporting year of the filing. Default is the year for the most recent, reported, quarter.

**quarter**: `int | None`<br/>
Reporting quarter of the filing. Default is the most recent, reported, quarter.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str`<br/>
Symbol to get data for. (Fund ticker or CIK)

**year**: `int | None`<br/>
Reporting year of the filing. Default is the year for the most recent, reported, quarter.

**quarter**: `int | None`<br/>
Reporting quarter of the filing. Default is the most recent, reported, quarter.

</TabItem>
<TabItem value='sec' label='sec'>

**symbol**: `str`<br/>
Symbol to get data for. (Fund ticker or CIK)

**year**: `int | None`<br/>
Reporting year of the filing. Default is the year for the most recent, reported, quarter.

**quarter**: `int | None`<br/>
Reporting quarter of the filing. Default is the most recent, reported, quarter.

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
Whether or not to use cache for the request.

</TabItem>
</Tabs>

---

## Returns

**results**: `NportDisclosure`

Serializable results.

**provider**: `Optional[Literal['fmp', 'sec']]`

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

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the asset.

**title**: `str | None`<br/>
Title of the asset.

**cusip**: `str | None`<br/>
CUSIP of the holding.

**lei**: `str | None`<br/>
The LEI of the holding.

**isin**: `str | None`<br/>
The ISIN of the holding.

**other_id**: `str | None`<br/>
Internal identifier for the holding.

**is_restricted**: `str | None`<br/>
Whether the holding is restricted.

**fair_value_level**: `int | None`<br/>
The fair value level of the holding.

**is_cash_collateral**: `str | None`<br/>
Whether the holding is cash collateral.

**is_non_cash_collateral**: `str | None`<br/>
Whether the holding is non-cash collateral.

**is_loan_by_fund**: `str | None`<br/>
Whether the holding is loan by fund.

**loan_value**: `float | None`<br/>
The loan value of the holding.

**issuer_conditional**: `str | None`<br/>
The issuer conditions of the holding.

**asset_conditional**: `str | None`<br/>
The asset conditions of the holding.

**payoff_profile**: `str | None`<br/>
The payoff profile of the holding.

**asset_category**: `str | None`<br/>
The asset category of the holding.

**issuer_category**: `str | None`<br/>
The issuer category of the holding.

**country**: `str | None`<br/>
The country of the holding.

**balance**: `int | float | None`<br/>
The balance of the holding, in shares or units.

**units**: `int | float | str | None`<br/>
The type of units.

**currency**: `str | None`<br/>
The currency of the holding.

**value**: `int | float | None`<br/>
The value of the holding, in dollars.

**weight**: `float | None`<br/>
The weight of the holding, as a normalized percent.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the asset.

**title**: `str | None`<br/>
Title of the asset.

**cusip**: `str | None`<br/>
CUSIP of the holding.

**lei**: `str | None`<br/>
The LEI of the holding.

**isin**: `str | None`<br/>
The ISIN of the holding.

**other_id**: `str | None`<br/>
Internal identifier for the holding.

**is_restricted**: `str | None`<br/>
Whether the holding is restricted.

**fair_value_level**: `int | None`<br/>
The fair value level of the holding.

**is_cash_collateral**: `str | None`<br/>
Whether the holding is cash collateral.

**is_non_cash_collateral**: `str | None`<br/>
Whether the holding is non-cash collateral.

**is_loan_by_fund**: `str | None`<br/>
Whether the holding is loan by fund.

**loan_value**: `float | None`<br/>
The loan value of the holding.

**issuer_conditional**: `str | None`<br/>
The issuer conditions of the holding.

**asset_conditional**: `str | None`<br/>
The asset conditions of the holding.

**payoff_profile**: `str | None`<br/>
The payoff profile of the holding.

**asset_category**: `str | None`<br/>
The asset category of the holding.

**issuer_category**: `str | None`<br/>
The issuer category of the holding.

**country**: `str | None`<br/>
The country of the holding.

**balance**: `int | float | None`<br/>
The balance of the holding, in shares or units.

**units**: `int | float | str | None`<br/>
The type of units.

**currency**: `str | None`<br/>
The currency of the holding.

**value**: `int | float | None`<br/>
The value of the holding, in dollars.

**weight**: `float | None`<br/>
The weight of the holding, as a normalized percent.

**as_of**: `date | None`<br/>
The acceptance datetime of the filing.

</TabItem>
<TabItem value='sec' label='sec'>

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the asset.

**title**: `str | None`<br/>
Title of the asset.

**cusip**: `str | None`<br/>
CUSIP of the holding.

**lei**: `str | None`<br/>
The LEI of the holding.

**isin**: `str | None`<br/>
The ISIN of the holding.

**other_id**: `str | None`<br/>
Internal identifier for the holding.

**is_restricted**: `str | None`<br/>
Whether the holding is restricted.

**fair_value_level**: `int | None`<br/>
The fair value level of the holding.

**is_cash_collateral**: `str | None`<br/>
Whether the holding is cash collateral.

**is_non_cash_collateral**: `str | None`<br/>
Whether the holding is non-cash collateral.

**is_loan_by_fund**: `str | None`<br/>
Whether the holding is loan by fund.

**loan_value**: `float | None`<br/>
The loan value of the holding.

**issuer_conditional**: `str | None`<br/>
The issuer conditions of the holding.

**asset_conditional**: `str | None`<br/>
The asset conditions of the holding.

**payoff_profile**: `str | None`<br/>
The payoff profile of the holding.

**asset_category**: `str | None`<br/>
The asset category of the holding.

**issuer_category**: `str | None`<br/>
The issuer category of the holding.

**country**: `str | None`<br/>
The country of the holding.

**balance**: `int | float | None`<br/>
The balance of the holding, in shares or units.

**units**: `int | float | str | None`<br/>
The type of units.

**currency**: `str | None`<br/>
The currency of the holding.

**value**: `int | float | None`<br/>
The value of the holding, in dollars.

**weight**: `float | None`<br/>
The weight of the holding, as a normalized percent.

**maturity_date**: `date | None`<br/>
The maturity date of the debt security.

**coupon_kind**: `str | None`<br/>
The type of coupon for the debt security.

**rate_type**: `str | None`<br/>
The type of rate for the debt security, floating or fixed.

**annualized_return**: `float | None`<br/>
The annualized return on the debt security.

**is_default**: `str | None`<br/>
If the debt security is defaulted.

**in_arrears**: `str | None`<br/>
If the debt security is in arrears.

**is_paid_kind**: `str | None`<br/>
If the debt security payments are paid in kind.

**derivative_category**: `str | None`<br/>
The derivative category of the holding.

**counterparty**: `str | None`<br/>
The counterparty of the derivative.

**underlying_name**: `str | None`<br/>
The name of the underlying asset associated with the derivative.

**option_type**: `str | None`<br/>
The type of option.

**derivative_payoff**: `str | None`<br/>
The payoff profile of the derivative.

**expiry_date**: `date | None`<br/>
The expiry or termination date of the derivative.

**exercise_price**: `float | None`<br/>
The exercise price of the option.

**exercise_currency**: `str | None`<br/>
The currency of the option exercise price.

**shares_per_contract**: `float | None`<br/>
The number of shares per contract.

**delta**: `str | float | None`<br/>
The delta of the option.

**rate_type_rec**: `str | None`<br/>
The type of rate for receivable portion of the swap.

**receive_currency**: `str | None`<br/>
The receive currency of the swap.

**upfront_receive**: `float | None`<br/>
The upfront amount received of the swap.

**floating_rate_index_rec**: `str | None`<br/>
The floating rate index for receivable portion of the swap.

**floating_rate_spread_rec**: `float | None`<br/>
The floating rate spread for reveivable portion of the swap.

**rate_tenor_rec**: `str | None`<br/>
The rate tenor for receivable portion of the swap.

**rate_tenor_unit_rec**: `str | int | None`<br/>
The rate tenor unit for receivable portion of the swap.

**reset_date_rec**: `str | None`<br/>
The reset date for receivable portion of the swap.

**reset_date_unit_rec**: `str | int | None`<br/>
The reset date unit for receivable portion of the swap.

**rate_type_pmnt**: `str | None`<br/>
The type of rate for payment portion of the swap.

**payment_currency**: `str | None`<br/>
The payment currency of the swap.

**upfront_payment**: `float | None`<br/>
The upfront amount received of the swap.

**floating_rate_index_pmnt**: `str | None`<br/>
The floating rate index for payment portion of the swap.

**floating_rate_spread_pmnt**: `float | None`<br/>
The floating rate spread for payment portion of the swap.

**rate_tenor_pmnt**: `str | None`<br/>
The rate tenor for payment portion of the swap.

**rate_tenor_unit_pmnt**: `str | int | None`<br/>
The rate tenor unit for payment portion of the swap.

**reset_date_pmnt**: `str | None`<br/>
The reset date for payment portion of the swap.

**reset_date_unit_pmnt**: `str | int | None`<br/>
The reset date unit for payment portion of the swap.

**repo_type**: `str | None`<br/>
The type of repo.

**is_cleared**: `str | None`<br/>
If the repo is cleared.

**is_tri_party**: `str | None`<br/>
If the repo is tri party.

**principal_amount**: `float | None`<br/>
The principal amount of the repo.

**principal_currency**: `str | None`<br/>
The currency of the principal amount.

**collateral_type**: `str | None`<br/>
The collateral type of the repo.

**collateral_amount**: `float | None`<br/>
The collateral amount of the repo.

**collateral_currency**: `str | None`<br/>
The currency of the collateral amount.

**exchange_currency**: `str | None`<br/>
The currency of the exchange rate.

**exchange_rate**: `float | None`<br/>
The exchange rate.

**currency_sold**: `str | None`<br/>
The currency sold in a Forward Derivative.

**currency_amount_sold**: `float | None`<br/>
The amount of currency sold in a Forward Derivative.

**currency_bought**: `str | None`<br/>
The currency bought in a Forward Derivative.

**currency_amount_bought**: `float | None`<br/>
The amount of currency bought in a Forward Derivative.

**notional_amount**: `float | None`<br/>
The notional amount of the derivative.

**notional_currency**: `str | None`<br/>
The currency of the derivative's notional amount.

**unrealized_gain**: `float | None`<br/>
The unrealized gain or loss on the derivative.

</TabItem>
</Tabs>

