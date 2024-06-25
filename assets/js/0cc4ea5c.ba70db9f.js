"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[50911],{41800:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var t=s(74848),i=s(28453),r=s(94331);const c={title:"similar",description:"Documentation for the 'similar' functionality in the OpenBB-finance package. Includes details about the function, parameters and returns, and examples.",keywords:["OpenBB-finance","similar tickers","stock comparison","stock analysis","python package","Finviz","Polygon","Finnhub","TSNE","stock symbols"]},a=void 0,o={id:"sdk/reference/stocks/ca/similar",title:"similar",description:"Documentation for the 'similar' functionality in the OpenBB-finance package. Includes details about the function, parameters and returns, and examples.",source:"@site/content/sdk/reference/stocks/ca/similar.md",sourceDirName:"sdk/reference/stocks/ca",slug:"/sdk/reference/stocks/ca/similar",permalink:"/sdk/reference/stocks/ca/similar",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/stocks/ca/similar.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719309708e3,frontMatter:{title:"similar",description:"Documentation for the 'similar' functionality in the OpenBB-finance package. Includes details about the function, parameters and returns, and examples.",keywords:["OpenBB-finance","similar tickers","stock comparison","stock analysis","python package","Finviz","Polygon","Finnhub","TSNE","stock symbols"]},sidebar:"tutorialSidebar",previous:{title:"sentiment",permalink:"/sdk/reference/stocks/ca/sentiment"},next:{title:"volume",permalink:"/sdk/reference/stocks/ca/volume"}},l={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.A,{title:"stocks.ca.similar - Reference | OpenBB SDK Docs"}),"\n",(0,t.jsx)(n.p,{children:"Find similar tickers to a given symbol."}),"\n",(0,t.jsxs)(n.p,{children:["Source Code: [",(0,t.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/comparison_analysis/sdk_helpers.py#L15",children:"link"}),"]"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'openbb.stocks.ca.similar(symbol: str, source: Any = "Finviz")\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Default"}),(0,t.jsx)(n.th,{children:"Optional"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"symbol"}),(0,t.jsx)(n.td,{children:"str"}),(0,t.jsx)(n.td,{children:"Symbol to find similar tickers to."}),(0,t.jsx)(n.td,{children:"None"}),(0,t.jsx)(n.td,{children:"False"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"source"}),(0,t.jsx)(n.td,{children:"str"}),(0,t.jsx)(n.td,{children:'Source to get data for, by default "Finviz".  Can be "Finviz", "Polygon", "Finnhub", or "TSNE"'}),(0,t.jsx)(n.td,{children:"Finviz"}),(0,t.jsx)(n.td,{children:"True"})]})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"List[str]"}),(0,t.jsx)(n.td,{children:"List of similar tickers."})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"To get similar tickers to AAPL from Finviz:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\nsimilar_tickers = openbb.stocks.ca.similar("AAPL)\n'})}),"\n",(0,t.jsx)(n.p,{children:"To use our custom TSNE model for similar tickers in the SP500:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'similar_tickers = openbb.stocks.ca.similar("AAPL", source="TSNE")\n'})}),"\n",(0,t.jsx)(n.hr,{})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},94331:(e,n,s)=>{s.d(n,{A:()=>r});s(96540);var t=s(5260),i=s(74848);function r(e){let{title:n}=e;return(0,i.jsx)(t.A,{children:(0,i.jsx)("title",{children:n})})}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>a});var t=s(96540);const i={},r=t.createContext(i);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);