---
title: "balance_growth"
description: "Learn about balance sheet statement growth, equity data for a company,  parameters like symbol, limit, and provider, and explore the returned results, warnings,  charts, and metadata. Retrieve detailed data on various balance sheet growth metrics  like cash and cash equivalents, short-term investments, inventory, total assets,  total liabilities, and more."
keywords:
- balance sheet statement growth
- company balance sheet growth
- equity data
- symbol
- limit parameter
- provider parameter
- results
- balance sheet growth
- warnings
- chart
- metadata
- data
- cash and cash equivalents
- short-term investments
- net receivables
- inventory
- current assets
- property, plant, and equipment
- goodwill
- intangible assets
- long-term investments
- tax assets
- other non-current assets
- total non-current assets
- other assets
- total assets
- accounts payable
- short-term debt
- total current liabilities
- long-term debt
- non-current deferred revenue
- non-current deferred tax liabilities
- total non-current liabilities
- common stock
- retained earnings
- accumulated other comprehensive income/loss
- total stockholders' equity
- total liabilities and stockholders' equity
- total investments
- total debt
- net debt
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/fundamental/balance_growth - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get the growth of a company's balance sheet items over time.

Examples
--------

```python
from openbb import obb
obb.equity.fundamental.balance_growth(symbol='AAPL')
obb.equity.fundamental.balance_growth(symbol='AAPL', limit=10)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol to get data for.

**limit**: `int | None`<br/>
The number of data entries to return.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str`<br/>
Symbol to get data for.

**limit**: `int | None`<br/>
The number of data entries to return. (default 5)

**period**: `Literal['q1', 'q2', 'q3', 'q4', 'fy', 'annual', 'quarter'] | None`<br/>
*Default:* annual<br/>
Time period of the data to return.

</TabItem>
<TabItem value='sec' label='sec'>

**symbol**: `str`<br/>
Symbol to get data for.

**limit**: `int | None`<br/>
The number of data entries to return.

**period**: `Literal['annual', 'quarterly', 'quarterly_yoy', 'ttm'] | None`<br/>
*Default:* annual<br/>
Time period of the data to return. For balance sheet growth, 'quarterly_yoy' compares the most recent quarter to the same quarter in the prior year, and TTM compares the most recent quarter to the average of the same quarter and the three preceding quarters in the prior year.

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
Whether to use cache (4-hour memory) for the SEC request. Defaults to True.

**include_preliminary**: `bool | None`<br/>
*Default:* False<br/>
Whether to include preliminary data from 8-K filings for periods not yet reported on 10-Q/K.

**pit_mode**: `bool | None`<br/>
*Default:* False<br/>
Point-in-time mode. When True, returns data as originally reported at the time of filing, without subsequent restatements or amendments. For annual data, uses the original 10-K values. For quarterly data, preserves 10-Q filing vintage instead of using restated comparatives from the 10-K.

</TabItem>
</Tabs>

---

## Returns

**results**: `BalanceSheetGrowth`

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

**period_ending**: `date`<br/>
The end date of the reporting period.

**fiscal_period**: `str | None`<br/>
The fiscal period of the report.

**fiscal_year**: `int | None`<br/>
The fiscal year of the fiscal period.

</TabItem>
<TabItem value='fmp' label='fmp'>

**period_ending**: `date`<br/>
The end date of the reporting period.

**fiscal_period**: `str | None`<br/>
The fiscal period of the report.

**fiscal_year**: `int | None`<br/>
The fiscal year of the fiscal period.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**reported_currency**: `str | None`<br/>
The currency in which the financial data is reported.

**growth_cash_and_cash_equivalents**: `float | None`<br/>
Growth rate of cash and cash equivalents.

**growth_short_term_investments**: `float | None`<br/>
Growth rate of short-term investments.

**growth_cash_and_short_term_investments**: `float | None`<br/>
Growth rate of cash and short-term investments.

**growth_accounts_receivables**: `float | None`<br/>
Growth rate of accounts receivable.

**growth_other_receivables**: `float | None`<br/>
Growth rate of other receivables.

**growth_net_receivables**: `float | None`<br/>
Growth rate of net receivables.

**growth_inventory**: `float | None`<br/>
Growth rate of inventory.

**growth_other_current_assets**: `float | None`<br/>
Growth rate of other current assets.

**growth_total_current_assets**: `float | None`<br/>
Growth rate of total current assets.

**growth_property_plant_equipment_net**: `float | None`<br/>
Growth rate of net property, plant, and equipment.

**growth_goodwill**: `float | None`<br/>
Growth rate of goodwill.

**growth_intangible_assets**: `float | None`<br/>
Growth rate of intangible assets.

**growth_goodwill_and_intangible_assets**: `float | None`<br/>
Growth rate of goodwill and intangible assets.

