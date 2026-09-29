---
title: "Port Volume"
description: "Daily port calls and estimates of trading volumes for ports around the world"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `PortVolume` | `PortVolumeQueryParams` | `PortVolumeData` |

### Import Statement

```python
from openbb_core.provider.standard_models.port_volume import (
PortVolumeData,
PortVolumeQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**start_date**: `date | None`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
<TabItem value='econdb' label='econdb'>

**start_date**: `date | None`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
<TabItem value='imf' label='imf'>

**start_date**: `date | None`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**port_code**: `str | None`<br/>
Port code to filter results by a specific port. This parameter is ignored if `country` parameter is provided. To get a list of available ports, use `obb.economy.shipping.port_info()`.

**country**: `Literal['ABW', 'AGO', 'AIA', 'ALB', 'ARE', 'ARG', 'ASM', 'ATG', 'AUS', 'AZE', 'BEL', 'BEN', 'BES', 'BGD', 'BGR', 'BHR', 'BHS', 'BLM', 'BLZ', 'BRA', 'BRB', 'BRN', 'CAN', 'CHL', 'CHN', 'CIV', 'CMR', 'COD', 'COG', 'COK', 'COL', 'COM', 'CPV', 'CRI', 'CUB', 'CUW', 'CYM', 'CYP', 'DEU', 'DJI', 'DMA', 'DNK', 'DOM', 'DZA', 'ECU', 'EGY', 'ERI', 'ESP', 'EST', 'FIN', 'FJI', 'FRA', 'FRO', 'FSM', 'GAB', 'GBR', 'GEO', 'GHA', 'GIB', 'GIN', 'GLP', 'GMB', 'GNB', 'GNQ', 'GRC', 'GRD', 'GTM', 'GUF', 'GUM', 'GUY', 'HKG', 'HND', 'HRV', 'HTI', 'IDN', 'IND', 'IRL', 'IRN', 'IRQ', 'ISL', 'ISR', 'ITA', 'JAM', 'JOR', 'JPN', 'KAZ', 'KEN', 'KHM', 'KIR', 'KNA', 'KOR', 'KWT', 'LBN', 'LBR', 'LBY', 'LCA', 'LKA', 'LTU', 'LVA', 'MAC', 'MAF', 'MAR', 'MDA', 'MDG', 'MDV', 'MEX', 'MHL', 'MLT', 'MMR', 'MNE', 'MNP', 'MOZ', 'MRT', 'MSR', 'MTQ', 'MUS', 'MYS', 'MYT', 'NAM', 'NCL', 'NGA', 'NIC', 'NLD', 'NOR', 'NRU', 'NZL', 'OMN', 'PAK', 'PAN', 'PER', 'PHL', 'PLW', 'PNG', 'POL', 'PRI', 'PRT', 'PYF', 'QAT', 'REU', 'ROU', 'RUS', 'SAU', 'SDN', 'SEN', 'SGP', 'SLB', 'SLE', 'SLV', 'SOM', 'STP', 'SUR', 'SVN', 'SWE', 'SXM', 'SYC', 'SYR', 'TCA', 'TGO', 'THA', 'TKM', 'TLS', 'TON', 'TTO', 'TUN', 'TUR', 'TUV', 'TWN', 'TZA', 'UKR', 'URY', 'USA', 'VCT', 'VEN', 'VGB', 'VIR', 'VNM', 'VUT', 'WSM', 'YEM', 'ZAF'] | None`<br/>
Country to focus on. Enter as a 3-letter ISO country code. This parameter is overridden by `port_code` if both are provided.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | str`<br/>
The date of the data.

**port_code**: `str | None`<br/>
Port code.

**port_name**: `str | None`<br/>
Port name.

**country**: `str | None`<br/>
Country where the port is located.

</TabItem>
<TabItem value='econdb' label='econdb'>

**date**: `date | str`<br/>
The date of the data.

**port_code**: `str | None`<br/>
Port code.

