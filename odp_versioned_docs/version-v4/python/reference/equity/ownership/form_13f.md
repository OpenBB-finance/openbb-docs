---
title: "form_13f"
description: "Get the form 13F"
keywords:
- equity
- ownership
- form_13f
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/ownership/form_13f - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get the form 13F.

The Securities and Exchange Commission's (SEC) Form 13F is a quarterly report
that is required to be filed by all institutional investment managers with at least
$100 million in assets under management.
Managers are required to file Form 13F within 45 days after the last day of the calendar quarter.
Most funds wait until the end of this period in order to conceal
their investment strategy from competitors and the public.

Examples
--------

```python
from openbb import obb
obb.equity.ownership.form_13f(symbol='NVDA')
# Enter a date (calendar quarter ending) for a specific report.
obb.equity.ownership.form_13f(symbol='BRK-A', date='2016-09-30')
# Example finding Michael Burry's filings.
cik = obb.regulators.sec.institutions_search("Scion Asset Management").results[0].cik
# Use the `limit` parameter to return N number of reports from the most recent.
obb.equity.ownership.form_13f(cik, limit=2).to_df()
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

---

## Returns

**results**: `Form13FHR`

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

