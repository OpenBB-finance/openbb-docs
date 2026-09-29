---
title: "fails_to_deliver"
description: "Learn how to retrieve reported Fail-to-deliver (FTD) data using the OBB.equity.shorts.fails_to_deliver  function in Python. Explore the available parameters for symbol selection and provider  options. Understand the data returned, including settlement date, symbol, quantity  of fails, and more."
keywords:
- Fail-to-deliver data
- Fail-to-deliver reporting
- Equity FTD
- Symbol data
- Provider selection
- Limiting number of reports
- Skipping reports
- Settlement date
- CUSIP
- Quantity of fails
- Previous closing price
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/shorts/fails_to_deliver - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get reported Fail-to-deliver (FTD) data.

Examples
--------

```python
from openbb import obb
obb.equity.shorts.fails_to_deliver(symbol='AAPL')
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

---

## Returns

**results**: `EquityFTD`

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

