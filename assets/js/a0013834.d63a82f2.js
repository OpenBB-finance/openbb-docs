"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31761],{80100:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(74848),d=n(28453),s=n(94331);const a={title:"dex_trades_monthly",description:"Provides access to aggregated data of trades executed on Decentralized Exchanges. You can set the currency of trade amount, limit the number of days and even sort the data as required.",keywords:["dex_trades_monthly","Decentralized Exchanges","Trades data","openbb_crypto_onchain","trade_amount_currency","USD","limit","ascend"]},c=void 0,o={id:"sdk/reference/crypto/onchain/dex_trades_monthly",title:"dex_trades_monthly",description:"Provides access to aggregated data of trades executed on Decentralized Exchanges. You can set the currency of trade amount, limit the number of days and even sort the data as required.",source:"@site/content/sdk/reference/crypto/onchain/dex_trades_monthly.md",sourceDirName:"sdk/reference/crypto/onchain",slug:"/sdk/reference/crypto/onchain/dex_trades_monthly",permalink:"/sdk/reference/crypto/onchain/dex_trades_monthly",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/crypto/onchain/dex_trades_monthly.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719240743e3,frontMatter:{title:"dex_trades_monthly",description:"Provides access to aggregated data of trades executed on Decentralized Exchanges. You can set the currency of trade amount, limit the number of days and even sort the data as required.",keywords:["dex_trades_monthly","Decentralized Exchanges","Trades data","openbb_crypto_onchain","trade_amount_currency","USD","limit","ascend"]},sidebar:"tutorialSidebar",previous:{title:"btc_transac",permalink:"/sdk/reference/crypto/onchain/btc_transac"},next:{title:"dvcp",permalink:"/sdk/reference/crypto/onchain/dvcp"}},i={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.A,{title:"crypto.onchain.dex_trades_monthly - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(t.p,{children:"Get list of trades on Decentralized Exchanges monthly aggregated."}),"\n",(0,r.jsxs)(t.p,{children:["Source Code: [",(0,r.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/bitquery_model.py#L333",children:"link"}),"]"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'openbb.crypto.onchain.dex_trades_monthly(trade_amount_currency: str = "USD", limit: int = 90, ascend: bool = True)\n'})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"trade_amount_currency"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Currency of displayed trade amount. Default: USD"}),(0,r.jsx)(t.td,{children:"USD"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"limit"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsxs)(t.td,{children:["Last n days to query data. Maximum 365 (bigger numbers can cause timeouts",(0,r.jsx)("br",{}),"on server side)"]}),(0,r.jsx)(t.td,{children:"90"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ascend"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"Flag to sort data ascending"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"pd.DataFrame"}),(0,r.jsx)(t.td,{children:"Trades on Decentralized Exchanges monthly aggregated"})]})})]}),"\n",(0,r.jsx)(t.hr,{})]})}function u(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(5260),d=n(74848);function s(e){let{title:t}=e;return(0,d.jsx)(r.A,{children:(0,d.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var r=n(96540);const d={},s=r.createContext(d);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);