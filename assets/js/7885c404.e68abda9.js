"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7246],{42733:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=t(74848),s=t(28453);const r={title:"Widget Settings",sidebar_position:5,description:"Learn how to integrate your own backend with OpenBB Workspace using the cookie-cutter or language-agnostic API approaches, with illustrative guides and principles for handling widget.json files, APIs, interfaces, Python, FastAPI and more.",keywords:["widgets.json","OpenBB API","Endpoint integration","widget configuration","Language-Agnostic API","API implementation","Python","FastAPI","Workspace widgets","Widget definitions"]},a="Widget Settings",o={id:"workspace/custom-backend/advanced-controls/widget-settings",title:"Widget Settings",description:"Learn how to integrate your own backend with OpenBB Workspace using the cookie-cutter or language-agnostic API approaches, with illustrative guides and principles for handling widget.json files, APIs, interfaces, Python, FastAPI and more.",source:"@site/content/workspace/custom-backend/advanced-controls/widget-settings.md",sourceDirName:"workspace/custom-backend/advanced-controls",slug:"/workspace/custom-backend/advanced-controls/widget-settings",permalink:"/workspace/custom-backend/advanced-controls/widget-settings",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/workspace/custom-backend/advanced-controls/widget-settings.md",tags:[],version:"current",lastUpdatedBy:"jose-donato",lastUpdatedAt:1744041894e3,sidebarPosition:5,frontMatter:{title:"Widget Settings",sidebar_position:5,description:"Learn how to integrate your own backend with OpenBB Workspace using the cookie-cutter or language-agnostic API approaches, with illustrative guides and principles for handling widget.json files, APIs, interfaces, Python, FastAPI and more.",keywords:["widgets.json","OpenBB API","Endpoint integration","widget configuration","Language-Agnostic API","API implementation","Python","FastAPI","Workspace widgets","Widget definitions"]},sidebar:"tutorialSidebar",previous:{title:"PDF Viewer",permalink:"/workspace/custom-backend/Widgets/pdf"},next:{title:"Grouping and Parameters",permalink:"/workspace/custom-backend/advanced-controls/grouping-and-parameters"}},d={},l=[{value:"Run Button",id:"run-button",level:2},{value:"Grid Dimensions",id:"grid-dimensions",level:2},{value:"Data Refresh Settings",id:"data-refresh-settings",level:2},{value:"Refetch Interval",id:"refetch-interval",level:3},{value:"Stale Time",id:"stale-time",level:3},{value:"Example Configuration",id:"example-configuration",level:4},{value:"Search Category Settings",id:"search-category-settings",level:2},{value:"Best Practices",id:"best-practices",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"widget-settings",children:"Widget Settings"}),"\n",(0,i.jsx)(n.p,{children:"This guide covers the essential settings for configuring widget appearance, positioning, and data refresh behavior in OpenBB Workspace."}),"\n",(0,i.jsx)(n.h2,{id:"run-button",children:"Run Button"}),"\n",(0,i.jsx)(n.p,{children:"The run button allows you to run a widget by clicking it rather then having it run automatically when you change a parameter. It is located in the top right corner of the widget and replaces the refresh button."}),"\n",(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,i.jsx)("img",{className:"pro-border-gradient",width:"200",alt:"run button",src:"https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/run+button.png"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'  "testWidget": {\n    "name": "Run Button",\n    "description": "Run Button Widget Example",\n    "category": "Equity",\n    "searchCategory": "Equity",\n    "endpoint": "data",\n    "runButton": true,\n    ...\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Setting the refreshInterval in the ",(0,i.jsx)(n.code,{children:"widgets.json"})," will allow you still refresh the widget automatically but it is off by default when using the run button. A Ctrl-click on the run button performs a hard refresh, while a regular click runs the new parameters."]}),"\n",(0,i.jsx)(n.h2,{id:"grid-dimensions",children:"Grid Dimensions"}),"\n",(0,i.jsxs)(n.p,{children:["Widgets use a grid-based layout system where you can specify their width and height. Configure these in the ",(0,i.jsx)(n.code,{children:"gridData"})," object:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "gridData": {\n        "w": 20,  // Width in grid units (max: 40)\n        "h": 9    // Height in grid units (max: 100)\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Width (w)"}),": Determines the horizontal span of the widget"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Maximum value: 40 units"}),"\n",(0,i.jsx)(n.li,{children:"Recommended range: 10-30 units for most widgets"}),"\n",(0,i.jsx)(n.li,{children:"Full-width widgets - 40 units"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Height (h)"}),": Sets the vertical span of the widget"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Maximum value: 100 units"}),"\n",(0,i.jsx)(n.li,{children:"Recommended range: 8-20 units for standard widgets"}),"\n",(0,i.jsx)(n.li,{children:"Larger values useful for detailed charts or tables"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"data-refresh-settings",children:"Data Refresh Settings"}),"\n",(0,i.jsx)(n.p,{children:"Control how and when widget data updates using these two key settings:"}),"\n",(0,i.jsx)(n.h3,{id:"refetch-interval",children:"Refetch Interval"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"refetchInterval"})," determines how often the widget updates its data while visible on screen:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "refetchInterval": 900000  // 15 minutes in milliseconds\n}\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Default: 900000 (15 minutes) (minimum 1000)"}),"\n",(0,i.jsxs)(n.li,{children:["Set to ",(0,i.jsx)(n.code,{children:"false"})," to disable automatic refreshing"]}),"\n",(0,i.jsx)(n.li,{children:"Use lower values for real-time data (e.g., 60000 for 1-minute updates)"}),"\n",(0,i.jsx)(n.li,{children:"Higher values recommended for static or slowly changing data"}),"\n",(0,i.jsxs)(n.li,{children:["Use the ",(0,i.jsx)(n.code,{children:"runButton"})," if you want to refresh the widget manually (note: You can set the ",(0,i.jsx)(n.code,{children:"refetchInterval"})," with a run button as well.)"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"stale-time",children:"Stale Time"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"staleTime"})," setting controls when data is considered outdated and needs refreshing when revisiting a dashboard:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "staleTime": 300000  // 5 minutes in milliseconds\n}\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Default: 300000 (5 minutes)"}),"\n",(0,i.jsx)(n.li,{children:"Data older than this value will trigger a refresh when the widget is viewed again"}),"\n",(0,i.jsxs)(n.li,{children:["Should typically be less than or equal to ",(0,i.jsx)(n.code,{children:"refetchInterval"})]}),"\n",(0,i.jsx)(n.li,{children:"Set higher for data that updates infrequently"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"example-configuration",children:"Example Configuration"}),"\n",(0,i.jsx)(n.p,{children:"Here's a complete example combining all these settings:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "custom_widget": {\n        "name": "Market Overview",\n        "description": "Real-time market data display",\n        "gridData": {\n            "w": 20,\n            "h": 12\n        },\n        "refetchInterval": 60000,  // Update every minute\n        "staleTime": 30000,        // Consider data stale after 30 seconds\n        // ... other widget configuration ...\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"search-category-settings",children:"Search Category Settings"}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"widgets.json"})," configuration, you can define how widgets are organized using categories and subcategories. This helps users easily find and interact with widgets by grouping them logically."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"category"}),": A primary category for the widget. Example: ",(0,i.jsx)(n.code,{children:'"crypto"'}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"subCategory"}),": A secondary category for more refined organization. Example: ",(0,i.jsx)(n.code,{children:'"fundamentals"'}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"These fields allow you to structure your widgets in a way that enhances user experience by making it easier to navigate through different types of widgets based on their purpose or data source."}),"\n",(0,i.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Grid Sizing"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Match dimensions to content type (e.g., wider for tables, squarer for charts)"}),"\n",(0,i.jsx)(n.li,{children:"Consider screen real estate and readability"}),"\n",(0,i.jsx)(n.li,{children:"Test different sizes for optimal user experience"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Refresh Settings"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Balance data freshness against server load"}),"\n",(0,i.jsx)(n.li,{children:"Consider your data source's update frequency"}),"\n",(0,i.jsx)(n.li,{children:"Use shorter intervals only when necessary for real-time data"}),"\n",(0,i.jsxs)(n.li,{children:["Set ",(0,i.jsx)(n.code,{children:"staleTime"})," lower than ",(0,i.jsx)(n.code,{children:"refetchInterval"})," for consistent behavior"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Performance"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Higher refresh rates increase server load and API calls"}),"\n",(0,i.jsx)(n.li,{children:"Group similar widgets with matching refresh intervals"}),"\n",(0,i.jsx)(n.li,{children:"Consider using longer intervals for historical or static data"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);