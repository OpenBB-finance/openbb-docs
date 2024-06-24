"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62581],{57463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(74848),o=n(28453),i=n(94331);const l={title:"equal",description:"The page provides detailed information about the equally weighted portfolio (a type of portfolio optimization) in OpenBB Finance with parameters, returns and python example codes.",keywords:["OpenBB Finance documentation","Equally weighted portfolio","Portfolio optimization","OpenBB Portfolio po.equal function","Portfolio symbols","Interval, start date, end date in portfolio","Returns in investment","Python Finance library","Portfolio performance"]},d=void 0,s={id:"sdk/reference/portfolio/po/equal",title:"equal",description:"The page provides detailed information about the equally weighted portfolio (a type of portfolio optimization) in OpenBB Finance with parameters, returns and python example codes.",source:"@site/content/sdk/reference/portfolio/po/equal.md",sourceDirName:"sdk/reference/portfolio/po",slug:"/sdk/reference/portfolio/po/equal",permalink:"/sdk/reference/portfolio/po/equal",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/portfolio/po/equal.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719247347e3,frontMatter:{title:"equal",description:"The page provides detailed information about the equally weighted portfolio (a type of portfolio optimization) in OpenBB Finance with parameters, returns and python example codes.",keywords:["OpenBB Finance documentation","Equally weighted portfolio","Portfolio optimization","OpenBB Portfolio po.equal function","Portfolio symbols","Interval, start date, end date in portfolio","Returns in investment","Python Finance library","Portfolio performance"]},sidebar:"tutorialSidebar",previous:{title:"ef",permalink:"/sdk/reference/portfolio/po/ef"},next:{title:"file",permalink:"/sdk/reference/portfolio/po/file"}},a={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{title:"portfolio.po.equal - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(t.p,{children:"Equally weighted portfolio, where weight = 1/# of symbols"}),"\n",(0,r.jsxs)(t.p,{children:["Source Code: [",(0,r.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/po_model.py#L2063",children:"link"}),"]"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"openbb.portfolio.po.equal(portfolio_engine: portfolio_optimization.po_engine.PoEngine = None, symbols: List[str] = None, kwargs: Any)\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"portfolio_engine"}),(0,r.jsx)(t.td,{children:"PoEngine"}),(0,r.jsxs)(t.td,{children:["Portfolio optimization engine, by default None",(0,r.jsx)("br",{}),"Use ",(0,r.jsx)(t.code,{children:"portfolio.po.load"})," to load a portfolio engine"]}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbols"}),(0,r.jsx)(t.td,{children:"List[str]"}),(0,r.jsx)(t.td,{children:"List of symbols, by default None"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"interval"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Interval to get data, by default '3y'"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"start_date"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:'If not using interval, start date string (YYYY-MM-DD), by default ""'}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"end_date"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:'If not using interval, end date string (YYYY-MM-DD). If empty use last weekday, by default ""'}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"log_returns"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"If True use log returns, else arithmetic returns, by default False"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"freq"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Frequency of returns, by default 'D'. Options: 'D' for daily, 'W' for weekly, 'M' for monthly"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxnan"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Maximum percentage of NaNs allowed in the data, by default 0.05"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"threshold"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Value used to replace outliers that are higher than threshold, by default 0.0"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"method"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsxs)(t.td,{children:["Method used to fill nan values, by default 'time'",(0,r.jsx)("br",{}),"For more information see ",(0,r.jsx)(t.code,{children:"interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>"}),"__."]}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"value"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Amount to allocate to portfolio in long positions, by default 1.0"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Tuple[pd.DataFrame, Dict]"}),(0,r.jsx)(t.td,{children:"Tuple with weights and performance dictionary"})]})})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\nopenbb.portfolio.po.equal(symbols=["AAPL", "MSFT", "AMZN"])\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"(        value\n AAPL  0.33333\n MSFT  0.33333\n AMZN  0.33333,\n {'Return': 0.22459515482054027,\n  'Volatility': 0.32898777497511816,\n  'Sharpe ratio': 0.6826854123607685})\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.po.load(symbols_file_path="~/openbb_terminal/miscellaneous/portfolio_examples/allocation/60_40_Portfolio.xlsx")\nweights, performance = openbb.portfolio.po.equal(portfolio_engine=p)\n'})}),"\n",(0,r.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(5260),o=n(74848);function i(e){let{title:t}=e;return(0,o.jsx)(r.A,{children:(0,o.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>d});var r=n(96540);const o={},i=r.createContext(o);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);