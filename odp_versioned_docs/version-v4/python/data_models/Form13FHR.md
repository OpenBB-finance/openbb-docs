---
title: "Form 13FHR"
description: "Get the form 13F"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `Form13FHR` | `Form13FHRQueryParams` | `Form13FHRData` |

### Import Statement

```python
from openbb_core.provider.standard_models.form_13FHR import (
Form13FHRData,
Form13FHRQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol to get data for. A CIK or Symbol can be used.

**date**: `date | None | str`<br/>
A specific date to get data for. The date represents the end of the reporting period. All form 13F-HR filings are based on the calendar year and are reported quarterly. If a date is not supplied, the most recent filing is returned. Submissions beginning 2013-06-30 are supported.

**limit**: `int | None`<br/>
*Default:* 1<br/>
The number of data entries to return. The number of previous filings to return. The date parameter takes priority over this parameter.

</TabItem>
<TabItem value='sec' label='sec'>

**symbol**: `str`<br/>
Symbol to get data for. A CIK or Symbol can be used.

**date**: `date | None | str`<br/>
A specific date to get data for. The date represents the end of the reporting period. All form 13F-HR filings are based on the calendar year and are reported quarterly. If a date is not supplied, the most recent filing is returned. Submissions beginning 2013-06-30 are supported.

**limit**: `int | None`<br/>
*Default:* 1<br/>
The number of data entries to return. The number of previous filings to return. The date parameter takes priority over this parameter.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**period_ending**: `date`<br/>
The end-of-quarter date of the filing.

**issuer**: `str`<br/>
The name of the issuer.

**cusip**: `str`<br/>
The CUSIP of the security.

**asset_class**: `str`<br/>
The title of the asset class for the security.

**security_type**: `Literal['SH', 'PRN'] | None`<br/>
Whether the principal amount represents the number of shares or the principal amount of such class. 'SH' for shares. 'PRN' for principal amount. Convertible debt securities are reported as 'PRN'.

**option_type**: `Literal['call', 'put'] | None`<br/>
Defined when the holdings being reported are put or call options. Only long positions are reported.

**investment_discretion**: `str | None`<br/>
The investment discretion held by the Manager. Sole, shared-defined (DFN), or shared-other (OTR).

**voting_authority_sole**: `int | None`<br/>
The number of shares for which the Manager exercises sole voting authority.

**voting_authority_shared**: `int | None`<br/>
The number of shares for which the Manager exercises a defined shared voting authority.

**voting_authority_none**: `int | None`<br/>
The number of shares for which the Manager exercises no voting authority.

**principal_amount**: `int`<br/>
The total number of shares of the class of security or the principal amount of such class. Defined by the 'security_type'. Only long positions are reported

**value**: `int`<br/>
The fair market value of the holding of the particular class of security. The value reported for options is the fair market value of the underlying security with respect to the number of shares controlled. Values are rounded to the nearest US dollar and use the closing price of the last trading day of the calendar year or quarter.

</TabItem>
<TabItem value='sec' label='sec'>

**period_ending**: `date`<br/>
The end-of-quarter date of the filing.

**issuer**: `str`<br/>
The name of the issuer.

**cusip**: `str`<br/>
The CUSIP of the security.

**asset_class**: `str`<br/>
The title of the asset class for the security.

**security_type**: `Literal['SH', 'PRN'] | None`<br/>
Whether the principal amount represents the number of shares or the principal amount of such class. 'SH' for shares. 'PRN' for principal amount. Convertible debt securities are reported as 'PRN'.

**option_type**: `Literal['call', 'put'] | None`<br/>
Defined when the holdings being reported are put or call options. Only long positions are reported.

**investment_discretion**: `str | None`<br/>
The investment discretion held by the Manager. Sole, shared-defined (DFN), or shared-other (OTR).

**voting_authority_sole**: `int | None`<br/>
The number of shares for which the Manager exercises sole voting authority.

**voting_authority_shared**: `int | None`<br/>
The number of shares for which the Manager exercises a defined shared voting authority.

**voting_authority_none**: `int | None`<br/>
The number of shares for which the Manager exercises no voting authority.

**principal_amount**: `int`<br/>
The total number of shares of the class of security or the principal amount of such class. Defined by the 'security_type'. Only long positions are reported

**value**: `int`<br/>
The fair market value of the holding of the particular class of security. The value reported for options is the fair market value of the underlying security with respect to the number of shares controlled. Values are rounded to the nearest US dollar and use the closing price of the last trading day of the calendar year or quarter.

**weight**: `float`<br/>
The weight of the security relative to the market value of all securities in the filing , as a normalized percent.

</TabItem>
</Tabs>

