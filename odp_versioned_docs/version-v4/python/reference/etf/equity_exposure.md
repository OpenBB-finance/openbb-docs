---
title: "equity_exposure"
description: "Get the exposure to ETFs for a specific stock"
keywords:
- etf
- equity_exposure
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="etf/equity_exposure - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get the exposure to ETFs for a specific stock.

Examples
--------

```python
from openbb import obb
obb.etf.equity_exposure(symbol='MSFT')
# This function accepts multiple tickers.
obb.etf.equity_exposure(symbol='MSFT,AAPL')
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

---

## Returns

**results**: `EtfEquityExposure`

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

