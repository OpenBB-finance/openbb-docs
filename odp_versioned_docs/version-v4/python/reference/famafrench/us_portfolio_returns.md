---
title: "us_portfolio_returns"
description: "US Portfolio returns"
keywords:
- famafrench
- us_portfolio_returns
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="famafrench/us_portfolio_returns - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

US Portfolio returns.

Metadata for the selected dataset are returned in the
`extra['results_metadata']` field of the response.

Source
------

https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html

All returns are in U.S. dollars, include dividends (unless the portfolio is 'wout_div')
and capital gains, and are not continuously compounded.


The momentum and short term reversal portfolios are reconstituted monthly
and the other research portfolios are reconstituted annually.
We reconstruct the full history of returns each month when we update the portfolios.


Size and Book-to-Market Portfolios
----------------------------------

- Small Value
- Small Neutral
- Small Growth
- Big Value
- Big Neutral
- Big Growth

BE < 0; bottom 30%, middle 40%, top 30%; quintiles; deciles.
Firms with negative book equity are in only the BE < 0 portfolio.

Size and Operating Profitability Portfolios
-------------------------------------------

- Small Robust
- Small Neutral
- Small Weak
- Big Robust
- Big Neutral
- Big Weak

Operating Profitability bottom 30%, middle 40%, top 30%; quintiles; deciles.

Size and Investment Portfolios
------------------------------

- Small Conservative
- Small Neutral
- Small Aggressive
- Big Conservative
- Big Neutral
- Big Aggressive

ME < 0 (not used); bottom 30%, middle 40%, top 30%; quintiles; deciles.
Investment bottom 30%, middle 40%, top 30%; quintiles; deciles.

Definitions
-----------

ME : Market Equity

Market equity (size) is price times shares outstanding.
Price and shares outstanding are from CRSP.

BE : Book Equity

Book equity is constructed from Compustat data or collected from the
Moody’s Industrial, Financial, and Utilities manuals.
BE is the book value of stockholders’ equity, plus balance sheet deferred taxes
and investment tax credit (if available), minus the book value of preferred stock.
Depending on availability, we use the redemption, liquidation, or par value (in that order)
to estimate the book value of preferred stock. Stockholders’ equity is the value reported
by Moody’s or Compustat, if it is available. If not, we measure stockholders’ equity as
the book value of common equity plus the par value of preferred stock,
or the book value of assets minus total liabilities (in that order).

See Davis, Fama, and French, 2000,
“Characteristics, Covariances, and Average Returns: 1929-1997”
Journal of Finance, for more details.

BE/ME : Book-to-Market

The book-to-market ratio used to form portfolios in June of year t is book equity
for the fiscal year ending in calendar year t-1,
divided by market equity at the end of December of t-1.

OP : Operating Profitability

The operating profitability ratio used to form portfolios in June of year t is annual revenues
minus cost of goods sold, interest expense, and selling, general, and administrative expense
divided by the sum of book equity and minority interest for the last fiscal year ending in t-1.

INV : Investment

The investment ratio used to form portfolios in June of year t is the change in total assets
from the fiscal year ending in year t-2 to the fiscal year ending in t-1,
divided by t-2 total assets.

E/P : Earnings/Price

Earnings is total earnings before extraordinary items, from Compustat.
The earnings/price ratio used to form portfolios in June of year t is earnings
for the fiscal year ending in calendar year t-1,
divided by market equity at the end of December of t-1.

CF/P : Cashflow/Price

Cashflow is total earnings before extraordinary items, plus equity’s share of depreciation,
plus deferred taxes (if available), from Compustat. Equity’s share is defined as market equity
divided by assets minus book equity plus market equity.
The cashflow/price ratio used to form portfolios in June of year t is the cashflow for the
fiscal year ending in calendar year t-1, divided by market equity at the end of December of t-1.

D/P : Dividend Yield

The dividend yield used to form portfolios in June of year t is the total dividends paid
from July of t-1 to June of t per dollar of equity in June of t.
The dividend yield is computed using the with and without dividend returns from CRSP,
as described in Fama and French, 1988, “Dividend yields and expected stock returns,”
Journal of Financial Economics 25.

Examples
--------

