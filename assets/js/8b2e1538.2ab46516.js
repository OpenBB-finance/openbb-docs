"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[87545],{66820:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=r(74848),t=r(28453),s=r(94331);const i={title:"jensens",description:"The jensen's alpha function allows evaluation of portfolio performance, taking into account a risk-free rate and an interval for rolling values. Supported by OpenBB portfolio, a source for open source finance tools.",keywords:["jensen's alpha","openbb portfolio","portfolio evaluation","portfolio metrics","portfolio analysis","portfolio performance","risk free rate","rolling values","open source finance"]},l=void 0,a={id:"sdk/reference/portfolio/metric/jensens",title:"jensens",description:"The jensen's alpha function allows evaluation of portfolio performance, taking into account a risk-free rate and an interval for rolling values. Supported by OpenBB portfolio, a source for open source finance tools.",source:"@site/content/sdk/reference/portfolio/metric/jensens.md",sourceDirName:"sdk/reference/portfolio/metric",slug:"/sdk/reference/portfolio/metric/jensens",permalink:"/sdk/reference/portfolio/metric/jensens",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/portfolio/metric/jensens.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719247347e3,frontMatter:{title:"jensens",description:"The jensen's alpha function allows evaluation of portfolio performance, taking into account a risk-free rate and an interval for rolling values. Supported by OpenBB portfolio, a source for open source finance tools.",keywords:["jensen's alpha","openbb portfolio","portfolio evaluation","portfolio metrics","portfolio analysis","portfolio performance","risk free rate","rolling values","open source finance"]},sidebar:"tutorialSidebar",previous:{title:"information",permalink:"/sdk/reference/portfolio/metric/information"},next:{title:"kelly",permalink:"/sdk/reference/portfolio/metric/kelly"}},c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.A,{title:"portfolio.metric.jensens - Reference | OpenBB SDK Docs"}),"\n",(0,o.jsx)(n.p,{children:"Get jensen's alpha"}),"\n",(0,o.jsxs)(n.p,{children:["Source Code: [",(0,o.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1480",children:"link"}),"]"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'openbb.portfolio.metric.jensens(portfolio_engine: portfolio_engine.PortfolioEngine, risk_free_rate: float = 0, window: str = "1y")\n'})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Description"}),(0,o.jsx)(n.th,{children:"Default"}),(0,o.jsx)(n.th,{children:"Optional"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"portfolio_engine"}),(0,o.jsx)(n.td,{children:"PortfolioEngine"}),(0,o.jsxs)(n.td,{children:["PortfolioEngine class instance, this will hold transactions and perform calculations.",(0,o.jsx)("br",{}),"Use ",(0,o.jsx)(n.code,{children:"portfolio.load"})," to create a PortfolioEngine."]}),(0,o.jsx)(n.td,{children:"None"}),(0,o.jsx)(n.td,{children:"False"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"window"}),(0,o.jsx)(n.td,{children:"str"}),(0,o.jsx)(n.td,{children:"Interval used for rolling values"}),(0,o.jsx)(n.td,{children:"1y"}),(0,o.jsx)(n.td,{children:"True"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"risk_free_rate"}),(0,o.jsx)(n.td,{children:"float"}),(0,o.jsx)(n.td,{children:"Risk free rate"}),(0,o.jsx)(n.td,{children:"0"}),(0,o.jsx)(n.td,{children:"True"})]})]})]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"pd.DataFrame"}),(0,o.jsx)(n.td,{children:"DataFrame of jensens's alpha during different time windows"})]})})]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.load("openbb_terminal/miscellaneous/portfolio_examples/holdings/example.csv")\noutput = openbb.portfolio.metric.jensens(p)\n'})}),"\n",(0,o.jsx)(n.hr,{})]})}function f(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},94331:(e,n,r)=>{r.d(n,{A:()=>s});r(96540);var o=r(5260),t=r(74848);function s(e){let{title:n}=e;return(0,t.jsx)(o.A,{children:(0,t.jsx)("title",{children:n})})}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var o=r(96540);const t={},s=o.createContext(t);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);