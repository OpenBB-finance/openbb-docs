---
title: "htm_file"
description: "Download a raw HTML object from the SEC website"
keywords:
- regulators
- sec
- htm_file
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="regulators/sec/htm_file - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Download a raw HTML object from the SEC website.

Examples
--------

```python
from openbb import obb
obb.regulators.sec.htm_file(url='https://www.sec.gov/Archives/edgar/data/1723690/000119312525030074/d866336dex991.htm')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='sec' label='sec'>

**url**: `str | None`<br/>
URL for the SEC filing.

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
Cache the file for use later. Default is True.

</TabItem>
</Tabs>

---

## Returns

**results**: `SecHtmFile`

Serializable results.

**provider**: `Optional[Literal['sec']]`

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

</TabItem>
<TabItem value='sec' label='sec'>

**url**: `str`<br/>
URL of the downloaded file.

**content**: `str`<br/>
Raw content of the HTM/HTML file.

</TabItem>
</Tabs>

