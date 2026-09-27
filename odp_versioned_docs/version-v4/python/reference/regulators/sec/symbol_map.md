---
title: "symbol_map"
description: "Retrieve the ticker symbol corresponding to a company CIK using the  OBB API endpoint. This function allows you to perform a search query and get the  results along with additional metadata, warnings, and optional chart data."
keywords:
- ticker symbol
- CIK
- company
- ticker mapping
- search query
- provider
- results
- warnings
- chart
- metadata
- data
- symbol
- entity
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="regulators/sec/symbol_map - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Map a CIK number to a ticker symbol, leading 0s can be omitted or included.

Examples
--------

```python
from openbb import obb
obb.regulators.sec.symbol_map(query='0000789019')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**query**: `str`<br/>
Search query.

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
Whether or not to use cache. If True, cache will store for seven days.

</TabItem>
<TabItem value='sec' label='sec'>

**query**: `str`<br/>
Search query.

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
Whether or not to use cache. If True, cache will store for seven days.

</TabItem>
</Tabs>

---

## Returns

**results**: `SymbolMap`

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

</TabItem>
<TabItem value='sec' label='sec'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

</TabItem>
</Tabs>

