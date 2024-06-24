"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65268],{14347:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(74848),r=a(28453),o=a(94331);const i={title:"zlma",description:"The ZLMA (Zero Lag Exponential Moving Average) indicator page covers the concept, usage, and parameters like n_length and n_offset. This indicator, developed by John Ehlers and Ric Way, is used for moving average calculation on de-lagged data. The page also provides a visual representation of the zlma method.",keywords:["zlma","zero lag exponential moving average","EMA","John Ehlers","Ric Way","moving average calculation","lag","de-lagged data","n_length","n_offset"]},l=void 0,s={id:"terminal/reference/forex/ta/zlma",title:"zlma",description:"The ZLMA (Zero Lag Exponential Moving Average) indicator page covers the concept, usage, and parameters like n_length and n_offset. This indicator, developed by John Ehlers and Ric Way, is used for moving average calculation on de-lagged data. The page also provides a visual representation of the zlma method.",source:"@site/content/terminal/reference/forex/ta/zlma.md",sourceDirName:"terminal/reference/forex/ta",slug:"/terminal/reference/forex/ta/zlma",permalink:"/terminal/reference/forex/ta/zlma",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/forex/ta/zlma.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719240743e3,frontMatter:{title:"zlma",description:"The ZLMA (Zero Lag Exponential Moving Average) indicator page covers the concept, usage, and parameters like n_length and n_offset. This indicator, developed by John Ehlers and Ric Way, is used for moving average calculation on de-lagged data. The page also provides a visual representation of the zlma method.",keywords:["zlma","zero lag exponential moving average","EMA","John Ehlers","Ric Way","moving average calculation","lag","de-lagged data","n_length","n_offset"]},sidebar:"tutorialSidebar",previous:{title:"stoch",permalink:"/terminal/reference/forex/ta/stoch"},next:{title:"funds",permalink:"/terminal/reference/funds/"}},d={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.A,{title:"forex/ta/zlma - Reference | OpenBB Terminal Docs"}),"\n",(0,n.jsx)(t.p,{children:'The zero lag exponential moving average (ZLEMA) indicator was created by John Ehlers and Ric Way. The idea is do a regular exponential moving average (EMA) calculation but on a de-lagged data instead of doing it on the regular data. Data is de-lagged by removing the data from "lag" days ago thus removing (or attempting to) the cumulative effect of the moving average.'}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"zlma [-l N_LENGTH] [-o N_OFFSET]\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"}),(0,n.jsx)(t.th,{children:"Choices"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"n_length"}),(0,n.jsx)(t.td,{children:"Window lengths. Multiple values indicated as comma separated values."}),(0,n.jsx)(t.td,{children:"20"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"n_offset"}),(0,n.jsx)(t.td,{children:"offset"}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/154312786-bc60268b-9da9-4fd9-bed6-fc95f5560075.png",alt:"zlma"})}),"\n",(0,n.jsx)(t.hr,{})]})}function g(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,a)=>{a.d(t,{A:()=>o});a(96540);var n=a(5260),r=a(74848);function o(e){let{title:t}=e;return(0,r.jsx)(n.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>l});var n=a(96540);const r={},o=n.createContext(r);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);