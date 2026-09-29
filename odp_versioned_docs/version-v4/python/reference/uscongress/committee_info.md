---
title: "committee_info"
description: "Get metadata and membership for a single U"
keywords:
- uscongress
- committee_info
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="uscongress/committee_info - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get metadata and membership for a single U.S. Congressional Committee.

Fetches the committee detail (type, website, subcommittees, activity counts)
and current member roster with party affiliations and leadership titles.

Select a chamber, committee, and optional subcommittee to view details.

Examples
--------

```python
from openbb import obb
obb.uscongress.committee_info(chamber='senate', committee='ssaf00')
obb.uscongress.committee_info(chamber='house', committee='hsju00')
# Get info for a subcommittee.
obb.uscongress.committee_info(chamber='senate', committee='ssga00', subcommittee='ssga22')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='congress_gov' label='congress_gov'>

**chamber**: `Literal['house', 'senate', 'joint'] | None`<br/>
*Default:* senate<br/>
Chamber: house, senate, or joint.

**committee**: `str | None`<br/>
*Default:* ssaf00<br/>
System code of the committee (e.g., ssaf00, hsju00).

**subcommittee**: `str | None`<br/>
System code of a subcommittee (e.g., ssga22). Leave empty for parent committee.

</TabItem>
</Tabs>

---

## Returns

**results**: `CongressCommitteeInfo`

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
Committee metadata and membership formatted as Markdown.

**raw_data**: `dict[str, Any]`<br/>
Raw JSON data from the committee detail and member lookups.

</TabItem>
</Tabs>

