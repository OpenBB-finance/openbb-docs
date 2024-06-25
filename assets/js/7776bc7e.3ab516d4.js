"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47067],{16299:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var t=r(74848),n=r(28453),i=r(94331);const d={title:"degiro",description:"This page provides information on how to set the Degiro key using the OpenBB terminal. You'll learn about parameters like username, password, and optional fields like secret, persist and show_output. It also includes code examples for better understanding.",keywords:["Degiro key","Set Degiro key","username","password","persist","show_output","Jupyter notebook","terminal environment variables","api key change"]},o=void 0,l={id:"sdk/reference/keys/degiro",title:"degiro",description:"This page provides information on how to set the Degiro key using the OpenBB terminal. You'll learn about parameters like username, password, and optional fields like secret, persist and show_output. It also includes code examples for better understanding.",source:"@site/content/sdk/reference/keys/degiro.md",sourceDirName:"sdk/reference/keys",slug:"/sdk/reference/keys/degiro",permalink:"/sdk/reference/keys/degiro",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/keys/degiro.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719309708e3,frontMatter:{title:"degiro",description:"This page provides information on how to set the Degiro key using the OpenBB terminal. You'll learn about parameters like username, password, and optional fields like secret, persist and show_output. It also includes code examples for better understanding.",keywords:["Degiro key","Set Degiro key","username","password","persist","show_output","Jupyter notebook","terminal environment variables","api key change"]},sidebar:"tutorialSidebar",previous:{title:"cpanic",permalink:"/sdk/reference/keys/cpanic"},next:{title:"eodhd",permalink:"/sdk/reference/keys/eodhd"}},a={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const s={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.A,{title:"keys.degiro - Reference | OpenBB SDK Docs"}),"\n",(0,t.jsx)(s.p,{children:"Set Degiro key"}),"\n",(0,t.jsxs)(s.p,{children:["Source Code: [",(0,t.jsx)(s.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/keys_model.py#L1296",children:"link"}),"]"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'openbb.keys.degiro(username: str, password: str, secret: str = "", persist: bool = False, show_output: bool = False)\n'})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Default"}),(0,t.jsx)(s.th,{children:"Optional"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"username"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{children:"User username"}),(0,t.jsx)(s.td,{children:"None"}),(0,t.jsx)(s.td,{children:"False"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"password"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{children:"User password"}),(0,t.jsx)(s.td,{children:"None"}),(0,t.jsx)(s.td,{children:"False"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"secret"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{children:"User secret"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"True"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"persist"}),(0,t.jsx)(s.td,{children:"bool"}),(0,t.jsxs)(s.td,{children:["If False, api key change will be contained to where it was changed. For example, a Jupyter notebook session.",(0,t.jsx)("br",{}),"If True, api key change will be global, i.e. it will affect terminal environment variables.",(0,t.jsx)("br",{}),"By default, False."]}),(0,t.jsx)(s.td,{children:"False"}),(0,t.jsx)(s.td,{children:"True"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"show_output"}),(0,t.jsx)(s.td,{children:"bool"}),(0,t.jsx)(s.td,{children:"Display status string or not. By default, False."}),(0,t.jsx)(s.td,{children:"False"}),(0,t.jsx)(s.td,{children:"True"})]})]})]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{children:"Status of key set"})]})})]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"from openbb_terminal.sdk import openbb\nopenbb.keys.degiro(\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'username="example_username",\n        password="example_password"\n    )\n'})}),"\n",(0,t.jsx)(s.hr,{})]})}function p(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},94331:(e,s,r)=>{r.d(s,{A:()=>i});r(96540);var t=r(5260),n=r(74848);function i(e){let{title:s}=e;return(0,n.jsx)(t.A,{children:(0,n.jsx)("title",{children:s})})}},28453:(e,s,r)=>{r.d(s,{R:()=>d,x:()=>o});var t=r(96540);const n={},i=t.createContext(n);function d(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);