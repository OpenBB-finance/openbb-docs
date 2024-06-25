"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26576],{15144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var r=n(74848),s=n(28453),a=n(94331);const i={title:"rsi",description:"This document provides detailed information about the RSI (Relative Strength Index) function in OpenBB.finance, including how to use this momentum indicator to measure recent price changes. The function uses a Pandas DataFrame to calculate the RSI and add it back to your dataset. The page also links to the function's source code.",keywords:["RSI","momentum indicator","price changes","OpenBB.finance","forecast","Pandas DataFrame","RSI calculation"]},c=void 0,d={id:"sdk/reference/forecast/rsi",title:"rsi",description:"This document provides detailed information about the RSI (Relative Strength Index) function in OpenBB.finance, including how to use this momentum indicator to measure recent price changes. The function uses a Pandas DataFrame to calculate the RSI and add it back to your dataset. The page also links to the function's source code.",source:"@site/content/sdk/reference/forecast/rsi.md",sourceDirName:"sdk/reference/forecast",slug:"/sdk/reference/forecast/rsi",permalink:"/sdk/reference/forecast/rsi",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/forecast/rsi.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719309708e3,frontMatter:{title:"rsi",description:"This document provides detailed information about the RSI (Relative Strength Index) function in OpenBB.finance, including how to use this momentum indicator to measure recent price changes. The function uses a Pandas DataFrame to calculate the RSI and add it back to your dataset. The page also links to the function's source code.",keywords:["RSI","momentum indicator","price changes","OpenBB.finance","forecast","Pandas DataFrame","RSI calculation"]},sidebar:"tutorialSidebar",previous:{title:"roc",permalink:"/sdk/reference/forecast/roc"},next:{title:"rwd",permalink:"/sdk/reference/forecast/rwd"}},o={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.A,{title:"forecast.rsi - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(t.p,{children:"A momentum indicator that measures the magnitude of recent price changes to evaluate"}),"\n",(0,r.jsxs)(t.p,{children:["Source Code: [",(0,r.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/forecast_model.py#L237",children:"link"}),"]"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'openbb.forecast.rsi(dataset: pd.DataFrame, target_column: str = "close", period: int = 10)\n'})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"dataset"}),(0,r.jsx)(t.td,{children:"pd.DataFrame"}),(0,r.jsx)(t.td,{children:"The dataset you wish to calculate for"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"target_column"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"The column you wish to add the RSI to"}),(0,r.jsx)(t.td,{children:"close"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"period"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"Time Span"}),(0,r.jsx)(t.td,{children:"10"}),(0,r.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"pd.DataFrame"}),(0,r.jsx)(t.td,{children:"Dataframe with added RSI column"})]})})]}),"\n",(0,r.jsx)(t.hr,{})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(5260),s=n(74848);function a(e){let{title:t}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(96540);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);