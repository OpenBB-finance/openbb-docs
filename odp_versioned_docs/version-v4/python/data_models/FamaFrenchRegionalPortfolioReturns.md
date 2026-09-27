---
title: "Fama French Regional Portfolio Returns"
description: "Regional portfolio returns"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `FamaFrenchRegionalPortfolioReturns` | `FamaFrenchRegionalPortfolioReturnsQueryParams` | `FamaFrenchRegionalPortfolioReturnsData` |

### Import Statement

```python
from openbb_core.provider.standard_models. import (
FamaFrenchRegionalPortfolioReturnsData,
FamaFrenchRegionalPortfolioReturnsQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='famafrench' label='famafrench'>

**portfolio**: `Literal['asia_pacific_ex_japan_25_portfolios_me_be-me', 'asia_pacific_ex_japan_25_portfolios_me_be-me_daily', 'asia_pacific_ex_japan_25_portfolios_me_inv', 'asia_pacific_ex_japan_25_portfolios_me_inv_daily', 'asia_pacific_ex_japan_25_portfolios_me_op', 'asia_pacific_ex_japan_25_portfolios_me_op_daily', 'asia_pacific_ex_japan_25_portfolios_me_prior_12_2', 'asia_pacific_ex_japan_25_portfolios_me_prior_250_20_daily', 'asia_pacific_ex_japan_32_portfolios_me_be-me_inv_2x4x4', 'asia_pacific_ex_japan_32_portfolios_me_be-me_op_2x4x4', 'asia_pacific_ex_japan_32_portfolios_me_inv_op_2x4x4', 'asia_pacific_ex_japan_6_portfolios_me_be-me', 'asia_pacific_ex_japan_6_portfolios_me_be-me_daily', 'asia_pacific_ex_japan_6_portfolios_me_inv', 'asia_pacific_ex_japan_6_portfolios_me_inv_daily', 'asia_pacific_ex_japan_6_portfolios_me_op', 'asia_pacific_ex_japan_6_portfolios_me_op_daily', 'asia_pacific_ex_japan_6_portfolios_me_prior_12_2', 'asia_pacific_ex_japan_6_portfolios_me_prior_250_20_daily', 'developed_25_portfolios_me_be-me', 'developed_25_portfolios_me_be-me_daily', 'developed_25_portfolios_me_inv', 'developed_25_portfolios_me_inv_daily', 'developed_25_portfolios_me_op', 'developed_25_portfolios_me_op_daily', 'developed_25_portfolios_me_prior_12_2', 'developed_25_portfolios_me_prior_250_20_daily', 'developed_32_portfolios_me_be-me_inv_2x4x4', 'developed_32_portfolios_me_be-me_op_2x4x4', 'developed_32_portfolios_me_inv_op_2x4x4', 'developed_6_portfolios_me_be-me', 'developed_6_portfolios_me_be-me_daily', 'developed_6_portfolios_me_inv', 'developed_6_portfolios_me_inv_daily', 'developed_6_portfolios_me_op', 'developed_6_portfolios_me_op_daily', 'developed_6_portfolios_me_prior_12_2', 'developed_6_portfolios_me_prior_250_20_daily', 'developed_ex_us_25_portfolios_me_be-me', 'developed_ex_us_25_portfolios_me_be-me_daily', 'developed_ex_us_25_portfolios_me_inv', 'developed_ex_us_25_portfolios_me_inv_daily', 'developed_ex_us_25_portfolios_me_op', 'developed_ex_us_25_portfolios_me_op_daily', 'developed_ex_us_25_portfolios_me_prior_12_2', 'developed_ex_us_25_portfolios_me_prior_250_20_daily', 'developed_ex_us_32_portfolios_me_be-me_inv_2x4x4', 'developed_ex_us_32_portfolios_me_be-me_op_2x4x4', 'developed_ex_us_32_portfolios_me_inv_op_2x4x4', 'developed_ex_us_6_portfolios_me_be-me', 'developed_ex_us_6_portfolios_me_be-me_daily', 'developed_ex_us_6_portfolios_me_inv', 'developed_ex_us_6_portfolios_me_inv_daily', 'developed_ex_us_6_portfolios_me_op', 'developed_ex_us_6_portfolios_me_op_daily', 'developed_ex_us_6_portfolios_me_prior_12_2', 'developed_ex_us_6_portfolios_me_prior_250_20_daily', 'emerging_markets_4_portfolios_be-me_inv', 'emerging_markets_4_portfolios_be-me_op', 'emerging_markets_4_portfolios_op_inv', 'emerging_markets_6_portfolios_me_be-me', 'emerging_markets_6_portfolios_me_inv', 'emerging_markets_6_portfolios_me_op', 'emerging_markets_6_portfolios_me_prior_12_2', 'europe_25_portfolios_me_be-me', 'europe_25_portfolios_me_be-me_daily', 'europe_25_portfolios_me_inv', 'europe_25_portfolios_me_inv_daily', 'europe_25_portfolios_me_op', 'europe_25_portfolios_me_op_daily', 'europe_25_portfolios_me_prior_12_2', 'europe_25_portfolios_me_prior_250_20_daily', 'europe_32_portfolios_me_be-me_inv_2x4x4', 'europe_32_portfolios_me_be-me_op_2x4x4', 'europe_32_portfolios_me_inv_op_2x4x4', 'europe_6_portfolios_me_be-me', 'europe_6_portfolios_me_be-me_daily', 'europe_6_portfolios_me_inv', 'europe_6_portfolios_me_inv_daily', 'europe_6_portfolios_me_op', 'europe_6_portfolios_me_op_daily', 'europe_6_portfolios_me_prior_12_2', 'europe_6_portfolios_me_prior_250_20_daily', 'japan_25_portfolios_me_be-me', 'japan_25_portfolios_me_be-me_daily', 'japan_25_portfolios_me_inv', 'japan_25_portfolios_me_inv_daily', 'japan_25_portfolios_me_op', 'japan_25_portfolios_me_op_daily', 'japan_25_portfolios_me_prior_12_2', 'japan_25_portfolios_me_prior_250_20_daily', 'japan_32_portfolios_me_be-me_inv_2x4x4', 'japan_32_portfolios_me_be-me_op_2x4x4', 'japan_32_portfolios_me_inv_op_2x4x4', 'japan_6_portfolios_me_be-me', 'japan_6_portfolios_me_be-me_daily', 'japan_6_portfolios_me_inv', 'japan_6_portfolios_me_inv_daily', 'japan_6_portfolios_me_op', 'japan_6_portfolios_me_op_daily', 'japan_6_portfolios_me_prior_12_2', 'japan_6_portfolios_me_prior_250_20_daily', 'north_america_25_portfolios_me_be-me', 'north_america_25_portfolios_me_be-me_daily', 'north_america_25_portfolios_me_inv', 'north_america_25_portfolios_me_inv_daily', 'north_america_25_portfolios_me_op', 'north_america_25_portfolios_me_op_daily', 'north_america_25_portfolios_me_prior_12_2', 'north_america_25_portfolios_me_prior_250_20_daily', 'north_america_32_portfolios_me_be-me_inv_2x4x4', 'north_america_32_portfolios_me_be-me_op_2x4x4', 'north_america_32_portfolios_me_inv_op_2x4x4', 'north_america_6_portfolios_me_be-me', 'north_america_6_portfolios_me_be-me_daily', 'north_america_6_portfolios_me_inv', 'north_america_6_portfolios_me_inv_daily', 'north_america_6_portfolios_me_op', 'north_america_6_portfolios_me_op_daily', 'north_america_6_portfolios_me_prior_12_2', 'north_america_6_portfolios_me_prior_250_20_daily'] | None`<br/>
*Default:* developed_ex_us_6_portfolios_me_op<br/>
The specific portfolio file to fetch.

**measure**: `Literal['value', 'equal', 'number_of_firms', 'firm_size'] | None`<br/>
*Default:* value<br/>
The measure to fetch for the portfolio.

**frequency**: `Literal['monthly', 'annual'] | None`<br/>
*Default:* monthly<br/>
The frequency of the data to fetch. Ignored when the portfolio ends with 'daily'.

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

