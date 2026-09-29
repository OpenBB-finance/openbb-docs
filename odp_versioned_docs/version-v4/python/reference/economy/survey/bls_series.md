---
title: "bls_series"
description: "Get time series data for one, or more, BLS series IDs"
keywords:
- economy
- survey
- bls_series
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="economy/survey/bls_series - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get time series data for one, or more, BLS series IDs.

Examples
--------

```python
from openbb import obb
obb.economy.survey.bls_series(symbol='CES0000000001')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): bls.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
<TabItem value='bls' label='bls'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): bls.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**calculations**: `bool | None`<br/>
*Default:* True<br/>
Include calculations in the response, if available. Default is True.

**annual_average**: `bool | None`<br/>
*Default:* False<br/>
Include annual averages in the response, if available. Default is False.

**aspects**: `bool | None`<br/>
*Default:* False<br/>
Include all aspects associated with a data point for a given BLS series ID, if available. Returned with the series metadata, under `extras` of the response object. Default is False.

</TabItem>
</Tabs>

---

## Returns

**results**: `BlsSeries`

Serializable results.

**provider**: `Optional[Literal['bls']]`

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

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**title**: `str | None`<br/>
Title of the series.

**value**: `float | None`<br/>
Observation value for the symbol and date.

</TabItem>
<TabItem value='bls' label='bls'>

**date**: `date | str`<br/>
The date of the data.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**title**: `str | None`<br/>
Title of the series.

**value**: `float | None`<br/>
Observation value for the symbol and date.

**change_1M**: `float | None`<br/>
One month change in value.

**change_3M**: `float | None`<br/>
Three month change in value.

**change_6M**: `float | None`<br/>
Six month change in value.

**change_12M**: `float | None`<br/>
One year change in value.

**change_percent_1M**: `float | None`<br/>
One month change in percent.

**change_percent_3M**: `float | None`<br/>
Three month change in percent.

**change_percent_6M**: `float | None`<br/>
Six month change in percent.

**change_percent_12M**: `float | None`<br/>
One year change in percent.

**latest**: `bool | None`<br/>
Latest value indicator.

**footnotes**: `str | None`<br/>
Footnotes accompanying the value.

</TabItem>
</Tabs>

