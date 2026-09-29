---
title: "major_holders"
description: "Get detailed information about equity ownership and stock ownership,  including investment data, security data, market value data, shares data, performance  data, and ownership data. Use the equity ownership API to retrieve equity ownership  details, and explore various stock ownership parameters and returns. Access company  ownership data, investor data, filing data, industry data, and more."
keywords:
- equity ownership
- company ownership
- equity ownership API
- equity ownership data
- equity ownership parameters
- equity ownership returns
- equity ownership data fields
- stock ownership
- stock ownership data
- stock ownership API
- stock ownership parameters
- stock ownership returns
- stock ownership data fields
- investment data
- security data
- market value data
- shares data
- performance data
- ownership data
- equity ownership details
- stock ownership details
- equity ownership information
- stock ownership information
- company ownership data
- investor data
- filing data
- industry data
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/ownership/major_holders - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get data about major holders for a given company over time.

Examples
--------

```python
from openbb import obb
obb.equity.ownership.major_holders(symbol='AAPL')
obb.equity.ownership.major_holders(symbol='AAPL', page=0)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol to get data for.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str`<br/>
Symbol to get data for.

**year**: `int | None`<br/>
Calendar year for the data. If not provided, the latest year is used.

**quarter**: `int | None`<br/>
Calendar quarter for the data. Valid values are 1, 2, 3, or 4. If not provided, the quarter previous to the current quarter is used.

**page**: `int | None`<br/>
Page number, used in conjunction with the limit. The default is 0.

**limit**: `int | None`<br/>
Number of items to return per page. The default is 100, which is the maximum.

</TabItem>
</Tabs>

---

## Returns

**results**: `EquityOwnership`

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

**investor_name**: `str`<br/>
Investing entity's name.

**cik**: `str | None`<br/>
Central Index Key (CIK) for the requested entity.

**date**: `date | str`<br/>
The date of the data. For the period ending.

**filing_date**: `date | None`<br/>
Date when reported.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

</TabItem>
<TabItem value='fmp' label='fmp'>

**investor_name**: `str`<br/>
Investing entity's name.

**cik**: `str | None`<br/>
Central Index Key (CIK) for the requested entity.

**date**: `date | str`<br/>
The date of the data. For the period ending.

**filing_date**: `date | None`<br/>
Date when reported.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**security_name**: `str`<br/>
Security name.

**security_type**: `str`<br/>
Type or class of security.

**security_cusip**: `str`<br/>
CUSIP of the security.

**shares_type**: `str`<br/>
Shares type.

**put_call_share**: `str`<br/>
Whether the share represents a put, call, or share.

**investment_discretion**: `str`<br/>
Investment discretion of reporting entity.

**sic_industry**: `str`<br/>
SIC classification industry.

**weight**: `float`<br/>
Weight relative to the total reported portfolio.

**weight_previous**: `float`<br/>
Weight from the previous quarter.

**weight_change**: `float`<br/>
Change in the weight from the previous quarter.

**weight_change_percent**: `float`<br/>
Change in weight as a percent.

**market_value**: `int`<br/>
Market value of the stock ownership.

**market_value_previous**: `int`<br/>
Market value from the previous quarter.

**market_value_change**: `int`<br/>
Change in market value from the previous quarter.

**market_value_change_percent**: `float`<br/>
Change in market value from the previous quarter, as a percent.

**shares_number**: `int`<br/>
Number of controlled shares.

**shares_previous**: `int`<br/>
Number of controlled shares from the previous quarter.

**shares_change**: `float`<br/>
Change in shares number from the previous quarter.

**shares_change_percent**: `float`<br/>
Change in shares number from the previous quarter, as a percent.

**quarter_end_price**: `float`<br/>
Market price of the security at the end of the quarter.

**avg_price_paid**: `float`<br/>
Average price paid for the shares.

**is_new**: `bool`<br/>
If the security was newly added this quarter.

**is_sold_out**: `bool`<br/>
If the security was sold out this quarter.

**ownership**: `float | None`<br/>
Ownership stake in the security, as a percent.

**ownership_previous**: `float | None`<br/>
Ownership stake in the security from the previous quarter, as a percent.

**ownership_change**: `float | None`<br/>
Change in ownership stake from the previous quarter.

**ownership_change_percent**: `float | None`<br/>
Change in ownership stake from the previous quarter, as a percent.

**holding_period**: `int`<br/>
Holding period of the security.

**first_added**: `date`<br/>
When the security was first reported as held.

**performance**: `float | None`<br/>
Performance value of the security holding.

**performance_percent**: `float | None`<br/>
Performance of the security holding, as a percent.

**performance_previous**: `float | None`<br/>
Performance value of the security holding from the previous quarter.

**performance_change**: `float | None`<br/>
Change in value of the security holding's performance.

**is_counted_for_performance**: `bool`<br/>
If the security is counted for the performance measurement.

</TabItem>
</Tabs>

