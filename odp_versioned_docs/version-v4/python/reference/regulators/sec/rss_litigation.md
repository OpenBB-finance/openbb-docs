---
title: "rss_litigation"
description: "Learn how to use the RSS feed to access litigation releases, including  civil lawsuits brought by the Commission in federal court. This documentation provides  details about the 'obb.regulators.sec.rss_litigation' python function, its parameters  and return values, as well as the data structure used for the releases."
keywords:
- RSS feed
- litigation releases
- civil lawsuits
- Commission
- federal court
- python
- obb.regulators.sec.rss_litigation
- provider
- parameters
- returns
- data
- published
- title
- summary
- id
- link
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="regulators/sec/rss_litigation - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get the RSS feed that provides links to litigation releases concerning civil lawsuits brought by the Commission in federal court.

Examples
--------

```python
from openbb import obb
obb.regulators.sec.rss_litigation()
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='sec' label='sec'>

</TabItem>
</Tabs>

---

## Returns

**results**: `RssLitigation`

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

**published**: `datetime`<br/>
The date of publication.

**title**: `str`<br/>
The title of the release.

**summary**: `str`<br/>
Short summary of the release.

**id**: `str`<br/>
The identifier associated with the release.

**link**: `str`<br/>
URL to the release.

</TabItem>
</Tabs>

