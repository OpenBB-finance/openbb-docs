---
title: "Consumer Price Index"
description: "Get Consumer Price Index (CPI) data by country"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `ConsumerPriceIndex` | `ConsumerPriceIndexQueryParams` | `ConsumerPriceIndexData` |

### Import Statement

```python
from openbb_core.provider.standard_models.consumer_price_index import (
ConsumerPriceIndexData,
ConsumerPriceIndexQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**country**: `str | None | list[str | None]`<br/>
*Default:* united_states<br/>
The country to get data. Multiple items allowed for provider(s): fred, imf, oecd.

<details>
<summary mdxType="summary">Choices</summary>

- G20
- G7
- argentina
- australia
- austria
- belgium
- brazil
- canada
- chile
- china
- colombia
- costa_rica
- czech_republic
- denmark
- estonia
- euro_area_20
- europe
- european_union_27
- finland
- france
- germany
- greece
- hungary
- iceland
- india
- indonesia
- ireland
- israel
- italy
- japan
- korea
- latvia
- lithuania
- luxembourg
- mexico
- netherlands
- new_zealand
- norway
- oecd_total
- poland
- portugal
- russia
- saudi_arabia
- slovak_republic
- slovenia
- south_africa
- spain
- sweden
- switzerland
- turkey
- united_kingdom
- united_states
- all
</details>

**transform**: `str | None`<br/>
*Default:* yoy<br/>
Transformation of the CPI data.

<details>
<summary mdxType="summary">Choices</summary>

- index
- yoy
- period
</details>

**frequency**: `Literal['annual', 'quarter', 'monthly'] | None`<br/>
*Default:* monthly<br/>
The frequency of the data.

**harmonized**: `bool | None`<br/>
*Default:* False<br/>
If true, returns harmonized data.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
<TabItem value='fred' label='fred'>

**country**: `str | None | list[str | None]`<br/>
*Default:* united_states<br/>
The country to get data. Multiple items allowed for provider(s): fred, imf, oecd.

<details>
<summary mdxType="summary">Choices</summary>

- G20
- G7
- argentina
- australia
- austria
- belgium
- brazil
- canada
- chile
- china
- colombia
- costa_rica
- czech_republic
- denmark
- estonia
- euro_area_20
- europe
- european_union_27
- finland
- france
- germany
- greece
- hungary
- iceland
- india
- indonesia
- ireland
- israel
- italy
- japan
- korea
- latvia
- lithuania
- luxembourg
- mexico
- netherlands
- new_zealand
- norway
- oecd_total
- poland
- portugal
- russia
- saudi_arabia
- slovak_republic
- slovenia
- south_africa
- spain
- sweden
- switzerland
- turkey
- united_kingdom
- united_states
- all
</details>

**transform**: `str | None`<br/>
*Default:* yoy<br/>
Transformation of the CPI data.

<details>
<summary mdxType="summary">Choices</summary>

- index
- yoy
- period
</details>

**frequency**: `Literal['annual', 'quarter', 'monthly'] | None`<br/>
*Default:* monthly<br/>
The frequency of the data.

**harmonized**: `bool | None`<br/>
*Default:* False<br/>
If true, returns harmonized data.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
<TabItem value='imf' label='imf'>

**country**: `str | None | list[str | None]`<br/>
*Default:* united_states<br/>
The country to get data. Multiple items allowed for provider(s): fred, imf, oecd.

<details>
<summary mdxType="summary">Choices</summary>

- G20
- G7
- argentina
- australia
- austria
- belgium
- brazil
- canada
- chile
- china
- colombia
- costa_rica
- czech_republic
- denmark
- estonia
- euro_area_20
- europe
- european_union_27
- finland
- france
- germany
- greece
- hungary
- iceland
- india
- indonesia
- ireland
- israel
- italy
- japan
- korea
- latvia
- lithuania
- luxembourg
- mexico
- netherlands
- new_zealand
- norway
- oecd_total
- poland
- portugal
- russia
- saudi_arabia
- slovak_republic
- slovenia
- south_africa
- spain
- sweden
- switzerland
- turkey
- united_kingdom
- united_states
- all
</details>

**transform**: `str | None`<br/>
*Default:* yoy<br/>
Transformation of the CPI data.

<details>
<summary mdxType="summary">Choices</summary>

- index
- yoy
- period
</details>

**frequency**: `Literal['annual', 'quarter', 'monthly'] | None`<br/>
*Default:* monthly<br/>
The frequency of the data.

**harmonized**: `bool | None`<br/>
*Default:* False<br/>
If true, returns harmonized data.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**expenditure**: `str | None`<br/>
*Default:* total<br/>
Expenditure component of CPI.

**limit**: `int | None`<br/>
Maximum number of records to retrieve per series and country. If None, retrieves all available records.

</TabItem>
<TabItem value='oecd' label='oecd'>

**country**: `str | None | list[str | None]`<br/>
*Default:* united_states<br/>
The country to get data. Multiple items allowed for provider(s): fred, imf, oecd.

<details>
<summary mdxType="summary">Choices</summary>

- G20
- G7
- argentina
- australia
- austria
- belgium
- brazil
- canada
- chile
- china
- colombia
- costa_rica
- czech_republic
- denmark
- estonia
- euro_area_20
- europe
- european_union_27
- finland
- france
- germany
- greece
- hungary
- iceland
- india
- indonesia
- ireland
- israel
- italy
- japan
- korea
- latvia
- lithuania
- luxembourg
- mexico
- netherlands
- new_zealand
- norway
- oecd_total
- poland
- portugal
- russia
- saudi_arabia
- slovak_republic
- slovenia
- south_africa
- spain
- sweden
- switzerland
- turkey
- united_kingdom
- united_states
- all
</details>

**transform**: `str | None`<br/>
*Default:* yoy<br/>
Transformation of the CPI data.

<details>
<summary mdxType="summary">Choices</summary>

- index
- yoy
- period
</details>

**frequency**: `Literal['annual', 'quarter', 'monthly'] | None`<br/>
*Default:* monthly<br/>
The frequency of the data.

**harmonized**: `bool | None`<br/>
*Default:* False<br/>
If true, returns harmonized data.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**expenditure**: `str | None`<br/>
*Default:* total<br/>
Expenditure component of CPI.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | str`<br/>
The date of the data.

**country**: `str`<br/>
None

**value**: `float`<br/>
CPI index value or period change.

</TabItem>
<TabItem value='fred' label='fred'>

**date**: `date | str`<br/>
The date of the data.

**country**: `str`<br/>
None

**value**: `float`<br/>
CPI index value or period change.

</TabItem>
<TabItem value='imf' label='imf'>

**date**: `date | str`<br/>
The date of the data.

**country**: `str`<br/>
None

**value**: `float`<br/>
CPI index value or period change.

**unit**: `str`<br/>
Unit of measurement.

**unit_multiplier**: `int | float`<br/>
Unit multiplier for the observation value.

**country_code**: `str`<br/>
ISO3 country code.

**series_id**: `str`<br/>
IMF series identifier.

**expenditure**: `str`<br/>
Expenditure category.

**title**: `str`<br/>
Complete reference title for the series.

**order**: `int | None`<br/>
Sort order for expenditure categories and table presentations.

</TabItem>
<TabItem value='oecd' label='oecd'>

**date**: `date | str`<br/>
The date of the data.

**country**: `str`<br/>
None

**value**: `float`<br/>
CPI index value or period change.

**expenditure**: `str`<br/>
Expenditure component of CPI.

</TabItem>
</Tabs>