**growth_long_term_investments**: `float | None`<br/>
Growth rate of long-term investments.

**growth_tax_assets**: `float | None`<br/>
Growth rate of tax assets.

**growth_other_non_current_assets**: `float | None`<br/>
Growth rate of other non-current assets.

**growth_total_non_current_assets**: `float | None`<br/>
Growth rate of total non-current assets.

**growth_other_assets**: `float | None`<br/>
Growth rate of other assets.

**growth_total_assets**: `float | None`<br/>
Growth rate of total assets.

**growth_account_payables**: `float | None`<br/>
Growth rate of accounts payable.

**growth_other_payables**: `float | None`<br/>
Growth rate of other payables.

**growth_total_payables**: `float | None`<br/>
Growth rate of total payables.

**growth_accrued_expenses**: `float | None`<br/>
Growth rate of accrued expenses.

**growth_prepaid_expenses**: `float | None`<br/>
Growth rate of prepaid expenses.

**growth_capital_lease_obligations_current**: `float | None`<br/>
Growth rate of current capital lease obligations.

**growth_short_term_debt**: `float | None`<br/>
Growth rate of short-term debt.

**growth_tax_payables**: `float | None`<br/>
Growth rate of tax payables.

**growth_deferred_revenue**: `float | None`<br/>
Growth rate of deferred revenue.

**growth_other_current_liabilities**: `float | None`<br/>
Growth rate of other current liabilities.

**growth_total_current_liabilities**: `float | None`<br/>
Growth rate of total current liabilities.

**growth_deferred_revenue_non_current**: `float | None`<br/>
Growth rate of non-current deferred revenue.

**growth_long_term_debt**: `float | None`<br/>
Growth rate of long-term debt.

**growth_deferred_tax_liabilities_non_current**: `float | None`<br/>
Growth rate of non-current deferred tax liabilities.

**growth_other_non_current_liabilities**: `float | None`<br/>
Growth rate of other non-current liabilities.

**growth_total_non_current_liabilities**: `float | None`<br/>
Growth rate of total non-current liabilities.

**growth_other_liabilities**: `float | None`<br/>
Growth rate of other liabilities.

**growth_total_liabilities**: `float | None`<br/>
Growth rate of total liabilities.

**growth_retained_earnings**: `float | None`<br/>
Growth rate of retained earnings.

**growth_accumulated_other_comprehensive_income**: `float | None`<br/>
Growth rate of accumulated other comprehensive income/loss.

**growth_minority_interest**: `float | None`<br/>
Growth rate of minority interest.

**growth_additional_paid_in_capital**: `float | None`<br/>
Growth rate of additional paid-in capital.

**growth_other_total_shareholders_equity**: `float | None`<br/>
Growth rate of other total stockholders' equity.

**growth_total_shareholders_equity**: `float | None`<br/>
Growth rate of total stockholders' equity.

**growth_common_stock**: `float | None`<br/>
Growth rate of common stock.

**growth_preferred_stock**: `float | None`<br/>
Growth rate of preferred stock.

**growth_treasury_stock**: `float | None`<br/>
Growth rate of treasury stock.

**growth_total_equity**: `float | None`<br/>
Growth rate of total equity.

**growth_total_liabilities_and_shareholders_equity**: `float | None`<br/>
Growth rate of total liabilities and stockholders' equity.

**growth_total_investments**: `float | None`<br/>
Growth rate of total investments.

**growth_total_debt**: `float | None`<br/>
Growth rate of total debt.

**growth_net_debt**: `float | None`<br/>
Growth rate of net debt.

</TabItem>
<TabItem value='sec' label='sec'>

**period_ending**: `date`<br/>
The end date of the reporting period.

**fiscal_period**: `str | None`<br/>
The fiscal period of the report.

**fiscal_year**: `int | None`<br/>
The fiscal year of the fiscal period.

**growth_cash_and_equivalents**: `float | None`<br/>
Growth rate of cash and cash equivalents.

**growth_restricted_cash**: `float | None`<br/>
Growth rate of restricted cash.

**growth_short_term_investments**: `float | None`<br/>
Growth rate of short-term investments.

**growth_fed_funds_sold**: `float | None`<br/>
Growth rate of federal funds sold.

**growth_interest_bearing_deposits_at_other_banks**: `float | None`<br/>
Growth rate of interest-bearing deposits at other banks.

**growth_time_deposits_placed**: `float | None`<br/>
Growth rate of time deposits placed.

**growth_trading_account_securities**: `float | None`<br/>
Growth rate of trading account securities.

**growth_loans_and_leases**: `float | None`<br/>
Growth rate of loans and leases.

**growth_allowance_for_loan_and_lease_losses**: `float | None`<br/>
Growth rate of allowance for loan and lease losses.

