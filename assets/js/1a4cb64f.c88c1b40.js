"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84672],{65188:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var n=s(74848),a=s(28453),r=s(94331);const d={title:"decompose",description:"This documentation page provides details on the 'decompose' function in OpenBB's quantitative analysis module. The function executes seasonal decomposition on a specified DataFrame, returning decomposed results and filtered dataframes for cycle and trend.",keywords:["decompose","seasonal decomposition","quantitative analysis","multiplicative","dataframe","DecomposeResult","statsmodels","observed","seasonal","trend","residual","weights","cycle DataFrame","trend DataFrame"]},o=void 0,i={id:"sdk/reference/qa/decompose",title:"decompose",description:"This documentation page provides details on the 'decompose' function in OpenBB's quantitative analysis module. The function executes seasonal decomposition on a specified DataFrame, returning decomposed results and filtered dataframes for cycle and trend.",source:"@site/content/sdk/reference/qa/decompose.md",sourceDirName:"sdk/reference/qa",slug:"/sdk/reference/qa/decompose",permalink:"/sdk/reference/qa/decompose",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/qa/decompose.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719240743e3,frontMatter:{title:"decompose",description:"This documentation page provides details on the 'decompose' function in OpenBB's quantitative analysis module. The function executes seasonal decomposition on a specified DataFrame, returning decomposed results and filtered dataframes for cycle and trend.",keywords:["decompose","seasonal decomposition","quantitative analysis","multiplicative","dataframe","DecomposeResult","statsmodels","observed","seasonal","trend","residual","weights","cycle DataFrame","trend DataFrame"]},sidebar:"tutorialSidebar",previous:{title:"cusum",permalink:"/sdk/reference/qa/cusum"},next:{title:"es",permalink:"/sdk/reference/qa/es"}},c={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function m(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.A,{title:"qa.decompose - Reference | OpenBB SDK Docs"}),"\n",(0,n.jsx)(t.p,{children:"Perform seasonal decomposition"}),"\n",(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_model.py#L46",children:"link"}),"]"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"openbb.qa.decompose(data: pd.DataFrame, multiplicative: bool = False)\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data"}),(0,n.jsx)(t.td,{children:"pd.DataFrame"}),(0,n.jsx)(t.td,{children:"Dataframe of targeted data"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"multiplicative"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Boolean to indicate multiplication instead of addition"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Tuple[DecomposeResult, pd.DataFrame, pd.DataFrame]"}),(0,n.jsxs)(t.td,{children:["DecomposeResult class from statsmodels (observed, seasonal, trend, residual, and weights),",(0,n.jsx)("br",{}),"Filtered cycle DataFrame,",(0,n.jsx)("br",{}),"Filtered trend DataFrame"]})]})})]}),"\n",(0,n.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},94331:(e,t,s)=>{s.d(t,{A:()=>r});s(96540);var n=s(5260),a=s(74848);function r(e){let{title:t}=e;return(0,a.jsx)(n.A,{children:(0,a.jsx)("title",{children:t})})}},28453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>o});var n=s(96540);const a={},r=n.createContext(a);function d(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);