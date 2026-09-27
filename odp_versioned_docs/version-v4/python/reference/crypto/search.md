---
title: "search"
description: "The documentation page provides information on how to perform a cryptocurrency  search, including the search query and provider parameters, as well as the resulting  crypto search data such as symbol, name, currency, and exchange information."
keywords:
- cryptocurrency search
- available cryptocurrency pairs
- python obb crypto search
- search query parameter
- provider parameter
- crypto search results
- crypto search provider
- crypto search warnings
- crypto search chart
- crypto search metadata
- crypto data
- symbol
- crypto name
- crypto currency
- crypto exchange
- crypto exchange name
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="crypto/search - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Search available cryptocurrency pairs within a provider.

Examples
--------

```python
from openbb import obb
obb.crypto.search()
obb.crypto.search(query='BTCUSD')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**query**: `str | None`<br/>
Search query.

</TabItem>
<TabItem value='fmp' label='fmp'>

**query**: `str | None`<br/>
Search query.

</TabItem>
</Tabs>

---

## Returns

**results**: `CryptoSearch`

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

**symbol**: `str`<br/>
Symbol representing the entity requested in the data. (Crypto)

**name**: `str | None`<br/>
Name of the crypto.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data. (Crypto)

**name**: `str | None`<br/>
Name of the crypto.

**exchange**: `str | None`<br/>
The exchange code the crypto trades on.

**ico_date**: `date | None`<br/>
The ICO date of the token.

**circulating_supply**: `float | None`<br/>
The circulating supply of the token.

**total_supply**: `float | None`<br/>
The total supply of the token.

</TabItem>
</Tabs>

