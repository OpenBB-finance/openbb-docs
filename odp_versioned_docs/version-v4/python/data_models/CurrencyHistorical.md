---
title: "Currency Historical"
description: "Currency Historical Price"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `CurrencyHistorical` | `CurrencyHistoricalQueryParams` | `CurrencyHistoricalData` |

### Import Statement

```python
from openbb_core.provider.standard_models.currency_historical import (
CurrencyHistoricalData,
CurrencyHistoricalQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Can use CURR1-CURR2 or CURR1CURR2 format. Multiple items allowed for provider(s): fmp, tiingo, yfinance.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Can use CURR1-CURR2 or CURR1CURR2 format. Multiple items allowed for provider(s): fmp, tiingo, yfinance.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**interval**: `Literal['1m', '5m', '1h', '1d'] | None`<br/>
*Default:* 1d<br/>
Time interval of the data to return.

</TabItem>
<TabItem value='tiingo' label='tiingo'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Can use CURR1-CURR2 or CURR1CURR2 format. Multiple items allowed for provider(s): fmp, tiingo, yfinance.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**interval**: `Literal['1m', '5m', '15m', '30m', '90m', '1h', '2h', '4h', '1d', '5d', '21d'] | None`<br/>
*Default:* 1d<br/>
Time interval of the data to return.

</TabItem>
<TabItem value='yfinance' label='yfinance'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Can use CURR1-CURR2 or CURR1CURR2 format. Multiple items allowed for provider(s): fmp, tiingo, yfinance.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**interval**: `Literal['1m', '2m', '5m', '15m', '30m', '60m', '90m', '1h', '1d', '5d', '1W', '1M', '1Q'] | None`<br/>
*Default:* 1d<br/>
Time interval of the data to return.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | datetime | str`<br/>
The date of the data.

**open**: `float | None`<br/>
The open price.

**high**: `float | None`<br/>
The high price.

**low**: `float | None`<br/>
The low price.

**close**: `float`<br/>
The close price.

**volume**: `float | None`<br/>
The trading volume.

**vwap**: `float | None`<br/>
Volume Weighted Average Price over the period.

</TabItem>
<TabItem value='fmp' label='fmp'>

**date**: `date | datetime | str`<br/>
The date of the data.

**open**: `float | None`<br/>
The open price.

**high**: `float | None`<br/>
The high price.

**low**: `float | None`<br/>
The low price.

**close**: `float`<br/>
The close price.

**volume**: `float | None`<br/>
The trading volume.

**vwap**: `float | None`<br/>
Volume Weighted Average Price over the period.

**change**: `float | None`<br/>
Change in the price from the previous close.

**change_percent**: `float | None`<br/>
Percent change in the price from the previous close.

</TabItem>
<TabItem value='tiingo' label='tiingo'>

**date**: `date | datetime | str`<br/>
The date of the data.

**open**: `float | None`<br/>
The open price.

**high**: `float | None`<br/>
The high price.

**low**: `float | None`<br/>
The low price.

**close**: `float`<br/>
The close price.

**volume**: `float | None`<br/>
The trading volume.

**vwap**: `float | None`<br/>
Volume Weighted Average Price over the period.

</TabItem>
<TabItem value='yfinance' label='yfinance'>

**date**: `date | datetime | str`<br/>
The date of the data.

**open**: `float | None`<br/>
The open price.

**high**: `float | None`<br/>
The high price.

**low**: `float | None`<br/>
The low price.

**close**: `float`<br/>
The close price.

**volume**: `float | None`<br/>
The trading volume.

**vwap**: `float | None`<br/>
Volume Weighted Average Price over the period.

</TabItem>
</Tabs>

