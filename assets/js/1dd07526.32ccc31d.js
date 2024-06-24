"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[67100],{75538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=n(74848),r=n(28453),a=n(94331);const i={title:"var",description:"The page provides a comprehensive guide on the usage of 'var' command for calculating Value at Risk (VaR) of selected stocks. It includes details on parameters, usage, and examples.",keywords:["Value at Risk","var","stocks","stock trading","VaR calculation","portfolio management","risk management","quantitative analysis","financial tools"]},d=void 0,l={id:"terminal/reference/stocks/qa/var",title:"var",description:"The page provides a comprehensive guide on the usage of 'var' command for calculating Value at Risk (VaR) of selected stocks. It includes details on parameters, usage, and examples.",source:"@site/content/terminal/reference/stocks/qa/var.md",sourceDirName:"terminal/reference/stocks/qa",slug:"/terminal/reference/stocks/qa/var",permalink:"/terminal/reference/stocks/qa/var",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/stocks/qa/var.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719240743e3,frontMatter:{title:"var",description:"The page provides a comprehensive guide on the usage of 'var' command for calculating Value at Risk (VaR) of selected stocks. It includes details on parameters, usage, and examples.",keywords:["Value at Risk","var","stocks","stock trading","VaR calculation","portfolio management","risk management","quantitative analysis","financial tools"]},sidebar:"tutorialSidebar",previous:{title:"unitroot",permalink:"/terminal/reference/stocks/qa/unitroot"},next:{title:"quote",permalink:"/terminal/reference/stocks/quote"}},o={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.A,{title:"stocks/qa/var - Reference | OpenBB Terminal Docs"}),"\n",(0,s.jsx)(t.p,{children:"Provides value at risk (short: VaR) of the selected stock."}),"\n",(0,s.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"var [-m] [-a] [-s] [-p PERCENTILE] [-d DATA_RANGE]\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"}),(0,s.jsx)(t.th,{children:"Choices"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"use_mean"}),(0,s.jsx)(t.td,{children:"If one should use the mean of the stocks return"}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"adjusted"}),(0,s.jsx)(t.td,{children:"If the VaR should be adjusted for skew and kurtosis (Cornish-Fisher-Expansion)"}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"student_t"}),(0,s.jsx)(t.td,{children:"If one should use the student-t distribution"}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"percentile"}),(0,s.jsx)(t.td,{children:"Percentile used for VaR calculations, for example input 99.9 equals a 99.9 Percent VaR"}),(0,s.jsx)(t.td,{children:"99.9"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"data_range"}),(0,s.jsx)(t.td,{children:"Number of rows you want to use VaR over, ex: if you are using days, 30 would show VaR for the last 30 TRADING days"}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"2022 Feb 16, 11:18 (\ud83e\udd8b) /stocks/qa/ $ var\n          FB Value at Risk\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503       \u2503 VaR:    \u2503 Historical VaR: \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 90.0% \u2502 -0.0305 \u2502 -0.0233         \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 95.0% \u2502 -0.0389 \u2502 -0.0364         \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 99.0% \u2502 -0.0546 \u2502 -0.0578         \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 99.9% \u2502 -0.0719 \u2502 -0.1719         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,s.jsx)(t.hr,{})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var s=n(5260),r=n(74848);function a(e){let{title:t}=e;return(0,r.jsx)(s.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var s=n(96540);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);