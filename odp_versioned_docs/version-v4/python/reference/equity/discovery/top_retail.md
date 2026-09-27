---
title: "top_retail"
description: "Learn about the OBB.equity.discovery.top_retail function in Python, which  tracks retail activity and sentiment for over 9,500 US traded stocks, ADRs, and  ETPs. Find out how to use the function's parameters and understand the data it returns."
keywords:
- retail activity
- sentiment
- top retail
- equity discovery
- US traded stocks
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/discovery/top_retail - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Track over $30B USD/day of individual investors trades.

It gives a daily view into retail activity and sentiment for over 9,500 US traded stocks,
ADRs, and ETPs.

Examples
--------

```python
from openbb import obb
obb.equity.discovery.top_retail()
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**limit**: `int | None`<br/>
*Default:* 5<br/>
The number of data entries to return.

</TabItem>
<TabItem value='nasdaq' label='nasdaq'>

**limit**: `int | None`<br/>
*Default:* 5<br/>
The number of data entries to return.

</TabItem>
</Tabs>

---

## Returns

**results**: `TopRetail`

Serializable results.

**provider**: `Optional[Literal['nasdaq']]`

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

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**activity**: `float`<br/>
Activity of the symbol.

**sentiment**: `float`<br/>
Sentiment of the symbol. 1 is bullish, -1 is bearish.

</TabItem>
<TabItem value='nasdaq' label='nasdaq'>

**date**: `date | str`<br/>
The date of the data.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**activity**: `float`<br/>
Activity of the symbol.

**sentiment**: `float`<br/>
Sentiment of the symbol. 1 is bullish, -1 is bearish.

</TabItem>
</Tabs>

