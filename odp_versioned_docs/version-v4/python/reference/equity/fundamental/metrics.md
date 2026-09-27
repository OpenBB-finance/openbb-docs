---
title: "metrics"
description: "Learn about key metrics for a given company using the `obb.equity.fundamental.metrics`  Python function. This API endpoint provides data such as revenue per share, net  income per share, market capitalization, price-to-earnings ratio, and more. Explore  the available parameters and returned data to analyze financial performance. Full  documentation and usage examples available."
keywords:
- key metrics
- python function
- documentation
- API
- parameters
- returns
- data
- symbol
- period
- limit
- provider
- with_ttm
- revenue per share
- net income per share
- operating cash flow per share
- free cash flow per share
- cash per share
- book value per share
- tangible book value per share
- shareholders equity per share
- interest debt per share
- market capitalization
- enterprise value
- price-to-earnings ratio
- price-to-sales ratio
- price-to-operating cash flow ratio
- price-to-free cash flow ratio
- price-to-book ratio
- price-to-tangible book ratio
- earnings yield
- free cash flow yield
- debt-to-equity ratio
- debt-to-assets ratio
- net debt-to-EBITDA ratio
- current ratio
- interest coverage
- income quality
- dividend yield
- payout ratio
- sales general and administrative expenses-to-revenue ratio
- research and development expenses-to-revenue ratio
- intangibles-to-total assets ratio
- capital expenditures-to-operating cash flow ratio
- capital expenditures-to-revenue ratio
- capital expenditures-to-depreciation ratio
- stock-based compensation-to-revenue ratio
- Graham number
- return on invested capital
- return on tangible assets
- Graham net-net working capital
- working capital
- tangible asset value
- net current asset value
- invested capital
- average receivables
- average payables
- average inventory
- days sales outstanding
- days payables outstanding
- days of inventory on hand
- receivables turnover
- payables turnover
- inventory turnover
- return on equity
- capital expenditures per share
- calendar year
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/fundamental/metrics - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get fundamental metrics for a given company.

Examples
--------

