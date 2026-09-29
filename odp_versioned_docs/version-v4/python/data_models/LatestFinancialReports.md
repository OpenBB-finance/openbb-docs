---
title: "Latest Financial Reports"
description: "Get the newest quarterly, annual, and current reports for all companies"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `LatestFinancialReports` | `LatestFinancialReportsQueryParams` | `LatestFinancialReportsData` |

### Import Statement

```python
from openbb_core.provider.standard_models.latest_financial_reports import (
LatestFinancialReportsData,
LatestFinancialReportsQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='sec' label='sec'>

**date**: `date | None | str`<br/>
A specific date to get data for. Defaults to today.

**report_type**: `str | None`<br/>
Return only a specific form type. Default is all quarterly, annual, and current reports. Choices: 1-K, 1-SA, 1-U, 10-D, 10-K, 10-KT, 10-Q, 10-QT, 20-F, 40-F, 6-K, 8-K.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**filing_date**: `date`<br/>
The date of the filing.

**period_ending**: `date | None`<br/>
Report for the period ending.

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the company.

**cik**: `str | None`<br/>
Central Index Key (CIK) for the requested entity.

**sic**: `str | None`<br/>
Standard Industrial Classification code.

**report_type**: `str | None`<br/>
Type of filing.

**description**: `str | None`<br/>
Description of the report.

**url**: `str`<br/>
URL to the filing page.

</TabItem>
<TabItem value='sec' label='sec'>

**filing_date**: `date`<br/>
The date of the filing.

**period_ending**: `date | None`<br/>
Report for the period ending.

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the company.

**cik**: `str | None`<br/>
Central Index Key (CIK) for the requested entity.

**sic**: `str | None`<br/>
Standard Industrial Classification code.

**report_type**: `str | None`<br/>
Type of filing.

**description**: `str | None`<br/>
Description of the report.

**url**: `str`<br/>
URL to the filing page.

**items**: `str | None`<br/>
Item codes associated with the filing.

**index_headers**: `str`<br/>
URL to the index headers file.

**complete_submission**: `str`<br/>
URL to the complete submission text file.

**metadata**: `str | None`<br/>
URL to the MetaLinks.json file, if available.

**financial_report**: `str | None`<br/>
URL to the Financial_Report.xlsx file, if available.

</TabItem>
</Tabs>

