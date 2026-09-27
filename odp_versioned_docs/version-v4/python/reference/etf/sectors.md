---
title: "sectors"
description: "Learn about ETF sector weighting using OBB.etf.sectors API. Find information  about the parameters, returns, and data, including sectors, weights, and exposure  levels in normalized percentage points."
keywords:
- ETF Sector weighting
- OBB.etf.sectors
- parameters
- symbol
- provider
- returns
- results
- etf sectors
- warnings
- chart
- metadata
- data
- sector
- weight
- exposure
- normalized percentage points
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="etf/sectors - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

ETF Sector weighting.

Examples
--------

```python
from openbb import obb
obb.etf.sectors(symbol='SPY')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. (ETF) Multiple items allowed for provider(s): fmp, tmx.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. (ETF) Multiple items allowed for provider(s): fmp, tmx.

</TabItem>
<TabItem value='tmx' label='tmx'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. (ETF) Multiple items allowed for provider(s): fmp, tmx.

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
Whether to use a cached request. All ETF data comes from a single JSON file that is updated daily. To bypass, set to False. If True, the data will be cached for 4 hours.

</TabItem>
</Tabs>

---

## Returns

**results**: `EtfSectors`

Serializable results.

**provider**: `Optional[Literal['fmp', 'tmx']]`

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

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**sector**: `str`<br/>
Sector of exposure.

**weight**: `float`<br/>
Sector exposure for the ETF as a percent of total assets.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**sector**: `str`<br/>
Sector of exposure.

**weight**: `float`<br/>
Sector exposure for the ETF as a percent of total assets.

</TabItem>
<TabItem value='tmx' label='tmx'>

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**sector**: `str`<br/>
Sector of exposure.

**weight**: `float`<br/>
Sector exposure for the ETF as a percent of total assets.

</TabItem>
</Tabs>

