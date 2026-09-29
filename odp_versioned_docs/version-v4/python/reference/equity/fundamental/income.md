---
title: "income"
description: "Get income statement and financial performance data for a company. Parameters  include symbol, period, limit, provider, and more. Data includes revenue, gross  profit, operating expenses, net income, and more."
keywords:
- income statement
- financial performance
- get income data
- period
- limit
- provider
- symbol
- cik
- filing date
- period of report date
- include sources
- order
- sort
- revenue
- cost of revenue
- gross profit
- cost and expenses
- research and development expenses
- general and administrative expenses
- selling and marketing expenses
- other expenses
- operating expenses
- depreciation and amortization
- ebitda
- operating income
- interest income
- interest expense
- income before tax
- income tax expense
- net income
- eps
- weighted average shares outstanding
- link
- reported currency
- filling date
- accepted date
- calendar year
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/fundamental/income - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get the income statement for a given company.

Examples
--------

```python
from openbb import obb
obb.equity.fundamental.income(symbol='AAPL')
obb.equity.fundamental.income(symbol='AAPL', period='annual', limit=5)
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

**period**: `Literal['q1', 'q2', 'q3', 'q4', 'fy', 'ttm', 'annual', 'quarter'] | None`<br/>
*Default:* annual<br/>
Time period of the data to return.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str`<br/>
Symbol to get data for.

**limit**: `int | None`<br/>
The number of data entries to return.

**period**: `Literal['annual', 'quarter', 'ttm', 'ytd'] | None`<br/>
*Default:* annual<br/>
Time period of the data to return.

**fiscal_year**: `int | None`<br/>
The specific fiscal year.  Reports do not go beyond 2008.

</TabItem>
<TabItem value='sec' label='sec'>

**symbol**: `str`<br/>
Symbol to get data for.

**limit**: `int | None`<br/>
The number of data entries to return.

**period**: `Literal['annual', 'quarterly', 'ttm'] | None`<br/>
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
<TabItem value='yfinance' label='yfinance'>

**symbol**: `str`<br/>
Symbol to get data for.

**limit**: `int | None`<br/>
*Default:* 5<br/>
The number of data entries to return.

**period**: `Literal['annual', 'quarter'] | None`<br/>
*Default:* annual<br/>
Time period of the data to return.

</TabItem>
</Tabs>

---

## Returns

**results**: `IncomeStatement`

Serializable results.

**provider**: `Optional[Literal['fmp', 'intrinio', 'sec', 'yfinance']]`

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

**filing_date**: `date | None`<br/>
The date when the filing was made.

**accepted_date**: `datetime | None`<br/>
The date and time when the filing was accepted.

**cik**: `str | None`<br/>
The Central Index Key (CIK) assigned by the SEC, if applicable.

**symbol**: `str | None`<br/>
The stock ticker symbol.

**reported_currency**: `str | None`<br/>
The currency in which the balance sheet was reported.

**revenue**: `int | None`<br/>
Total revenue.

**cost_of_revenue**: `int | None`<br/>
Cost of revenue.

**gross_profit**: `int | None`<br/>
Gross profit.

**general_and_admin_expense**: `int | None`<br/>
General and administrative expenses.

**research_and_development_expense**: `int | None`<br/>
Research and development expenses.

**selling_and_marketing_expense**: `int | None`<br/>
Selling and marketing expenses.

**selling_general_and_admin_expense**: `int | None`<br/>
Selling, general and administrative expenses.

**other_expenses**: `int | None`<br/>
Other expenses.

**total_operating_expenses**: `int | None`<br/>
Total operating expenses.

**cost_and_expenses**: `int | None`<br/>
Cost and expenses.

**interest_income**: `int | None`<br/>
Interest income.

**total_interest_expense**: `int | None`<br/>
Total interest expenses.

**net_interest_income**: `int | None`<br/>
Net interest income.

**depreciation_and_amortization**: `int | None`<br/>
Depreciation and amortization.

