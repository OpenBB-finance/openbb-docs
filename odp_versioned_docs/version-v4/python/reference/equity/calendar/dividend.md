---
title: "dividend"
description: "Get upcoming and historical dividend data with the OBB.equity.calendar.dividend  method. This method allows you to retrieve dividend information such as dates, amounts,  and provider details. It also provides warnings, charts, and metadata for further  analysis."
keywords:
- dividend calendar
- upcoming dividends
- historical dividends
- dividend data
- dividend schedule
- dividend information
- dividend dates
- dividend amounts
- dividend provider
- dividend warnings
- dividend chart
- dividend metadata
- ex-dividend date
- record date
- payment date
- declaration date
- dividend symbol
- dividend name
- dividend adjusted amount
- dividend label
- annualized dividend amount
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/calendar/dividend - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get historical and upcoming dividend payments. Includes dividend amount, ex-dividend and payment dates.

Examples
--------

```python
from openbb import obb
obb.equity.calendar.dividend()
# Get dividend calendar for specific dates.
obb.equity.calendar.dividend(start_date='2024-02-01', end_date='2024-02-07')
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

---

## Returns

**results**: `CalendarDividend`

Serializable results.

**provider**: `Optional[Literal['fmp', 'nasdaq']]`

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

