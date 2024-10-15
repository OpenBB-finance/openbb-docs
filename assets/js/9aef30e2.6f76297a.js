"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76272],{20681:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var i=r(74848),s=r(28453),n=r(94331);const a={title:"hist",description:"Learn how to retrieve the historical price of options using the '/hist' command, considering parameters such as ticker, expiry, strike, option type, interval, and past days. This page includes examples and a detailed description of each parameter.",keywords:["stock options","historical data","stock ticker","expiry date","option type","/hist command","strike price","chart minute interval","past days"]},o=void 0,d={id:"bot/reference/telegram/options/hist",title:"hist",description:"Learn how to retrieve the historical price of options using the '/hist' command, considering parameters such as ticker, expiry, strike, option type, interval, and past days. This page includes examples and a detailed description of each parameter.",source:"@site/content/bot/reference/telegram/options/hist.md",sourceDirName:"bot/reference/telegram/options",slug:"/bot/reference/telegram/options/hist",permalink:"/bot/reference/telegram/options/hist",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/bot/reference/telegram/options/hist.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1728987302e3,frontMatter:{title:"hist",description:"Learn how to retrieve the historical price of options using the '/hist' command, considering parameters such as ticker, expiry, strike, option type, interval, and past days. This page includes examples and a detailed description of each parameter.",keywords:["stock options","historical data","stock ticker","expiry date","option type","/hist command","strike price","chart minute interval","past days"]},sidebar:"tutorialSidebar",previous:{title:"highiv",permalink:"/bot/reference/telegram/options/highiv"},next:{title:"indexpc",permalink:"/bot/reference/telegram/options/indexpc"}},c={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.A,{title:"options: hist - Telegram Reference | OpenBB Bot Docs"}),"\n",(0,i.jsx)(t.p,{children:"This command allows the user to retrieve the historical price of options for the given parameters of a ticker, expiry, strike , option type, and interval for the past x days in a chart format."}),"\n",(0,i.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"/hist ticker expiry strike opt_type interval [past_days]\n"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Optional"}),(0,i.jsx)(t.th,{children:"Choices"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker"}),(0,i.jsx)(t.td,{children:"Stock Ticker"}),(0,i.jsx)(t.td,{children:"False"}),(0,i.jsx)(t.td,{children:"None"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"expiry"}),(0,i.jsx)(t.td,{children:"Expiration Date YYYY-MM-DD format"}),(0,i.jsx)(t.td,{children:"False"}),(0,i.jsx)(t.td,{children:"None"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"strike"}),(0,i.jsx)(t.td,{children:"Option Strike Price"}),(0,i.jsx)(t.td,{children:"False"}),(0,i.jsx)(t.td,{children:"None"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"opt_type"}),(0,i.jsx)(t.td,{children:"Calls or Puts (C or P)"}),(0,i.jsx)(t.td,{children:"False"}),(0,i.jsx)(t.td,{children:"calls, puts, C, P"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"interval"}),(0,i.jsx)(t.td,{children:"Chart Minute Interval. 15m, 30m, 1hr, 1d"}),(0,i.jsx)(t.td,{children:"False"}),(0,i.jsx)(t.td,{children:"1d, 15m, 30m, 1hr"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"past_days"}),(0,i.jsx)(t.td,{children:"Past Days to Display. Default: 5"}),(0,i.jsx)(t.td,{children:"True"}),(0,i.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"/hist AMD 2022-07-29 70 Calls 15m 5\n"})}),"\n",(0,i.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>n});r(96540);var i=r(5260),s=r(74848);function n(e){let{title:t}=e;return(0,s.jsx)(i.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>o});var i=r(96540);const s={},n=i.createContext(s);function a(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);