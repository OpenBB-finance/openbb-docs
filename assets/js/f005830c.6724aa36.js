"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47060],{48617:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=s(74848),r=s(28453),i=s(94331);const o={title:"rh",description:"This page provides detailed information on setting the Robinhood key using the openbb keys function. It includes source code, parameters description, return types, and usage examples. This Python SDK function allows users to handle their Robinhood key in different environments including Jupyter notebook sessions and terminal environment variables.",keywords:["Robinhood","keys","username and password","API key","Jupyter notebook session","terminal environment variables"]},d=void 0,a={id:"sdk/reference/keys/rh",title:"rh",description:"This page provides detailed information on setting the Robinhood key using the openbb keys function. It includes source code, parameters description, return types, and usage examples. This Python SDK function allows users to handle their Robinhood key in different environments including Jupyter notebook sessions and terminal environment variables.",source:"@site/content/sdk/reference/keys/rh.md",sourceDirName:"sdk/reference/keys",slug:"/sdk/reference/keys/rh",permalink:"/sdk/reference/keys/rh",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/keys/rh.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719240743e3,frontMatter:{title:"rh",description:"This page provides detailed information on setting the Robinhood key using the openbb keys function. It includes source code, parameters description, return types, and usage examples. This Python SDK function allows users to handle their Robinhood key in different environments including Jupyter notebook sessions and terminal environment variables.",keywords:["Robinhood","keys","username and password","API key","Jupyter notebook session","terminal environment variables"]},sidebar:"tutorialSidebar",previous:{title:"reddit",permalink:"/sdk/reference/keys/reddit"},next:{title:"santiment",permalink:"/sdk/reference/keys/santiment"}},l={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.A,{title:"keys.rh - Reference | OpenBB SDK Docs"}),"\n",(0,t.jsx)(n.p,{children:"Set Robinhood key"}),"\n",(0,t.jsxs)(n.p,{children:["Source Code: [",(0,t.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/keys_model.py#L1227",children:"link"}),"]"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"openbb.keys.rh(username: str, password: str, persist: bool = False, show_output: bool = False)\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Default"}),(0,t.jsx)(n.th,{children:"Optional"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"username"}),(0,t.jsx)(n.td,{children:"str"}),(0,t.jsx)(n.td,{children:"User username"}),(0,t.jsx)(n.td,{children:"None"}),(0,t.jsx)(n.td,{children:"False"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"password"}),(0,t.jsx)(n.td,{children:"str"}),(0,t.jsx)(n.td,{children:"User password"}),(0,t.jsx)(n.td,{children:"None"}),(0,t.jsx)(n.td,{children:"False"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"persist"}),(0,t.jsx)(n.td,{children:"bool"}),(0,t.jsxs)(n.td,{children:["If False, api key change will be contained to where it was changed. For example, a Jupyter notebook session.",(0,t.jsx)("br",{}),"If True, api key change will be global, i.e. it will affect terminal environment variables.",(0,t.jsx)("br",{}),"By default, False."]}),(0,t.jsx)(n.td,{children:"False"}),(0,t.jsx)(n.td,{children:"True"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"show_output"}),(0,t.jsx)(n.td,{children:"bool"}),(0,t.jsx)(n.td,{children:"Display status string or not. By default, False."}),(0,t.jsx)(n.td,{children:"False"}),(0,t.jsx)(n.td,{children:"True"})]})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"str"}),(0,t.jsx)(n.td,{children:"Status of key set"})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from openbb_terminal.sdk import openbb\nopenbb.keys.rh(\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'username="example_username",\n        password="example_password"\n    )\n'})}),"\n",(0,t.jsx)(n.hr,{})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},94331:(e,n,s)=>{s.d(n,{A:()=>i});s(96540);var t=s(5260),r=s(74848);function i(e){let{title:n}=e;return(0,r.jsx)(t.A,{children:(0,r.jsx)("title",{children:n})})}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var t=s(96540);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);