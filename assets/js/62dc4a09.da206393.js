"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36528],{91232:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=s(74848),r=s(28453),n=s(94331);const o={title:"chains",description:"This docusaurus page explores the `chains` command which allows users to view Options Chains by Expiry for a specific stock. It also explains several parameters such as Stock Ticker, Expiration Date, type of options Calls or Puts, and Strike Prices.",keywords:["Options Chains by Expiry","Stock Ticker","Expiration Date","Calls or Puts","Minimum Strike Price","Maximum Strike Price"]},c=void 0,a={id:"bot/reference/discord/options/chains",title:"chains",description:"This docusaurus page explores the `chains` command which allows users to view Options Chains by Expiry for a specific stock. It also explains several parameters such as Stock Ticker, Expiration Date, type of options Calls or Puts, and Strike Prices.",source:"@site/content/bot/reference/discord/options/chains.md",sourceDirName:"bot/reference/discord/options",slug:"/bot/reference/discord/options/chains",permalink:"/bot/reference/discord/options/chains",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/bot/reference/discord/options/chains.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1732044919e3,frontMatter:{title:"chains",description:"This docusaurus page explores the `chains` command which allows users to view Options Chains by Expiry for a specific stock. It also explains several parameters such as Stock Ticker, Expiration Date, type of options Calls or Puts, and Strike Prices.",keywords:["Options Chains by Expiry","Stock Ticker","Expiration Date","Calls or Puts","Minimum Strike Price","Maximum Strike Price"]},sidebar:"tutorialSidebar",previous:{title:"options",permalink:"/bot/reference/discord/options/"},next:{title:"equitypc",permalink:"/bot/reference/discord/options/equitypc"}},d={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.A,{title:"options: chains - Discord Reference | OpenBB Bot Docs"}),"\n",(0,i.jsx)(t.p,{children:"This command allows users to retrieve Options Chain by Expiry, which gives an overview of the bid, ask, and open interest of options contracts for a specific stock."}),"\n",(0,i.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"/op chains ticker expiry opt_type [min_sp] [max_sp]\n"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Optional"}),(0,i.jsx)(t.th,{children:"Choices"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker"}),(0,i.jsx)(t.td,{children:"Stock Ticker"}),(0,i.jsx)(t.td,{children:"False"}),(0,i.jsx)(t.td,{children:"None"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"expiry"}),(0,i.jsx)(t.td,{children:"Expiration Date"}),(0,i.jsx)(t.td,{children:"False"}),(0,i.jsx)(t.td,{children:"None"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"opt_type"}),(0,i.jsx)(t.td,{children:"Calls or Puts"}),(0,i.jsx)(t.td,{children:"False"}),(0,i.jsx)(t.td,{children:"Calls, Puts"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"min_sp"}),(0,i.jsx)(t.td,{children:"Minimum Strike Price"}),(0,i.jsx)(t.td,{children:"True"}),(0,i.jsx)(t.td,{children:"None"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"max_sp"}),(0,i.jsx)(t.td,{children:"Maximum Strike Price"}),(0,i.jsx)(t.td,{children:"True"}),(0,i.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"/op chains ticker:AMD expiry:2022-07-29 opt_type:Calls\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"/op chains ticker:AMD expiry:2022-07-29 opt_type:Calls min_sp:10 max_sp:100\n"})}),"\n",(0,i.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},94331:(e,t,s)=>{s.d(t,{A:()=>n});s(96540);var i=s(5260),r=s(74848);function n(e){let{title:t}=e;return(0,r.jsx)(i.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>c});var i=s(96540);const r={},n=i.createContext(r);function o(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);