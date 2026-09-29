---
title: "filings"
description: "Get the most-recent filings submitted to the SEC"
keywords:
- equity
- discovery
- filings
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/discovery/filings - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get the URLs to SEC filings reported to EDGAR database, such as 10-K, 10-Q, 8-K, and more.

SEC filings include Form 10-K, Form 10-Q, Form 8-K, the proxy statement, Forms 3, 4, and 5, Schedule 13, Form 114,
Foreign Investment Disclosures and others. The annual 10-K report is required to be
filed annually and includes the company's financial statements, management discussion and analysis,
and audited financial statements.

Examples
--------

```python
from openbb import obb
obb.equity.discovery.filings()
# Get filings for the year 2023, limited to 100 results
obb.equity.discovery.filings(start_date='2023-01-01', end_date='2023-12-31', limit=100)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**form_type**: `str | None`<br/>
Filter by form type. Visit https://www.sec.gov/forms for a list of supported form types.

**limit**: `int | None`<br/>
The number of data entries to return.

</TabItem>
<TabItem value='fmp' label='fmp'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**form_type**: `str | None`<br/>
Filter by form type. Visit https://www.sec.gov/forms for a list of supported form types.

**limit**: `int | None`<br/>
The maximum number of results to return. Default is 10000.

</TabItem>
</Tabs>

---

## Returns

**results**: `DiscoveryFilings`

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

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**cik**: `str`<br/>
Central Index Key (CIK) for the requested entity.

**filing_date**: `date`<br/>
The date of the data.

**accepted_date**: `datetime`<br/>
**form_type**: `str`<br/>
The form type of the filing

**link**: `str`<br/>
URL to the filing page on the SEC site.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**cik**: `str`<br/>
Central Index Key (CIK) for the requested entity.

**filing_date**: `date`<br/>
The date of the data.

**accepted_date**: `datetime`<br/>
**form_type**: `str`<br/>
The form type of the filing

**link**: `str`<br/>
URL to the filing page on the SEC site.

**final_link**: `str`<br/>
Direct URL to the main document of the filing.

</TabItem>
</Tabs>

