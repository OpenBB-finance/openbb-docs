---
title: "Trailing Dividend Yield"
description: "Get the 1 year trailing dividend yield for a given company over time"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `TrailingDividendYield` | `TrailingDividendYieldQueryParams` | `TrailingDividendYieldData` |

### Import Statement

```python
from openbb_core.provider.standard_models. import (
TrailingDividendYieldData,
TrailingDividendYieldQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol to get data for.

**limit**: `int | None`<br/>
*Default:* 252<br/>
The number of data entries to return. Default is 252, the number of trading days in a year.

</TabItem>
<TabItem value='tiingo' label='tiingo'>

**symbol**: `str`<br/>
Symbol to get data for.

**limit**: `int | None`<br/>
*Default:* 252<br/>
The number of data entries to return. Default is 252, the number of trading days in a year.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | str`<br/>
The date of the data.

**trailing_dividend_yield**: `float`<br/>
Trailing dividend yield.

</TabItem>
<TabItem value='tiingo' label='tiingo'>

**date**: `date | str`<br/>
The date of the data.

**trailing_dividend_yield**: `float`<br/>
Trailing dividend yield.

</TabItem>
</Tabs>

