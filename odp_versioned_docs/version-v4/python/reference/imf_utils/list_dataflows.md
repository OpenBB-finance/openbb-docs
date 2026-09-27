---
title: "list_dataflows"
description: "list all available IMF dataflows"
keywords:
- imf_utils
- list_dataflows
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="imf_utils/list_dataflows - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

list all available IMF dataflows.

Returns an OBBject containing either a JSON dictionary of dataflows
or a markdown string under the 'results' attribute.

Examples
--------

```python
from openbb import obb
# lists all known dataflows available from the IMF in JSON format.
obb.imf_utils.list_dataflows(output_format='json')
# Return the content as a markdown-formatted summary instead of a JSON table.
obb.imf_utils.list_dataflows(output_format='markdown')
# lists all known dataflows available from the IMF.
imf_dataflows = obb.imf.utils.list_dataflows()
print(imf_dataflows)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**output_format**: `Literal['json', 'markdown']`<br/>
*Default:* json<br/>
</TabItem>
</Tabs>

---

## Returns

**results**: `Any`

Serializable results.

**provider**: `str`

Provider name.

**warnings**: `Optional[list[Warning_]]`

list of warnings.

**chart**: `Optional[Chart]`

Chart object.

**extra**: `dict[str, Any]`

Extra info.

---
