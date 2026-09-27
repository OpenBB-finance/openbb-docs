---
title: "Index Constituents"
description: "Get Index Constituents"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `IndexConstituents` | `IndexConstituentsQueryParams` | `IndexConstituentsData` |

### Import Statement

```python
from openbb_core.provider.standard_models.index_constituents import (
IndexConstituentsData,
IndexConstituentsQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol to get data for.

</TabItem>
<TabItem value='cboe' label='cboe'>

**symbol**: `Literal['BAT20P', 'BBE20P', 'BCH20P', 'BCHM30P', 'BDE40P', 'BDEM50P', 'BDES50P', 'BDK25P', 'BEP50P', 'BEPACP', 'BEPBUS', 'BEPCNC', 'BEPCONC', 'BEPCONS', 'BEPENGY', 'BEPFIN', 'BEPHLTH', 'BEPIND', 'BEPNEM', 'BEPTEC', 'BEPTEL', 'BEPUTL', 'BEPXUKP', 'BES35P', 'BEZ50P', 'BEZACP', 'BFI25P', 'BFR40P', 'BFRM20P', 'BIE20P', 'BIT40P', 'BNL25P', 'BNLM25P', 'BNO25G', 'BNORD40P', 'BPT20P', 'BSE30P', 'BUK100P', 'BUK250P', 'BUK350P', 'BUKAC', 'BUKBISP', 'BUKBUS', 'BUKCNC', 'BUKCONC', 'BUKCONS', 'BUKENGY', 'BUKFIN', 'BUKHI50P', 'BUKHLTH', 'BUKIND', 'BUKLO50P', 'BUKMINP', 'BUKNEM', 'BUKSC', 'BUKTEC', 'BUKTEL', 'BUKUTL'] | None`<br/>
*Default:* BUK100P<br/>
None

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `Literal['dowjones', 'sp500', 'nasdaq'] | None`<br/>
*Default:* dowjones<br/>
None

**historical**: `bool | None`<br/>
*Default:* False<br/>
Flag to retrieve historical removals and additions.

</TabItem>
<TabItem value='tmx' label='tmx'>

**symbol**: `str`<br/>
Symbol to get data for.

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
Whether to use a cached request. Index data is from a single JSON file, updated each day after close. It is cached for one day. To bypass, set to False.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the constituent company in the index.

</TabItem>
<TabItem value='cboe' label='cboe'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the constituent company in the index.

**security_type**: `str | None`<br/>
The type of security represented.

**last_price**: `float | None`<br/>
Last price for the symbol.

**open**: `float | None`<br/>
The open price.

**high**: `float | None`<br/>
The high price.

**low**: `float | None`<br/>
The low price.

**close**: `float | None`<br/>
The close price.

**volume**: `int | None`<br/>
The trading volume.

**prev_close**: `float | None`<br/>
The previous close price.

**change**: `float | None`<br/>
Change in price.

**change_percent**: `float | None`<br/>
Change in price as a normalized percentage.

**tick**: `str | None`<br/>
Whether the last sale was an up or down tick.

**last_trade_time**: `datetime | None`<br/>
Last trade timestamp for the symbol.

**asset_type**: `str | None`<br/>
Type of asset.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the constituent company in the index.

**sector**: `str | None`<br/>
Sector classification for the constituent company in the index.

**industry**: `str | None`<br/>
Industry classification for the constituent company in the index.

**headquarter**: `str | None`<br/>
Location of the company's headquarters.

**date_added**: `date | str | None`<br/>
Date the constituent company was added to the index.

**cik**: `str | None`<br/>
Central Index Key (CIK) for the requested entity.

**founded**: `date | str | None`<br/>
When the company was founded.

**removed_symbol**: `str | None`<br/>
Symbol of the company removed from the index.

**removed_name**: `str | None`<br/>
Name of the company removed from the index.

**reason**: `str | None`<br/>
Reason for the removal from the index.

**date**: `date | None | str`<br/>
Date of the historical constituent data.

</TabItem>
<TabItem value='tmx' label='tmx'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the constituent company in the index.

**market_value**: `float | None`<br/>
The quoted market value of the asset.

</TabItem>
</Tabs>

