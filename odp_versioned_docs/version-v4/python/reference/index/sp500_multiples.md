---
title: "sp500_multiples"
description: "Learn about S&P 500 multiples and Shiller PE ratios. Use the `index.sp500_multiples`  query to retrieve historical data on various financial metrics such as PE Ratio,  Dividend, Earnings, Inflation Adjusted Price, Sales, Price to Sales Ratio, and Book  Value per Share. Specify query parameters such as start date, end date, and provider.  Collapse the frequency or transform the time series. Get results, charts, metadata,  and more."
keywords:
- S&P 500 multiples
- Shiller PE ratios
- SP500Multiples
- index.sp500_multiples
- historical data
- PE Ratio
- Dividend
- Earnings
- Inflation Adjusted Price
- Sales
- Price to Sales Ratio
- Book Value per Share
- query parameters
- start date
- end date
- provider
- collapse
- transform
- results
- chart
- metadata
- data
- date
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="index/sp500_multiples - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get historical S&P 500 multiples and Shiller PE ratios.

Examples
--------

```python
from openbb import obb
obb.index.sp500_multiples()
obb.index.sp500_multiples(series_name='shiller_pe_year')
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

---

## Returns

**results**: `SP500Multiples`

Serializable results.

**provider**: `Optional[Literal['multpl']]`

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

