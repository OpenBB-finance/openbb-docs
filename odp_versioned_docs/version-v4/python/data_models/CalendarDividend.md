---
title: "Calendar Dividend"
description: "Get historical and upcoming dividend payments"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `CalendarDividend` | `CalendarDividendQueryParams` | `CalendarDividendData` |

### Import Statement

```python
from openbb_core.provider.standard_models.calendar_dividend import (
CalendarDividendData,
CalendarDividendQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
<TabItem value='fmp' label='fmp'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
<TabItem value='nasdaq' label='nasdaq'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**ex_dividend_date**: `date`<br/>
The ex-dividend date - the date on which the stock begins trading without rights to the dividend.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**amount**: `float | None`<br/>
The dividend amount per share.

**name**: `str | None`<br/>
Name of the entity.

**record_date**: `date | None`<br/>
The record date of ownership for eligibility.

**payment_date**: `date | None`<br/>
The payment date of the dividend.

**declaration_date**: `date | None`<br/>
Declaration date of the dividend.

</TabItem>
<TabItem value='fmp' label='fmp'>

**ex_dividend_date**: `date`<br/>
The ex-dividend date - the date on which the stock begins trading without rights to the dividend.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**amount**: `float | None`<br/>
The dividend amount per share.

**name**: `str | None`<br/>
Name of the entity.

**record_date**: `date | None`<br/>
The record date of ownership for eligibility.

**payment_date**: `date | None`<br/>
The payment date of the dividend.

**declaration_date**: `date | None`<br/>
Declaration date of the dividend.

**adjusted_amount**: `float | None`<br/>
The adjusted-dividend amount.

**dividend_yield**: `float | None`<br/>
Annualized dividend yield.

**frequency**: `str | None`<br/>
Frequency of the regular dividend payment.

</TabItem>
<TabItem value='nasdaq' label='nasdaq'>

**ex_dividend_date**: `date`<br/>
The ex-dividend date - the date on which the stock begins trading without rights to the dividend.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**amount**: `float | None`<br/>
The dividend amount per share.

**name**: `str | None`<br/>
Name of the entity.

**record_date**: `date | None`<br/>
The record date of ownership for eligibility.

**payment_date**: `date | None`<br/>
The payment date of the dividend.

**declaration_date**: `date | None`<br/>
Declaration date of the dividend.

**annualized_amount**: `float | None`<br/>
The indicated annualized dividend amount.

</TabItem>
</Tabs>

