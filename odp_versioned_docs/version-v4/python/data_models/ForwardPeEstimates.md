---
title: "Forward Pe Estimates"
description: "Get forward PE estimates"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `ForwardPeEstimates` | `ForwardPeEstimatesQueryParams` | `ForwardPeEstimatesData` |

### Import Statement

```python
from openbb_core.provider.standard_models.forward_pe_estimates import (
ForwardPeEstimatesData,
ForwardPeEstimatesQueryParams,
)
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

