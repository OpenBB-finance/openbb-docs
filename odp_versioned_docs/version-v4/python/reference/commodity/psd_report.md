---
title: "psd_report"
description: "Agriculture commodity production, supply, and distribution PDF reports (World Agricultural Outlook)"
keywords:
- commodity
- psd_report
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="commodity/psd_report - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Agriculture commodity production, supply, and distribution PDF reports (World Agricultural Outlook).

This command returns only the results portion of the OBBject response.
It contains a dictionary where the PDF content is base64 encoded under the 'content' key.

Examples
--------

```python
from openbb import obb
obb.commodity.psd_report(commodity='sugar', year=2022, month=5)
# Get the PSD report for coffee for March 2023.
obb.commodity.psd_report(commodity='coffee', year=2023, month=3)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**commodity**: `str`<br/>
Commodity for the report.

<details>
<summary mdxType="summary">Choices</summary>

- citrus
- coffee
- cotton
- dairy
- fruit
- grain
- livestock
- oilseeds
- stone_fruit
- sugar
- tree_nuts
- world_production
</details>

**year**: `int`<br/>
Year of the report.

**month**: `int`<br/>
Month of the report.

</TabItem>
<TabItem value='government_us' label='government_us'>

**commodity**: `str`<br/>
Commodity for the report.

<details>
<summary mdxType="summary">Choices</summary>

- citrus
- coffee
- cotton
- dairy
- fruit
- grain
- livestock
- oilseeds
- stone_fruit
- sugar
- tree_nuts
- world_production
</details>

**year**: `int`<br/>
Year of the report.

**month**: `int`<br/>
Month of the report.

</TabItem>
</Tabs>

---

## Returns

Any
---
## Data

<Tabs>
<TabItem value='standard' label='standard'>

**content**: `str`<br/>
Base64 encoded content.

</TabItem>
<TabItem value='government_us' label='government_us'>

**content**: `str`<br/>
Base64 encoded content.

**data_format**: `dict[str, str] | None`<br/>
Data format information.

</TabItem>
</Tabs>