**growth_net_loans_and_leases**: `float | None`<br/>
Growth rate of net loans and leases.

**growth_loans_held_for_sale**: `float | None`<br/>
Growth rate of loans held for sale.

**growth_accrued_investment_income**: `float | None`<br/>
Growth rate of accrued investment income.

**growth_accounts_receivable**: `float | None`<br/>
Growth rate of accounts receivable.

**growth_customer_and_other_receivables**: `float | None`<br/>
Growth rate of customer and other receivables.

**growth_note_receivable**: `float | None`<br/>
Growth rate of note receivable.

**growth_nontrade_receivables**: `float | None`<br/>
Growth rate of nontrade receivables.

**growth_net_inventory**: `float | None`<br/>
Growth rate of net inventory.

**growth_prepaid_expenses**: `float | None`<br/>
Growth rate of prepaid expenses.

**growth_current_deferred_tax_assets**: `float | None`<br/>
Growth rate of current deferred tax assets.

**growth_other_current_assets**: `float | None`<br/>
Growth rate of other current assets.

**growth_other_current_nonoperating_assets**: `float | None`<br/>
Growth rate of other current nonoperating assets.

**growth_total_current_assets**: `float | None`<br/>
Growth rate of total current assets.

**growth_gross_ppe**: `float | None`<br/>
Growth rate of gross property, plant, and equipment.

**growth_accumulated_depreciation**: `float | None`<br/>
Growth rate of accumulated depreciation.

**growth_net_ppe**: `float | None`<br/>
Growth rate of net property, plant, and equipment.

**growth_net_premises_and_equipment**: `float | None`<br/>
Growth rate of net premises and equipment.

**growth_operating_lease_right_of_use_asset**: `float | None`<br/>
Growth rate of operating lease right-of-use asset.

**growth_finance_lease_right_of_use_asset**: `float | None`<br/>
Growth rate of finance lease right-of-use asset.

**growth_long_term_investments**: `float | None`<br/>
Growth rate of long-term investments.

**growth_mortgage_servicing_rights**: `float | None`<br/>
Growth rate of mortgage servicing rights.

**growth_deferred_acquisition_cost**: `float | None`<br/>
Growth rate of deferred acquisition cost.

**growth_separate_account_business_assets**: `float | None`<br/>
Growth rate of separate account business assets.

**growth_noncurrent_note_receivables**: `float | None`<br/>
Growth rate of noncurrent note receivables.

**growth_goodwill**: `float | None`<br/>
Growth rate of goodwill.

**growth_intangible_assets**: `float | None`<br/>
Growth rate of intangible assets.

**growth_noncurrent_deferred_tax_assets**: `float | None`<br/>
Growth rate of noncurrent deferred tax assets.

**growth_employee_benefit_assets**: `float | None`<br/>
Growth rate of employee benefit assets.

**growth_other_noncurrent_assets**: `float | None`<br/>
Growth rate of other noncurrent assets.

**growth_other_noncurrent_nonoperating_assets**: `float | None`<br/>
Growth rate of other noncurrent nonoperating assets.

**growth_other_noncurrent_assets_excl_ppe**: `float | None`<br/>
Growth rate of other noncurrent assets excluding PPE.

**growth_total_noncurrent_assets**: `float | None`<br/>
Growth rate of total noncurrent assets.

**growth_other_assets**: `float | None`<br/>
Growth rate of other assets.

**growth_total_assets**: `float | None`<br/>
Growth rate of total assets.

**growth_noninterest_bearing_deposits**: `float | None`<br/>
Growth rate of noninterest-bearing deposits.

**growth_interest_bearing_deposits**: `float | None`<br/>
Growth rate of interest-bearing deposits.

**growth_fed_funds_purchased**: `float | None`<br/>
Growth rate of federal funds purchased.

**growth_short_term_debt**: `float | None`<br/>
Growth rate of short-term debt.

**growth_current_portion_of_long_term_debt**: `float | None`<br/>
Growth rate of current portion of long-term debt.

**growth_bankers_acceptances**: `float | None`<br/>
Growth rate of bankers acceptances.

**growth_accounts_payable**: `float | None`<br/>
Growth rate of accounts payable.

**growth_accrued_interest_payable**: `float | None`<br/>
Growth rate of accrued interest payable.

**growth_other_short_term_payables**: `float | None`<br/>
Growth rate of other short-term payables.

**growth_accrued_expenses**: `float | None`<br/>
Growth rate of accrued expenses.

**growth_customer_deposits**: `float | None`<br/>
Growth rate of customer deposits.

**growth_dividends_payable**: `float | None`<br/>
Growth rate of dividends payable.

**growth_current_deferred_revenue**: `float | None`<br/>
Growth rate of current deferred revenue.

