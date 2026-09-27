---
title: "country_portfolio_returns"
description: "Country portfolio returns"
keywords:
- famafrench
- country_portfolio_returns
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="famafrench/country_portfolio_returns - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Country portfolio returns.

Metadata for the selected dataset are returned in the
`extra['results_metadata']` field of the response.

Source
------

https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html

We form value and growth portfolios in each country using four valuation ratios:

- book-to-market (B/M)
- earnings-price (E/P)
- cash earnings to price (CE/P)
- dividend yield (D/P)

We form the portfolios at the end of December each year by sorting on one of the four ratios and
then compute value-weighted returns for the following 12 months.

The value portfolios (High) contain firms in the top 30% of a ratio
and the growth portfolios (Low) contain firms in the bottom 30%.

There are two sets of portfolios.

In one, firms are included only if we have data on all four ratios.

In the other, a firm is included in a sort variable's portfolios
if we have data for that variable.

The market return (Mkt) for the first set is the value weighted average of the returns
for only firms with all four ratios.

The market return for the second set includes all firms with book-to-market data,
and Firms is the number of firms with B/M data.

Examples
--------

```python
from openbb import obb
# Get model Country portfolio returns used for constructing the Fama-French Factor models.
obb.famafrench.country_portfolio_returns()
# Parameters are different than the regional and US portfolio returns.
obb.famafrench.country_portfolio_returns(frequency='annual', measure='local', country='japan', dividends=False, all_data_items_required=False)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='famafrench' label='famafrench'>

**country**: `Literal['austria', 'australia', 'belgium', 'canada', 'denmark', 'finland', 'france', 'germany', 'hong_kong', 'ireland', 'italy', 'japan', 'malaysia', 'netherlands', 'new_zealand', 'norway', 'singapore', 'spain', 'sweden', 'switzerland', 'united_kingdom'] | None`<br/>
*Default:* united_kingdom<br/>
Country to fetch the portfolio returns for.

**measure**: `Literal['usd', 'local', 'ratios'] | None`<br/>
*Default:* usd<br/>
The measure to fetch for the portfolio. Only 'annual' frequency is supported for 'ratios'.

**frequency**: `Literal['monthly', 'annual'] | None`<br/>
*Default:* monthly<br/>
The frequency of the data to fetch. Ignored when `measure` is set to 'ratios'.

**dividends**: `bool | None`<br/>
When False, portoflios exclude dividends.

**all_data_items_required**: `bool | None`<br/>
If True (default), includes firms with data for all four ratios. When False, includes only firms with Book-to-Market (B/M) data.

**start_date**: `date | None | str`<br/>
The start date for the data. Defaults to the earliest available date.

**end_date**: `date | None | str`<br/>
The end date for the data. Defaults to the latest available date.

</TabItem>
</Tabs>

---

## Returns

**results**: `FamaFrenchCountryPortfolioReturns`

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

**mkt**: `float | None`<br/>
<details>
<summary mdxType="summary">Description</summary>

The market return (Mkt) for the first set is the value weighted average<br/>
        of the returns for only firms with all four ratios.<br/>
<br/>
        The market return for the second set includes all firms with book-to-market data,<br/>
        and Firms is the number of firms with B/M data.<br/>
<br/>
        Not returned if `measure` is set to 'ratios'.<br/>
</details>

**firms**: `int | None`<br/>
The number of firms, relative to `all_data_items_required` parameter. Only returned when `measure` is set to 'ratios'.

**bm**: `float | None`<br/>
Book to Market equity ratio. Not returned if `measure` is set to 'ratios'.

**be_me_high**: `float | None`<br/>
Book Equity to Market Equity returns for the value portfolio. Not returned if `measure` is set to 'ratios'.

**be_me_low**: `float | None`<br/>
Book Equity to Market Equity returns for the growth portfolio. Not returned if `measure` is set to 'ratios'.

**ep**: `float | None`<br/>
Earnings to Price ratio. Only returned when `measure` is set to 'ratios'.

**e_p_high**: `float | None`<br/>
Earnings to Price returns for the value portfolio. Not returned if `measure` is set to 'ratios'.

**e_p_low**: `float | None`<br/>
Earnings to Price returns for the growth portfolio. Not returned if `measure` is set to 'ratios'.

**ce_p**: `float | None`<br/>
Cash Earnings to Price ratio. Only returned when `measure` is set to 'ratios'.

**ce_p_high**: `float | None`<br/>
Cash Earnings to Price returns for the value portfolio. Not returned if `measure` is set to 'ratios'.

**ce_p_low**: `float | None`<br/>
Cash Earnings to Price returns for the growth portfolio. Not returned if `measure` is set to 'ratios'.

**yld**: `float | None`<br/>
Dividend Yield ratio. Only returned when `measure` is set to 'ratios'.

**yld_high**: `float | None`<br/>
Dividend Yield returns for the value portfolio. Not returned if `measure` is set to 'ratios'.

**yld_low**: `float | None`<br/>
Dividend Yield returns for the growth portfolio. Not returned if `measure` is set to 'ratios'.

**yld_zero**: `float | None`<br/>
Dividend Yield returns for firms not paying dividends. Not returned if `measure` is set to 'ratios'.

</TabItem>
</Tabs>

