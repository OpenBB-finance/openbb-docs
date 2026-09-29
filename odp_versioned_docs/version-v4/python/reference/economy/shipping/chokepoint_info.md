---
title: "chokepoint_info"
description: "Get general metadata and statistics for all maritime chokepoint locations from a given provider"
keywords:
- economy
- shipping
- chokepoint_info
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="economy/shipping/chokepoint_info - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get general metadata and statistics for all maritime chokepoint locations from a given provider.

Examples
--------

```python
from openbb import obb
obb.economy.shipping.chokepoint_info()
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='imf' label='imf'>

**theme**: `Literal['dark', 'light'] | None`<br/>
Theme for the map. Only valid if `openbb-charting` is installed and `chart` parameter is set to `true`. Default is the 'chart_style' setting in `user_settings.json`, if available, otherwise 'dark'.

</TabItem>
</Tabs>

---

## Returns

**results**: `MaritimeChokePointInfo`

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

**chokepoint_code**: `str`<br/>
Unique ID assigned to the chokepoint by the source.

</TabItem>
<TabItem value='imf' label='imf'>

**chokepoint_code**: `str`<br/>
Unique ID assigned to the chokepoint by the source.

**name**: `str`<br/>
Port name.

**latitude**: `float`<br/>
Latitude of the chokepoint location.

**longitude**: `float`<br/>
Longitude of the chokepoint location.

**vessel_count_total**: `int`<br/>
Yearly average number of all ships transiting through the chokepoint. Estimated using AIS data beginning 2019. The total is calculated over the sum of vessel_count_container, vessel_count_dry_bulk, vessel_count_general_cargo, vessel_count_roro and vessel_count_tanker.

**vessel_count_tanker**: `int`<br/>
Yearly average number of tankers transiting through the chokepoint. Estimated using AIS data beginning 2019.

**vessel_count_container**: `int`<br/>
Yearly average number of containers transiting through the chokepoint. Estimated using AIS data beginning 2019.

**vessel_count_general_cargo**: `int`<br/>
Yearly average number of general cargo ships transiting through the chokepoint. Estimated using AIS data beginning 2019.

**vessel_count_dry_bulk**: `int`<br/>
Yearly average number of dry bulk carriers transiting through the chokepoint. Estimated using AIS data beginning 2019.

**vessel_count_roro**: `int`<br/>
Yearly average number of Ro-Ro ships transiting through the chokepoint. Estimated using AIS data beginning 2019.

**industry_top1**: `str | None`<br/>
First dominant traded industries based on the volume of goods estimated to flow through the chokepoint.

**industry_top2**: `str | None`<br/>
Second dominant traded industries based on the volume of goods estimated to flow through the chokepoint.

**industry_top3**: `str | None`<br/>
Third dominant traded industries based on the volume of goods estimated to flow through the chokepoint.

</TabItem>
</Tabs>

