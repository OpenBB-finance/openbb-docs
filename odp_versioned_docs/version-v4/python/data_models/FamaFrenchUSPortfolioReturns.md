---
title: "Fama French US Portfolio Returns"
description: "US Portfolio returns"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `FamaFrenchUSPortfolioReturns` | `FamaFrenchUSPortfolioReturnsQueryParams` | `FamaFrenchUSPortfolioReturnsData` |

### Import Statement

```python
from openbb_core.provider.standard_models. import (
FamaFrenchUSPortfolioReturnsData,
FamaFrenchUSPortfolioReturnsQueryParams,
)
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

