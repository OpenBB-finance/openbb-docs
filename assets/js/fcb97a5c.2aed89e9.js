"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92057],{70237:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=r(74848),s=r(28453),n=r(94331);const o={title:"hist",description:"Learn how to use the 'op hist' command to retrieve the historical price of options given certain parameters such as ticker, expiry, strike, option type and interval for the past x number of days in chart format. Includes examples and descriptions of the parameters.",keywords:["Stock Ticker","Expiration Date","Option Strike Price","Calls or Puts","Chart Minute Interval","Past Days to Display","op hist command","historical price of options","chart format"]},a=void 0,c={id:"bot/reference/discord/options/hist",title:"hist",description:"Learn how to use the 'op hist' command to retrieve the historical price of options given certain parameters such as ticker, expiry, strike, option type and interval for the past x number of days in chart format. Includes examples and descriptions of the parameters.",source:"@site/content/bot/reference/discord/options/hist.md",sourceDirName:"bot/reference/discord/options",slug:"/bot/reference/discord/options/hist",permalink:"/bot/reference/discord/options/hist",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/bot/reference/discord/options/hist.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719309708e3,frontMatter:{title:"hist",description:"Learn how to use the 'op hist' command to retrieve the historical price of options given certain parameters such as ticker, expiry, strike, option type and interval for the past x number of days in chart format. Includes examples and descriptions of the parameters.",keywords:["Stock Ticker","Expiration Date","Option Strike Price","Calls or Puts","Chart Minute Interval","Past Days to Display","op hist command","historical price of options","chart format"]},sidebar:"tutorialSidebar",previous:{title:"highiv",permalink:"/bot/reference/discord/options/highiv"},next:{title:"indexpc",permalink:"/bot/reference/discord/options/indexpc"}},d={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.A,{title:"options: hist - Discord Reference | OpenBB Bot Docs"}),"\n",(0,i.jsx)(t.p,{children:"This command allows the user to retrieve the historical price of options for the given parameters of a ticker, expiry, strike , option type, and interval for the past x days in a chart format."}),"\n",(0,i.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"/op hist ticker expiry strike opt_type interval [past_days]\n"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Optional"}),(0,i.jsx)(t.th,{children:"Choices"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker"}),(0,i.jsx)(t.td,{children:"Stock Ticker"}),(0,i.jsx)(t.td,{children:"False"}),(0,i.jsx)(t.td,{children:"None"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"expiry"}),(0,i.jsx)(t.td,{children:"Expiration Date YYYY-MM-DD format"}),(0,i.jsx)(t.td,{children:"False"}),(0,i.jsx)(t.td,{children:"None"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"strike"}),(0,i.jsx)(t.td,{children:"Option Strike Price"}),(0,i.jsx)(t.td,{children:"False"}),(0,i.jsx)(t.td,{children:"None"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"opt_type"}),(0,i.jsx)(t.td,{children:"Calls or Puts"}),(0,i.jsx)(t.td,{children:"False"}),(0,i.jsx)(t.td,{children:"Calls, Puts"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"interval"}),(0,i.jsx)(t.td,{children:"Chart Minute Interval, 1440 for Daily"}),(0,i.jsx)(t.td,{children:"False"}),(0,i.jsx)(t.td,{children:"15 (15), 30 (30), 60 (60), 1440 (1440)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"past_days"}),(0,i.jsx)(t.td,{children:"Past Days to Display. Default: 5"}),(0,i.jsx)(t.td,{children:"True"}),(0,i.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"/op hist ticker:AMD expiry:2022-07-29 strike:80 opt_type:Calls interval:15 past_days:5\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"/op hist ticker:AMD expiry:2022-07-29 strike:80 opt_type:Calls interval:15\n"})}),"\n",(0,i.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>n});r(96540);var i=r(5260),s=r(74848);function n(e){let{title:t}=e;return(0,s.jsx)(i.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var i=r(96540);const s={},n=i.createContext(s);function o(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);