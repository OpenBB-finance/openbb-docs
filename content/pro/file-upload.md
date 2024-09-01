---
title: File Upload
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

The current file size limit is 25MB. While we can support larger files, this is the maximum size that OpenBB Copilot can process effectively.

Once you upload your files, we automatically generate the Name, Description, and Category for each file to make the process as quick and easy as possible. However, you can still update these fields if needed. After uploading, you can access your files through the Search feature or the Data Connector page.

[ADD IMAGE]

## Structured Data
The most common file types for structured data are XLSX and CSV. Currently, we only support XLSX files with a single sheet, but we plan to support multi-sheet XLSX files in the future. 

[ADD IMAGE]


## Unstructured Data
In addition to structured data, we also support other formats such as TXT, PDF, and images (PNG & JPEG). Our Copilot is equipped to handle a variety of tasks, including document summarization and extracting details from images, then converting them into table formats.

[ADD IMAGE]
