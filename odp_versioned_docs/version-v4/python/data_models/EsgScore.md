---
title: "Esg Score"
description: "Get ESG (Environmental, Social, and Governance) scores from company disclosures"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `EsgScore` | `EsgScoreQueryParams` | `EsgScoreData` |

### Import Statement

```python
from openbb_core.provider.standard_models.esg_score import (
EsgScoreData,
EsgScoreQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**period_ending**: `date`<br/>
Period ending date of the report.

**disclosure_date**: `date | datetime | None`<br/>
Date when the report was submitted.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**cik**: `str | None`<br/>
Central Index Key (CIK) for the requested entity.

**company_name**: `str | None`<br/>
Company name of the company.

**form_type**: `str | None`<br/>
Form type where the disclosure was made.

**environmental_score**: `float`<br/>
Environmental score of the company.

**social_score**: `float`<br/>
Social score of the company.

**governance_score**: `float`<br/>
Governance score of the company.

**esg_score**: `float`<br/>
ESG score of the company.

**url**: `str | None`<br/>
URL to the report or filing.

</TabItem>
<TabItem value='fmp' label='fmp'>

**period_ending**: `date`<br/>
Period ending date of the report.

**disclosure_date**: `date | datetime | None`<br/>
Date when the report was submitted.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**cik**: `str | None`<br/>
Central Index Key (CIK) for the requested entity.

**company_name**: `str | None`<br/>
Company name of the company.

**form_type**: `str | None`<br/>
Form type where the disclosure was made.

**environmental_score**: `float`<br/>
Environmental score of the company.

**social_score**: `float`<br/>
Social score of the company.

**governance_score**: `float`<br/>
Governance score of the company.

**esg_score**: `float`<br/>
ESG score of the company.

**url**: `str | None`<br/>
URL to the report or filing.

</TabItem>
</Tabs>

