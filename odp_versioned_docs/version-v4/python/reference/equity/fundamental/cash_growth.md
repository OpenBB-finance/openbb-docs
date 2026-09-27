---
title: "cash_growth"
description: "Learn about Cash Flow Statement Growth and how to retrieve cash growth  data using the Python function obb.equity.fundamental.cash_growth(). This page provides  details on the function's parameters and the data it returns, including information  on net income, depreciation and amortization, working capital, investments, financing  activities, and more."
keywords:
- Cash Flow Statement Growth
- company cash flow
- cash growth
- Python
- function
- parameters
- symbol
- limit
- provider
- data
- returns
- net income
- depreciation and amortization
- deferred income tax
- stock-based compensation
- working capital
- accounts receivables
- inventory
- accounts payables
- other non-cash items
- net cash provided by operating activities
- investments in property, plant, and equipment
- net acquisitions
- purchases of investments
- sales maturities of investments
- net cash used for investing activities
- debt repayment
- common stock issued
- common stock repurchased
- dividends paid
- net cash used/provided by financing activities
- foreign exchange changes on cash
- net change in cash
- cash at end of period
- cash at beginning of period
- operating cash flow
- capital expenditure
- free cash flow
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/fundamental/cash_growth - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get the growth of a company's cash flow statement items over time.

Examples
--------

