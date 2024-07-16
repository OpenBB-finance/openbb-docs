---
title: desc
description: A page detailing how to use the 'desc' function to show descriptive statistics
  of a dataset, including parameters and usage examples.
keywords:
- dataset
- descriptive statistics
- data analysis
- query commands
- data visualization
- data loading
- TSLA
- usage examples
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="forecast /desc - Reference | OpenBB Terminal Docs" />

Show descriptive statistics of a dataset

### Usage

```python
desc [-d {}]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| target_dataset | The name of the dataset you want to select | None | True | None |


---

## Examples

```python
(🦋) /forecast/ $ load TSLA.csv

(🦋) /forecast/ $ desc TSLA

              Showing Descriptive Statistics for Dataset TSLA
┏━━━━━━━┳━━━━━━━━━┳━━━━━━━━━┳━━━━━━━━━┳━━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━━━━━━┓
┃       ┃ open    ┃ high    ┃ low     ┃ close   ┃ adj_close ┃ volume       ┃
┡━━━━━━━╇━━━━━━━━━╇━━━━━━━━━╇━━━━━━━━━╇━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━━━━━┩
│ count │ 611.00  │ 611.00  │ 611.00  │ 611.00  │ 611.00    │ 611.00       │
├───────┼─────────┼─────────┼─────────┼─────────┼───────────┼──────────────┤
│ mean  │ 599.50  │ 613.65  │ 583.85  │ 599.19  │ 599.19    │ 47275047.14  │
├───────┼─────────┼─────────┼─────────┼─────────┼───────────┼──────────────┤
│ std   │ 308.73  │ 315.33  │ 300.77  │ 307.95  │ 307.95    │ 35945322.23  │
├───────┼─────────┼─────────┼─────────┼─────────┼───────────┼──────────────┤
│ min   │ 74.94   │ 80.97   │ 70.10   │ 72.24   │ 72.24     │ 9800600.00   │
├───────┼─────────┼─────────┼─────────┼─────────┼───────────┼──────────────┤
│ 25%   │ 325.09  │ 332.00  │ 304.80  │ 316.07  │ 316.07    │ 23386000.00  │
├───────┼─────────┼─────────┼─────────┼─────────┼───────────┼──────────────┤
│ 50%   │ 661.42  │ 672.00  │ 644.60  │ 659.58  │ 659.58    │ 33337300.00  │
├───────┼─────────┼─────────┼─────────┼─────────┼───────────┼──────────────┤
│ 75%   │ 830.71  │ 846.82  │ 801.99  │ 822.97  │ 822.97    │ 62445150.00  │
├───────┼─────────┼─────────┼─────────┼─────────┼───────────┼──────────────┤
│ max   │ 1234.41 │ 1243.49 │ 1217.00 │ 1229.91 │ 1229.91   │ 304694000.00 │
└───────┴─────────┴─────────┴─────────┴─────────┴───────────┴──────────────┘
```
---