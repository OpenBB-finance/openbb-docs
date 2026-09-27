---
title: "Share Statistics"
description: "Get data about share float for a given company"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `ShareStatistics` | `ShareStatisticsQueryParams` | `ShareStatisticsData` |

### Import Statement

```python
from openbb_core.provider.standard_models.share_statistics import (
ShareStatisticsData,
ShareStatisticsQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp, yfinance.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp, yfinance.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp, yfinance.

</TabItem>
<TabItem value='yfinance' label='yfinance'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp, yfinance.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**date**: `date | datetime | None | str`<br/>
The date of the data.

**free_float**: `float | None`<br/>
Percentage of unrestricted shares of a publicly-traded company.

**float_shares**: `int | float | None`<br/>
Number of shares available for trading by the general public.

**outstanding_shares**: `int | float | None`<br/>
Total number of shares of a publicly-traded company.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**date**: `date | datetime | None | str`<br/>
The date of the data.

**free_float**: `float | None`<br/>
Percentage of unrestricted shares of a publicly-traded company.

**float_shares**: `int | float | None`<br/>
Number of shares available for trading by the general public.

**outstanding_shares**: `int | float | None`<br/>
Total number of shares of a publicly-traded company.

**url**: `str | None`<br/>
URL to the source document, if available.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**date**: `date | datetime | None | str`<br/>
The date of the data.

**free_float**: `float | None`<br/>
Percentage of unrestricted shares of a publicly-traded company.

**float_shares**: `int | float | None`<br/>
Number of shares available for trading by the general public.

**outstanding_shares**: `int | float | None`<br/>
Total number of shares of a publicly-traded company.

**adjusted_outstanding_shares**: `float | None`<br/>
Total number of shares of a publicly-traded company, adjusted for splits.

**public_float**: `float | None`<br/>
Aggregate market value of the shares of a publicly-traded company.

</TabItem>
<TabItem value='yfinance' label='yfinance'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**date**: `date | datetime | None | str`<br/>
The date of the data.

**free_float**: `float | None`<br/>
Percentage of unrestricted shares of a publicly-traded company.

**float_shares**: `int | float | None`<br/>
Number of shares available for trading by the general public.

**outstanding_shares**: `int | float | None`<br/>
Total number of shares of a publicly-traded company.

**implied_shares_outstanding**: `int | None`<br/>
Implied Shares Outstanding of common equity, assuming the conversion of all convertible subsidiary equity into common.

**short_interest**: `int | None`<br/>
Number of shares that are reported short.

**short_percent_of_float**: `float | None`<br/>
Percentage of shares that are reported short, as a normalized percent.

**days_to_cover**: `float | None`<br/>
Number of days to repurchase the shares as a ratio of average daily volume

**short_interest_prev_month**: `int | None`<br/>
Number of shares that were reported short in the previous month.

**short_interest_prev_date**: `date | None`<br/>
Date of the previous month's report.

**insider_ownership**: `float | None`<br/>
Percentage of shares held by insiders, as a normalized percent.

**institution_ownership**: `float | None`<br/>
Percentage of shares held by institutions, as a normalized percent.

**institution_float_ownership**: `float | None`<br/>
Percentage of float held by institutions, as a normalized percent.

**institutions_count**: `int | None`<br/>
Number of institutions holding shares.

</TabItem>
</Tabs>

