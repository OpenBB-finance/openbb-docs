---
title: "weather_bulletins_download"
description: "Download one, or more, weather bulletin documents"
keywords:
- commodity
- weather_bulletins_download
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="commodity/weather_bulletins_download - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Download one, or more, weather bulletin documents.

This command returns only the results portion of the OBBject response.
It contains a list of dictionaries where the base64 encoded content of the document is under the 'content' key.

Examples
--------

```python
from openbb import obb
obb.commodity.weather_bulletins_download(urls='['https://esmis.nal.usda.gov/sites/default/release-files/cj82k728n/9w033w568/x059f4232/wwcb0125.pdf']')
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

---

## Returns

Any
---
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

