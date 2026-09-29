---
title: "forward_pe"
description: "Get forward PE estimates"
keywords:
- equity
- estimates
- forward_pe
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/estimates/forward_pe - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get forward PE estimates.

Examples
--------

```python
from openbb import obb
obb.equity.estimates.forward_pe()
obb.equity.estimates.forward_pe(symbol='AAPL,MSFT,GOOG')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | None | list[str | None]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): intrinio.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str | None | list[str | None]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): intrinio.

</TabItem>
</Tabs>

---

## Returns

**results**: `ForwardPeEstimates`

Serializable results.

**provider**: `Optional[Literal['intrinio']]`

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

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the entity.

**year1**: `float | None`<br/>
Estimated PE ratio for the next fiscal year.

**year2**: `float | None`<br/>
Estimated PE ratio two fiscal years from now.

**year3**: `float | None`<br/>
Estimated PE ratio three fiscal years from now.

**year4**: `float | None`<br/>
Estimated PE ratio four fiscal years from now.

**year5**: `float | None`<br/>
Estimated PE ratio five fiscal years from now.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the entity.

**year1**: `float | None`<br/>
Estimated PE ratio for the next fiscal year.

**year2**: `float | None`<br/>
Estimated PE ratio two fiscal years from now.

**year3**: `float | None`<br/>
Estimated PE ratio three fiscal years from now.

**year4**: `float | None`<br/>
Estimated PE ratio four fiscal years from now.

**year5**: `float | None`<br/>
Estimated PE ratio five fiscal years from now.

**peg_ratio_year1**: `float | None`<br/>
Estimated Forward PEG ratio for the next fiscal year.

**eps_ttm**: `float | None`<br/>
The latest trailing twelve months earnings per share.

**last_updated**: `date | None`<br/>
The date the data was last updated.

</TabItem>
</Tabs>

