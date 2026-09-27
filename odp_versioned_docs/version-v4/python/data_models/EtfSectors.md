---
title: "Etf Sectors"
description: "ETF Sector weighting"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `EtfSectors` | `EtfSectorsQueryParams` | `EtfSectorsData` |

### Import Statement

```python
from openbb_core.provider.standard_models.etf_sectors import (
EtfSectorsData,
EtfSectorsQueryParams,
)
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

