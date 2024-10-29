"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2897],{71685:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>j,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var d=r(74848),n=r(28453),s=r(18228),l=r(19365);const i={title:"Currency Historical",description:"Currency Historical Price"},a=void 0,c={id:"platform/data_models/CurrencyHistorical",title:"Currency Historical",description:"Currency Historical Price",source:"@site/content/platform/data_models/CurrencyHistorical.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/CurrencyHistorical",permalink:"/platform/data_models/CurrencyHistorical",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/data_models/CurrencyHistorical.md",tags:[],version:"current",frontMatter:{title:"Currency Historical",description:"Currency Historical Price"},sidebar:"tutorialSidebar",previous:{title:"Crypto Search",permalink:"/platform/data_models/CryptoSearch"},next:{title:"Currency Pairs",permalink:"/platform/data_models/CurrencyPairs"}},h={},o=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.hr,{}),"\n",(0,d.jsx)(t.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,d.jsx)(t.h3,{id:"class-names",children:"Class names"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Model name"}),(0,d.jsx)(t.th,{children:"Parameters class"}),(0,d.jsx)(t.th,{children:"Data class"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"CurrencyHistorical"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"CurrencyHistoricalQueryParams"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"CurrencyHistoricalData"})})]})})]}),"\n",(0,d.jsx)(t.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-python",children:"from openbb_core.provider.standard_models.currency_historical import (\nCurrencyHistoricalData,\nCurrencyHistoricalQueryParams,\n)\n"})}),"\n",(0,d.jsx)(t.hr,{}),"\n",(0,d.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,d.jsxs)(s.A,{children:[(0,d.jsx)(l.A,{value:"standard",label:"standard",children:(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"}),(0,d.jsx)(t.th,{children:"Default"}),(0,d.jsx)(t.th,{children:"Optional"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"symbol"}),(0,d.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,d.jsx)(t.td,{children:"Symbol to get data for. Can use CURR1-CURR2 or CURR1CURR2 format. Multiple items allowed for provider(s): fmp, polygon, tiingo, yfinance."}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"False"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"start_date"}),(0,d.jsx)(t.td,{children:"Union[date, str]"}),(0,d.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"end_date"}),(0,d.jsx)(t.td,{children:"Union[date, str]"}),(0,d.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]})]})]})}),(0,d.jsx)(l.A,{value:"fmp",label:"fmp",children:(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"}),(0,d.jsx)(t.th,{children:"Default"}),(0,d.jsx)(t.th,{children:"Optional"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"symbol"}),(0,d.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,d.jsx)(t.td,{children:"Symbol to get data for. Can use CURR1-CURR2 or CURR1CURR2 format. Multiple items allowed for provider(s): fmp, polygon, tiingo, yfinance."}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"False"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"start_date"}),(0,d.jsx)(t.td,{children:"Union[date, str]"}),(0,d.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"end_date"}),(0,d.jsx)(t.td,{children:"Union[date, str]"}),(0,d.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"interval"}),(0,d.jsx)(t.td,{children:"Literal['1m', '5m', '15m', '30m', '1h', '4h', '1d']"}),(0,d.jsx)(t.td,{children:"Time interval of the data to return."}),(0,d.jsx)(t.td,{children:"1d"}),(0,d.jsx)(t.td,{children:"True"})]})]})]})}),(0,d.jsx)(l.A,{value:"polygon",label:"polygon",children:(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"}),(0,d.jsx)(t.th,{children:"Default"}),(0,d.jsx)(t.th,{children:"Optional"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"symbol"}),(0,d.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,d.jsx)(t.td,{children:"Symbol to get data for. Can use CURR1-CURR2 or CURR1CURR2 format. Multiple items allowed for provider(s): fmp, polygon, tiingo, yfinance."}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"False"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"start_date"}),(0,d.jsx)(t.td,{children:"Union[date, str]"}),(0,d.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"end_date"}),(0,d.jsx)(t.td,{children:"Union[date, str]"}),(0,d.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"interval"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Time interval of the data to return. The numeric portion of the interval can be any positive integer. The letter portion can be one of the following: s, m, h, d, W, M, Q, Y"}),(0,d.jsx)(t.td,{children:"1d"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"sort"}),(0,d.jsx)(t.td,{children:"Literal['asc', 'desc']"}),(0,d.jsx)(t.td,{children:"Sort order of the data. This impacts the results in combination with the 'limit' parameter. The results are always returned in ascending order by date."}),(0,d.jsx)(t.td,{children:"asc"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"limit"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"The number of data entries to return."}),(0,d.jsx)(t.td,{children:"49999"}),(0,d.jsx)(t.td,{children:"True"})]})]})]})}),(0,d.jsx)(l.A,{value:"tiingo",label:"tiingo",children:(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"}),(0,d.jsx)(t.th,{children:"Default"}),(0,d.jsx)(t.th,{children:"Optional"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"symbol"}),(0,d.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,d.jsx)(t.td,{children:"Symbol to get data for. Can use CURR1-CURR2 or CURR1CURR2 format. Multiple items allowed for provider(s): fmp, polygon, tiingo, yfinance."}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"False"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"start_date"}),(0,d.jsx)(t.td,{children:"Union[date, str]"}),(0,d.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"end_date"}),(0,d.jsx)(t.td,{children:"Union[date, str]"}),(0,d.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"interval"}),(0,d.jsx)(t.td,{children:"Union[Literal['1m', '5m', '15m', '30m', '90m', '1h', '2h', '4h', '1d', '5d', '21d'], str]"}),(0,d.jsx)(t.td,{children:"Time interval of the data to return."}),(0,d.jsx)(t.td,{children:"1d"}),(0,d.jsx)(t.td,{children:"True"})]})]})]})}),(0,d.jsx)(l.A,{value:"yfinance",label:"yfinance",children:(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"}),(0,d.jsx)(t.th,{children:"Default"}),(0,d.jsx)(t.th,{children:"Optional"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"symbol"}),(0,d.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,d.jsx)(t.td,{children:"Symbol to get data for. Can use CURR1-CURR2 or CURR1CURR2 format. Multiple items allowed for provider(s): fmp, polygon, tiingo, yfinance."}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"False"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"start_date"}),(0,d.jsx)(t.td,{children:"Union[date, str]"}),(0,d.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"end_date"}),(0,d.jsx)(t.td,{children:"Union[date, str]"}),(0,d.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"interval"}),(0,d.jsx)(t.td,{children:"Literal['1m', '2m', '5m', '15m', '30m', '60m', '90m', '1h', '1d', '5d', '1W', '1M', '1Q']"}),(0,d.jsx)(t.td,{children:"Time interval of the data to return."}),(0,d.jsx)(t.td,{children:"1d"}),(0,d.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,d.jsx)(t.hr,{}),"\n",(0,d.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,d.jsxs)(s.A,{children:[(0,d.jsx)(l.A,{value:"standard",label:"standard",children:(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"date"}),(0,d.jsx)(t.td,{children:"Union[Union[date, datetime], str]"}),(0,d.jsx)(t.td,{children:"The date of the data."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"open"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The open price."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"high"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The high price."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"low"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The low price."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"close"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The close price."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"volume"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The trading volume."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"vwap"}),(0,d.jsx)(t.td,{children:"Annotated[float, Gt(gt=0)]"}),(0,d.jsx)(t.td,{children:"Volume Weighted Average Price over the period."})]})]})]})}),(0,d.jsx)(l.A,{value:"fmp",label:"fmp",children:(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"date"}),(0,d.jsx)(t.td,{children:"Union[Union[date, datetime], str]"}),(0,d.jsx)(t.td,{children:"The date of the data."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"open"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The open price."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"high"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The high price."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"low"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The low price."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"close"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The close price."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"volume"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The trading volume."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"vwap"}),(0,d.jsx)(t.td,{children:"Annotated[float, Gt(gt=0)]"}),(0,d.jsx)(t.td,{children:"Volume Weighted Average Price over the period."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"adj_close"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The adjusted close price."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"change"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Change in the price from the previous close."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"change_percent"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Change in the price from the previous close, as a normalized percent."})]})]})]})}),(0,d.jsx)(l.A,{value:"polygon",label:"polygon",children:(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"date"}),(0,d.jsx)(t.td,{children:"Union[Union[date, datetime], str]"}),(0,d.jsx)(t.td,{children:"The date of the data."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"open"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The open price."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"high"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The high price."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"low"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The low price."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"close"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The close price."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"volume"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The trading volume."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"vwap"}),(0,d.jsx)(t.td,{children:"Annotated[float, Gt(gt=0)]"}),(0,d.jsx)(t.td,{children:"Volume Weighted Average Price over the period."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"transactions"}),(0,d.jsx)(t.td,{children:"Annotated[int, Gt(gt=0)]"}),(0,d.jsx)(t.td,{children:"Number of transactions for the symbol in the time period."})]})]})]})}),(0,d.jsx)(l.A,{value:"tiingo",label:"tiingo",children:(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"date"}),(0,d.jsx)(t.td,{children:"Union[Union[date, datetime], str]"}),(0,d.jsx)(t.td,{children:"The date of the data."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"open"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The open price."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"high"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The high price."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"low"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The low price."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"close"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The close price."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"volume"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The trading volume."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"vwap"}),(0,d.jsx)(t.td,{children:"Annotated[float, Gt(gt=0)]"}),(0,d.jsx)(t.td,{children:"Volume Weighted Average Price over the period."})]})]})]})}),(0,d.jsx)(l.A,{value:"yfinance",label:"yfinance",children:(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"date"}),(0,d.jsx)(t.td,{children:"Union[Union[date, datetime], str]"}),(0,d.jsx)(t.td,{children:"The date of the data."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"open"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The open price."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"high"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The high price."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"low"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The low price."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"close"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The close price."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"volume"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The trading volume."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"vwap"}),(0,d.jsx)(t.td,{children:"Annotated[float, Gt(gt=0)]"}),(0,d.jsx)(t.td,{children:"Volume Weighted Average Price over the period."})]})]})]})})]})]})}function j(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var d=r(34164);const n={tabItem:"tabItem_Ymn6"};var s=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,d.A)(n.tabItem,l),hidden:r,children:t})}},18228:(e,t,r)=>{r.d(t,{A:()=>T});var d=r(96540),n=r(34164),s=r(23104),l=r(56347),i=r(205),a=r(57485),c=r(31682),h=r(89466);function o(e){return function(e){return d.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,d.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:d,default:n}}=e;return{value:t,label:r,attributes:d,default:n}}))}function x(e){const{values:t,children:r}=e;return(0,d.useMemo)((()=>{const e=t??o(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function j(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,a.aZ)(s),(0,d.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=x(e),[l,a]=(0,d.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!j({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const d=r.find((e=>e.default))??r[0];if(!d)throw new Error("Unexpected error: 0 tabValues");return d.value}({defaultValue:t,tabValues:s}))),[c,o]=u({queryString:r,groupId:n}),[m,p]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,h.Dv)(r);return[n,(0,d.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),f=(()=>{const e=c??m;return j({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{f&&a(f)}),[f]);return{selectedValue:l,selectValue:(0,d.useCallback)((e=>{if(!j({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),o(e),p(e)}),[o,p,s]),tabValues:s}}var p=r(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function v(e){let{className:t,block:r,selectedValue:d,selectValue:i,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:h}=(0,s.a_)(),{pathname:o}=(0,l.zy)(),x=e=>{const t=e.currentTarget,r=c.indexOf(t),n=a[r].value;n!==d&&(h(t),i(n))},j=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:a.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:d===t?0:-1,"aria-selected":d===t,ref:e=>c.push(e),onKeyDown:j,onClick:x,...s,className:(0,n.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,s?.className,{"border-b-2 pointer-events-none":d===t,"border-b-2 text-[#669dcb] border-[#669dcb]":d===t&&o.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":d===t&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":d!==t&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":d===t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":d!==t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":d!==t&&o.startsWith("/terminal")}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,d.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,d.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function g(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,n.A)("tabs-container",f.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(y,{...e,...t})]})}function T(e){const t=(0,p.A)();return(0,b.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>i});var d=r(96540);const n={},s=d.createContext(n);function l(e){const t=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),d.createElement(s.Provider,{value:t},e.children)}}}]);