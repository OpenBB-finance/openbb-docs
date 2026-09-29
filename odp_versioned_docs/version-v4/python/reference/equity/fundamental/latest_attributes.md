---
title: "latest_attributes"
description: "Get the latest value of a data tag from Intrinio"
keywords:
- equity
- fundamental
- latest_attributes
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/fundamental/latest_attributes - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get the latest value of a data tag from Intrinio.

Examples
--------

```python
from openbb import obb
obb.equity.fundamental.latest_attributes(symbol='AAPL', tag='ceo')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): intrinio.

**tag**: `str | list[str]`<br/>
Intrinio data tag ID or code. Multiple items allowed for provider(s): intrinio.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): intrinio.

**tag**: `str | list[str]`<br/>
Intrinio data tag ID or code. Multiple items allowed for provider(s): intrinio.

</TabItem>
</Tabs>

---

## Returns

**results**: `LatestAttributes`

Serializable results.

**provider**: `Optional[Literal['intrinio']]`

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

**tag**: `str | None`<br/>
Tag name for the fetched data.

**value**: `str | float | None`<br/>
The value of the data.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**tag**: `str | None`<br/>
Tag name for the fetched data.

**value**: `str | float | None`<br/>
The value of the data.

</TabItem>
</Tabs>

