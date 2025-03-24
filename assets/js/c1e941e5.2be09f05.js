"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19698],{86329:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>h,default:()=>j,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var n=r(74848),d=r(28453),s=r(18228),l=r(19365);const i={title:"Etf Search",description:"Search for ETFs"},h=void 0,c={id:"platform/data_models/EtfSearch",title:"Etf Search",description:"Search for ETFs",source:"@site/content/platform/data_models/EtfSearch.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/EtfSearch",permalink:"/platform/data_models/EtfSearch",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/data_models/EtfSearch.md",tags:[],version:"current",frontMatter:{title:"Etf Search",description:"Search for ETFs"},sidebar:"tutorialSidebar",previous:{title:"Etf Price Performance",permalink:"/platform/data_models/EtfPricePerformance"},next:{title:"Etf Sectors",permalink:"/platform/data_models/EtfSectors"}},a={},o=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,n.jsx)(t.h3,{id:"class-names",children:"Class names"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Model name"}),(0,n.jsx)(t.th,{children:"Parameters class"}),(0,n.jsx)(t.th,{children:"Data class"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"EtfSearch"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"EtfSearchQueryParams"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"EtfSearchData"})})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb_core.provider.standard_models.etf_search import (\nEtfSearchData,\nEtfSearchQueryParams,\n)\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"query"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Search query."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"True"})]})})]})}),(0,n.jsx)(l.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"query"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Search query."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"exchange"}),(0,n.jsx)(t.td,{children:"Literal['AMEX', 'NYSE', 'NASDAQ', 'ETF', 'TSX', 'EURONEXT']"}),(0,n.jsx)(t.td,{children:"The exchange code the ETF trades on."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"is_active"}),(0,n.jsx)(t.td,{children:"Literal[True, False]"}),(0,n.jsx)(t.td,{children:"Whether the ETF is actively trading."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(l.A,{value:"intrinio",label:"intrinio",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"query"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Search query."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"exchange"}),(0,n.jsx)(t.td,{children:"Literal['xnas', 'arcx', 'bats', 'xnys', 'bvmf', 'xshg', 'xshe', 'xhkg', 'xbom', 'xnse', 'xidx', 'tase', 'xkrx', 'xkls', 'xmex', 'xses', 'roco', 'xtai', 'xbkk', 'xist']"}),(0,n.jsx)(t.td,{children:"Target a specific exchange by providing the MIC code."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(l.A,{value:"tmx",label:"tmx",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"query"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Search query."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"div_freq"}),(0,n.jsx)(t.td,{children:"Literal['monthly', 'annually', 'quarterly']"}),(0,n.jsx)(t.td,{children:"The dividend payment frequency."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sort_by"}),(0,n.jsx)(t.td,{children:"Literal['nav', 'return_1m', 'return_3m', 'return_6m', 'return_1y', 'return_3y', 'return_ytd', 'beta_1y', 'volume_avg_daily', 'management_fee', 'distribution_yield', 'pb_ratio', 'pe_ratio']"}),(0,n.jsx)(t.td,{children:"The column to sort by."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"use_cache"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Whether to use a cached request. All ETF data comes from a single JSON file that is updated daily. To bypass, set to False. If True, the data will be cached for 4 hours."}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data.(ETF)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the ETF."})]})]})]})}),(0,n.jsx)(l.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data.(ETF)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the ETF."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"market_cap"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The market cap of the ETF."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sector"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The sector of the ETF."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"industry"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The industry of the ETF."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"beta"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The beta of the ETF."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The current price of the ETF."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"last_annual_dividend"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The last annual dividend paid."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"volume"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The current trading volume of the ETF."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"exchange"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The exchange code the ETF trades on."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"exchange_name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The full name of the exchange the ETF trades on."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"country"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The country the ETF is registered in."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"actively_trading"}),(0,n.jsx)(t.td,{children:"Literal[True, False]"}),(0,n.jsx)(t.td,{children:"Whether the ETF is actively trading."})]})]})]})}),(0,n.jsx)(l.A,{value:"intrinio",label:"intrinio",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data.(ETF)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the ETF."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"exchange"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The exchange MIC code."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"figi_ticker"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The OpenFIGI ticker."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ric"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The Reuters Instrument Code."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"isin"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The International Securities Identification Number."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sedol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The Stock Exchange Daily Official List."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"intrinio_id"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The unique Intrinio ID for the security."})]})]})]})}),(0,n.jsx)(l.A,{value:"tmx",label:"tmx",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data.(ETF)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the ETF."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"short_name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The short name of the ETF."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"inception_date"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The inception date of the ETF."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"issuer"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The issuer of the ETF."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"investment_style"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The investment style of the ETF."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"esg"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Whether the ETF qualifies as an ESG fund."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"currency"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The currency of the ETF."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"unit_price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The unit price of the ETF."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"close"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The closing price of the ETF."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"prev_close"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The previous closing price of the ETF."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"return_1m"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The one-month return of the ETF, as a normalized percent."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"return_3m"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The three-month return of the ETF, as a normalized percent."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"return_6m"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The six-month return of the ETF, as a normalized percent."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"return_ytd"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The year-to-date return of the ETF, as a normalized percent."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"return_1y"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The one-year return of the ETF, as a normalized percent."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"beta_1y"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The one-year beta of the ETF, as a normalized percent."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"return_3y"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The three-year return of the ETF, as a normalized percent."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"beta_3y"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The three-year beta of the ETF, as a normalized percent."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"return_5y"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The five-year return of the ETF, as a normalized percent."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"beta_5y"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The five-year beta of the ETF, as a normalized percent."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"return_10y"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The ten-year return of the ETF, as a normalized percent."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"beta_10y"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The ten-year beta of the ETF."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"beta_15y"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The fifteen-year beta of the ETF."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"return_from_inception"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The return from inception of the ETF, as a normalized percent."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"avg_volume"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The average daily volume of the ETF."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"avg_volume_30d"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The 30-day average volume of the ETF."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"aum"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The AUM of the ETF."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pe_ratio"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The price-to-earnings ratio of the ETF."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pb_ratio"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The price-to-book ratio of the ETF."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"management_fee"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The management fee of the ETF, as a normalized percent."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"mer"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The management expense ratio of the ETF, as a normalized percent."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"distribution_yield"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The distribution yield of the ETF, as a normalized percent."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"dividend_frequency"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The dividend payment frequency of the ETF."})]})]})]})})]})]})}function j(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var n=r(34164);const d={tabItem:"tabItem_Ymn6"};var s=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(d.tabItem,l),hidden:r,children:t})}},18228:(e,t,r)=>{r.d(t,{A:()=>E});var n=r(56347),d=r(23104),s=r(96540),l=r(205),i=r(57485),h=r(31682),c=r(89466);function a(e){return function(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:d}}=e;return{value:t,label:r,attributes:n,default:d}}))}function o(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??a(r);return function(e){const t=(0,h.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:r}=e;const d=(0,n.W6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(l),(0,s.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(d.location.search);t.set(l,e),d.replace({...d.location,search:t.toString()})}),[l,d])]}function u(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,d=o(e),[i,h]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:d}))),[a,u]=j({queryString:r,groupId:n}),[f,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,d]=(0,c.Dv)(r);return[n,(0,s.useCallback)((e=>{r&&d.set(e)}),[r,d])]}({groupId:n}),p=(()=>{const e=a??f;return x({value:e,tabValues:d})?e:null})();(0,l.A)((()=>{p&&h(p)}),[p]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!x({value:e,tabValues:d}))throw new Error(`Can't select invalid tab value=${e}`);h(e),u(e),m(e)}),[u,m,d]),tabValues:d}}var f=r(92303),m=r(34164);const p={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function T(e){let{className:t,block:r,selectedValue:s,selectValue:l,tabValues:i}=e;const h=[],{blockElementScrollPositionUntilNextRender:c}=(0,d.a_)(),{pathname:a}=(0,n.zy)(),o=e=>{const t=e.currentTarget,r=h.indexOf(t),n=i[r].value;n!==s&&(c(t),l(n))},x=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=h.indexOf(e.currentTarget)+1;t=h[r]??h[0];break}case"ArrowLeft":{const r=h.indexOf(e.currentTarget)-1;t=h[r]??h[h.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:i.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>h.push(e),onKeyDown:x,onClick:o,...n,className:(0,m.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",p.tabItem,n?.className,{"border-b-2 pointer-events-none":s===t,"border-b-2 text-[#669dcb] border-[#669dcb]":s===t&&a.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&a.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&a.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&a.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&a.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":s!==t&&a.startsWith("/workspace")}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function v(e){const t=u(e);return(0,b.jsxs)("div",{className:(0,m.A)("tabs-container",p.tabList),children:[(0,b.jsx)(T,{...e,...t}),(0,b.jsx)(y,{...e,...t})]})}function E(e){const t=(0,f.A)();return(0,b.jsx)(v,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>i});var n=r(96540);const d={},s=n.createContext(d);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);