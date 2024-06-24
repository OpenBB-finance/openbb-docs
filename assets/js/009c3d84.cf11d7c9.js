"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88690],{57649:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=n(74848),r=n(28453),i=n(94331);const s={title:"il",description:"The Document page provides details on the 'il' tool designed to calculate Impermanent Loss in custom liquidity pools. Including its usage, and parameters such as token price change and pool proportion, the tool allows users to estimate potential impermanent losses.",keywords:["Impermanent Loss","Liquidity Pool","Token Price Change","Pool Proportion","Dollar Value","il Tool"]},l=void 0,a={id:"terminal/reference/crypto/tools/il",title:"il",description:"The Document page provides details on the 'il' tool designed to calculate Impermanent Loss in custom liquidity pools. Including its usage, and parameters such as token price change and pool proportion, the tool allows users to estimate potential impermanent losses.",source:"@site/content/terminal/reference/crypto/tools/il.md",sourceDirName:"terminal/reference/crypto/tools",slug:"/terminal/reference/crypto/tools/il",permalink:"/terminal/reference/crypto/tools/il",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/crypto/tools/il.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719247347e3,frontMatter:{title:"il",description:"The Document page provides details on the 'il' tool designed to calculate Impermanent Loss in custom liquidity pools. Including its usage, and parameters such as token price change and pool proportion, the tool allows users to estimate potential impermanent losses.",keywords:["Impermanent Loss","Liquidity Pool","Token Price Change","Pool Proportion","Dollar Value","il Tool"]},sidebar:"tutorialSidebar",previous:{title:"aprtoapy",permalink:"/terminal/reference/crypto/tools/aprtoapy"},next:{title:"econometrics",permalink:"/terminal/reference/econometrics/"}},c={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function p(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.A,{title:"crypto/tools/il - Reference | OpenBB Terminal Docs"}),"\n",(0,o.jsx)(t.p,{children:"Tool to calculate Impermanent Loss in a custom liquidity pool. Users can provide percentages increases for two tokens (and their weight in the liquidity pool) and verify the impermanent loss that can occur."}),"\n",(0,o.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"il [-a PRICECHANGEA] [-b PRICECHANGEB] [-p PROPORTION] [-v VALUE] [-n]\n"})}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Name"}),(0,o.jsx)(t.th,{children:"Description"}),(0,o.jsx)(t.th,{children:"Default"}),(0,o.jsx)(t.th,{children:"Optional"}),(0,o.jsx)(t.th,{children:"Choices"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"priceChangeA"}),(0,o.jsx)(t.td,{children:"Token A price change in percentage"}),(0,o.jsx)(t.td,{children:"0"}),(0,o.jsx)(t.td,{children:"True"}),(0,o.jsx)(t.td,{children:"range(1, 101)"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"priceChangeB"}),(0,o.jsx)(t.td,{children:"Token B price change in percentage"}),(0,o.jsx)(t.td,{children:"100"}),(0,o.jsx)(t.td,{children:"True"}),(0,o.jsx)(t.td,{children:"range(1, 101)"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"proportion"}),(0,o.jsx)(t.td,{children:"Pool proportion. E.g., 50 means that pool contains 50%% of token A and 50%% of token B, 30 means that pool contains 30%% of token A and 70%% of token B"}),(0,o.jsx)(t.td,{children:"50"}),(0,o.jsx)(t.td,{children:"True"}),(0,o.jsx)(t.td,{children:"range(1, 101)"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"value"}),(0,o.jsx)(t.td,{children:"Initial amount of dollars that user provides to liquidity pool"}),(0,o.jsx)(t.td,{children:"1000"}),(0,o.jsx)(t.td,{children:"True"}),(0,o.jsx)(t.td,{children:"None"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"narrative"}),(0,o.jsx)(t.td,{children:"Flag to show narrative instead of dataframe"}),(0,o.jsx)(t.td,{children:"False"}),(0,o.jsx)(t.td,{children:"True"}),(0,o.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,o.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var o=n(5260),r=n(74848);function i(e){let{title:t}=e;return(0,r.jsx)(o.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var o=n(96540);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);