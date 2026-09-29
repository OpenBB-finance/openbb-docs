---
title: "transcript"
description: "Learn how to retrieve earnings call transcripts for a given company using  Python obb.equity.fundamental.transcript. Understand the data parameters, returns,  symbol, year, quarter, and metadata associated with the transcripts."
keywords:
- earnings call transcript
- python obb.equity.fundamental.transcript
- data parameters
- returns
- symbols
- year
- quar
- content
- metadata
- provider
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/fundamental/transcript - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get earnings call transcripts for a given company.

Examples
--------

```python
from openbb import obb
obb.equity.fundamental.transcript(symbol='AAPL', year=2020, quarter=1)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol to get data for.

**year**: `int | None`<br/>
Year of the earnings call transcript.

**quarter**: `Literal[1, 2, 3, 4] | None`<br/>
Quarterly period of the earnings call transcript.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str`<br/>
Symbol to get data for.

**year**: `int | None`<br/>
Year of the earnings call transcript.

**quarter**: `Literal[1, 2, 3, 4] | None`<br/>
Quarterly period of the earnings call transcript.

</TabItem>
</Tabs>

---

## Returns

**results**: `EarningsCallTranscript`

Serializable results.

**provider**: `Optional[Literal['fmp']]`

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

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**year**: `int`<br/>
Year of the earnings call transcript.

**quarter**: `str`<br/>
Quarter of the earnings call transcript.

**date**: `date | str`<br/>
The date of the data.

**content**: `str`<br/>
Content of the earnings call transcript.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**year**: `int`<br/>
Year of the earnings call transcript.

**quarter**: `str`<br/>
Quarter of the earnings call transcript.

**date**: `date | str`<br/>
The date of the data.

**content**: `str`<br/>
Content of the earnings call transcript.

</TabItem>
</Tabs>

