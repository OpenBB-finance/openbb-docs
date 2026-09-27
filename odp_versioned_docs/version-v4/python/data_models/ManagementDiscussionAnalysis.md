---
title: "Management Discussion Analysis"
description: "Get the Management Discussion & Analysis section from the financial statements for a given company"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `ManagementDiscussionAnalysis` | `ManagementDiscussionAnalysisQueryParams` | `ManagementDiscussionAnalysisData` |

### Import Statement

```python
from openbb_core.provider.standard_models.management_discussion_analysis import (
ManagementDiscussionAnalysisData,
ManagementDiscussionAnalysisQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol to get data for.

**calendar_year**: `int | None`<br/>
Calendar year of the report. By default, is the current year. If the calendar period is not provided, but the calendar year is, it will return the annual report.

**calendar_period**: `Literal['Q1', 'Q2', 'Q3', 'Q4'] | None`<br/>
Calendar period of the report. By default, is the most recent report available for the symbol. If no calendar year and no calendar period are provided, it will return the most recent report.

</TabItem>
<TabItem value='sec' label='sec'>

**symbol**: `str`<br/>
Symbol to get data for.

**calendar_year**: `int | None`<br/>
Calendar year of the report. By default, is the current year. If the calendar period is not provided, but the calendar year is, it will return the annual report.

**calendar_period**: `Literal['Q1', 'Q2', 'Q3', 'Q4'] | None`<br/>
Calendar period of the report. By default, is the most recent report available for the symbol. If no calendar year and no calendar period are provided, it will return the most recent report.

**include_tables**: `bool | None`<br/>
*Default:* True<br/>
Return tables formatted as markdown in the text. Default is True.

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
When True, the file will be cached for use later. Default is True.

**raw_html**: `bool | None`<br/>
*Default:* False<br/>
When True, the raw HTML content of the entire filing will be returned. Default is False. Use this option to parse the document manually.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**calendar_year**: `int`<br/>
The calendar year of the report.

**calendar_period**: `int`<br/>
The calendar period of the report.

**period_ending**: `date | None`<br/>
The end date of the reporting period.

**content**: `str`<br/>
The content of the management discussion and analysis.

</TabItem>
<TabItem value='sec' label='sec'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**calendar_year**: `int`<br/>
The calendar year of the report.

**calendar_period**: `int`<br/>
The calendar period of the report.

**period_ending**: `date | None`<br/>
The end date of the reporting period.

**content**: `str`<br/>
The content of the management discussion and analysis.

**url**: `str`<br/>
The URL of the filing from which the data was extracted.

</TabItem>
</Tabs>