**ebit**: `int | None`<br/>
Earnings before interest and taxes (EBIT).

**ebitda**: `int | None`<br/>
EBITDA.

**total_operating_income**: `int | None`<br/>
Total operating income.

**non_operating_income_excluding_interest**: `int | None`<br/>
Non-operating income excluding interest.

**net_income_from_continuing_operations**: `int | None`<br/>
Net income from continuing operations.

**net_income_from_discontinued_operations**: `int | None`<br/>
Net income from discontinued operations.

**total_other_income_expenses**: `int | None`<br/>
Total other income and expenses.

**total_pre_tax_income**: `int | None`<br/>
Total pre-tax income.

**income_tax_expense**: `int | None`<br/>
Income tax expense.

**other_adjustments_to_net_income**: `int | None`<br/>
Other adjustments to net income.

**net_income_deductions**: `int | None`<br/>
Net income deductions.

**consolidated_net_income**: `int | None`<br/>
Consolidated net income.

**bottom_line_net_income**: `int | None`<br/>
Bottom line net income.

**basic_earnings_per_share**: `float | None`<br/>
Basic earnings per share.

**diluted_earnings_per_share**: `float | None`<br/>
Diluted earnings per share.

**weighted_average_basic_shares_outstanding**: `int | None`<br/>
Weighted average basic shares outstanding.

**weighted_average_diluted_shares_outstanding**: `int | None`<br/>
Weighted average diluted shares outstanding.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**period_ending**: `date`<br/>
The end date of the reporting period.

**fiscal_period**: `str | None`<br/>
The fiscal period of the report.

**fiscal_year**: `int | None`<br/>
The fiscal year of the fiscal period.

**reported_currency**: `str | None`<br/>
The currency in which the balance sheet is reported.

**revenue**: `float | None`<br/>
Total revenue

**operating_revenue**: `float | None`<br/>
Total operating revenue

**cost_of_revenue**: `float | None`<br/>
Total cost of revenue

**operating_cost_of_revenue**: `float | None`<br/>
Total operating cost of revenue

**gross_profit**: `float | None`<br/>
Total gross profit

**gross_profit_margin**: `float | None`<br/>
Gross margin ratio.

**provision_for_credit_losses**: `float | None`<br/>
Provision for credit losses

**research_and_development_expense**: `float | None`<br/>
Research and development expense

**selling_general_and_admin_expense**: `float | None`<br/>
Selling, general, and admin expense

**salaries_and_employee_benefits**: `float | None`<br/>
Salaries and employee benefits

**marketing_expense**: `float | None`<br/>
Marketing expense

**net_occupancy_and_equipment_expense**: `float | None`<br/>
Net occupancy and equipment expense

**other_operating_expenses**: `float | None`<br/>
Other operating expenses

**depreciation_expense**: `float | None`<br/>
Depreciation expense

**amortization_expense**: `float | None`<br/>
Amortization expense

**amortization_of_deferred_policy_acquisition_costs**: `float | None`<br/>
Amortization of deferred policy acquisition costs

**exploration_expense**: `float | None`<br/>
Exploration expense

**depletion_expense**: `float | None`<br/>
Depletion expense

**total_operating_expenses**: `float | None`<br/>
Total operating expenses

**total_operating_income**: `float | None`<br/>
Total operating income

**deposits_and_money_market_investments_interest_income**: `float | None`<br/>
Deposits and money market investments interest income

**federal_funds_sold_and_securities_borrowed_interest_income**: `float | None`<br/>
Federal funds sold and securities borrowed interest income

**investment_securities_interest_income**: `float | None`<br/>
Investment securities interest income

**loans_and_leases_interest_income**: `float | None`<br/>
Loans and leases interest income

**trading_account_interest_income**: `float | None`<br/>
Trading account interest income

**other_interest_income**: `float | None`<br/>
Other interest income

**total_non_interest_income**: `float | None`<br/>
Total non-interest income

**interest_and_investment_income**: `float | None`<br/>
Interest and investment income

