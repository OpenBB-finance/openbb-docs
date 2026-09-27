---
title: "amendments"
description: "Get and filter lists of Congressional Amendments"
keywords:
- uscongress
- amendments
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="uscongress/amendments - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get and filter lists of Congressional Amendments.

Examples
--------

```python
from openbb import obb
obb.uscongress.amendments()
obb.uscongress.amendments(congress=119, amendment_type='hamdt')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='congress_gov' label='congress_gov'>

**congress**: `int | None`<br/>
Congress number (e.g., 119 for the 119th Congress). When None, returns amendments across all congresses (requires amendment_type).

**amendment_type**: `str | None`<br/>
<details>
<summary mdxType="summary">Description</summary>

Amendment type (e.g., 'hamdt' for House Amendments).<br/>
<br/>
Must be one of:<br/>
<br/>
- hamdt: An amendment offered or adopted in the House of Representatives.<br/>
House amendments are identified by 'H.Amdt.' followed by a number.<br/>
- samdt: An amendment offered or adopted in the Senate.<br/>
Senate amendments are identified by 'S.Amdt.' followed by a number.<br/>
- suamdt: A Senate amendment that was submitted but not subsequently amended.<br/>
</details>

**start_date**: `date | None | str`<br/>
Filter amendments updated on or after this date.

**end_date**: `date | None | str`<br/>
Filter amendments updated on or before this date.

**limit**: `int | None`<br/>
Maximum number of results to return. When None, defaults to 100 (max 250). Set to 0 for no limit (must be used with 'amendment_type').

**offset**: `int | None`<br/>
The starting record returned. 0 is the first record.

**sort_by**: `Literal['asc', 'desc'] | None`<br/>
*Default:* desc<br/>
Sort by update date. Default is latest first.

</TabItem>
</Tabs>

---

## Returns

**results**: `CongressAmendments`

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

**congress**: `int`<br/>
The congress session number.

**amendment_type**: `str`<br/>
The type of amendment (e.g., HAMDT, SAMDT).

**number**: `str`<br/>
The amendment number.

**amended_bill**: `str | None`<br/>
The bill being amended (e.g., 'HR 1234' or 'S 456').

**amended_bill_title**: `str | None`<br/>
The title of the bill being amended.

**description**: `str | None`<br/>
A short description of the amendment.

**purpose**: `str | None`<br/>
The purpose of the amendment.

**latest_action_date**: `date | None`<br/>
The date of the latest action.

**latest_action**: `str | None`<br/>
Latest action text.

**latest_action_time**: `str | None`<br/>
The time of the latest action.

**sponsor**: `str | None`<br/>
The primary sponsor of the amendment.

**submitted_date**: `date | None`<br/>
The date the amendment was submitted.

**update_date**: `date | None`<br/>
The date the record was last updated.

**amendment_url**: `str`<br/>
Base URL to the amendment for the congress.gov API.

</TabItem>
</Tabs>

