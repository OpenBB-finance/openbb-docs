---
title: "Yield Curve"
description: "Get yield curve data by country and date"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `YieldCurve` | `YieldCurveQueryParams` | `YieldCurveData` |

### Import Statement

```python
from openbb_core.provider.standard_models.yield_curve import (
YieldCurveData,
YieldCurveQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | str | None | list[date | str | None]`<br/>
A specific date to get data for. By default is the current data. Multiple items allowed for provider(s): ecb, econdb, federal_reserve, fmp, fred.

</TabItem>
<TabItem value='ecb' label='ecb'>

**date**: `date | str | None | list[date | str | None]`<br/>
A specific date to get data for. By default is the current data. Multiple items allowed for provider(s): ecb, econdb, federal_reserve, fmp, fred.

**rating**: `Literal['aaa', 'all_ratings'] | None`<br/>
*Default:* aaa<br/>
The rating type, either 'aaa' or 'all_ratings'.

**yield_curve_type**: `Literal['spot_rate', 'instantaneous_forward', 'par_yield'] | None`<br/>
*Default:* spot_rate<br/>
The yield curve type.

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
If true, cache the request for four hours.

</TabItem>
<TabItem value='econdb' label='econdb'>

**date**: `date | str | None | list[date | str | None]`<br/>
A specific date to get data for. By default is the current data. Multiple items allowed for provider(s): ecb, econdb, federal_reserve, fmp, fred.

**country**: `str | None`<br/>
*Default:* united_states<br/>
The country to get data. New Zealand, Mexico, Singapore, and Thailand have only monthly data. The nearest date to the requested one will be used.

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
If true, cache the request for four hours.

</TabItem>
<TabItem value='federal_reserve' label='federal_reserve'>

**date**: `date | str | None | list[date | str | None]`<br/>
A specific date to get data for. By default is the current data. Multiple items allowed for provider(s): ecb, econdb, federal_reserve, fmp, fred.

</TabItem>
<TabItem value='fmp' label='fmp'>

**date**: `date | str | None | list[date | str | None]`<br/>
A specific date to get data for. By default is the current data. Multiple items allowed for provider(s): ecb, econdb, federal_reserve, fmp, fred.

</TabItem>
<TabItem value='fred' label='fred'>

**date**: `date | str | None | list[date | str | None]`<br/>
A specific date to get data for. By default is the current data. Multiple items allowed for provider(s): ecb, econdb, federal_reserve, fmp, fred.

**yield_curve_type**: `Literal['nominal', 'real', 'breakeven', 'treasury_minus_fed_funds', 'corporate_spot', 'corporate_par'] | None`<br/>
*Default:* nominal<br/>
Yield curve type. Nominal and Real Rates are available daily, others are monthly. The closest date to the requested date will be returned.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | None | str`<br/>
The date of the data.

**maturity**: `str`<br/>
Maturity length of the security.

</TabItem>
<TabItem value='ecb' label='ecb'>

**date**: `date | None | str`<br/>
The date of the data.

**maturity**: `str`<br/>
Maturity length of the security.

</TabItem>
<TabItem value='econdb' label='econdb'>

**date**: `date | None | str`<br/>
The date of the data.

**maturity**: `str`<br/>
Maturity length of the security.

</TabItem>
<TabItem value='federal_reserve' label='federal_reserve'>

**date**: `date | None | str`<br/>
The date of the data.

**maturity**: `str`<br/>
Maturity length of the security.

</TabItem>
<TabItem value='fmp' label='fmp'>

**date**: `date | None | str`<br/>
The date of the data.

**maturity**: `str`<br/>
Maturity length of the security.

</TabItem>
<TabItem value='fred' label='fred'>

**date**: `date | None | str`<br/>
The date of the data.

**maturity**: `str`<br/>
Maturity length of the security.

</TabItem>
</Tabs>