**short_term_borrowings_interest_expense**: `float | None`<br/>
Short-term borrowings interest expense

**long_term_debt_interest_expense**: `float | None`<br/>
Long-term debt interest expense

**capitalized_lease_obligations_interest_expense**: `float | None`<br/>
Capitalized lease obligations interest expense

**deposits_interest_expense**: `float | None`<br/>
Deposits interest expense

**federal_funds_purchased_and_securities_sold_interest_expense**: `float | None`<br/>
Federal funds purchased and securities sold interest expense

**other_interest_expense**: `float | None`<br/>
Other interest expense

**total_interest_expense**: `float | None`<br/>
Total interest expense

**net_interest_income**: `float | None`<br/>
Net interest income

**other_non_interest_income**: `float | None`<br/>
Other non-interest income

**investment_banking_income**: `float | None`<br/>
Investment banking income

**trust_fees_by_commissions**: `float | None`<br/>
Trust fees by commissions

**premiums_earned**: `float | None`<br/>
Premiums earned

**insurance_policy_acquisition_costs**: `float | None`<br/>
Insurance policy acquisition costs

**current_and_future_benefits**: `float | None`<br/>
Current and future benefits

**property_and_liability_insurance_claims**: `float | None`<br/>
Property and liability insurance claims

**total_non_interest_expense**: `float | None`<br/>
Total non-interest expense

**net_realized_and_unrealized_capital_gains_on_investments**: `float | None`<br/>
Net realized and unrealized capital gains on investments

**other_gains**: `float | None`<br/>
Other gains

**non_operating_income**: `float | None`<br/>
Non-operating income

**other_income**: `float | None`<br/>
Other income

**other_revenue**: `float | None`<br/>
Other revenue

**extraordinary_income**: `float | None`<br/>
Extraordinary income

**total_other_income**: `float | None`<br/>
Total other income

**ebitda**: `float | None`<br/>
Earnings Before Interest, Taxes, Depreciation and Amortization.

**ebitda_margin**: `float | None`<br/>
Margin on Earnings Before Interest, Taxes, Depreciation and Amortization.

**total_pre_tax_income**: `float | None`<br/>
Total pre-tax income

**ebit**: `float | None`<br/>
Earnings Before Interest and Taxes.

**pre_tax_income_margin**: `float | None`<br/>
Pre-Tax Income Margin.

**income_tax_expense**: `float | None`<br/>
Income tax expense

**impairment_charge**: `float | None`<br/>
Impairment charge

**restructuring_charge**: `float | None`<br/>
Restructuring charge

**service_charges_on_deposit_accounts**: `float | None`<br/>
Service charges on deposit accounts

**other_service_charges**: `float | None`<br/>
Other service charges

**other_special_charges**: `float | None`<br/>
Other special charges

**other_cost_of_revenue**: `float | None`<br/>
Other cost of revenue

**net_income_continuing_operations**: `float | None`<br/>
Net income (continuing operations)

**net_income_discontinued_operations**: `float | None`<br/>
Net income (discontinued operations)

**consolidated_net_income**: `float | None`<br/>
Consolidated net income

**other_adjustments_to_consolidated_net_income**: `float | None`<br/>
Other adjustments to consolidated net income

**other_adjustment_to_net_income_attributable_to_common_shareholders**: `float | None`<br/>
Other adjustment to net income attributable to common shareholders

**net_income_attributable_to_noncontrolling_interest**: `float | None`<br/>
Net income attributable to noncontrolling interest

**net_income_attributable_to_common_shareholders**: `float | None`<br/>
Net income attributable to common shareholders

**basic_earnings_per_share**: `float | None`<br/>
Basic earnings per share

**diluted_earnings_per_share**: `float | None`<br/>
Diluted earnings per share

**basic_and_diluted_earnings_per_share**: `float | None`<br/>
Basic and diluted earnings per share

**cash_dividends_to_common_per_share**: `float | None`<br/>
Cash dividends to common per share

