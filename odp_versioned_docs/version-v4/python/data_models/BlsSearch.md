---
title: "Bls Search"
description: "Search BLS surveys by category and keyword or phrase to identify BLS series IDs"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `BlsSearch` | `BlsSearchQueryParams` | `BlsSearchData` |

### Import Statement

```python
from openbb_core.provider.standard_models. import (
BlsSearchData,
BlsSearchQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**query**: `str | None`<br/>
The search word(s). Use semi-colon to separate multiple queries as an & operator.

</TabItem>
<TabItem value='bls' label='bls'>

**query**: `str | None`<br/>
The search word(s). Use semi-colon to separate multiple queries as an & operator.

**category**: `Literal['cpi', 'pce', 'ppi', 'ip', 'jolts', 'nfp', 'cps', 'lfs', 'wages', 'ec', 'sla', 'bed', 'tu']`<br/>
<details>
<summary mdxType="summary">Description</summary>

The category of BLS survey to search within.<br/>
        An empty search query will return all series within the category. Options are:<br/>
        <br/>
    cpi - Consumer Price Index<br/>
        <br/>
    pce - Personal Consumption Expenditure<br/>
        <br/>
    ppi - Producer Price Index<br/>
        <br/>
    ip - Industry Productivity<br/>
        <br/>
    jolts - Job Openings and Labor Turnover Survey<br/>
        <br/>
    nfp - Nonfarm Payrolls<br/>
        <br/>
    cps - Current Population Survey<br/>
        <br/>
    lfs - Labor Force Statistics<br/>
        <br/>
    wages - Wages<br/>
        <br/>
    ec - Employer Costs<br/>
        <br/>
    sla - State and Local Area Employment<br/>
        <br/>
    bed - Business Employment Dynamics<br/>
        <br/>
    tu - Time Use<br/>
</details>

**include_extras**: `bool | None`<br/>
*Default:* False<br/>
Include additional information in the search results. Extra fields returned are metadata and vary by survey. Fields are undefined strings that typically have names ending with '_code'.

**include_code_map**: `bool | None`<br/>
*Default:* False<br/>
When True, includes the complete code map for eaçh survey in the category, returned separately as a nested JSON to the `extras['results_metadata']` property of the response. Example content is the NAICS industry map for PPI surveys. Each code is a value within the 'symbol' of the time series.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**title**: `str | None`<br/>
The title of the series.

**survey_name**: `str | None`<br/>
The name of the survey.

</TabItem>
<TabItem value='bls' label='bls'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**title**: `str | None`<br/>
The title of the series.

**survey_name**: `str | None`<br/>
The name of the survey.

</TabItem>
</Tabs>

