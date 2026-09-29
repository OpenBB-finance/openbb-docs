---
title: "Congress Bills"
description: "Get and filter lists of Congressional Bills"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `CongressBills` | `CongressBillsQueryParams` | `CongressBillsData` |

### Import Statement

```python
from openbb_core.provider.standard_models. import (
CongressBillsData,
CongressBillsQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='congress_gov' label='congress_gov'>

**congress**: `int | None`<br/>
Congress number (e.g., 118 for the 118th Congress). The 103rd Congress started in 1993, which is the earliest date supporting full text versions. Each Congress spans two years, starting in odd-numbered years.

**bill_type**: `str | None`<br/>
<details>
<summary mdxType="summary">Description</summary>

Bill type (e.g., 'hr' for House bills).<br/>
<br/>
Must be one of: hr, s, hjres, sjres, hconres, sconres, hres, sres.<br/>
<br/>
Bills<br/>
-----<br/>
<br/>
A bill is the form used for most legislation, whether permanent or temporary, general or special, public or private.<br/>
<br/>
A bill originating in the House of Representatives is designated by the letters “H.R.”,<br/>
signifying “House of Representatives”, followed by a number that it retains throughout all its parliamentary stages.<br/>
<br/>
Bills are presented to the President for action when approved in identical form<br/>
by both the House of Representatives and the Senate.<br/>
<br/>
Joint Resolutions<br/>
-----------------<br/>
<br/>
Joint resolutions may originate either in the House of Representatives or in the Senate.<br/>
<br/>
There is little practical difference between a bill and a joint resolution. Both are subject to the same procedure,<br/>
except for a joint resolution proposing an amendment to the Constitution.<br/>
<br/>
On approval of such a resolution by two-thirds of both the House and Senate,<br/>
it is sent directly to the Administrator of General Services for submission to the individual states for ratification.<br/>
<br/>
It is not presented to the President for approval.<br/>
A joint resolution originating in the House of Representatives is designated “H.J.Res.” followed by its individual number.<br/>
Joint resolutions become law in the same manner as bills.<br/>
<br/>
Concurrent Resolutions<br/>
----------------------<br/>
<br/>
Matters affecting the operations of both the House of Representatives and Senate<br/>
are usually initiated by means of concurrent resolutions.<br/>
<br/>
A concurrent resolution originating in the House of Representatives is designated “H.Con.Res.”<br/>
followed by its individual number.<br/>
<br/>
On approval by both the House of Representatives and Senate,<br/>
they are signed by the Clerk of the House and the Secretary of the Senate.<br/>
<br/>
They are not presented to the President for action.<br/>
<br/>
Simple Resolutions<br/>
------------------<br/>
<br/>
A matter concerning the operation of either the House of Representatives or Senate<br/>
alone is initiated by a simple resolution.<br/>
<br/>
A resolution affecting the House of Representatives is designated “H.Res.” followed by its number.<br/>
<br/>
They are not presented to the President for action.<br/>
</details>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format. Filters bills by the last updated date.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format. Filters bills by the last updated date.

**limit**: `int | None`<br/>
The number of data entries to return. When None, default sets to 100 (max 250). Set to 0 for no limit (must be used with 'bill_type' and 'congress'). Setting to 0 will nullify the start_date, end_date, and offset parameters.

**offset**: `int | None`<br/>
The starting record returned. 0 is the first record.

**sort_by**: `Literal['asc', 'desc'] | None`<br/>
*Default:* desc<br/>
Sort by update date. Default is latest first.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='congress_gov' label='congress_gov'>

**update_date**: `date`<br/>
The date the bill was last updated.

**latest_action_date**: `date | None`<br/>
The date of the latest action on the bill.

**bill_url**: `str`<br/>
Base URL to the bill for the congress.gov API.

**congress**: `int`<br/>
The congress session number.

**bill_number**: `int`<br/>
The bill number.

**origin_chamber**: `str`<br/>
The chamber where the bill originated.

**origin_chamber_code**: `str`<br/>
The chamber code where the bill originated.

**bill_type**: `str`<br/>
The type of bill (e.g., HR, S).

**title**: `str`<br/>
The title of the bill.

**latest_action**: `str | None`<br/>
Latest action information for the bill.

**update_date_including_text**: `datetime | None`<br/>
The date and time the bill text was last updated.

</TabItem>
</Tabs>

