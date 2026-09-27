---
title: "Crypto Search"
description: "Search available cryptocurrency pairs within a provider"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `CryptoSearch` | `CryptoSearchQueryParams` | `CryptoSearchData` |

### Import Statement

```python
from openbb_core.provider.standard_models.crypto_search import (
CryptoSearchData,
CryptoSearchQueryParams,
)
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

