---
title: "active"
description: "Learn how to get the most active ETFs using the ETF discovery API. This  page provides documentation for the parameters, returns, and data associated with  the API endpoint. Understand how to use the sorting, limiting, and provider parameters  and explore the returned results, chart object, and metadata. Find details about  the data fields including symbol, name, last price, percent change, net change,  volume, date, country, mantissa, type, and formatted values. Retrieve the source  url for additional information."
keywords:
- ETFs
- most active ETFs
- ETF discovery
- sort order
- limit parameter
- provider parameter
- results
- chart object
- metadata
- symbol
- name
- last price
- percent change
- net change
- volume
- date
- country
- mantissa
- type
- formatted price
- formatted volume
- formatted price change
- formatted percent change
- url
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="etf/discovery/active - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get the most active ETFs.

Examples
--------

```python
from openbb import obb
# Get the most active ETFs.
obb.etf.discovery.active()
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**sort**: `Literal['asc', 'desc'] | None`<br/>
*Default:* desc<br/>
Sort order. Possible values: 'asc', 'desc'. Default: 'desc'.

**limit**: `int | None`<br/>
*Default:* 10<br/>
The number of data entries to return.

</TabItem>
<TabItem value='wsj' label='wsj'>

**sort**: `Literal['asc', 'desc'] | None`<br/>
*Default:* desc<br/>
Sort order. Possible values: 'asc', 'desc'. Default: 'desc'.

**limit**: `int | None`<br/>
*Default:* 10<br/>
The number of data entries to return.

</TabItem>
</Tabs>

---

## Returns

**results**: `ETFActive`

Serializable results.

**provider**: `Optional[Literal['wsj']]`

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

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str`<br/>
Name of the entity.

**last_price**: `float`<br/>
Last price.

**percent_change**: `float`<br/>
Percent change.

**net_change**: `float`<br/>
Net change.

**volume**: `float`<br/>
The trading volume.

**date**: `date | str`<br/>
The date of the data.

</TabItem>
<TabItem value='wsj' label='wsj'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str`<br/>
Name of the entity.

**last_price**: `float`<br/>
Last price.

**percent_change**: `float`<br/>
Percent change.

**net_change**: `float`<br/>
Net change.

**volume**: `float`<br/>
The trading volume.

**date**: `date | str`<br/>
The date of the data.

**country**: `str`<br/>
Country of the entity.

**mantissa**: `int`<br/>
Mantissa.

**type**: `str`<br/>
Type of the entity.

**formatted_price**: `str`<br/>
Formatted price.

**formatted_volume**: `str`<br/>
Formatted volume.

**formatted_price_change**: `str`<br/>
Formatted price change.

**formatted_percent_change**: `str`<br/>
Formatted percent change.

**url**: `str`<br/>
The source url.

</TabItem>
</Tabs>

