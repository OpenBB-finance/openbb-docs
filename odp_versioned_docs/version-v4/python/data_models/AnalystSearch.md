---
title: "Analyst Search"
description: "Search for specific analysts and get their forecast track record"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `AnalystSearch` | `AnalystSearchQueryParams` | `AnalystSearchData` |

### Import Statement

```python
from openbb_core.provider.standard_models.analyst_search import (
AnalystSearchData,
AnalystSearchQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**analyst_name**: `str | None | list[str | None]`<br/>
Analyst names to return. Omitting will return all available analysts. Multiple items allowed for provider(s): benzinga.

**firm_name**: `str | None | list[str | None]`<br/>
Firm names to return. Omitting will return all available firms. Multiple items allowed for provider(s): benzinga.

</TabItem>
<TabItem value='benzinga' label='benzinga'>

**analyst_name**: `str | None | list[str | None]`<br/>
Analyst names to return. Omitting will return all available analysts. Multiple items allowed for provider(s): benzinga.

**firm_name**: `str | None | list[str | None]`<br/>
Firm names to return. Omitting will return all available firms. Multiple items allowed for provider(s): benzinga.

**analyst_ids**: `str | None`<br/>
list of analyst IDs to return.

**firm_ids**: `str | None`<br/>
Firm IDs to return.

**limit**: `int | None`<br/>
*Default:* 100<br/>
Number of results returned. Limit 1000.

**page**: `int | None`<br/>
*Default:* 0<br/>
Page offset. For optimization, performance and technical reasons, page offsets are limited from 0 - 100000. Limit the query results by other parameters such as date.

**fields**: `str | None`<br/>
Fields to include in the response. See https://docs.benzinga.io/benzinga-apis/calendar/get-ratings to learn about the available fields.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**last_updated**: `datetime | None`<br/>
Date of the last update.

**firm_name**: `str | None`<br/>
Firm name of the analyst.

**name_first**: `str | None`<br/>
Analyst first name.

**name_last**: `str | None`<br/>
Analyst last name.

**name_full**: `str`<br/>
Analyst full name.

</TabItem>
<TabItem value='benzinga' label='benzinga'>

**last_updated**: `datetime | None`<br/>
Date of the last update.

**firm_name**: `str | None`<br/>
Firm name of the analyst.

**name_first**: `str | None`<br/>
Analyst first name.

**name_last**: `str | None`<br/>
Analyst last name.

**name_full**: `str`<br/>
Analyst full name.

**analyst_id**: `str | None`<br/>
ID of the analyst.

**firm_id**: `str | None`<br/>
ID of the analyst firm.

**smart_score**: `float | None`<br/>
A weighted average of the total_ratings_percentile, overall_avg_return_percentile, and overall_success_rate

**overall_success_rate**: `float | None`<br/>
The percentage (normalized) of gain/loss ratings that resulted in a gain overall.

**overall_avg_return_percentile**: `float | None`<br/>
The percentile (normalized) of this analyst's overall average return per rating in comparison to other analysts' overall average returns per rating.

**total_ratings_percentile**: `float | None`<br/>
The percentile (normalized) of this analyst's total number of ratings in comparison to the total number of ratings published by all other analysts

**total_ratings**: `int | None`<br/>
Number of recommendations made by this analyst.

**overall_gain_count**: `int | None`<br/>
The number of ratings that have gained value since the date of recommendation

**overall_loss_count**: `int | None`<br/>
The number of ratings that have lost value since the date of recommendation

**overall_average_return**: `float | None`<br/>
The average percent (normalized) price difference per rating since the date of recommendation

**overall_std_dev**: `float | None`<br/>
The standard deviation in percent (normalized) price difference in the analyst's ratings since the date of recommendation

**gain_count_1m**: `int | None`<br/>
The number of ratings that have gained value over the last month

**loss_count_1m**: `int | None`<br/>
The number of ratings that have lost value over the last month

**average_return_1m**: `float | None`<br/>
The average percent (normalized) price difference per rating over the last month

**std_dev_1m**: `float | None`<br/>
The standard deviation in percent (normalized) price difference in the analyst's ratings over the last month

**smart_score_1m**: `float | None`<br/>
A weighted average smart score over the last month.

**success_rate_1m**: `float | None`<br/>
The percentage (normalized) of gain/loss ratings that resulted in a gain over the last month

**gain_count_3m**: `int | None`<br/>
The number of ratings that have gained value over the last 3 months

**loss_count_3m**: `int | None`<br/>
The number of ratings that have lost value over the last 3 months

**average_return_3m**: `float | None`<br/>
The average percent (normalized) price difference per rating over the last 3 months

**std_dev_3m**: `float | None`<br/>
The standard deviation in percent (normalized) price difference in the analyst's ratings over the last 3 months

**smart_score_3m**: `float | None`<br/>
A weighted average smart score over the last 3 months.

**success_rate_3m**: `float | None`<br/>
The percentage (normalized) of gain/loss ratings that resulted in a gain over the last 3 months

**gain_count_6m**: `int | None`<br/>
The number of ratings that have gained value over the last 6 months

**loss_count_6m**: `int | None`<br/>
The number of ratings that have lost value over the last 6 months

**average_return_6m**: `float | None`<br/>
The average percent (normalized) price difference per rating over the last 6 months

**std_dev_6m**: `float | None`<br/>
The standard deviation in percent (normalized) price difference in the analyst's ratings over the last 6 months

**gain_count_9m**: `int | None`<br/>
The number of ratings that have gained value over the last 9 months

**loss_count_9m**: `int | None`<br/>
The number of ratings that have lost value over the last 9 months

**average_return_9m**: `float | None`<br/>
The average percent (normalized) price difference per rating over the last 9 months

**std_dev_9m**: `float | None`<br/>
The standard deviation in percent (normalized) price difference in the analyst's ratings over the last 9 months

**smart_score_9m**: `float | None`<br/>
A weighted average smart score over the last 9 months.

**success_rate_9m**: `float | None`<br/>
The percentage (normalized) of gain/loss ratings that resulted in a gain over the last 9 months

**gain_count_1y**: `int | None`<br/>
The number of ratings that have gained value over the last 1 year

**loss_count_1y**: `int | None`<br/>
The number of ratings that have lost value over the last 1 year

**average_return_1y**: `float | None`<br/>
The average percent (normalized) price difference per rating over the last 1 year

**std_dev_1y**: `float | None`<br/>
The standard deviation in percent (normalized) price difference in the analyst's ratings over the last 1 year

**smart_score_1y**: `float | None`<br/>
A weighted average smart score over the last 1 year.

**success_rate_1y**: `float | None`<br/>
The percentage (normalized) of gain/loss ratings that resulted in a gain over the last 1 year

**gain_count_2y**: `int | None`<br/>
The number of ratings that have gained value over the last 2 years

**loss_count_2y**: `int | None`<br/>
The number of ratings that have lost value over the last 2 years

**average_return_2y**: `float | None`<br/>
The average percent (normalized) price difference per rating over the last 2 years

**std_dev_2y**: `float | None`<br/>
The standard deviation in percent (normalized) price difference in the analyst's ratings over the last 2 years

**smart_score_2y**: `float | None`<br/>
A weighted average smart score over the last 3 years.

**success_rate_2y**: `float | None`<br/>
The percentage (normalized) of gain/loss ratings that resulted in a gain over the last 2 years

**gain_count_3y**: `int | None`<br/>
The number of ratings that have gained value over the last 3 years

**loss_count_3y**: `int | None`<br/>
The number of ratings that have lost value over the last 3 years

**average_return_3y**: `float | None`<br/>
The average percent (normalized) price difference per rating over the last 3 years

**std_dev_3y**: `float | None`<br/>
The standard deviation in percent (normalized) price difference in the analyst's ratings over the last 3 years

**smart_score_3y**: `float | None`<br/>
A weighted average smart score over the last 3 years.

**success_rate_3y**: `float | None`<br/>
The percentage (normalized) of gain/loss ratings that resulted in a gain over the last 3 years

</TabItem>
</Tabs>

