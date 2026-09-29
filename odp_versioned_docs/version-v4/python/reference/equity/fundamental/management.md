---
title: "management"
description: "Learn about key executives for a company and how to retrieve their data  using the `obb.equity.fundamental.management` function. Get details such as designation,  name, pay, currency, gender, birth year, and title since."
keywords:
- key executives
- company executives
- symbol
- data
- designation
- name
- pay
- currency
- gender
- birth year
- title since
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/fundamental/management - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get executive management team data for a given company.

Examples
--------

```python
from openbb import obb
obb.equity.fundamental.management(symbol='AAPL')
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

---

## Returns

**results**: `KeyExecutives`

Serializable results.

**provider**: `Optional[Literal['fmp', 'yfinance']]`

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

