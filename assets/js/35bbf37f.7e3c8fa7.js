"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57429],{44315:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>h,toc:()=>x});var s=n(74848),i=n(28453),t=n(94331),d=n(18228),c=n(19365);const l={title:"historical",description:"Historical Index Levels",keywords:["index","price","historical"]},o=void 0,h={id:"platform/reference/index/price/historical",title:"historical",description:"Historical Index Levels",source:"@site/content/platform/reference/index/price/historical.md",sourceDirName:"platform/reference/index/price",slug:"/platform/reference/index/price/historical",permalink:"/platform/reference/index/price/historical",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/index/price/historical.md",tags:[],version:"current",frontMatter:{title:"historical",description:"Historical Index Levels",keywords:["index","price","historical"]},sidebar:"tutorialSidebar",previous:{title:"Price",permalink:"/platform/reference/index/price/"},next:{title:"available",permalink:"/platform/reference/index/available"}},a={},x=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function j(e){const r={code:"code",em:"em",h2:"h2",hr:"hr",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.A,{title:"index/price/historical - Reference | OpenBB Platform Docs"}),"\n","\n",(0,s.jsx)(r.p,{children:"Historical Index Levels."}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(d.A,{children:[(0,s.jsxs)(c.A,{value:"standard",label:"standard",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"symbol"})}),": ",(0,s.jsx)(r.code,{children:"Union[str, list[str]]"})]}),(0,s.jsx)(r.p,{children:"Symbol to get data for. Multiple items allowed for provider(s): cboe, fmp, intrinio, polygon, yfinance."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"False"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"start_date"})}),": ",(0,s.jsx)(r.code,{children:"Union[date, str]"})]}),(0,s.jsx)(r.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"end_date"})}),": ",(0,s.jsx)(r.code,{children:"Union[date, str]"})]}),(0,s.jsx)(r.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]})]}),(0,s.jsxs)(c.A,{value:"cboe",label:"cboe",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"symbol"})}),": ",(0,s.jsx)(r.code,{children:"Union[str, list[str]]"})]}),(0,s.jsx)(r.p,{children:"Symbol to get data for. Multiple items allowed for provider(s): cboe, fmp, intrinio, polygon, yfinance."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"False"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"start_date"})}),": ",(0,s.jsx)(r.code,{children:"Union[date, str]"})]}),(0,s.jsx)(r.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"end_date"})}),": ",(0,s.jsx)(r.code,{children:"Union[date, str]"})]}),(0,s.jsx)(r.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"interval"})}),": ",(0,s.jsx)(r.code,{children:"Literal['1m', '1d']"})]}),(0,s.jsx)(r.p,{children:"Time interval of the data to return. The most recent trading day is not including in daily historical data. Intraday data is only available for the most recent trading day at 1 minute intervals."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Default:"})," ",(0,s.jsx)(r.code,{children:"1d"})]}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"use_cache"})}),": ",(0,s.jsx)(r.code,{children:"bool"})]}),(0,s.jsx)(r.p,{children:"When True, the company directories will be cached for 24 hours and are used to validate symbols. The results of the function are not cached. Set as False to bypass."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Default:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]})]}),(0,s.jsxs)(c.A,{value:"fmp",label:"fmp",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"symbol"})}),": ",(0,s.jsx)(r.code,{children:"Union[str, list[str]]"})]}),(0,s.jsx)(r.p,{children:"Symbol to get data for. Multiple items allowed for provider(s): cboe, fmp, intrinio, polygon, yfinance."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"False"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"start_date"})}),": ",(0,s.jsx)(r.code,{children:"Union[date, str]"})]}),(0,s.jsx)(r.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"end_date"})}),": ",(0,s.jsx)(r.code,{children:"Union[date, str]"})]}),(0,s.jsx)(r.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"interval"})}),": ",(0,s.jsx)(r.code,{children:"Literal['1m', '5m', '15m', '30m', '1h', '4h', '1d']"})]}),(0,s.jsx)(r.p,{children:"Time interval of the data to return."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Default:"})," ",(0,s.jsx)(r.code,{children:"1d"})]}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]})]}),(0,s.jsxs)(c.A,{value:"intrinio",label:"intrinio",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"symbol"})}),": ",(0,s.jsx)(r.code,{children:"Union[str, list[str]]"})]}),(0,s.jsx)(r.p,{children:"Symbol to get data for. Multiple items allowed for provider(s): cboe, fmp, intrinio, polygon, yfinance."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"False"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"start_date"})}),": ",(0,s.jsx)(r.code,{children:"Union[date, str]"})]}),(0,s.jsx)(r.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"end_date"})}),": ",(0,s.jsx)(r.code,{children:"Union[date, str]"})]}),(0,s.jsx)(r.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"limit"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"The number of data entries to return."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Default:"})," ",(0,s.jsx)(r.code,{children:"10000"})]}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]})]}),(0,s.jsxs)(c.A,{value:"polygon",label:"polygon",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"symbol"})}),": ",(0,s.jsx)(r.code,{children:"Union[str, list[str]]"})]}),(0,s.jsx)(r.p,{children:"Symbol to get data for. Multiple items allowed for provider(s): cboe, fmp, intrinio, polygon, yfinance."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"False"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"start_date"})}),": ",(0,s.jsx)(r.code,{children:"Union[date, str]"})]}),(0,s.jsx)(r.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"end_date"})}),": ",(0,s.jsx)(r.code,{children:"Union[date, str]"})]}),(0,s.jsx)(r.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"interval"})}),": ",(0,s.jsx)(r.code,{children:"str"})]}),(0,s.jsx)(r.p,{children:"Time interval of the data to return. The numeric portion of the interval can be any positive integer. The letter portion can be one of the following: s, m, h, d, W, M, Q, Y"}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Default:"})," ",(0,s.jsx)(r.code,{children:"1d"})]}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"sort"})}),": ",(0,s.jsx)(r.code,{children:"Literal['asc', 'desc']"})]}),(0,s.jsx)(r.p,{children:"Sort order of the data. This impacts the results in combination with the 'limit' parameter. The results are always returned in ascending order by date."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Default:"})," ",(0,s.jsx)(r.code,{children:"asc"})]}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"limit"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"The number of data entries to return."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Default:"})," ",(0,s.jsx)(r.code,{children:"49999"})]}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]})]}),(0,s.jsxs)(c.A,{value:"yfinance",label:"yfinance",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"symbol"})}),": ",(0,s.jsx)(r.code,{children:"Union[str, list[str]]"})]}),(0,s.jsx)(r.p,{children:"Symbol to get data for. Multiple items allowed for provider(s): cboe, fmp, intrinio, polygon, yfinance."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"False"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"start_date"})}),": ",(0,s.jsx)(r.code,{children:"Union[date, str]"})]}),(0,s.jsx)(r.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"end_date"})}),": ",(0,s.jsx)(r.code,{children:"Union[date, str]"})]}),(0,s.jsx)(r.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"interval"})}),": ",(0,s.jsx)(r.code,{children:"Literal['1m', '2m', '5m', '15m', '30m', '60m', '90m', '1h', '1d', '5d', '1W', '1M', '1Q']"})]}),(0,s.jsx)(r.p,{children:"Time interval of the data to return."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Default:"})," ",(0,s.jsx)(r.code,{children:"1d"})]}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]})]})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"results"})}),": ",(0,s.jsx)(r.code,{children:"list[IndexHistorical]"})]}),"\n",(0,s.jsx)(r.p,{children:"Serializable results."}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"provider"})}),": ",(0,s.jsx)(r.code,{children:"Optional[Literal['cboe', 'fmp', 'intrinio', 'polygon', 'yfinance']]"})]}),"\n",(0,s.jsx)(r.p,{children:"Provider name."}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"warnings"})}),": ",(0,s.jsx)(r.code,{children:"Optional[list[Warning_]]"})]}),"\n",(0,s.jsx)(r.p,{children:"list of warnings."}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"chart"})}),": ",(0,s.jsx)(r.code,{children:"Optional[Chart]"})]}),"\n",(0,s.jsx)(r.p,{children:"Chart object."}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"extra"})}),": ",(0,s.jsx)(r.code,{children:"dict[str, Any]"})]}),"\n",(0,s.jsx)(r.p,{children:"Extra info."}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,s.jsxs)(d.A,{children:[(0,s.jsxs)(c.A,{value:"standard",label:"standard",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"date"})}),": ",(0,s.jsx)(r.code,{children:"Union[Union[date, datetime], str]"})]}),(0,s.jsx)(r.p,{children:"The date of the data."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"open"})}),": ",(0,s.jsx)(r.code,{children:"Annotated[float, Strict(strict=True)]"})]}),(0,s.jsx)(r.p,{children:"The open price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"high"})}),": ",(0,s.jsx)(r.code,{children:"Annotated[float, Strict(strict=True)]"})]}),(0,s.jsx)(r.p,{children:"The high price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"low"})}),": ",(0,s.jsx)(r.code,{children:"Annotated[float, Strict(strict=True)]"})]}),(0,s.jsx)(r.p,{children:"The low price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"close"})}),": ",(0,s.jsx)(r.code,{children:"Annotated[float, Strict(strict=True)]"})]}),(0,s.jsx)(r.p,{children:"The close price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"volume"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"The trading volume."})]}),(0,s.jsxs)(c.A,{value:"cboe",label:"cboe",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"date"})}),": ",(0,s.jsx)(r.code,{children:"Union[Union[date, datetime], str]"})]}),(0,s.jsx)(r.p,{children:"The date of the data."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"open"})}),": ",(0,s.jsx)(r.code,{children:"Annotated[float, Strict(strict=True)]"})]}),(0,s.jsx)(r.p,{children:"The open price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"high"})}),": ",(0,s.jsx)(r.code,{children:"Annotated[float, Strict(strict=True)]"})]}),(0,s.jsx)(r.p,{children:"The high price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"low"})}),": ",(0,s.jsx)(r.code,{children:"Annotated[float, Strict(strict=True)]"})]}),(0,s.jsx)(r.p,{children:"The low price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"close"})}),": ",(0,s.jsx)(r.code,{children:"Annotated[float, Strict(strict=True)]"})]}),(0,s.jsx)(r.p,{children:"The close price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"volume"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"The trading volume."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"calls_volume"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Number of calls traded during the most recent trading period. Only valid if interval is 1m."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"puts_volume"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Number of puts traded during the most recent trading period. Only valid if interval is 1m."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"total_options_volume"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Total number of options traded during the most recent trading period. Only valid if interval is 1m."})]}),(0,s.jsxs)(c.A,{value:"fmp",label:"fmp",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"date"})}),": ",(0,s.jsx)(r.code,{children:"Union[Union[date, datetime], str]"})]}),(0,s.jsx)(r.p,{children:"The date of the data."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"open"})}),": ",(0,s.jsx)(r.code,{children:"Annotated[float, Strict(strict=True)]"})]}),(0,s.jsx)(r.p,{children:"The open price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"high"})}),": ",(0,s.jsx)(r.code,{children:"Annotated[float, Strict(strict=True)]"})]}),(0,s.jsx)(r.p,{children:"The high price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"low"})}),": ",(0,s.jsx)(r.code,{children:"Annotated[float, Strict(strict=True)]"})]}),(0,s.jsx)(r.p,{children:"The low price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"close"})}),": ",(0,s.jsx)(r.code,{children:"Annotated[float, Strict(strict=True)]"})]}),(0,s.jsx)(r.p,{children:"The close price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"volume"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"The trading volume."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"vwap"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Volume Weighted Average Price over the period."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"change"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Change in the price from the previous close."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"change_percent"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Change in the price from the previous close, as a normalized percent."})]}),(0,s.jsxs)(c.A,{value:"intrinio",label:"intrinio",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"date"})}),": ",(0,s.jsx)(r.code,{children:"Union[Union[date, datetime], str]"})]}),(0,s.jsx)(r.p,{children:"The date of the data."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"open"})}),": ",(0,s.jsx)(r.code,{children:"Annotated[float, Strict(strict=True)]"})]}),(0,s.jsx)(r.p,{children:"The open price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"high"})}),": ",(0,s.jsx)(r.code,{children:"Annotated[float, Strict(strict=True)]"})]}),(0,s.jsx)(r.p,{children:"The high price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"low"})}),": ",(0,s.jsx)(r.code,{children:"Annotated[float, Strict(strict=True)]"})]}),(0,s.jsx)(r.p,{children:"The low price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"close"})}),": ",(0,s.jsx)(r.code,{children:"Annotated[float, Strict(strict=True)]"})]}),(0,s.jsx)(r.p,{children:"The close price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"volume"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"The trading volume."})]}),(0,s.jsxs)(c.A,{value:"polygon",label:"polygon",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"date"})}),": ",(0,s.jsx)(r.code,{children:"Union[Union[date, datetime], str]"})]}),(0,s.jsx)(r.p,{children:"The date of the data."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"open"})}),": ",(0,s.jsx)(r.code,{children:"Annotated[float, Strict(strict=True)]"})]}),(0,s.jsx)(r.p,{children:"The open price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"high"})}),": ",(0,s.jsx)(r.code,{children:"Annotated[float, Strict(strict=True)]"})]}),(0,s.jsx)(r.p,{children:"The high price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"low"})}),": ",(0,s.jsx)(r.code,{children:"Annotated[float, Strict(strict=True)]"})]}),(0,s.jsx)(r.p,{children:"The low price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"close"})}),": ",(0,s.jsx)(r.code,{children:"Annotated[float, Strict(strict=True)]"})]}),(0,s.jsx)(r.p,{children:"The close price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"volume"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"The trading volume."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"transactions"})}),": ",(0,s.jsx)(r.code,{children:"Annotated[int, Gt(gt=0)]"})]}),(0,s.jsx)(r.p,{children:"Number of transactions for the symbol in the time period."})]}),(0,s.jsxs)(c.A,{value:"yfinance",label:"yfinance",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"date"})}),": ",(0,s.jsx)(r.code,{children:"Union[Union[date, datetime], str]"})]}),(0,s.jsx)(r.p,{children:"The date of the data."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"open"})}),": ",(0,s.jsx)(r.code,{children:"Annotated[float, Strict(strict=True)]"})]}),(0,s.jsx)(r.p,{children:"The open price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"high"})}),": ",(0,s.jsx)(r.code,{children:"Annotated[float, Strict(strict=True)]"})]}),(0,s.jsx)(r.p,{children:"The high price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"low"})}),": ",(0,s.jsx)(r.code,{children:"Annotated[float, Strict(strict=True)]"})]}),(0,s.jsx)(r.p,{children:"The low price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"close"})}),": ",(0,s.jsx)(r.code,{children:"Annotated[float, Strict(strict=True)]"})]}),(0,s.jsx)(r.p,{children:"The close price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"volume"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"The trading volume."})]})]})]})}function p(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>d});n(96540);var s=n(34164);const i={tabItem:"tabItem_Ymn6"};var t=n(74848);function d(e){let{children:r,hidden:n,className:d}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,d),hidden:n,children:r})}},94331:(e,r,n)=>{n.d(r,{A:()=>t});n(96540);var s=n(5260),i=n(74848);function t(e){let{title:r}=e;return(0,i.jsx)(s.A,{children:(0,i.jsx)("title",{children:r})})}},18228:(e,r,n)=>{n.d(r,{A:()=>y});var s=n(56347),i=n(23104),t=n(96540),d=n(205),c=n(57485),l=n(31682),o=n(89466);function h(e){return function(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:n,attributes:s,default:i}}=e;return{value:r,label:n,attributes:s,default:i}}))}function a(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??h(n);return function(e){const r=(0,l.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function x(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function j(e){let{queryString:r=!1,groupId:n}=e;const i=(0,s.W6)(),d=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,c.aZ)(d),(0,t.useCallback)((e=>{if(!d)return;const r=new URLSearchParams(i.location.search);r.set(d,e),i.replace({...i.location,search:r.toString()})}),[d,i])]}function p(e){const{defaultValue:r,queryString:n=!1,groupId:s}=e,i=a(e),[c,l]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!x({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:i}))),[h,p]=j({queryString:n,groupId:s}),[u,f]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,i]=(0,o.Dv)(n);return[s,(0,t.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),m=(()=>{const e=h??u;return x({value:e,tabValues:i})?e:null})();(0,d.A)((()=>{m&&l(m)}),[m]);return{selectedValue:c,selectValue:(0,t.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),f(e)}),[p,f,i]),tabValues:i}}var u=n(92303),f=n(34164);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var g=n(74848);function b(e){let{className:r,block:n,selectedValue:t,selectValue:d,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),{pathname:h}=(0,s.zy)(),a=e=>{const r=e.currentTarget,n=l.indexOf(r),s=c[n].value;s!==t&&(o(r),d(s))},x=e=>{let r=null;switch(e.key){case"Enter":a(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;r=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;r=l[n]??l[l.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,f.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:c.map((e=>{let{value:r,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>l.push(e),onKeyDown:x,onClick:a,...s,className:(0,f.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,s?.className,{"border-b-2 pointer-events-none":t===r,"border-b-2 text-[#669dcb] border-[#669dcb]":t===r&&h.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":t===r&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":t!==r&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":t===r&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":t!==r&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":t!==r&&h.startsWith("/workspace")}),children:n??r},r)}))})}function v(e){let{lazy:r,children:n,selectedValue:s}=e;if(n=Array.isArray(n)?n:[n],r){const e=n.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:n.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function T(e){const r=p(e);return(0,g.jsxs)("div",{className:(0,f.A)("tabs-container",m.tabList),children:[(0,g.jsx)(b,{...e,...r}),(0,g.jsx)(v,{...e,...r})]})}function y(e){const r=(0,u.A)();return(0,g.jsx)(T,{...e},String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>c});var s=n(96540);const i={},t=s.createContext(i);function d(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);