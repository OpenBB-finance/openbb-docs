---
title: "ecb"
description: "Learn about the key interest rates set by the European Central Bank (ECB)  for the Euro area. Explore the Python API for accessing European Central Bank interest  rate data and understand the available parameters to customize your queries."
keywords:
- European Central Bank interest rates
- ECB key interest rates
- ECB refinancing operations
- deposit facility rate
- marginal lending facility rate
- Python OBB fixed income API
- start date parameter
- end date parameter
- interest rate type parameter
- provider parameter
- European Central Bank Interest Rates data
- European Central Bank Interest Rates API
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="fixedincome/rate/ecb - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

European Central Bank Interest Rates.

The Governing Council of the ECB sets the key interest rates for the euro area:

- The interest rate on the main refinancing operations (MRO), which provide
the bulk of liquidity to the banking system.
- The rate on the deposit facility, which banks may use to make overnight deposits with the Eurosystem.
- The rate on the marginal lending facility, which offers overnight credit to banks from the Eurosystem.

Examples
--------

```python
from openbb import obb
obb.fixedincome.rate.ecb()
obb.fixedincome.rate.ecb(interest_rate_type='refinancing')
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

---

## Returns

**results**: `EuropeanCentralBankInterestRates`

Serializable results.

**provider**: `Optional[Literal['fred']]`

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

