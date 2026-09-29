---
title: "effr_forecast"
description: "Fed Funds Rate Projections"
keywords:
- fixedincome
- rate
- effr_forecast
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="fixedincome/rate/effr_forecast - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Fed Funds Rate Projections.

The projections for the federal funds rate are the value of the midpoint of the
projected appropriate target range for the federal funds rate or the projected
appropriate target level for the federal funds rate at the end of the specified
calendar year or over the longer run.

Examples
--------

```python
from openbb import obb
obb.fixedincome.rate.effr_forecast()
obb.fixedincome.rate.effr_forecast(long_run=True)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='fred' label='fred'>

**long_run**: `bool | None`<br/>
*Default:* False<br/>
Flag to show long run projections

</TabItem>
</Tabs>

---

## Returns

**results**: `PROJECTIONS`

Serializable results.

**provider**: `Optional[Literal['fred']]`

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

**range_high**: `float | None`<br/>
High projection of rates.

**central_tendency_high**: `float | None`<br/>
Central tendency of high projection of rates.

**median**: `float | None`<br/>
Median projection of rates.

**range_midpoint**: `float | None`<br/>
Midpoint projection of rates.

**central_tendency_midpoint**: `float | None`<br/>
Central tendency of midpoint projection of rates.

**range_low**: `float | None`<br/>
Low projection of rates.

**central_tendency_low**: `float | None`<br/>
Central tendency of low projection of rates.

</TabItem>
<TabItem value='fred' label='fred'>

**date**: `date | str`<br/>
The date of the data.

**range_high**: `float | None`<br/>
High projection of rates.

**central_tendency_high**: `float | None`<br/>
Central tendency of high projection of rates.

**median**: `float | None`<br/>
Median projection of rates.

**range_midpoint**: `float | None`<br/>
Midpoint projection of rates.

**central_tendency_midpoint**: `float | None`<br/>
Central tendency of midpoint projection of rates.

**range_low**: `float | None`<br/>
Low projection of rates.

**central_tendency_low**: `float | None`<br/>
Central tendency of low projection of rates.

</TabItem>
</Tabs>