```python
from openbb import obb
# Get model US portfolio returns used for constructing the Fama-French Factor models.
obb.famafrench.us_portfolio_returns()
# If the portfolio name does not have a frequency - i.e. '_daily' - use the frequency parameter to specify the interval.
obb.famafrench.us_portfolio_returns(portfolio='5_industry_portfolios_wout_div', frequency='annual', measure='equal')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='famafrench' label='famafrench'>

**portfolio**: `Literal['portfolios_formed_on_me', 'portfolios_formed_on_me_wout_div', 'portfolios_formed_on_me_daily', 'portfolios_formed_on_be-me', 'portfolios_formed_on_be-me_wout_div', 'portfolios_formed_on_be-me_daily', 'portfolios_formed_on_op', 'portfolios_formed_on_op_wout_div', 'portfolios_formed_on_op_daily', 'portfolios_formed_on_inv', 'portfolios_formed_on_inv_wout_div', 'portfolios_formed_on_inv_daily', '6_portfolios_2x3', '6_portfolios_2x3_wout_div', '6_portfolios_2x3_weekly', '6_portfolios_2x3_daily', '25_portfolios_5x5', '25_portfolios_5x5_wout_div', '25_portfolios_5x5_daily', '100_portfolios_10x10', '100_portfolios_10x10_wout_div', '100_portfolios_10x10_daily', '6_portfolios_me_op_2x3', '6_portfolios_me_op_2x3_wout_div', '6_portfolios_me_op_2x3_daily', '25_portfolios_me_op_5x5', '25_portfolios_me_op_5x5_wout_div', '25_portfolios_me_op_5x5_daily', '100_portfolios_me_op_10x10', '100_portfolios_10x10_me_op_wout_div', '100_portfolios_me_op_10x10_daily', '6_portfolios_me_inv_2x3', '6_portfolios_me_inv_2x3_wout_div', '6_portfolios_me_inv_2x3_daily', '25_portfolios_me_inv_5x5', '25_portfolios_me_inv_5x5_wout_div', '25_portfolios_me_inv_5x5_daily', '100_portfolios_me_inv_10x10', '100_portfolios_10x10_me_inv_wout_div', '100_portfolios_me_inv_10x10_daily', '25_portfolios_beme_op_5x5', '25_portfolios_beme_op_5x5_wout_div', '25_portfolios_beme_op_5x5_daily', '25_portfolios_beme_inv_5x5', '25_portfolios_beme_inv_5x5_wout_div', '25_portfolios_beme_inv_5x5_daily', '25_portfolios_op_inv_5x5', '25_portfolios_op_inv_5x5_wout_div', '25_portfolios_op_inv_5x5_daily', '32_portfolios_me_beme_op_2x4x4', '32_portfolios_me_beme_op_2x4x4_wout_div', '32_portfolios_me_beme_inv_2x4x4', '32_portfolios_me_beme_inv_2x4x4_wout_div', '32_portfolios_me_op_inv_2x4x4', '32_portfolios_me_op_inv_2x4x4_wout_div', 'portfolios_formed_on_e-p', 'portfolios_formed_on_e-p_wout_div', 'portfolios_formed_on_cf-p', 'portfolios_formed_on_cf-p_wout_div', 'portfolios_formed_on_d-p', 'portfolios_formed_on_d-p_wout_div', '6_portfolios_me_ep_2x3', '6_portfolios_me_ep_2x3_wout_div', '6_portfolios_me_cfp_2x3', '6_portfolios_me_cfp_2x3_wout_div', '6_portfolios_me_dp_2x3', '6_portfolios_me_dp_2x3_wout_div', '6_portfolios_me_prior_12_2', '6_portfolios_me_prior_12_2_daily', '25_portfolios_me_prior_12_2', '25_portfolios_me_prior_12_2_daily', '10_portfolios_prior_12_2', '10_portfolios_prior_12_2_daily', '6_portfolios_me_prior_1_0', '6_portfolios_me_prior_1_0_daily', '25_portfolios_me_prior_1_0', '25_portfolios_me_prior_1_0_daily', '10_portfolios_prior_1_0', '10_portfolios_prior_1_0_daily', '6_portfolios_me_prior_60_13', '6_portfolios_me_prior_60_13_daily', '25_portfolios_me_prior_60_13', '25_portfolios_me_prior_60_13_daily', '10_portfolios_prior_60_13', '10_portfolios_prior_60_13_daily', 'portfolios_formed_on_ac', '25_portfolios_me_ac_5x5', 'portfolios_formed_on_beta', '25_portfolios_me_beta_5x5', 'portfolios_formed_on_ni', '25_portfolios_me_ni_5x5', 'portfolios_formed_on_var', '25_portfolios_me_var_5x5', 'portfolios_formed_on_resvar', '25_portfolios_me_resvar_5x5', '5_industry_portfolios', '5_industry_portfolios_wout_div', '5_industry_portfolios_daily', '10_industry_portfolios', '10_industry_portfolios_wout_div', '10_industry_portfolios_daily', '12_industry_portfolios', '12_industry_portfolios_wout_div', '12_industry_portfolios_daily', '17_industry_portfolios', '17_industry_portfolios_wout_div', '17_industry_portfolios_daily', '30_industry_portfolios', '30_industry_portfolios_wout_div', '30_industry_portfolios_daily', '38_industry_portfolios', '38_industry_portfolios_wout_div', '38_industry_portfolios_daily', '48_industry_portfolios', '48_industry_portfolios_wout_div', '48_industry_portfolios_daily', '49_industry_portfolios', '49_industry_portfolios_wout_div', '49_industry_portfolios_daily'] | None`<br/>
*Default:* portfolios_formed_on_me<br/>
The specific portfolio file to fetch.

**measure**: `Literal['value', 'equal', 'number_of_firms', 'firm_size'] | None`<br/>
*Default:* value<br/>
The measure to fetch for the portfolio.

**frequency**: `Literal['monthly', 'annual'] | None`<br/>
*Default:* monthly<br/>
The frequency of the data to fetch. Ignored if the portfolio ends with 'daily' or 'weekly'.

**start_date**: `date | None | str`<br/>
The start date for the data. Defaults to the earliest available date.

**end_date**: `date | None | str`<br/>
The end date for the data. Defaults to the latest available date.

</TabItem>
</Tabs>

---

## Returns

**results**: `FamaFrenchUSPortfolioReturns`

Serializable results.

**provider**: `Optional[Literal['famafrench']]`

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

</TabItem>
<TabItem value='famafrench' label='famafrench'>

**date**: `date | str`<br/>
The date of the data.

**portfolio**: `str`<br/>
The individual portfolio formation within the portfolio file.

**measure**: `Literal['value', 'equal', 'number_of_firms', 'firm_size']`<br/>
The measure of the portfolio.

**value**: `int | float`<br/>
The value represented by the 'measure'. Missing data are indicated by -99.99 or -999

</TabItem>
</Tabs>

