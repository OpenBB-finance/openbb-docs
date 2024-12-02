"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6373],{93126:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>h,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>x});var i=r(74848),n=r(28453),d=r(94331),s=r(18228),l=r(19365);const c={title:"insider_trading",description:"Learn how to use the stock insider trading Python function to get information  about insider trading, including parameter details, return types, and data descriptions.",keywords:["stock insider trading","equity ownership","Python function","parameter details","data description","symbol","transaction type","limit","provider","returns","results","chart","metadata","data","filing date","transaction date","reporting CIK","securities owned","company CIK","reporting name","type of owner","acquisition or disposition","form type","securities transacted","price","security name","link"]},h=void 0,a={id:"platform/reference/equity/ownership/insider_trading",title:"insider_trading",description:"Learn how to use the stock insider trading Python function to get information  about insider trading, including parameter details, return types, and data descriptions.",source:"@site/content/platform/reference/equity/ownership/insider_trading.md",sourceDirName:"platform/reference/equity/ownership",slug:"/platform/reference/equity/ownership/insider_trading",permalink:"/platform/reference/equity/ownership/insider_trading",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/equity/ownership/insider_trading.md",tags:[],version:"current",frontMatter:{title:"insider_trading",description:"Learn how to use the stock insider trading Python function to get information  about insider trading, including parameter details, return types, and data descriptions.",keywords:["stock insider trading","equity ownership","Python function","parameter details","data description","symbol","transaction type","limit","provider","returns","results","chart","metadata","data","filing date","transaction date","reporting CIK","securities owned","company CIK","reporting name","type of owner","acquisition or disposition","form type","securities transacted","price","security name","link"]},sidebar:"tutorialSidebar",previous:{title:"form_13f",permalink:"/platform/reference/equity/ownership/form_13f"},next:{title:"institutional",permalink:"/platform/reference/equity/ownership/institutional"}},o={},x=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function j(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.A,{title:"equity/ownership/insider_trading - Reference | OpenBB Platform Docs"}),"\n","\n",(0,i.jsx)(t.p,{children:"Get data about trading by a company's management team and board of directors."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"from openbb import obb\nobb.equity.ownership.insider_trading(symbol='AAPL', provider='fmp')\nobb.equity.ownership.insider_trading(symbol='AAPL', limit=500, provider='intrinio')\n"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(s.A,{children:[(0,i.jsx)(l.A,{value:"standard",label:"standard",children:(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Optional"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"symbol"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Symbol to get data for."}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"limit"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"The number of data entries to return."}),(0,i.jsx)(t.td,{children:"500"}),(0,i.jsx)(t.td,{children:"True"})]})]})]})}),(0,i.jsx)(l.A,{value:"fmp",label:"fmp",children:(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Optional"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"symbol"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Symbol to get data for."}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"limit"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"The number of data entries to return."}),(0,i.jsx)(t.td,{children:"500"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"transaction_type"}),(0,i.jsx)(t.td,{children:"Literal['award', 'conversion', 'return', 'expire_short', 'in_kind', 'gift', 'expire_long', 'discretionary', 'other', 'small', 'exempt', 'otm', 'purchase', 'sale', 'tender', 'will', 'itm', 'trust']"}),(0,i.jsx)(t.td,{children:"Type of the transaction."}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]})]})]})}),(0,i.jsx)(l.A,{value:"intrinio",label:"intrinio",children:(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Optional"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"symbol"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Symbol to get data for."}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"limit"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"The number of data entries to return."}),(0,i.jsx)(t.td,{children:"500"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"start_date"}),(0,i.jsx)(t.td,{children:"Union[date, str]"}),(0,i.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"end_date"}),(0,i.jsx)(t.td,{children:"Union[date, str]"}),(0,i.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ownership_type"}),(0,i.jsx)(t.td,{children:"Literal['D', 'I']"}),(0,i.jsx)(t.td,{children:"Type of ownership."}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"sort_by"}),(0,i.jsx)(t.td,{children:"Literal['filing_date', 'updated_on']"}),(0,i.jsx)(t.td,{children:"Field to sort by."}),(0,i.jsx)(t.td,{children:"updated_on"}),(0,i.jsx)(t.td,{children:"True"})]})]})]})}),(0,i.jsx)(l.A,{value:"sec",label:"sec",children:(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Optional"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"symbol"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Symbol to get data for."}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"limit"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"The number of data entries to return."}),(0,i.jsx)(t.td,{children:"500"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"start_date"}),(0,i.jsx)(t.td,{children:"Union[date, str]"}),(0,i.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format. Wide date ranges can result in long download times. Recommended to use a smaller date range, default is 120 days ago."}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"end_date"}),(0,i.jsx)(t.td,{children:"Union[date, str]"}),(0,i.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format. Default is today."}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"use_cache"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{children:"Persist the data locally for future use. Default is True. Each form submission is an individual download and the SEC limits the number of concurrent downloads. This prevents the same file from being downloaded multiple times."}),(0,i.jsx)(t.td,{children:"True"}),(0,i.jsx)(t.td,{children:"True"})]})]})]})}),(0,i.jsx)(l.A,{value:"tmx",label:"tmx",children:(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Optional"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"symbol"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Symbol to get data for."}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"limit"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"The number of data entries to return."}),(0,i.jsx)(t.td,{children:"500"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"summary"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{children:"Return a summary of the insider activity instead of the individuals."}),(0,i.jsx)(t.td,{children:"False"}),(0,i.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[InsiderTrading]\n        Serializable results.\n\n    provider : Optional[Literal['fmp', 'intrinio', 'sec', 'tmx']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,i.jsxs)(s.A,{children:[(0,i.jsx)(l.A,{value:"standard",label:"standard",children:(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"symbol"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"company_cik"}),(0,i.jsx)(t.td,{children:"Union[str, int]"}),(0,i.jsx)(t.td,{children:"CIK number of the company."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"filing_date"}),(0,i.jsx)(t.td,{children:"Union[date, datetime]"}),(0,i.jsx)(t.td,{children:"Filing date of the trade."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"transaction_date"}),(0,i.jsx)(t.td,{children:"date"}),(0,i.jsx)(t.td,{children:"Date of the transaction."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"owner_cik"}),(0,i.jsx)(t.td,{children:"Union[str, int]"}),(0,i.jsx)(t.td,{children:"Reporting individual's CIK."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"owner_name"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Name of the reporting individual."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"owner_title"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"The title held by the reporting individual."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"transaction_type"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Type of transaction being reported."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"acquisition_or_disposition"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Acquisition or disposition of the shares."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"security_type"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"The type of security transacted."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"securities_owned"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Number of securities owned by the reporting individual."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"securities_transacted"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Number of securities transacted by the reporting individual."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"transaction_price"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"The price of the transaction."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"filing_url"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Link to the filing."})]})]})]})}),(0,i.jsx)(l.A,{value:"fmp",label:"fmp",children:(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"symbol"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"company_cik"}),(0,i.jsx)(t.td,{children:"Union[str, int]"}),(0,i.jsx)(t.td,{children:"CIK number of the company."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"filing_date"}),(0,i.jsx)(t.td,{children:"Union[date, datetime]"}),(0,i.jsx)(t.td,{children:"Filing date of the trade."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"transaction_date"}),(0,i.jsx)(t.td,{children:"date"}),(0,i.jsx)(t.td,{children:"Date of the transaction."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"owner_cik"}),(0,i.jsx)(t.td,{children:"Union[str, int]"}),(0,i.jsx)(t.td,{children:"Reporting individual's CIK."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"owner_name"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Name of the reporting individual."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"owner_title"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"The title held by the reporting individual."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"transaction_type"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Type of transaction being reported."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"acquisition_or_disposition"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Acquisition or disposition of the shares."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"security_type"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"The type of security transacted."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"securities_owned"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Number of securities owned by the reporting individual."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"securities_transacted"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Number of securities transacted by the reporting individual."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"transaction_price"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"The price of the transaction."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"filing_url"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Link to the filing."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"form_type"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Form type of the insider trading."})]})]})]})}),(0,i.jsx)(l.A,{value:"intrinio",label:"intrinio",children:(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"symbol"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"company_cik"}),(0,i.jsx)(t.td,{children:"Union[str, int]"}),(0,i.jsx)(t.td,{children:"CIK number of the company."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"filing_date"}),(0,i.jsx)(t.td,{children:"Union[date, datetime]"}),(0,i.jsx)(t.td,{children:"Filing date of the trade."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"transaction_date"}),(0,i.jsx)(t.td,{children:"date"}),(0,i.jsx)(t.td,{children:"Date of the transaction."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"owner_cik"}),(0,i.jsx)(t.td,{children:"Union[str, int]"}),(0,i.jsx)(t.td,{children:"Reporting individual's CIK."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"owner_name"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Name of the reporting individual."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"owner_title"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"The title held by the reporting individual."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"transaction_type"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Type of transaction being reported."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"acquisition_or_disposition"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Acquisition or disposition of the shares."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"security_type"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"The type of security transacted."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"securities_owned"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Number of securities owned by the reporting individual."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"securities_transacted"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Number of securities transacted by the reporting individual."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"transaction_price"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"The price of the transaction."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"filing_url"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"URL of the filing."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"company_name"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Name of the company."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"conversion_exercise_price"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Conversion/Exercise price of the shares."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"deemed_execution_date"}),(0,i.jsx)(t.td,{children:"date"}),(0,i.jsx)(t.td,{children:"Deemed execution date of the trade."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"exercise_date"}),(0,i.jsx)(t.td,{children:"date"}),(0,i.jsx)(t.td,{children:"Exercise date of the trade."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"expiration_date"}),(0,i.jsx)(t.td,{children:"date"}),(0,i.jsx)(t.td,{children:"Expiration date of the derivative."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"underlying_security_title"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Name of the underlying non-derivative security related to this derivative transaction."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"underlying_shares"}),(0,i.jsx)(t.td,{children:"Union[float, int]"}),(0,i.jsx)(t.td,{children:"Number of underlying shares related to this derivative transaction."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"nature_of_ownership"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Nature of ownership of the insider trading."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"director"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{children:"Whether the owner is a director."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"officer"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{children:"Whether the owner is an officer."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ten_percent_owner"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{children:"Whether the owner is a 10% owner."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"other_relation"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{children:"Whether the owner is having another relation."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"derivative_transaction"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{children:"Whether the owner is having a derivative transaction."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"report_line_number"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"Report line number of the insider trading."})]})]})]})}),(0,i.jsx)(l.A,{value:"sec",label:"sec",children:(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"symbol"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"company_cik"}),(0,i.jsx)(t.td,{children:"Union[str, int]"}),(0,i.jsx)(t.td,{children:"CIK number of the company."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"filing_date"}),(0,i.jsx)(t.td,{children:"Union[date, datetime]"}),(0,i.jsx)(t.td,{children:"Filing date of the trade."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"transaction_date"}),(0,i.jsx)(t.td,{children:"date"}),(0,i.jsx)(t.td,{children:"Date of the transaction."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"owner_cik"}),(0,i.jsx)(t.td,{children:"Union[str, int]"}),(0,i.jsx)(t.td,{children:"Reporting individual's CIK."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"owner_name"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Name of the reporting individual."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"owner_title"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"The title held by the reporting individual."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"transaction_type"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Type of transaction being reported."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"acquisition_or_disposition"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Acquisition or disposition of the shares."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"security_type"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"The type of security transacted."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"securities_owned"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Number of securities owned by the reporting individual."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"securities_transacted"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Number of securities transacted by the reporting individual."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"transaction_price"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"The price of the transaction."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"filing_url"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Link to the filing."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"company_name"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Name of the company."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"form"}),(0,i.jsx)(t.td,{children:"Union[str, int]"}),(0,i.jsx)(t.td,{children:"Form type."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"director"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{children:"Whether the owner is a director."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"officer"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{children:"Whether the owner is an officer."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ten_percent_owner"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{children:"Whether the owner is a 10% owner."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"other"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{children:"Whether the owner is classified as other."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"other_text"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Text for other classification."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"transaction_timeliness"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Timeliness of the transaction."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ownership_type"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Type of ownership, direct or indirect."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"nature_of_ownership"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Nature of the ownership."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"exercise_date"}),(0,i.jsx)(t.td,{children:"date"}),(0,i.jsx)(t.td,{children:"Date of exercise."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"expiration_date"}),(0,i.jsx)(t.td,{children:"date"}),(0,i.jsx)(t.td,{children:"Date of expiration for the derivative."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"deemed_execution_date"}),(0,i.jsx)(t.td,{children:"date"}),(0,i.jsx)(t.td,{children:"Deemed execution date."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"underlying_security_title"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Title of the underlying security."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"underlying_security_shares"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Number of underlying shares associated with the derivative."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"underlying_security_value"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Value of the underlying security."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"conversion_exercise_price"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Price of conversion or exercise of the securities."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"transaction_value"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Total value of the transaction."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"value_owned"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Value of the securities owned after the transaction."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"footnote"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Footnote for the transaction."})]})]})]})}),(0,i.jsx)(l.A,{value:"tmx",label:"tmx",children:(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"symbol"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"company_cik"}),(0,i.jsx)(t.td,{children:"Union[str, int]"}),(0,i.jsx)(t.td,{children:"CIK number of the company."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"filing_date"}),(0,i.jsx)(t.td,{children:"Union[date, datetime]"}),(0,i.jsx)(t.td,{children:"Filing date of the trade."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"transaction_date"}),(0,i.jsx)(t.td,{children:"date"}),(0,i.jsx)(t.td,{children:"Date of the transaction."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"owner_cik"}),(0,i.jsx)(t.td,{children:"Union[str, int]"}),(0,i.jsx)(t.td,{children:"Reporting individual's CIK."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"owner_name"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"The name of the insider."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"owner_title"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"The title held by the reporting individual."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"transaction_type"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Type of transaction being reported."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"acquisition_or_disposition"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Acquisition or disposition of the shares."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"security_type"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"The type of security transacted."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"securities_owned"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"The number of shares held by the insider."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"securities_transacted"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"The total number of shares traded by the insider over the period."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"transaction_price"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"The price of the transaction."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"filing_url"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Link to the filing."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"period"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"The period of the activity. Bucketed by three, six, and twelve months."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"acquisition_or_deposition"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Whether the insider bought or sold the shares."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"number_of_trades"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"The number of shares traded over the period."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"trade_value"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"The value of the shares traded by the insider."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"securities_bought"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"The total number of shares bought by all insiders over the period."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"securities_sold"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"The total number of shares sold by all insiders over the period."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"net_activity"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"The total net activity by all insiders over the period."})]})]})]})})]})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var i=r(34164);const n={tabItem:"tabItem_Ymn6"};var d=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,i.A)(n.tabItem,s),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>d});r(96540);var i=r(5260),n=r(74848);function d(e){let{title:t}=e;return(0,n.jsx)(i.A,{children:(0,n.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>v});var i=r(96540),n=r(34164),d=r(23104),s=r(56347),l=r(205),c=r(57485),h=r(31682),a=r(89466);function o(e){return function(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:i,default:n}}=e;return{value:t,label:r,attributes:i,default:n}}))}function x(e){const{values:t,children:r}=e;return(0,i.useMemo)((()=>{const e=t??o(r);return function(e){const t=(0,h.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function j(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.W6)(),d=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c.aZ)(d),(0,i.useCallback)((e=>{if(!d)return;const t=new URLSearchParams(n.location.search);t.set(d,e),n.replace({...n.location,search:t.toString()})}),[d,n])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,d=x(e),[s,c]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!j({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=r.find((e=>e.default))??r[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:d}))),[h,o]=u({queryString:r,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,d]=(0,a.Dv)(r);return[n,(0,i.useCallback)((e=>{r&&d.set(e)}),[r,d])]}({groupId:n}),m=(()=>{const e=h??p;return j({value:e,tabValues:d})?e:null})();(0,l.A)((()=>{m&&c(m)}),[m]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!j({value:e,tabValues:d}))throw new Error(`Can't select invalid tab value=${e}`);c(e),o(e),f(e)}),[o,f,d]),tabValues:d}}var f=r(92303);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function y(e){let{className:t,block:r,selectedValue:i,selectValue:l,tabValues:c}=e;const h=[],{blockElementScrollPositionUntilNextRender:a}=(0,d.a_)(),{pathname:o}=(0,s.zy)(),x=e=>{const t=e.currentTarget,r=h.indexOf(t),n=c[r].value;n!==i&&(a(t),l(n))},j=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const r=h.indexOf(e.currentTarget)+1;t=h[r]??h[0];break}case"ArrowLeft":{const r=h.indexOf(e.currentTarget)-1;t=h[r]??h[h.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:c.map((e=>{let{value:t,label:r,attributes:d}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>h.push(e),onKeyDown:j,onClick:x,...d,className:(0,n.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,d?.className,{"border-b-2 pointer-events-none":i===t,"border-b-2 text-[#669dcb] border-[#669dcb]":i===t&&o.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===t&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==t&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":i!==t&&o.startsWith("/terminal")}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function _(e){const t=p(e);return(0,b.jsxs)("div",{className:(0,n.A)("tabs-container",m.tabList),children:[(0,b.jsx)(y,{...e,...t}),(0,b.jsx)(g,{...e,...t})]})}function v(e){const t=(0,f.A)();return(0,b.jsx)(_,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>l});var i=r(96540);const n={},d=i.createContext(n);function s(e){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);