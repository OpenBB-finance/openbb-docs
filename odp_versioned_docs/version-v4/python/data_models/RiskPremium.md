---
title: "Risk Premium"
description: "Get Market Risk Premium by country"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `RiskPremium` | `RiskPremiumQueryParams` | `RiskPremiumData` |

### Import Statement

```python
from openbb_core.provider.standard_models.risk_premium import (
RiskPremiumData,
RiskPremiumQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='fmp' label='fmp'>

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**country**: `str`<br/>
Market country.

**continent**: `str | None`<br/>
Continent of the country.

**total_equity_risk_premium**: `float | None`<br/>
Total equity risk premium for the country.

**country_risk_premium**: `float | None`<br/>
Country-specific risk premium.

</TabItem>
<TabItem value='fmp' label='fmp'>

**country**: `str`<br/>
Market country.

**continent**: `str | None`<br/>
Continent of the country.

**total_equity_risk_premium**: `float | None`<br/>
Total equity risk premium for the country.

**country_risk_premium**: `float | None`<br/>
Country-specific risk premium.

</TabItem>
</Tabs>

