---
title: "amendment_info"
description: "Get details for a specific amendment"
keywords:
- uscongress
- amendment_info
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="uscongress/amendment_info - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get details for a specific amendment.

Enter the amendment identifier as: &#123;congress&#125;/&#123;type&#125;/&#123;number&#125; (e.g., '119/hamdt/2').

In OpenBB Workspace, this command returns as a Markdown widget.

Examples
--------

```python
from openbb import obb
obb.uscongress.amendment_info(amendment_url='119/hamdt/2')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='congress_gov' label='congress_gov'>

**amendment_url**: `str`<br/>
Enter a base URL of an amendment (e.g., 'https://api.congress.gov/v3/amendment/119/hamdt/2?format=json'). Alternatively, you can enter a shorthand (e.g., '119/hamdt/2').

</TabItem>
</Tabs>

---

## Returns

**results**: `CongressAmendmentInfo`

Serializable results.

**provider**: `Optional[Literal['congress_gov']]`

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
<TabItem value='congress_gov' label='congress_gov'>

**markdown_content**: `str`<br/>
Aggregated metadata for the amendment in Markdown format.

**raw_data**: `dict[str, Any]`<br/>
Raw JSON data from the collected amendment information.

</TabItem>
</Tabs>

