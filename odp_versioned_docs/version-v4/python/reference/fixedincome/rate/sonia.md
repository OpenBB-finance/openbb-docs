---
title: "sonia"
description: "Sterling Overnight Index Average"
keywords:
- fixedincome
- rate
- sonia
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="fixedincome/rate/sonia - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sterling Overnight Index Average.

SONIA (Sterling Overnight Index Average) is an important interest rate benchmark. SONIA is based on actual
transactions and reflects the average of the interest rates that banks pay to borrow sterling overnight from other
financial institutions and other institutional investors.

Examples
--------

```python
from openbb import obb
obb.fixedincome.rate.sonia()
obb.fixedincome.rate.sonia(parameter='total_nominal_value')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
<TabItem value='fred' label='fred'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**parameter**: `Literal['rate', 'index', '10th_percentile', '25th_percentile', '75th_percentile', '90th_percentile', 'total_nominal_value'] | None`<br/>
*Default:* rate<br/>
Period of SONIA rate.

</TabItem>
</Tabs>

---

## Returns

**results**: `SONIA`

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
SONIA rate.

</TabItem>
<TabItem value='fred' label='fred'>

**date**: `date | str`<br/>
The date of the data.

**rate**: `float | None`<br/>
SONIA rate.

</TabItem>
</Tabs>

