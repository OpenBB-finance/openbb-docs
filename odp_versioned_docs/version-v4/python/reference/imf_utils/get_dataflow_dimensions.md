---
title: "get_dataflow_dimensions"
description: "Dataflow parameters and possible values"
keywords:
- imf_utils
- get_dataflow_dimensions
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="imf_utils/get_dataflow_dimensions - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Dataflow parameters and possible values.

Returns an OBBject containing either a JSON dictionary of parameters
and their options, or a markdown string under the 'results' attribute.

Examples
--------

```python
from openbb import obb
# Get parameters for the 'CPI' dataflow.
imf_params = obb.imf.utils.get_dataflow_dimensions('CPI')
print(imf_params.results)
# Get parameters for the 'GFS_BS' dataflow in markdown format.
obb.imf_utils.get_dataflow_dimensions(dataflow_id='GFS_BS', output_format='markdown')
# Get parameters for the 'IL' dataflow in JSON format.
obb.imf_utils.get_dataflow_dimensions(dataflow_id='IL', output_format='json')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**dataflow_id**: `str`<br/>
The IMF dataflow ID. Use `list_dataflows()` to see available dataflows.

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
