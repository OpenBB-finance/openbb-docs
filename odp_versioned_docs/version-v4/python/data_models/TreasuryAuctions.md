---
title: "Treasury Auctions"
description: "Government Treasury Auctions"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `TreasuryAuctions` | `TreasuryAuctionsQueryParams` | `TreasuryAuctionsData` |

### Import Statement

```python
from openbb_core.provider.standard_models. import (
TreasuryAuctionsData,
TreasuryAuctionsQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**security_type**: `Literal['bill', 'note', 'bond', 'cmb', 'tips', 'frn'] | None`<br/>
Used to only return securities of a particular type.

**cusip**: `str | None`<br/>
Filter securities by CUSIP.

**page_size**: `int | None`<br/>
Maximum number of results to return; you must also include pagenum when using pagesize.

**page_num**: `int | None`<br/>
The first page number to display results for; used in combination with page size.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format. The default is 90 days ago.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format. The default is today.

</TabItem>
<TabItem value='government_us' label='government_us'>

**security_type**: `Literal['bill', 'note', 'bond', 'cmb', 'tips', 'frn'] | None`<br/>
Used to only return securities of a particular type.

**cusip**: `str | None`<br/>
Filter securities by CUSIP.

**page_size**: `int | None`<br/>
Maximum number of results to return; you must also include pagenum when using pagesize.

**page_num**: `int | None`<br/>
The first page number to display results for; used in combination with page size.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format. The default is 90 days ago.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format. The default is today.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**cusip**: `str`<br/>
CUSIP of the Security.

**issue_date**: `date`<br/>
The issue date of the security.

**security_type**: `Literal['Bill', 'Note', 'Bond', 'CMB', 'TIPS', 'FRN']`<br/>
The type of security.

**security_term**: `str`<br/>
The term of the security.

**maturity_date**: `date`<br/>
The maturity date of the security.

**interest_rate**: `float | None`<br/>
The interest rate of the security.

**cpi_on_issue_date**: `float | None`<br/>
Reference CPI rate on the issue date of the security.

**cpi_on_dated_date**: `float | None`<br/>
Reference CPI rate on the dated date of the security.

**announcement_date**: `date | None`<br/>
The announcement date of the security.

**auction_date**: `date | None`<br/>
The auction date of the security.

**auction_date_year**: `int | None`<br/>
The auction date year of the security.

**dated_date**: `date | None`<br/>
The dated date of the security.

**first_payment_date**: `date | None`<br/>
The first payment date of the security.

**accrued_interest_per_100**: `float | None`<br/>
Accrued interest per $100.

**accrued_interest_per_1000**: `float | None`<br/>
Accrued interest per $1000.

**adjusted_accrued_interest_per_100**: `float | None`<br/>
Adjusted accrued interest per $100.

**adjusted_accrued_interest_per_1000**: `float | None`<br/>
Adjusted accrued interest per $1000.

**adjusted_price**: `float | None`<br/>
Adjusted price.

**allocation_percentage**: `float | None`<br/>
Allocation percentage, as normalized percentage points.

**allocation_percentage_decimals**: `float | None`<br/>
The number of decimals in the Allocation percentage.

**announced_cusip**: `str | None`<br/>
The announced CUSIP of the security.

**auction_format**: `str | None`<br/>
The auction format of the security.

**avg_median_discount_rate**: `float | None`<br/>
The average median discount rate of the security.

**avg_median_investment_rate**: `float | None`<br/>
The average median investment rate of the security.

**avg_median_price**: `float | None`<br/>
The average median price paid for the security.

**avg_median_discount_margin**: `float | None`<br/>
The average median discount margin of the security.

**avg_median_yield**: `float | None`<br/>
The average median yield of the security.

**back_dated**: `Literal['Yes', 'No'] | None`<br/>
Whether the security is back dated.

**back_dated_date**: `date | None`<br/>
The back dated date of the security.

**bid_to_cover_ratio**: `float | None`<br/>
The bid to cover ratio of the security.

**call_date**: `date | None`<br/>
The call date of the security.

**callable**: `Literal['Yes', 'No'] | None`<br/>
Whether the security is callable.

**called_date**: `date | None`<br/>
The called date of the security.

**cash_management_bill**: `Literal['Yes', 'No'] | None`<br/>
Whether the security is a cash management bill.

**closing_time_competitive**: `str | None`<br/>
The closing time for competitive bids on the security.

**closing_time_non_competitive**: `str | None`<br/>
The closing time for non-competitive bids on the security.

**competitive_accepted**: `int | None`<br/>
The accepted value for competitive bids on the security.

**competitive_accepted_decimals**: `int | None`<br/>
The number of decimals in the Competitive Accepted.

**competitive_tendered**: `int | None`<br/>
The tendered value for competitive bids on the security.

**competitive_tenders_accepted**: `Literal['Yes', 'No'] | None`<br/>
Whether competitive tenders are accepted on the security.

**corp_us_cusip**: `str | None`<br/>
The CUSIP of the security.

**cpi_base_reference_period**: `str | None`<br/>
The CPI base reference period of the security.

**currently_outstanding**: `int | None`<br/>
The currently outstanding value on the security.

**direct_bidder_accepted**: `int | None`<br/>
The accepted value from direct bidders on the security.

**direct_bidder_tendered**: `int | None`<br/>
The tendered value from direct bidders on the security.

**est_amount_of_publicly_held_maturing_security**: `int | None`<br/>
The estimated amount of publicly held maturing securities on the security.

**fima_included**: `Literal['Yes', 'No'] | None`<br/>
Whether the security is included in the FIMA (Foreign and International Money Authorities).

**fima_non_competitive_accepted**: `int | None`<br/>
The non-competitive accepted value on the security from FIMAs.

**fima_non_competitive_tendered**: `int | None`<br/>
The non-competitive tendered value on the security from FIMAs.

**first_interest_period**: `str | None`<br/>
The first interest period of the security.

**first_interest_payment_date**: `date | None`<br/>
The first interest payment date of the security.

**floating_rate**: `Literal['Yes', 'No'] | None`<br/>
Whether the security is a floating rate.

**frn_index_determination_date**: `date | None`<br/>
The FRN index determination date of the security.

**frn_index_determination_rate**: `float | None`<br/>
The FRN index determination rate of the security.

**high_discount_rate**: `float | None`<br/>
The high discount rate of the security.

**high_investment_rate**: `float | None`<br/>
The high investment rate of the security.

**high_price**: `float | None`<br/>
The high price of the security at auction.

**high_discount_margin**: `float | None`<br/>
The high discount margin of the security.

**high_yield**: `float | None`<br/>
The high yield of the security at auction.

**index_ratio_on_issue_date**: `float | None`<br/>
The index ratio on the issue date of the security.

**indirect_bidder_accepted**: `int | None`<br/>
The accepted value from indirect bidders on the security.

**indirect_bidder_tendered**: `int | None`<br/>
The tendered value from indirect bidders on the security.

**interest_payment_frequency**: `str | None`<br/>
The interest payment frequency of the security.

**low_discount_rate**: `float | None`<br/>
The low discount rate of the security.

**low_investment_rate**: `float | None`<br/>
The low investment rate of the security.

**low_price**: `float | None`<br/>
The low price of the security at auction.

**low_discount_margin**: `float | None`<br/>
The low discount margin of the security.

**low_yield**: `float | None`<br/>
The low yield of the security at auction.

**maturing_date**: `date | None`<br/>
The maturing date of the security.

**max_competitive_award**: `int | None`<br/>
The maximum competitive award at auction.

**max_non_competitive_award**: `int | None`<br/>
The maximum non-competitive award at auction.

**max_single_bid**: `int | None`<br/>
The maximum single bid at auction.

**min_bid_amount**: `int | None`<br/>
The minimum bid amount at auction.

**min_strip_amount**: `int | None`<br/>
The minimum strip amount at auction.

**min_to_issue**: `int | None`<br/>
The minimum to issue at auction.

**multiples_to_bid**: `int | None`<br/>
The multiples to bid at auction.

**multiples_to_issue**: `int | None`<br/>
The multiples to issue at auction.

**nlp_exclusion_amount**: `int | None`<br/>
The NLP exclusion amount at auction.

**nlp_reporting_threshold**: `int | None`<br/>
The NLP reporting threshold at auction.

**non_competitive_accepted**: `int | None`<br/>
The accepted value from non-competitive bidders on the security.

**non_competitive_tenders_accepted**: `Literal['Yes', 'No'] | None`<br/>
Whether or not the auction accepted non-competitive tenders.

**offering_amount**: `int | None`<br/>
The offering amount at auction.

**original_cusip**: `str | None`<br/>
The original CUSIP of the security.

**original_dated_date**: `date | None`<br/>
The original dated date of the security.

**original_issue_date**: `date | None`<br/>
The original issue date of the security.

**original_security_term**: `str | None`<br/>
The original term of the security.

**pdf_announcement**: `str | None`<br/>
The PDF filename for the announcement of the security.

**pdf_competitive_results**: `str | None`<br/>
The PDF filename for the competitive results of the security.

**pdf_non_competitive_results**: `str | None`<br/>
The PDF filename for the non-competitive results of the security.

**pdf_special_announcement**: `str | None`<br/>
The PDF filename for the special announcements.

**price_per_100**: `float | None`<br/>
The price per 100 of the security.

**primary_dealer_accepted**: `int | None`<br/>
The primary dealer accepted value on the security.

**primary_dealer_tendered**: `int | None`<br/>
The primary dealer tendered value on the security.

**reopening**: `Literal['Yes', 'No'] | None`<br/>
Whether or not the auction was reopened.

**security_term_day_month**: `str | None`<br/>
The security term in days or months.

**security_term_week_year**: `str | None`<br/>
The security term in weeks or years.

**series**: `str | None`<br/>
The series name of the security.

**soma_accepted**: `int | None`<br/>
The SOMA accepted value on the security.

**soma_holdings**: `int | None`<br/>
The SOMA holdings on the security.

**soma_included**: `Literal['Yes', 'No'] | None`<br/>
Whether or not the SOMA (System Open Market Account) was included on the security.

**soma_tendered**: `int | None`<br/>
The SOMA tendered value on the security.

**spread**: `float | None`<br/>
The spread on the security.

**standard_payment_per_1000**: `float | None`<br/>
The standard payment per 1000 of the security.

**strippable**: `Literal['Yes', 'No'] | None`<br/>
Whether or not the security is strippable.

**term**: `str | None`<br/>
The term of the security.

**tiin_conversion_factor_per_1000**: `float | None`<br/>
The TIIN conversion factor per 1000 of the security.

**tips**: `Literal['Yes', 'No'] | None`<br/>
Whether or not the security is TIPS.

**total_accepted**: `int | None`<br/>
The total accepted value at auction.

**total_tendered**: `int | None`<br/>
The total tendered value at auction.

**treasury_retail_accepted**: `int | None`<br/>
The accepted value on the security from retail.

**treasury_retail_tenders_accepted**: `Literal['Yes', 'No'] | None`<br/>
Whether or not the tender offers from retail are accepted

**type**: `str | None`<br/>
The type of issuance.  This might be different than the security type.

**unadjusted_accrued_interest_per_1000**: `float | None`<br/>
The unadjusted accrued interest per 1000 of the security.

**unadjusted_price**: `float | None`<br/>
The unadjusted price of the security.

**updated_timestamp**: `datetime | None`<br/>
The updated timestamp of the security.

**xml_announcement**: `str | None`<br/>
The XML filename for the announcement of the security.

**xml_competitive_results**: `str | None`<br/>
The XML filename for the competitive results of the security.

**xml_special_announcement**: `str | None`<br/>
The XML filename for special announcements.

**tint_cusip1**: `str | None`<br/>
Tint CUSIP 1.

**tint_cusip2**: `str | None`<br/>
Tint CUSIP 2.

</TabItem>
<TabItem value='government_us' label='government_us'>

**cusip**: `str`<br/>
CUSIP of the Security.

**issue_date**: `date`<br/>
The issue date of the security.

**security_type**: `Literal['Bill', 'Note', 'Bond', 'CMB', 'TIPS', 'FRN']`<br/>
The type of security.

**security_term**: `str`<br/>
The term of the security.

**maturity_date**: `date`<br/>
The maturity date of the security.

**interest_rate**: `float | None`<br/>
The interest rate of the security.

**cpi_on_issue_date**: `float | None`<br/>
Reference CPI rate on the issue date of the security.

**cpi_on_dated_date**: `float | None`<br/>
Reference CPI rate on the dated date of the security.

**announcement_date**: `date | None`<br/>
The announcement date of the security.

**auction_date**: `date | None`<br/>
The auction date of the security.

**auction_date_year**: `int | None`<br/>
The auction date year of the security.

**dated_date**: `date | None`<br/>
The dated date of the security.

**first_payment_date**: `date | None`<br/>
The first payment date of the security.

**accrued_interest_per_100**: `float | None`<br/>
Accrued interest per $100.

**accrued_interest_per_1000**: `float | None`<br/>
Accrued interest per $1000.

**adjusted_accrued_interest_per_100**: `float | None`<br/>
Adjusted accrued interest per $100.

**adjusted_accrued_interest_per_1000**: `float | None`<br/>
Adjusted accrued interest per $1000.

**adjusted_price**: `float | None`<br/>
Adjusted price.

**allocation_percentage**: `float | None`<br/>
Allocation percentage, as normalized percentage points.

**allocation_percentage_decimals**: `float | None`<br/>
The number of decimals in the Allocation percentage.

**announced_cusip**: `str | None`<br/>
The announced CUSIP of the security.

**auction_format**: `str | None`<br/>
The auction format of the security.

**avg_median_discount_rate**: `float | None`<br/>
The average median discount rate of the security.

**avg_median_investment_rate**: `float | None`<br/>
The average median investment rate of the security.

**avg_median_price**: `float | None`<br/>
The average median price paid for the security.

**avg_median_discount_margin**: `float | None`<br/>
The average median discount margin of the security.

**avg_median_yield**: `float | None`<br/>
The average median yield of the security.

**back_dated**: `Literal['Yes', 'No'] | None`<br/>
Whether the security is back dated.

**back_dated_date**: `date | None`<br/>
The back dated date of the security.

**bid_to_cover_ratio**: `float | None`<br/>
The bid to cover ratio of the security.

**call_date**: `date | None`<br/>
The call date of the security.

**callable**: `Literal['Yes', 'No'] | None`<br/>
Whether the security is callable.

**called_date**: `date | None`<br/>
The called date of the security.

**cash_management_bill**: `Literal['Yes', 'No'] | None`<br/>
Whether the security is a cash management bill.

**closing_time_competitive**: `str | None`<br/>
The closing time for competitive bids on the security.

**closing_time_non_competitive**: `str | None`<br/>
The closing time for non-competitive bids on the security.

**competitive_accepted**: `int | None`<br/>
The accepted value for competitive bids on the security.

**competitive_accepted_decimals**: `int | None`<br/>
The number of decimals in the Competitive Accepted.

**competitive_tendered**: `int | None`<br/>
The tendered value for competitive bids on the security.

**competitive_tenders_accepted**: `Literal['Yes', 'No'] | None`<br/>
Whether competitive tenders are accepted on the security.

**corp_us_cusip**: `str | None`<br/>
The CUSIP of the security.

**cpi_base_reference_period**: `str | None`<br/>
The CPI base reference period of the security.

**currently_outstanding**: `int | None`<br/>
The currently outstanding value on the security.

**direct_bidder_accepted**: `int | None`<br/>
The accepted value from direct bidders on the security.

**direct_bidder_tendered**: `int | None`<br/>
The tendered value from direct bidders on the security.

**est_amount_of_publicly_held_maturing_security**: `int | None`<br/>
The estimated amount of publicly held maturing securities on the security.

**fima_included**: `Literal['Yes', 'No'] | None`<br/>
Whether the security is included in the FIMA (Foreign and International Money Authorities).

**fima_non_competitive_accepted**: `int | None`<br/>
The non-competitive accepted value on the security from FIMAs.

**fima_non_competitive_tendered**: `int | None`<br/>
The non-competitive tendered value on the security from FIMAs.

**first_interest_period**: `str | None`<br/>
The first interest period of the security.

**first_interest_payment_date**: `date | None`<br/>
The first interest payment date of the security.

**floating_rate**: `Literal['Yes', 'No'] | None`<br/>
Whether the security is a floating rate.

**frn_index_determination_date**: `date | None`<br/>
The FRN index determination date of the security.

**frn_index_determination_rate**: `float | None`<br/>
The FRN index determination rate of the security.

**high_discount_rate**: `float | None`<br/>
The high discount rate of the security.

**high_investment_rate**: `float | None`<br/>
The high investment rate of the security.

**high_price**: `float | None`<br/>
The high price of the security at auction.

**high_discount_margin**: `float | None`<br/>
The high discount margin of the security.

**high_yield**: `float | None`<br/>
The high yield of the security at auction.

**index_ratio_on_issue_date**: `float | None`<br/>
The index ratio on the issue date of the security.

**indirect_bidder_accepted**: `int | None`<br/>
The accepted value from indirect bidders on the security.

**indirect_bidder_tendered**: `int | None`<br/>
The tendered value from indirect bidders on the security.

**interest_payment_frequency**: `str | None`<br/>
The interest payment frequency of the security.

**low_discount_rate**: `float | None`<br/>
The low discount rate of the security.

**low_investment_rate**: `float | None`<br/>
The low investment rate of the security.

**low_price**: `float | None`<br/>
The low price of the security at auction.

**low_discount_margin**: `float | None`<br/>
The low discount margin of the security.

**low_yield**: `float | None`<br/>
The low yield of the security at auction.

**maturing_date**: `date | None`<br/>
The maturing date of the security.

**max_competitive_award**: `int | None`<br/>
The maximum competitive award at auction.

**max_non_competitive_award**: `int | None`<br/>
The maximum non-competitive award at auction.

**max_single_bid**: `int | None`<br/>
The maximum single bid at auction.

**min_bid_amount**: `int | None`<br/>
The minimum bid amount at auction.

**min_strip_amount**: `int | None`<br/>
The minimum strip amount at auction.

**min_to_issue**: `int | None`<br/>
The minimum to issue at auction.

**multiples_to_bid**: `int | None`<br/>
The multiples to bid at auction.

**multiples_to_issue**: `int | None`<br/>
The multiples to issue at auction.

**nlp_exclusion_amount**: `int | None`<br/>
The NLP exclusion amount at auction.

**nlp_reporting_threshold**: `int | None`<br/>
The NLP reporting threshold at auction.

**non_competitive_accepted**: `int | None`<br/>
The accepted value from non-competitive bidders on the security.

**non_competitive_tenders_accepted**: `Literal['Yes', 'No'] | None`<br/>
Whether or not the auction accepted non-competitive tenders.

**offering_amount**: `int | None`<br/>
The offering amount at auction.

**original_cusip**: `str | None`<br/>
The original CUSIP of the security.

**original_dated_date**: `date | None`<br/>
The original dated date of the security.

**original_issue_date**: `date | None`<br/>
The original issue date of the security.

**original_security_term**: `str | None`<br/>
The original term of the security.

**pdf_announcement**: `str | None`<br/>
The PDF filename for the announcement of the security.

**pdf_competitive_results**: `str | None`<br/>
The PDF filename for the competitive results of the security.

**pdf_non_competitive_results**: `str | None`<br/>
The PDF filename for the non-competitive results of the security.

**pdf_special_announcement**: `str | None`<br/>
The PDF filename for the special announcements.

**price_per_100**: `float | None`<br/>
The price per 100 of the security.

**primary_dealer_accepted**: `int | None`<br/>
The primary dealer accepted value on the security.

**primary_dealer_tendered**: `int | None`<br/>
The primary dealer tendered value on the security.

**reopening**: `Literal['Yes', 'No'] | None`<br/>
Whether or not the auction was reopened.

**security_term_day_month**: `str | None`<br/>
The security term in days or months.

**security_term_week_year**: `str | None`<br/>
The security term in weeks or years.

**series**: `str | None`<br/>
The series name of the security.

**soma_accepted**: `int | None`<br/>
The SOMA accepted value on the security.

**soma_holdings**: `int | None`<br/>
The SOMA holdings on the security.

**soma_included**: `Literal['Yes', 'No'] | None`<br/>
Whether or not the SOMA (System Open Market Account) was included on the security.

**soma_tendered**: `int | None`<br/>
The SOMA tendered value on the security.

**spread**: `float | None`<br/>
The spread on the security.

**standard_payment_per_1000**: `float | None`<br/>
The standard payment per 1000 of the security.

**strippable**: `Literal['Yes', 'No'] | None`<br/>
Whether or not the security is strippable.

**term**: `str | None`<br/>
The term of the security.

**tiin_conversion_factor_per_1000**: `float | None`<br/>
The TIIN conversion factor per 1000 of the security.

**tips**: `Literal['Yes', 'No'] | None`<br/>
Whether or not the security is TIPS.

**total_accepted**: `int | None`<br/>
The total accepted value at auction.

**total_tendered**: `int | None`<br/>
The total tendered value at auction.

**treasury_retail_accepted**: `int | None`<br/>
The accepted value on the security from retail.

**treasury_retail_tenders_accepted**: `Literal['Yes', 'No'] | None`<br/>
Whether or not the tender offers from retail are accepted

**type**: `str | None`<br/>
The type of issuance.  This might be different than the security type.

**unadjusted_accrued_interest_per_1000**: `float | None`<br/>
The unadjusted accrued interest per 1000 of the security.

**unadjusted_price**: `float | None`<br/>
The unadjusted price of the security.

**updated_timestamp**: `datetime | None`<br/>
The updated timestamp of the security.

**xml_announcement**: `str | None`<br/>
The XML filename for the announcement of the security.

**xml_competitive_results**: `str | None`<br/>
The XML filename for the competitive results of the security.

**xml_special_announcement**: `str | None`<br/>
The XML filename for special announcements.

**tint_cusip1**: `str | None`<br/>
Tint CUSIP 1.

**tint_cusip2**: `str | None`<br/>
Tint CUSIP 2.

</TabItem>
</Tabs>

