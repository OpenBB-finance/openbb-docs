---
title: "risk_premium"
description: "Learn about Historical Market Risk Premium and the obb.economy.risk_premium  function. Explore the parameters, returns, and data available, including results,  warnings, chart, metadata, country, continent, total equity risk premium, and country  risk premium."
keywords:
- Historical Market Risk Premium
- obb.economy.risk_premium
- parameters
- provider
- returns
- OBBject
- results
- RiskPremium
- warnings
- chart
- metadata
- data
- country
- continent
- total equity risk premium
- country risk premium
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="economy/risk_premium - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get Market Risk Premium by country.

Examples
--------

```python
from openbb import obb
obb.economy.risk_premium()
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='fmp' label='fmp'>

</TabItem>
</Tabs>

---

## Returns

**results**: `RiskPremium`

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

