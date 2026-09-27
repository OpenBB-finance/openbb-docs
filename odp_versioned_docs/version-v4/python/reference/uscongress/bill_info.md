---
title: "bill_info"
description: "Get summary, status, and other metadata for a specific bill"
keywords:
- uscongress
- bill_info
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="uscongress/bill_info - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get summary, status, and other metadata for a specific bill.

Enter the URL of the bill as: https://api.congress.gov/v3/bill/119/hr/131?

URLs for bills can be found from the `uscongress.bills` endpoint.

The raw JSON response from the API will be returned along with a formatted
text version of the key information from the raw response.

In OpenBB Workspace, this command returns as a Markdown widget.

Examples
--------

```python
from openbb import obb
obb.uscongress.bill_info(bill_url='https://api.congress.gov/v3/bill/119/s/1947?')
# The bill URL can be shortened to just the bill number (e.g., '119/s/1947').
obb.uscongress.bill_info(bill_url='119/s/1947')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='congress_gov' label='congress_gov'>

**bill_url**: `str`<br/>
Enter a base URL of a bill (e.g., 'https://api.congress.gov/v3/bill/119/s/1947?format=json'). Alternatively, you can enter a bill number (e.g., '119/s/1947').

</TabItem>
</Tabs>

---

## Returns

**results**: `CongressBillInfo`

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
Aggregated metadata for the bill in Markdown format.

**raw_data**: `dict[str, Any]`<br/>
Raw JSON data from the collected bill information.

</TabItem>
</Tabs>

