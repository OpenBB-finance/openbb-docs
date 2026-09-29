---
title: "port_info"
description: "Get general metadata and statistics for all ports from a given provider"
keywords:
- economy
- shipping
- port_info
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="economy/shipping/port_info - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get general metadata and statistics for all ports from a given provider.

Examples
--------

```python
from openbb import obb
obb.economy.shipping.port_info()
obb.economy.shipping.port_info(continent='asia_pacific')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='imf' label='imf'>

**continent**: `Literal['north_america', 'europe', 'asia_pacific', 'south_america', 'africa'] | None`<br/>
Filter by continent. This parameter is ignored when a `country` is provided.

**country**: `Literal['ABW', 'AGO', 'AIA', 'ALB', 'ARE', 'ARG', 'ASM', 'ATG', 'AUS', 'AZE', 'BEL', 'BEN', 'BES', 'BGD', 'BGR', 'BHR', 'BHS', 'BLM', 'BLZ', 'BRA', 'BRB', 'BRN', 'CAN', 'CHL', 'CHN', 'CIV', 'CMR', 'COD', 'COG', 'COK', 'COL', 'COM', 'CPV', 'CRI', 'CUB', 'CUW', 'CYM', 'CYP', 'DEU', 'DJI', 'DMA', 'DNK', 'DOM', 'DZA', 'ECU', 'EGY', 'ERI', 'ESP', 'EST', 'FIN', 'FJI', 'FRA', 'FRO', 'FSM', 'GAB', 'GBR', 'GEO', 'GHA', 'GIB', 'GIN', 'GLP', 'GMB', 'GNB', 'GNQ', 'GRC', 'GRD', 'GTM', 'GUF', 'GUM', 'GUY', 'HKG', 'HND', 'HRV', 'HTI', 'IDN', 'IND', 'IRL', 'IRN', 'IRQ', 'ISL', 'ISR', 'ITA', 'JAM', 'JOR', 'JPN', 'KAZ', 'KEN', 'KHM', 'KIR', 'KNA', 'KOR', 'KWT', 'LBN', 'LBR', 'LBY', 'LCA', 'LKA', 'LTU', 'LVA', 'MAC', 'MAF', 'MAR', 'MDA', 'MDG', 'MDV', 'MEX', 'MHL', 'MLT', 'MMR', 'MNE', 'MNP', 'MOZ', 'MRT', 'MSR', 'MTQ', 'MUS', 'MYS', 'MYT', 'NAM', 'NCL', 'NGA', 'NIC', 'NLD', 'NOR', 'NRU', 'NZL', 'OMN', 'PAK', 'PAN', 'PER', 'PHL', 'PLW', 'PNG', 'POL', 'PRI', 'PRT', 'PYF', 'QAT', 'REU', 'ROU', 'RUS', 'SAU', 'SDN', 'SEN', 'SGP', 'SLB', 'SLE', 'SLV', 'SOM', 'STP', 'SUR', 'SVN', 'SWE', 'SXM', 'SYC', 'SYR', 'TCA', 'TGO', 'THA', 'TKM', 'TLS', 'TON', 'TTO', 'TUN', 'TUR', 'TUV', 'TWN', 'TZA', 'UKR', 'URY', 'USA', 'VCT', 'VEN', 'VGB', 'VIR', 'VNM', 'VUT', 'WSM', 'YEM', 'ZAF'] | None`<br/>
Country to focus on. Enter as a 3-letter ISO country code. This parameter supersedes `continent` if both are provided.

**port_code**: `str | None`<br/>
This is a dummy parameter to allow grouping in OpenBB Workspace widgets.

**limit**: `int | None`<br/>
Limit the number of results returned. Limit is determined by the annual average number of vessels transiting through the port. If not provided, all ports are returned.

</TabItem>
</Tabs>

---

## Returns

**results**: `PortInfo`

Serializable results.

**provider**: `Optional[Literal['imf']]`

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

**port_code**: `str`<br/>
Unique ID assigned to the port by the source.

</TabItem>
<TabItem value='imf' label='imf'>

**port_code**: `str`<br/>
Unique ID assigned to the port.

**continent**: `str`<br/>
Continent where the port is located.

**country**: `str`<br/>
Country where the port is located.

**country_code**: `str`<br/>
3-letter ISO code of the country where the port is located.

**port_name**: `str`<br/>
Port name.

**port_full_name**: `str`<br/>
Full name of the port.

**latitude**: `float`<br/>
Latitude of the port.

**longitude**: `float`<br/>
Longitude of the port.

**vessel_count_total**: `int`<br/>
Yearly average number of all ships transiting through the port. Estimated using AIS data beginning 2019. The total is calculated over the sum of vessel_count_container, vessel_count_dry_bulk, vessel_count_general_cargo, vessel_count_roro and vessel_count_tanker.

**vessel_count_tanker**: `int`<br/>
Yearly average number of tankers transiting through the port. Estimated using AIS data beginning 2019.

**vessel_count_container**: `int`<br/>
Yearly average number of containers transiting through the port. Estimated using AIS data beginning 2019.

**vessel_count_general_cargo**: `int`<br/>
Yearly average number of general cargo ships transiting through the port. Estimated using AIS data beginning 2019.

**vessel_count_dry_bulk**: `int`<br/>
Yearly average number of dry bulk carriers transiting through the port. Estimated using AIS data beginning 2019.

**vessel_count_roro**: `int`<br/>
Yearly average number of Ro-Ro ships transiting through the port. Estimated using AIS data beginning 2019.

**industry_top1**: `str | None`<br/>
First dominant traded industries based on the volume of goods estimated to flow through the port.

**industry_top2**: `str | None`<br/>
Second dominant traded industries based on the volume of goods estimated to flow through the port.

**industry_top3**: `str | None`<br/>
Third dominant traded industries based on the volume of goods estimated to flow through the port.

**share_country_maritime_import**: `float`<br/>
Share of the total maritime imports of the country that are estimated to flow through the port.

**share_country_maritime_export**: `float`<br/>
Share of the total maritime exports of the country that are estimated to flow through the port.

</TabItem>
</Tabs>

