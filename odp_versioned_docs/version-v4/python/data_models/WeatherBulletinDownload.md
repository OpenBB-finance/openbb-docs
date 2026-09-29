---
title: "Weather Bulletin Download"
description: "Download one, or more, weather bulletin documents"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `WeatherBulletinDownload` | `WeatherBulletinDownloadQueryParams` | `WeatherBulletinDownloadData` |

### Import Statement

```python
from openbb_core.provider.standard_models.weather_bulletin_download import (
WeatherBulletinDownloadData,
WeatherBulletinDownloadQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**urls**: `str | dict | list | list[str | dict | list]`<br/>
URLs for reports to download. Multiple items allowed for provider(s): government_us.

</TabItem>
<TabItem value='government_us' label='government_us'>

**urls**: `str | dict | list | list[str | dict | list]`<br/>
URLs for reports to download. Multiple items allowed for provider(s): government_us.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**content**: `str`<br/>
Base64 encoded content of the weather bulletin document.

</TabItem>
<TabItem value='government_us' label='government_us'>

**content**: `str`<br/>
Base64 encoded content of the weather bulletin document.

**data_format**: `dict[str, str]`<br/>
Data format information.

</TabItem>
</Tabs>

