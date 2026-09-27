---
title: "Discovery Filings"
description: "Get the URLs to SEC filings reported to EDGAR database, such as 10-K, 10-Q, 8-K, and more"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `DiscoveryFilings` | `DiscoveryFilingsQueryParams` | `DiscoveryFilingsData` |

### Import Statement

```python
from openbb_core.provider.standard_models.discovery_filings import (
DiscoveryFilingsData,
DiscoveryFilingsQueryParams,
)
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