```python
from openbb import obb
obb.equity.fundamental.cash_growth(symbol='AAPL')
obb.equity.fundamental.cash_growth(symbol='AAPL', limit=10)
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

**results**: `CashFlowStatementGrowth`

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

**growth_net_income**: `float | None`<br/>
Growth rate of net income.

**growth_depreciation_and_amortization**: `float | None`<br/>
Growth rate of depreciation and amortization.

**growth_deferred_income_tax**: `float | None`<br/>
Growth rate of deferred income tax.

**growth_stock_based_compensation**: `float | None`<br/>
Growth rate of stock-based compensation.

**growth_change_in_working_capital**: `float | None`<br/>
Growth rate of change in working capital.

**growth_account_receivables**: `float | None`<br/>
Growth rate of accounts receivables.

**growth_inventory**: `float | None`<br/>
Growth rate of inventory.

**growth_account_payable**: `float | None`<br/>
Growth rate of account payable.

**growth_other_working_capital**: `float | None`<br/>
Growth rate of other working capital.

**growth_other_non_cash_items**: `float | None`<br/>
Growth rate of other non-cash items.

**growth_net_cash_from_operating_activities**: `float | None`<br/>
Growth rate of net cash provided by operating activities.

**growth_purchase_of_property_plant_and_equipment**: `float | None`<br/>
Growth rate of investments in property, plant, and equipment.

**growth_acquisitions**: `float | None`<br/>
Growth rate of net acquisitions.

**growth_purchase_of_investment_securities**: `float | None`<br/>
Growth rate of purchases of investments.

**growth_sale_and_maturity_of_investments**: `float | None`<br/>
Growth rate of sales maturities of investments.

**growth_other_investing_activities**: `float | None`<br/>
Growth rate of other investing activities.

**growth_net_cash_from_investing_activities**: `float | None`<br/>
Growth rate of net cash used for investing activities.

**growth_short_term_net_debt_issuance**: `float | None`<br/>
Growth rate of short term net debt issuance.

**growth_long_term_net_debt_issuance**: `float | None`<br/>
Growth rate of long term net debt issuance.

**growth_net_debt_issuance**: `float | None`<br/>
Growth rate of net debt issuance.

**growth_repayment_of_debt**: `float | None`<br/>
Growth rate of debt repayment.

**growth_common_equity_issuance**: `float | None`<br/>
Growth rate of common equity issued.

**growth_common_equity_repurchased**: `float | None`<br/>
Growth rate of common equity repurchased.

**growth_net_equity_issuance**: `float | None`<br/>
Growth rate of net equity issuance.

**growth_dividends_paid**: `float | None`<br/>
Growth rate of dividends paid.

**growth_preferred_dividends_paid**: `float | None`<br/>
Growth rate of preferred dividends paid.

**growth_other_financing_activities**: `float | None`<br/>
Growth rate of other financing activities.

**growth_net_cash_from_financing_activities**: `float | None`<br/>
Growth rate of net cash used/provided by financing activities.

**growth_effect_of_exchange_rate_changes_on_cash**: `float | None`<br/>
Growth rate of the effect of foreign exchange changes on cash.

**growth_net_change_in_cash_and_equivalents**: `float | None`<br/>
Growth rate of net change in cash.

**growth_cash_at_beginning_of_period**: `float | None`<br/>
Growth rate of cash at the beginning of the period.

**growth_cash_at_end_of_period**: `float | None`<br/>
Growth rate of cash at the end of the period.

**growth_operating_cash_flow**: `float | None`<br/>
Growth rate of operating cash flow.

**growth_capital_expenditure**: `float | None`<br/>
Growth rate of capital expenditure.

**growth_income_taxes_paid**: `float | None`<br/>
Growth rate of income taxes paid.

**growth_interest_paid**: `float | None`<br/>
Growth rate of interest paid.

**growth_free_cash_flow**: `float | None`<br/>
Growth rate of free cash flow.

</TabItem>
<TabItem value='sec' label='sec'>

**period_ending**: `date`<br/>
The end date of the reporting period.

**fiscal_period**: `str | None`<br/>
The fiscal period of the report.

**fiscal_year**: `int | None`<br/>
The fiscal year of the fiscal period.

**growth_net_income**: `float | None`<br/>
Growth rate of net income.

**growth_net_income_discontinued**: `float | None`<br/>
Growth rate of net income from discontinued operations.

**growth_net_income_continuing**: `float | None`<br/>
Growth rate of net income from continuing operations.

**growth_provision_for_loan_losses**: `float | None`<br/>
Growth rate of provision for loan losses.

**growth_depreciation_expense**: `float | None`<br/>
Growth rate of depreciation expense.

**growth_amortization_expense**: `float | None`<br/>
Growth rate of amortization expense.

**growth_depreciation_and_amortization**: `float | None`<br/>
Growth rate of depreciation and amortization.

**growth_stock_based_compensation**: `float | None`<br/>
Growth rate of stock-based compensation.

**growth_deferred_income_tax**: `float | None`<br/>
Growth rate of deferred income tax.

**growth_gain_loss_on_investments**: `float | None`<br/>
Growth rate of gain/loss on investments.

**growth_gain_loss_on_sale_of_assets**: `float | None`<br/>
Growth rate of gain/loss on sale of assets.

**growth_income_loss_from_equity_method_investments**: `float | None`<br/>
Growth rate of income/loss from equity method investments.

**growth_asset_impairment_charges**: `float | None`<br/>
Growth rate of asset impairment charges.

**growth_noncash_adjustments_to_net_income**: `float | None`<br/>
Growth rate of noncash adjustments to net income.

**growth_other_operating_activities**: `float | None`<br/>
Growth rate of other operating activities.

**growth_change_in_insurance_reserves**: `float | None`<br/>
Growth rate of change in insurance reserves.

**growth_change_in_accounts_receivable**: `float | None`<br/>
Growth rate of change in accounts receivable.

**growth_change_in_nontrade_receivables**: `float | None`<br/>
Growth rate of change in nontrade receivables.

**growth_change_in_inventories**: `float | None`<br/>
Growth rate of change in inventories.

**growth_change_in_accounts_payable**: `float | None`<br/>
Growth rate of change in accounts payable.

**growth_change_in_other_operating_assets_and_liabilities**: `float | None`<br/>
Growth rate of change in other operating assets and liabilities.

**growth_increase_decrease_in_operating_capital**: `float | None`<br/>
Growth rate of increase/decrease in operating capital.

**growth_net_cash_from_continuing_operating_activities**: `float | None`<br/>
Growth rate of net cash from continuing operating activities.

**growth_net_cash_from_discontinued_operating_activities**: `float | None`<br/>
Growth rate of net cash from discontinued operating activities.

**growth_net_cash_from_operating_activities**: `float | None`<br/>
Growth rate of net cash from operating activities.

**growth_purchase_of_plant_property_and_equipment**: `float | None`<br/>
Growth rate of purchase of plant, property, and equipment.

**growth_acquisitions**: `float | None`<br/>
Growth rate of acquisitions.

**growth_purchase_of_investments**: `float | None`<br/>
Growth rate of purchase of investments.

**growth_purchase_of_held_to_maturity_investments**: `float | None`<br/>
Growth rate of purchase of held-to-maturity investments.

**growth_sale_of_plant_property_and_equipment**: `float | None`<br/>
Growth rate of sale of plant, property, and equipment.

**growth_sale_of_productive_assets**: `float | None`<br/>
Growth rate of sale of productive assets.

**growth_divestitures**: `float | None`<br/>
Growth rate of divestitures.

**growth_sale_of_investments**: `float | None`<br/>
Growth rate of sale of investments.

**growth_maturity_of_investments**: `float | None`<br/>
Growth rate of maturity of investments.

**growth_net_increase_in_fed_funds_sold**: `float | None`<br/>
Growth rate of net increase in federal funds sold.

**growth_loans_held_for_sale_net**: `float | None`<br/>
Growth rate of loans held for sale, net.

**growth_other_investing_activities_net**: `float | None`<br/>
Growth rate of other investing activities, net.

**growth_net_cash_from_continuing_investing_activities**: `float | None`<br/>
Growth rate of net cash from continuing investing activities.

**growth_net_cash_from_discontinued_investing_activities**: `float | None`<br/>
Growth rate of net cash from discontinued investing activities.

**growth_net_cash_from_investing_activities**: `float | None`<br/>
Growth rate of net cash from investing activities.

**growth_repayment_of_debt**: `float | None`<br/>
Growth rate of repayment of debt.

**growth_repurchase_of_preferred_equity**: `float | None`<br/>
Growth rate of repurchase of preferred equity.

**growth_repurchase_of_common_equity**: `float | None`<br/>
Growth rate of repurchase of common equity.

**growth_payment_of_dividends**: `float | None`<br/>
Growth rate of payment of dividends.

**growth_issuance_of_debt**: `float | None`<br/>
Growth rate of issuance of debt.

**growth_issuance_of_preferred_equity**: `float | None`<br/>
Growth rate of issuance of preferred equity.

**growth_issuance_of_common_equity**: `float | None`<br/>
Growth rate of issuance of common equity.

**growth_net_change_in_deposits**: `float | None`<br/>
Growth rate of net change in deposits.

**growth_net_short_term_borrowings**: `float | None`<br/>
Growth rate of net short-term borrowings.

**growth_tax_withholding_share_based_compensation**: `float | None`<br/>
Growth rate of tax withholding for share-based compensation.

**growth_other_financing_activities_net**: `float | None`<br/>
Growth rate of other financing activities, net.

**growth_net_cash_from_continuing_financing_activities**: `float | None`<br/>
Growth rate of net cash from continuing financing activities.

**growth_net_cash_from_discontinued_financing_activities**: `float | None`<br/>
Growth rate of net cash from discontinued financing activities.

**growth_net_cash_from_financing_activities**: `float | None`<br/>
Growth rate of net cash from financing activities.

**growth_effect_of_exchange_rate_changes**: `float | None`<br/>
Growth rate of effect of exchange rate changes.

**growth_net_cash_from_discontinued_operations**: `float | None`<br/>
Growth rate of net cash from discontinued operations.

**growth_other_net_changes_in_cash**: `float | None`<br/>
Growth rate of other net changes in cash.

**growth_net_change_in_cash**: `float | None`<br/>
Growth rate of net change in cash.

**growth_cash_at_beginning_of_period**: `float | None`<br/>
Growth rate of cash at beginning of period.

**growth_cash_at_end_of_period**: `float | None`<br/>
Growth rate of cash at end of period.

**growth_cash_interest_paid**: `float | None`<br/>
Growth rate of cash interest paid.

**growth_cash_interest_received**: `float | None`<br/>
Growth rate of cash interest received.

**growth_cash_income_taxes_paid**: `float | None`<br/>
Growth rate of cash income taxes paid.

</TabItem>
</Tabs>

