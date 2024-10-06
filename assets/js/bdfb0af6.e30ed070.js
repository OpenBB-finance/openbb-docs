"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8088],{71179:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var n=a(74848),s=a(28453),r=a(94331);const o={title:"Upload Files",sidebar_position:11,description:"Learn how to upload both structured and unstructured data to OpenBB Terminal with just a few clicks.",keywords:["Single Widget","Data Connectors","API Endpoints","Data Integration","User-friendly Table Format","Additional Headers","Data Key Parameter","Nested JSON","Custom Backend"]},i=void 0,d={id:"pro/upload-files",title:"Upload Files",description:"Learn how to upload both structured and unstructured data to OpenBB Terminal with just a few clicks.",source:"@site/content/pro/upload-files.md",sourceDirName:"pro",slug:"/pro/upload-files",permalink:"/pro/upload-files",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/pro/upload-files.md",tags:[],version:"current",lastUpdatedBy:"minhhoang1023",lastUpdatedAt:172824527e4,sidebarPosition:11,frontMatter:{title:"Upload Files",sidebar_position:11,description:"Learn how to upload both structured and unstructured data to OpenBB Terminal with just a few clicks.",keywords:["Single Widget","Data Connectors","API Endpoints","Data Integration","User-friendly Table Format","Additional Headers","Data Key Parameter","Nested JSON","Custom Backend"]},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/pro/data-connector"},next:{title:"API Endpoints",permalink:"/pro/api-endpoints"}},l={},c=[{value:"Structured Data",id:"structured-data",level:2},{value:"Unstructured Data",id:"unstructured-data",level:2}];function u(e){const t={h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.A,{title:"File Upload| OpenBB Terminal Docs"}),"\n",(0,n.jsx)(t.p,{children:"Uploading files is the easiest way to import data into Terminal. You can add one or multiple files at once, with support for formats like PDF, CSV, JSON, PNG, and JPG. Simply select your files \u2014 whether in different formats or the same \u2014 or drag them into the Add Data pop-up."}),"\n",(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,n.jsx)("img",{className:"pro-border-gradient",width:"600",alt:"folder",src:"https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/upload_file.png"})}),"\n",(0,n.jsx)(t.p,{children:"The current file size limit is 25MB. While we can support larger files, this is the maximum size that OpenBB Copilot can process effectively."}),"\n",(0,n.jsxs)(t.p,{children:["Once you upload your files, we automatically generate part of the metadata (namely the ",(0,n.jsx)(t.strong,{children:"name"})," and ",(0,n.jsx)(t.strong,{children:"description"}),") for the widget that will be created from this data. You can still update these fields if needed. Note: Enterprise customers can turn off such feature."]}),"\n",(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,n.jsx)("img",{className:"pro-border-gradient",width:"600",alt:"folder",src:"https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/metadata.png"})}),"\n",(0,n.jsx)(t.p,{children:"After uploading the data and deciding on the metadata, you can access the created widget through the Search feature or the Data Connector page."}),"\n",(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,n.jsx)("img",{className:"pro-border-gradient",width:"600",alt:"folder",src:"https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/search_widget.png"})}),"\n",(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,n.jsx)("img",{className:"pro-border-gradient",width:"600",alt:"folder",src:"https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/data_connector_widget.png"})}),"\n",(0,n.jsx)(t.p,{children:"There are two main types of files supported"}),"\n",(0,n.jsx)(t.h2,{id:"structured-data",children:"Structured Data"}),"\n",(0,n.jsx)(t.p,{children:"The most common file types for structured data are XLSX, JSON and CSV. Currently, XLSX is only supported with a single sheet. Here are some examples of what a widget that is created from structured data looks like:"}),"\n",(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,n.jsx)("img",{className:"pro-border-gradient",width:"600",alt:"folder",src:"https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/structured_data.png"})}),"\n",(0,n.jsx)(t.h2,{id:"unstructured-data",children:"Unstructured Data"}),"\n",(0,n.jsx)(t.p,{children:"There are 3 types of unstructured data that can be brought in:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Images (PNG and JPG)"}),"\n",(0,n.jsx)(t.li,{children:"PDF"}),"\n",(0,n.jsx)(t.li,{children:"Text (TXT and DOCX)"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Here is how these widgets look in practice:"}),"\n",(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,n.jsx)("img",{className:"pro-border-gradient",width:"600",alt:"folder",src:"https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/unstructured_data.png"})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},94331:(e,t,a)=>{a.d(t,{A:()=>r});a(96540);var n=a(5260),s=a(74848);function r(e){let{title:t}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>i});var n=a(96540);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);