**preferred_stock_dividends_declared**: `float | None`<br/>
Preferred stock dividends declared

**weighted_average_basic_shares_outstanding**: `float | None`<br/>
Weighted average basic shares outstanding

**weighted_average_diluted_shares_outstanding**: `float | None`<br/>
Weighted average diluted shares outstanding

**weighted_average_basic_and_diluted_shares_outstanding**: `float | None`<br/>
Weighted average basic and diluted shares outstanding

</TabItem>
<TabItem value='sec' label='sec'>

**period_ending**: `date`<br/>
The end date of the reporting period.

**fiscal_period**: `str | None`<br/>
The fiscal period of the report.

**fiscal_year**: `int | None`<br/>
The fiscal year of the fiscal period.

**reported_currency**: `str | None`<br/>
The currency in which the income statement is reported.

**operating_revenue**: `float | None`<br/>
Amount of revenue recognized from goods sold, services rendered, insurance premiums, or other activities that constitute an earning process. Includes, but is not limited to, investment and interest income before deduction of interest expense when recognized as a component of revenue, and sales and trading gain (loss).

**other_revenue**: `float | None`<br/>
Revenues from the sale of other goods or rendering of other services, not elsewhere specified in the taxonomy; net of (reduced by) sales adjustments, returns, allowances, and discounts.

**total_revenue**: `float | None`<br/>
Amount of revenue recognized from goods sold, services rendered, insurance premiums, or other activities that constitute an earning process. Includes, but is not limited to, investment and interest income before deduction of interest expense when recognized as a component of revenue, and sales and trading gain (loss).

**operating_cost_of_revenue**: `float | None`<br/>
The aggregate costs related to goods produced and sold and services rendered by an entity during the reporting period. This excludes costs incurred during the reporting period related to financial services rendered and other revenue generating activities.

**other_cost_of_revenue**: `float | None`<br/>
Other costs incurred during the reporting period related to other revenue generating activities.

**total_cost_of_revenue**: `float | None`<br/>
The aggregate costs related to goods produced and sold and services rendered by an entity during the reporting period. This excludes costs incurred during the reporting period related to financial services rendered and other revenue generating activities.

**excise_and_sales_taxes**: `float | None`<br/>
Amount of excise and sales taxes included in revenue.

**total_gross_profit**: `float | None`<br/>
Aggregate revenue less cost of goods and services sold or operating expenses directly attributable to the revenue generation activity.

**sga_expense**: `float | None`<br/>
The aggregate total costs related to selling a firm's product and services, as well as all other general and administrative expenses. Direct selling expenses (for example, credit, warranty, and advertising) are expenses that can be directly linked to the sale of specific products. Indirect selling expenses are expenses that cannot be directly linked to the sale of specific products, for example telephone expenses, Internet, and postal charges. General and administrative expenses include salaries of non-sales personnel, rent, utilities, communication, etc.

**rd_expense**: `float | None`<br/>
Amount of expense for research and development. Includes, but is not limited to, cost for computer software product to be sold, leased, or otherwise marketed and writeoff of research and development assets acquired in transaction other than business combination or joint venture formation or both. Excludes write-down of intangible asset acquired in business combination or from joint venture formation or both, used in research and development activity.

**exploration_expense**: `float | None`<br/>
Exploration expenses (including prospecting) related to oil and gas producing entities and would be included in operating expenses of that entity. Costs incurred in identifying areas that may warrant examination and in examining specific areas that are considered to have prospects of containing oil and gas reserves, including costs of drilling exploratory wells and exploratory-type stratigraphic test wells. Exploration costs may be incurred both before acquiring the related property (sometimes referred to in part as prospecting costs) and after acquiring the property. Principal types of exploration costs, which include depreciation and applicable operating costs of support equipment and facilities and other costs of exploration activities, are: (i) Costs of topographical, geographical and geophysical studies, rights of access to properties to conduct those studies, and salaries and other expenses of geologists, geophysical crews, and others conducting those studies. Collectively, these are sometimes referred to as geological and geophysical or 'G&G' costs. (ii) Costs of carrying and retaining undeveloped properties, such as delay rentals, ad valorem taxes on properties, legal costs for title defense, and the maintenance of land and lease records. (iii) Dry hole contributions and bottom hole contributions. (iv) Costs of drilling and equipping exploratory wells. (v) Costs of drilling exploratory-type stratigraphic test wells.

