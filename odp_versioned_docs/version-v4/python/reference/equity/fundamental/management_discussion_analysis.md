---
title: "management_discussion_analysis"
description: "Get the Management Discussion & Analysis section from the financial statements for a given company"
keywords:
- equity
- fundamental
- management_discussion_analysis
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/fundamental/management_discussion_analysis - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get the Management Discussion & Analysis section from the financial statements for a given company.

Examples
--------

```python
from openbb import obb
obb.equity.fundamental.management_discussion_analysis(symbol='AAPL')
# Get the Management Discussion & Analysis section by calendar year and period.
obb.equity.fundamental.management_discussion_analysis(symbol='AAPL', calendar_year=2020, calendar_period='Q4')
# Setting 'include_tables' to True will attempt to extract all tables in valid Markdown.
obb.equity.fundamental.management_discussion_analysis(symbol='AAPL', calendar_year=2020, calendar_period='Q4', include_tables=True)
# Setting 'raw_html' to True will bypass extraction and return the raw HTML file, as is. Use this for custom parsing or to access the entire HTML filing.
obb.equity.fundamental.management_discussion_analysis(symbol='AAPL', calendar_year=2020, calendar_period='Q4', raw_html=True)
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

---

## Returns

**results**: `ManagementDiscussionAnalysis`

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

