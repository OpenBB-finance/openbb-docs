---
title: "Balance Of Payments"
description: "Balance of Payments Reports"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `BalanceOfPayments` | `BalanceOfPaymentsQueryParams` | `BalanceOfPaymentsData` |

### Import Statement

```python
from openbb_core.provider.standard_models. import (
BalanceOfPaymentsData,
BalanceOfPaymentsQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='ecb' label='ecb'>

**report_type**: `Literal['main', 'summary', 'services', 'investment_income', 'direct_investment', 'portfolio_investment', 'other_investment'] | None`<br/>
*Default:* main<br/>
The report type, the level of detail in the data.

**frequency**: `Literal['monthly', 'quarterly'] | None`<br/>
*Default:* monthly<br/>
The frequency of the data.  Monthly is valid only for ['main', 'summary'].

**country**: `Literal['brazil', 'canada', 'china', 'eu_ex_euro_area', 'eu_institutions', 'india', 'japan', 'russia', 'switzerland', 'united_kingdom', 'united_states', 'total'] | None`<br/>
The country/region of the data.  This parameter will override the 'report_type' parameter.

</TabItem>
<TabItem value='fred' label='fred'>

**country**: `Literal['argentina', 'australia', 'austria', 'belgium', 'brazil', 'canada', 'chile', 'china', 'colombia', 'costa_rica', 'czechia', 'denmark', 'estonia', 'finland', 'france', 'germany', 'greece', 'hungary', 'iceland', 'india', 'indonesia', 'ireland', 'israel', 'italy', 'japan', 'korea', 'latvia', 'lithuania', 'luxembourg', 'mexico', 'netherlands', 'new_zealand', 'norway', 'poland', 'portugal', 'russia', 'saudi_arabia', 'slovak_republic', 'slovenia', 'south_africa', 'spain', 'sweden', 'switzerland', 'turkey', 'united_kingdom', 'united_states', 'g7', 'g20'] | None`<br/>
*Default:* united_states<br/>
The country to get data. Enter as a 3-letter ISO country code, default is USA.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**period**: `date | None`<br/>
The date representing the beginning of the reporting period.

**current_account**: `float | None`<br/>
Current Account Balance (Billions of EUR)

**goods**: `float | None`<br/>
Goods Balance (Billions of EUR)

**services**: `float | None`<br/>
Services Balance (Billions of EUR)

**primary_income**: `float | None`<br/>
Primary Income Balance (Billions of EUR)

**secondary_income**: `float | None`<br/>
Secondary Income Balance (Billions of EUR)

**capital_account**: `float | None`<br/>
Capital Account Balance (Billions of EUR)

**net_lending_to_rest_of_world**: `float | None`<br/>
Balance of net lending to the rest of the world (Billions of EUR)

**financial_account**: `float | None`<br/>
Financial Account Balance (Billions of EUR)

**direct_investment**: `float | None`<br/>
Direct Investment Balance (Billions of EUR)

**portfolio_investment**: `float | None`<br/>
Portfolio Investment Balance (Billions of EUR)

**financial_derivatives**: `float | None`<br/>
Financial Derivatives Balance (Billions of EUR)

**other_investment**: `float | None`<br/>
Other Investment Balance (Billions of EUR)

**reserve_assets**: `float | None`<br/>
Reserve Assets Balance (Billions of EUR)

**errors_and_omissions**: `float | None`<br/>
Errors and Omissions (Billions of EUR)

**current_account_credit**: `float | None`<br/>
Current Account Credits (Billions of EUR)

**current_account_debit**: `float | None`<br/>
Current Account Debits (Billions of EUR)

**current_account_balance**: `float | None`<br/>
Current Account Balance (Billions of EUR)

**goods_credit**: `float | None`<br/>
Goods Credits (Billions of EUR)

**goods_debit**: `float | None`<br/>
Goods Debits (Billions of EUR)

**services_credit**: `float | None`<br/>
Services Credits (Billions of EUR)

**services_debit**: `float | None`<br/>
Services Debits (Billions of EUR)

**primary_income_credit**: `float | None`<br/>
Primary Income Credits (Billions of EUR)

**primary_income_employee_compensation_credit**: `float | None`<br/>
Primary Income Employee Compensation Credit (Billions of EUR)

**primary_income_debit**: `float | None`<br/>
Primary Income Debits (Billions of EUR)

**primary_income_employee_compensation_debit**: `float | None`<br/>
Primary Income Employee Compensation Debit (Billions of EUR)

**secondary_income_credit**: `float | None`<br/>
Secondary Income Credits (Billions of EUR)

**secondary_income_debit**: `float | None`<br/>
Secondary Income Debits (Billions of EUR)

**capital_account_credit**: `float | None`<br/>
Capital Account Credits (Billions of EUR)

**capital_account_debit**: `float | None`<br/>
Capital Account Debits (Billions of EUR)

**services_total_credit**: `float | None`<br/>
Services Total Credit (Billions of EUR)

**services_total_debit**: `float | None`<br/>
Services Total Debit (Billions of EUR)

**transport_credit**: `float | None`<br/>
Transport Credit (Billions of EUR)

**transport_debit**: `float | None`<br/>
Transport Debit (Billions of EUR)

**travel_credit**: `float | None`<br/>
Travel Credit (Billions of EUR)

**travel_debit**: `float | None`<br/>
Travel Debit (Billions of EUR)

**financial_services_credit**: `float | None`<br/>
Financial Services Credit (Billions of EUR)

**financial_services_debit**: `float | None`<br/>
Financial Services Debit (Billions of EUR)

**communications_credit**: `float | None`<br/>
Communications Credit (Billions of EUR)

**communications_debit**: `float | None`<br/>
Communications Debit (Billions of EUR)

**other_business_services_credit**: `float | None`<br/>
Other Business Services Credit (Billions of EUR)

**other_business_services_debit**: `float | None`<br/>
Other Business Services Debit (Billions of EUR)

**other_services_credit**: `float | None`<br/>
Other Services Credit (Billions of EUR)

**other_services_debit**: `float | None`<br/>
Other Services Debit (Billions of EUR)

**investment_total_credit**: `float | None`<br/>
Investment Total Credit (Billions of EUR)

**investment_total_debit**: `float | None`<br/>
Investment Total Debit (Billions of EUR)

**equity_credit**: `float | None`<br/>
Equity Credit (Billions of EUR)

**equity_reinvested_earnings_credit**: `float | None`<br/>
Equity Reinvested Earnings Credit (Billions of EUR)

**equity_debit**: `float | None`<br/>
Equity Debit (Billions of EUR)

**equity_reinvested_earnings_debit**: `float | None`<br/>
Equity Reinvested Earnings Debit (Billions of EUR)

**debt_instruments_credit**: `float | None`<br/>
Debt Instruments Credit (Billions of EUR)

**debt_instruments_debit**: `float | None`<br/>
Debt Instruments Debit (Billions of EUR)

**portfolio_investment_equity_credit**: `float | None`<br/>
Portfolio Investment Equity Credit (Billions of EUR)

**portfolio_investment_equity_debit**: `float | None`<br/>
Portfolio Investment Equity Debit (Billions of EUR)

**portfolio_investment_debt_instruments_credit**: `float | None`<br/>
Portfolio Investment Debt Instruments Credit (Billions of EUR)

**portofolio_investment_debt_instruments_debit**: `float | None`<br/>
Portfolio Investment Debt Instruments Debit (Billions of EUR)

**other_investment_credit**: `float | None`<br/>
Other Investment Credit (Billions of EUR)

**other_investment_debit**: `float | None`<br/>
Other Investment Debit (Billions of EUR)

**reserve_assets_credit**: `float | None`<br/>
Reserve Assets Credit (Billions of EUR)

**assets_total**: `float | None`<br/>
Assets Total (Billions of EUR)

**assets_equity**: `float | None`<br/>
Assets Equity (Billions of EUR)

**assets_debt_instruments**: `float | None`<br/>
Assets Debt Instruments (Billions of EUR)

**assets_mfi**: `float | None`<br/>
Assets MFIs (Billions of EUR)

**assets_non_mfi**: `float | None`<br/>
Assets Non MFIs (Billions of EUR)

**assets_direct_investment_abroad**: `float | None`<br/>
Assets Direct Investment Abroad (Billions of EUR)

**liabilities_total**: `float | None`<br/>
Liabilities Total (Billions of EUR)

**liabilities_equity**: `float | None`<br/>
Liabilities Equity (Billions of EUR)

**liabilities_debt_instruments**: `float | None`<br/>
Liabilities Debt Instruments (Billions of EUR)

**liabilities_mfi**: `float | None`<br/>
Liabilities MFIs (Billions of EUR)

**liabilities_non_mfi**: `float | None`<br/>
Liabilities Non MFIs (Billions of EUR)

**liabilities_direct_investment_euro_area**: `float | None`<br/>
Liabilities Direct Investment in Euro Area (Billions of EUR)

**assets_equity_and_fund_shares**: `float | None`<br/>
Assets Equity and Investment Fund Shares (Billions of EUR)

**assets_equity_shares**: `float | None`<br/>
Assets Equity Shares (Billions of EUR)

**assets_investment_fund_shares**: `float | None`<br/>
Assets Investment Fund Shares (Billions of EUR)

**assets_debt_short_term**: `float | None`<br/>
Assets Debt Short Term (Billions of EUR)

**assets_debt_long_term**: `float | None`<br/>
Assets Debt Long Term (Billions of EUR)

**assets_resident_sector_eurosystem**: `float | None`<br/>
Assets Resident Sector Eurosystem (Billions of EUR)

**assets_resident_sector_mfi_ex_eurosystem**: `float | None`<br/>
Assets Resident Sector MFIs outside Eurosystem (Billions of EUR)

**assets_resident_sector_government**: `float | None`<br/>
Assets Resident Sector Government (Billions of EUR)

**assets_resident_sector_other**: `float | None`<br/>
Assets Resident Sector Other (Billions of EUR)

**liabilities_equity_and_fund_shares**: `float | None`<br/>
Liabilities Equity and Investment Fund Shares (Billions of EUR)

**liabilities_investment_fund_shares**: `float | None`<br/>
Liabilities Investment Fund Shares (Billions of EUR)

**liabilities_debt_short_term**: `float | None`<br/>
Liabilities Debt Short Term (Billions of EUR)

**liabilities_debt_long_term**: `float | None`<br/>
Liabilities Debt Long Term (Billions of EUR)

**liabilities_resident_sector_government**: `float | None`<br/>
Liabilities Resident Sector Government (Billions of EUR)

**liabilities_resident_sector_other**: `float | None`<br/>
Liabilities Resident Sector Other (Billions of EUR)

**assets_currency_and_deposits**: `float | None`<br/>
Assets Currency and Deposits (Billions of EUR)

**assets_loans**: `float | None`<br/>
Assets Loans (Billions of EUR)

**assets_trade_credit_and_advances**: `float | None`<br/>
Assets Trade Credits and Advances (Billions of EUR)

**assets_eurosystem**: `float | None`<br/>
Assets Eurosystem (Billions of EUR)

**assets_other_mfi_ex_eurosystem**: `float | None`<br/>
Assets Other MFIs outside Eurosystem (Billions of EUR)

**assets_government**: `float | None`<br/>
Assets Government (Billions of EUR)

**assets_other_sectors**: `float | None`<br/>
Assets Other Sectors (Billions of EUR)

**liabilities_currency_and_deposits**: `float | None`<br/>
Liabilities Currency and Deposits (Billions of EUR)

**liabilities_loans**: `float | None`<br/>
Liabilities Loans (Billions of EUR)

**liabilities_trade_credit_and_advances**: `float | None`<br/>
Liabilities Trade Credits and Advances (Billions of EUR)

**liabilities_eurosystem**: `float | None`<br/>
Liabilities Eurosystem (Billions of EUR)

**liabilities_other_mfi_ex_eurosystem**: `float | None`<br/>
Liabilities Other MFIs outside Eurosystem (Billions of EUR)

**liabilities_government**: `float | None`<br/>
Liabilities Government (Billions of EUR)

**liabilities_other_sectors**: `float | None`<br/>
Liabilities Other Sectors (Billions of EUR)

**goods_balance**: `float | None`<br/>
Goods Balance (Billions of EUR)

**services_balance**: `float | None`<br/>
Services Balance (Billions of EUR)

**primary_income_balance**: `float | None`<br/>
Primary Income Balance (Billions of EUR)

**investment_income_balance**: `float | None`<br/>
Investment Income Balance (Billions of EUR)

**investment_income_credit**: `float | None`<br/>
Investment Income Credits (Billions of EUR)

**investment_income_debit**: `float | None`<br/>
Investment Income Debits (Billions of EUR)

**secondary_income_balance**: `float | None`<br/>
Secondary Income Balance (Billions of EUR)

**capital_account_balance**: `float | None`<br/>
Capital Account Balance (Billions of EUR)

</TabItem>
<TabItem value='ecb' label='ecb'>

**period**: `date | None`<br/>
The date representing the beginning of the reporting period.

**current_account**: `float | None`<br/>
Current Account Balance (Billions of EUR)

**goods**: `float | None`<br/>
Goods Balance (Billions of EUR)

**services**: `float | None`<br/>
Services Balance (Billions of EUR)

**primary_income**: `float | None`<br/>
Primary Income Balance (Billions of EUR)

**secondary_income**: `float | None`<br/>
Secondary Income Balance (Billions of EUR)

**capital_account**: `float | None`<br/>
Capital Account Balance (Billions of EUR)

**net_lending_to_rest_of_world**: `float | None`<br/>
Balance of net lending to the rest of the world (Billions of EUR)

**financial_account**: `float | None`<br/>
Financial Account Balance (Billions of EUR)

**direct_investment**: `float | None`<br/>
Direct Investment Balance (Billions of EUR)

**portfolio_investment**: `float | None`<br/>
Portfolio Investment Balance (Billions of EUR)

**financial_derivatives**: `float | None`<br/>
Financial Derivatives Balance (Billions of EUR)

**other_investment**: `float | None`<br/>
Other Investment Balance (Billions of EUR)

**reserve_assets**: `float | None`<br/>
Reserve Assets Balance (Billions of EUR)

**errors_and_omissions**: `float | None`<br/>
Errors and Omissions (Billions of EUR)

**current_account_credit**: `float | None`<br/>
Current Account Credits (Billions of EUR)

**current_account_debit**: `float | None`<br/>
Current Account Debits (Billions of EUR)

**current_account_balance**: `float | None`<br/>
Current Account Balance (Billions of EUR)

**goods_credit**: `float | None`<br/>
Goods Credits (Billions of EUR)

**goods_debit**: `float | None`<br/>
Goods Debits (Billions of EUR)

**services_credit**: `float | None`<br/>
Services Credits (Billions of EUR)

**services_debit**: `float | None`<br/>
Services Debits (Billions of EUR)

**primary_income_credit**: `float | None`<br/>
Primary Income Credits (Billions of EUR)

**primary_income_employee_compensation_credit**: `float | None`<br/>
Primary Income Employee Compensation Credit (Billions of EUR)

**primary_income_debit**: `float | None`<br/>
Primary Income Debits (Billions of EUR)

**primary_income_employee_compensation_debit**: `float | None`<br/>
Primary Income Employee Compensation Debit (Billions of EUR)

**secondary_income_credit**: `float | None`<br/>
Secondary Income Credits (Billions of EUR)

**secondary_income_debit**: `float | None`<br/>
Secondary Income Debits (Billions of EUR)

**capital_account_credit**: `float | None`<br/>
Capital Account Credits (Billions of EUR)

**capital_account_debit**: `float | None`<br/>
Capital Account Debits (Billions of EUR)

**services_total_credit**: `float | None`<br/>
Services Total Credit (Billions of EUR)

**services_total_debit**: `float | None`<br/>
Services Total Debit (Billions of EUR)

**transport_credit**: `float | None`<br/>
Transport Credit (Billions of EUR)

**transport_debit**: `float | None`<br/>
Transport Debit (Billions of EUR)

**travel_credit**: `float | None`<br/>
Travel Credit (Billions of EUR)

**travel_debit**: `float | None`<br/>
Travel Debit (Billions of EUR)

**financial_services_credit**: `float | None`<br/>
Financial Services Credit (Billions of EUR)

**financial_services_debit**: `float | None`<br/>
Financial Services Debit (Billions of EUR)

**communications_credit**: `float | None`<br/>
Communications Credit (Billions of EUR)

**communications_debit**: `float | None`<br/>
Communications Debit (Billions of EUR)

**other_business_services_credit**: `float | None`<br/>
Other Business Services Credit (Billions of EUR)

**other_business_services_debit**: `float | None`<br/>
Other Business Services Debit (Billions of EUR)

**other_services_credit**: `float | None`<br/>
Other Services Credit (Billions of EUR)

**other_services_debit**: `float | None`<br/>
Other Services Debit (Billions of EUR)

**investment_total_credit**: `float | None`<br/>
Investment Total Credit (Billions of EUR)

**investment_total_debit**: `float | None`<br/>
Investment Total Debit (Billions of EUR)

**equity_credit**: `float | None`<br/>
Equity Credit (Billions of EUR)

**equity_reinvested_earnings_credit**: `float | None`<br/>
Equity Reinvested Earnings Credit (Billions of EUR)

**equity_debit**: `float | None`<br/>
Equity Debit (Billions of EUR)

**equity_reinvested_earnings_debit**: `float | None`<br/>
Equity Reinvested Earnings Debit (Billions of EUR)

**debt_instruments_credit**: `float | None`<br/>
Debt Instruments Credit (Billions of EUR)

**debt_instruments_debit**: `float | None`<br/>
Debt Instruments Debit (Billions of EUR)

**portfolio_investment_equity_credit**: `float | None`<br/>
Portfolio Investment Equity Credit (Billions of EUR)

**portfolio_investment_equity_debit**: `float | None`<br/>
Portfolio Investment Equity Debit (Billions of EUR)

**portfolio_investment_debt_instruments_credit**: `float | None`<br/>
Portfolio Investment Debt Instruments Credit (Billions of EUR)

**portofolio_investment_debt_instruments_debit**: `float | None`<br/>
Portfolio Investment Debt Instruments Debit (Billions of EUR)

**other_investment_credit**: `float | None`<br/>
Other Investment Credit (Billions of EUR)

**other_investment_debit**: `float | None`<br/>
Other Investment Debit (Billions of EUR)

**reserve_assets_credit**: `float | None`<br/>
Reserve Assets Credit (Billions of EUR)

**assets_total**: `float | None`<br/>
Assets Total (Billions of EUR)

**assets_equity**: `float | None`<br/>
Assets Equity (Billions of EUR)

**assets_debt_instruments**: `float | None`<br/>
Assets Debt Instruments (Billions of EUR)

**assets_mfi**: `float | None`<br/>
Assets MFIs (Billions of EUR)

**assets_non_mfi**: `float | None`<br/>
Assets Non MFIs (Billions of EUR)

**assets_direct_investment_abroad**: `float | None`<br/>
Assets Direct Investment Abroad (Billions of EUR)

**liabilities_total**: `float | None`<br/>
Liabilities Total (Billions of EUR)

**liabilities_equity**: `float | None`<br/>
Liabilities Equity (Billions of EUR)

**liabilities_debt_instruments**: `float | None`<br/>
Liabilities Debt Instruments (Billions of EUR)

**liabilities_mfi**: `float | None`<br/>
Liabilities MFIs (Billions of EUR)

**liabilities_non_mfi**: `float | None`<br/>
Liabilities Non MFIs (Billions of EUR)

**liabilities_direct_investment_euro_area**: `float | None`<br/>
Liabilities Direct Investment in Euro Area (Billions of EUR)

**assets_equity_and_fund_shares**: `float | None`<br/>
Assets Equity and Investment Fund Shares (Billions of EUR)

**assets_equity_shares**: `float | None`<br/>
Assets Equity Shares (Billions of EUR)

**assets_investment_fund_shares**: `float | None`<br/>
Assets Investment Fund Shares (Billions of EUR)

**assets_debt_short_term**: `float | None`<br/>
Assets Debt Short Term (Billions of EUR)

**assets_debt_long_term**: `float | None`<br/>
Assets Debt Long Term (Billions of EUR)

**assets_resident_sector_eurosystem**: `float | None`<br/>
Assets Resident Sector Eurosystem (Billions of EUR)

**assets_resident_sector_mfi_ex_eurosystem**: `float | None`<br/>
Assets Resident Sector MFIs outside Eurosystem (Billions of EUR)

**assets_resident_sector_government**: `float | None`<br/>
Assets Resident Sector Government (Billions of EUR)

**assets_resident_sector_other**: `float | None`<br/>
Assets Resident Sector Other (Billions of EUR)

**liabilities_equity_and_fund_shares**: `float | None`<br/>
Liabilities Equity and Investment Fund Shares (Billions of EUR)

**liabilities_investment_fund_shares**: `float | None`<br/>
Liabilities Investment Fund Shares (Billions of EUR)

**liabilities_debt_short_term**: `float | None`<br/>
Liabilities Debt Short Term (Billions of EUR)

**liabilities_debt_long_term**: `float | None`<br/>
Liabilities Debt Long Term (Billions of EUR)

**liabilities_resident_sector_government**: `float | None`<br/>
Liabilities Resident Sector Government (Billions of EUR)

**liabilities_resident_sector_other**: `float | None`<br/>
Liabilities Resident Sector Other (Billions of EUR)

**assets_currency_and_deposits**: `float | None`<br/>
Assets Currency and Deposits (Billions of EUR)

**assets_loans**: `float | None`<br/>
Assets Loans (Billions of EUR)

**assets_trade_credit_and_advances**: `float | None`<br/>
Assets Trade Credits and Advances (Billions of EUR)

**assets_eurosystem**: `float | None`<br/>
Assets Eurosystem (Billions of EUR)

**assets_other_mfi_ex_eurosystem**: `float | None`<br/>
Assets Other MFIs outside Eurosystem (Billions of EUR)

**assets_government**: `float | None`<br/>
Assets Government (Billions of EUR)

**assets_other_sectors**: `float | None`<br/>
Assets Other Sectors (Billions of EUR)

**liabilities_currency_and_deposits**: `float | None`<br/>
Liabilities Currency and Deposits (Billions of EUR)

**liabilities_loans**: `float | None`<br/>
Liabilities Loans (Billions of EUR)

**liabilities_trade_credit_and_advances**: `float | None`<br/>
Liabilities Trade Credits and Advances (Billions of EUR)

**liabilities_eurosystem**: `float | None`<br/>
Liabilities Eurosystem (Billions of EUR)

**liabilities_other_mfi_ex_eurosystem**: `float | None`<br/>
Liabilities Other MFIs outside Eurosystem (Billions of EUR)

**liabilities_government**: `float | None`<br/>
Liabilities Government (Billions of EUR)

**liabilities_other_sectors**: `float | None`<br/>
Liabilities Other Sectors (Billions of EUR)

**goods_balance**: `float | None`<br/>
Goods Balance (Billions of EUR)

**services_balance**: `float | None`<br/>
Services Balance (Billions of EUR)

**primary_income_balance**: `float | None`<br/>
Primary Income Balance (Billions of EUR)

**investment_income_balance**: `float | None`<br/>
Investment Income Balance (Billions of EUR)

**investment_income_credit**: `float | None`<br/>
Investment Income Credits (Billions of EUR)

**investment_income_debit**: `float | None`<br/>
Investment Income Debits (Billions of EUR)

**secondary_income_balance**: `float | None`<br/>
Secondary Income Balance (Billions of EUR)

**capital_account_balance**: `float | None`<br/>
Capital Account Balance (Billions of EUR)

</TabItem>
<TabItem value='fred' label='fred'>

**period**: `date | None`<br/>
The date representing the beginning of the reporting period.

**current_account**: `float | None`<br/>
Current Account Balance (Billions of EUR)

**goods**: `float | None`<br/>
Goods Balance (Billions of EUR)

**services**: `float | None`<br/>
Services Balance (Billions of EUR)

**primary_income**: `float | None`<br/>
Primary Income Balance (Billions of EUR)

**secondary_income**: `float | None`<br/>
Secondary Income Balance (Billions of EUR)

**capital_account**: `float | None`<br/>
Capital Account Balance (Billions of EUR)

**net_lending_to_rest_of_world**: `float | None`<br/>
Balance of net lending to the rest of the world (Billions of EUR)

**financial_account**: `float | None`<br/>
Financial Account Balance (Billions of EUR)

**direct_investment**: `float | None`<br/>
Direct Investment Balance (Billions of EUR)

**portfolio_investment**: `float | None`<br/>
Portfolio Investment Balance (Billions of EUR)

**financial_derivatives**: `float | None`<br/>
Financial Derivatives Balance (Billions of EUR)

**other_investment**: `float | None`<br/>
Other Investment Balance (Billions of EUR)

**reserve_assets**: `float | None`<br/>
Reserve Assets Balance (Billions of EUR)

**errors_and_omissions**: `float | None`<br/>
Errors and Omissions (Billions of EUR)

**current_account_credit**: `float | None`<br/>
Current Account Credits (Billions of EUR)

**current_account_debit**: `float | None`<br/>
Current Account Debits (Billions of EUR)

**current_account_balance**: `float | None`<br/>
Current Account Balance (Billions of EUR)

**goods_credit**: `float | None`<br/>
Goods Credits (Billions of EUR)

**goods_debit**: `float | None`<br/>
Goods Debits (Billions of EUR)

**services_credit**: `float | None`<br/>
Services Credits (Billions of EUR)

**services_debit**: `float | None`<br/>
Services Debits (Billions of EUR)

**primary_income_credit**: `float | None`<br/>
Primary Income Credits (Billions of EUR)

**primary_income_employee_compensation_credit**: `float | None`<br/>
Primary Income Employee Compensation Credit (Billions of EUR)

**primary_income_debit**: `float | None`<br/>
Primary Income Debits (Billions of EUR)

**primary_income_employee_compensation_debit**: `float | None`<br/>
Primary Income Employee Compensation Debit (Billions of EUR)

**secondary_income_credit**: `float | None`<br/>
Secondary Income Credits (Billions of EUR)

**secondary_income_debit**: `float | None`<br/>
Secondary Income Debits (Billions of EUR)

**capital_account_credit**: `float | None`<br/>
Capital Account Credits (Billions of EUR)

**capital_account_debit**: `float | None`<br/>
Capital Account Debits (Billions of EUR)

**services_total_credit**: `float | None`<br/>
Services Total Credit (Billions of EUR)

**services_total_debit**: `float | None`<br/>
Services Total Debit (Billions of EUR)

**transport_credit**: `float | None`<br/>
Transport Credit (Billions of EUR)

**transport_debit**: `float | None`<br/>
Transport Debit (Billions of EUR)

**travel_credit**: `float | None`<br/>
Travel Credit (Billions of EUR)

**travel_debit**: `float | None`<br/>
Travel Debit (Billions of EUR)

**financial_services_credit**: `float | None`<br/>
Financial Services Credit (Billions of EUR)

**financial_services_debit**: `float | None`<br/>
Financial Services Debit (Billions of EUR)

**communications_credit**: `float | None`<br/>
Communications Credit (Billions of EUR)

**communications_debit**: `float | None`<br/>
Communications Debit (Billions of EUR)

**other_business_services_credit**: `float | None`<br/>
Other Business Services Credit (Billions of EUR)

**other_business_services_debit**: `float | None`<br/>
Other Business Services Debit (Billions of EUR)

**other_services_credit**: `float | None`<br/>
Other Services Credit (Billions of EUR)

**other_services_debit**: `float | None`<br/>
Other Services Debit (Billions of EUR)

**investment_total_credit**: `float | None`<br/>
Investment Total Credit (Billions of EUR)

**investment_total_debit**: `float | None`<br/>
Investment Total Debit (Billions of EUR)

**equity_credit**: `float | None`<br/>
Equity Credit (Billions of EUR)

**equity_reinvested_earnings_credit**: `float | None`<br/>
Equity Reinvested Earnings Credit (Billions of EUR)

**equity_debit**: `float | None`<br/>
Equity Debit (Billions of EUR)

**equity_reinvested_earnings_debit**: `float | None`<br/>
Equity Reinvested Earnings Debit (Billions of EUR)

**debt_instruments_credit**: `float | None`<br/>
Debt Instruments Credit (Billions of EUR)

**debt_instruments_debit**: `float | None`<br/>
Debt Instruments Debit (Billions of EUR)

**portfolio_investment_equity_credit**: `float | None`<br/>
Portfolio Investment Equity Credit (Billions of EUR)

**portfolio_investment_equity_debit**: `float | None`<br/>
Portfolio Investment Equity Debit (Billions of EUR)

**portfolio_investment_debt_instruments_credit**: `float | None`<br/>
Portfolio Investment Debt Instruments Credit (Billions of EUR)

**portofolio_investment_debt_instruments_debit**: `float | None`<br/>
Portfolio Investment Debt Instruments Debit (Billions of EUR)

**other_investment_credit**: `float | None`<br/>
Other Investment Credit (Billions of EUR)

**other_investment_debit**: `float | None`<br/>
Other Investment Debit (Billions of EUR)

**reserve_assets_credit**: `float | None`<br/>
Reserve Assets Credit (Billions of EUR)

**assets_total**: `float | None`<br/>
Assets Total (Billions of EUR)

**assets_equity**: `float | None`<br/>
Assets Equity (Billions of EUR)

**assets_debt_instruments**: `float | None`<br/>
Assets Debt Instruments (Billions of EUR)

**assets_mfi**: `float | None`<br/>
Assets MFIs (Billions of EUR)

**assets_non_mfi**: `float | None`<br/>
Assets Non MFIs (Billions of EUR)

**assets_direct_investment_abroad**: `float | None`<br/>
Assets Direct Investment Abroad (Billions of EUR)

**liabilities_total**: `float | None`<br/>
Liabilities Total (Billions of EUR)

**liabilities_equity**: `float | None`<br/>
Liabilities Equity (Billions of EUR)

**liabilities_debt_instruments**: `float | None`<br/>
Liabilities Debt Instruments (Billions of EUR)

**liabilities_mfi**: `float | None`<br/>
Liabilities MFIs (Billions of EUR)

**liabilities_non_mfi**: `float | None`<br/>
Liabilities Non MFIs (Billions of EUR)

**liabilities_direct_investment_euro_area**: `float | None`<br/>
Liabilities Direct Investment in Euro Area (Billions of EUR)

**assets_equity_and_fund_shares**: `float | None`<br/>
Assets Equity and Investment Fund Shares (Billions of EUR)

**assets_equity_shares**: `float | None`<br/>
Assets Equity Shares (Billions of EUR)

**assets_investment_fund_shares**: `float | None`<br/>
Assets Investment Fund Shares (Billions of EUR)

**assets_debt_short_term**: `float | None`<br/>
Assets Debt Short Term (Billions of EUR)

**assets_debt_long_term**: `float | None`<br/>
Assets Debt Long Term (Billions of EUR)

**assets_resident_sector_eurosystem**: `float | None`<br/>
Assets Resident Sector Eurosystem (Billions of EUR)

**assets_resident_sector_mfi_ex_eurosystem**: `float | None`<br/>
Assets Resident Sector MFIs outside Eurosystem (Billions of EUR)

**assets_resident_sector_government**: `float | None`<br/>
Assets Resident Sector Government (Billions of EUR)

**assets_resident_sector_other**: `float | None`<br/>
Assets Resident Sector Other (Billions of EUR)

**liabilities_equity_and_fund_shares**: `float | None`<br/>
Liabilities Equity and Investment Fund Shares (Billions of EUR)

**liabilities_investment_fund_shares**: `float | None`<br/>
Liabilities Investment Fund Shares (Billions of EUR)

**liabilities_debt_short_term**: `float | None`<br/>
Liabilities Debt Short Term (Billions of EUR)

**liabilities_debt_long_term**: `float | None`<br/>
Liabilities Debt Long Term (Billions of EUR)

**liabilities_resident_sector_government**: `float | None`<br/>
Liabilities Resident Sector Government (Billions of EUR)

**liabilities_resident_sector_other**: `float | None`<br/>
Liabilities Resident Sector Other (Billions of EUR)

**assets_currency_and_deposits**: `float | None`<br/>
Assets Currency and Deposits (Billions of EUR)

**assets_loans**: `float | None`<br/>
Assets Loans (Billions of EUR)

**assets_trade_credit_and_advances**: `float | None`<br/>
Assets Trade Credits and Advances (Billions of EUR)

**assets_eurosystem**: `float | None`<br/>
Assets Eurosystem (Billions of EUR)

**assets_other_mfi_ex_eurosystem**: `float | None`<br/>
Assets Other MFIs outside Eurosystem (Billions of EUR)

**assets_government**: `float | None`<br/>
Assets Government (Billions of EUR)

**assets_other_sectors**: `float | None`<br/>
Assets Other Sectors (Billions of EUR)

**liabilities_currency_and_deposits**: `float | None`<br/>
Liabilities Currency and Deposits (Billions of EUR)

**liabilities_loans**: `float | None`<br/>
Liabilities Loans (Billions of EUR)

**liabilities_trade_credit_and_advances**: `float | None`<br/>
Liabilities Trade Credits and Advances (Billions of EUR)

**liabilities_eurosystem**: `float | None`<br/>
Liabilities Eurosystem (Billions of EUR)

**liabilities_other_mfi_ex_eurosystem**: `float | None`<br/>
Liabilities Other MFIs outside Eurosystem (Billions of EUR)

**liabilities_government**: `float | None`<br/>
Liabilities Government (Billions of EUR)

**liabilities_other_sectors**: `float | None`<br/>
Liabilities Other Sectors (Billions of EUR)

**goods_balance**: `float | None`<br/>
Goods Balance (Billions of EUR)

**services_balance**: `float | None`<br/>
Services Balance (Billions of EUR)

**primary_income_balance**: `float | None`<br/>
Primary Income Balance (Billions of EUR)

**investment_income_balance**: `float | None`<br/>
Investment Income Balance (Billions of EUR)

**investment_income_credit**: `float | None`<br/>
Investment Income Credits (Billions of EUR)

**investment_income_debit**: `float | None`<br/>
Investment Income Debits (Billions of EUR)

**secondary_income_balance**: `float | None`<br/>
Secondary Income Balance (Billions of EUR)

**capital_account_balance**: `float | None`<br/>
Capital Account Balance (Billions of EUR)

</TabItem>
</Tabs>

