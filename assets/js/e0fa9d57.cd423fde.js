"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52188],{16539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var r=n(74848),o=n(28453),s=n(94331);const i={title:"stoch",description:"Learn about the Stochastic Oscillator, a measurement tool in trading ranges. Discover the meaning of overbought and oversold conditions and how to interpret the signals from Fast %D and Slow %D. Understand how to use parameters like n_fastkperiod, n_slowdperiod, and n_slowkperiod for moving averages.",keywords:["Stochastic Oscillator","overbought condition","oversold condition","Fast %D","Slow %D","buy signal","sell signal","Raw %K","moving average","n_fastkperiod","n_slowdperiod","n_slowkperiod"]},a=void 0,d={id:"terminal/reference/crypto/ta/stoch",title:"stoch",description:"Learn about the Stochastic Oscillator, a measurement tool in trading ranges. Discover the meaning of overbought and oversold conditions and how to interpret the signals from Fast %D and Slow %D. Understand how to use parameters like n_fastkperiod, n_slowdperiod, and n_slowkperiod for moving averages.",source:"@site/content/terminal/reference/crypto/ta/stoch.md",sourceDirName:"terminal/reference/crypto/ta",slug:"/terminal/reference/crypto/ta/stoch",permalink:"/terminal/reference/crypto/ta/stoch",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/crypto/ta/stoch.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719240743e3,frontMatter:{title:"stoch",description:"Learn about the Stochastic Oscillator, a measurement tool in trading ranges. Discover the meaning of overbought and oversold conditions and how to interpret the signals from Fast %D and Slow %D. Understand how to use parameters like n_fastkperiod, n_slowdperiod, and n_slowkperiod for moving averages.",keywords:["Stochastic Oscillator","overbought condition","oversold condition","Fast %D","Slow %D","buy signal","sell signal","Raw %K","moving average","n_fastkperiod","n_slowdperiod","n_slowkperiod"]},sidebar:"tutorialSidebar",previous:{title:"sma",permalink:"/terminal/reference/crypto/ta/sma"},next:{title:"tv",permalink:"/terminal/reference/crypto/ta/tv"}},c={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.A,{title:"crypto/ta/stoch - Reference | OpenBB Terminal Docs"}),"\n",(0,r.jsx)(t.p,{children:"The Stochastic Oscillator measures where the close is in relation to the recent trading range. The values range from zero to 100. %D values over 75 indicate an overbought condition; values under 25 indicate an oversold condition. When the Fast %D crosses above the Slow %D, it is a buy signal; when it crosses below, it is a sell signal. The Raw %K is generally considered too erratic to use for crossover signals."}),"\n",(0,r.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"stoch [-k N_FASTKPERIOD] [-d N_SLOWDPERIOD] [--slowkperiod N_SLOWKPERIOD]\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"}),(0,r.jsx)(t.th,{children:"Choices"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"n_fastkperiod"}),(0,r.jsx)(t.td,{children:"The time period of the fastk moving average"}),(0,r.jsx)(t.td,{children:"14"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"range(1, 100)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"n_slowdperiod"}),(0,r.jsx)(t.td,{children:"The time period of the slowd moving average"}),(0,r.jsx)(t.td,{children:"3"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"range(1, 100)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"n_slowkperiod"}),(0,r.jsx)(t.td,{children:"The time period of the slowk moving average"}),(0,r.jsx)(t.td,{children:"3"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"range(1, 100)"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/154311913-d58e58bb-d116-44dd-ae4b-44e59c25f22a.png",alt:"stoch"})}),"\n",(0,r.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(5260),o=n(74848);function s(e){let{title:t}=e;return(0,o.jsx)(r.A,{children:(0,o.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(96540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);