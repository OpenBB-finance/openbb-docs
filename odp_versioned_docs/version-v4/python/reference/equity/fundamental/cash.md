---
title: "cash"
description: "Learn how to use the Cash Flow Statement API endpoint to retrieve information  about cash flow statements. Understand the parameters and return values of the API,  and explore the available data fields for cash flow statements."
keywords:
- Cash Flow Statement
- cash flow statement parameters
- cash flow statement returns
- cash flow statement data
- python obb.equity.fundamental.cash
- symbol
- period
- limit
- provider
- cik
- filing date
- period of report date
- include sources
- order
- sort
- net income
- depreciation and amortization
- stock based compensation
- deferred income tax
- other non-cash items
- changes in operating assets and liabilities
- accounts receivables
- inventory
- vendor non-trade receivables
- other current and non-current assets
- accounts payables
- deferred revenue
- other current and non-current liabilities
- net cash flow from operating activities
- purchases of marketable securities
- sales from maturities of investments
- investments in property plant and equipment
- payments from acquisitions
- other investing activities
- net cash flow from investing activities
- taxes paid on net share settlement
- dividends paid
- common stock repurchased
- debt proceeds
- debt repayment
- other financing activities
- net cash flow from financing activities
- net change in cash
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/fundamental/cash - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get the cash flow statement for a given company.

Examples
--------

```python
from openbb import obb
obb.equity.fundamental.cash(symbol='AAPL')
obb.equity.fundamental.cash(symbol='AAPL', period='annual', limit=5)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol to get data for.

**limit**: `int | None`<br/>
*Default:* 5<br/>
The number of data entries to return.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str`<br/>
Symbol to get data for.

**limit**: `int | None`<br/>
*Default:* 5<br/>
The number of data entries to return.