**depreciation_expense**: `float | None`<br/>
The current period expense charged against earnings on long-lived, physical assets not used in production, and which are not intended for resale, to allocate or recognize the cost of such assets over their useful lives; or to record the reduction in book value of an intangible asset over the benefit period of such asset; or to reflect consumption during the period of an asset that is not used in production.

**amortization_expense**: `float | None`<br/>
Amount of amortization expense for finite-lived intangible asset. Excludes goodwill and capitalized cost for software to be sold, leased, or marketed.

**depreciation_and_amortization**: `float | None`<br/>
The aggregate expense recognized in the current period that allocates the cost of tangible and intangible assets over their useful lives.

**depletion_expense**: `float | None`<br/>
The noncash expense charged against earnings to recognize the consumption of natural resources.

**other_operating_expenses**: `float | None`<br/>
The net amount of other operating income and expenses, the components of which are not separately disclosed on the income statement, from items that are associated with the entity's normal revenue producing operations.

**impairment_expense**: `float | None`<br/>
Amount of impairment loss for asset. Includes, but is not limited to, tangible and intangible assets and goodwill.

**restructuring_charge**: `float | None`<br/>
Amount of expenses associated with exit or disposal activities pursuant to an authorized plan. Excludes expenses related to a discontinued operation or an asset retirement obligation.

**other_special_charges**: `float | None`<br/>
Amount of restructuring charges, remediation cost, and asset impairment loss.

**total_operating_expenses**: `float | None`<br/>
Generally recurring costs associated with normal operations except for the portion of these expenses which can be clearly related to production and included in cost of sales or services. Includes selling, general and administrative expense.

**costs_and_expenses**: `float | None`<br/>
Total costs of sales and operating expenses for the period.

**total_operating_income**: `float | None`<br/>
The net result for the period of deducting operating expenses from operating revenues.

**loans_and_lease_interest_income**: `float | None`<br/>
The aggregate interest and fee income generated by: (1) loans the Entity has positive intent and ability to hold for the foreseeable future, or until maturity or payoff, including commercial and consumer loans, whether domestic or foreign, which may consist of: (a) industrial and agricultural; (b) real estate; and (c) real estate construction loans; (d) trade financing; (e) lease financing; (f) home equity lines-of-credit; (g) automobile and other vehicle loans; and (h) credit card and other revolving-type loans and (2) loans and leases held-for-sale which may include mortgage loans, direct financing, and sales-type leases.

**investment_securities_interest_income**: `float | None`<br/>
Amount of operating interest income, including amortization and accretion of premiums and discounts, on securities subject to state, federal and other income tax.

**deposits_interest_income**: `float | None`<br/>
Interest income derived from funds deposited with both domestic and foreign financial institutions including funds in money market and other accounts.

**fed_funds_and_repo_interest_income**: `float | None`<br/>
The aggregate interest income earned from (1) the lending of excess federal funds to another commercial bank requiring such for its legal reserve requirements and (2) securities purchased under agreements to resell.

**trading_account_interest_income**: `float | None`<br/>
Interest and dividend income on securities that are bought and held principally for the purpose of selling them in the near term ('trading securities') and on securities measured at fair value through earnings.

**other_interest_income**: `float | None`<br/>
Amount of interest income earned from interest bearing assets classified as other.

**total_interest_income**: `float | None`<br/>
Amount of operating interest income, including, but not limited to, amortization and accretion of premiums and discounts on securities.

**deposits_interest_expense**: `float | None`<br/>
Aggregate amount of interest expense on all deposits.

