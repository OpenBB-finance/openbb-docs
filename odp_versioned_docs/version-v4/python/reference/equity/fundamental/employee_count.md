---
title: "employee_count"
description: "Learn how to retrieve historical employee count data using the Python  API. Understand the parameters, returns, and data structure for the OBB.equity.fundamental.employee_count  method."
keywords:
- historical employees
- employee count
- Python API
- data retrieval
- symbol
- provider
- warnings
- chart object
- metadata
- data
- CIK
- acceptance time
- period of report
- company name
- form type
- filing date
- source URL
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/fundamental/employee_count - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get historical employee count data for a given company.

Examples
--------

```python
from openbb import obb
obb.equity.fundamental.employee_count(symbol='AAPL')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**limit**: `int | None`<br/>
Number of records to return. Default is all.

</TabItem>
</Tabs>

---

## Returns

**results**: `HistoricalEmployees`

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

**date**: `date | str`<br/>
The date of the data.

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**employees**: `int`<br/>
Reported number of employees.

</TabItem>
<TabItem value='fmp' label='fmp'>

**date**: `date | str`<br/>
The date of the data.

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**employees**: `int`<br/>
Reported number of employees.

**company_name**: `str | None`<br/>
Company name associated with the data.

**source**: `str | None`<br/>
Source reference for the data.

**url**: `str | None`<br/>
URL link to the source of the data.

</TabItem>
</Tabs>

