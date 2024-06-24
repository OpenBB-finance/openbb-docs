"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52612],{60306:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var r=n(74848),s=n(28453),i=n(94331);const d={title:"future",description:"This page provides detailed documentation on how to use OpenBB's 'future' function in Python script. It explains parameters and returns related to different financial instruments.",keywords:["OpenBB future function","Python script","financial instruments","Indices","Energy","Metals","Meats","Grains","Softs","Bonds","Currencies","Finviz"]},o=void 0,c={id:"sdk/reference/economy/future",title:"future",description:"This page provides detailed documentation on how to use OpenBB's 'future' function in Python script. It explains parameters and returns related to different financial instruments.",source:"@site/content/sdk/reference/economy/future.md",sourceDirName:"sdk/reference/economy",slug:"/sdk/reference/economy/future",permalink:"/sdk/reference/economy/future",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/economy/future.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719247347e3,frontMatter:{title:"future",description:"This page provides detailed documentation on how to use OpenBB's 'future' function in Python script. It explains parameters and returns related to different financial instruments.",keywords:["OpenBB future function","Python script","financial instruments","Indices","Energy","Metals","Meats","Grains","Softs","Bonds","Currencies","Finviz"]},sidebar:"tutorialSidebar",previous:{title:"fred_notes",permalink:"/sdk/reference/economy/fred_notes"},next:{title:"futures",permalink:"/sdk/reference/economy/futures"}},a={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{title:"economy.future - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(t.p,{children:"Get futures data. [Source: Finviz]"}),"\n",(0,r.jsxs)(t.p,{children:["Source Code: [",(0,r.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/finviz_model.py#L187",children:"link"}),"]"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'openbb.economy.future(future_type: str = "Indices", sortby: str = "ticker", ascend: bool = False)\n'})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"future_type"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"From the following: Indices, Energy, Metals, Meats, Grains, Softs, Bonds, Currencies"}),(0,r.jsx)(t.td,{children:"Indices"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sortby"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Column to sort by"}),(0,r.jsx)(t.td,{children:"ticker"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ascend"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"Flag to sort in ascending order"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"pd.Dataframe"}),(0,r.jsx)(t.td,{children:"Indices, Energy, Metals, Meats, Grains, Softs, Bonds, Currencies"})]})})]}),"\n",(0,r.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(5260),s=n(74848);function i(e){let{title:t}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>o});var r=n(96540);const s={},i=r.createContext(s);function d(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);