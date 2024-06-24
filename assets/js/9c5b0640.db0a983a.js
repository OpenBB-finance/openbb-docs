"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34232],{7946:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=o(74848),n=o(28453),r=o(94331);const i={title:"assets",description:"This tutorial page provides information about the 'assets' function in the OpenBB Terminal's Portfolio module, how to implement it and its parameters. The 'assets' function is used to display a portfolio's asset allocation as compared to the benchmark.",keywords:["Portfolio module","assets function","portfolio asset allocation","benchmark comparison","function parameters"]},l=void 0,a={id:"sdk/reference/portfolio/alloc/assets",title:"assets",description:"This tutorial page provides information about the 'assets' function in the OpenBB Terminal's Portfolio module, how to implement it and its parameters. The 'assets' function is used to display a portfolio's asset allocation as compared to the benchmark.",source:"@site/content/sdk/reference/portfolio/alloc/assets.md",sourceDirName:"sdk/reference/portfolio/alloc",slug:"/sdk/reference/portfolio/alloc/assets",permalink:"/sdk/reference/portfolio/alloc/assets",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/portfolio/alloc/assets.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719247347e3,frontMatter:{title:"assets",description:"This tutorial page provides information about the 'assets' function in the OpenBB Terminal's Portfolio module, how to implement it and its parameters. The 'assets' function is used to display a portfolio's asset allocation as compared to the benchmark.",keywords:["Portfolio module","assets function","portfolio asset allocation","benchmark comparison","function parameters"]},sidebar:"tutorialSidebar",previous:{title:"news",permalink:"/sdk/reference/news"},next:{title:"countries",permalink:"/sdk/reference/portfolio/alloc/countries"}},c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.A,{title:"portfolio.alloc.assets - Reference | OpenBB SDK Docs"}),"\n",(0,s.jsx)(t.p,{children:"Display portfolio asset allocation compared to the benchmark"}),"\n",(0,s.jsxs)(t.p,{children:["Source Code: [",(0,s.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L770",children:"link"}),"]"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"openbb.portfolio.alloc.assets(portfolio_engine: portfolio_engine.PortfolioEngine, tables: bool = False, limit: int = 10, recalculate: bool = False)\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"portfolio_engine"}),(0,s.jsx)(t.td,{children:"PortfolioEngine"}),(0,s.jsxs)(t.td,{children:["PortfolioEngine class instance, this will hold transactions and perform calculations.",(0,s.jsx)("br",{}),"Use ",(0,s.jsx)(t.code,{children:"portfolio.load"})," to create a PortfolioEngine."]}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tables"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsx)(t.td,{children:"Whether to include separate allocation tables"}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"limit"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The amount of assets you wish to show, by default this is set to 10"}),(0,s.jsx)(t.td,{children:"10"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"recalculate"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsx)(t.td,{children:"Flag to force recalculate allocation if already exists"}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Union[pd.DataFrame, Tuple[pd.DataFrame, pd.DataFrame, pd.DataFrame]]"}),(0,s.jsxs)(t.td,{children:["DataFrame with combined allocation plus individual allocation if tables is ",(0,s.jsx)(t.code,{children:"True"}),"."]})]})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.load("openbb_terminal/miscellaneous/portfolio_examples/holdings/example.csv")\noutput = openbb.portfolio.alloc.assets(p)\n'})}),"\n",(0,s.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,t,o)=>{o.d(t,{A:()=>r});o(96540);var s=o(5260),n=o(74848);function r(e){let{title:t}=e;return(0,n.jsx)(s.A,{children:(0,n.jsx)("title",{children:t})})}},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>l});var s=o(96540);const n={},r=s.createContext(n);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);