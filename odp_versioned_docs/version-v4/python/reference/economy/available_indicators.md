---
title: "available_indicators"
description: "Get the available economic indicators for a provider"
keywords:
- economy
- available_indicators
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="economy/available_indicators - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get the available economic indicators for a provider.

Examples
--------

```python
from openbb import obb
obb.economy.available_indicators()
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='econdb' label='econdb'>

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
Whether to use cache or not, by default is True The cache of indicator symbols will persist for one week.

</TabItem>
<TabItem value='imf' label='imf'>

**query**: `str | None`<br/>
The search query string. Multiple search phrases can be separated by semicolons. Each phrase can use AND (+) and OR (|) operators, as well as quoted phrases. Semicolon separation allows commas to be used within search phrases.

**dataflows**: `str | list[str] | None`<br/>
list of IMF dataflow IDs to filter the indicators. Use semicolons to separate multiple dataflow IDs.

**keywords**: `str | list[str] | None`<br/>
list of keywords to filter results. Each keyword is a single word that must appear in the indicator's label or description. Keywords prefixed with 'not' will exclude indicators containing that word (e.g., 'not USD' excludes indicators with 'USD' in them).

**symbol**: `str | None`<br/>
Dummy field to allow grouping by symbol.

</TabItem>
</Tabs>

---

## Returns

**results**: `AvailableIndicators`

Serializable results.

**provider**: `Optional[Literal['econdb', 'imf']]`

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

**symbol_root**: `str | None`<br/>
The root symbol representing the indicator.

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data. The root symbol with additional codes.

**country**: `str | None`<br/>
The name of the country, region, or entity represented by the symbol.

**iso**: `str | None`<br/>
The ISO code of the country, region, or entity represented by the symbol.

**description**: `str | None`<br/>
The description of the indicator.

**frequency**: `str | None`<br/>
The frequency of the indicator data.

</TabItem>
<TabItem value='econdb' label='econdb'>

**symbol_root**: `str | None`<br/>
The root symbol representing the indicator.

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data. The root symbol with additional codes.

**country**: `str | None`<br/>
The name of the country, region, or entity represented by the symbol.

**iso**: `str | None`<br/>
The ISO code of the country, region, or entity represented by the symbol.

**description**: `str | None`<br/>
The description of the indicator.

**frequency**: `str | None`<br/>
The frequency of the indicator data.

**currency**: `str | None`<br/>
The currency, or unit, the data is based in.

**scale**: `str | None`<br/>
The scale of the data.

**multiplier**: `int | None`<br/>
The multiplier of the data to arrive at whole units.

**transformation**: `str`<br/>
Transformation type.

**source**: `str | None`<br/>
The original source of the data.

**first_date**: `date | None`<br/>
The first date of the data.

**last_date**: `date | None`<br/>
The last date of the data.

**last_insert_timestamp**: `datetime | None`<br/>
The time of the last update. Data is typically reported with a lag.

</TabItem>
<TabItem value='imf' label='imf'>

**symbol_root**: `str | None`<br/>
The root symbol representing the indicator.

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data. The root symbol with additional codes.

**country**: `str | None`<br/>
The name of the country, region, or entity represented by the symbol.

**iso**: `str | None`<br/>
The ISO code of the country, region, or entity represented by the symbol.

**description**: `str | None`<br/>
The description of the indicator.

**frequency**: `str | None`<br/>
The frequency of the indicator data.

**agency_id**: `str`<br/>
The agency ID responsible for the indicator.

**dataflow_id**: `str`<br/>
The IMF dataflow ID associated with the indicator.

**dataflow_name**: `str`<br/>
The name of the IMF dataflow (symbol root).

**structure_id**: `str`<br/>
The data structure ID associated with the indicator.

**dimension_id**: `str`<br/>
The dimension ID of the indicator in the data structure.

**long_description**: `str | None`<br/>
Detailed description of the indicator.

**member_of**: `list[str] | None`<br/>
list of table symbols (dataflow_id::table_id) this indicator belongs to.

</TabItem>
</Tabs>

