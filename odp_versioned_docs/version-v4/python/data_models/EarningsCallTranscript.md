---
title: "Earnings Call Transcript"
description: "Get earnings call transcripts for a given company"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `EarningsCallTranscript` | `EarningsCallTranscriptQueryParams` | `EarningsCallTranscriptData` |

### Import Statement

```python
from openbb_core.provider.standard_models.earnings_call_transcript import (
EarningsCallTranscriptData,
EarningsCallTranscriptQueryParams,
)
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

