"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42652],{89089:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=t(74848),s=t(28453);const r={},o=void 0,i={id:"terminal/custom-backend/Advanced Controls/Grouping and Parameters",title:"Grouping and Parameters",description:"Grouping and Parameters",source:"@site/content/terminal/custom-backend/Advanced Controls/Grouping and Parameters.md",sourceDirName:"terminal/custom-backend/Advanced Controls",slug:"/terminal/custom-backend/Advanced Controls/Grouping and Parameters",permalink:"/terminal/custom-backend/Advanced Controls/Grouping and Parameters",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/custom-backend/Advanced Controls/Grouping and Parameters.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1739383794e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Templates",permalink:"/terminal/custom-backend/Advanced Controls/Templates"},next:{title:"widgets.json",permalink:"/terminal/custom-backend/widgets.json"}},d={},l=[{value:"Grouping and Parameters",id:"grouping-and-parameters",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Passing custom dropdown options",id:"passing-custom-dropdown-options",level:3},{value:"Grouping",id:"grouping",level:3}];function c(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"grouping-and-parameters",children:"Grouping and Parameters"}),"\n",(0,a.jsxs)(n.p,{children:["In the ",(0,a.jsx)(n.code,{children:"widgets.json"})," configuration, you can specify parameters/inputs that can be used to customize the data retrieval and display. Widgets can also be grouped if you have multiple widgets on the same dashboard that share a parameter. This section will guide you through setting up these features."]}),"\n",(0,a.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.p,{children:["Parameters are used to pass dynamic values to your API endpoints, allowing for customizable data queries from the widget. Each parameter is defined in the ",(0,a.jsx)(n.code,{children:"params"})," array within your widgets.json file and can include the following fields:"]}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Field"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"type"})}),(0,a.jsxs)(n.td,{children:["The data type of the parameter. Possible values include ",(0,a.jsx)(n.code,{children:'"date"'}),", ",(0,a.jsx)(n.code,{children:'"text"'}),", ",(0,a.jsx)(n.code,{children:'"ticker"'}),", ",(0,a.jsx)(n.code,{children:'"number"'}),", ",(0,a.jsx)(n.code,{children:'"boolean"'}),", ",(0,a.jsx)(n.code,{children:'"endpoint"'})]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"paramName"})}),(0,a.jsxs)(n.td,{children:["The name of the parameter as it appears in the URL. Example: ",(0,a.jsx)(n.code,{children:'"startDate"'})]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"value"})}),(0,a.jsx)(n.td,{children:"The default value for the parameter. This can be a string, number, or boolean"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"label"})}),(0,a.jsxs)(n.td,{children:["The label displayed in the UI for the parameter. Example: ",(0,a.jsx)(n.code,{children:'"Start Date"'})]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"show"})}),(0,a.jsx)(n.td,{children:"A boolean indicating whether the parameter should be visible in the UI"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"description"})}),(0,a.jsx)(n.td,{children:"A brief description of the parameter, shown on hover"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"multiSelect"})}),(0,a.jsx)(n.td,{children:"A boolean indicating if multiple values can be selected (only applicable for certain types)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"options"})}),(0,a.jsxs)(n.td,{children:["An array of options for dropdown parameters, each with a ",(0,a.jsx)(n.code,{children:"label"})," and ",(0,a.jsx)(n.code,{children:"value"})]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"optionsEndpoint"})}),(0,a.jsxs)(n.td,{children:["An endpoint to fetch options dynamically, used when ",(0,a.jsx)(n.code,{children:"type"})," is ",(0,a.jsx)(n.code,{children:'"endpoint"'})]})]})]})]}),"\n",(0,a.jsx)("img",{className:"pro-border-gradient",width:"700",alt:"widget-parameters",src:"https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/parameters.png"}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{mdxType:"summary",children:"Example for above parameters"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'  "show_example_params": {\n    "name": "Example Backend Params",\n    "description": "Show example param options",\n    "category": "New Category",\n    "searchCategory": "Custom",\n    "endpoint": "show_example_params",\n    "gridData": {\n      "w": 20,\n      "h": 9\n    },\n    "params": [\n      {\n        "paramName": "datePicker1",\n        "value": "$currentDate-1d",\n        "label": "Param 1",\n        "description": "I\'m a Date Picker!",\n        "type": "date"\n      },\n      {\n        "paramName": "textBox1",\n        "value": "Hello!",\n        "label": "Param 2",\n        "description": "I\'m a text input box!",\n        "type": "text"\n      },\n      {\n        "paramName": "TrueFalse",\n        "value": true,\n        "label": "True/False",\n        "description": "I\'m a True/False selector!",\n        "type": "boolean"\n      },\n      {\n        "paramName": "daysPicker1",\n        "value": "1",\n        "label": "Days",\n        "type": "text",\n        "multiSelect": true,\n        "description": "Number of days to look back",\n        "options": [\n          {\n            "value": "1",\n            "label": "1"\n          },\n          {\n            "value": "5",\n            "label": "5"\n          },\n          {\n            "value": "10",\n            "label": "10"\n          },\n          {\n            "value": "20",\n            "label": "20"\n          },\n          {\n            "value": "30",\n            "label": "30"\n          }\n        ]\n      }\n    ]\n  },\n'})})]}),"\n",(0,a.jsx)(n.h3,{id:"passing-custom-dropdown-options",children:"Passing custom dropdown options"}),"\n",(0,a.jsxs)(n.p,{children:["Sometimes you may want to pass a list from an endpoint rather then specify the options in the ",(0,a.jsx)(n.code,{children:"widgets.json"})," file."]}),"\n",(0,a.jsxs)(n.p,{children:["By using ",(0,a.jsx)(n.code,{children:'type: "endpoint"'}),", you'll need to specify an ",(0,a.jsx)(n.code,{children:"optionsEndpoint"})," that returns the available options."]}),"\n",(0,a.jsx)("img",{className:"pro-border-gradient",width:"300",alt:"dropdown",src:"https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/dropdown.png"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"optionsEndpoint"}),": The API endpoint that returns the options for the parameter. The endpoint should return an array of objects with ",(0,a.jsx)(n.code,{children:"label"})," and ",(0,a.jsx)(n.code,{children:"value"})," properties."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"optionsParams"}),": (Optional) Additional parameters to pass to the options endpoint."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Here's an example using an endpoint parameter:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "custom_widget": {\n        "name": "Dynamic Options Widget",\n        "endpoint": "custom-endpoint",\n        "params": [\n            {\n                "type": "endpoint",\n                "paramName": "company",\n                "label": "Company",\n                "show": true,\n                "description": "Select a company",\n                "optionsEndpoint": "/api/companies",\n            }\n        ]\n    }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"optionsEndpoint"})," should return data in this format for a simple dropdown:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'[\n    { "label": "Apple Inc.", "value": "AAPL" },\n    { "label": "Microsoft Corporation", "value": "MSFT" },\n    { "label": "Google", "value": "GOOGL" }\n]\n'})}),"\n",(0,a.jsx)(n.p,{children:"You can also return a dropdown with some advanced options passed - Your returned data on the endpoint should be in this format:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "label": "Apple Inc.",\n        "value": "AAPL",\n        "extraInfo": {\n            "description": "Technology Company",\n            "rightOfDescription": "NASDAQ"\n        }\n    },\n    {\n        "label": "Microsoft Corporation",\n        "value": "MSFT",\n        "extraInfo": {\n            "description": "Software Company",\n            "rightOfDescription": "NASDAQ"\n        }\n    },\n    {\n        "label": "Google",\n        "value": "GOOGL",\n        "extraInfo": {\n            "description": "Search Engine",\n            "rightOfDescription": "NASDAQ"\n        }\n    }\n]\n'})}),"\n",(0,a.jsx)(n.p,{children:"These values can also be grouped which we will cover below."}),"\n",(0,a.jsx)(n.h3,{id:"grouping",children:"Grouping"}),"\n",(0,a.jsx)(n.p,{children:"Widget grouping is a powerful feature that allows multiple widgets to share and respond to the same parameter input. When widgets are grouped, users only need to select a value once (such as a ticker symbol or chain name) to update all related widgets simultaneously. This is particularly useful when building dashboards where multiple widgets need to display different aspects of the same data source. OpenBB Terminal Pro automatically handles this grouping in two ways: through shared endpoint parameters and through ticker parameters. This means you don't need any additional configuration to enable grouping - simply using the same parameter types and configurations across widgets will trigger the automatic grouping behavior."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Endpoint Parameters"}),": If multiple widgets use the same ",(0,a.jsx)(n.code,{children:"optionsEndpoint"})," and ",(0,a.jsx)(n.code,{children:"endpoint"})," parameter configuration, they can be grouped together. This allows users to select a value once and have it apply to all related widgets. Currently, this grouping works for only the first parameter in the ",(0,a.jsx)(n.code,{children:"params"})," array specified this way."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Example of widgets that will be automatically grouped due to shared endpoint parameters:"}),"\n",(0,a.jsx)("img",{className:"pro-border-gradient",width:"600",alt:"grouping",src:"https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/grouping.png"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "chain_tvl_widget": {\n        "name": "Chain TVL",\n        "endpoint": "chain-tvl",\n        "params": [\n            {\n                "type": "endpoint",\n                "paramName": "chain",\n                "label": "Chain",\n                "optionsEndpoint": "get_chains_list"\n            }\n        ]\n    },\n    "chain_volume_widget": {\n        "name": "Chain Volume",\n        "endpoint": "chain-volume",\n        "params": [\n            {\n                "type": "endpoint",\n                "paramName": "chain",\n                "label": "Chain",\n                "optionsEndpoint": "get_chains_list"\n            }\n        ]\n    }\n}\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Ticker Parameters"}),": If multiple widgets use the same ",(0,a.jsx)(n.code,{children:"ticker"})," parameter configuration, they can be grouped together. The widgets will then use the same built in security list we provide in OpenBB Terminal Pro. This allows users to select a value once and have it apply to all related widgets."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Example of widgets that will be grouped using the ticker parameter:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "stock_price_widget": {\n        "name": "Stock Price",\n        "endpoint": "stock-price",\n        "params": [\n            {\n                "type": "ticker",\n                "paramName": "symbol",\n                "label": "Symbol",\n                "value": "AAPL",\n                "description": "Stock ticker symbol"\n            }\n        ]\n    },\n    "company_info_widget": {\n        "name": "Company Info",\n        "endpoint": "company-info",\n        "params": [\n            {\n                "type": "ticker",\n                "paramName": "symbol",\n                "label": "Symbol",\n                "value": "AAPL",\n                "description": "Stock ticker symbol"\n            }\n        ]\n    }\n}\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Render Functions"}),": You can also use render functions when you group data."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Let's say you want to group by the symbol in a widget and you want other widgets to change when you click on a cell in the table. You can do this by adding to your ",(0,a.jsx)(n.code,{children:"columnsDefs"})," the render function ",(0,a.jsx)(n.code,{children:"cellOnClick"})," and the ",(0,a.jsx)(n.code,{children:"actionType"})," of ",(0,a.jsx)(n.code,{children:"groupBy"}),". This will group the data by the symbol and update the other widgets that are grouped by the same parameter."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'    "params": [\n      {\n        "paramName": "symbol",\n        "description": "The symbol to get details for",\n        "value": "AXXI",\n        "label": "Symbol",\n        "type": "endpoint",\n        "show": false,\n        "optionsEndpoint": "get_tickers_list"\n      }\n    ],\n    "data": {\n      "table": {\n        "showAll": true,\n        "columnsDefs": [\n          {\n            "field": "Symbol",\n            "headerName": "Symbol",\n            "renderFn": "cellOnClick",\n            "renderFnParams": {\n              "actionType": "groupBy"\n            }\n          }\n        ]\n      }\n    },\n    "gridData": {\n      "w": 20,\n      "h": 9\n    }\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var a=t(96540);const s={},r=a.createContext(s);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);