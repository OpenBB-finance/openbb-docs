---
title: "reported_financials"
description: "Get financial statements as reported by the company"
keywords:
- equity
- fundamental
- reported_financials
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/fundamental/reported_financials - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get financial statements as reported by the company.

Examples
--------

```python
from openbb import obb
obb.equity.fundamental.reported_financials(symbol='AAPL')
# Get AAPL balance sheet with a limit of 10 items.
obb.equity.fundamental.reported_financials(symbol='AAPL', period='annual', statement_type='balance', limit=10)
# Get reported income statement
obb.equity.fundamental.reported_financials(symbol='AAPL', statement_type='income')
# Get reported cash flow statement
obb.equity.fundamental.reported_financials(symbol='AAPL', statement_type='cash')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol to get data for.

**period**: `str | None`<br/>
*Default:* annual<br/>
Time period of the data to return.

**statement_type**: `str | None`<br/>
*Default:* balance<br/>
The type of financial statement - i.e, balance, income, cash.

**limit**: `int | None`<br/>
*Default:* 100<br/>
The number of data entries to return. Although the response object contains multiple results, because of the variance in the fields, year-to-year and quarter-to-quarter, it is recommended to view results in small chunks.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str`<br/>
Symbol to get data for.

**period**: `Literal['annual', 'quarter'] | None`<br/>
*Default:* annual<br/>
None

**statement_type**: `Literal['balance', 'income', 'cash'] | None`<br/>
*Default:* income<br/>
Cash flow statements are reported as YTD, Q4 is the same as FY.

**limit**: `int | None`<br/>
*Default:* 100<br/>
The number of data entries to return. Although the response object contains multiple results, because of the variance in the fields, year-to-year and quarter-to-quarter, it is recommended to view results in small chunks.

**fiscal_year**: `int | None`<br/>
The specific fiscal year.  Reports do not go beyond 2008.

</TabItem>
</Tabs>

---

## Returns

**results**: `ReportedFinancials`

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

**period_ending**: `date`<br/>
The ending date of the reporting period.

**fiscal_period**: `str`<br/>
The fiscal period of the report (e.g. FY, Q1, etc.).

**fiscal_year**: `int | None`<br/>
The fiscal year of the fiscal period.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**period_ending**: `date`<br/>
The ending date of the reporting period.

**fiscal_period**: `str`<br/>
The fiscal period of the report (e.g. FY, Q1, etc.).

**fiscal_year**: `int | None`<br/>
The fiscal year of the fiscal period.

</TabItem>
</Tabs>

