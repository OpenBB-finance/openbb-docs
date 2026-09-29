---
title: "historical_splits"
description: "Learn how to retrieve historical stock splits data using the Python obb.equity.fundamental.historical_splits  function. Understand the parameters, returns, and data structure for this API call."
keywords:
- historical stock splits
- stock splits data
- python obb.equity.fundamental.historical_splits
- parameters
- symbol
- provider
- returns
- results
- provider name
- warnings
- chart object
- metadata
- data
- date
- label
- numerator
- denominator
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/fundamental/historical_splits - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get historical stock splits for a given company.

Examples
--------

```python
from openbb import obb
obb.equity.fundamental.historical_splits(symbol='AAPL')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol to get data for.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str`<br/>
Symbol to get data for.

</TabItem>
</Tabs>

---

## Returns

**results**: `HistoricalSplits`

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

**date**: `date | str`<br/>
The date of the data.

**numerator**: `float | None`<br/>
Numerator of the split.

**denominator**: `float | None`<br/>
Denominator of the split.

**split_ratio**: `str | None`<br/>
Split ratio.

</TabItem>
<TabItem value='fmp' label='fmp'>

**date**: `date | str`<br/>
The date of the data.

**numerator**: `float | None`<br/>
Numerator of the split.

**denominator**: `float | None`<br/>
Denominator of the split.

**split_ratio**: `str | None`<br/>
Split ratio.

</TabItem>
</Tabs>

