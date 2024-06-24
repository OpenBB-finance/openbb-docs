"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88781],{19026:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>x,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var o=r(74848),i=r(28453),s=r(94331);const n={title:"maxdiv",description:"This page is about the function 'maxdiv' of the openbb.portfolio.po. It provides an overview, parameters, returns and examples of this function, which is used to optimize diversification weights for portfolio. Use 'maxdiv' to maximize diversity across various assets in your portfolio.",keywords:["maxdiv","portfolio optimization","diversification","OpenBB portfolio","OpenBB maxdiv","maximize diversity","portfolio weights","portfolio performance","portfolio examples","Risk measures","Portfolio risk","Covariance estimation methods"]},d=void 0,a={id:"sdk/reference/portfolio/po/maxdiv",title:"maxdiv",description:"This page is about the function 'maxdiv' of the openbb.portfolio.po. It provides an overview, parameters, returns and examples of this function, which is used to optimize diversification weights for portfolio. Use 'maxdiv' to maximize diversity across various assets in your portfolio.",source:"@site/content/sdk/reference/portfolio/po/maxdiv.md",sourceDirName:"sdk/reference/portfolio/po",slug:"/sdk/reference/portfolio/po/maxdiv",permalink:"/sdk/reference/portfolio/po/maxdiv",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/portfolio/po/maxdiv.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719247347e3,frontMatter:{title:"maxdiv",description:"This page is about the function 'maxdiv' of the openbb.portfolio.po. It provides an overview, parameters, returns and examples of this function, which is used to optimize diversification weights for portfolio. Use 'maxdiv' to maximize diversity across various assets in your portfolio.",keywords:["maxdiv","portfolio optimization","diversification","OpenBB portfolio","OpenBB maxdiv","maximize diversity","portfolio weights","portfolio performance","portfolio examples","Risk measures","Portfolio risk","Covariance estimation methods"]},sidebar:"tutorialSidebar",previous:{title:"maxdecorr",permalink:"/sdk/reference/portfolio/po/maxdecorr"},next:{title:"maxret",permalink:"/sdk/reference/portfolio/po/maxret"}},l={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.A,{title:"portfolio.po.maxdiv - Reference | OpenBB SDK Docs"}),"\n",(0,o.jsx)(t.p,{children:"Optimize diversification weights"}),"\n",(0,o.jsxs)(t.p,{children:["Source Code: [",(0,o.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/po_model.py#L813",children:"link"}),"]"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"openbb.portfolio.po.maxdiv(portfolio_engine: portfolio_optimization.po_engine.PoEngine = None, symbols: List[str] = None, kwargs: Any)\n"})}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Name"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Description"}),(0,o.jsx)(t.th,{children:"Default"}),(0,o.jsx)(t.th,{children:"Optional"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"portfolio_engine"}),(0,o.jsx)(t.td,{children:"PoEngine"}),(0,o.jsxs)(t.td,{children:["Portfolio optimization engine, by default None",(0,o.jsx)("br",{}),"Use ",(0,o.jsx)(t.code,{children:"portfolio.po.load"})," to load a portfolio engine"]}),(0,o.jsx)(t.td,{children:"None"}),(0,o.jsx)(t.td,{children:"True"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"symbols"}),(0,o.jsx)(t.td,{children:"List[str]"}),(0,o.jsx)(t.td,{children:"List of symbols, by default None"}),(0,o.jsx)(t.td,{children:"None"}),(0,o.jsx)(t.td,{children:"True"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"interval"}),(0,o.jsx)(t.td,{children:"str"}),(0,o.jsx)(t.td,{children:"Interval to get data, by default '3y'"}),(0,o.jsx)(t.td,{children:"None"}),(0,o.jsx)(t.td,{children:"True"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"start_date"}),(0,o.jsx)(t.td,{children:"str"}),(0,o.jsx)(t.td,{children:'If not using interval, start date string (YYYY-MM-DD), by default ""'}),(0,o.jsx)(t.td,{children:"None"}),(0,o.jsx)(t.td,{children:"True"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"end_date"}),(0,o.jsx)(t.td,{children:"str"}),(0,o.jsx)(t.td,{children:'If not using interval, end date string (YYYY-MM-DD). If empty use last weekday, by default ""'}),(0,o.jsx)(t.td,{children:"None"}),(0,o.jsx)(t.td,{children:"True"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"log_returns"}),(0,o.jsx)(t.td,{children:"bool"}),(0,o.jsx)(t.td,{children:"If True use log returns, else arithmetic returns, by default False"}),(0,o.jsx)(t.td,{children:"None"}),(0,o.jsx)(t.td,{children:"True"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"freq"}),(0,o.jsx)(t.td,{children:"str"}),(0,o.jsx)(t.td,{children:"Frequency of returns, by default 'D'. Options: 'D' for daily, 'W' for weekly, 'M' for monthly"}),(0,o.jsx)(t.td,{children:"None"}),(0,o.jsx)(t.td,{children:"True"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"maxnan"}),(0,o.jsx)(t.td,{children:"float"}),(0,o.jsx)(t.td,{children:"Maximum percentage of NaNs allowed in the data, by default 0.05"}),(0,o.jsx)(t.td,{children:"None"}),(0,o.jsx)(t.td,{children:"True"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"threshold"}),(0,o.jsx)(t.td,{children:"float"}),(0,o.jsx)(t.td,{children:"Value used to replace outliers that are higher than threshold, by default 0.0"}),(0,o.jsx)(t.td,{children:"None"}),(0,o.jsx)(t.td,{children:"True"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"method"}),(0,o.jsx)(t.td,{children:"str"}),(0,o.jsxs)(t.td,{children:["Method used to fill nan values, by default 'time'",(0,o.jsx)("br",{}),"For more information see ",(0,o.jsx)(t.code,{children:"interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>"}),"__."]}),(0,o.jsx)(t.td,{children:"None"}),(0,o.jsx)(t.td,{children:"True"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"value"}),(0,o.jsx)(t.td,{children:"float"}),(0,o.jsx)(t.td,{children:"Amount to allocate to portfolio in long positions, by default 1.0"}),(0,o.jsx)(t.td,{children:"None"}),(0,o.jsx)(t.td,{children:"True"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"value_short"}),(0,o.jsx)(t.td,{children:"float"}),(0,o.jsx)(t.td,{children:"Amount to allocate to portfolio in short positions, by default 0.0"}),(0,o.jsx)(t.td,{children:"None"}),(0,o.jsx)(t.td,{children:"True"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"covariance"}),(0,o.jsx)(t.td,{children:"str"}),(0,o.jsxs)(t.td,{children:["The method used to estimate the covariance matrix, by default 'hist'",(0,o.jsx)("br",{}),"Possible values are:",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"- 'hist': use historical estimates.",(0,o.jsx)("br",{}),"- 'ewma1': use ewma with adjust=True. For more information see ",(0,o.jsx)(t.code,{children:"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>"}),(0,o.jsxs)(t.strong,{children:[".",(0,o.jsx)("br",{}),"- 'ewma2': use ewma with adjust=False. For more information see ",(0,o.jsx)(t.code,{children:"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>"})]}),".",(0,o.jsx)("br",{}),"- 'ledoit': use the Ledoit and Wolf Shrinkage method.",(0,o.jsx)("br",{}),"- 'oas': use the Oracle Approximation Shrinkage method.",(0,o.jsx)("br",{}),"- 'shrunk': use the basic Shrunk Covariance method.",(0,o.jsx)("br",{}),"- 'gl': use the basic Graphical Lasso Covariance method.",(0,o.jsx)("br",{}),"- 'jlogo': use the j-LoGo Covariance method. For more information see: ",(0,o.jsx)(t.code,{children:"a-jLogo"}),".",(0,o.jsx)("br",{}),"- 'fixed': denoise using fixed method. For more information see chapter 2 of ",(0,o.jsx)(t.code,{children:"a-MLforAM"}),".",(0,o.jsx)("br",{}),"- 'spectral': denoise using spectral method. For more information see chapter 2 of ",(0,o.jsx)(t.code,{children:"a-MLforAM"}),".",(0,o.jsx)("br",{}),"- 'shrink': denoise using shrink method. For more information see chapter 2 of ",(0,o.jsx)(t.code,{children:"a-MLforAM"}),"."]}),(0,o.jsx)(t.td,{children:"None"}),(0,o.jsx)(t.td,{children:"True"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"d_ewma"}),(0,o.jsx)(t.td,{children:"float"}),(0,o.jsx)(t.td,{children:"The smoothing factor of ewma methods, by default 0.94"}),(0,o.jsx)(t.td,{children:"None"}),(0,o.jsx)(t.td,{children:"True"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"risk_measure"}),(0,o.jsx)(t.td,{children:"str"}),(0,o.jsxs)(t.td,{children:["The risk measure used to optimize the portfolio, by default 'MV'",(0,o.jsx)("br",{}),"Possible values are:",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"- 'MV': Standard Deviation.",(0,o.jsx)("br",{}),"- 'MAD': Mean Absolute Deviation.",(0,o.jsx)("br",{}),"- 'MSV': Semi Standard Deviation.",(0,o.jsx)("br",{}),"- 'FLPM': First Lower Partial Moment (Omega Ratio).",(0,o.jsx)("br",{}),"- 'SLPM': Second Lower Partial Moment (Sortino Ratio).",(0,o.jsx)("br",{}),"- 'CVaR': Conditional Value at Risk.",(0,o.jsx)("br",{}),"- 'EVaR': Entropic Value at Risk.",(0,o.jsx)("br",{}),"- 'WR': Worst Realization.",(0,o.jsx)("br",{}),"- 'ADD': Average Drawdown of uncompounded cumulative returns.",(0,o.jsx)("br",{}),"- 'UCI': Ulcer Index of uncompounded cumulative returns.",(0,o.jsx)("br",{}),"- 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.",(0,o.jsx)("br",{}),"- 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.",(0,o.jsx)("br",{}),"- 'MDD': Maximum Drawdown of uncompounded cumulative returns."]}),(0,o.jsx)(t.td,{children:"None"}),(0,o.jsx)(t.td,{children:"True"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"risk_free_rate"}),(0,o.jsx)(t.td,{children:"float"}),(0,o.jsx)(t.td,{children:"Risk free rate, annualized. Used for 'FLPM' and 'SLPM' and Sharpe objective function, by default 0.0"}),(0,o.jsx)(t.td,{children:"None"}),(0,o.jsx)(t.td,{children:"True"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"alpha"}),(0,o.jsx)(t.td,{children:"float"}),(0,o.jsx)(t.td,{children:"Significance level of VaR, CVaR, EDaR, DaR, CDaR, EDaR, Tail Gini of losses, by default 0.05"}),(0,o.jsx)(t.td,{children:"None"}),(0,o.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Tuple[pd.DataFrame, Dict]"}),(0,o.jsx)(t.td,{children:"Tuple with weights and performance dictionary"})]})})]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\nopenbb.portfolio.po.maxdiv(symbols=["AAPL", "MSFT", "AMZN"])\n'})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"(        value\n AAPL  0.33696\n MSFT  0.26766\n AMZN  0.39538,\n {'Return': 0.21717206203731806,\n  'Volatility': 0.3310292858117002,\n  'Sharpe ratio': 0.6560509034866852})\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.po.load(symbols_file_path="~/openbb_terminal/miscellaneous/portfolio_examples/allocation/60_40_Portfolio.xlsx")\nweights, performance = openbb.portfolio.po.maxdiv(portfolio_engine=p)\n'})}),"\n",(0,o.jsx)(t.hr,{})]})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var o=r(5260),i=r(74848);function s(e){let{title:t}=e;return(0,i.jsx)(o.A,{children:(0,i.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>d});var o=r(96540);const i={},s=o.createContext(i);function n(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);