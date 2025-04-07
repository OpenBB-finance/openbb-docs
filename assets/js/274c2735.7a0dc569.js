"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68476],{6758:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(74848),o=r(28453),a=r(94331);const i={title:"exp",description:"Detailed guide on the 'flowsum exp' command used for retrieving the total premium of a given stock ticker for the current trading day, including example usage and parameters explanation.",keywords:["flowsum exp command","option premium","stock ticker","trading day","above ask","expiry","expiration date","subcmd: exp","example usage"]},s=void 0,l={id:"bot/reference/telegram/flow/flowsum/exp",title:"exp",description:"Detailed guide on the 'flowsum exp' command used for retrieving the total premium of a given stock ticker for the current trading day, including example usage and parameters explanation.",source:"@site/content/bot/reference/telegram/flow/flowsum/exp.md",sourceDirName:"bot/reference/telegram/flow/flowsum",slug:"/bot/reference/telegram/flow/flowsum/exp",permalink:"/bot/reference/telegram/flow/flowsum/exp",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/bot/reference/telegram/flow/flowsum/exp.md",tags:[],version:"current",lastUpdatedBy:"jose-donato",lastUpdatedAt:1744041894e3,frontMatter:{title:"exp",description:"Detailed guide on the 'flowsum exp' command used for retrieving the total premium of a given stock ticker for the current trading day, including example usage and parameters explanation.",keywords:["flowsum exp command","option premium","stock ticker","trading day","above ask","expiry","expiration date","subcmd: exp","example usage"]},sidebar:"tutorialSidebar",previous:{title:"day",permalink:"/bot/reference/telegram/flow/flowsum/day"},next:{title:"top",permalink:"/bot/reference/telegram/flow/flowsum/top"}},d={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{title:"flowsum - flow: exp - Telegram Reference | OpenBB Bot Docs"}),"\n",(0,n.jsx)(t.p,{children:"This command allows the user to retrieve the total premium of the given stock ticker for the current trading day by expiration. We categorize the calls and puts by where the trade occurred on the bid/ask. For example, Above Ask, means the trade happened over the current Ask price."}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"/flowsum exp [ticker] [expiry]\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Optional"}),(0,n.jsx)(t.th,{children:"Choices"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ticker"}),(0,n.jsx)(t.td,{children:"Stock Ticker - Not available for subcmd: top"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"expiry"}),(0,n.jsx)(t.td,{children:"Expiration date - Only available/required for subcmd: exp"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"/flowsum exp AMD 2022-07-29\n"})}),"\n",(0,n.jsx)(t.hr,{})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var n=r(5260),o=r(74848);function a(e){let{title:t}=e;return(0,o.jsx)(n.A,{children:(0,o.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>s});var n=r(96540);const o={},a=n.createContext(o);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);