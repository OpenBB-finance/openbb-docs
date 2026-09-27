---
title: "Sec Filing"
description: "Download the index headers, and cover page if available, for any SEC filing"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `SecFiling` | `SecFilingQueryParams` | `SecFilingData` |

### Import Statement

```python
from openbb_core.provider.standard_models. import (
SecFilingData,
SecFilingQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='sec' label='sec'>

**url**: `str | None`<br/>
URL for the SEC filing. The specific URL is not directly used or downloaded, but is used to generate the base URL for the filing. e.g. https://www.sec.gov/Archives/edgar/data/317540/000031754024000045/coke-20240731.htm and https://www.sec.gov/Archives/edgar/data/317540/000031754024000045/ are both valid URLs for the same filing.

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
Use cache for the index headers and cover page. Default is True.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='sec' label='sec'>

**base_url**: `str`<br/>
Base URL of the filing.

**name**: `str`<br/>
Name of the entity filing.

**cik**: `str`<br/>
Central Index Key.

**trading_symbols**: `list | None`<br/>
Trading symbols, if available.

**sic**: `str`<br/>
Standard Industrial Classification.

**sic_organization_name**: `str`<br/>
SIC Organization Name.

**filing_date**: `date`<br/>
Filing date.

**period_ending**: `date | None`<br/>
Date of the ending period for the filing, if available.

**fiscal_year_end**: `str | None`<br/>
Fiscal year end of the entity, if available. Format: MM-DD

**document_type**: `str`<br/>
Specific SEC filing type.

**has_cover_page**: `bool`<br/>
True if the filing has a cover page.

**description**: `str | None`<br/>
Description of attached content, mostly applicable to 8-K filings.

**cover_page**: `dict | None`<br/>
Cover page information, if available.

**document_urls**: `list`<br/>
list of files associated with the filing.

</TabItem>
</Tabs>

