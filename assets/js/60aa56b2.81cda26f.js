"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89162],{90923:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var r=n(74848),d=n(28453),s=n(94331);const a={title:"candle",description:"This documentation page contains information about the 'candle' function of OpenBB's SDK which plots the candlestick chart for a specific stock ticker. It offers various parameters for data customization providing an interactive way to visualize stock market data.",keywords:["Candle function","Stocks visualization","OpenBB terminal","Candlestick chart","Python stock market data","Matplotlib","Plotly","Stock ticker data","Intraday data","Financial data","SEO for technical documentation","SEO for programming documentation"]},i=void 0,l={id:"sdk/reference/stocks/candle",title:"candle",description:"This documentation page contains information about the 'candle' function of OpenBB's SDK which plots the candlestick chart for a specific stock ticker. It offers various parameters for data customization providing an interactive way to visualize stock market data.",source:"@site/content/sdk/reference/stocks/candle.md",sourceDirName:"sdk/reference/stocks",slug:"/sdk/reference/stocks/candle",permalink:"/sdk/reference/stocks/candle",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/stocks/candle.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719247347e3,frontMatter:{title:"candle",description:"This documentation page contains information about the 'candle' function of OpenBB's SDK which plots the candlestick chart for a specific stock ticker. It offers various parameters for data customization providing an interactive way to visualize stock market data.",keywords:["Candle function","Stocks visualization","OpenBB terminal","Candlestick chart","Python stock market data","Matplotlib","Plotly","Stock ticker data","Intraday data","Financial data","SEO for technical documentation","SEO for programming documentation"]},sidebar:"tutorialSidebar",previous:{title:"volume",permalink:"/sdk/reference/stocks/ca/volume"},next:{title:"analyst",permalink:"/sdk/reference/stocks/dd/analyst"}},c={},o=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.A,{title:"stocks.candle - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(t.p,{children:"Show candle plot of loaded ticker."}),"\n",(0,r.jsxs)(t.p,{children:["Source Code: [",(0,r.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/stocks_helper.py#L443",children:"link"}),"]"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'openbb.stocks.candle(symbol: str, data: pd.DataFrame = None, use_matplotlib: bool = True, intraday: bool = False, add_trend: bool = False, ma: Optional[Iterable[int]] = None, asset_type: str = "", start_date: Union[datetime.datetime, str, NoneType] = None, interval: int = 1440, end_date: Union[datetime.datetime, str, NoneType] = None, prepost: bool = False, source: str = "YahooFinance", weekly: bool = False, monthly: bool = False, external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None, raw: bool = False, yscale: str = "linear")\n'})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Ticker name"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"data"}),(0,r.jsx)(t.td,{children:"pd.DataFrame"}),(0,r.jsx)(t.td,{children:"Stock dataframe"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"use_matplotlib"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"Flag to use matplotlib instead of interactive plotly chart"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"intraday"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"Flag for intraday data for plotly range breaks"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"add_trend"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"Flag to add high and low trends to chart"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ma"}),(0,r.jsx)(t.td,{children:"Tuple[int]"}),(0,r.jsx)(t.td,{children:"Moving averages to add to the candle"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"asset_type_"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"String to include in title"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"external_axes"}),(0,r.jsx)(t.td,{children:"Optional[List[plt.Axes]]"}),(0,r.jsx)(t.td,{children:"External axes (2 axes are expected in the list), by default None"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"asset_type_"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"String to include in title"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"start_date"}),(0,r.jsx)(t.td,{children:"str or datetime"}),(0,r.jsx)(t.td,{children:"Start date to get data from with. - datetime or string format (YYYY-MM-DD)"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"interval"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"Interval (in minutes) to get data 1, 5, 15, 30, 60 or 1440"}),(0,r.jsx)(t.td,{children:"1440"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"end_date"}),(0,r.jsx)(t.td,{children:"str or datetime"}),(0,r.jsx)(t.td,{children:"End date to get data from with. - datetime or string format (YYYY-MM-DD)"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prepost"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"Pre and After hours data"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"source"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Source of data extracted"}),(0,r.jsx)(t.td,{children:"YahooFinance"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"weekly"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"Flag to get weekly data"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"monthly"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"Flag to get monthly data"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"raw"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"Flag to display raw data, by default False"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"yscale"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Linear or log for yscale"}),(0,r.jsx)(t.td,{children:"linear"}),(0,r.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"This function does not return anything"}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\nopenbb.stocks.candle("AAPL")\n'})}),"\n",(0,r.jsx)(t.hr,{})]})}function x(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(5260),d=n(74848);function s(e){let{title:t}=e;return(0,d.jsx)(r.A,{children:(0,d.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(96540);const d={},s=r.createContext(d);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);