**growth_current_deferred_tax_liabilities**: `float | None`<br/>
Growth rate of current deferred tax liabilities.

**growth_current_employee_benefit_liabilities**: `float | None`<br/>
Growth rate of current employee benefit liabilities.

**growth_other_taxes_payable**: `float | None`<br/>
Growth rate of other taxes payable.

**growth_other_current_liabilities**: `float | None`<br/>
Growth rate of other current liabilities.

**growth_other_current_nonoperating_liabilities**: `float | None`<br/>
Growth rate of other current nonoperating liabilities.

**growth_operating_lease_liability_current**: `float | None`<br/>
Growth rate of current operating lease liability.

**growth_finance_lease_liability_current**: `float | None`<br/>
Growth rate of current finance lease liability.

**growth_total_current_liabilities**: `float | None`<br/>
Growth rate of total current liabilities.

**growth_long_term_debt**: `float | None`<br/>
Growth rate of long-term debt.

**growth_capital_lease_obligations**: `float | None`<br/>
Growth rate of capital lease obligations.

**growth_operating_lease_liability_noncurrent**: `float | None`<br/>
Growth rate of noncurrent operating lease liability.

**growth_claims_and_claim_expenses**: `float | None`<br/>
Growth rate of claims and claim expenses.

**growth_future_policy_benefits**: `float | None`<br/>
Growth rate of future policy benefits.

**growth_unearned_premiums_credit**: `float | None`<br/>
Growth rate of unearned premiums credit.

**growth_policyholder_funds**: `float | None`<br/>
Growth rate of policyholder funds.

**growth_participating_policyholder_equity**: `float | None`<br/>
Growth rate of participating policyholder equity.

**growth_separate_account_business_liabilities**: `float | None`<br/>
Growth rate of separate account business liabilities.

**growth_other_long_term_liabilities**: `float | None`<br/>
Growth rate of other long-term liabilities.

**growth_asset_retirement_and_litigation_obligation**: `float | None`<br/>
Growth rate of asset retirement and litigation obligation.

**growth_noncurrent_deferred_revenue**: `float | None`<br/>
Growth rate of noncurrent deferred revenue.

**growth_noncurrent_deferred_tax_liabilities**: `float | None`<br/>
Growth rate of noncurrent deferred tax liabilities.

**growth_noncurrent_employee_benefit_liabilities**: `float | None`<br/>
Growth rate of noncurrent employee benefit liabilities.

**growth_other_noncurrent_liabilities**: `float | None`<br/>
Growth rate of other noncurrent liabilities.

**growth_other_noncurrent_nonoperating_liabilities**: `float | None`<br/>
Growth rate of other noncurrent nonoperating liabilities.

**growth_total_noncurrent_liabilities**: `float | None`<br/>
Growth rate of total noncurrent liabilities.

**growth_total_liabilities**: `float | None`<br/>
Growth rate of total liabilities.

**growth_commitments_and_contingencies**: `float | None`<br/>
Growth rate of commitments and contingencies.

**growth_temporary_equity**: `float | None`<br/>
Growth rate of temporary equity.

**growth_temporary_equity_parent**: `float | None`<br/>
Growth rate of temporary equity attributable to parent.

**growth_redeemable_noncontrolling_interest**: `float | None`<br/>
Growth rate of redeemable noncontrolling interest.

**growth_redeemable_nci_common**: `float | None`<br/>
Growth rate of redeemable NCI common.

**growth_redeemable_nci_preferred**: `float | None`<br/>
Growth rate of redeemable NCI preferred.

**growth_redeemable_nci_other**: `float | None`<br/>
Growth rate of redeemable NCI other.

**growth_total_preferred_equity**: `float | None`<br/>
Growth rate of total preferred equity.

**growth_common_equity**: `float | None`<br/>
Growth rate of common equity.

**growth_additional_paid_in_capital**: `float | None`<br/>
Growth rate of additional paid-in capital.

**growth_retained_earnings**: `float | None`<br/>
Growth rate of retained earnings.

**growth_treasury_stock**: `float | None`<br/>
Growth rate of treasury stock.

**growth_accumulated_other_comprehensive_income**: `float | None`<br/>
Growth rate of accumulated other comprehensive income.

**growth_other_equity**: `float | None`<br/>
Growth rate of other equity.

**growth_total_common_equity**: `float | None`<br/>
Growth rate of total common equity.

**growth_total_equity**: `float | None`<br/>
Growth rate of total equity.

**growth_noncontrolling_interests**: `float | None`<br/>
Growth rate of noncontrolling interests.

**growth_total_equity_and_noncontrolling_interests**: `float | None`<br/>
Growth rate of total equity and noncontrolling interests.

**growth_total_liabilities_and_equity**: `float | None`<br/>
Growth rate of total liabilities and equity.

</TabItem>
</Tabs>