**period**: `Literal['q1', 'q2', 'q3', 'q4', 'fy', 'ttm', 'annual', 'quarter'] | None`<br/>
*Default:* annual<br/>
Time period of the data to return.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str`<br/>
Symbol to get data for.

**limit**: `int | None`<br/>
*Default:* 5<br/>
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
*Default:* 5<br/>
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

**results**: `CashFlowStatement`

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
The date of the filing.

**accepted_date**: `datetime | None`<br/>
The date the filing was accepted.

**cik**: `str | None`<br/>
The Central Index Key (CIK) assigned by the SEC, if applicable.

**symbol**: `str | None`<br/>
The stock ticker symbol.

**reported_currency**: `str | None`<br/>
The currency in which the cash flow statement was reported.

**net_income**: `int | None`<br/>
Net income.

**depreciation_and_amortization**: `int | None`<br/>
Depreciation and amortization.

**deferred_income_tax**: `int | None`<br/>
Deferred income tax.

**stock_based_compensation**: `int | None`<br/>
Stock-based compensation.

**change_in_working_capital**: `int | None`<br/>
Change in working capital.

**change_in_account_receivables**: `int | None`<br/>
Change in account receivables.

**change_in_inventory**: `int | None`<br/>
Change in inventory.

**change_in_account_payable**: `int | None`<br/>
Change in account payable.

**change_in_other_working_capital**: `int | None`<br/>
Change in other working capital.

**change_in_other_non_cash_items**: `int | None`<br/>
Change in other non-cash items.

**net_cash_from_operating_activities**: `int | None`<br/>
Net cash from operating activities.

**purchase_of_property_plant_and_equipment**: `int | None`<br/>
Purchase of property, plant and equipment.

**acquisitions**: `int | None`<br/>
Acquisitions.

**purchase_of_investment_securities**: `int | None`<br/>
Purchase of investment securities.

**sale_and_maturity_of_investments**: `int | None`<br/>
Sale and maturity of investments.

**other_investing_activities**: `int | None`<br/>
Other investing activities.

**net_cash_from_investing_activities**: `int | None`<br/>
Net cash from investing activities.

**repayment_of_debt**: `int | None`<br/>
Repayment of debt.

**issuance_of_common_equity**: `int | None`<br/>
Issuance of common equity.

**repurchase_of_common_equity**: `int | None`<br/>
Repurchase of common equity.

**net_common_equity_issuance**: `int | None`<br/>
Net common equity issuance.

**net_preferred_equity_issuance**: `int | None`<br/>
Net preferred equity issuance.

**net_equity_issuance**: `int | None`<br/>
Net equity issuance.

**short_term_net_debt_issuance**: `int | None`<br/>
Short term net debt issuance.

**long_term_net_debt_issuance**: `int | None`<br/>
Long term net debt issuance.

**net_debt_issuance**: `int | None`<br/>
Net debt issuance.

**common_dividends_paid**: `int | None`<br/>
Payment of common dividends.

**preferred_dividends_paid**: `int | None`<br/>
Payment of preferred dividends.

**net_dividends_paid**: `int | None`<br/>
Net dividends paid.

**other_financing_activities**: `int | None`<br/>
Other financing activities.

**net_cash_from_financing_activities**: `int | None`<br/>
Net cash from financing activities.

**effect_of_exchange_rate_changes_on_cash**: `int | None`<br/>
Effect of exchange rate changes on cash.

**net_change_in_cash_and_equivalents**: `int | None`<br/>
Net change in cash and equivalents.

**cash_at_beginning_of_period**: `int | None`<br/>
Cash at beginning of period.

**cash_at_end_of_period**: `int | None`<br/>
Cash at end of period.

**operating_cash_flow**: `int | None`<br/>
Operating cash flow.

**capital_expenditure**: `int | None`<br/>
Capital expenditure.

**income_taxes_paid**: `int | None`<br/>
Income taxes paid.

**interest_paid**: `int | None`<br/>
Interest paid.

**free_cash_flow**: `int | None`<br/>
None

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

**net_income_continuing_operations**: `float | None`<br/>
Net Income (Continuing Operations)

**net_income_discontinued_operations**: `float | None`<br/>
Net Income (Discontinued Operations)

**net_income**: `float | None`<br/>
Consolidated Net Income.

**provision_for_loan_losses**: `float | None`<br/>
Provision for Loan Losses

**provision_for_credit_losses**: `float | None`<br/>
Provision for credit losses

**depreciation_expense**: `float | None`<br/>
Depreciation Expense.

**amortization_expense**: `float | None`<br/>
Amortization Expense.

**share_based_compensation**: `float | None`<br/>
Share-based compensation.

**non_cash_adjustments_to_reconcile_net_income**: `float | None`<br/>
Non-Cash Adjustments to Reconcile Net Income.

**changes_in_operating_assets_and_liabilities**: `float | None`<br/>
Changes in Operating Assets and Liabilities (Net)

**net_cash_from_continuing_operating_activities**: `float | None`<br/>
Net Cash from Continuing Operating Activities

**net_cash_from_discontinued_operating_activities**: `float | None`<br/>
Net Cash from Discontinued Operating Activities

**net_cash_from_operating_activities**: `float | None`<br/>
Net Cash from Operating Activities

**divestitures**: `float | None`<br/>
Divestitures

**sale_of_property_plant_and_equipment**: `float | None`<br/>
Sale of Property, Plant, and Equipment

**acquisitions**: `float | None`<br/>
Acquisitions

**purchase_of_investments**: `float | None`<br/>
Purchase of Investments

**purchase_of_investment_securities**: `float | None`<br/>
Purchase of Investment Securities

**sale_and_maturity_of_investments**: `float | None`<br/>
Sale and Maturity of Investments

**loans_held_for_sale**: `float | None`<br/>
Loans Held for Sale (Net)

**purchase_of_property_plant_and_equipment**: `float | None`<br/>
Purchase of Property, Plant, and Equipment

**other_investing_activities**: `float | None`<br/>
Other Investing Activities (Net)

**net_cash_from_continuing_investing_activities**: `float | None`<br/>
Net Cash from Continuing Investing Activities

**net_cash_from_discontinued_investing_activities**: `float | None`<br/>
Net Cash from Discontinued Investing Activities

**net_cash_from_investing_activities**: `float | None`<br/>
Net Cash from Investing Activities

**payment_of_dividends**: `float | None`<br/>
Payment of Dividends

**repurchase_of_common_equity**: `float | None`<br/>
Repurchase of Common Equity

**repurchase_of_preferred_equity**: `float | None`<br/>
Repurchase of Preferred Equity

**issuance_of_common_equity**: `float | None`<br/>
Issuance of Common Equity

**issuance_of_preferred_equity**: `float | None`<br/>
Issuance of Preferred Equity

**issuance_of_debt**: `float | None`<br/>
Issuance of Debt

**repayment_of_debt**: `float | None`<br/>
Repayment of Debt

**other_financing_activities**: `float | None`<br/>
Other Financing Activities (Net)

**cash_interest_received**: `float | None`<br/>
Cash Interest Received

**net_change_in_deposits**: `float | None`<br/>
Net Change in Deposits

**net_increase_in_fed_funds_sold**: `float | None`<br/>
Net Increase in Fed Funds Sold

**net_cash_from_continuing_financing_activities**: `float | None`<br/>
Net Cash from Continuing Financing Activities

**net_cash_from_discontinued_financing_activities**: `float | None`<br/>
Net Cash from Discontinued Financing Activities

**net_cash_from_financing_activities**: `float | None`<br/>
Net Cash from Financing Activities

**effect_of_exchange_rate_changes**: `float | None`<br/>
Effect of Exchange Rate Changes

**other_net_changes_in_cash**: `float | None`<br/>
Other Net Changes in Cash

**net_change_in_cash_and_equivalents**: `float | None`<br/>
Net Change in Cash and Equivalents

**cash_income_taxes_paid**: `float | None`<br/>
Cash Income Taxes Paid

**cash_interest_paid**: `float | None`<br/>
Cash Interest Paid

</TabItem>
<TabItem value='sec' label='sec'>

**period_ending**: `date`<br/>
The end date of the reporting period.

**fiscal_period**: `str | None`<br/>
The fiscal period of the report.

**fiscal_year**: `int | None`<br/>
The fiscal year of the fiscal period.

**reported_currency**: `str | None`<br/>
The currency in which the cash flow statement is reported.

**net_income**: `float | None`<br/>
The consolidated profit or loss for the period, net of income taxes, including the portion attributable to the noncontrolling interest.

**net_income_discontinued**: `float | None`<br/>
Amount after tax of income (loss) from a discontinued operation including the portion attributable to the noncontrolling interest. Includes, but is not limited to, the income (loss) from operations during the phase-out period, gain (loss) on disposal, gain (loss) for reversal of write-down (write-down) to fair value, less cost to sell, and adjustments to a prior period gain (loss) on disposal.

**net_income_continuing**: `float | None`<br/>
Amount after tax of income (loss) from continuing operations including portion attributable to the noncontrolling interest.

**provision_for_loan_losses**: `float | None`<br/>
Amount of expense related to estimated loss from loan and lease transactions.

**depreciation_expense**: `float | None`<br/>
The current period expense charged against earnings on long-lived, physical assets not used in production, and which are not intended for resale, to allocate or recognize the cost of such assets over their useful lives; or to record the reduction in book value of an intangible asset over the benefit period of such asset; or to reflect consumption during the period of an asset that is not used in production.

**amortization_expense**: `float | None`<br/>
Amount of amortization expense for finite-lived intangible asset. Excludes goodwill and capitalized cost for software to be sold, leased, or marketed.

**depreciation_and_amortization**: `float | None`<br/>
The aggregate expense recognized in the current period that allocates the cost of tangible and intangible assets over their useful lives.

**stock_based_compensation**: `float | None`<br/>
Amount of noncash expense for share-based payment arrangement.

**deferred_income_tax**: `float | None`<br/>
Amount of deferred income tax expense (benefit) pertaining to income (loss) from continuing operations.

**gain_loss_on_investments**: `float | None`<br/>
Amount of realized and unrealized gain (loss) on investment.

**gain_loss_on_sale_of_assets**: `float | None`<br/>
Amount of gain (loss) on sale or disposal of property, plant and equipment assets, including oil and gas property and timber property.

**income_loss_from_equity_method_investments**: `float | None`<br/>
Amount of income (loss) for proportionate share of equity method investee's income (loss).

**asset_impairment_charges**: `float | None`<br/>
Amount of impairment loss for asset. Includes, but is not limited to, tangible and intangible assets and goodwill.

**noncash_adjustments_to_net_income**: `float | None`<br/>
Amount of income (expense) included in net income that results in no cash inflow (outflow), classified as other.

**other_operating_activities**: `float | None`<br/>
Amount of cash inflow (outflow) from operating activity, classified as other, in reconciling net income to reflect cash provided by (used in) operating activity when indirect cash flow method is applied.

**change_in_insurance_reserves**: `float | None`<br/>
The increase (decrease) in health care insurance liability balances during the period.

**change_in_accounts_receivable**: `float | None`<br/>
The increase (decrease) during the reporting period in amount due within one year (or one business cycle) from customers for the credit sale of goods and services.

**change_in_nontrade_receivables**: `float | None`<br/>
Amount of increase (decrease) in receivables classified as other.

**change_in_inventories**: `float | None`<br/>
The increase (decrease) during the reporting period in the aggregate value of all inventory held by the reporting entity, associated with underlying transactions that are classified as operating activities.

**change_in_accounts_payable**: `float | None`<br/>
The increase (decrease) during the reporting period in the aggregate amount of liabilities incurred (and for which invoices have typically been received) and payable to vendors for goods and services received that are used in an entity's business.

**change_in_other_operating_assets_and_liabilities**: `float | None`<br/>
Amount of increase (decrease) in operating assets classified as other.

**increase_decrease_in_operating_capital**: `float | None`<br/>
Amount of increase (decrease) in asset and (increase) decrease in liability, used in operating activity in reconciling net income to reflect cash provided by (used in) operating activity when indirect cash flow method is applied.

**net_cash_from_continuing_operating_activities**: `float | None`<br/>
Amount of cash inflow (outflow) from operating activity, including, but not limited to, discontinued operation. Operating activity includes, but is not limited to, transaction, adjustment, and change in value not defined as investing or financing activity.

**net_cash_from_discontinued_operating_activities**: `float | None`<br/>
Amount of cash inflow (outflow) from operating activity attributable to discontinued operation. Operating activity includes, but is not limited to, transaction, adjustment, and change in value not defined as investing or financing activity.

**net_cash_from_operating_activities**: `float | None`<br/>
Amount of cash inflow (outflow) from operating activity, including, but not limited to, discontinued operation. Operating activity includes, but is not limited to, transaction, adjustment, and change in value not defined as investing or financing activity.

**purchase_of_plant_property_and_equipment**: `float | None`<br/>
The cash outflow associated with the acquisition of long-lived, physical assets that are used in the normal conduct of business to produce goods and services and not intended for resale; includes cash outflows to pay for construction of self-constructed assets.

**acquisitions**: `float | None`<br/>
The cash outflow associated with the acquisition of a business, net of the cash acquired from the purchase.

**purchase_of_investments**: `float | None`<br/>
Amount of cash outflow to acquire investment in debt security measured at fair value with change in fair value recognized in other comprehensive income (available-for-sale).

**purchase_of_held_to_maturity_investments**: `float | None`<br/>
Amount of cash outflow through purchase of long-term held-to-maturity securities.

**sale_of_plant_property_and_equipment**: `float | None`<br/>
The cash inflow from the sale of long-lived, physical assets that are used in the normal conduct of business to produce goods and services and not intended for resale.

**sale_of_productive_assets**: `float | None`<br/>
The cash inflow from the sale of property, plant and equipment (capital expenditures), software, and other intangible assets.

**divestitures**: `float | None`<br/>
The cash inflow associated with the amount received from the sale of a portion of the company's business, for example a segment, division, branch or other business, during the period.

**sale_of_investments**: `float | None`<br/>
Amount of cash inflow from sale of investment in debt security measured at fair value with change in fair value recognized in other comprehensive income (available-for-sale).

**maturity_of_investments**: `float | None`<br/>
Amount of cash inflow from maturity, prepayment and call of investment in debt security measured at fair value with change in fair value recognized in other comprehensive income (available-for-sale).

**net_increase_in_fed_funds_sold**: `float | None`<br/>
The net cash inflow or outflow from the fund lent to other financial institution arising from the excess in reserve deposited at Federal Reserve Bank to meet legal requirement. This borrowing is usually contracted on an overnight basis at an agreed rate of interest.

**loans_held_for_sale_net**: `float | None`<br/>
The net cash outflow or inflow for the increase (decrease) in the beginning and end of period of loan and lease balances which are not originated or purchased specifically for resale. Includes cash payments and proceeds associated with (a) loans held-for-investment, (b) leases held-for-investment, and (c) both.

**other_investing_activities_net**: `float | None`<br/>
Amount of cash (inflow) outflow from investing activity, classified as other.

**net_cash_from_continuing_investing_activities**: `float | None`<br/>
Amount of cash inflow (outflow) from investing activity, including, but not limited to, discontinued operation. Investing activity includes, but is not limited to, making and collecting loan, acquiring and disposing of debt and equity instruments, property, plant, and equipment, and other productive assets.

**net_cash_from_discontinued_investing_activities**: `float | None`<br/>
Amount of cash inflow (outflow) from investing activity attributable to discontinued operation. Investing activity includes, but is not limited to, making and collecting loan, acquiring and disposing of debt and equity instruments, property, plant, and equipment, and other productive assets.

**net_cash_from_investing_activities**: `float | None`<br/>
Amount of cash inflow (outflow) from investing activity, including, but not limited to, discontinued operation. Investing activity includes, but is not limited to, making and collecting loan, acquiring and disposing of debt and equity instruments, property, plant, and equipment, and other productive assets.

**repayment_of_debt**: `float | None`<br/>
The cash outflow for debt initially having maturity due after one year or beyond the normal operating cycle, if longer.

**repurchase_of_preferred_equity**: `float | None`<br/>
The cash outflow to reacquire preferred stock during the period.

**repurchase_of_common_equity**: `float | None`<br/>
The cash outflow to reacquire common stock during the period.

**payment_of_dividends**: `float | None`<br/>
Cash outflow in the form of capital distributions and dividends to common shareholders, preferred shareholders and noncontrolling interests.

**issuance_of_debt**: `float | None`<br/>
The cash inflow from a debt initially having maturity due after one year or beyond the operating cycle, if longer.

**issuance_of_preferred_equity**: `float | None`<br/>
Proceeds from issuance of capital stock which provides for a specific dividend that is paid to the shareholders before any dividends to common stockholders and which takes precedence over common stockholders in the event of liquidation.

**issuance_of_common_equity**: `float | None`<br/>
The cash inflow from the additional capital contribution to the entity.

**net_change_in_deposits**: `float | None`<br/>
The net cash inflow or outflow for the increase (decrease) in the beginning and end of period deposits balances.

**short_term_debt_net**: `float | None`<br/>
The net cash inflow or outflow for borrowing having initial term of repayment within one year or the normal operating cycle, if longer.

**tax_withholding_share_based_compensation**: `float | None`<br/>
Amount of cash outflow to satisfy grantee's tax withholding obligation for award under share-based payment arrangement.

**other_financing_activities_net**: `float | None`<br/>
Amount of cash inflow (outflow) from financing activity, classified as other.

**net_cash_from_continuing_financing_activities**: `float | None`<br/>
Amount of cash inflow (outflow) from financing activity, including, but not limited to, discontinued operation. Financing activity includes, but is not limited to, obtaining resource from owner and providing return on, and return of, their investment; borrowing money and repaying amount borrowed, or settling obligation; and obtaining and paying for other resource obtained from creditor on long-term credit.

**net_cash_from_discontinued_financing_activities**: `float | None`<br/>
Amount of cash inflow (outflow) from financing activity attributable to discontinued operation. Financing activity includes, but is not limited to, obtaining resource from owner and providing return on, and return of, their investment; borrowing money and repaying amount borrowed, or settling obligation; and obtaining and paying for other resource obtained from creditor on long-term credit.

**net_cash_from_financing_activities**: `float | None`<br/>
Amount of cash inflow (outflow) from financing activity, including, but not limited to, discontinued operation. Financing activity includes, but is not limited to, obtaining resource from owner and providing return on, and return of, their investment; borrowing money and repaying amount borrowed, or settling obligation; and obtaining and paying for other resource obtained from creditor on long-term credit.

**effect_of_exchange_rate_changes**: `float | None`<br/>
The effect of exchange rate changes on cash balances held in foreign currencies.

**net_cash_from_discontinued_operations**: `float | None`<br/>
The net change in cash and cash equivalents resulting from the cash inflows and outflows of discontinued operations.

**other_net_changes_in_cash**: `float | None`<br/>
Amount of other net changes in cash and cash equivalents not separately disclosed in the statement of cash flows.

**net_change_in_cash**: `float | None`<br/>
The increase (decrease) during the reporting period in cash and cash equivalents. While for technical reasons this element has no balance attribute, the default assumption is a debit balance consistent with its label.

**cash_at_beginning_of_period**: `float | None`<br/>
Cash, cash equivalents, restricted cash, and restricted cash equivalents at the beginning of the reporting period. Derived from the previous period's ending balance.

**cash_at_end_of_period**: `float | None`<br/>
Cash, cash equivalents, restricted cash, and restricted cash equivalents at the end of the reporting period.

**cash_interest_paid**: `float | None`<br/>
Amount of cash paid for interest, excluding capitalized interest, classified as operating activity. Includes, but is not limited to, payment to settle zero-coupon bond for accreted interest of debt discount and debt instrument with insignificant coupon interest rate in relation to effective interest rate of borrowing attributable to accreted interest of debt discount.

**cash_interest_received**: `float | None`<br/>
The cash inflow from interest received, classified as operating activities.

**cash_income_taxes_paid**: `float | None`<br/>
Amount, after refund, of cash paid to foreign, federal, state, and local jurisdictions as income tax.

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