```python
from openbb import obb
obb.equity.fundamental.metrics(symbol='AAPL')
obb.equity.fundamental.metrics(symbol='AAPL', period='annual', limit=100)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): finviz, fmp, intrinio, yfinance.

</TabItem>
<TabItem value='finviz' label='finviz'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): finviz, fmp, intrinio, yfinance.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): finviz, fmp, intrinio, yfinance.

**ttm**: `Literal['include', 'exclude', 'only'] | None`<br/>
*Default:* only<br/>
Specify whether to include, exclude, or only show TTM (Trailing Twelve Months) data. The default is 'only'.

**period**: `Literal['q1', 'q2', 'q3', 'q4', 'fy', 'annual', 'quarter'] | None`<br/>
*Default:* annual<br/>
Specify the fiscal period for the data. Ignored when TTM is set to 'only'.

**limit**: `int | None`<br/>
Only applicable when TTM is not set to 'only'. Defines the number of most recent reporting periods to return. The default is 5.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): finviz, fmp, intrinio, yfinance.

</TabItem>
<TabItem value='yfinance' label='yfinance'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): finviz, fmp, intrinio, yfinance.

</TabItem>
</Tabs>

---

## Returns

**results**: `KeyMetrics`

Serializable results.

**provider**: `Optional[Literal['finviz', 'fmp', 'intrinio', 'yfinance']]`

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

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**period_ending**: `date | None`<br/>
End date of the reporting period.

**fiscal_year**: `int | None`<br/>
Fiscal year for the fiscal period, if available.

**fiscal_period**: `str | None`<br/>
Fiscal period for the data, if available.

**currency**: `str | None`<br/>
Currency in which the data is reported.

**market_cap**: `int | float | None`<br/>
</TabItem>
<TabItem value='finviz' label='finviz'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**period_ending**: `date | None`<br/>
End date of the reporting period.

**fiscal_year**: `int | None`<br/>
Fiscal year for the fiscal period, if available.

**fiscal_period**: `str | None`<br/>
Fiscal period for the data, if available.

**currency**: `str | None`<br/>
Currency in which the data is reported.

**market_cap**: `int | float | None`<br/>
**pe_ratio**: `float | None`<br/>
Price-to-earnings ratio (TTM).

**forward_pe**: `float | None`<br/>
Forward price-to-earnings ratio (forward P/E)

**eps**: `float | None`<br/>
Earnings per share (EPS)

**price_to_sales**: `float | None`<br/>
Price-to-sales ratio (P/S)

**price_to_book**: `float | None`<br/>
Price-to-book ratio (P/B)

**book_value_per_share**: `float | None`<br/>
Book value per share (Book/sh)

**price_to_cash**: `float | None`<br/>
Price-to-cash ratio (P/C)

**cash_per_share**: `float | None`<br/>
Cash per share (Cash/sh)

**price_to_free_cash_flow**: `float | None`<br/>
Price-to-free cash flow ratio (P/FCF)

**debt_to_equity**: `float | None`<br/>
Debt-to-equity ratio (Debt/Eq)

**long_term_debt_to_equity**: `float | None`<br/>
Long-term debt-to-equity ratio (LT Debt/Eq)

**quick_ratio**: `float | None`<br/>
Quick ratio

**current_ratio**: `float | None`<br/>
Current ratio

**gross_margin**: `float | None`<br/>
Gross margin, as a normalized percent.

**profit_margin**: `float | None`<br/>
Profit margin, as a normalized percent.

**operating_margin**: `float | None`<br/>
Operating margin, as a normalized percent.

**return_on_assets**: `float | None`<br/>
Return on assets (ROA), as a normalized percent.

**return_on_investment**: `float | None`<br/>
Return on investment (ROI), as a normalized percent.

**return_on_equity**: `float | None`<br/>
Return on equity (ROE), as a normalized percent.

**payout_ratio**: `float | None`<br/>
Payout ratio, as a normalized percent.

**dividend_yield**: `float | None`<br/>
Dividend yield, as a normalized percent.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**period_ending**: `date | None`<br/>
End date of the reporting period.

**fiscal_year**: `int | None`<br/>
Fiscal year for the fiscal period, if available.

**fiscal_period**: `str | None`<br/>
Fiscal period for the data, if available.

**currency**: `str | None`<br/>
Currency in which the data is reported.

**market_cap**: `int | float | None`<br/>
**enterprise_value**: `int | float | None`<br/>
Enterprise Value.

**ev_to_sales**: `float | None`<br/>
Enterprise Value to Sales ratio.

**ev_to_operating_cash_flow**: `float | None`<br/>
Enterprise Value to Operating Cash Flow ratio.

**ev_to_free_cash_flow**: `float | None`<br/>
Enterprise Value to Free Cash Flow ratio.

**ev_to_ebitda**: `float | None`<br/>
Enterprise Value to EBITDA ratio.

**net_debt_to_ebitda**: `float | None`<br/>
Net Debt to EBITDA ratio.

**current_ratio**: `float | None`<br/>
Current Ratio.

**income_quality**: `float | None`<br/>
Income Quality.

**graham_number**: `float | None`<br/>
Graham Number.

**graham_net_net**: `float | None`<br/>
Graham Net Net.

**tax_burden**: `float | None`<br/>
Tax Burden.

**interest_burden**: `float | None`<br/>
Interest Burden.

**working_capital**: `int | float | None`<br/>
Working Capital.

**invested_capital**: `int | float | None`<br/>
Invested Capital.

**return_on_assets**: `float | None`<br/>
Return on Assets.

**operating_return_on_assets**: `float | None`<br/>
Operating Return on Assets.

**return_on_tangible_assets**: `float | None`<br/>
Return on Tangible Assets.

**return_on_equity**: `float | None`<br/>
Return on Equity.

**return_on_invested_capital**: `float | None`<br/>
Return on Invested Capital.

**return_on_capital_employed**: `float | None`<br/>
Return on Capital Employed.

**earnings_yield**: `float | None`<br/>
Earnings Yield.

**free_cash_flow_yield**: `float | None`<br/>
Free Cash Flow Yield.

**capex_to_operating_cash_flow**: `float | None`<br/>
Capex to Operating Cash Flow.

**capex_to_depreciation**: `float | None`<br/>
Capex to Depreciation.

**capex_to_revenue**: `float | None`<br/>
Capex to Revenue.

**sales_general_and_administrative_to_revenue**: `float | None`<br/>
Sales, General and Administrative to Revenue.

**research_and_development_to_revenue**: `float | None`<br/>
Research and Development to Revenue.

**stock_based_compensation_to_revenue**: `float | None`<br/>
Stock Based Compensation to Revenue.

**intangibles_to_total_assets**: `float | None`<br/>
Intangibles to Total Assets.

**average_receivables**: `int | float | None`<br/>
Average Receivables.

**average_payables**: `int | float | None`<br/>
Average Payables.

**average_inventory**: `int | float | None`<br/>
Average Inventory.

**days_of_sales_outstanding**: `float | None`<br/>
Days of Sales Outstanding.

**days_of_payables_outstanding**: `float | None`<br/>
Days of Payables Outstanding.

**days_of_inventory_outstanding**: `float | None`<br/>
Days of Inventory Outstanding.

**operating_cycle**: `float | None`<br/>
Operating Cycle.

**cash_conversion_cycle**: `float | None`<br/>
Cash Conversion Cycle.

**free_cash_flow_to_equity**: `float | None`<br/>
Free Cash Flow to Equity.

**free_cash_flow_to_firm**: `float | None`<br/>
Free Cash Flow to Firm.

**tangible_asset_value**: `int | float | None`<br/>
Tangible Asset Value.

**net_current_asset_value**: `int | float | None`<br/>
Net Current Asset Value.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**period_ending**: `date | None`<br/>
End date of the reporting period.

**fiscal_year**: `int | None`<br/>
Fiscal year for the fiscal period, if available.

**fiscal_period**: `str | None`<br/>
Fiscal period for the data, if available.

**currency**: `str | None`<br/>
Currency in which the data is reported.

**market_cap**: `int | float | None`<br/>
**pe_ratio**: `float | None`<br/>
Price-to-earnings ratio (TTM).

**price_to_book**: `float | None`<br/>
Price to book ratio.

**price_to_tangible_book**: `float | None`<br/>
Price to tangible book ratio.

**price_to_revenue**: `float | None`<br/>
Price to revenue ratio.

**quick_ratio**: `float | None`<br/>
Quick ratio.

**gross_margin**: `float | None`<br/>
Gross margin, as a normalized percent.

**ebit_margin**: `float | None`<br/>
EBIT margin, as a normalized percent.

**profit_margin**: `float | None`<br/>
Profit margin, as a normalized percent.

**eps**: `float | None`<br/>
Basic earnings per share.

**eps_growth**: `float | None`<br/>
EPS growth, as a normalized percent.

**revenue_growth**: `float | None`<br/>
Revenue growth, as a normalized percent.

**ebitda_growth**: `float | None`<br/>
EBITDA growth, as a normalized percent.

**ebit_growth**: `float | None`<br/>
EBIT growth, as a normalized percent.

**net_income_growth**: `float | None`<br/>
Net income growth, as a normalized percent.

**free_cash_flow_to_firm_growth**: `float | None`<br/>
Free cash flow to firm growth, as a normalized percent.

**invested_capital_growth**: `float | None`<br/>
Invested capital growth, as a normalized percent.

**return_on_assets**: `float | None`<br/>
Return on assets, as a normalized percent.

**return_on_equity**: `float | None`<br/>
Return on equity, as a normalized percent.

**return_on_invested_capital**: `float | None`<br/>
Return on invested capital, as a normalized percent.

**ebitda**: `int | None`<br/>
Earnings before interest, taxes, depreciation, and amortization.

**ebit**: `int | None`<br/>
Earnings before interest and taxes.

**long_term_debt**: `int | None`<br/>
Long-term debt.

**total_debt**: `int | None`<br/>
Total debt.

**total_capital**: `int | None`<br/>
The sum of long-term debt and total shareholder equity.

**enterprise_value**: `int | None`<br/>
Enterprise value.

**free_cash_flow_to_firm**: `int | None`<br/>
Free cash flow to firm.

**altman_z_score**: `float | None`<br/>
Altman Z-score.

**beta**: `float | None`<br/>
Beta relative to the broad market (rolling three-year).

**dividend_yield**: `float | None`<br/>
Dividend yield, as a normalized percent.

**earnings_yield**: `float | None`<br/>
Earnings yield, as a normalized percent.

**last_price**: `float | None`<br/>
Last price of the stock.

**year_high**: `float | None`<br/>
52 week high

**year_low**: `float | None`<br/>
52 week low

**volume_avg**: `int | None`<br/>
Average daily volume.

**short_interest**: `int | None`<br/>
Number of shares reported as sold short.

**shares_outstanding**: `int | None`<br/>
Weighted average shares outstanding (TTM).

**days_to_cover**: `float | None`<br/>
Days to cover short interest, based on average daily volume.

</TabItem>
<TabItem value='yfinance' label='yfinance'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**period_ending**: `date | None`<br/>
End date of the reporting period.

**fiscal_year**: `int | None`<br/>
Fiscal year for the fiscal period, if available.

**fiscal_period**: `str | None`<br/>
Fiscal period for the data, if available.

**currency**: `str | None`<br/>
Currency in which the data is presented.

**market_cap**: `int | float | None`<br/>
**pe_ratio**: `float | None`<br/>
Price-to-earnings ratio (TTM).

**forward_pe**: `float | None`<br/>
Forward price-to-earnings ratio.

**peg_ratio**: `float | None`<br/>
PEG ratio (5-year expected).

**peg_ratio_ttm**: `float | None`<br/>
PEG ratio (TTM).

**eps_ttm**: `float | None`<br/>
Earnings per share (TTM).

**eps_forward**: `float | None`<br/>
Forward earnings per share.

**enterprise_to_ebitda**: `float | None`<br/>
Enterprise value to EBITDA ratio.

**earnings_growth**: `float | None`<br/>
Earnings growth (Year Over Year), as a normalized percent.

**earnings_growth_quarterly**: `float | None`<br/>
Quarterly earnings growth (Year Over Year), as a normalized percent.

**revenue_per_share**: `float | None`<br/>
Revenue per share (TTM).

**revenue_growth**: `float | None`<br/>
Revenue growth (Year Over Year), as a normalized percent.

**enterprise_to_revenue**: `float | None`<br/>
Enterprise value to revenue ratio.

**cash_per_share**: `float | None`<br/>
Cash per share.

**quick_ratio**: `float | None`<br/>
Quick ratio.

**current_ratio**: `float | None`<br/>
Current ratio.

**debt_to_equity**: `float | None`<br/>
Debt-to-equity ratio.

**gross_margin**: `float | None`<br/>
Gross margin, as a normalized percent.

**operating_margin**: `float | None`<br/>
Operating margin, as a normalized percent.

**ebitda_margin**: `float | None`<br/>
EBITDA margin, as a normalized percent.

**profit_margin**: `float | None`<br/>
Profit margin, as a normalized percent.

**return_on_assets**: `float | None`<br/>
Return on assets, as a normalized percent.

**return_on_equity**: `float | None`<br/>
Return on equity, as a normalized percent.

**dividend_yield**: `float | None`<br/>
Dividend yield, as a normalized percent.

**dividend_yield_5y_avg**: `float | None`<br/>
5-year average dividend yield, as a normalized percent.

**payout_ratio**: `float | None`<br/>
Payout ratio.

**book_value**: `float | None`<br/>
Book value per share.

**price_to_book**: `float | None`<br/>
Price-to-book ratio.

**enterprise_value**: `int | None`<br/>
Enterprise value.

**overall_risk**: `float | None`<br/>
Overall risk score.

**audit_risk**: `float | None`<br/>
Audit risk score.

**board_risk**: `float | None`<br/>
Board risk score.

**compensation_risk**: `float | None`<br/>
Compensation risk score.

**shareholder_rights_risk**: `float | None`<br/>
Shareholder rights risk score.

**beta**: `float | None`<br/>
Beta relative to the broad market (5-year monthly).

**price_return_1y**: `float | None`<br/>
One-year price return, as a normalized percent.

</TabItem>
</Tabs>

