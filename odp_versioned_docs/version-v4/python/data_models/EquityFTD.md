---
title: "Equity FTD"
description: "Get reported Fail-to-deliver (FTD) data"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `EquityFTD` | `EquityFTDQueryParams` | `EquityFTDData` |

### Import Statement

```python
from openbb_core.provider.standard_models. import (
EquityFTDData,
EquityFTDQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol to get data for.

</TabItem>
<TabItem value='sec' label='sec'>

**symbol**: `str`<br/>
Symbol to get data for.

**limit**: `int | None`<br/>
*Default:* 24<br/>
<details>
<summary mdxType="summary">Description</summary>

Limit the number of reports to parse, from most recent.<br/>
        Approximately 24 reports per year, going back to 2009.<br/>
</details>

**skip_reports**: `int | None`<br/>
*Default:* 0<br/>
Skip N number of reports from current. A value of 1 will skip the most recent report.

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
Whether or not to use cache for the request, default is True. Each reporting period is a separate URL, new reports will be added to the cache.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**settlement_date**: `date | None`<br/>
The settlement date of the fail.

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**cusip**: `str | None`<br/>
CUSIP of the Security.

**quantity**: `int | None`<br/>
The number of fails on that settlement date.

**price**: `float | None`<br/>
The price at the previous closing price from the settlement date.

**description**: `str | None`<br/>
The description of the Security.

</TabItem>
<TabItem value='sec' label='sec'>

**settlement_date**: `date | None`<br/>
The settlement date of the fail.

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**cusip**: `str | None`<br/>
CUSIP of the Security.

**quantity**: `int | None`<br/>
The number of fails on that settlement date.

**price**: `float | None`<br/>
The price at the previous closing price from the settlement date.

**description**: `str | None`<br/>
The description of the Security.

</TabItem>
</Tabs>

