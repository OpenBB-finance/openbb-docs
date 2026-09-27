---
title: "Etf Countries"
description: "ETF Country weighting"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `EtfCountries` | `EtfCountriesQueryParams` | `EtfCountriesData` |

### Import Statement

```python
from openbb_core.provider.standard_models.etf_countries import (
EtfCountriesData,
EtfCountriesQueryParams,
)
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

