---
title: "cik_map"
description: "Learn how to retrieve the CIK number corresponding to a ticker symbol  using the python obb.regulators.sec.cik_map function. Understand the available parameters,  return values, and data structure."
keywords:
- CIK number
- ticker symbol
- python obb.regulators.sec.cik_map function
- get data for symbol
- provider parameter
- returns
- results
- warnings
- chart object
- metadata info
- data
- central index key
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="regulators/sec/cik_map - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Map a ticker symbol to a CIK number.

Examples
--------

```python
from openbb import obb
obb.regulators.sec.cik_map(symbol='MSFT')
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

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
Whether or not to use cache for the request, default is True.

</TabItem>
</Tabs>

---

## Returns

**results**: `CikMap`

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

**cik**: `str | int | None`<br/>
Central Index Key (CIK) for the requested entity.

</TabItem>
<TabItem value='sec' label='sec'>

**cik**: `str | int | None`<br/>
Central Index Key (CIK) for the requested entity.

</TabItem>
</Tabs>

