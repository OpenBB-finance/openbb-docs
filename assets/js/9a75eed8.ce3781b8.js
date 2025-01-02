"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2631],{70618:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var i=t(74848),d=t(28453);const r={title:"Column and Cell Rendering",sidebar_position:5,description:"Learn how to configure column and cell rendering for widgets in OpenBB Terminal Pro using the widgets.json file.",keywords:["widgets.json","OpenBB API","Column rendering","Cell rendering","Widget configuration","Data visualization"]},s="Column and Cell Rendering",l={id:"terminal/custom-backend/Widgets/table/Column and Cell Rendering",title:"Column and Cell Rendering",description:"Learn how to configure column and cell rendering for widgets in OpenBB Terminal Pro using the widgets.json file.",source:"@site/content/terminal/custom-backend/Widgets/table/Column and Cell Rendering.md",sourceDirName:"terminal/custom-backend/Widgets/table",slug:"/terminal/custom-backend/Widgets/table/Column and Cell Rendering",permalink:"/terminal/custom-backend/Widgets/table/Column and Cell Rendering",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/custom-backend/Widgets/table/Column and Cell Rendering.md",tags:[],version:"current",lastUpdatedBy:"Andrew",lastUpdatedAt:1735827799e3,sidebarPosition:5,frontMatter:{title:"Column and Cell Rendering",sidebar_position:5,description:"Learn how to configure column and cell rendering for widgets in OpenBB Terminal Pro using the widgets.json file.",keywords:["widgets.json","OpenBB API","Column rendering","Cell rendering","Widget configuration","Data visualization"]},sidebar:"tutorialSidebar",previous:{title:"Table Example",permalink:"/terminal/custom-backend/Widgets/table/"},next:{title:"Charting",permalink:"/terminal/custom-backend/Widgets/chart/"}},c={},a=[{value:"Column Definitions",id:"column-definitions",level:2},{value:"Example Configuration",id:"example-configuration",level:2},{value:"Customizing Cell Rendering",id:"customizing-cell-rendering",level:2},{value:"Cell Data Type",id:"cell-data-type",level:2},{value:"Formatter Function",id:"formatter-function",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"column-and-cell-rendering",children:"Column and Cell Rendering"}),"\n",(0,i.jsx)(n.p,{children:"When creating a table widget, you can customize the columns and cells to create many different data visualization options. Below are the key components and settings you can use to define column and cell rendering:"}),"\n",(0,i.jsx)(n.h2,{id:"column-definitions",children:"Column Definitions"}),"\n",(0,i.jsxs)(n.p,{children:["Each widgets.json entry for your table widget can have a ",(0,i.jsx)(n.code,{children:"columnsDefs"})," property that defines the columns for the table. ",(0,i.jsx)(n.strong,{children:"Note that setting columnsDefs is entirely optional"})," - tables will work with default settings, and columnsDefs should only be used when you need to fine-tune the visualization."]}),"\n",(0,i.jsx)(n.p,{children:"When defined, columnsDefs is an array of column definitions, each with the following properties:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Options/Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"field"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"The name of the field from the JSON data. Must match a key in the data source."}),(0,i.jsx)(n.td,{children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"headerName"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"The display name of the column header shown in the widget."}),(0,i.jsx)(n.td,{children:"Defaults to field name"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"cellDataType"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Defines the data type of the cell."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:'"text"'}),", ",(0,i.jsx)(n.code,{children:'"number"'}),", ",(0,i.jsx)(n.code,{children:'"boolean"'}),", ",(0,i.jsx)(n.code,{children:'"date"'}),", ",(0,i.jsx)(n.code,{children:'"dateString"'}),", ",(0,i.jsx)(n.code,{children:'"object"'}),". Defaults to ",(0,i.jsx)(n.code,{children:'"text"'})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"formatterFn"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Specifies a function to format the data."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:'"int"'}),", ",(0,i.jsx)(n.code,{children:'"none"'}),", ",(0,i.jsx)(n.code,{children:'"percent"'}),", ",(0,i.jsx)(n.code,{children:'"normalized"'}),", ",(0,i.jsx)(n.code,{children:'"normalizedPercent"'}),", ",(0,i.jsx)(n.code,{children:'"dateToYear"'}),". Defaults to ",(0,i.jsx)(n.code,{children:'"none"'})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"renderFn"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Specifies a rendering function for cell data."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:'"greenRed"'}),", ",(0,i.jsx)(n.code,{children:'"titleCase"'}),", ",(0,i.jsx)(n.code,{children:'"cellOnClick"'})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"renderFnParams"}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"Parameters for the render function."}),(0,i.jsxs)(n.td,{children:["Example: ",(0,i.jsx)(n.code,{children:'{"actionType": "groupBy"}'})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"width"}),(0,i.jsx)(n.td,{children:"number"}),(0,i.jsx)(n.td,{children:"The width of the column in pixels."}),(0,i.jsx)(n.td,{children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maxWidth"}),(0,i.jsx)(n.td,{children:"number"}),(0,i.jsx)(n.td,{children:"The maximum width of the column in pixels."}),(0,i.jsx)(n.td,{children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"minWidth"}),(0,i.jsx)(n.td,{children:"number"}),(0,i.jsx)(n.td,{children:"The minimum width of the column in pixels."}),(0,i.jsx)(n.td,{children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"hide"}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"Whether to hide the column from the table."}),(0,i.jsxs)(n.td,{children:["Defaults to ",(0,i.jsx)(n.code,{children:"false"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"pinned"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Pins the column to the left or right of the table."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:'"left"'})," or ",(0,i.jsx)(n.code,{children:'"right"'})]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"example-configuration",children:"Example Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["Below is an example of how you might configure your columns in the ",(0,i.jsx)(n.code,{children:"widgets.json"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"columnsDefs": [\n    {\n        "field": "column1",\n        "headerName": "Column 1",\n        "cellDataType": "text",\n        "formatterFn": "none",\n        "renderFn": "titleCase",\n        "width": 100,\n        "maxWidth": 200,\n        "minWidth": 50,\n        "hide": false,\n        "pinned": "left"\n    },\n    {\n        "field": "column2",\n        "headerName": "Column 2",\n        "cellDataType": "number",\n        "formatterFn": "int",\n        "renderFn": "greenRed",\n        "width": 150\n    }\n]\n'})}),"\n",(0,i.jsx)(n.h2,{id:"customizing-cell-rendering",children:"Customizing Cell Rendering"}),"\n",(0,i.jsxs)(n.p,{children:["Cell rendering can be customized using the ",(0,i.jsx)(n.code,{children:"renderFn"})," property, which allows you to apply specific styles or transformations to the data. For example, using ",(0,i.jsx)(n.code,{children:'"greenRed"'})," can visually indicate positive or negative values, while ",(0,i.jsx)(n.code,{children:'"titleCase"'})," can format text data to title case. You can also use the ",(0,i.jsx)(n.code,{children:"cellOnClick"})," render function to group data by the cell value - see the [Grouping and Parameters](/terminal/custom-backend/Advanced Controls/Grouping and Parameters) section for more details on this."]}),"\n",(0,i.jsx)(n.h2,{id:"cell-data-type",children:"Cell Data Type"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"cellDataType"})," property defines the data type of the cell, which affects how the data is displayed and interacted with in the widget. Here are the options available:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Displays the data as plain text. Suitable for string data that does not require special formatting"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"number"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsxs)(n.td,{children:["Displays the data as a number. Can be formatted further using the ",(0,i.jsx)(n.a,{href:"#formatter-function",children:"formatter function"})," property"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Displays the data as a boolean value"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"date"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Displays the data as a date object. Can be formatted to show different date representations"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"dateString"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Displays the data as a string representation of a date"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Displays the data as an object. Useful for complex data structures requiring custom rendering logic"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"formatter-function",children:"Formatter Function"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"formatterFn"})," property specifies a function used to format the data in the table. This allows for customization of how numerical and date data is presented. Here are the allowed values:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Value"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Formats the number as an integer, removing any decimal places"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"none"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Does not apply any formatting to the number, displaying it as is"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"percent"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Adds a percentage sign to the number, which is useful for data that represents percentages"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"normalized"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Multiplies the number by 100, which can be useful for normalizing data to a percentage scale"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"normalizedPercent"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsxs)(n.td,{children:["Multiplies the number by 100 and adds a percentage sign, converting a decimal to a percentage (e.g., ",(0,i.jsx)(n.code,{children:"0.5"})," becomes ",(0,i.jsx)(n.code,{children:"50%"}),")"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"dateToYear"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Converts a date to just the year, which is useful for summarizing date data to a yearly level"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var i=t(96540);const d={},r=i.createContext(d);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);