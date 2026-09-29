---
title: "Maritime Choke Point Volume"
description: "Daily transit calls and estimates of transit trade volumes for shipping lane chokepoints around the world"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `MaritimeChokePointVolume` | `MaritimeChokePointVolumeQueryParams` | `MaritimeChokePointVolumeData` |

### Import Statement

```python
from openbb_core.provider.standard_models.maritime_chokepoint_volume import (
MaritimeChokePointVolumeData,
MaritimeChokePointVolumeQueryParams,
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
<TabItem value='imf' label='imf'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**chokepoint**: `str | None`<br/>
<details>
<summary mdxType="summary">Description</summary>

Name of the chokepoint. Use `None` for all chokepoints. Choices are: <br/>
    - suez_canal<br/>
    - panama_canal<br/>
    - bosporus_strait<br/>
    - bab_el_mandeb_strait<br/>
    - malacca_strait<br/>
    - strait_of_hormuz<br/>
    - cape_of_good_hope<br/>
    - gibraltar_strait<br/>
    - dover_strait<br/>
    - oresund_strait<br/>
    - taiwan_strait<br/>
    - korea_strait<br/>
    - tsugaru_strait<br/>
    - luzon_strait<br/>
    - lombok_strait<br/>
    - ombai_strait<br/>
    - bohai_strait<br/>
    - torres_strait<br/>
    - sunda_strait<br/>
    - makassar_strait<br/>
    - magellan_strait<br/>
    - yucatan_channel<br/>
    - windward_passage<br/>
    - mona_passage<br/>
</details>

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | str`<br/>
The date of the data.

</TabItem>
<TabItem value='imf' label='imf'>

**date**: `date | str`<br/>
The date of the data.

**chokepoint**: `str`<br/>
Name of the chokepoint.

**vessels_total**: `int`<br/>
Number of all ships transiting through the chokepoint on that date. The total is calculated over the sum of vessels_container, vessels_dry_bulk, vessels_general_cargo, vessels_roro and vessels_tanker.

**vessels_cargo**: `int`<br/>
Total number of ships (excluding tankers) transiting through the chokepoint at this date. This is the sum of vessels_container, vessels_dry_bulk, vessels_general_cargo and vessels_roro.

**vessels_tanker**: `int`<br/>
Number of tankers transiting through the chokepoint on that date.

**vessels_container**: `int`<br/>
Number of containers transiting through the chokepoint on that date.

**vessels_general_cargo**: `int`<br/>
Number of general cargo ships transiting through the chokepoint on that date.

**vessels_dry_bulk**: `int`<br/>
Yearly average number of dry bulk carriers transiting through the chokepoint. Estimated using AIS data beginning 2019.

**vessels_roro**: `int`<br/>
Yearly average number of Ro-Ro ships transiting through the chokepoint. Estimated using AIS data beginning 2019.

**capacity_total**: `float`<br/>
Total trade volume (in metric tons) of all ships transiting through the chokepoint at this date. This is the sum of capacity_container, capacity_dry_bulk, capacity_general_cargo, capacity_roro and capacity_tanker.

**capacity_cargo**: `float`<br/>
Total trade volume (in metric tons) of all ships (excluding tankers) transiting through the chokepoint at this date. This is the sum of capacity_container, capacity_dry_bulk, capacity_general_cargo and capacity_roro.

**capacity_tanker**: `float`<br/>
Total trade volume (in metric tons) of tankers transiting through the chokepoint at this date.

**capacity_container**: `float`<br/>
Total trade volume (in metric tons) of containers transiting through the chokepoint at this date.

**capacity_general_cargo**: `float`<br/>
Total trade volume (in metric tons) of general cargo Vessels transiting through the chokepoint at this date.

**capacity_dry_bulk**: `float`<br/>
Total trade volume (in metric tons) of dry bulk carriers transiting through the chokepoint at this date.

**capacity_roro**: `float`<br/>
Total trade volume (in metric tons) of Ro-Ro ships transiting through the chokepoint at this date.

</TabItem>
</Tabs>

