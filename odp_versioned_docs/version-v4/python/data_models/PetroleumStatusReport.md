---
title: "Petroleum Status Report"
description: "EIA Weekly Petroleum Status Report"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `PetroleumStatusReport` | `PetroleumStatusReportQueryParams` | `PetroleumStatusReportData` |

### Import Statement

```python
from openbb_core.provider.standard_models.petroleum_status_report import (
PetroleumStatusReportData,
PetroleumStatusReportQueryParams,
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

**category**: `Literal['balance_sheet', 'inputs_and_production', 'refiner_blender_net_production', 'crude_petroleum_stocks', 'gasoline_fuel_stocks', 'total_gasoline_by_sub_padd', 'distillate_fuel_oil_stocks', 'imports', 'imports_by_country', 'weekly_estimates', 'spot_prices_crude_gas_heating', 'spot_prices_diesel_jet_fuel_propane', 'retail_prices'] | None`<br/>
*Default:* balance_sheet<br/>
The group of data to be returned. The default is the balance sheet.

**table**: `str | None`<br/>
<details>
<summary mdxType="summary">Description</summary>

The specific table element within the category to be returned, default is 'stocks', if the category is 'weekly_estimates', else 'all'.<br/>
    Note: Choices represent all available tables from the entire collection and are not all available for every category.<br/>
    Invalid choices will raise a ValidationError with a message indicating the valid choices for the selected category.<br/>
    Choices are:<br/>
        all<br/>
        conventional_gas<br/>
        crude<br/>
        crude_production<br/>
        crude_production_avg<br/>
        diesel<br/>
        ethanol_plant_production<br/>
        ethanol_plant_production_avg<br/>
        exports<br/>
        exports_avg<br/>
        heating_oil<br/>
        imports<br/>
        imports_avg<br/>
        imports_by_country<br/>
        imports_by_country_avg<br/>
        inputs_and_utilization<br/>
        inputs_and_utilization_avg<br/>
        jet_fuel<br/>
        monthly<br/>
        net_imports_inc_spr_avg<br/>
        net_imports_incl_spr<br/>
        net_production<br/>
        net_production_avg<br/>
        net_production_by_product<br/>
        net_production_by_production_avg<br/>
        product_by_region<br/>
        product_by_region_avg<br/>
        product_supplied<br/>
        product_supplied_avg<br/>
        propane<br/>
        rbob<br/>
        refiner_blender_net_production<br/>
        refiner_blender_net_production_avg<br/>
        stocks<br/>
        supply<br/>
        supply_avg<br/>
        ulta_low_sulfur_distillate_reclassification<br/>
        ulta_low_sulfur_distillate_reclassification_avg<br/>
        weekly<br/>
</details>

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
Subsequent requests for the same source data are cached for the session using ALRU cache.

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