**short_term_borrowing_interest_expense**: `float | None`<br/>
The aggregate interest expense incurred on short-term borrowings including commercial paper and Federal funds purchased and securities sold under agreements to repurchase.

**long_term_debt_interest_expense**: `float | None`<br/>
Aggregate amount of interest paid or due on all long-term debt.

**fed_funds_and_repo_interest_expense**: `float | None`<br/>
The aggregate expense incurred on federal funds purchased and securities sold under agreements to repurchase. If amounts recognized as payables under repurchase agreements have been offset against amounts recognized as receivables under reverse repurchase agreements and reported as a net amount on the balance sheet, the income and expense from these agreements may be reported on a net basis.

**capitalized_lease_obligation_interest_expense**: `float | None`<br/>
Amount of interest expense on finance lease liability.

**other_interest_expense**: `float | None`<br/>
Amount of interest expense classified as other.

**total_interest_expense**: `float | None`<br/>
Amount of interest expense classified as operating.

**net_interest_income**: `float | None`<br/>
Amount of interest income (expense) classified as operating.

**revenues_excl_interest_dividends**: `float | None`<br/>
Revenue excluding interest and dividend income (securities firms).

**trust_fee_income**: `float | None`<br/>
Revenue recognized in the period for (1) performance (incentive) fees based on the investment results achieved for management of certain institutional accounts and hedge funds, (2) schedule-based fees earned for management of mutual funds and closed-end funds, based either on average daily net assets or on a combination of the average daily net assets and gross income, and (3) other investment management and advisory fees.

**service_charges_on_deposits_income**: `float | None`<br/>
Includes amounts charged depositors for: (1) maintenance of their accounts (maintenance charges); (2) failure to maintain specified minimum balances on account; (3) exceeding the number of checks or transactions allowed to be processed in a given period; (4) checks drawn on no minimum balance deposit accounts; (5) withdrawals from nontransaction deposit accounts; (6) closing savings accounts before a specified minimum period of time has elapsed; (7) accounts which have remained inactive for extended periods of time or which have become dormant; (8) use of automated teller machines or remote service units; (9) checks drawn against insufficient funds that the bank assesses regardless of whether it decides to pay, return or hold the check; (10) issuing stop payment orders; (11) certifying checks; and (12) accumulating or disbursing funds deposited in IRAs or Keogh Plan accounts when not handled by the bank's trust department. This item does not include penalties assessed on the early withdrawal of time deposits.

**other_service_charge_income**: `float | None`<br/>
Fee and commission revenue earned from sources not otherwise specified in the existing taxonomy.

**net_realized_capital_gains**: `float | None`<br/>
Amount of realized and unrealized gain (loss) on investment.

**premiums_earned**: `float | None`<br/>
Amount, after premiums ceded to other entities and premiums assumed by the entity, of premiums earned.

**investment_banking_income**: `float | None`<br/>
Amount of fees and commissions from banking, advisory, brokerage, and securities underwriting activities. Activities include, but are not limited to, underwriting securities, private placements of securities, investment advisory and management services, merger and acquisition services, sale and servicing of mutual funds, and other related consulting fees.

**other_noninterest_income**: `float | None`<br/>
Represents the total of noninterest income derived from certain activities and assets including (for example): (1) venture capital investments; (2) bank owned life insurance; (3) foreign currency transactions; and (4) mortgage servicing rights.

**total_noninterest_income**: `float | None`<br/>
The total amount of noninterest income which may be derived from: (1) fees and commissions; (2) premiums earned; (3) insurance policy charges; (4) the sale or disposal of assets; and (5) other sources not otherwise specified.

**provision_for_credit_losses**: `float | None`<br/>
Amount of expense related to estimated loss from loan and lease transactions.

**net_interest_income_after_provision**: `float | None`<br/>
Amount of net interest income after provision for credit losses.

**benefits_costs_expenses**: `float | None`<br/>
The total amount of expense recognized during the period for future policy benefits, claims and claims adjustment costs, and for selling, general and administrative costs.

