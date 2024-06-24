"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47050],{864:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(74848),s=a(28453),i=a(94331);const r={title:"zlma",description:"The zlma page provides an in-depth understanding of the zero lag exponential moving average (ZLEMA), with insight into its usage, parameters such as 'n_length' and 'n_offset', and a usage example. This indicator was created by John Ehlers and Ric Way and the page neatly explains the concept with visual aids.",keywords:["zlma","zero lag exponential moving average","John Ehlers","Ric Way","exponential moving average","EMA","de-lagged data","moving average","n_length","n_offset"]},l=void 0,o={id:"terminal/reference/stocks/ta/zlma",title:"zlma",description:"The zlma page provides an in-depth understanding of the zero lag exponential moving average (ZLEMA), with insight into its usage, parameters such as 'n_length' and 'n_offset', and a usage example. This indicator was created by John Ehlers and Ric Way and the page neatly explains the concept with visual aids.",source:"@site/content/terminal/reference/stocks/ta/zlma.md",sourceDirName:"terminal/reference/stocks/ta",slug:"/terminal/reference/stocks/ta/zlma",permalink:"/terminal/reference/stocks/ta/zlma",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/stocks/ta/zlma.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719247347e3,frontMatter:{title:"zlma",description:"The zlma page provides an in-depth understanding of the zero lag exponential moving average (ZLEMA), with insight into its usage, parameters such as 'n_length' and 'n_offset', and a usage example. This indicator was created by John Ehlers and Ric Way and the page neatly explains the concept with visual aids.",keywords:["zlma","zero lag exponential moving average","John Ehlers","Ric Way","exponential moving average","EMA","de-lagged data","moving average","n_length","n_offset"]},sidebar:"tutorialSidebar",previous:{title:"wma",permalink:"/terminal/reference/stocks/ta/wma"},next:{title:"all",permalink:"/terminal/reference/stocks/th/all"}},d={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"stocks/ta/zlma - Reference | OpenBB Terminal Docs"}),"\n",(0,n.jsx)(t.p,{children:'The zero lag exponential moving average (ZLEMA) indicator was created by John Ehlers and Ric Way. The idea is do a regular exponential moving average (EMA) calculation but on a de-lagged data instead of doing it on the regular data. Data is de-lagged by removing the data from "lag" days ago thus removing (or attempting to) the cumulative effect of the moving average.'}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"zlma [-l N_LENGTH] [-o N_OFFSET]\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"}),(0,n.jsx)(t.th,{children:"Choices"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"n_length"}),(0,n.jsx)(t.td,{children:"Window lengths. Multiple values indicated as comma separated values."}),(0,n.jsx)(t.td,{children:"20"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"n_offset"}),(0,n.jsx)(t.td,{children:"offset"}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/154312786-bc60268b-9da9-4fd9-bed6-fc95f5560075.png",alt:"zlma"})}),"\n",(0,n.jsx)(t.hr,{})]})}function g(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var n=a(5260),s=a(74848);function i(e){let{title:t}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>l});var n=a(96540);const s={},i=n.createContext(s);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);