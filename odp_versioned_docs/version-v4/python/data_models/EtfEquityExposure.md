---
title: "Etf Equity Exposure"
description: "Get the exposure to ETFs for a specific stock"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `EtfEquityExposure` | `EtfEquityExposureQueryParams` | `EtfEquityExposureData` |

### Import Statement

```python
from openbb_core.provider.standard_models.etf_equity_exposure import (
EtfEquityExposureData,
EtfEquityExposureQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. (underlying equity) Multiple items allowed for provider(s): fmp.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. (underlying equity) Multiple items allowed for provider(s): fmp.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**equity_symbol**: `str`<br/>
The symbol of the equity requested.

**etf_symbol**: `str`<br/>
The symbol of the ETF with exposure to the requested equity.

**weight**: `float | None`<br/>
The weight of the equity in the ETF, as a normalized percent.

**market_value**: `int | float | None`<br/>
The market value of the equity position in the ETF.

**shares**: `int | float | None`<br/>
Number of reported shares controlled by the ETF.

</TabItem>
<TabItem value='fmp' label='fmp'>

**equity_symbol**: `str`<br/>
The symbol of the equity requested.

**etf_symbol**: `str`<br/>
The symbol of the ETF with exposure to the requested equity.

**weight**: `float | None`<br/>
The weight of the equity in the ETF, as a normalized percent.

**market_value**: `int | float | None`<br/>
The market value of the equity position in the ETF.

**shares**: `int | float | None`<br/>
Number of reported shares controlled by the ETF.

</TabItem>
</Tabs>

