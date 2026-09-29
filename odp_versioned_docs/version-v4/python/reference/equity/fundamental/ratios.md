---
title: "ratios"
description: "Learn about financial ratios for a given company over time. Explore various  equity ratios, such as current ratio, quick ratio, and cash conversion cycle. Understand  key profitability metrics like return on equity and profit margin. Analyze debt  ratios, inventory turnover, and operating and free cash flows. Evaluate the price  to earnings ratio and dividend yield."
keywords:
- financial ratios
- company ratios
- ratios over time
- equity ratios
- current ratio
- quick ratio
- cash conversion cycle
- return on equity
- profit margin
- debt ratio
- inventory turnover
- operating cash flow
- free cash flow
- price to earnings ratio
- dividend yield
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/fundamental/ratios - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get an extensive set of financial and accounting ratios for a given company over time.

Examples
--------

```python
from openbb import obb
obb.equity.fundamental.ratios(symbol='AAPL')
obb.equity.fundamental.ratios(symbol='AAPL', period='annual', limit=12)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp.

**limit**: `int | None`<br/>
The number of data entries to return.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp.

**limit**: `int | None`<br/>
Only applicable when TTM is not set to 'only'. Defines the number of most recent reporting periods to return. The default is 5.

**ttm**: `Literal['include', 'exclude', 'only'] | None`<br/>
*Default:* only<br/>
Specify whether to include, exclude, or only show TTM (Trailing Twelve Months) data. The default is 'only'.

**period**: `Literal['q1', 'q2', 'q3', 'q4', 'fy', 'annual', 'quarter'] | None`<br/>
*Default:* annual<br/>
Specify the fiscal period for the data.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp.

**limit**: `int | None`<br/>
The number of data entries to return.

**period**: `Literal['annual', 'quarter', 'ttm', 'ytd'] | None`<br/>
*Default:* annual<br/>
Time period of the data to return.

**fiscal_year**: `int | None`<br/>
The specific fiscal year.  Reports do not go beyond 2008.

</TabItem>
</Tabs>

---

## Returns

**results**: `FinancialRatios`

Serializable results.

**provider**: `Optional[Literal['fmp', 'intrinio']]`

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

**period_ending**: `date | None`<br/>
The date of the data.

**fiscal_period**: `str | None`<br/>
Period of the financial ratios.

**fiscal_year**: `int | None`<br/>
Fiscal year.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**period_ending**: `date | None`<br/>
The date of the data.

**fiscal_period**: `str | None`<br/>
Period of the financial ratios.

**fiscal_year**: `int | None`<br/>
Fiscal year.

**currency**: `str | None`<br/>
Currency in which the company reports financials.

**gross_profit_margin**: `float | None`<br/>
Gross profit margin.

**ebit_margin**: `float | None`<br/>
Earnings before interest and taxes (EBIT) margin.

**ebitda_margin**: `float | None`<br/>
Earnings before interest, taxes, depreciation, and amortization (EBITDA) margin.

**operating_profit_margin**: `float | None`<br/>
Operating profit margin.

**pretax_profit_margin**: `float | None`<br/>
Pretax profit margin.

**continuous_operations_profit_margin**: `float | None`<br/>
Continuous operations profit margin.

**net_profit_margin**: `float | None`<br/>
Net profit margin.

**bottom_line_profit_margin**: `float | None`<br/>
Bottom line profit margin.

**receivables_turnover**: `float | None`<br/>
Receivables turnover ratio.

**payables_turnover**: `float | None`<br/>
Payables turnover ratio.

**inventory_turnover**: `float | None`<br/>
Inventory turnover ratio.

**fixed_asset_turnover**: `float | None`<br/>
Fixed asset turnover ratio.

**asset_turnover**: `float | None`<br/>
Asset turnover ratio.

**current_ratio**: `float | None`<br/>
Current ratio.

**quick_ratio**: `float | None`<br/>
Quick ratio.

**solvency_ratio**: `float | None`<br/>
Solvency ratio.

**cash_ratio**: `float | None`<br/>
Cash ratio.

**price_to_earnings**: `float | None`<br/>
Price to earnings (P/E) ratio.

**price_to_earnings_growth**: `float | None`<br/>
Price to earnings growth (PEG) ratio.

**forward_price_to_earnings_growth**: `float | None`<br/>
Forward price to earnings growth (PEG) ratio.

**price_to_book**: `float | None`<br/>
Price to book (P/B) ratio.

**price_to_sales**: `float | None`<br/>
Price to sales (P/S) ratio.

**price_to_free_cash_flow**: `float | None`<br/>
Price to free cash flow (P/FCF) ratio.

**price_to_operating_cash_flow**: `float | None`<br/>
Price to operating cash flow (P/OCF) ratio.

**debt_to_assets**: `float | None`<br/>
Debt to assets ratio.

**debt_to_equity**: `float | None`<br/>
Debt to equity ratio.

**debt_to_capital**: `float | None`<br/>
Debt to capital ratio.

**long_term_debt_to_capital**: `float | None`<br/>
Long-term debt to capital ratio.

**financial_leverage_ratio**: `float | None`<br/>
Financial leverage ratio.

**working_capital_turnover_ratio**: `float | None`<br/>
Working capital turnover ratio.

**operating_cash_flow_ratio**: `float | None`<br/>
Operating cash flow ratio.

**operating_cash_flow_sales_ratio**: `float | None`<br/>
Operating cash flow to sales ratio.

**free_cash_flow_operating_cash_flow_ratio**: `float | None`<br/>
Free cash flow to operating cash flow ratio.

**debt_service_coverage_ratio**: `float | None`<br/>
Debt service coverage ratio.

**interest_coverage_ratio**: `float | None`<br/>
Interest coverage ratio.

**short_term_operating_cash_flow_coverage_ratio**: `float | None`<br/>
Short-term operating cash flow coverage ratio.

**operating_cash_flow_coverage_ratio**: `float | None`<br/>
Operating cash flow coverage ratio.

**capital_expenditure_coverage_ratio**: `float | None`<br/>
Capital expenditure coverage ratio.

**dividend_paid_and_capex_coverage_ratio**: `float | None`<br/>
Dividend paid and capital expenditure coverage ratio.

**dividend_payout_ratio**: `float | None`<br/>
Dividend payout ratio.

**dividend_yield**: `float | None`<br/>
Dividend yield.

**dividend_per_share**: `float | None`<br/>
Dividend per share.

**revenue_per_share**: `float | None`<br/>
Revenue per share.

**net_income_per_share**: `float | None`<br/>
Net income per share.

**interest_debt_per_share**: `float | None`<br/>
Interest-bearing debt per share.

**cash_per_share**: `float | None`<br/>
Cash per share.

**book_value_per_share**: `float | None`<br/>
Book value per share.

**tangible_book_value_per_share**: `float | None`<br/>
Tangible book value per share.

**shareholders_equity_per_share**: `float | None`<br/>
Shareholders' equity per share.

**operating_cash_flow_per_share**: `float | None`<br/>
Operating cash flow per share.

**capex_per_share**: `float | None`<br/>
Capital expenditure per share.

**free_cash_flow_per_share**: `float | None`<br/>
Free cash flow per share.

**net_income_per_ebt**: `float | None`<br/>
Net income per earnings before tax (EBT).

**ebt_per_ebit**: `float | None`<br/>
Earnings before tax (EBT) per earnings before interest and tax (EBIT).

**price_to_fair_value**: `float | None`<br/>
Price to fair value ratio.

**debt_to_market_cap**: `float | None`<br/>
Debt to market capitalization ratio.

**effective_tax_rate**: `float | None`<br/>
Effective tax rate.

**enterprise_value_multiple**: `float | None`<br/>
Enterprise value multiple (EV/EBITDA).

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**period_ending**: `date | None`<br/>
The date of the data.

**fiscal_period**: `str | None`<br/>
Period of the financial ratios.

**fiscal_year**: `int | None`<br/>
Fiscal year.

</TabItem>
</Tabs>

