---
title: "balance"
description: "Learn how to use the balance sheet function in Python to retrieve financial  statement data. This documentation provides details about the function parameters,  return values, and available data types."
keywords:
- balance sheet statement
- balance sheet function
- python function
- financial statement function
- balance sheet data parameters
- balance sheet data returns
- balance sheet data types
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/fundamental/balance - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get the balance sheet for a given company.

Examples
--------

```python
from openbb import obb
obb.equity.fundamental.balance(symbol='AAPL')
obb.equity.fundamental.balance(symbol='AAPL', period='annual', limit=5)
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

**period**: `Literal['annual', 'quarter'] | None`<br/>
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
Time period of the data to return. For balance sheet, TTM is treated as the average of the last 4 quarters.

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

**results**: `BalanceSheet`

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

**cash_and_cash_equivalents**: `int | None`<br/>
Cash and cash equivalents.

**short_term_investments**: `int | None`<br/>
Short term investments.

**cash_and_short_term_investments**: `int | None`<br/>
Cash and short term investments.

**accounts_receivables**: `int | None`<br/>
Accounts receivables.

**other_receivables**: `int | None`<br/>
Other receivables.

**net_receivables**: `int | None`<br/>
Net receivables.

**inventory**: `int | None`<br/>
Inventory.

**other_current_assets**: `int | None`<br/>
Other current assets.

**total_current_assets**: `int | None`<br/>
Total current assets.

**plant_property_equipment_net**: `int | None`<br/>
Plant property equipment net.

**goodwill**: `int | None`<br/>
Goodwill.

**intangible_assets**: `int | None`<br/>
Intangible assets.

**goodwill_and_intangible_assets**: `int | None`<br/>
Goodwill and intangible assets.

**long_term_investments**: `int | None`<br/>
Long term investments.

**tax_assets**: `int | None`<br/>
Tax assets.

**other_non_current_assets**: `int | None`<br/>
Other non current assets.

**non_current_assets**: `int | None`<br/>
Total non current assets.

**other_assets**: `int | None`<br/>
Other assets.

**total_assets**: `int | None`<br/>
Total assets.

**accounts_payable**: `int | None`<br/>
Accounts payable.

**prepaid_expenses**: `int | None`<br/>
Prepaid expenses.

**accrued_expenses**: `int | None`<br/>
Accrued expenses.

**short_term_debt**: `int | None`<br/>
Short term debt.

**tax_payables**: `int | None`<br/>
Tax payables.

**current_deferred_revenue**: `int | None`<br/>
Current deferred revenue.

**other_current_liabilities**: `int | None`<br/>
Other current liabilities.

**other_payables**: `int | None`<br/>
Other payables.

**total_current_liabilities**: `int | None`<br/>
Total current liabilities.

**total_payables**: `int | None`<br/>
Total payables.

**long_term_debt**: `int | None`<br/>
Long term debt.

**deferred_revenue_non_current**: `int | None`<br/>
Non current deferred revenue.

**deferred_tax_liabilities_non_current**: `int | None`<br/>
Deferred tax liabilities non current.

**other_non_current_liabilities**: `int | None`<br/>
Other non current liabilities.

**total_non_current_liabilities**: `int | None`<br/>
Total non current liabilities.

**capital_lease_obligations_current**: `int | None`<br/>
Current capital lease obligations.

**capital_lease_obligations_non_current**: `int | None`<br/>
Non current capital lease obligations.

**capital_lease_obligations**: `int | None`<br/>
Capital lease obligations.

**other_liabilities**: `int | None`<br/>
Other liabilities.

**total_liabilities**: `int | None`<br/>
Total liabilities.

**preferred_stock**: `int | None`<br/>
Preferred stock.

**common_stock**: `int | None`<br/>
Common stock.

**treasury_stock**: `int | None`<br/>
Treasury stock.

**retained_earnings**: `int | None`<br/>
Retained earnings.

**additional_paid_in_capital**: `int | None`<br/>
Additional paid in capital.

**accumulated_other_comprehensive_income**: `int | None`<br/>
Accumulated other comprehensive income (loss).

**other_shareholders_equity**: `int | None`<br/>
Other shareholders equity.

**other_total_shareholders_equity**: `int | None`<br/>
Other total shareholders equity.

**total_common_equity**: `int | None`<br/>
Total common equity.

**total_equity_non_controlling_interests**: `int | None`<br/>
Total equity non controlling interests.

**total_liabilities_and_shareholders_equity**: `int | None`<br/>
Total liabilities and shareholders equity.

**minority_interest**: `int | None`<br/>
Minority interest.

**total_liabilities_and_total_equity**: `int | None`<br/>
Total liabilities and total equity.

**total_investments**: `int | None`<br/>
Total investments.

**total_debt**: `int | None`<br/>
Total debt.

**net_debt**: `int | None`<br/>
Net debt.

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

**cash_and_cash_equivalents**: `float | None`<br/>
Cash and cash equivalents.

**cash_and_due_from_banks**: `float | None`<br/>
Cash and due from banks.

**restricted_cash**: `float | None`<br/>
Restricted cash.

**short_term_investments**: `float | None`<br/>
Short term investments.

**federal_funds_sold**: `float | None`<br/>
Federal funds sold.

**accounts_receivable**: `float | None`<br/>
Accounts receivable.

**note_and_lease_receivable**: `float | None`<br/>
Note and lease receivable. (Vendor non-trade receivables)

**inventories**: `float | None`<br/>
Net Inventories.

**customer_and_other_receivables**: `float | None`<br/>
Customer and other receivables.

**interest_bearing_deposits_at_other_banks**: `float | None`<br/>
Interest bearing deposits at other banks.

**time_deposits_placed_and_other_short_term_investments**: `float | None`<br/>
Time deposits placed and other short term investments.

**trading_account_securities**: `float | None`<br/>
Trading account securities.

**loans_and_leases**: `float | None`<br/>
Loans and leases.

**allowance_for_loan_and_lease_losses**: `float | None`<br/>
Allowance for loan and lease losses.

**current_deferred_refundable_income_taxes**: `float | None`<br/>
Current deferred refundable income taxes.

**other_current_assets**: `float | None`<br/>
Other current assets.

**loans_and_leases_net_of_allowance**: `float | None`<br/>
Loans and leases net of allowance.

**accrued_investment_income**: `float | None`<br/>
Accrued investment income.

**other_current_non_operating_assets**: `float | None`<br/>
Other current non-operating assets.

**loans_held_for_sale**: `float | None`<br/>
Loans held for sale.

**prepaid_expenses**: `float | None`<br/>
Prepaid expenses.

**total_current_assets**: `float | None`<br/>
Total current assets.

**plant_property_equipment_gross**: `float | None`<br/>
Plant property equipment gross.

**accumulated_depreciation**: `float | None`<br/>
Accumulated depreciation.

**premises_and_equipment_net**: `float | None`<br/>
Net premises and equipment.

**plant_property_equipment_net**: `float | None`<br/>
Net plant property equipment.

**long_term_investments**: `float | None`<br/>
Long term investments.

**mortgage_servicing_rights**: `float | None`<br/>
Mortgage servicing rights.

**unearned_premiums_asset**: `float | None`<br/>
Unearned premiums asset.

**non_current_note_lease_receivables**: `float | None`<br/>
Non-current note lease receivables.

**deferred_acquisition_cost**: `float | None`<br/>
Deferred acquisition cost.

**goodwill**: `float | None`<br/>
Goodwill.

**separate_account_business_assets**: `float | None`<br/>
Separate account business assets.

**non_current_deferred_refundable_income_taxes**: `float | None`<br/>
Noncurrent deferred refundable income taxes.

**intangible_assets**: `float | None`<br/>
Intangible assets.

**employee_benefit_assets**: `float | None`<br/>
Employee benefit assets.

**other_assets**: `float | None`<br/>
Other assets.

**other_non_current_operating_assets**: `float | None`<br/>
Other noncurrent operating assets.

**other_non_current_non_operating_assets**: `float | None`<br/>
Other noncurrent non-operating assets.

**interest_bearing_deposits**: `float | None`<br/>
Interest bearing deposits.

**total_non_current_assets**: `float | None`<br/>
Total noncurrent assets.

**total_assets**: `float | None`<br/>
Total assets.

**non_interest_bearing_deposits**: `float | None`<br/>
Non interest bearing deposits.

**federal_funds_purchased_and_securities_sold**: `float | None`<br/>
Federal funds purchased and securities sold.

**bankers_acceptance_outstanding**: `float | None`<br/>
Bankers acceptance outstanding.

**short_term_debt**: `float | None`<br/>
Short term debt.

**accounts_payable**: `float | None`<br/>
Accounts payable.

**current_deferred_revenue**: `float | None`<br/>
Current deferred revenue.

**current_deferred_payable_income_tax_liabilities**: `float | None`<br/>
Current deferred payable income tax liabilities.

**accrued_interest_payable**: `float | None`<br/>
Accrued interest payable.

**accrued_expenses**: `float | None`<br/>
Accrued expenses.

**other_short_term_payables**: `float | None`<br/>
Other short term payables.

**customer_deposits**: `float | None`<br/>
Customer deposits.

**dividends_payable**: `float | None`<br/>
Dividends payable.

**claims_and_claim_expense**: `float | None`<br/>
Claims and claim expense.

**future_policy_benefits**: `float | None`<br/>
Future policy benefits.

**current_employee_benefit_liabilities**: `float | None`<br/>
Current employee benefit liabilities.

**unearned_premiums_liability**: `float | None`<br/>
Unearned premiums liability.

**other_taxes_payable**: `float | None`<br/>
Other taxes payable.

**policy_holder_funds**: `float | None`<br/>
Policy holder funds.

**other_current_liabilities**: `float | None`<br/>
Other current liabilities.

**other_current_non_operating_liabilities**: `float | None`<br/>
Other current non-operating liabilities.

**separate_account_business_liabilities**: `float | None`<br/>
Separate account business liabilities.

**total_current_liabilities**: `float | None`<br/>
Total current liabilities.

**long_term_debt**: `float | None`<br/>
Long term debt.

**other_long_term_liabilities**: `float | None`<br/>
Other long term liabilities.

**non_current_deferred_revenue**: `float | None`<br/>
Non-current deferred revenue.

**non_current_deferred_payable_income_tax_liabilities**: `float | None`<br/>
Non-current deferred payable income tax liabilities.

**non_current_employee_benefit_liabilities**: `float | None`<br/>
Non-current employee benefit liabilities.

**other_non_current_operating_liabilities**: `float | None`<br/>
Other non-current operating liabilities.

**other_non_current_non_operating_liabilities**: `float | None`<br/>
Other non-current, non-operating liabilities.

**total_non_current_liabilities**: `float | None`<br/>
Total non-current liabilities.

**capital_lease_obligations**: `float | None`<br/>
Capital lease obligations.

**asset_retirement_reserve_litigation_obligation**: `float | None`<br/>
Asset retirement reserve litigation obligation.

**total_liabilities**: `float | None`<br/>
Total liabilities.

**commitments_contingencies**: `float | None`<br/>
Commitments contingencies.

**redeemable_non_controlling_interest**: `float | None`<br/>
Redeemable non-controlling interest.

**preferred_stock**: `float | None`<br/>
Preferred stock.

**common_stock**: `float | None`<br/>
Common stock.

**retained_earnings**: `float | None`<br/>
Retained earnings.

**treasury_stock**: `float | None`<br/>
Treasury stock.

**accumulated_other_comprehensive_income**: `float | None`<br/>
Accumulated other comprehensive income.

**participating_policy_holder_equity**: `float | None`<br/>
Participating policy holder equity.

**other_equity_adjustments**: `float | None`<br/>
Other equity adjustments.

**total_common_equity**: `float | None`<br/>
Total common equity.

**total_preferred_common_equity**: `float | None`<br/>
Total preferred common equity.

**non_controlling_interest**: `float | None`<br/>
Non-controlling interest.

**total_equity_non_controlling_interests**: `float | None`<br/>
Total equity non-controlling interests.

**total_liabilities_shareholders_equity**: `float | None`<br/>
Total liabilities and shareholders equity.

</TabItem>
<TabItem value='sec' label='sec'>

**period_ending**: `date`<br/>
The end date of the reporting period.

**fiscal_period**: `str | None`<br/>
The fiscal period of the report.

**fiscal_year**: `int | None`<br/>
The fiscal year of the fiscal period.

**reported_currency**: `str | None`<br/>
The currency in which the balance sheet is reported.

**cash_and_equivalents**: `float | None`<br/>
Amount of cash and cash equivalent. Cash includes, but is not limited to, currency on hand, demand deposit with financial institution, and account with general characteristic of demand deposit. Cash equivalent includes, but is not limited to, short-term, highly liquid investment that is both readily convertible to known amount of cash and so near maturity that it presents insignificant risk of change in value because of change in interest rate.

**restricted_cash**: `float | None`<br/>
Amount of cash restricted as to withdrawal or usage. Cash includes, but is not limited to, currency on hand, demand deposits with banks or financial institutions, and other accounts with general characteristics of demand deposits.

**short_term_investments**: `float | None`<br/>
Amount of investment in marketable security, classified as current.

**fed_funds_sold**: `float | None`<br/>
Includes: (1) the amount outstanding of funds lent to other depository institutions, securities brokers, or securities dealers in the form of Federal Funds sold; for example, immediately available funds lent under agreements or contracts that mature in one business day or roll over under a continuing contract, regardless of the nature of the transaction or the collateral involved, excluding overnight lending for commercial and industrial purposes. Also include Federal Funds sold under agreements to resell on a gross basis, excluding (1) sales of term Federal Funds, (2) due bills representing purchases of securities or other assets by the reporting bank that have not yet been delivered and similar instruments, (3) resale agreements that mature in more than one business day involving assets other than securities, and (4) yield maintenance dollar repurchase agreements (Federal Funds Sold) and (2) the dollar amount outstanding of funds lent in the form of security resale agreements regardless of maturity, if the agreement requires the bank to resell the identical security purchased or a security that meets the definition of substantially the same in the case of a dollar roll. Also include purchases of participations in pools of securities, regardless of maturity (Securities Purchased Under Agreements to Re-sell).

**interest_bearing_deposits_at_other_banks**: `float | None`<br/>
For banks and other depository institutions (including Federal Reserve Banks, if applicable): Interest-bearing deposits in other financial institutions for relatively short periods of time including, for example, certificates of deposits, which are presented separately from cash on the balance sheet.

**time_deposits_placed**: `float | None`<br/>
Amount of time deposit liabilities, including certificates of deposit.

**trading_account_securities**: `float | None`<br/>
Amount of investment in debt security measured at fair value with change in fair value recognized in net income (trading) and investment in equity security measured at fair value with change in fair value recognized in net income (FV-NI).

**loans_and_leases**: `float | None`<br/>
Amortized cost excluding accrued interest, before allowance for credit loss, of financing receivable. Excludes net investment in lease.

**allowance_for_loan_and_lease_losses**: `float | None`<br/>
Amount of allowance for credit loss on financing receivable. Excludes allowance for financing receivable covered under loss sharing agreement.

**net_loans_and_leases**: `float | None`<br/>
Amortized cost excluding accrued interest, after allowance for credit loss, of financing receivable. Excludes net investment in lease.

**loans_held_for_sale**: `float | None`<br/>
Amount before allowance and after deduction of deferred interest and fees, unamortized costs and premiums and discounts from face amounts, of loans and leases held in portfolio, including but not limited to, commercial and consumer loans. Excludes loans and leases covered under loss sharing agreements.

**accrued_investment_income**: `float | None`<br/>
Interest, dividends, rents, ancillary and other revenues earned but not yet received by the entity on its investments.

**accounts_receivable**: `float | None`<br/>
Amount, after allowance for credit loss, of right to consideration from customer for product sold and service rendered in normal course of business, classified as current.

**customer_and_other_receivables**: `float | None`<br/>
Amount, after allowance for credit loss, of right to consideration from customer for product sold and service rendered in normal course of business.

**note_receivable**: `float | None`<br/>
Amortized cost, after allowance for credit loss, of financing receivable classified as current. Excludes net investment in lease.

**nontrade_receivables**: `float | None`<br/>
The sum of amounts currently receivable other than from customers. For classified balance sheets, represents the current amount receivable, that is amounts expected to be collected within one year or the normal operating cycle, if longer.

**net_inventory**: `float | None`<br/>
Amount after valuation and LIFO reserves of inventory expected to be sold, or consumed within one year or operating cycle, if longer.

**prepaid_expenses**: `float | None`<br/>
Amount of asset related to consideration paid in advance for costs that provide economic benefits within a future period of one year or the normal operating cycle, if longer.

**current_deferred_tax_assets**: `float | None`<br/>
The current portion of the aggregate tax effects as of the balance sheet date of all future tax deductions arising from temporary differences between tax basis and generally accepted accounting principles basis recognition of assets, liabilities, revenues and expenses, which can only be deducted for tax purposes when permitted under enacted tax laws; after deducting the allocated valuation allowance, if any, to reduce such amount to net realizable value. Deferred tax liabilities and assets are classified as current or noncurrent based on the classification of the related asset or liability for financial reporting. A deferred tax liability or asset that is not related to an asset or liability for financial reporting, including deferred tax assets related to carryforwards, are classified according to the expected reversal date of the temporary difference. An unrecognized tax benefit that is directly related to a position taken in a tax year that results in a net operating loss carryforward is presented as a reduction of the related deferred tax asset.

**other_current_assets**: `float | None`<br/>
Amount of current assets classified as other.

**other_current_nonoperating_assets**: `float | None`<br/>
Amount of asset related to consideration paid in advance for costs that provide economic benefits in future periods, and amount of other assets that are expected to be realized or consumed within one year or the normal operating cycle, if longer.

**total_current_assets**: `float | None`<br/>
Amount of asset recognized for present right to economic benefit, classified as current.

**gross_ppe**: `float | None`<br/>
Amount, before accumulated depreciation, depletion, and amortization, of property, plant, and equipment. Includes, but is not limited to, land and land improvement; building; machinery and equipment; furniture and fixture; and work of art, historical treasure, or similar asset classified as collection.

**accumulated_depreciation**: `float | None`<br/>
Amount of accumulated depreciation, depletion, and amortization of property, plant, and equipment. Includes, but is not limited to, land and land improvement; building; machinery and equipment; furniture and fixture; and work of art, historical treasure, or similar asset classified as collection.

**net_ppe**: `float | None`<br/>
Amount, after accumulated depreciation, depletion, and amortization, of property, plant, and equipment. Includes, but is not limited to, land and land improvement; building; machinery and equipment; furniture and fixture; and work of art, historical treasure, or similar asset classified as collection.

**net_premises_and_equipment**: `float | None`<br/>
Amount, after accumulated depreciation, depletion, and amortization, of property, plant, and equipment. Includes, but is not limited to, land and land improvement; building; machinery and equipment; furniture and fixture; and work of art, historical treasure, or similar asset classified as collection.

**operating_lease_right_of_use_asset**: `float | None`<br/>
Amount of lessee's right to use underlying asset under operating lease.

**finance_lease_right_of_use_asset**: `float | None`<br/>
Amount, after accumulated amortization, of right-of-use asset from finance lease.

**long_term_investments**: `float | None`<br/>
Amount of investment in marketable security, classified as noncurrent.

**mortgage_servicing_rights**: `float | None`<br/>
Fair value of an asset representing net future revenue from contractually specified servicing fees, late charges, and other ancillary revenues, in excess of future costs related to servicing arrangements.

**deferred_acquisition_cost**: `float | None`<br/>
Amount of deferred policy acquisition cost capitalized on contract remaining in force.

**separate_account_business_assets**: `float | None`<br/>
Amount of asset at fair value held for benefit of separate account policyholder.

**noncurrent_note_receivables**: `float | None`<br/>
Amount, after allowance for credit loss, of financing receivable, classified as noncurrent.

**goodwill**: `float | None`<br/>
Amount, after accumulated impairment loss, of asset representing future economic benefit arising from other asset acquired in business combination or from joint venture formation or both, that is not individually identified and separately recognized.

**intangible_assets**: `float | None`<br/>
Amount, after accumulated amortization, of finite- and indefinite-lived intangible assets and capitalized cost for software to be sold, leased, or marketed. Excludes goodwill.

**noncurrent_deferred_tax_assets**: `float | None`<br/>
The noncurrent portion as of the balance sheet date of the aggregate carrying amount of all future tax deductions arising from temporary differences between tax basis and generally accepted accounting principles basis recognition of assets, liabilities, revenues and expenses, which can only be deducted for tax purposes when permitted under enacted tax laws; after the valuation allowance, if any, to reduce such amount to net realizable value. Deferred tax liabilities and assets are classified as current or noncurrent based on the classification of the related asset or liability for financial reporting. A deferred tax liability or asset that is not related to an asset or liability for financial reporting, including deferred tax assets related to carryforwards, is classified according to the expected reversal date of the temporary difference.

**employee_benefit_assets**: `float | None`<br/>
This represents the entire assets recognized in the balance sheet that are associated with the defined benefit plans.

**other_noncurrent_assets**: `float | None`<br/>
Amount of noncurrent assets classified as other.

**other_noncurrent_nonoperating_assets**: `float | None`<br/>
Amount of investments, and noncurrent assets classified as other.

**other_noncurrent_assets_excl_ppe**: `float | None`<br/>
Noncurrent assets other than investments and PP&E.

**total_noncurrent_assets**: `float | None`<br/>
Sum of the carrying amounts as of the balance sheet date of all assets that are expected to be realized in cash, sold or consumed after one year or beyond the normal operating cycle, if longer.

**other_assets**: `float | None`<br/>
Amount of assets classified as other.

**total_assets**: `float | None`<br/>
Amount of asset recognized for present right to economic benefit.

**noninterest_bearing_deposits**: `float | None`<br/>
The aggregate amount of all domestic and foreign noninterest-bearing deposits liabilities held by the entity.

**interest_bearing_deposits**: `float | None`<br/>
The aggregate of all domestic and foreign interest-bearing deposit liabilities.

**fed_funds_purchased**: `float | None`<br/>
Amount after offset of short term borrowing where a bank borrows, at the federal funds rate, from another bank and securities that an entity sells and agrees to repurchase at a specified date for a specified price.

**short_term_debt**: `float | None`<br/>
Reflects the total carrying amount as of the balance sheet date of debt having initial terms less than one year or the normal operating cycle, if longer.

**current_portion_of_long_term_debt**: `float | None`<br/>
Amount of long-term debt due within one year or within the normal operating cycle, if longer.

**bankers_acceptances**: `float | None`<br/>
Amount of short-term, negotiable time drafts drawn on and accepted by a financial institution. Bankers acceptances are a bank's promise to pay to the holder of the draft a stated amount on a specified date.

**accounts_payable**: `float | None`<br/>
Carrying value as of the balance sheet date of liabilities incurred (and for which invoices have typically been received) and payable to vendors for goods and services received that are used in an entity's business. Used to reflect the current portion of the liabilities (due within one year or within the normal operating cycle if longer).

**accrued_interest_payable**: `float | None`<br/>
Carrying value as of the balance sheet date of [accrued] interest payable on all forms of debt, including trade payables, that has been incurred and is unpaid. Used to reflect the current portion of the liabilities (due within one year or within the normal operating cycle if longer).

**other_short_term_payables**: `float | None`<br/>
Amount of borrowings classified as other, maturing within one year or the normal operating cycle, if longer.

**accrued_expenses**: `float | None`<br/>
Carrying value as of the balance sheet date of obligations incurred and payable, pertaining to costs that are statutory in nature, are incurred on contractual obligations, or accumulate over time and for which invoices have not yet been received or will not be rendered. Examples include taxes, interest, rent and utilities. Used to reflect the current portion of the liabilities (due within one year or within the normal operating cycle if longer).

**customer_deposits**: `float | None`<br/>
Carrying amount of liabilities for customer deposits received and held, classified as current. Includes cash received in advance for undelivered goods or services and refundable security deposits.

**dividends_payable**: `float | None`<br/>
Carrying value as of the balance sheet date of dividends declared but unpaid on equity securities issued by the entity and outstanding.

**current_deferred_revenue**: `float | None`<br/>
Amount of deferred income and obligation to transfer product and service to customer for which consideration has been received or is receivable, classified as current.

**current_deferred_tax_liabilities**: `float | None`<br/>
Represents the current portion of deferred tax liabilities, which result from applying the applicable tax rate to net taxable temporary differences pertaining to each jurisdiction to which the entity is obligated to pay income tax. A current taxable temporary difference is a difference between the tax basis and the carrying amount of a current asset or liability in the financial statements prepared in accordance with generally accepted accounting principles. In a classified statement of financial position, an enterprise separates deferred tax liabilities and assets into a current amount and a noncurrent amount. Deferred tax liabilities and assets are classified as current or noncurrent based on the classification of the related asset or liability for financial reporting. A deferred tax liability or asset that is not related to an asset or liability for financial reporting, including deferred tax assets related to carryforwards, is classified according to the expected reversal date of the temporary difference.

**current_employee_benefit_liabilities**: `float | None`<br/>
Total of the carrying values as of the balance sheet date of obligations incurred through that date and payable for obligations related to services received from employees, such as accrued salaries and bonuses, payroll taxes and fringe benefits. Used to reflect the current portion of the liabilities (due within one year or within the normal operating cycle if longer).

**other_taxes_payable**: `float | None`<br/>
Carrying value as of the balance sheet date of obligations incurred and payable for statutory income, sales, use, payroll, excise, real, property and other taxes. Used to reflect the current portion of the liabilities (due within one year or within the normal operating cycle if longer).

**other_current_liabilities**: `float | None`<br/>
Amount of liabilities classified as other, due within one year or the normal operating cycle, if longer.

**other_current_nonoperating_liabilities**: `float | None`<br/>
Amount of current liabilities from nonoperating activities, classified as other. Includes accrued liabilities and other liabilities not separately disclosed.

**operating_lease_liability_current**: `float | None`<br/>
Present value of lessee's discounted obligation for lease payments from operating lease, classified as current.

**finance_lease_liability_current**: `float | None`<br/>
Present value of lessee's discounted obligation for lease payments from finance lease, classified as current.

**total_current_liabilities**: `float | None`<br/>
Total obligations incurred as part of normal operations that are expected to be paid during the following twelve months or within one business cycle, if longer.

**long_term_debt**: `float | None`<br/>
Amount, after deduction of unamortized premium (discount) and debt issuance cost, of long-term debt classified as noncurrent. Excludes lease obligation.

**capital_lease_obligations**: `float | None`<br/>
Present value of lessee's discounted obligation for lease payments from finance lease.

**operating_lease_liability_noncurrent**: `float | None`<br/>
Present value of lessee's discounted obligation for lease payments from operating lease, classified as noncurrent.

**claims_and_claim_expenses**: `float | None`<br/>
The amount needed to reflect the estimated ultimate cost of settling claims relating to insured events that have occurred on or before the balance sheet date, whether or not reported to the insurer at that date.

**future_policy_benefits**: `float | None`<br/>
Amount, before effect of reinsurance, of present value of future benefit to be paid to or on behalf of policyholder and related expense less present value of future net premium receivable under insurance contract.

**unearned_premiums_credit**: `float | None`<br/>
Carrying amount of premiums written on insurance contracts that have not been earned as of the balance sheet date.

**policyholder_funds**: `float | None`<br/>
Amount due to policyholders for funds held that are returnable under the terms of insurance contracts, classified as other.

**participating_policyholder_equity**: `float | None`<br/>
Amount due to policyholders for funds held that are returnable under the terms of insurance contracts, classified as other.

**separate_account_business_liabilities**: `float | None`<br/>
Amount of liability for variable contract in which all or portion of contract holder's funds is allocated to specific separate account and supported by assets held in separate account.

**other_long_term_liabilities**: `float | None`<br/>
Amount of liabilities classified as other, due after one year or the normal operating cycle, if longer.

**asset_retirement_and_litigation_obligation**: `float | None`<br/>
Noncurrent portion of the carrying amount of a liability for an asset retirement obligation. An asset retirement obligation is a legal obligation associated with the disposal or retirement of a tangible long-lived asset that results from the acquisition, construction or development, or the normal operations of a long-lived asset, except for certain obligations of lessees.

**noncurrent_deferred_revenue**: `float | None`<br/>
Amount of deferred income and obligation to transfer product and service to customer for which consideration has been received or is receivable, classified as noncurrent.

**noncurrent_deferred_tax_liabilities**: `float | None`<br/>
Amount, after deferred tax asset, of deferred tax liability attributable to taxable differences with jurisdictional netting.

**noncurrent_employee_benefit_liabilities**: `float | None`<br/>
Amount of liability, recognized in statement of financial position, for defined benefit pension and other postretirement plans, classified as noncurrent.

**other_noncurrent_liabilities**: `float | None`<br/>
Amount of liabilities classified as other, due after one year or the normal operating cycle, if longer.

**other_noncurrent_nonoperating_liabilities**: `float | None`<br/>
Amount of noncurrent liabilities from nonoperating activities, classified as other. Includes deferred income taxes and other liabilities not separately disclosed.

**total_noncurrent_liabilities**: `float | None`<br/>
Amount of obligation due after one year or beyond the normal operating cycle, if longer.

**total_liabilities**: `float | None`<br/>
Amount of liability recognized for present obligation requiring transfer or otherwise providing economic benefit to others.

**commitments_and_contingencies**: `float | None`<br/>
Represents the caption on the face of the balance sheet to indicate that the entity has entered into (1) purchase or supply arrangements that will require expending a portion of its resources to meet the terms thereof, and (2) is exposed to potential losses or, less frequently, gains, arising from (a) possible claims against a company's resources due to future performance under contract terms, and (b) possible losses or likely gains from uncertainties that will ultimately be resolved when one or more future events that are deemed likely to occur do occur or fail to occur.

**temporary_equity**: `float | None`<br/>
Carrying amount of the equity component of securities that are redeemable.

**temporary_equity_parent**: `float | None`<br/>
Carrying amount of temporary equity attributable to parent.

**redeemable_noncontrolling_interest**: `float | None`<br/>
As of the reporting date, the aggregate carrying amount of all noncontrolling interests which are redeemable by the (parent) entity (1) at a fixed or determinable price on a fixed or determinable date, (2) at the option of the holder of the noncontrolling interest, or (3) upon occurrence of an event that is not solely within the control of the (parent) entity. This item includes noncontrolling interest holder's ownership (or holders' ownership) regardless of the type of equity interest (common, preferred, other) including all potential organizational (legal) forms of the investee entity.

**redeemable_nci_common**: `float | None`<br/>
Equity carrying amount of the common stock component of redeemable NCI.

**redeemable_nci_preferred**: `float | None`<br/>
Equity carrying amount of the preferred stock component of redeemable NCI.

**redeemable_nci_other**: `float | None`<br/>
Equity carrying amount of the other component of redeemable NCI.

**total_preferred_equity**: `float | None`<br/>
Aggregate par or stated value of issued nonredeemable preferred stock (or preferred stock redeemable solely at the option of the issuer). This item includes treasury stock repurchased by the entity. Note: elements for number of nonredeemable preferred shares, par value and other disclosure concepts are in another section within stockholders' equity.

**common_equity**: `float | None`<br/>
Aggregate par or stated value of issued nonredeemable common stock (or common stock redeemable solely at the option of the issuer). This item includes treasury stock repurchased by the entity. Note: elements for number of nonredeemable common shares, par value and other disclosure concepts are in another section within stockholders' equity.

**additional_paid_in_capital**: `float | None`<br/>
Value received from shareholders in common stock-related transactions that are in excess of par value or stated value and amounts received from other stock-related transactions. Includes only common stock transactions (excludes preferred stock transactions). May be called contributed capital, capital in excess of par, capital surplus, or paid-in capital.

**retained_earnings**: `float | None`<br/>
Amount of accumulated undistributed earnings (deficit).

**treasury_stock**: `float | None`<br/>
The amount allocated to treasury stock. Treasury stock is common and preferred shares of an entity that were issued, repurchased by the entity, and are held in its treasury.

**accumulated_other_comprehensive_income**: `float | None`<br/>
Amount, after tax, of accumulated increase (decrease) in equity from transaction and other event and circumstance from nonowner source.

**other_equity**: `float | None`<br/>
This element represents movements included in the statement of changes in stockholders' equity which are not separately disclosed or provided for elsewhere in the taxonomy.

**total_common_equity**: `float | None`<br/>
Amount of equity (deficit) attributable to parent. Excludes temporary equity and equity attributable to noncontrolling interest.

**total_equity**: `float | None`<br/>
Amount of equity (deficit) attributable to parent. Excludes temporary equity and equity attributable to noncontrolling interest.

**noncontrolling_interests**: `float | None`<br/>
Amount of equity (deficit) attributable to noncontrolling interest. Excludes temporary equity.

**total_equity_and_noncontrolling_interests**: `float | None`<br/>
Amount of equity (deficit) attributable to parent and noncontrolling interest. Excludes temporary equity.

**total_liabilities_and_equity**: `float | None`<br/>
Amount of liabilities and equity items, including the portion of equity attributable to noncontrolling interests, if any.

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

