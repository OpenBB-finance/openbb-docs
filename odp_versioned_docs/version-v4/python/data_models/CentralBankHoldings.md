---
title: "Central Bank Holdings"
description: "Get the balance sheet holdings of a central bank"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `CentralBankHoldings` | `CentralBankHoldingsQueryParams` | `CentralBankHoldingsData` |

### Import Statement

```python
from openbb_core.provider.standard_models.central_bank_holdings import (
CentralBankHoldingsData,
CentralBankHoldingsQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | None | str`<br/>
A specific date to get data for.

</TabItem>
<TabItem value='federal_reserve' label='federal_reserve'>

**date**: `date | None | str`<br/>
A specific date to get data for.

**holding_type**: `Literal['all_agency', 'agency_debts', 'mbs', 'cmbs', 'all_treasury', 'bills', 'notesbonds', 'frn', 'tips'] | None`<br/>
*Default:* all_treasury<br/>
Type of holdings to return.

**summary**: `bool | None`<br/>
*Default:* False<br/>
If True, returns historical weekly summary by holding type. This parameter takes priority over other parameters.

**cusip**: `str | None`<br/>
**wam**: `bool | None`<br/>
*Default:* False<br/>
If True, returns weighted average maturity aggregated by agency or treasury securities. This parameter takes priority over `holding_type`, `cusip`, and `monthly`.

**monthly**: `bool | None`<br/>
*Default:* False<br/>
If True, returns historical data for all Treasury securities at a monthly interval. This parameter takes priority over other parameters, except `wam`. Only valid when `holding_type` is set to: 'all_treasury', 'bills', 'notesbonds', 'frn', 'tips'.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | str`<br/>
The date of the data.

</TabItem>
<TabItem value='federal_reserve' label='federal_reserve'>

**date**: `date | str`<br/>
The date of the data.

**security_type**: `str | None`<br/>
Type of security - i.e. TIPs, FRNs, etc.

**description**: `str | None`<br/>
Description of the security. Only returned for Agency securities.

**is_aggregated**: `Literal['Y'] | None`<br/>
Whether the security is aggregated. Only returned for Agency securities.

**cusip**: `str | None`<br/>
**issuer**: `str | None`<br/>
Issuer of the security.

**maturity_date**: `date | None`<br/>
Maturity date of the security.

**term**: `str | None`<br/>
Term of the security. Only returned for Agency securities.

**face_value**: `float | None`<br/>
Current face value of the security (Thousands of $USD). Current face value of the securities, which is the remaining principal balance of the securities.

**par_value**: `float | None`<br/>
Par value of the security (Thousands of $USD). Changes in par may reflect primary and secondary market transactions and/or custodial account activity.

**coupon**: `float | None`<br/>
Coupon rate of the security.

**spread**: `float | None`<br/>
Spread to the current reference rate, as determined at each security's initial auction.

**percent_outstanding**: `float | None`<br/>
Total percent of the outstanding CUSIP issuance.

**bills**: `float | None`<br/>
Treasury bills amount (Thousands of $USD). Only returned when 'summary' is True.

**frn**: `float | None`<br/>
Floating rate Treasury notes amount (Thousands of $USD). Only returned when 'summary' is True.

**notes_and_bonds**: `float | None`<br/>
Treasuy Notes and bonds amount (Thousands of $USD). Only returned when 'summary' is True.

**tips**: `float | None`<br/>
Treasury inflation-protected securities amount (Thousands of $USD). Only returned when 'summary' is True.

**mbs**: `float | None`<br/>
Mortgage-backed securities amount (Thousands of $USD). Only returned when 'summary' is True.

**cmbs**: `float | None`<br/>
Commercial mortgage-backed securities amount (Thousands of $USD). Only returned when 'summary' is True.

**agencies**: `float | None`<br/>
Agency securities amount (Thousands of $USD). Only returned when 'summary' is True.

**total**: `float | None`<br/>
Total SOMA holdings amount (Thousands of $USD). Only returned when 'summary' is True.

**tips_inflation_compensation**: `float | None`<br/>
Treasury inflation-protected securities inflation compensation amount (Thousands of $USD). Only returned when 'summary' is True.

**change_prior_week**: `float | None`<br/>
Change in SOMA holdings from the prior week (Thousands of $USD).

**change_prior_year**: `float | None`<br/>
Change in SOMA holdings from the prior year (Thousands of $USD).

</TabItem>
</Tabs>