**port_name**: `str | None`<br/>
Port name.

**country**: `str | None`<br/>
Country where the port is located.

**export_dwell_time**: `float | None`<br/>
EconDB model estimate for the average number of days from when a container enters the terminal gates until it is loaded on a vessel. High dwelling times can indicate vessel delays.

**import_dwell_time**: `float | None`<br/>
EconDB model estimate for the average number of days from when a container is discharged from a vessel until it exits the terminal gates. High dwelling times can indicate trucking or port congestion.

**import_teu**: `int | None`<br/>
EconDB model estimate for the number of twenty-foot equivalent units (TEUs) of containers imported through the port.

**export_teu**: `int | None`<br/>
EconDB model estimate for the number of twenty-foot equivalent units (TEUs) of containers exported through the port.

</TabItem>
<TabItem value='imf' label='imf'>

**date**: `date | str`<br/>
The date of the data.

**port_code**: `str | None`<br/>
Port code.

**port_name**: `str | None`<br/>
Port name.

**country**: `str | None`<br/>
Country where the port is located.

**country_code**: `str`<br/>
3-letter ISO country code of the country where the port is located.

**portcalls**: `int`<br/>
Total number of ships entering the port at this date. This is the sum of portcalls_container, portcalls_dry_bulk, portcalls_general_cargo, portcalls_roro and portcalls_tanker.

**portcalls_tanker**: `int`<br/>
Number of tankers transiting through the chokepoint or making a port call.

**portcalls_container**: `int`<br/>
Number of containers transiting through the chokepoint or making a port call.

**portcalls_general_cargo**: `int`<br/>
Number of general cargo ships transiting through the chokepoint or making a port call.

**portcalls_dry_bulk**: `int`<br/>
Number of dry bulk carriers transiting through the chokepoint or making a port call.

**portcalls_roro**: `int`<br/>
Number of Ro-Ro ships transiting through the chokepoint or making a port call.

**imports**: `float`<br/>
Total import volume (in metric tons) of all ships entering the port at this date. This is the sum of import_container, import_dry_bulk, import_general_cargo, import_roro and import_tanker.

**imports_cargo**: `float`<br/>
Total import volume (in metric tons) of all ships (excluding tankers) entering the port at this date. This is the sum of import_container, import_dry_bulk, import_general_cargo and import_roro.

**imports_tanker**: `float`<br/>
Total import volume (in metric tons) of tankers entering the port at this date.

**imports_container**: `float`<br/>
Total import volume (in metric tons) of all container ships entering the port at this date.

**imports_general_cargo**: `float`<br/>
Total import volume (in metric tons) of general cargo ships entering the port at this date.

**imports_dry_bulk**: `float`<br/>
Total import volume (in metric tons) of dry bulk carriers entering the port at this date.

**imports_roro**: `float`<br/>
Total import volume (in metric tons) of Ro-Ro ships entering the port at this date.

**exports**: `float`<br/>
Total export volume (in metric tons) of all ships entering the port at this date. This is the sum of export_container, export_dry_bulk, export_general_cargo, export_roro and export_tanker.

**exports_cargo**: `float`<br/>
Total export volume (in metric tons) of all ships (excluding tankers) entering the port at this date. This is the sum of export_container, export_dry_bulk, export_general_cargo and export_roro.

**exports_tanker**: `float`<br/>
Total export volume (in metric tons) of tankers entering the port at this date.

**exports_container**: `float`<br/>
Total export volume (in metric tons) of all container ships entering the port at this date.

**exports_general_cargo**: `float`<br/>
Total export volume (in metric tons) of general cargo ships entering the port at this date.

**exports_dry_bulk**: `float`<br/>
Total export volume (in metric tons) of dry bulk carriers entering the port at this date.

**exports_roro**: `float`<br/>
Total export volume (in metric tons) of Ro-Ro ships entering the port at this date.

</TabItem>
</Tabs>

