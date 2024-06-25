"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[63549],{2520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>d,metadata:()=>s,toc:()=>l});var r=n(74848),a=n(28453),i=n(94331);const d={title:"ttcp",description:"This documentation page provides details on the usage of the ttcp tool used for displaying the most traded crypto pairs on a chosen decentralized exchange over a selected time period. It includes the description and options for each parameter.",keywords:["ttcp","traded crypto pairs","decentralized exchange","crypto trading","trading","blockchain","1inch","Uniswap","trade parameters","tradeAmount"]},c=void 0,s={id:"terminal/reference/crypto/onchain/ttcp",title:"ttcp",description:"This documentation page provides details on the usage of the ttcp tool used for displaying the most traded crypto pairs on a chosen decentralized exchange over a selected time period. It includes the description and options for each parameter.",source:"@site/content/terminal/reference/crypto/onchain/ttcp.md",sourceDirName:"terminal/reference/crypto/onchain",slug:"/terminal/reference/crypto/onchain/ttcp",permalink:"/terminal/reference/crypto/onchain/ttcp",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/crypto/onchain/ttcp.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719309708e3,frontMatter:{title:"ttcp",description:"This documentation page provides details on the usage of the ttcp tool used for displaying the most traded crypto pairs on a chosen decentralized exchange over a selected time period. It includes the description and options for each parameter.",keywords:["ttcp","traded crypto pairs","decentralized exchange","crypto trading","trading","blockchain","1inch","Uniswap","trade parameters","tradeAmount"]},sidebar:"tutorialSidebar",previous:{title:"top",permalink:"/terminal/reference/crypto/onchain/top"},next:{title:"tv",permalink:"/terminal/reference/crypto/onchain/tv"}},o={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{title:"crypto/onchain/ttcp - Reference | OpenBB Terminal Docs"}),"\n",(0,r.jsxs)(t.p,{children:["Display most traded crypto pairs on given decentralized exchange in chosen time period. [Source: ",(0,r.jsx)(t.a,{href:"https://graphql.bitquery.io/",children:"https://graphql.bitquery.io/"}),"]"]}),"\n",(0,r.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"ttcp [-l LIMIT] [-e {1inch,AfroDex,AirSwap,Amplbitcratic,Balancer,BestSwap,Bitox,CellSwap,Cellswap,Cofix,Coinchangex,Curve,DDEX,DUBIex,DecentrEx,DeversiFi,Dodo,ETHERCExchange,EtherBlockchain,EtherDelta,Ethernext,Ethfinex,FEGex,FFFSwap,Fordex,GUDecks,GUDeks,HiSwap,IDEX,LedgerDex,Matcha,Miniswap,Mooniswap,Oasis,OpenRelay,S.Finance,SakeSwap,SeedDex,SingularX,StarBitEx,SushiSwap,SwapX,SwitchDex,TacoSwap,TokenJar,TokenStore,TokenTrove,Tokenlon,TradexOne,Uniswap,ZeusSwap,dYdX,dex.blue}] [-d DAYS] [-s {base,quoted,trades,tradeAmount}] [-r]\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"}),(0,r.jsx)(t.th,{children:"Choices"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"limit"}),(0,r.jsx)(t.td,{children:"display N number records"}),(0,r.jsx)(t.td,{children:"10"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"exchange"}),(0,r.jsx)(t.td,{children:"Decentralized exchange name."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"1inch, AfroDex, AirSwap, Amplbitcratic, Balancer, BestSwap, Bitox, CellSwap, Cellswap, Cofix, Coinchangex, Curve, DDEX, DUBIex, DecentrEx, DeversiFi, Dodo, ETHERCExchange, EtherBlockchain, EtherDelta, Ethernext, Ethfinex, FEGex, FFFSwap, Fordex, GUDecks, GUDeks, HiSwap, IDEX, LedgerDex, Matcha, Miniswap, Mooniswap, Oasis, OpenRelay, S.Finance, SakeSwap, SeedDex, SingularX, StarBitEx, SushiSwap, SwapX, SwitchDex, TacoSwap, TokenJar, TokenStore, TokenTrove, Tokenlon, TradexOne, Uniswap, ZeusSwap, dYdX, dex.blue"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"days"}),(0,r.jsx)(t.td,{children:"Number of days to display data for."}),(0,r.jsx)(t.td,{children:"30"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"range(1, 100)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sortby"}),(0,r.jsx)(t.td,{children:"Sort by given column."}),(0,r.jsx)(t.td,{children:"tradeAmount"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"base, quoted, trades, tradeAmount"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"reverse"}),(0,r.jsx)(t.td,{children:"Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed."}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,r.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(5260),a=n(74848);function i(e){let{title:t}=e;return(0,a.jsx)(r.A,{children:(0,a.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>c});var r=n(96540);const a={},i=r.createContext(a);function d(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);