---
title: Static Files
sidebar_position: 14
description: Learn how to import and manage static files in OpenBB, including structured and unstructured data formats, with support for PDF, CSV, JSON, PNG, and JPG files.
keywords:
- file import
- data import
- structured data
- unstructured data
- file formats
- data management
- file upload
- data visualization
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Static Files | OpenBB Workspace Docs" />

OpenBB provides a powerful and intuitive way to import data through file uploads. This feature supports a wide range of file formats, allowing you to seamlessly integrate both structured and unstructured data into your analysis workflow.

## File Upload Process

The file upload interface offers a straightforward way to import your data. You can either select files individually or drag and drop them into the Add Data pop-up window. This flexibility supports importing multiple files simultaneously, regardless of their format.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="File upload interface showing the Add Data pop-up" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/upload_file.png" />
</div>

### File Size Limitations

To ensure optimal performance and processing capabilities, OpenBB maintains a 25MB file size limit. While the system can technically handle larger files, this limit ensures that OpenBB Copilot can process your data effectively and provide meaningful insights.

### Metadata Management

Upon uploading your files, OpenBB automatically generates initial metadata for the widget, including the name and description. You have the flexibility to modify these fields to better suit your needs. Note that Enterprise customers can customize this automatic metadata generation feature.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="Metadata configuration interface" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/metadata.png" />
</div>

### Accessing Uploaded Data

Once you've uploaded and configured your data, you can access the resulting widget through two primary methods:

1. The Search feature, which provides quick access to all your widgets
2. The Data Connector page, which offers a comprehensive view of your data sources

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="Search interface showing widget results" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/search_widget.png" />
</div>

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="Data Connector interface showing available widgets" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/data_connector_widget.png" />
</div>

## Supported File Types

OpenBB supports two main categories of data files, each with specific use cases and visualization capabilities.

### Structured Data

Structured data files, including XLSX, JSON, and CSV formats, are ideal for quantitative analysis and data processing. Currently, XLSX files are limited to single-sheet imports. The system automatically converts these files into interactive widgets that display your data in a clear, organized format.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="Example of structured data visualization" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/structured_data.png" />
</div>

### Unstructured Data

OpenBB supports three types of unstructured data, each serving different analytical needs:

- Images (PNG and JPG): Perfect for visual analysis and documentation
- PDF Documents: Ideal for research papers, reports, and documentation
- Text Files (TXT and DOCX): Suitable for notes, research, and qualitative analysis

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="Example of unstructured data visualization" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/unstructured_data.png" />
</div>
