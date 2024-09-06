---
title: Upload Files
sidebar_position: 10
description: Learn how to upload both structured and unstructured data to OpenBB Terminal with just a few clicks.
keywords:
- Single Widget
- Data Connectors
- API Endpoints
- Data Integration
- User-friendly Table Format
- Additional Headers
- Data Key Parameter
- Nested JSON
- Custom Backend
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="File Upload| OpenBB Terminal Docs" />

Uploading files is the easiest way to import data into Terminal. You can add one or multiple files at once, with support for formats like PDF, CSV, JSON, PNG, and JPG. Simply select your files—whether in different formats or the same—or drag them into the Add Data pop-up.

<!-- @TODO ADD IMAGE -->

The current file size limit is 25MB. While we can support larger files, this is the maximum size that OpenBB Copilot can process effectively.

Once you upload your files, we automatically generate part of the metadata (namely the **name** and **description**) for the widget that will be created from this data. You can still update these fields if needed. Note: Enterprise customers can turn off such feature.

<!-- @TODO ADD IMAGE -->

After uploading the data and deciding on the metadata, you can access the created widget through the Search feature or the Data Connector page.

<!-- @TODO ADD IMAGE -->

There are two main types of files supported

## Structured Data

The most common file types for structured data are XLSX, JSON and CSV. Currently, XLSX is only supported with a single sheet. Here are some examples of what a widget that is created from structured data looks like:

<!-- @TODO ADD IMAGE -->

## Unstructured Data

There are 3 types of unstructured data that can be brought in:

- Images (PNG and JPG)
- PDF
- Text (TXT and DOCX)

Here is how these widgets look in practice:

<!-- @TODO ADD IMAGE -->
