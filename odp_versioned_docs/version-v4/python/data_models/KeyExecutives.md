---
title: "Key Executives"
description: "Get executive management team data for a given company"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `KeyExecutives` | `KeyExecutivesQueryParams` | `KeyExecutivesData` |

### Import Statement

```python
from openbb_core.provider.standard_models.key_executives import (
KeyExecutivesData,
KeyExecutivesQueryParams,
)
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
<TabItem value='yfinance' label='yfinance'>

**symbol**: `str`<br/>
Symbol to get data for.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**title**: `str`<br/>
Designation of the key executive.

**name**: `str`<br/>
Name of the key executive.

**pay**: `int | None`<br/>
Pay of the key executive.

**currency_pay**: `str | None`<br/>
Currency of the pay.

**gender**: `str | None`<br/>
Gender of the key executive.

**year_born**: `int | None`<br/>
Birth year of the key executive.

</TabItem>
<TabItem value='fmp' label='fmp'>

**title**: `str`<br/>
Designation of the key executive.

**name**: `str`<br/>
Name of the key executive.

**pay**: `int | None`<br/>
Pay of the key executive.

**currency_pay**: `str | None`<br/>
Currency of the pay.

**gender**: `str | None`<br/>
Gender of the key executive.

**year_born**: `int | None`<br/>
Birth year of the key executive.

</TabItem>
<TabItem value='yfinance' label='yfinance'>

**title**: `str`<br/>
Designation of the key executive.

**name**: `str`<br/>
Name of the key executive.

**pay**: `int | None`<br/>
Pay of the key executive.

**currency_pay**: `str | None`<br/>
Currency of the pay.

**gender**: `str | None`<br/>
Gender of the key executive.

**year_born**: `int | None`<br/>
Birth year of the key executive.

**exercised_value**: `int | None`<br/>
Value of shares exercised.

**unexercised_value**: `int | None`<br/>
Value of shares not exercised.

**fiscal_year**: `int | None`<br/>
Fiscal year of the pay.

</TabItem>
</Tabs>

