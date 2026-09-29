---
title: "primary_dealer_fails"
description: "Primary Dealer Statistics for Fails to Deliver and Fails to Receive"
keywords:
- economy
- primary_dealer_fails
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="economy/primary_dealer_fails - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Primary Dealer Statistics for Fails to Deliver and Fails to Receive.

Data from the NY Federal Reserve are updated on Thursdays at approximately
4:15 p.m. with the previous week's statistics.

For research on the topic, see:
https://www.federalreserve.gov/econres/notes/feds-notes/the-systemic-nature-of-settlement-fails-20170703.html

"Large and protracted settlement fails are believed to undermine the liquidity
and well-functioning of securities markets.

Near-100 percent pass-through of fails suggests a high degree of collateral
re-hypothecation together with the inability or unwillingness to borrow or buy the needed securities."

Examples
--------

```python
from openbb import obb
obb.economy.primary_dealer_fails()
# Transform the data to be percentage totals by asset class
obb.economy.primary_dealer_fails(unit='percent')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
<TabItem value='federal_reserve' label='federal_reserve'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**asset_class**: `Literal['all', 'treasuries', 'tips', 'agency', 'mbs', 'corporate'] | None`<br/>
*Default:* all<br/>
Asset class to return, default is 'all'.

**unit**: `Literal['value', 'percent'] | None`<br/>
*Default:* value<br/>
Unit of the data returned to the 'value' field. Default is 'value', which represents millions of USD. 'percent' returns data as the percentage of the total fails-to-receive and fails-to-deliver, by asset class.

</TabItem>
</Tabs>

---

## Returns

**results**: `PrimaryDealerFails`

Serializable results.

**provider**: `Optional[Literal['federal_reserve']]`

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

**date**: `date | str`<br/>
The date of the data.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

</TabItem>
<TabItem value='federal_reserve' label='federal_reserve'>

**date**: `date | str`<br/>
The date of the data.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**title**: `str`<br/>
Title of the series' symbol.

**value**: `int | float`<br/>
Value of the data returned, in millions of USD if the `unit` parameter is 'value' else a normalized percent.

</TabItem>
</Tabs>

