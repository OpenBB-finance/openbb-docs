---
title: "income_growth"
description: "Explore the growth of a company's income statement with the Python function  obb.equity.fundamental.income_growth. Retrieve data for symbols, specify the limit,  period, and provider, and get detailed information on various aspects of the income  statement growth."
keywords:
- income statement growth
- company income statement
- python obb.equity.fundamental.income_growth
- symbol
- limit
- period
- provider
- data entries
- time period
- provider name
- warnings
- chart object
- metadata
- symbol data
- date
- growth revenue
- cost of goods sold
- gross profit
- gross profit ratio
- research and development expenses
- general and administrative expenses
- selling and marketing expenses
- operating expenses
- total costs and expenses
- interest expenses
- depreciation and amortization expenses
- ebitda
- ebitda ratio
- operating income
- operating income ratio
- total other income expenses net
- income before tax
- income tax expenses
- net income
- eps
- eps diluted
- weighted average shares outstanding
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/fundamental/income_growth - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get the growth of a company's income statement items over time.

Examples
--------

```python
from openbb import obb
obb.equity.fundamental.income_growth(symbol='AAPL')
obb.equity.fundamental.income_growth(symbol='AAPL', limit=10, period='annual')
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
The number of data entries to return.

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
Time period of the data to return.

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

**results**: `IncomeStatementGrowth`

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

**growth_revenue**: `float | None`<br/>
Growth rate of total revenue.

**growth_cost_of_revenue**: `float | None`<br/>
Growth rate of cost of goods sold.

**growth_gross_profit**: `float | None`<br/>
Growth rate of gross profit.

**growth_gross_profit_margin**: `float | None`<br/>
Growth rate of gross profit as a percentage of revenue.

**growth_general_and_admin_expense**: `float | None`<br/>
Growth rate of general and administrative expenses.

**growth_research_and_development_expense**: `float | None`<br/>
Growth rate of expenses on research and development.

**growth_selling_and_marketing_expense**: `float | None`<br/>
Growth rate of expenses on selling and marketing activities.

**growth_other_expenses**: `float | None`<br/>
Growth rate of other operating expenses.

**growth_operating_expenses**: `float | None`<br/>
Growth rate of total operating expenses.

**growth_cost_and_expenses**: `float | None`<br/>
Growth rate of total costs and expenses.

**growth_depreciation_and_amortization**: `float | None`<br/>
Growth rate of depreciation and amortization expenses.

**growth_interest_income**: `float | None`<br/>
Growth rate of interest income.

**growth_interest_expense**: `float | None`<br/>
Growth rate of interest expenses.

**growth_net_interest_income**: `float | None`<br/>
Growth rate of net interest income.

**growth_ebit**: `float | None`<br/>
Growth rate of Earnings Before Interest and Taxes (EBIT).

**growth_ebitda**: `float | None`<br/>
Growth rate of Earnings Before Interest, Taxes, Depreciation, and Amortization.

**growth_operating_income**: `float | None`<br/>
Growth rate of operating income.

**growth_non_operating_income_excluding_interest**: `float | None`<br/>
Growth rate of non-operating income excluding interest.

**growth_total_other_income_expenses_net**: `float | None`<br/>
Growth rate of net total other income and expenses.

**growth_other_adjustments_to_net_income**: `float | None`<br/>
Growth rate of other adjustments to net income.

**growth_net_income_deductions**: `float | None`<br/>
Growth rate of net income deductions.

**growth_income_before_tax**: `float | None`<br/>
Growth rate of income before taxes.

**growth_income_tax_expense**: `float | None`<br/>
Growth rate of income tax expenses.

**growth_net_income_from_continuing_operations**: `float | None`<br/>
Growth rate of net income from continuing operations.

**growth_consolidated_net_income**: `float | None`<br/>
Growth rate of net income.

**growth_basic_earings_per_share**: `float | None`<br/>
Growth rate of Earnings Per Share (EPS).

**growth_diluted_earnings_per_share**: `float | None`<br/>
Growth rate of diluted Earnings Per Share (EPS).

**growth_weighted_average_basic_shares_outstanding**: `float | None`<br/>
Growth rate of weighted average shares outstanding.

**growth_weighted_average_diluted_shares_outstanding**: `float | None`<br/>
Growth rate of diluted weighted average shares outstanding.

</TabItem>
<TabItem value='sec' label='sec'>

**period_ending**: `date`<br/>
The end date of the reporting period.

**fiscal_period**: `str | None`<br/>
The fiscal period of the report.

**fiscal_year**: `int | None`<br/>
The fiscal year of the fiscal period.

**growth_operating_revenue**: `float | None`<br/>
Growth rate of operating revenue.

**growth_other_revenue**: `float | None`<br/>
Growth rate of other revenue.

**growth_total_revenue**: `float | None`<br/>
Growth rate of total revenue.

**growth_operating_cost_of_revenue**: `float | None`<br/>
Growth rate of operating cost of revenue.

**growth_other_cost_of_revenue**: `float | None`<br/>
Growth rate of other cost of revenue.

**growth_total_cost_of_revenue**: `float | None`<br/>
Growth rate of total cost of revenue.

**growth_excise_and_sales_taxes**: `float | None`<br/>
Growth rate of excise and sales taxes.

**growth_total_gross_profit**: `float | None`<br/>
Growth rate of total gross profit.

**growth_sga_expense**: `float | None`<br/>
Growth rate of selling, general, and administrative expense.

**growth_rd_expense**: `float | None`<br/>
Growth rate of research and development expense.

**growth_exploration_expense**: `float | None`<br/>
Growth rate of exploration expense.

**growth_depreciation_expense**: `float | None`<br/>
Growth rate of depreciation expense.

**growth_amortization_expense**: `float | None`<br/>
Growth rate of amortization expense.

**growth_depreciation_and_amortization**: `float | None`<br/>
Growth rate of depreciation and amortization.

**growth_depletion_expense**: `float | None`<br/>
Growth rate of depletion expense.

**growth_other_operating_expenses**: `float | None`<br/>
Growth rate of other operating expenses.

**growth_impairment_expense**: `float | None`<br/>
Growth rate of impairment expense.

**growth_restructuring_charge**: `float | None`<br/>
Growth rate of restructuring charge.

**growth_other_special_charges**: `float | None`<br/>
Growth rate of other special charges.

**growth_total_operating_expenses**: `float | None`<br/>
Growth rate of total operating expenses.

**growth_costs_and_expenses**: `float | None`<br/>
Growth rate of costs and expenses.

**growth_total_operating_income**: `float | None`<br/>
Growth rate of total operating income.

**growth_loans_and_lease_interest_income**: `float | None`<br/>
Growth rate of loans and lease interest income.

**growth_investment_securities_interest_income**: `float | None`<br/>
Growth rate of investment securities interest income.

**growth_deposits_interest_income**: `float | None`<br/>
Growth rate of deposits interest income.

**growth_fed_funds_and_repo_interest_income**: `float | None`<br/>
Growth rate of federal funds and repo interest income.

**growth_trading_account_interest_income**: `float | None`<br/>
Growth rate of trading account interest income.

**growth_other_interest_income**: `float | None`<br/>
Growth rate of other interest income.

**growth_total_interest_income**: `float | None`<br/>
Growth rate of total interest income.

**growth_deposits_interest_expense**: `float | None`<br/>
Growth rate of deposits interest expense.

**growth_short_term_borrowing_interest_expense**: `float | None`<br/>
Growth rate of short-term borrowing interest expense.

**growth_long_term_debt_interest_expense**: `float | None`<br/>
Growth rate of long-term debt interest expense.

**growth_fed_funds_and_repo_interest_expense**: `float | None`<br/>
Growth rate of federal funds and repo interest expense.

**growth_capitalized_lease_obligation_interest_expense**: `float | None`<br/>
Growth rate of capitalized lease obligation interest expense.

**growth_other_interest_expense**: `float | None`<br/>
Growth rate of other interest expense.

**growth_total_interest_expense**: `float | None`<br/>
Growth rate of total interest expense.

**growth_net_interest_income**: `float | None`<br/>
Growth rate of net interest income.

**growth_revenues_excl_interest_dividends**: `float | None`<br/>
Growth rate of revenues excluding interest and dividends.

**growth_trust_fee_income**: `float | None`<br/>
Growth rate of trust fee income.

**growth_service_charges_on_deposits_income**: `float | None`<br/>
Growth rate of service charges on deposit accounts.

**growth_other_service_charge_income**: `float | None`<br/>
Growth rate of other service charge income.

**growth_net_realized_capital_gains**: `float | None`<br/>
Growth rate of net realized and unrealized capital gains on investments.

**growth_premiums_earned**: `float | None`<br/>
Growth rate of premiums earned.

**growth_investment_banking_income**: `float | None`<br/>
Growth rate of investment banking income.

**growth_other_noninterest_income**: `float | None`<br/>
Growth rate of other noninterest income.

**growth_total_noninterest_income**: `float | None`<br/>
Growth rate of total noninterest income.

**growth_provision_for_credit_losses**: `float | None`<br/>
Growth rate of provision for credit losses.

**growth_net_interest_income_after_provision**: `float | None`<br/>
Growth rate of net interest income after provision.

**growth_benefits_costs_expenses**: `float | None`<br/>
Growth rate of benefits, costs, and expenses.

**growth_current_and_future_benefits**: `float | None`<br/>
Growth rate of current and future benefits.

**growth_salaries_and_employee_benefits_expense**: `float | None`<br/>
Growth rate of salaries and employee benefits expense.

**growth_net_occupancy_equipment_expense**: `float | None`<br/>
Growth rate of net occupancy equipment expense.

**growth_marketing_expense**: `float | None`<br/>
Growth rate of marketing expense.

**growth_property_liability_insurance_claims**: `float | None`<br/>
Growth rate of property liability insurance claims.

**growth_policy_acquisition_costs**: `float | None`<br/>
Growth rate of policy acquisition costs.

**growth_amortization_of_deferred_policy_acquisition_costs**: `float | None`<br/>
Growth rate of amortization of deferred policy acquisition costs.

**growth_total_noninterest_expense**: `float | None`<br/>
Growth rate of total noninterest expense.

**growth_non_operating_income**: `float | None`<br/>
Growth rate of non-operating income.

**growth_other_income**: `float | None`<br/>
Growth rate of other income.

**growth_other_gains**: `float | None`<br/>
Growth rate of other gains.

**growth_total_other_income**: `float | None`<br/>
Growth rate of total other income.

**growth_total_pretax_income**: `float | None`<br/>
Growth rate of total pretax income.

**growth_income_tax_expense**: `float | None`<br/>
Growth rate of income tax expense.

**growth_income_tax_current**: `float | None`<br/>
Growth rate of current income tax.

**growth_income_tax_deferred**: `float | None`<br/>
Growth rate of deferred income tax.

**growth_income_before_equity_method**: `float | None`<br/>
Growth rate of income before equity method.

**growth_equity_method_investments**: `float | None`<br/>
Growth rate of equity method investments.

**growth_net_income_continuing**: `float | None`<br/>
Growth rate of net income from continuing operations.

**growth_net_income_discontinued**: `float | None`<br/>
Growth rate of net income from discontinued operations.

**growth_extraordinary_income**: `float | None`<br/>
Growth rate of extraordinary income.

**growth_other_adjustments_to_consolidated_net_income**: `float | None`<br/>
Growth rate of other adjustments to consolidated net income.

**growth_gain_on_sale_properties**: `float | None`<br/>
Growth rate of gain on sale of properties.

**growth_gain_loss_disposition_subsidiary**: `float | None`<br/>
Growth rate of gain/loss on disposition of subsidiary.

**growth_net_income**: `float | None`<br/>
Growth rate of net income.

**growth_preferred_dividends**: `float | None`<br/>
Growth rate of preferred dividends.

**growth_net_income_nci_redeemable**: `float | None`<br/>
Growth rate of net income NCI redeemable.

**growth_net_income_nci_nonredeemable**: `float | None`<br/>
Growth rate of net income NCI nonredeemable.

**growth_net_income_to_noncontrolling_interest**: `float | None`<br/>
Growth rate of net income to noncontrolling interest.

**growth_other_adjustments_to_net_income_to_common**: `float | None`<br/>
Growth rate of other adjustments to net income to common.

**growth_net_income_to_common**: `float | None`<br/>
Growth rate of net income to common.

**growth_weighted_ave_basic_shares_os**: `float | None`<br/>
Growth rate of weighted average basic shares outstanding.

**growth_basic_eps**: `float | None`<br/>
Growth rate of basic earnings per share.

**growth_weighted_ave_diluted_shares_os**: `float | None`<br/>
Growth rate of weighted average diluted shares outstanding.

**growth_diluted_eps**: `float | None`<br/>
Growth rate of diluted earnings per share.

**growth_weighted_ave_basic_diluted_shares_os**: `float | None`<br/>
Growth rate of weighted average basic/diluted shares outstanding.

**growth_basic_diluted_eps**: `float | None`<br/>
Growth rate of basic/diluted earnings per share.

**growth_cash_dividends_per_share**: `float | None`<br/>
Growth rate of cash dividends per share.

**growth_other_comprehensive_income_parent**: `float | None`<br/>
Growth rate of other comprehensive income attributable to parent.

**growth_comprehensive_income_parent**: `float | None`<br/>
Growth rate of comprehensive income attributable to parent.

**growth_other_comprehensive_income_nci**: `float | None`<br/>
Growth rate of other comprehensive income attributable to NCI.

**growth_comprehensive_income_nci**: `float | None`<br/>
Growth rate of comprehensive income attributable to NCI.

**growth_comprehensive_income**: `float | None`<br/>
Growth rate of comprehensive income.

</TabItem>
</Tabs>

