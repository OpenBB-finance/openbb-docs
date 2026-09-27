---
title: "latest_financial_reports"
description: "Get the newest quarterly, annual, and current reports for all companies"
keywords:
- equity
- discovery
- latest_financial_reports
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/discovery/latest_financial_reports - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get the newest quarterly, annual, and current reports for all companies.

Examples
--------

```python
from openbb import obb
obb.equity.discovery.latest_financial_reports()
obb.equity.discovery.latest_financial_reports(date='2024-09-30')
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

---

## Returns

**results**: `LatestFinancialReports`

Serializable results.

**provider**: `Optional[Literal['sec']]`

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

