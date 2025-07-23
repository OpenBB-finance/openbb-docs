---
title: OBB.GET
sidebar_position: 3
description: Extract and slice specific data from Excel ranges using labels or indices
keywords:
- Microsoft Excel
- Add-in
- Advanced
- Slice data
- Data slicer
- Get specific fields
- Data extraction
- Excel ranges
---

<!-- markdownlint-disable MD033 -->
import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="OBB.GET | OpenBB Add-in for Excel Docs" />

The `OBB.GET` function is a powerful data extraction tool that allows you to precisely slice and extract specific portions of data from any array or range in Excel. It's particularly useful when working with data returned by other OpenBB functions, enabling you to focus on exactly the information you need.

## Key Features

- Extract specific rows, columns, or both from any data range
- Use either labels (like dates or column names) or numeric indices
- Support for single values, ranges, and arrays
- Negative indexing for accessing data from the end
- Flexible input formats for dates and text

## Syntax

```excel
=OBB.GET(array, [rows], [columns])
```

### Parameters

| Parameter | Type | Description | Required | Examples |
|-----------|------|-------------|----------|----------|
| array | Any | The source data range to slice. This can be any array, including results from other OBB functions. | Yes | `A1:D3`, `OBB.WIDGET(...)` |
| rows | Any | Row selection using labels or indices. Can be a single value, range, or array. | No | `"2023/09/30"`, `2`, `{1,3}`, `-1` |
| columns | Any | Column selection using labels or indices. Can be a single value, range, or array. | No | `"revenue"`, `3`, `{"A","C"}` |

### Return Value

Returns a subset of the input array based on the specified row and column selections. The return type matches the input data type.

## Examples

Suppose you have the following financial data in cells A1:D3:

| period_ending | revenue            | cost_of_revenue    | gross_profit       |
|---------------|--------------------|--------------------|--------------------|
| 2023/09/30    | 383 285 000 000.00 | 214 137 000 000.00 | 169 148 000 000.00 |
| 2022/09/24    | 394 328 000 000.00 | 223 546 000 000.00 | 170 782 000 000.00 |
| 2021/09/25    | 365 817 000 000.00 | 212 981 000 000.00 | 152 836 000 000.00 |

### Common Use Cases

1. **Get a Single Row by Date**

```excel
=OBB.GET(A1:D3, "2023/09/30")
```

Returns the entire row for September 30, 2023.

2. **Get a Single Column by Name**

```excel
=OBB.GET(A1:D3, , "revenue")
```

Returns all revenue values.

3. **Get a Single Cell by Index**

```excel
=OBB.GET(A1:D3, 2, 3)
```

Returns the value at row 2, column 3 (cost_of_revenue for 2022/09/24).

4. **Get Multiple Rows and Columns**

```excel
=OBB.GET(A1:D3, {"2023/09/30", "2021/09/25"}, {"cost_of_revenue", "gross_profit"})
```

Returns a 2x2 array with cost_of_revenue and gross_profit for 2023 and 2021.

5. **Using Negative Indices**

```excel
=OBB.GET(A1:D3, -1, -2)
```

Returns the last row and second-to-last column (gross_profit for 2021/09/25).

### Advanced Usage

1. **Using Cell References for Selections**

```excel
=OBB.GET(A1:D3, E1:E2, F1:F2)
```

Where E1:E2 contains dates and F1:F2 contains column names.

2. **Combining with Other OBB Functions**

```excel
=OBB.GET(OBB.WIDGET("My backend", "income_statement", {"ticker","AAPL";"year","2023"}), "2023/09/30", "revenue")
```

Directly extracts revenue from the income statement widget result.

## Best Practices

1. **Date Formats**
   - Use `YYYY/MM/DD` format for date labels
   - Use Excel's DATE function: `DATE(2023,9,30)`
   - Ensure dates match exactly with the data

2. **Column Names**
   - Use exact column names as they appear in the data
   - Case-sensitive matching
   - Include underscores and spaces exactly as in the data

3. **Performance**
   - For large datasets, prefer using indices over labels
   - Use cell references for repeated selections
   - Avoid unnecessary array operations

## Troubleshooting

| Issue | Solution |
|-------|----------|
| #N/A error | Verify that the row/column labels exist in the data |
| #VALUE! error | Check that the array parameter is valid |
| Empty result | Confirm that the selection criteria match the data format |
| Date not found | Ensure date format matches exactly (YYYY/MM/DD) |

## Notes

- When using date labels, ensure consistent date formatting across your workbook
- Column names are case-sensitive
- The function preserves the original data types of the selected cells
- Empty or invalid selections will return appropriate error values
- For best performance with large datasets, consider using numeric indices instead of labels
