---
title: "SP500 Multiples"
description: "Get historical S&P 500 multiples and Shiller PE ratios"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `SP500Multiples` | `SP500MultiplesQueryParams` | `SP500MultiplesData` |

### Import Statement

```python
from openbb_core.provider.standard_models.sp500_multiples import (
SP500MultiplesData,
SP500MultiplesQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**series_name**: `Literal['shiller_pe_month', 'shiller_pe_year', 'pe_year', 'pe_month', 'dividend_year', 'dividend_month', 'dividend_growth_quarter', 'dividend_growth_year', 'dividend_yield_year', 'dividend_yield_month', 'earnings_year', 'earnings_month', 'earnings_growth_year', 'earnings_growth_quarter', 'real_earnings_growth_year', 'real_earnings_growth_quarter', 'earnings_yield_year', 'earnings_yield_month', 'real_price_year', 'real_price_month', 'inflation_adjusted_price_year', 'inflation_adjusted_price_month', 'sales_year', 'sales_quarter', 'sales_growth_year', 'sales_growth_quarter', 'real_sales_year', 'real_sales_quarter', 'real_sales_growth_year', 'real_sales_growth_quarter', 'price_to_sales_year', 'price_to_sales_quarter', 'price_to_book_value_year', 'price_to_book_value_quarter', 'book_value_year', 'book_value_quarter'] | None | list[Literal['shiller_pe_month', 'shiller_pe_year', 'pe_year', 'pe_month', 'dividend_year', 'dividend_month', 'dividend_growth_quarter', 'dividend_growth_year', 'dividend_yield_year', 'dividend_yield_month', 'earnings_year', 'earnings_month', 'earnings_growth_year', 'earnings_growth_quarter', 'real_earnings_growth_year', 'real_earnings_growth_quarter', 'earnings_yield_year', 'earnings_yield_month', 'real_price_year', 'real_price_month', 'inflation_adjusted_price_year', 'inflation_adjusted_price_month', 'sales_year', 'sales_quarter', 'sales_growth_year', 'sales_growth_quarter', 'real_sales_year', 'real_sales_quarter', 'real_sales_growth_year', 'real_sales_growth_quarter', 'price_to_sales_year', 'price_to_sales_quarter', 'price_to_book_value_year', 'price_to_book_value_quarter', 'book_value_year', 'book_value_quarter'] | None]`<br/>
*Default:* pe_month<br/>
The name of the series. Defaults to 'pe_month'. Multiple items allowed for provider(s): multpl.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
<TabItem value='multpl' label='multpl'>

**series_name**: `Literal['shiller_pe_month', 'shiller_pe_year', 'pe_year', 'pe_month', 'dividend_year', 'dividend_month', 'dividend_growth_quarter', 'dividend_growth_year', 'dividend_yield_year', 'dividend_yield_month', 'earnings_year', 'earnings_month', 'earnings_growth_year', 'earnings_growth_quarter', 'real_earnings_growth_year', 'real_earnings_growth_quarter', 'earnings_yield_year', 'earnings_yield_month', 'real_price_year', 'real_price_month', 'inflation_adjusted_price_year', 'inflation_adjusted_price_month', 'sales_year', 'sales_quarter', 'sales_growth_year', 'sales_growth_quarter', 'real_sales_year', 'real_sales_quarter', 'real_sales_growth_year', 'real_sales_growth_quarter', 'price_to_sales_year', 'price_to_sales_quarter', 'price_to_book_value_year', 'price_to_book_value_quarter', 'book_value_year', 'book_value_quarter'] | None | list[Literal['shiller_pe_month', 'shiller_pe_year', 'pe_year', 'pe_month', 'dividend_year', 'dividend_month', 'dividend_growth_quarter', 'dividend_growth_year', 'dividend_yield_year', 'dividend_yield_month', 'earnings_year', 'earnings_month', 'earnings_growth_year', 'earnings_growth_quarter', 'real_earnings_growth_year', 'real_earnings_growth_quarter', 'earnings_yield_year', 'earnings_yield_month', 'real_price_year', 'real_price_month', 'inflation_adjusted_price_year', 'inflation_adjusted_price_month', 'sales_year', 'sales_quarter', 'sales_growth_year', 'sales_growth_quarter', 'real_sales_year', 'real_sales_quarter', 'real_sales_growth_year', 'real_sales_growth_quarter', 'price_to_sales_year', 'price_to_sales_quarter', 'price_to_book_value_year', 'price_to_book_value_quarter', 'book_value_year', 'book_value_quarter'] | None]`<br/>
*Default:* pe_month<br/>
The name of the series. Defaults to 'pe_month'. Multiple items allowed for provider(s): multpl.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | str`<br/>
The date of the data.

**name**: `str`<br/>
Name of the series.

**value**: `int | float`<br/>
Value of the series.

</TabItem>
<TabItem value='multpl' label='multpl'>

**date**: `date | str`<br/>
The date of the data.

**name**: `str`<br/>
Name of the series.

**value**: `int | float`<br/>
Value of the series.

</TabItem>
</Tabs>

