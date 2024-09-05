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

<<<<<<< HEAD
<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/upload_file.png" />
</div>
=======
<!-- @TODO ADD IMAGE -->
>>>>>>> 8c872cfb815fb846036b6c35faaa87a67074ddd7

The current file size limit is 25MB. While we can support larger files, this is the maximum size that OpenBB Copilot can process effectively.

Once you upload your files, we automatically generate part of the metadata (namely the **name** and **description**) for the widget that will be created from this data. You can still update these fields if needed. Note: Enterprise customers can turn off such feature.

<<<<<<< HEAD
<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/metadata.png" />

After uploading the data and deciding on the metadata, you can access the created widget through the Search feature or the Data Connector page.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/search_widget.png" />

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/data_connector_widget.png" />

=======
<!-- @TODO ADD IMAGE -->

After uploading the data and deciding on the metadata, you can access the created widget through the Search feature or the Data Connector page.

<!-- @TODO ADD IMAGE -->
>>>>>>> 8c872cfb815fb846036b6c35faaa87a67074ddd7

There are two main types of files supported

## Structured Data

The most common file types for structured data are XLSX, JSON and CSV. Currently, XLSX is only supported with a single sheet. Here are some examples of what a widget that is created from structured data looks like:

<<<<<<< HEAD
<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/structured_data.png" />
=======
<!-- @TODO ADD IMAGE -->
>>>>>>> 8c872cfb815fb846036b6c35faaa87a67074ddd7

## Unstructured Data

There are 3 types of unstructured data that can be brought in:

- Images (PNG and JPG)
- PDF
- Text (TXT and DOCX)

Here is how these widgets look in practice:

<<<<<<< HEAD
<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/unstructured_data.png" />


=======
<!-- @TODO ADD IMAGE -->
>>>>>>> 8c872cfb815fb846036b6c35faaa87a67074ddd7
