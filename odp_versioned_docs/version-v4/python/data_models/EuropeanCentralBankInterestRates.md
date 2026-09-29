---
title: "European Central Bank Interest Rates"
description: "European Central Bank Interest Rates"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `EuropeanCentralBankInterestRates` | `EuropeanCentralBankInterestRatesQueryParams` | `EuropeanCentralBankInterestRatesData` |

### Import Statement

```python
from openbb_core.provider.standard_models.ecb_interest_rates import (
EuropeanCentralBankInterestRatesData,
EuropeanCentralBankInterestRatesQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**interest_rate_type**: `Literal['deposit', 'lending', 'refinancing'] | None`<br/>
*Default:* lending<br/>
The type of interest rate.

</TabItem>
<TabItem value='fred' label='fred'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**interest_rate_type**: `Literal['deposit', 'lending', 'refinancing'] | None`<br/>
*Default:* lending<br/>
The type of interest rate.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | str`<br/>
The date of the data.

**rate**: `float | None`<br/>
European Central Bank Interest Rate.

</TabItem>
<TabItem value='fred' label='fred'>

**date**: `date | str`<br/>
The date of the data.

**rate**: `float | None`<br/>
European Central Bank Interest Rate.

</TabItem>
</Tabs>

