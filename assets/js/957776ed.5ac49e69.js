"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4199],{27715:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=r(74848),i=r(28453),s=r(94331);const o={title:"find",description:"The page provides the information about a function that can find similar coins by coin name, symbol or id. The tool supports multiple data sources including: CoinGecko, CoinPaprika, Binance, and Coinbase and can return the data in a Pandas DataFrame format.",keywords:["find similar coin","cryptocurrency","Cryptocurrency search","CoinGecko","CoinPaprika","Binance","Coinbase","Data source of coins","data frame","openbb.crypto.find","Crypto search function"]},c=void 0,a={id:"sdk/reference/crypto/find",title:"find",description:"The page provides the information about a function that can find similar coins by coin name, symbol or id. The tool supports multiple data sources including: CoinGecko, CoinPaprika, Binance, and Coinbase and can return the data in a Pandas DataFrame format.",source:"@site/content/sdk/reference/crypto/find.md",sourceDirName:"sdk/reference/crypto",slug:"/sdk/reference/crypto/find",permalink:"/sdk/reference/crypto/find",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/crypto/find.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719240743e3,frontMatter:{title:"find",description:"The page provides the information about a function that can find similar coins by coin name, symbol or id. The tool supports multiple data sources including: CoinGecko, CoinPaprika, Binance, and Coinbase and can return the data in a Pandas DataFrame format.",keywords:["find similar coin","cryptocurrency","Cryptocurrency search","CoinGecko","CoinPaprika","Binance","Coinbase","Data source of coins","data frame","openbb.crypto.find","Crypto search function"]},sidebar:"tutorialSidebar",previous:{title:"trending",permalink:"/sdk/reference/crypto/disc/trending"},next:{title:"load",permalink:"/sdk/reference/crypto/load"}},d={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.A,{title:"crypto.find - Reference | OpenBB SDK Docs"}),"\n",(0,t.jsx)(n.p,{children:"Find similar coin by coin name,symbol or id."}),"\n",(0,t.jsxs)(n.p,{children:["Source Code: [",(0,t.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/crypto_models.py#L9",children:"link"}),"]"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'openbb.crypto.find(query: str, source: str = "CoinGecko", key: str = "symbol", limit: int = 10)\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Default"}),(0,t.jsx)(n.th,{children:"Optional"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"query"}),(0,t.jsx)(n.td,{children:"str"}),(0,t.jsx)(n.td,{children:"Cryptocurrency"}),(0,t.jsx)(n.td,{children:"None"}),(0,t.jsx)(n.td,{children:"False"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"source"}),(0,t.jsx)(n.td,{children:"str"}),(0,t.jsx)(n.td,{children:"Data source of coins.  CoinGecko or CoinPaprika or Binance or Coinbase"}),(0,t.jsx)(n.td,{children:"CoinGecko"}),(0,t.jsx)(n.td,{children:"True"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"key"}),(0,t.jsx)(n.td,{children:"str"}),(0,t.jsx)(n.td,{children:"Searching key (symbol, id, name)"}),(0,t.jsx)(n.td,{children:"symbol"}),(0,t.jsx)(n.td,{children:"True"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"limit"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"Number of records to display"}),(0,t.jsx)(n.td,{children:"10"}),(0,t.jsx)(n.td,{children:"True"})]})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"pd.DataFrame"}),(0,t.jsx)(n.td,{children:"DataFrame with 'limit' similar coins"})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\nopenbb.crypto.find("polka", "CoinGecko", "name", 25)\n'})}),"\n",(0,t.jsx)(n.hr,{})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},94331:(e,n,r)=>{r.d(n,{A:()=>s});r(96540);var t=r(5260),i=r(74848);function s(e){let{title:n}=e;return(0,i.jsx)(t.A,{children:(0,i.jsx)("title",{children:n})})}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var t=r(96540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);