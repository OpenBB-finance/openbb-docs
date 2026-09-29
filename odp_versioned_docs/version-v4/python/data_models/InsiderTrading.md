---
title: "Insider Trading"
description: "Get data about trading by a company's management team and board of directors"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `InsiderTrading` | `InsiderTradingQueryParams` | `InsiderTradingData` |

### Import Statement

```python
from openbb_core.provider.standard_models.insider_trading import (
InsiderTradingData,
InsiderTradingQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol to get data for.

**limit**: `int | None`<br/>
The number of data entries to return.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str`<br/>
Symbol to get data for.

**limit**: `int | None`<br/>
The number of data entries to return.

**transaction_type**: `Literal['award', 'conversion', 'return', 'expire_short', 'in_kind', 'gift', 'expire_long', 'discretionary', 'other', 'small', 'exempt', 'otm', 'purchase', 'sale', 'tender', 'will', 'itm', 'trust'] | None`<br/>
Type of the transaction.

**statistics**: `bool | None`<br/>
*Default:* False<br/>
Flag to return summary statistics for the given symbol. Setting as True will ignore other parameters except symbol.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str`<br/>
Symbol to get data for.

**limit**: `int | None`<br/>
The number of data entries to return.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**ownership_type**: `Literal['D', 'I'] | None`<br/>
Type of ownership.

**sort_by**: `Literal['filing_date', 'updated_on'] | None`<br/>
*Default:* updated_on<br/>
Field to sort by.

</TabItem>
<TabItem value='sec' label='sec'>

**symbol**: `str`<br/>
Symbol to get data for.

**limit**: `int | None`<br/>
The number of data entries to return.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format. Wide date ranges can result in long download times. Recommended to use a smaller date range, default is 120 days ago.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format. Default is today.

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
Persist the data locally for future use. Default is True. Each form submission is an individual download and the SEC limits the number of concurrent downloads. This prevents the same file from being downloaded multiple times.

</TabItem>
<TabItem value='tmx' label='tmx'>

**symbol**: `str`<br/>
Symbol to get data for.

**limit**: `int | None`<br/>
The number of data entries to return.

**summary**: `bool | None`<br/>
*Default:* False<br/>
Return a summary of the insider activity instead of the individuals.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**company_cik**: `str | None`<br/>
CIK number of the company.

**filing_date**: `date | datetime | None`<br/>
Filing date of the trade.

**transaction_date**: `date | None`<br/>
Date of the transaction.

**owner_cik**: `int | str | None`<br/>
Reporting individual's CIK.

**owner_name**: `str | None`<br/>
Name of the reporting individual.

**owner_title**: `str | None`<br/>
The title held by the reporting individual.

**ownership_type**: `str | None`<br/>
Type of ownership, e.g., direct or indirect.

**transaction_type**: `str | None`<br/>
Type of transaction being reported.

**acquisition_or_disposition**: `str | None`<br/>
Acquisition or disposition of the shares.

**security_type**: `str | None`<br/>
The type of security transacted.

**securities_owned**: `float | None`<br/>
Number of securities owned by the reporting individual.

**securities_transacted**: `float | None`<br/>
Number of securities transacted by the reporting individual.

**transaction_price**: `float | None`<br/>
The price of the transaction.

**filing_url**: `str | None`<br/>
Link to the filing.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**company_cik**: `str | None`<br/>
CIK number of the company.

**filing_date**: `date | datetime | None`<br/>
Filing date of the trade.

**transaction_date**: `date | None`<br/>
Date of the transaction.

**owner_cik**: `int | str | None`<br/>
Reporting individual's CIK.

**owner_name**: `str | None`<br/>
Name of the reporting individual.

**owner_title**: `str | None`<br/>
The title held by the reporting individual.

**ownership_type**: `str | None`<br/>
Type of ownership, e.g., direct or indirect.

**transaction_type**: `str | None`<br/>
Type of transaction being reported.

**acquisition_or_disposition**: `str | None`<br/>
Acquisition or disposition of the shares.

**security_type**: `str | None`<br/>
The type of security transacted.

**securities_owned**: `float | None`<br/>
Number of securities owned by the reporting individual.

**securities_transacted**: `float | None`<br/>
Number of securities transacted by the reporting individual.

**transaction_price**: `float | None`<br/>
The price of the transaction.

**filing_url**: `str | None`<br/>
Link to the filing.

**form_type**: `str | None`<br/>
The SEC form type.

**year**: `int | None`<br/>
The calendar year for the statistics.

**quarter**: `int | None`<br/>
The calendar quarter for the statistics.

**acquired_transactions**: `int | None`<br/>
Number of acquired transactions (statistics only).

**disposed_transactions**: `int | None`<br/>
Number of disposed transactions (statistics only).

**transactions_ratio**: `float | None`<br/>
Ratio of acquired to disposed transactions (statistics only).

**total_acquired**: `int | float | None`<br/>
Total number of shares acquired (statistics only).

**total_disposed**: `int | float | None`<br/>
Total number of shares disposed (statistics only).

**average_acquired**: `float | None`<br/>
Average number of shares acquired per transaction (statistics only).

**average_disposed**: `float | None`<br/>
Average number of shares disposed per transaction (statistics only).

**total_purchases**: `int | None`<br/>
Total number of purchase transactions (statistics only).

**total_sales**: `int | None`<br/>
Total number of sale transactions (statistics only).

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**company_cik**: `str | None`<br/>
CIK number of the company.

**filing_date**: `date | datetime | None`<br/>
Filing date of the trade.

**transaction_date**: `date | None`<br/>
Date of the transaction.

**owner_cik**: `int | str | None`<br/>
Reporting individual's CIK.

**owner_name**: `str | None`<br/>
Name of the reporting individual.

**owner_title**: `str | None`<br/>
The title held by the reporting individual.

**ownership_type**: `str | None`<br/>
Type of ownership, e.g., direct or indirect.

**transaction_type**: `str | None`<br/>
Type of transaction being reported.

**acquisition_or_disposition**: `str | None`<br/>
Acquisition or disposition of the shares.

**security_type**: `str | None`<br/>
The type of security transacted.

**securities_owned**: `float | None`<br/>
Number of securities owned by the reporting individual.

**securities_transacted**: `float | None`<br/>
Number of securities transacted by the reporting individual.

**transaction_price**: `float | None`<br/>
The price of the transaction.

**filing_url**: `str | None`<br/>
URL of the filing.

**company_name**: `str`<br/>
Name of the company.

**conversion_exercise_price**: `float | None`<br/>
Conversion/Exercise price of the shares.

**deemed_execution_date**: `date | None`<br/>
Deemed execution date of the trade.

**exercise_date**: `date | None`<br/>
Exercise date of the trade.

**expiration_date**: `date | None`<br/>
Expiration date of the derivative.

**underlying_security_title**: `str | None`<br/>
Name of the underlying non-derivative security related to this derivative transaction.

**underlying_shares**: `int | float | None`<br/>
Number of underlying shares related to this derivative transaction.

**nature_of_ownership**: `str | None`<br/>
Nature of ownership of the insider trading.

**director**: `bool | None`<br/>
Whether the owner is a director.

**officer**: `bool | None`<br/>
Whether the owner is an officer.

**ten_percent_owner**: `bool | None`<br/>
Whether the owner is a 10% owner.

**other_relation**: `bool | None`<br/>
Whether the owner is having another relation.

**derivative_transaction**: `bool | None`<br/>
Whether the owner is having a derivative transaction.

**report_line_number**: `int | None`<br/>
Report line number of the insider trading.

</TabItem>
<TabItem value='sec' label='sec'>

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**company_cik**: `str | None`<br/>
CIK number of the company.

**filing_date**: `date | datetime | None`<br/>
Filing date of the trade.

**transaction_date**: `date | None`<br/>
Date of the transaction.

**owner_cik**: `int | str | None`<br/>
Reporting individual's CIK.

**owner_name**: `str | None`<br/>
Name of the reporting individual.

**owner_title**: `str | None`<br/>
The title held by the reporting individual.

**ownership_type**: `str | None`<br/>
Type of ownership, direct or indirect.

**transaction_type**: `str | None`<br/>
Type of transaction being reported.

**acquisition_or_disposition**: `str | None`<br/>
Acquisition or disposition of the shares.

**security_type**: `str | None`<br/>
The type of security transacted.

**securities_owned**: `float | None`<br/>
Number of securities owned by the reporting individual.

**securities_transacted**: `float | None`<br/>
Number of securities transacted by the reporting individual.

**transaction_price**: `float | None`<br/>
The price of the transaction.

**filing_url**: `str | None`<br/>
Link to the filing.

**company_name**: `str | None`<br/>
Name of the company.

**form**: `str | int | None`<br/>
Form type.

**director**: `bool | None`<br/>
Whether the owner is a director.

**officer**: `bool | None`<br/>
Whether the owner is an officer.

**ten_percent_owner**: `bool | None`<br/>
Whether the owner is a 10% owner.

**other**: `bool | None`<br/>
Whether the owner is classified as other.

**other_text**: `str | None`<br/>
Text for other classification.

**transaction_timeliness**: `str | None`<br/>
Timeliness of the transaction.

**nature_of_ownership**: `str | None`<br/>
Nature of the ownership.

**exercise_date**: `date | None`<br/>
Date of exercise.

**expiration_date**: `date | None`<br/>
Date of expiration for the derivative.

**deemed_execution_date**: `date | None`<br/>
Deemed execution date.

**underlying_security_title**: `str | None`<br/>
Title of the underlying security.

**underlying_security_shares**: `float | None`<br/>
Number of underlying shares associated with the derivative.

**underlying_security_value**: `float | None`<br/>
Value of the underlying security.

**conversion_exercise_price**: `float | None`<br/>
Price of conversion or exercise of the securities.

**transaction_value**: `float | None`<br/>
Total value of the transaction.

**value_owned**: `float | None`<br/>
Value of the securities owned after the transaction.

**footnote**: `str | None`<br/>
Footnote for the transaction.

</TabItem>
<TabItem value='tmx' label='tmx'>

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**company_cik**: `str | None`<br/>
CIK number of the company.

**filing_date**: `date | datetime | None`<br/>
Filing date of the trade.

**transaction_date**: `date | None`<br/>
Date of the transaction.

**owner_cik**: `int | str | None`<br/>
Reporting individual's CIK.

**owner_name**: `str | None`<br/>
The name of the insider.

**owner_title**: `str | None`<br/>
The title held by the reporting individual.

**ownership_type**: `str | None`<br/>
Type of ownership, e.g., direct or indirect.

**transaction_type**: `str | None`<br/>
Type of transaction being reported.

**acquisition_or_disposition**: `str | None`<br/>
Acquisition or disposition of the shares.

**security_type**: `str | None`<br/>
The type of security transacted.

**securities_owned**: `int | None`<br/>
The number of shares held by the insider.

**securities_transacted**: `int | None`<br/>
The total number of shares traded by the insider over the period.

**transaction_price**: `float | None`<br/>
The price of the transaction.

**filing_url**: `str | None`<br/>
Link to the filing.

**period**: `str`<br/>
The period of the activity. Bucketed by three, six, and twelve months.

**acquisition_or_deposition**: `str | None`<br/>
Whether the insider bought or sold the shares.

**number_of_trades**: `int | None`<br/>
The number of shares traded over the period.

**trade_value**: `float | None`<br/>
The value of the shares traded by the insider.

**securities_bought**: `int | None`<br/>
The total number of shares bought by all insiders over the period.

**securities_sold**: `int | None`<br/>
The total number of shares sold by all insiders over the period.

**net_activity**: `int | None`<br/>
The total net activity by all insiders over the period.

</TabItem>
</Tabs>

