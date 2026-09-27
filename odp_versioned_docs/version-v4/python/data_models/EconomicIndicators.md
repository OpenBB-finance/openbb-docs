---
title: "Economic Indicators"
description: "Get economic indicators by country and indicator"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `EconomicIndicators` | `EconomicIndicatorsQueryParams` | `EconomicIndicatorsData` |

### Import Statement

```python
from openbb_core.provider.standard_models.economic_indicators import (
EconomicIndicatorsData,
EconomicIndicatorsQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): econdb, imf.

**country**: `str | None | list[str | None]`<br/>
The country to get data. Multiple items allowed for provider(s): econdb, imf.

**frequency**: `str | None`<br/>
The frequency of the data.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
<TabItem value='econdb' label='econdb'>

**symbol**: `str`<br/>
Symbol to get data for. The base symbol for the indicator (e.g. GDP, CPI, etc.). Use `available_indicators()` to get a list of available symbols.

**country**: `str | None`<br/>
The country to get data. ISO country codes or country names.

**frequency**: `str | None`<br/>
*Default:* quarter<br/>
The frequency of the data, default is 'quarter'. Only valid when 'symbol' is 'main'.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**transform**: `None | str | None`<br/>
<details>
<summary mdxType="summary">Description</summary>

The transformation to apply to the data, default is None.<br/>
<br/>
    tpop: Change from previous period<br/>
    toya: Change from one year ago<br/>
    tusd: Values as US dollars<br/>
    tpgp: Values as a percent of GDP<br/>
<br/>
    Only 'tpop' and 'toya' are applicable to all indicators. Applying transformations across multiple indicators/countries may produce unexpected results.<br/>
    This is because not all indicators are compatible with all transformations, and the original units and scale differ between entities.<br/>
    `tusd` should only be used where values are currencies.<br/>
</details>

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
If True, the request will be cached for one day. Using cache is recommended to avoid needlessly requesting the same data.

</TabItem>
<TabItem value='imf' label='imf'>

**symbol**: `str | None`<br/>
<details>
<summary mdxType="summary">Description</summary>

Symbol to get data for. Symbol format: 'dataflow::identifier' where identifier is either:<br/>
- A table ID (starts with 'H_') for hierarchical table data<br/>
- An indicator code for individual indicator data<br/>
<br/>
Examples:<br/>
    - 'BOP::H_BOP_BOP_AGG_STANDARD_PRESENTATION' - Balance of Payments table<br/>
    - 'BOP_AGG::GS_CD,BOP_AGG::GS_DB' - Multiple BOP_AGG indicators (Goods & Services)<br/>
    - 'IL::RGV_REVS' - Gold reserves in millions of fine troy ounces<br/>
    - 'WEO::NGDP_RPCH' - Real GDP growth (annual only)<br/>
    - 'WEO::POILBRE' - Brent crude oil price (use country='G001' for world)<br/>
    - 'PCPS::PGOLD' - Gold price per troy ounce (monthly/quarterly available)<br/>
<br/>
Use `obb.economy.available_indicators(provider='imf')` to discover symbols. Use `obb.economy.imf_utils.list_tables()` to see available tables.<br/>
</details>

**country**: `str | None`<br/>
ISO3 country code(s). Use comma-separated values for multiple countries. Validated against the dataflow's available countries via constraint API.

**frequency**: `str | None`<br/>
The frequency of the data. Choices vary by indicator and country. Common options: 'annual', 'quarter', 'month'. Use 'all' or '*' to return all available frequencies. Direct IMF codes (e.g., 'A', 'Q', 'M') are also accepted.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**transform**: `str | None`<br/>
Transformation to apply to the data. User-friendly options: 'index' (raw values), 'yoy' (year-over-year %), 'period' (period-over-period %). Use 'all' or '*' to return all available transformations. Direct IMF codes (e.g., 'USD', 'IX') are also accepted.

**dimension_values**: `list[str] | None`<br/>
list of additional dimension filters in 'DIM_ID:DIM_VALUE' format. Parameter can be entered multiple times.

**limit**: `int | None`<br/>
Maximum number of records to retrieve per series.

**pivot**: `bool | None`<br/>
*Default:* False<br/>
If True, pivots the data to presentation view with 'indicator' and 'country' as the index, date as values.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | None | str`<br/>
The date of the data.

**symbol_root**: `str | None`<br/>
The root symbol for the indicator (e.g. GDP).

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**country**: `str | None`<br/>
The country represented by the data.

**value**: `int | float | None`<br/>
</TabItem>
<TabItem value='econdb' label='econdb'>

**date**: `date | None | str`<br/>
The date of the data.

**symbol_root**: `str | None`<br/>
The root symbol for the indicator (e.g. GDP).

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**country**: `str | None`<br/>
The country represented by the data.

**value**: `int | float | None`<br/>
</TabItem>
<TabItem value='imf' label='imf'>

**date**: `date | None | str`<br/>
The date of the data.

**symbol_root**: `str | None`<br/>
The root symbol for the indicator (e.g. GDP).

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**country**: `str | None`<br/>
The country represented by the data.

**value**: `int | float | None`<br/>
**unit**: `str | None`<br/>
The unit of measurement.

**unit_multiplier**: `int | float | None`<br/>
The multiplier for the unit.

**scale**: `str | None`<br/>
The scale/multiplier of the value.

**order**: `int | float | None`<br/>
Sort order within the table hierarchy.

**level**: `int | None`<br/>
Indentation level in the table hierarchy.

**title**: `str | None`<br/>
Human-readable title of the series.

**description**: `str | None`<br/>
Description of the indicator.

**country_code**: `str | None`<br/>
ISO3 country code.

</TabItem>
</Tabs>

