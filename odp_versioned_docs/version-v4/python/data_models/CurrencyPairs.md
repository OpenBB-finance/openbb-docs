---
title: "Currency Pairs"
description: "Currency Search"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `CurrencyPairs` | `CurrencyPairsQueryParams` | `CurrencyPairsData` |

### Import Statement

```python
from openbb_core.provider.standard_models.currency_pairs import (
CurrencyPairsData,
CurrencyPairsQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**query**: `str | None`<br/>
Query to search for currency pairs.

</TabItem>
<TabItem value='fmp' label='fmp'>

**query**: `str | None`<br/>
Query to search for currency pairs.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**query**: `str | None`<br/>
Query to search for currency pairs.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the currency pair.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str`<br/>
Symbol of the currency pair.

**name**: `str | None`<br/>
Name of the currency pair.

**from_currency**: `str`<br/>
Base currency of the currency pair.

**to_currency**: `str`<br/>
Quote currency of the currency pair.

**from_name**: `str`<br/>
Name of the base currency.

**to_name**: `str`<br/>
Name of the quote currency.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the currency pair.

**base_currency**: `str`<br/>
ISO 4217 currency code of the base currency.

**quote_currency**: `str`<br/>
ISO 4217 currency code of the quote currency.

</TabItem>
</Tabs>

