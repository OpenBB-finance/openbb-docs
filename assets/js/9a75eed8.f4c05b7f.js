"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2631],{70618:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var r=t(74848),i=t(28453);const s={title:"Column and Cell Rendering",sidebar_position:5,description:"Learn how to configure column and cell rendering for widgets in OpenBB Terminal Pro using the widgets.json file.",keywords:["widgets.json","OpenBB API","Column rendering","Cell rendering","Widget configuration","Data visualization"]},d="Column and Cell Rendering",l={id:"terminal/custom-backend/Widgets/table/Column and Cell Rendering",title:"Column and Cell Rendering",description:"Learn how to configure column and cell rendering for widgets in OpenBB Terminal Pro using the widgets.json file.",source:"@site/content/terminal/custom-backend/Widgets/table/Column and Cell Rendering.md",sourceDirName:"terminal/custom-backend/Widgets/table",slug:"/terminal/custom-backend/Widgets/table/Column and Cell Rendering",permalink:"/terminal/custom-backend/Widgets/table/Column and Cell Rendering",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/custom-backend/Widgets/table/Column and Cell Rendering.md",tags:[],version:"current",lastUpdatedBy:"Andrew",lastUpdatedAt:1739462555e3,sidebarPosition:5,frontMatter:{title:"Column and Cell Rendering",sidebar_position:5,description:"Learn how to configure column and cell rendering for widgets in OpenBB Terminal Pro using the widgets.json file.",keywords:["widgets.json","OpenBB API","Column rendering","Cell rendering","Widget configuration","Data visualization"]},sidebar:"tutorialSidebar",previous:{title:"Table",permalink:"/terminal/custom-backend/Widgets/table/"},next:{title:"Chart",permalink:"/terminal/custom-backend/Widgets/chart/"}},c={},o=[{value:"Column Definitions",id:"column-definitions",level:2},{value:"Example Configuration",id:"example-configuration",level:2},{value:"Customizing Cell Rendering",id:"customizing-cell-rendering",level:2},{value:"Cell Data Type",id:"cell-data-type",level:2},{value:"Formatter Function",id:"formatter-function",level:2}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"column-and-cell-rendering",children:"Column and Cell Rendering"}),"\n",(0,r.jsx)(n.p,{children:"When creating a table widget, you can customize the columns and cells to create many different data visualization options. Below are the key components and settings you can use to define column and cell rendering:"}),"\n",(0,r.jsx)(n.h2,{id:"column-definitions",children:"Column Definitions"}),"\n",(0,r.jsxs)(n.p,{children:["Each widgets.json entry for your table widget can have a ",(0,r.jsx)(n.code,{children:"columnsDefs"})," property that defines the columns for the table. ",(0,r.jsx)(n.strong,{children:"Note that setting columnsDefs is entirely optional"})," - tables will work with default settings, and columnsDefs should only be used when you need to fine-tune the visualization."]}),"\n",(0,r.jsx)(n.p,{children:"When defined, columnsDefs is an array of column definitions, each with the following properties:"}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{mdxType:"summary",children:"Column and Cell Properties"}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"field"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","The name of the field from the JSON data. Must match a key in the data source.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:'"strike_price"'})]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"headerName"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","The display name of the column header shown in the widget.\n",(0,r.jsx)(n.em,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:'"Strike Price"'})]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"cellDataType"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Defines the data type of the cell.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Possible values:"})," ",(0,r.jsx)(n.code,{children:'"text"'}),", ",(0,r.jsx)(n.code,{children:'"number"'}),", ",(0,r.jsx)(n.code,{children:'"boolean"'}),", ",(0,r.jsx)(n.code,{children:'"date"'}),", ",(0,r.jsx)(n.code,{children:'"dateString"'}),", ",(0,r.jsx)(n.code,{children:'"object"'}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:'"text"'})]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"formatterFn"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Specifies a function to format the data.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Possible values:"})," ",(0,r.jsx)(n.code,{children:'"int"'}),", ",(0,r.jsx)(n.code,{children:'"none"'}),", ",(0,r.jsx)(n.code,{children:'"percent"'}),", ",(0,r.jsx)(n.code,{children:'"normalized"'}),", ",(0,r.jsx)(n.code,{children:'"normalizedPercent"'}),", ",(0,r.jsx)(n.code,{children:'"dateToYear"'}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:'"none"'})]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"renderFn"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"string"}),"\nSpecifies a rendering function for cell data.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Possible values:"})," ",(0,r.jsx)(n.code,{children:'"greenRed"'}),", ",(0,r.jsx)(n.code,{children:'"titleCase"'}),", ",(0,r.jsx)(n.code,{children:'"cellOnClick"'})]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"renderFnParams"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"object"}),(0,r.jsx)(n.br,{}),"\n","Parameters for the render function.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:'{"actionType": "groupBy"}'})]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"width"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"number"}),(0,r.jsx)(n.br,{}),"\n","The width of the column in pixels."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"maxWidth"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"number"}),(0,r.jsx)(n.br,{}),"\n","The maximum width of the column in pixels."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"minWidth"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"number"}),(0,r.jsx)(n.br,{}),"\n","The minimum width of the column in pixels."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"hide"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean"}),(0,r.jsx)(n.br,{}),"\n","Whether to hide the column from the table.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"false"})]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"pinned"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Pins the column to the left or right of the table.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Possible values:"})," ",(0,r.jsx)(n.code,{children:'"left"'}),", ",(0,r.jsx)(n.code,{children:'"right"'})]})]}),"\n",(0,r.jsx)(n.h2,{id:"example-configuration",children:"Example Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["Below is an example of how you might configure your columns in the ",(0,r.jsx)(n.code,{children:"widgets.json"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'"columnsDefs": [\n    {\n        "field": "column1",\n        "headerName": "Column 1",\n        "cellDataType": "text",\n        "formatterFn": "none",\n        "renderFn": "titleCase",\n        "width": 100,\n        "maxWidth": 200,\n        "minWidth": 50,\n        "hide": false,\n        "pinned": "left"\n    },\n    {\n        "field": "column2",\n        "headerName": "Column 2",\n        "cellDataType": "number",\n        "formatterFn": "int",\n        "renderFn": "greenRed",\n        "width": 150\n    }\n]\n'})}),"\n",(0,r.jsx)(n.h2,{id:"customizing-cell-rendering",children:"Customizing Cell Rendering"}),"\n",(0,r.jsxs)(n.p,{children:["Cell rendering can be customized using the ",(0,r.jsx)(n.code,{children:"renderFn"})," property, which allows you to apply specific styles or transformations to the data. For example, using ",(0,r.jsx)(n.code,{children:'"greenRed"'})," can visually indicate positive or negative values, while ",(0,r.jsx)(n.code,{children:'"titleCase"'})," can format text data to title case. You can also use the ",(0,r.jsx)(n.code,{children:"cellOnClick"})," render function to group data by the cell value - see the ",(0,r.jsx)(n.a,{href:"/terminal/custom-backend/advanced-controls/grouping-and-parameters",children:"Grouping and Parameters"})," section for more details on this."]}),"\n",(0,r.jsx)(n.h2,{id:"cell-data-type",children:"Cell Data Type"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"cellDataType"})," property defines the data type of the cell, which affects how the data is displayed and interacted with in the widget. Here are the options available:"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Displays the data as plain text. Suitable for string data that does not require special formatting"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsxs)(n.td,{children:["Displays the data as a number. Can be formatted further using the ",(0,r.jsx)(n.a,{href:"#formatter-function",children:"formatter function"})," property"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Displays the data as a boolean value"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"date"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Displays the data as a date object. Can be formatted to show different date representations"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dateString"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Displays the data as a string representation of a date"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Displays the data as an object. Useful for complex data structures requiring custom rendering logic"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"formatter-function",children:"Formatter Function"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"formatterFn"})," property specifies a function used to format the data in the table. This allows for customization of how numerical and date data is presented. Here are the allowed values:"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Value"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Formats the number as an integer, removing any decimal places"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"none"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Does not apply any formatting to the number, displaying it as is"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"percent"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Adds a percentage sign to the number, which is useful for data that represents percentages"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"normalized"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Multiplies the number by 100, which can be useful for normalizing data to a percentage scale"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"normalizedPercent"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsxs)(n.td,{children:["Multiplies the number by 100 and adds a percentage sign, converting a decimal to a percentage (e.g., ",(0,r.jsx)(n.code,{children:"0.5"})," becomes ",(0,r.jsx)(n.code,{children:"50%"}),")"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dateToYear"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Converts a date to just the year, which is useful for summarizing date data to a yearly level"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>l});var r=t(96540);const i={},s=r.createContext(i);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);