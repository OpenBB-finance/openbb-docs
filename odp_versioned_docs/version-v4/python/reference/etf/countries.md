---
title: "countries"
description: "Learn about ETF country weighting and how to retrieve country exposure  data using obb.etf.countries API endpoint."
keywords:
- ETF country weighting
- obb.etf.countries
- symbol
- provider
- etf
- data
- results
- chart
- metadata
- country exposure
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="etf/countries - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

ETF Country weighting.

Examples
--------

```python
from openbb import obb
obb.etf.countries(symbol='VT')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp, tmx.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp, tmx.

</TabItem>
<TabItem value='tmx' label='tmx'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp, tmx.

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
Whether to use a cached request. All ETF data comes from a single JSON file that is updated daily. To bypass, set to False. If True, the data will be cached for 4 hours.

</TabItem>
</Tabs>

---

## Returns

**results**: `EtfCountries`

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

**country**: `str`<br/>
The country of the exposure.  Corresponding values are normalized percentage points.

**weight**: `float`<br/>
The net exposure of the ETF to the country as a percentage of the total ETF assets.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**country**: `str`<br/>
The country of the exposure.  Corresponding values are normalized percentage points.

**weight**: `float`<br/>
The net exposure of the ETF to the country as a percentage of the total ETF assets.

</TabItem>
<TabItem value='tmx' label='tmx'>

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**country**: `str`<br/>
The country of the exposure.  Corresponding values are normalized percentage points.

**weight**: `float`<br/>
The net exposure of the ETF to the country as a percentage of the total ETF assets.

</TabItem>
</Tabs>

