---
title: "Price Performance"
description: "Get price performance data for a given stock"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `PricePerformance` | `PricePerformanceQueryParams` | `PricePerformanceData` |

### Import Statement

```python
from openbb_core.provider.standard_models. import (
PricePerformanceData,
PricePerformanceQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): finviz, fmp.

</TabItem>
<TabItem value='finviz' label='finviz'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): finviz, fmp.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): finviz, fmp.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**one_day**: `float | None`<br/>
One-day return.

**wtd**: `float | None`<br/>
Week to date return.

**one_week**: `float | None`<br/>
One-week return.

**mtd**: `float | None`<br/>
Month to date return.

**one_month**: `float | None`<br/>
One-month return.

**qtd**: `float | None`<br/>
Quarter to date return.

**three_month**: `float | None`<br/>
Three-month return.

**six_month**: `float | None`<br/>
Six-month return.

**ytd**: `float | None`<br/>
Year to date return.

**one_year**: `float | None`<br/>
One-year return.

**two_year**: `float | None`<br/>
Two-year return.

**three_year**: `float | None`<br/>
Three-year return.

**four_year**: `float | None`<br/>
Four-year

**five_year**: `float | None`<br/>
Five-year return.

**ten_year**: `float | None`<br/>
Ten-year return.

**max**: `float | None`<br/>
Return from the beginning of the time series.

</TabItem>
<TabItem value='finviz' label='finviz'>

**symbol**: `str | None`<br/>
The ticker symbol.

**one_day**: `float | None`<br/>
One-day return.

**wtd**: `float | None`<br/>
Week to date return.

**one_week**: `float | None`<br/>
One-week return.

**mtd**: `float | None`<br/>
Month to date return.

**one_month**: `float | None`<br/>
One-month return.

**qtd**: `float | None`<br/>
Quarter to date return.

**three_month**: `float | None`<br/>
Three-month return.

**six_month**: `float | None`<br/>
Six-month return.

**ytd**: `float | None`<br/>
Year to date return.

**one_year**: `float | None`<br/>
One-year return.

**two_year**: `float | None`<br/>
Two-year return.

**three_year**: `float | None`<br/>
Three-year return.

**four_year**: `float | None`<br/>
Four-year

**five_year**: `float | None`<br/>
Five-year return.

**ten_year**: `float | None`<br/>
Ten-year return.

**max**: `float | None`<br/>
Return from the beginning of the time series.

**volatility_week**: `float | None`<br/>
One-week realized volatility, as a normalized percent.

**volatility_month**: `float | None`<br/>
One-month realized volatility, as a normalized percent.

**price**: `float | None`<br/>
Last Price.

**volume**: `float | None`<br/>
Current volume.

**average_volume**: `float | None`<br/>
Average daily volume.

**relative_volume**: `float | None`<br/>
Relative volume as a ratio of current volume to average volume.

**analyst_recommendation**: `float | None`<br/>
The analyst consensus, on a scale of 1-5 where 1 is a buy and 5 is a sell.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**one_day**: `float | None`<br/>
One-day return.

**wtd**: `float | None`<br/>
Week to date return.

**one_week**: `float | None`<br/>
One-week return.

**mtd**: `float | None`<br/>
Month to date return.

**one_month**: `float | None`<br/>
One-month return.

**qtd**: `float | None`<br/>
Quarter to date return.

**three_month**: `float | None`<br/>
Three-month return.

**six_month**: `float | None`<br/>
Six-month return.

**ytd**: `float | None`<br/>
Year to date return.

**one_year**: `float | None`<br/>
One-year return.

**two_year**: `float | None`<br/>
Two-year return.

**three_year**: `float | None`<br/>
Three-year return.

**four_year**: `float | None`<br/>
Four-year

**five_year**: `float | None`<br/>
Five-year return.

**ten_year**: `float | None`<br/>
Ten-year return.

**max**: `float | None`<br/>
Return from the beginning of the time series.

</TabItem>
</Tabs>

