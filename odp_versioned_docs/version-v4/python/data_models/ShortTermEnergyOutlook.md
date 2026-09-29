---
title: "Short Term Energy Outlook"
description: "Monthly short term (18 month) projections using EIA's STEO model"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `ShortTermEnergyOutlook` | `ShortTermEnergyOutlookQueryParams` | `ShortTermEnergyOutlookData` |

### Import Statement

```python
from openbb_core.provider.standard_models.short_term_energy_outlook import (
ShortTermEnergyOutlookData,
ShortTermEnergyOutlookQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
<TabItem value='eia' label='eia'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**symbol**: `str | None`<br/>
Symbol to get data for. If provided, overrides the 'table' parameter to return only the specified symbol from the STEO API.

**table**: `Literal['01', '02', '03a', '03b', '03c', '03d', '03e', '04a', '04b', '04c', '04d', '05a', '05b', '06', '07a', '07b', '07c', '07d1', '07d2', '07e', '08', '09a', '09b', '09c', '10a', '10b'] | None`<br/>
*Default:* 01<br/>
<details>
<summary mdxType="summary">Description</summary>

The specific table within the STEO dataset. Default is '01'. When 'symbol' is provided, this parameter is ignored.<br/>
    01: US Energy Markets Summary<br/>
    02: Nominal Energy Prices<br/>
    03a: World Petroleum and Other Liquid Fuels Production, Consumption, and Inventories<br/>
    03b: Non-OPEC Petroleum and Other Liquid Fuels Production<br/>
    03c: World Petroleum and Other Liquid Fuels Production<br/>
    03d: World Crude Oil Production<br/>
    03e: World Petroleum and Other Liquid Fuels Consumption<br/>
    04a: US Petroleum and Other Liquid Fuels Supply, Consumption, and Inventories<br/>
    04b: US Hydrocarbon Gas Liquids (HGL) and Petroleum Refinery Balances<br/>
    04c: US Regional Motor Gasoline Prices and Inventories<br/>
    04d: US Biofuel Supply, Consumption, and Inventories<br/>
    05a: US Natural Gas Supply, Consumption, and Inventories<br/>
    05b: US Regional Natural Gas Prices<br/>
    06: US Coal Supply, Consumption, and Inventories<br/>
    07a: US Electricity Industry Overview<br/>
    07b: US Regional Electricity Retail Sales<br/>
    07c: US Regional Electricity Prices<br/>
    07d1: US Regional Electricity Generation, Electric Power Sector<br/>
    07d2: US Regional Electricity Generation, Electric Power Sector, continued<br/>
    07e: US Electricity Generating Capacity<br/>
    08: US Renewable Energy Consumption<br/>
    09a: US Macroeconomic Indicators and CO2 Emissions<br/>
    09b: US Regional Macroeconomic Data<br/>
    09c: US Regional Weather Data<br/>
    10a: Drilling Productivity Metrics<br/>
    10b: Crude Oil and Natural Gas Production from Shale and Tight Formations<br/>
</details>

**frequency**: `Literal['month', 'quarter', 'annual'] | None`<br/>
*Default:* month<br/>
The frequency of the data. Default is 'month'.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | str`<br/>
The date of the data.

**table**: `str | None`<br/>
Table name for the data.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**order**: `int | None`<br/>
Presented order of the data, relative to the table.

**title**: `str | None`<br/>
Title of the data.

**value**: `int | float`<br/>
Value of the data.

**unit**: `str | None`<br/>
Unit or scale of the data.

</TabItem>
<TabItem value='eia' label='eia'>

**date**: `date | str`<br/>
The date of the data.

**table**: `str | None`<br/>
Table name for the data.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**order**: `int | None`<br/>
Presented order of the data, relative to the table.

**title**: `str | None`<br/>
Title of the data.

**value**: `int | float`<br/>
Value of the data.

**unit**: `str | None`<br/>
Unit or scale of the data.

</TabItem>
</Tabs>

