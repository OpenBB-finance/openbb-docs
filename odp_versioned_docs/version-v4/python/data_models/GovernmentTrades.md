---
title: "Government Trades"
description: "Obtain government transaction data, including data from the Senate
and the House of Representatives"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `GovernmentTrades` | `GovernmentTradesQueryParams` | `GovernmentTradesData` |

### Import Statement

```python
from openbb_core.provider.standard_models.government_trades import (
GovernmentTradesData,
GovernmentTradesQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | None | list[str | None]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp.

**chamber**: `Literal['house', 'senate', 'all'] | None`<br/>
*Default:* all<br/>
Government Chamber.

**limit**: `int | None`<br/>
The number of data entries to return.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str | None | list[str | None]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp.

**chamber**: `Literal['house', 'senate', 'all'] | None`<br/>
*Default:* all<br/>
Government Chamber.

**limit**: `int | None`<br/>
The number of data entries to return.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**date**: `date | str`<br/>
The date of the data.

**transaction_date**: `date | None`<br/>
Date of Transaction.

**representative**: `str | None`<br/>
Name of Representative.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**date**: `date | str`<br/>
The date of the data.

**transaction_date**: `date | None`<br/>
Date of Transaction.

**representative**: `str | None`<br/>
Name of Representative.

**chamber**: `Literal['House', 'Senate']`<br/>
Government Chamber - House or Senate.

**owner**: `str | None`<br/>
Ownership status (e.g., Spouse, Joint).

**asset_type**: `str | None`<br/>
Type of asset involved in the transaction.

**asset_description**: `str | None`<br/>
Description of the asset.

**transaction_type**: `str | None`<br/>
Type of transaction (e.g., Sale, Purchase).

**amount**: `str | None`<br/>
Transaction amount range.

**comment**: `str | None`<br/>
Additional comments on the transaction.

**url**: `str | None`<br/>
Link to the transaction document.

</TabItem>
</Tabs>

