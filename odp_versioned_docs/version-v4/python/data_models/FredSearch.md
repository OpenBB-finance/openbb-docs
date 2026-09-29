---
title: "Fred Search"
description: "Search for FRED series or economic releases by ID or string"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `FredSearch` | `FredSearchQueryParams` | `FredSearchData` |

### Import Statement

```python
from openbb_core.provider.standard_models. import (
FredSearchData,
FredSearchQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**query**: `str | None`<br/>
The search word(s).

</TabItem>
<TabItem value='fred' label='fred'>

**query**: `str | None`<br/>
The search word(s).

**search_type**: `Literal['full_text', 'series_id', 'release'] | None`<br/>
*Default:* full_text<br/>
The type of search to perform. Automatically set to 'release' when a 'release_id' is provided.

**release_id**: `int | None`<br/>
A specific release ID to target.

**limit**: `int | None`<br/>
The number of data entries to return. (1-1000)

**offset**: `int | None`<br/>
*Default:* 0<br/>
Offset the results in conjunction with limit. This parameter is ignored When search_type is 'release'.

**order_by**: `Literal['search_rank', 'series_id', 'title', 'units', 'frequency', 'seasonal_adjustment', 'realtime_start', 'realtime_end', 'last_updated', 'observation_start', 'observation_end', 'popularity', 'group_popularity'] | None`<br/>
*Default:* observation_end<br/>
Order the results by a specific attribute. The default is 'observation_end'.

**sort_order**: `Literal['asc', 'desc'] | None`<br/>
*Default:* desc<br/>
Sort the 'order_by' item in ascending or descending order. The default is 'desc'.

**filter_variable**: `Literal['frequency', 'units', 'seasonal_adjustment'] | None`<br/>
Filter by an attribute.

**filter_value**: `str | None`<br/>
String value to filter the variable by.  Used in conjunction with filter_variable. This parameter is ignored when search_type is 'release'.

**tag_names**: `str | None`<br/>
A semicolon delimited list of tag names that series match all of.  Example: 'japan;imports' This parameter is ignored when search_type is 'release'.

**exclude_tag_names**: `str | None`<br/>
A semicolon delimited list of tag names that series match none of.  Example: 'imports;services'. Requires that variable tag_names also be set to limit the number of matching series. This parameter is ignored when search_type is 'release'.

**series_id**: `str | None`<br/>
A FRED Series ID to return series group information for. This returns the required information to query for regional data. Not all series that are in FRED have geographical data. Entering a value for series_id will override all other parameters. Multiple series_ids can be separated by commas.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**release_id**: `str | None`<br/>
The release ID for queries.

**series_id**: `str | None`<br/>
The series ID for the item in the release.

**series_group**: `str | None`<br/>
The series group ID of the series. This value is used to query for regional data.

**region_type**: `str | None`<br/>
The region type of the series.

**name**: `str | None`<br/>
The name of the release.

**title**: `str | None`<br/>
The title of the series.

**observation_start**: `date | None`<br/>
The date of the first observation in the series.

**observation_end**: `date | None`<br/>
The date of the last observation in the series.

**frequency**: `str | None`<br/>
The frequency of the data.

**frequency_short**: `str | None`<br/>
Short form of the data frequency.

**units**: `str | None`<br/>
The units of the data.

**units_short**: `str | None`<br/>
Short form of the data units.

**seasonal_adjustment**: `str | None`<br/>
The seasonal adjustment of the data.

**seasonal_adjustment_short**: `str | None`<br/>
Short form of the data seasonal adjustment.

**last_updated**: `datetime | None`<br/>
The datetime of the last update to the data.

**popularity**: `int | None`<br/>
Popularity of the series

**group_popularity**: `int | None`<br/>
Group popularity of the release

**realtime_start**: `date | None`<br/>
The realtime start date of the series.

**realtime_end**: `date | None`<br/>
The realtime end date of the series.

**notes**: `str | None`<br/>
Description of the release.

**press_release**: `bool | None`<br/>
If the release is a press release.

**url**: `str | None`<br/>
URL to the release.

</TabItem>
<TabItem value='fred' label='fred'>

**release_id**: `str | None`<br/>
The release ID for queries.

**series_id**: `str | None`<br/>
The series ID for the item in the release.

**series_group**: `str | None`<br/>
The series group ID of the series. This value is used to query for regional data.

**region_type**: `str | None`<br/>
The region type of the series.

**name**: `str | None`<br/>
The name of the release.

**title**: `str | None`<br/>
The title of the series.

**observation_start**: `date | None`<br/>
The date of the first observation in the series.

**observation_end**: `date | None`<br/>
The date of the last observation in the series.

**frequency**: `str | None`<br/>
The frequency of the data.

**frequency_short**: `str | None`<br/>
Short form of the data frequency.

**units**: `str | None`<br/>
The units of the data.

**units_short**: `str | None`<br/>
Short form of the data units.

**seasonal_adjustment**: `str | None`<br/>
The seasonal adjustment of the data.

**seasonal_adjustment_short**: `str | None`<br/>
Short form of the data seasonal adjustment.

**last_updated**: `datetime | None`<br/>
The datetime of the last update to the data.

**popularity**: `int | None`<br/>
Popularity of the series

**group_popularity**: `int | None`<br/>
Group popularity of the release

**realtime_start**: `date | None`<br/>
The realtime start date of the series.

**realtime_end**: `date | None`<br/>
The realtime end date of the series.

**notes**: `str | None`<br/>
Description of the release.

**press_release**: `bool | None`<br/>
If the release is a press release.

**url**: `str | None`<br/>
URL to the release.

</TabItem>
</Tabs>