**current_and_future_benefits**: `float | None`<br/>
Amount, after effect of policies assumed or ceded, of expense related to provision for policy benefits and costs incurred for health insurance contracts.

**salaries_and_employee_benefits_expense**: `float | None`<br/>
Amount of expense for salary, wage, profit sharing; incentive and equity-based compensation; and other employee benefit.

**net_occupancy_equipment_expense**: `float | None`<br/>
Amount of net occupancy expense that may include items, such as depreciation of facilities and equipment, lease expenses, property taxes and property and casualty insurance expense.

**marketing_expense**: `float | None`<br/>
The aggregate total amount of expenses directly related to the marketing or selling of products or services.

**property_liability_insurance_claims**: `float | None`<br/>
Amount, after effects of policies assumed or ceded, of expense related to the provision for policy benefits and costs incurred.

**policy_acquisition_costs**: `float | None`<br/>
Amount of deferred policy acquisition cost capitalized on contract remaining in force.

**amortization_of_deferred_policy_acquisition_costs**: `float | None`<br/>
Amount of amortization expense (reversal of expense) for deferred policy acquisition costs.

**total_noninterest_expense**: `float | None`<br/>
Total aggregate amount of all noninterest expense.

**non_operating_income**: `float | None`<br/>
The aggregate amount of income or expense from ancillary business-related activities (that is to say, excluding major activities considered part of the normal operations of the business).

**other_income**: `float | None`<br/>
Amount of income (expense) related to nonoperating activities, classified as other.

**other_gains**: `float | None`<br/>
Amount of realized and unrealized gain (loss) on investment.

**total_other_income**: `float | None`<br/>
The aggregate amount of income or expense from ancillary business-related activities (that is to say, excluding major activities considered part of the normal operations of the business).

**total_pretax_income**: `float | None`<br/>
Amount of income (loss) from continuing operations, including income (loss) from equity method investments, before deduction of income tax expense (benefit), and income (loss) attributable to noncontrolling interest.

**income_tax_expense**: `float | None`<br/>
Amount of current income tax expense (benefit) and deferred income tax expense (benefit) pertaining to continuing operations.

**income_tax_current**: `float | None`<br/>
Amount of current income tax expense (benefit) pertaining to taxable income (loss) from continuing operations.

**income_tax_deferred**: `float | None`<br/>
Amount of deferred income tax expense (benefit) pertaining to income (loss) from continuing operations.

**income_before_equity_method**: `float | None`<br/>
Amount of income/loss from continuing operations before income from equity method investments.

**equity_method_investments**: `float | None`<br/>
Amount of income (loss) for proportionate share of equity method investee's income (loss).

**net_income_continuing**: `float | None`<br/>
Amount after tax of income (loss) from continuing operations including portion attributable to the noncontrolling interest.

**net_income_discontinued**: `float | None`<br/>
Amount after tax of income (loss) from a discontinued operation including the portion attributable to the noncontrolling interest. Includes, but is not limited to, the income (loss) from operations during the phase-out period, gain (loss) on disposal, gain (loss) for reversal of write-down (write-down) to fair value, less cost to sell, and adjustments to a prior period gain (loss) on disposal.

**extraordinary_income**: `float | None`<br/>
Description of the gains (losses), after tax, arising from an event or transaction that is both unusual in nature and infrequent in occurrence when considered in relation to the environment in which the entity operates and which represents the portion assigned to noncontrolling interest, if any. This amount is the income statement amount which is allocable to that ownership interest in subsidiary equity which is not attributable to the parent (noncontrolling interest, minority interest).

**other_adjustments_to_consolidated_net_income**: `float | None`<br/>
Amount after tax and reclassification adjustments of other comprehensive income (loss).

**gain_on_sale_properties**: `float | None`<br/>
Amount of gain (loss) on sale or disposal of property, net of applicable income taxes.

**gain_loss_disposition_subsidiary**: `float | None`<br/>
Gain/loss on sale of stock in subsidiary or equity method investee.

