---
title: Static Files
sidebar_position: 4
description: Upload and integrate your own files into OpenBB Workspace - transform spreadsheets, PDFs, and images into interactive dashboard widgets.
keywords:
- file upload
- static files
- custom data
- spreadsheet widgets
- PDF widgets
- image widgets
- proprietary data
- file integration
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Static Files | OpenBB Workspace Docs" />

OpenBB provides an intuitive way to import data through file uploads. This feature supports a wide range of file formats, allowing you to integrate both structured and unstructured data into your analysis workflow.

## File Upload Process

The file upload interface is straightforward. You can either drag and drop them onto the dashboard or select files individually in the Add Data pop-up window. This flexibility supports importing multiple files simultaneously, regardless of their format.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img
    className="pro-border-gradient"
    alt="File upload interface showing the Add Data pop-up"
    src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/upload_file.png"
    width="600"
  />
</div>

To ensure optimal performance for all application users, OpenBB maintains a 25MB file size limit.

### Metadata Management

Upon uploading your files, OpenBB automatically generates initial metadata for the widget, including the name and description. You might want to adjust these fields to better reflect the nuances of your data. Note that Enterprise customers can customize this automatic metadata generation feature.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img
    className="pro-border-gradient"
    alt="Metadata configuration interface"
    src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/metadata.png"
    width="600"
  />
</div>

### Accessing Uploaded Data

Once you've uploaded and configured your data, you can access the resulting widget through two primary methods:

1. The Search feature, which provides quick access to all your widgets
2. The Data Connector page, which offers a comprehensive view of your data sources

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img
    className="pro-border-gradient"
    alt="Search interface showing widget results"
    src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/search_widget.png"
    width="600"
  />
</div>

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img
    className="pro-border-gradient"
    alt="Data Connector interface showing available widgets"
    src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/data_connector_widget.png"
    width="600"
  />
</div>

## Supported File Types

OpenBB supports two main categories of data files, each with specific use cases and visualization capabilities.

### Structured Data

Structured data files, including XLSX, JSON, and CSV formats, are ideal for quantitative analysis and data processing. Currently, XLSX files are limited to single-sheet imports. The system automatically converts these files into interactive widgets that display your data in a clear, organized format.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img
    className="pro-border-gradient"
    alt="Example of structured data visualization"
    src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/structured_data.png"
    width="600"
  />
</div>

### Unstructured Data

OpenBB supports three types of unstructured data, each serving different analytical needs:

- Images (PNG and JPG): Perfect for visual analysis and documentation
- PDF Documents: Ideal for research papers, reports, and documentation
- Text Files (like TXT and DOCX): Suitable for notes, research, and qualitative analysis

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img
    className="pro-border-gradient"
    alt="Example of unstructured data visualization"
    src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/unstructured_data.png"
    width="600"
  />
</div>

Note that scanned images are better handled when uploaded as images (PNG or JPG) rather than PDFs.
