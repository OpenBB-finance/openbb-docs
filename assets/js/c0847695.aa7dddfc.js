"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65667],{47524:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var n=s(74848),r=s(28453),i=s(94331);const c={title:"stocks_data",description:"This page offers in-depth documentation on how to use the 'stocks_data' function in the OpenBBTerminal's stock analysis tool, detailing parameters, returns and source code.",keywords:["stock data","finance key","financial statement","stock analysis","programming","code documentation"]},a=void 0,d={id:"sdk/reference/stocks/sia/stocks_data",title:"stocks_data",description:"This page offers in-depth documentation on how to use the 'stocks_data' function in the OpenBBTerminal's stock analysis tool, detailing parameters, returns and source code.",source:"@site/content/sdk/reference/stocks/sia/stocks_data.md",sourceDirName:"sdk/reference/stocks/sia",slug:"/sdk/reference/stocks/sia/stocks_data",permalink:"/sdk/reference/stocks/sia/stocks_data",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/stocks/sia/stocks_data.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719240743e3,frontMatter:{title:"stocks_data",description:"This page offers in-depth documentation on how to use the 'stocks_data' function in the OpenBBTerminal's stock analysis tool, detailing parameters, returns and source code.",keywords:["stock data","finance key","financial statement","stock analysis","programming","code documentation"]},sidebar:"tutorialSidebar",previous:{title:"sectors",permalink:"/sdk/reference/stocks/sia/sectors"},next:{title:"recom",permalink:"/sdk/reference/stocks/ta/recom"}},o={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"stocks.sia.stocks_data - Reference | OpenBB SDK Docs"}),"\n",(0,n.jsx)(t.p,{children:"Get stocks data based on a list of stocks and the finance key. The function searches for the"}),"\n",(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/sector_industry_analysis/stockanalysis_model.py#L84",children:"link"}),"]"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'openbb.stocks.sia.stocks_data(symbols: List[str] = None, finance_key: str = "ncf", stocks_data: dict = None, period: str = "annual", symbol: str = "USD")\n'})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbols"}),(0,n.jsx)(t.td,{children:"list"}),(0,n.jsx)(t.td,{children:"A list of tickers that will be used to collect data for."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"finance_key"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsxs)(t.td,{children:["The finance key used to search within the SA_KEYS for the correct name of item",(0,n.jsx)("br",{}),"on the financial statement"]}),(0,n.jsx)(t.td,{children:"ncf"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"stocks_data"}),(0,n.jsx)(t.td,{children:"dict"}),(0,n.jsxs)(t.td,{children:["A dictionary that is empty on initialisation but filled once data is collected",(0,n.jsx)("br",{}),"for the first time."]}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"period"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Whether you want annually, quarterly or trailing financial statements."}),(0,n.jsx)(t.td,{children:"annual"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsxs)(t.td,{children:["Choose in what currency you wish to convert each company's financial statement.",(0,n.jsx)("br",{}),"Default is USD (US Dollars)."]}),(0,n.jsx)(t.td,{children:"USD"}),(0,n.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"dict"}),(0,n.jsx)(t.td,{children:"Dictionary of filtered stocks data separated by financial statement"})]})})]}),"\n",(0,n.jsx)(t.hr,{})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,s)=>{s.d(t,{A:()=>i});s(96540);var n=s(5260),r=s(74848);function i(e){let{title:t}=e;return(0,r.jsx)(n.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>a});var n=s(96540);const r={},i=n.createContext(r);function c(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);