**net_income**: `float | None`<br/>
The consolidated profit or loss for the period, net of income taxes, including the portion attributable to the noncontrolling interest.

**preferred_dividends**: `float | None`<br/>
Amount of paid and unpaid preferred stock dividends declared with the form of settlement in cash, stock and payment-in-kind (PIK).

**net_income_nci_redeemable**: `float | None`<br/>
Amount after tax of income attributable to redeemable noncontrolling interest.

**net_income_nci_nonredeemable**: `float | None`<br/>
Amount after tax of income attributable to nonredeemable noncontrolling interest.

**net_income_to_noncontrolling_interest**: `float | None`<br/>
Amount of Net Income (Loss) attributable to noncontrolling interest.

**other_adjustments_to_net_income_to_common**: `float | None`<br/>
The aggregate value of preferred stock dividends and other adjustments necessary to derive net income apportioned to common stockholders.

**net_income_to_common**: `float | None`<br/>
Amount, after deduction of tax, noncontrolling interests, dividends on preferred stock and participating securities; of income (loss) available to common shareholders.

**weighted_ave_basic_shares_os**: `int | None`<br/>
Number of [basic] shares or units, after adjustment for contingently issuable shares or units and other shares or units not deemed outstanding, determined by relating the portion of time within a reporting period that common shares or units have been outstanding to the total time in that period.

**basic_eps**: `float | None`<br/>
The amount of net income (loss) for the period per each share of common stock or unit outstanding during the reporting period.

**weighted_ave_diluted_shares_os**: `int | None`<br/>
The average number of shares or units issued and outstanding that are used in calculating diluted EPS or earnings per unit (EPU), determined based on the timing of issuance of shares or units in the period.

**diluted_eps**: `float | None`<br/>
The amount of net income (loss) for the period available to each share of common stock or common unit outstanding during the reporting period and to each share or unit that would have been outstanding assuming the issuance of common shares or units for all dilutive potential common shares or units outstanding during the reporting period.

**weighted_ave_basic_diluted_shares_os**: `int | None`<br/>
Average number of shares or units issued and outstanding that are used in calculating basic and diluted earnings per share (EPS).

**basic_diluted_eps**: `float | None`<br/>
The amount of net income or loss for the period per each share in instances when basic and diluted earnings per share are the same amount and reported as a single line item on the face of the financial statements. Basic earnings per share is the amount of net income or loss for the period per each share of common stock or unit outstanding during the reporting period. Diluted earnings per share includes the amount of net income or loss for the period available to each share of common stock or common unit outstanding during the reporting period and to each share or unit that would have been outstanding assuming the issuance of common shares or units for all dilutive potential common shares or units outstanding during the reporting period.

**cash_dividends_per_share**: `float | None`<br/>
Aggregate dividends declared during the period for each share of common stock outstanding.

**other_comprehensive_income_parent**: `float | None`<br/>
Amount after tax and reclassification adjustments of OCI attributable to parent.

**comprehensive_income_parent**: `float | None`<br/>
Amount after tax of increase (decrease) in equity from transactions and other events, attributable to parent.

**other_comprehensive_income_nci**: `float | None`<br/>
Amount after tax and reclassification adjustments of OCI attributable to noncontrolling interests.

**comprehensive_income_nci**: `float | None`<br/>
Amount after tax of increase (decrease) in equity from transactions and other events, attributable to noncontrolling interests.

**comprehensive_income**: `float | None`<br/>
Amount after tax of increase (decrease) in equity from transactions and other events/circumstances from net income and OCI. Includes portion attributable to NCI.

</TabItem>
<TabItem value='yfinance' label='yfinance'>

**period_ending**: `date`<br/>
The end date of the reporting period.

**fiscal_period**: `str | None`<br/>
The fiscal period of the report.

**fiscal_year**: `int | None`<br/>
The fiscal year of the fiscal period.

</TabItem>
</Tabs>

