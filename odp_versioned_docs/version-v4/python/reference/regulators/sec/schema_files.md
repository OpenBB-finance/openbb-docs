---
title: "schema_files"
description: "Get lists of SEC XML schema files by year with the OBBect function. Returns  serializable results, provider name, warnings list, chart object, metadata info,  and data including a list of URLs to SEC Schema Files."
keywords:
- SEC XML schema files
- SEC XML schema files by year
- get SEC XML schema files
- OBBect
- Serializable results
- provider name
- warnings list
- chart object
- metadata info
- fetch URL path
- data
- list of URLs to SEC Schema Files
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="regulators/sec/schema_files - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Explore SEC and FASB XBRL taxonomy schemas, labels, and presentation structures.

- No parameters: list all available taxonomy families.
- taxonomy only: get all parsed structures for the most recent year.
- taxonomy + year: get all parsed structures for a specific year.
- taxonomy + component: get one component's structure using the most recent year.
- taxonomy + year + component: get one component's parsed structure.

Examples
--------

```python
from openbb import obb
obb.regulators.sec.schema_files()
# Explore XBRL taxonomies progressively.
# list all available taxonomy families
obb.regulators.sec.schema_files(provider='sec')
# list components for US GAAP (latest year)
obb.regulators.sec.schema_files(taxonomy='us-gaap', provider='sec')
# list presentation components for US GAAP 2024
obb.regulators.sec.schema_files(taxonomy='us-gaap', year=2024, provider='sec')
# Get the Statement of Income presentation structure
obb.regulators.sec.schema_files(taxonomy='us-gaap', year=2024, component='soi', provider='sec')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='sec' label='sec'>

**taxonomy**: `Literal['us-gaap', 'srt', 'dei', 'ecd', 'cyd', 'ffd', 'ifrs', 'hmrc-dpl', 'rxp', 'spac', 'cef', 'oef', 'vip', 'fnd', 'sro', 'sbs', 'rocr', 'country', 'currency', 'exch', 'naics', 'sic', 'stpr', 'snj'] | None`<br/>
Taxonomy family to explore. Omit to list all available taxonomies and their descriptions.

**year**: `int | None`<br/>
Taxonomy year (e.g. 2011+ for us-gaap, varies by taxonomy). Defaults to the most recent year when omitted.

**component**: `str | None`<br/>
Presentation component to retrieve. Values are taxonomy-specific. Omit to return all components for the taxonomy.

**category**: `Literal['operating_company', 'investment_company', 'self_regulatory_org', 'sbs_repository', 'nrsro', 'common_reference'] | None`<br/>
Filter taxonomies by SEC filer category.

</TabItem>
</Tabs>

---

## Returns

**results**: `SchemaFiles`

Serializable results.

**provider**: `Optional[Literal['sec']]`

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

</TabItem>
<TabItem value='sec' label='sec'>

**name**: `str`<br/>
Identifier: taxonomy key, year, component name, or XBRL element ID depending on the query mode.

**label**: `str | None`<br/>
Human-readable label.

**description**: `str | None`<br/>
Description or long name.

**category**: `str | None`<br/>
Taxonomy category (e.g., operating_company).

**style**: `str | None`<br/>
Taxonomy style (e.g., FASB_STANDARD, SEC_EMBEDDED).

**has_label_linkbase**: `bool | None`<br/>
Whether the taxonomy has a parseable label linkbase.

**url**: `str | None`<br/>
URL to the taxonomy resource or SEC reference page.

**level**: `int | None`<br/>
Hierarchy depth in presentation structure (0 = root).

**order**: `float | None`<br/>
Sort order within parent in presentation structure.

**parent_id**: `str | None`<br/>
Parent XBRL element ID in presentation structure.

**preferred_label**: `str | None`<br/>
Preferred label role URI for presentation rendering.

**xbrl_type**: `str | None`<br/>
XBRL data type (e.g., monetaryItemType, textBlockItemType, stringItemType, sharesItemType, perShareItemType, domainItemType).

**period_type**: `str | None`<br/>
Period type: 'instant' (point-in-time) or 'duration' (over a period).

**balance_type**: `str | None`<br/>
Balance type for monetary items: 'credit' or 'debit'.

**abstract**: `bool | None`<br/>
Whether the element is abstract (grouping/heading only, not taggable).

**substitution_group**: `str | None`<br/>
XBRL substitution group: 'item' (line item), 'dimensionItem' (axis), 'hypercubeItem' (table).

**nillable**: `bool | None`<br/>
Whether the element value can be nil.

</TabItem>
</Tabs>

