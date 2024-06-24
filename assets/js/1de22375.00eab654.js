"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59876],{42251:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=s(74848),n=s(28453),i=s(94331);const a={title:"Futures",description:"This documentation helps users understand how to use the Futures menu, including capabilities like accessing historical prices, understanding the current term structure of an asset, and using the search, curve and historical functions. It also explains how to view categories, use ticker symbols, and export data.",keywords:["Futures","Historical Prices","Asset","Term Structure","Search","Curve","Historical","Futures Search Function","Category Flag","Ticker Symbol","Eurodollar Futures","Raw Data","Export","Historical Command","Continuous Chart"]},c=void 0,o={id:"terminal/menus/futures",title:"Futures",description:"This documentation helps users understand how to use the Futures menu, including capabilities like accessing historical prices, understanding the current term structure of an asset, and using the search, curve and historical functions. It also explains how to view categories, use ticker symbols, and export data.",source:"@site/content/terminal/menus/futures.md",sourceDirName:"terminal/menus",slug:"/terminal/menus/futures",permalink:"/terminal/menus/futures",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/menus/futures.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719247347e3,frontMatter:{title:"Futures",description:"This documentation helps users understand how to use the Futures menu, including capabilities like accessing historical prices, understanding the current term structure of an asset, and using the search, curve and historical functions. It also explains how to view categories, use ticker symbols, and export data.",keywords:["Futures","Historical Prices","Asset","Term Structure","Search","Curve","Historical","Futures Search Function","Category Flag","Ticker Symbol","Eurodollar Futures","Raw Data","Export","Historical Command","Continuous Chart"]},sidebar:"tutorialSidebar",previous:{title:"Forex",permalink:"/terminal/menus/forex"},next:{title:"Mutual Funds",permalink:"/terminal/menus/mutualfunds"}},u={},l=[{value:"Usage",id:"usage",level:2},{value:"Search",id:"search",level:3},{value:"Curve",id:"curve",level:3},{value:"Historical",id:"historical",level:3}];function d(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{title:"Futures - Menus | OpenBB Terminal Docs"}),"\n",(0,r.jsxs)(t.p,{children:["The Futures menu provides historical prices and the current term structure for an asset. This menu is accessible from the Main menu by typing ",(0,r.jsx)(t.code,{children:"futures"})," and pressing the ",(0,r.jsx)(t.code,{children:"enter"})," key - or with the absolute path:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-console",children:"/futures\n"})}),"\n",(0,r.jsx)("img",{width:"800",alt:"image",src:"https://user-images.githubusercontent.com/46355364/218993274-c4802f49-9016-424f-b875-a4c1bc3e77be.png"}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.p,{children:"There are three basic functions within this menu Search, Historical and Curve."}),"\n",(0,r.jsx)(t.h3,{id:"search",children:"Search"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Search"})," allows the user to find which instruments are supported, and can be searched by the description. For example, searching for silver will return these results:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-console",children:"search -d silver\n"})}),"\n",(0,r.jsx)("img",{width:"603",alt:"Search Futures",src:"https://user-images.githubusercontent.com/85772166/197641622-8e90785a-f758-4911-9068-eb4f528f42e9.png"}),"\n",(0,r.jsxs)(t.p,{children:["To view an entire category, attach the ",(0,r.jsx)(t.code,{children:"--category"})," flag to the function and select using the arrow keys."]}),"\n",(0,r.jsx)("img",{width:"275",alt:"Futures Categories",src:"https://user-images.githubusercontent.com/85772166/197641664-3e63b68b-a4be-4dd6-a7a8-47e0cbef0b61.png"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-console",children:"search --category currency\n"})}),"\n",(0,r.jsx)("img",{width:"493",alt:"Currency Futures",src:"https://user-images.githubusercontent.com/85772166/197641730-b488d1d0-3f82-4da4-8f07-8973b86e9585.png"}),"\n",(0,r.jsx)(t.h3,{id:"curve",children:"Curve"}),"\n",(0,r.jsxs)(t.p,{children:["Both ",(0,r.jsx)(t.code,{children:"curve"})," and ",(0,r.jsx)(t.code,{children:"historical"})," use the ticker symbol shown by the search function, for example, to see a chart of the current Eurodollar Futures term structure, simply enter:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-console",children:"curve GE\n"})}),"\n",(0,r.jsx)("img",{width:"1218",alt:"Eurodollar Futures Curve",src:"https://user-images.githubusercontent.com/85772166/197641789-dc56b59f-e5c3-4186-b88c-9f899cdf650a.png"}),"\n",(0,r.jsxs)(t.p,{children:["The raw data can be printed as a table or exported to a file, by attaching the optional arguments: ",(0,r.jsx)(t.code,{children:"--raw"}),", or, ",(0,r.jsx)(t.code,{children:"--export {filetype}"}),". For example, Global Emissions Offset Futures:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-console",children:"curve GEO --raw\n"})}),"\n",(0,r.jsx)("img",{width:"386",alt:"Futures Raw Data",src:"https://user-images.githubusercontent.com/85772166/197641865-aa3c8649-21c2-4217-b921-f426776430b1.png"}),"\n",(0,r.jsx)(t.h3,{id:"historical",children:"Historical"}),"\n",(0,r.jsxs)(t.p,{children:["The continuous chart is displayed with the ",(0,r.jsx)(t.code,{children:"historical"})," command + the symbol. To see the optional arguments available for the command, deploy the ",(0,r.jsx)(t.code,{children:"-h"})," flag. For example, the Eurodollar Futures contract for December 2024 expiry is displayed with:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-console",children:"historical GE -s 2015-01-01 -e 2024-12\n"})}),"\n",(0,r.jsx)("img",{width:"1205",alt:"Historical Price of GEZ24.CME",src:"https://user-images.githubusercontent.com/85772166/197641999-599e2b0a-4578-4d36-b5c5-704c5ac9a0fa.png"}),"\n",(0,r.jsx)(t.p,{children:"Multiple continuous charts can be plotted on the same chart by using a comma-separated list:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-console",children:"historical GE,ZQ -s 2007-01-01\n"})}),"\n",(0,r.jsx)("img",{width:"1233",alt:"Historical Price of GE=F & ZQ=F",src:"https://user-images.githubusercontent.com/85772166/197642051-a5a02f15-6e5b-464f-9ba9-0d2299488021.png"})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},94331:(e,t,s)=>{s.d(t,{A:()=>i});s(96540);var r=s(5260),n=s(74848);function i(e){let{title:t}=e;return(0,n.jsx)(r.A,{children:(0,n.jsx)("title",{children:t})})}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>c});var r=s(96540);const n={},i=r.createContext(n);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);