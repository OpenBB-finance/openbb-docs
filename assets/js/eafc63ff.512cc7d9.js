"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12821],{10896:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var s=r(74848),i=r(28453),n=r(94331);const o={title:"grhist",description:"The grhist page is dedicated to illustrating how to plot historical option greeks using Python. It includes various parameters like strike price, put option, greek column, OCC option symbol, raw data, among others. It also demonstrates the use of a certain data visualization for better understanding.",keywords:["grhist","historical option greeks plot","option greeks","put option","strike price","greek column","OCC option symbol","raw data","data visualization"]},a=void 0,d={id:"terminal/reference/stocks/options/grhist",title:"grhist",description:"The grhist page is dedicated to illustrating how to plot historical option greeks using Python. It includes various parameters like strike price, put option, greek column, OCC option symbol, raw data, among others. It also demonstrates the use of a certain data visualization for better understanding.",source:"@site/content/terminal/reference/stocks/options/grhist.md",sourceDirName:"terminal/reference/stocks/options",slug:"/terminal/reference/stocks/options/grhist",permalink:"/terminal/reference/stocks/options/grhist",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/stocks/options/grhist.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719309708e3,frontMatter:{title:"grhist",description:"The grhist page is dedicated to illustrating how to plot historical option greeks using Python. It includes various parameters like strike price, put option, greek column, OCC option symbol, raw data, among others. It also demonstrates the use of a certain data visualization for better understanding.",keywords:["grhist","historical option greeks plot","option greeks","put option","strike price","greek column","OCC option symbol","raw data","data visualization"]},sidebar:"tutorialSidebar",previous:{title:"greeks",permalink:"/terminal/reference/stocks/options/greeks"},next:{title:"add",permalink:"/terminal/reference/stocks/options/hedge/add"}},l={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.A,{title:"stocks/options/grhist - Reference | OpenBB Terminal Docs"}),"\n",(0,s.jsx)(t.p,{children:"Plot historical option greeks."}),"\n",(0,s.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"grhist -s STRIKE [-p] [-g {iv,gamma,theta,vega,delta,rho,premium}] [-c CHAIN_ID] [-r] [-l LIMIT]\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"}),(0,s.jsx)(t.th,{children:"Choices"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"strike"}),(0,s.jsx)(t.td,{children:"Strike price to look at"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"put"}),(0,s.jsx)(t.td,{children:"Flag for showing put option"}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"greek"}),(0,s.jsx)(t.td,{children:"Greek column to select"}),(0,s.jsx)(t.td,{children:"delta"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"iv, gamma, theta, vega, delta, rho, premium"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"chain_id"}),(0,s.jsx)(t.td,{children:"OCC option symbol"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"raw"}),(0,s.jsx)(t.td,{children:"Display raw data"}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"limit"}),(0,s.jsx)(t.td,{children:"Limit of raw data rows to display"}),(0,s.jsx)(t.td,{children:"20"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/154278932-086a0005-be71-4493-843d-3f9100a60905.png",alt:"grhist"})}),"\n",(0,s.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>n});r(96540);var s=r(5260),i=r(74848);function n(e){let{title:t}=e;return(0,i.jsx)(s.A,{children:(0,i.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var s=r(96540);const i={},n=s.createContext(i);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);