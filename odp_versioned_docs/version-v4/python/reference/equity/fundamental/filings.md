---
title: "filings"
description: "Learn how to retrieve company filings data such as date, type of document,  and link. Understand the available parameters to filter the data, including symbol,  limit, provider, type, and page. Explore the different fields in the data, such  as ticker symbol, accepted date, and final link."
keywords:
- company filings
- data entries
- symbol
- limit
- provider
- type
- page
- cik
- date
- link
- ticker symbol
- accepted date
- final link
- report date
- act
- items
- primary doc description
- primary doc
- accession number
- file number
- film number
- is inline xbrl
- is xbrl
- size
- complete submission url
- filing detail url
- xml
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/fundamental/filings - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get public company filings.

Examples
--------

```python
from openbb import obb
obb.equity.fundamental.filings()
obb.equity.fundamental.filings(limit=100)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | None`<br/>
Symbol to get data for.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str | None`<br/>
Symbol to get data for.

**cik**: `str | None`<br/>
CIK number to look up. Overrides symbol.

**start_date**: `date | None | str`<br/>
Start date for filtering filings. Default is one year ago.

**end_date**: `date | None | str`<br/>
End date for filtering filings.

**limit**: `int | None`<br/>
*Default:* 1000<br/>
Number of results to return. Max results is 1000.

**page**: `int | None`<br/>
*Default:* 0<br/>
Page number for paginated results. Max page is 100.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str | None`<br/>
Symbol to get data for.

**form_type**: `str | None`<br/>
SEC form type to filter by.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**limit**: `int | None`<br/>
The number of data entries to return.

**thea_enabled**: `bool | None`<br/>
Return filings that have been read by Intrinio's Thea NLP.

</TabItem>
<TabItem value='nasdaq' label='nasdaq'>

**symbol**: `str | None`<br/>
Symbol to get data for.

**year**: `int | None`<br/>
Calendar year of the data, default is current year. The earliest year available is 1994, for all companies and form types.

**form_group**: `Literal['annual', 'quarterly', 'proxy', 'insider', '8k', 'registration', 'comment'] | None`<br/>
*Default:* 8k<br/>
The form group to fetch, default is 8k.

</TabItem>
<TabItem value='sec' label='sec'>

**symbol**: `str | None`<br/>
Symbol to get data for.

**cik**: `str | int | None`<br/>
Lookup filings by Central Index Key (CIK) instead of by symbol.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**form_type**: `str | None`<br/>
SEC form type to filter by.

**limit**: `int | None`<br/>
The number of data entries to return.

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
Whether or not to use cache.  If True, cache will store for one day.

</TabItem>
<TabItem value='tmx' label='tmx'>

**symbol**: `str | None`<br/>
Symbol to get data for.

**start_date**: `date | None | str`<br/>
The start date to fetch.

**end_date**: `date | None | str`<br/>
The end date to fetch.

</TabItem>
</Tabs>

---

## Returns

**results**: `CompanyFilings`

Serializable results.

**provider**: `Optional[Literal['fmp', 'intrinio', 'nasdaq', 'sec', 'tmx']]`

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

**report_type**: `str | None`<br/>
Type of filing.

**report_url**: `str`<br/>
URL to the actual report.

</TabItem>
<TabItem value='fmp' label='fmp'>

**filing_date**: `date`<br/>
The date of the filing.

**report_type**: `str | None`<br/>
Type of filing.

**report_url**: `str`<br/>
URL to the actual report.

**filing_url**: `str | None`<br/>
URL to the filing page.

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**cik**: `str | None`<br/>
Central Index Key (CIK) for the requested entity.

**accepted_date**: `date | None`<br/>
Accepted date of the filing.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**filing_date**: `date`<br/>
The date of the filing.

**report_type**: `str | None`<br/>
Type of filing.

**report_url**: `str`<br/>
URL to the actual report.

**id**: `str`<br/>
Intrinio ID of the filing.

**period_end_date**: `date | None`<br/>
Ending date of the fiscal period for the filing.

**accepted_date**: `datetime | None`<br/>
Accepted date of the filing.

**sec_unique_id**: `str`<br/>
SEC unique ID of the filing.

**filing_url**: `str | None`<br/>
URL to the filing page.

**instance_url**: `str | None`<br/>
URL for the XBRL filing for the report.

**industry_group**: `str`<br/>
Industry group of the company.

**industry_category**: `str`<br/>
Industry category of the company.

**word_count**: `int | None`<br/>
Number of words in the filing, if available.

</TabItem>
<TabItem value='nasdaq' label='nasdaq'>

**filing_date**: `date`<br/>
The date of the filing.

**report_type**: `str | None`<br/>
Type of filing.

**report_url**: `str`<br/>
URL to the actual report.

**period_ending**: `date | None`<br/>
The ending date for the reporting period, if available.

**name**: `str | None`<br/>
The name of the company, if available.

**reporting_owner**: `str | None`<br/>
The name of the reporting owner, if applicable.

**pdf_url**: `str | None`<br/>
The URL to the PDF document, if available.

**xls_url**: `str | None`<br/>
The URL to the XLS document, if available.

**xbr_url**: `str | None`<br/>
The URL to the XBR document, if available.

**doc_link**: `str | None`<br/>
The URL to the DOC document, if available.

</TabItem>
<TabItem value='sec' label='sec'>

**filing_date**: `date`<br/>
The date of the filing.

**report_type**: `str | None`<br/>
Type of filing.

**report_url**: `str`<br/>
URL to the actual report.

**report_date**: `date | None`<br/>
The date of the filing.

**act**: `str | int | None`<br/>
The SEC Act number.

**items**: `str | float | None`<br/>
The SEC Item numbers.

**primary_doc_description**: `str | None`<br/>
The description of the primary document.

**primary_doc**: `str | None`<br/>
The filename of the primary document.

**accession_number**: `str | int | None`<br/>
The accession number.

**file_number**: `str | int | None`<br/>
The file number.

**film_number**: `str | int | None`<br/>
The film number.

**is_inline_xbrl**: `str | int | None`<br/>
Whether the filing is an inline XBRL filing.

**is_xbrl**: `str | int | None`<br/>
Whether the filing is an XBRL filing.

**size**: `str | int | None`<br/>
The size of the filing.

**complete_submission_url**: `str | None`<br/>
The URL to the complete filing submission.

**filing_detail_url**: `str | None`<br/>
The URL to the filing details.

</TabItem>
<TabItem value='tmx' label='tmx'>

**filing_date**: `date`<br/>
The date of the filing.

**report_type**: `str | None`<br/>
Type of filing.

**report_url**: `str`<br/>
URL to the actual report.

**description**: `str`<br/>
The description of the filing.

**size**: `str | None`<br/>
The file size of the PDF document.

</TabItem>
</Tabs>

