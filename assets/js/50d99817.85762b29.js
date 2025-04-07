"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21338],{65098:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>x});var s=n(74848),i=n(28453),t=n(94331),c=n(18228),d=n(19365);const l={title:"historical",description:"Learn how to use the `obb.equity.price.historical` function to load historical  price data for a specific stock ticker. Find out about the available parameters  and providers, as well as the structure of the returned data and the columns it  contains.",keywords:["equity historical price","load stock data","specific ticker","python function","equity data parameters","alpha vantage provider","fmp provider","intrinio provider","polygon provider","yfinance provider","equity historical data returns","equity data columns","alpha vantage data columns","cboe data columns","fmp data columns","intrinio data columns","polygon data columns","yfinance data columns"]},o=void 0,a={id:"platform/reference/crypto/price/historical",title:"historical",description:"Learn how to use the `obb.equity.price.historical` function to load historical  price data for a specific stock ticker. Find out about the available parameters  and providers, as well as the structure of the returned data and the columns it  contains.",source:"@site/content/platform/reference/crypto/price/historical.md",sourceDirName:"platform/reference/crypto/price",slug:"/platform/reference/crypto/price/historical",permalink:"/platform/reference/crypto/price/historical",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/crypto/price/historical.md",tags:[],version:"current",frontMatter:{title:"historical",description:"Learn how to use the `obb.equity.price.historical` function to load historical  price data for a specific stock ticker. Find out about the available parameters  and providers, as well as the structure of the returned data and the columns it  contains.",keywords:["equity historical price","load stock data","specific ticker","python function","equity data parameters","alpha vantage provider","fmp provider","intrinio provider","polygon provider","yfinance provider","equity historical data returns","equity data columns","alpha vantage data columns","cboe data columns","fmp data columns","intrinio data columns","polygon data columns","yfinance data columns"]},sidebar:"tutorialSidebar",previous:{title:"Price",permalink:"/platform/reference/crypto/price/"},next:{title:"search",permalink:"/platform/reference/crypto/search"}},h={},x=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function j(e){const r={code:"code",em:"em",h2:"h2",hr:"hr",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.A,{title:"crypto/price/historical - Reference | OpenBB Platform Docs"}),"\n","\n",(0,s.jsx)(r.p,{children:"Get historical price data for cryptocurrency pair(s) within a provider."}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(c.A,{children:[(0,s.jsxs)(d.A,{value:"standard",label:"standard",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"symbol"})}),": ",(0,s.jsx)(r.code,{children:"Union[str, list[str]]"})]}),(0,s.jsx)(r.p,{children:"Symbol to get data for. Can use CURR1-CURR2 or CURR1CURR2 format. Multiple items allowed for provider(s): fmp, polygon, tiingo, yfinance."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"False"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"start_date"})}),": ",(0,s.jsx)(r.code,{children:"Union[date, str]"})]}),(0,s.jsx)(r.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"end_date"})}),": ",(0,s.jsx)(r.code,{children:"Union[date, str]"})]}),(0,s.jsx)(r.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]})]}),(0,s.jsxs)(d.A,{value:"fmp",label:"fmp",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"symbol"})}),": ",(0,s.jsx)(r.code,{children:"Union[str, list[str]]"})]}),(0,s.jsx)(r.p,{children:"Symbol to get data for. Can use CURR1-CURR2 or CURR1CURR2 format. Multiple items allowed for provider(s): fmp, polygon, tiingo, yfinance."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"False"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"start_date"})}),": ",(0,s.jsx)(r.code,{children:"Union[date, str]"})]}),(0,s.jsx)(r.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"end_date"})}),": ",(0,s.jsx)(r.code,{children:"Union[date, str]"})]}),(0,s.jsx)(r.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"interval"})}),": ",(0,s.jsx)(r.code,{children:"Literal['1m', '5m', '15m', '30m', '1h', '4h', '1d']"})]}),(0,s.jsx)(r.p,{children:"Time interval of the data to return."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Default:"})," ",(0,s.jsx)(r.code,{children:"1d"})]}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]})]}),(0,s.jsxs)(d.A,{value:"polygon",label:"polygon",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"symbol"})}),": ",(0,s.jsx)(r.code,{children:"Union[str, list[str]]"})]}),(0,s.jsx)(r.p,{children:"Symbol to get data for. Can use CURR1-CURR2 or CURR1CURR2 format. Multiple items allowed for provider(s): fmp, polygon, tiingo, yfinance."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"False"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"start_date"})}),": ",(0,s.jsx)(r.code,{children:"Union[date, str]"})]}),(0,s.jsx)(r.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"end_date"})}),": ",(0,s.jsx)(r.code,{children:"Union[date, str]"})]}),(0,s.jsx)(r.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"interval"})}),": ",(0,s.jsx)(r.code,{children:"str"})]}),(0,s.jsx)(r.p,{children:"Time interval of the data to return. The numeric portion of the interval can be any positive integer. The letter portion can be one of the following: s, m, h, d, W, M, Q, Y"}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Default:"})," ",(0,s.jsx)(r.code,{children:"1d"})]}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"sort"})}),": ",(0,s.jsx)(r.code,{children:"Literal['asc', 'desc']"})]}),(0,s.jsx)(r.p,{children:"Sort order of the data. This impacts the results in combination with the 'limit' parameter. The results are always returned in ascending order by date."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Default:"})," ",(0,s.jsx)(r.code,{children:"asc"})]}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"limit"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"The number of data entries to return."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Default:"})," ",(0,s.jsx)(r.code,{children:"49999"})]}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]})]}),(0,s.jsxs)(d.A,{value:"tiingo",label:"tiingo",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"symbol"})}),": ",(0,s.jsx)(r.code,{children:"Union[str, list[str]]"})]}),(0,s.jsx)(r.p,{children:"Symbol to get data for. Can use CURR1-CURR2 or CURR1CURR2 format. Multiple items allowed for provider(s): fmp, polygon, tiingo, yfinance."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"False"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"start_date"})}),": ",(0,s.jsx)(r.code,{children:"Union[date, str]"})]}),(0,s.jsx)(r.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"end_date"})}),": ",(0,s.jsx)(r.code,{children:"Union[date, str]"})]}),(0,s.jsx)(r.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"interval"})}),": ",(0,s.jsx)(r.code,{children:"Union[Literal['1m', '5m', '15m', '30m', '90m', '1h', '2h', '4h', '1d', '7d', '30d'], str]"})]}),(0,s.jsx)(r.p,{children:"Time interval of the data to return."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Default:"})," ",(0,s.jsx)(r.code,{children:"1d"})]}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"exchanges"})}),": ",(0,s.jsx)(r.code,{children:"Union[Union[list[str], str], list[Union[list[str], str]]]"})]}),(0,s.jsx)(r.p,{children:"To limit the query to a subset of exchanges e.g. ['POLONIEX', 'GDAX'] Multiple items allowed for provider(s): tiingo."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]})]}),(0,s.jsxs)(d.A,{value:"yfinance",label:"yfinance",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"symbol"})}),": ",(0,s.jsx)(r.code,{children:"Union[str, list[str]]"})]}),(0,s.jsx)(r.p,{children:"Symbol to get data for. Can use CURR1-CURR2 or CURR1CURR2 format. Multiple items allowed for provider(s): fmp, polygon, tiingo, yfinance."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"False"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"start_date"})}),": ",(0,s.jsx)(r.code,{children:"Union[date, str]"})]}),(0,s.jsx)(r.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"end_date"})}),": ",(0,s.jsx)(r.code,{children:"Union[date, str]"})]}),(0,s.jsx)(r.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"interval"})}),": ",(0,s.jsx)(r.code,{children:"Literal['1m', '2m', '5m', '15m', '30m', '60m', '90m', '1h', '1d', '5d', '1W', '1M', '1Q']"})]}),(0,s.jsx)(r.p,{children:"Time interval of the data to return."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Default:"})," ",(0,s.jsx)(r.code,{children:"1d"})]}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]})]})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"results"})}),": ",(0,s.jsx)(r.code,{children:"list[CryptoHistorical]"})]}),"\n",(0,s.jsx)(r.p,{children:"Serializable results."}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"provider"})}),": ",(0,s.jsx)(r.code,{children:"Optional[Literal['fmp', 'polygon', 'tiingo', 'yfinance']]"})]}),"\n",(0,s.jsx)(r.p,{children:"Provider name."}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"warnings"})}),": ",(0,s.jsx)(r.code,{children:"Optional[list[Warning_]]"})]}),"\n",(0,s.jsx)(r.p,{children:"list of warnings."}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"chart"})}),": ",(0,s.jsx)(r.code,{children:"Optional[Chart]"})]}),"\n",(0,s.jsx)(r.p,{children:"Chart object."}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"extra"})}),": ",(0,s.jsx)(r.code,{children:"dict[str, Any]"})]}),"\n",(0,s.jsx)(r.p,{children:"Extra info."}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,s.jsxs)(c.A,{children:[(0,s.jsxs)(d.A,{value:"standard",label:"standard",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"date"})}),": ",(0,s.jsx)(r.code,{children:"Union[Union[date, datetime], str]"})]}),(0,s.jsx)(r.p,{children:"The date of the data."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"open"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The open price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"high"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The high price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"low"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The low price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"close"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The close price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"volume"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The trading volume."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"vwap"})}),": ",(0,s.jsx)(r.code,{children:"Annotated[float, Gt(gt=0)]"})]}),(0,s.jsx)(r.p,{children:"Volume Weighted Average Price over the period."})]}),(0,s.jsxs)(d.A,{value:"fmp",label:"fmp",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"date"})}),": ",(0,s.jsx)(r.code,{children:"Union[Union[date, datetime], str]"})]}),(0,s.jsx)(r.p,{children:"The date of the data."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"open"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The open price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"high"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The high price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"low"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The low price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"close"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The close price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"volume"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The trading volume."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"vwap"})}),": ",(0,s.jsx)(r.code,{children:"Annotated[float, Gt(gt=0)]"})]}),(0,s.jsx)(r.p,{children:"Volume Weighted Average Price over the period."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"adj_close"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The adjusted close price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"change"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Change in the price from the previous close."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"change_percent"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Change in the price from the previous close, as a normalized percent."})]}),(0,s.jsxs)(d.A,{value:"polygon",label:"polygon",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"date"})}),": ",(0,s.jsx)(r.code,{children:"Union[Union[date, datetime], str]"})]}),(0,s.jsx)(r.p,{children:"The date of the data."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"open"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The open price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"high"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The high price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"low"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The low price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"close"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The close price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"volume"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The trading volume."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"vwap"})}),": ",(0,s.jsx)(r.code,{children:"Annotated[float, Gt(gt=0)]"})]}),(0,s.jsx)(r.p,{children:"Volume Weighted Average Price over the period."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"transactions"})}),": ",(0,s.jsx)(r.code,{children:"Annotated[int, Gt(gt=0)]"})]}),(0,s.jsx)(r.p,{children:"Number of transactions for the symbol in the time period."})]}),(0,s.jsxs)(d.A,{value:"tiingo",label:"tiingo",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"date"})}),": ",(0,s.jsx)(r.code,{children:"Union[Union[date, datetime], str]"})]}),(0,s.jsx)(r.p,{children:"The date of the data."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"open"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The open price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"high"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The high price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"low"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The low price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"close"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The close price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"volume"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The trading volume."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"vwap"})}),": ",(0,s.jsx)(r.code,{children:"Annotated[float, Gt(gt=0)]"})]}),(0,s.jsx)(r.p,{children:"Volume Weighted Average Price over the period."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"transactions"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"Number of transactions for the symbol in the time period."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"volume_notional"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The last size done for the asset on the specific date in the quote currency. The volume of the asset on the specific date in the quote currency."})]}),(0,s.jsxs)(d.A,{value:"yfinance",label:"yfinance",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"date"})}),": ",(0,s.jsx)(r.code,{children:"Union[Union[date, datetime], str]"})]}),(0,s.jsx)(r.p,{children:"The date of the data."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"open"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The open price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"high"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The high price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"low"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The low price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"close"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The close price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"volume"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The trading volume."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"vwap"})}),": ",(0,s.jsx)(r.code,{children:"Annotated[float, Gt(gt=0)]"})]}),(0,s.jsx)(r.p,{children:"Volume Weighted Average Price over the period."})]})]})]})}function p(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>c});n(96540);var s=n(34164);const i={tabItem:"tabItem_Ymn6"};var t=n(74848);function c(e){let{children:r,hidden:n,className:c}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,c),hidden:n,children:r})}},94331:(e,r,n)=>{n.d(r,{A:()=>t});n(96540);var s=n(5260),i=n(74848);function t(e){let{title:r}=e;return(0,i.jsx)(s.A,{children:(0,i.jsx)("title",{children:r})})}},18228:(e,r,n)=>{n.d(r,{A:()=>T});var s=n(56347),i=n(23104),t=n(96540),c=n(205),d=n(57485),l=n(31682),o=n(89466);function a(e){return function(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:n,attributes:s,default:i}}=e;return{value:r,label:n,attributes:s,default:i}}))}function h(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??a(n);return function(e){const r=(0,l.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function x(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function j(e){let{queryString:r=!1,groupId:n}=e;const i=(0,s.W6)(),c=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,d.aZ)(c),(0,t.useCallback)((e=>{if(!c)return;const r=new URLSearchParams(i.location.search);r.set(c,e),i.replace({...i.location,search:r.toString()})}),[c,i])]}function p(e){const{defaultValue:r,queryString:n=!1,groupId:s}=e,i=h(e),[d,l]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!x({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:i}))),[a,p]=j({queryString:n,groupId:s}),[u,f]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,i]=(0,o.Dv)(n);return[s,(0,t.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),m=(()=>{const e=a??u;return x({value:e,tabValues:i})?e:null})();(0,c.A)((()=>{m&&l(m)}),[m]);return{selectedValue:d,selectValue:(0,t.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),f(e)}),[p,f,i]),tabValues:i}}var u=n(92303),f=n(34164);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var g=n(74848);function v(e){let{className:r,block:n,selectedValue:t,selectValue:c,tabValues:d}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),{pathname:a}=(0,s.zy)(),h=e=>{const r=e.currentTarget,n=l.indexOf(r),s=d[n].value;s!==t&&(o(r),c(s))},x=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;r=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;r=l[n]??l[l.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,f.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:d.map((e=>{let{value:r,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>l.push(e),onKeyDown:x,onClick:h,...s,className:(0,f.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,s?.className,{"border-b-2 pointer-events-none":t===r,"border-b-2 text-[#669dcb] border-[#669dcb]":t===r&&a.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":t===r&&a.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":t!==r&&a.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":t===r&&a.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":t!==r&&a.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":t!==r&&a.startsWith("/workspace")}),children:n??r},r)}))})}function b(e){let{lazy:r,children:n,selectedValue:s}=e;if(n=Array.isArray(n)?n:[n],r){const e=n.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:n.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function y(e){const r=p(e);return(0,g.jsxs)("div",{className:(0,f.A)("tabs-container",m.tabList),children:[(0,g.jsx)(v,{...e,...r}),(0,g.jsx)(b,{...e,...r})]})}function T(e){const r=(0,u.A)();return(0,g.jsx)(y,{...e},String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>d});var s=n(96540);const i={},t=s.createContext(i);function c(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);