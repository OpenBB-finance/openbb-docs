"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25534],{50704:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=o(74848),r=o(28453),n=o(94331);const s={title:"stoch",description:"The page provides detailed information about the Stochastic Oscillator trading tool. It describes the principles of operation, situations of overbought and oversold conditions, and offers instructions for its usage. It also specifies parameters and their functionality, including time periods of fastk, slowd, and slowk moving averages.",keywords:["Stochastic Oscillator","Overbought condition","Oversold condition","Fast %D","Slow %D","Buy signal","Sell signal","Raw %K","Trading range","N_fastkperiod","N_slowdperiod","N_slowkperiod","Fastk moving average","Slowk moving average","Slowd moving average"]},a=void 0,d={id:"terminal/reference/forex/ta/stoch",title:"stoch",description:"The page provides detailed information about the Stochastic Oscillator trading tool. It describes the principles of operation, situations of overbought and oversold conditions, and offers instructions for its usage. It also specifies parameters and their functionality, including time periods of fastk, slowd, and slowk moving averages.",source:"@site/content/terminal/reference/forex/ta/stoch.md",sourceDirName:"terminal/reference/forex/ta",slug:"/terminal/reference/forex/ta/stoch",permalink:"/terminal/reference/forex/ta/stoch",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/forex/ta/stoch.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719309708e3,frontMatter:{title:"stoch",description:"The page provides detailed information about the Stochastic Oscillator trading tool. It describes the principles of operation, situations of overbought and oversold conditions, and offers instructions for its usage. It also specifies parameters and their functionality, including time periods of fastk, slowd, and slowk moving averages.",keywords:["Stochastic Oscillator","Overbought condition","Oversold condition","Fast %D","Slow %D","Buy signal","Sell signal","Raw %K","Trading range","N_fastkperiod","N_slowdperiod","N_slowkperiod","Fastk moving average","Slowk moving average","Slowd moving average"]},sidebar:"tutorialSidebar",previous:{title:"sma",permalink:"/terminal/reference/forex/ta/sma"},next:{title:"zlma",permalink:"/terminal/reference/forex/ta/zlma"}},l={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.A,{title:"forex/ta/stoch - Reference | OpenBB Terminal Docs"}),"\n",(0,i.jsx)(t.p,{children:"The Stochastic Oscillator measures where the close is in relation to the recent trading range. The values range from zero to 100. %D values over 75 indicate an overbought condition; values under 25 indicate an oversold condition. When the Fast %D crosses above the Slow %D, it is a buy signal; when it crosses below, it is a sell signal. The Raw %K is generally considered too erratic to use for crossover signals."}),"\n",(0,i.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"stoch [-k N_FASTKPERIOD] [-d N_SLOWDPERIOD] [--slowkperiod N_SLOWKPERIOD]\n"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Optional"}),(0,i.jsx)(t.th,{children:"Choices"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"n_fastkperiod"}),(0,i.jsx)(t.td,{children:"The time period of the fastk moving average"}),(0,i.jsx)(t.td,{children:"14"}),(0,i.jsx)(t.td,{children:"True"}),(0,i.jsx)(t.td,{children:"None"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"n_slowdperiod"}),(0,i.jsx)(t.td,{children:"The time period of the slowd moving average"}),(0,i.jsx)(t.td,{children:"3"}),(0,i.jsx)(t.td,{children:"True"}),(0,i.jsx)(t.td,{children:"None"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"n_slowkperiod"}),(0,i.jsx)(t.td,{children:"The time period of the slowk moving average"}),(0,i.jsx)(t.td,{children:"3"}),(0,i.jsx)(t.td,{children:"True"}),(0,i.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/154311913-d58e58bb-d116-44dd-ae4b-44e59c25f22a.png",alt:"stoch"})}),"\n",(0,i.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},94331:(e,t,o)=>{o.d(t,{A:()=>n});o(96540);var i=o(5260),r=o(74848);function n(e){let{title:t}=e;return(0,r.jsx)(i.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>a});var i=o(96540);const r={},n=i.createContext(r);function s(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);