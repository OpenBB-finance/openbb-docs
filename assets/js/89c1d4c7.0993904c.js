"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30480],{98876:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=o(74848),n=o(28453),l=o(94331);const s={title:"sectors",description:"SEO for the 'sectors' documentation page of the OpenBB finance that elaborates about portfolio sector allocation compared to the benchmark.",keywords:["portfolio","sector allocation","benchmark","parameters","returns","examples","portfolio engine","allocation tables","recalculate allocation"]},a=void 0,i={id:"sdk/reference/portfolio/alloc/sectors",title:"sectors",description:"SEO for the 'sectors' documentation page of the OpenBB finance that elaborates about portfolio sector allocation compared to the benchmark.",source:"@site/content/sdk/reference/portfolio/alloc/sectors.md",sourceDirName:"sdk/reference/portfolio/alloc",slug:"/sdk/reference/portfolio/alloc/sectors",permalink:"/sdk/reference/portfolio/alloc/sectors",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/portfolio/alloc/sectors.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719309708e3,frontMatter:{title:"sectors",description:"SEO for the 'sectors' documentation page of the OpenBB finance that elaborates about portfolio sector allocation compared to the benchmark.",keywords:["portfolio","sector allocation","benchmark","parameters","returns","examples","portfolio engine","allocation tables","recalculate allocation"]},sidebar:"tutorialSidebar",previous:{title:"regions",permalink:"/sdk/reference/portfolio/alloc/regions"},next:{title:"bench",permalink:"/sdk/reference/portfolio/bench"}},c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.A,{title:"portfolio.alloc.sectors - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(t.p,{children:"Display portfolio sector allocation compared to the benchmark"}),"\n",(0,r.jsxs)(t.p,{children:["Source Code: [",(0,r.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L814",children:"link"}),"]"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"openbb.portfolio.alloc.sectors(portfolio_engine: portfolio_engine.PortfolioEngine, limit: int = 10, tables: bool = False, recalculate: bool = False)\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"portfolio_engine"}),(0,r.jsx)(t.td,{children:"PortfolioEngine"}),(0,r.jsxs)(t.td,{children:["PortfolioEngine class instance, this will hold transactions and perform calculations.",(0,r.jsx)("br",{}),"Use ",(0,r.jsx)(t.code,{children:"portfolio.load"})," to create a PortfolioEngine."]}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tables"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"Whether to include separate allocation tables"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"limit"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"The amount of assets you wish to show, by default this is set to 10"}),(0,r.jsx)(t.td,{children:"10"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"recalculate"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"Flag to force recalculate allocation if already exists"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Union[pd.DataFrame, Tuple[pd.DataFrame, pd.DataFrame, pd.DataFrame]]"}),(0,r.jsxs)(t.td,{children:["DataFrame with combined allocation plus individual allocation if tables is ",(0,r.jsx)(t.code,{children:"True"}),"."]})]})})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.load("openbb_terminal/miscellaneous/portfolio_examples/holdings/example.csv")\noutput = openbb.portfolio.alloc.sectors(p)\n'})}),"\n",(0,r.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,o)=>{o.d(t,{A:()=>l});o(96540);var r=o(5260),n=o(74848);function l(e){let{title:t}=e;return(0,n.jsx)(r.A,{children:(0,n.jsx)("title",{children:t})})}},28453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>a});var r=o(96540);const n={},l=r.createContext(n);function s(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);