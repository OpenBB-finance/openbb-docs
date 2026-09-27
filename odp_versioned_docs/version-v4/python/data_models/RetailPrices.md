---
title: "Retail Prices"
description: "Get retail prices for common items"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `RetailPrices` | `RetailPricesQueryParams` | `RetailPricesData` |

### Import Statement

```python
from openbb_core.provider.standard_models.retail_prices import (
RetailPricesData,
RetailPricesQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**item**: `str | None`<br/>
The item or basket of items to query.

**country**: `str | None`<br/>
*Default:* united_states<br/>
The country to get data.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
<TabItem value='fred' label='fred'>

**item**: `Literal['beverages', 'cereals', 'dairy', 'fuel', 'produce', 'meats', 'bacon', 'bananas', 'beans', 'beef', 'beer', 'bread', 'butter', 'cheese', 'chicken', 'chops', 'coffee', 'cookies', 'corn', 'diesel', 'eggs', 'electricity', 'flour', 'gas', 'gasoline', 'grapefruit', 'ground_beef', 'ham', 'ice_cream', 'lemons', 'lettuce', 'malt_beverages', 'milk', 'oil', 'orange_juice', 'oranges', 'pork', 'potato_chips', 'potatoes', 'rice', 'soft_drinks', 'spaghetti', 'steak', 'strawberries', 'sugar', 'tomatoes', 'unleaded', 'usda', 'vodka', 'wine', 'yogurt'] | None`<br/>
*Default:* fuel<br/>
The item or basket of items to query.

**country**: `Literal['united_states'] | None`<br/>
*Default:* united_states<br/>
The country to get data.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**region**: `Literal['all_city', 'northeast', 'midwest', 'south', 'west'] | None`<br/>
*Default:* all_city<br/>
The region to get average price levels for.

**frequency**: `Literal['annual', 'quarter', 'monthly'] | None`<br/>
*Default:* monthly<br/>
The frequency of the data.

**transform**: `Literal['chg', 'ch1', 'pch', 'pc1', 'pca', 'cch', 'cca', 'log'] | None`<br/>
<details>
<summary mdxType="summary">Description</summary>

Transformation type<br/>
    None = No transformation<br/>
    chg = Change<br/>
    ch1 = Change from Year Ago<br/>
    pch = Percent Change<br/>
    pc1 = Percent Change from Year Ago<br/>
    pca = Compounded Annual Rate of Change<br/>
    cch = Continuously Compounded Rate of Change<br/>
    cca = Continuously Compounded Annual Rate of Change<br/>
    log = Natural Log<br/>
</details>

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | None | str`<br/>
The date of the data.

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**country**: `str | None`<br/>
**description**: `str | None`<br/>
Description of the item.

**value**: `float | None`<br/>
Price, or change in price, per unit.

</TabItem>
<TabItem value='fred' label='fred'>

**date**: `date | None | str`<br/>
The date of the data.

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**country**: `str | None`<br/>
**description**: `str | None`<br/>
Description of the item.

**value**: `float | None`<br/>
Price, or change in price, per unit.

</TabItem>
</Tabs>

