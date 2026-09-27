---
title: "Fama French International Index Returns"
description: "International index returns"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `FamaFrenchInternationalIndexReturns` | `FamaFrenchInternationalIndexReturnsQueryParams` | `FamaFrenchInternationalIndexReturnsData` |

### Import Statement

```python
from openbb_core.provider.standard_models. import (
FamaFrenchInternationalIndexReturnsData,
FamaFrenchInternationalIndexReturnsQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='famafrench' label='famafrench'>

**index**: `Literal['uk', 'scandinavia', 'europe', 'europe_ex_uk', 'asia_pacific', 'all'] | None`<br/>
*Default:* all<br/>
International index to fetch the portfolio returns for. Defaults to 'all'.

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

