"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58637],{33730:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>j,frontMatter:()=>l,metadata:()=>h,toc:()=>x});var n=r(74848),i=r(28453),d=r(94331),s=r(18228),a=r(19365);const l={title:"ipo",description:"Access the Upcoming and Historical IPO Calendars and retrieve IPO information  using Python.",keywords:["Upcoming IPO Calendar","Historical IPO Calendar","Python function","equity.calendar.ipo","symbol","start_date","end_date","limit","provider","intrinio","nasdaq","status","min_value","max_value","OBBject","results","CalendarIpo","warnings","Chart","Metadata","data","ipo_date","status","exchange","offer_amount","share_price","share_price_lowest","share_price_highest","share_count","share_count_lowest","share_count_highest","announcement_url","sec_report_url","open_price","close_price","volume","day_change","week_change","month_change","id","company","security","name","expected_price_date","filed_date","withdraw_date","deal_status"]},c=void 0,h={id:"platform/reference/equity/calendar/ipo",title:"ipo",description:"Access the Upcoming and Historical IPO Calendars and retrieve IPO information  using Python.",source:"@site/content/platform/reference/equity/calendar/ipo.md",sourceDirName:"platform/reference/equity/calendar",slug:"/platform/reference/equity/calendar/ipo",permalink:"/platform/reference/equity/calendar/ipo",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/equity/calendar/ipo.md",tags:[],version:"current",frontMatter:{title:"ipo",description:"Access the Upcoming and Historical IPO Calendars and retrieve IPO information  using Python.",keywords:["Upcoming IPO Calendar","Historical IPO Calendar","Python function","equity.calendar.ipo","symbol","start_date","end_date","limit","provider","intrinio","nasdaq","status","min_value","max_value","OBBject","results","CalendarIpo","warnings","Chart","Metadata","data","ipo_date","status","exchange","offer_amount","share_price","share_price_lowest","share_price_highest","share_count","share_count_lowest","share_count_highest","announcement_url","sec_report_url","open_price","close_price","volume","day_change","week_change","month_change","id","company","security","name","expected_price_date","filed_date","withdraw_date","deal_status"]},sidebar:"tutorialSidebar",previous:{title:"earnings",permalink:"/platform/reference/equity/calendar/earnings"},next:{title:"splits",permalink:"/platform/reference/equity/calendar/splits"}},o={},x=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function u(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.A,{title:"equity/calendar/ipo - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(t.p,{children:"Get historical and upcoming initial public offerings (IPOs)."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb import obb\nobb.equity.calendar.ipo(provider='intrinio')\nobb.equity.calendar.ipo(limit=100, provider='nasdaq')\n# Get all IPOs available.\nobb.equity.calendar.ipo(provider='intrinio')\n# Get IPOs for specific dates.\nobb.equity.calendar.ipo(start_date='2024-02-01', end_date='2024-02-07', provider='nasdaq')\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(a.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol to get data for."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of data entries to return."}),(0,n.jsx)(t.td,{children:"100"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['intrinio', 'nasdaq']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: intrinio, nasdaq."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(a.A,{value:"intrinio",label:"intrinio",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol to get data for."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of data entries to return."}),(0,n.jsx)(t.td,{children:"100"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['intrinio', 'nasdaq']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: intrinio, nasdaq."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"status"}),(0,n.jsx)(t.td,{children:"Literal['upcoming', 'priced', 'withdrawn']"}),(0,n.jsx)(t.td,{children:"Status of the IPO. [upcoming, priced, or withdrawn]"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"min_value"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Return IPOs with an offer dollar amount greater than the given amount."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"max_value"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Return IPOs with an offer dollar amount less than the given amount."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(a.A,{value:"nasdaq",label:"nasdaq",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol to get data for."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of data entries to return."}),(0,n.jsx)(t.td,{children:"100"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['intrinio', 'nasdaq']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: intrinio, nasdaq."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"status"}),(0,n.jsx)(t.td,{children:"Literal['upcoming', 'priced', 'filed', 'withdrawn']"}),(0,n.jsx)(t.td,{children:"The status of the IPO."}),(0,n.jsx)(t.td,{children:"priced"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"is_spo"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"If True, returns data for secondary public offerings (SPOs)."}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[CalendarIpo]\n        Serializable results.\n\n    provider : Optional[Literal['intrinio', 'nasdaq']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(a.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ipo_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The date of the IPO, when the stock first trades on a major exchange."})]})]})]})}),(0,n.jsx)(a.A,{value:"intrinio",label:"intrinio",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ipo_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The date of the IPO, when the stock first trades on a major exchange."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"status"}),(0,n.jsx)(t.td,{children:"Literal['upcoming', 'priced', 'withdrawn']"}),(0,n.jsx)(t.td,{children:"The status of the IPO. Upcoming IPOs have not taken place yet but are expected to. Priced IPOs have taken place. Withdrawn IPOs were expected to take place, but were subsequently withdrawn."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"exchange"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The acronym of the stock exchange that the company is going to trade publicly on. Typically NYSE or NASDAQ."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"offer_amount"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The total dollar amount of shares offered in the IPO. Typically this is share price * share count"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"share_price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The price per share at which the IPO was offered."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"share_price_lowest"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The expected lowest price per share at which the IPO will be offered. Before an IPO is priced, companies typically provide a range of prices per share at which they expect to offer the IPO (typically available for upcoming IPOs)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"share_price_highest"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The expected highest price per share at which the IPO will be offered. Before an IPO is priced, companies typically provide a range of prices per share at which they expect to offer the IPO (typically available for upcoming IPOs)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"share_count"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of shares offered in the IPO."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"share_count_lowest"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The expected lowest number of shares that will be offered in the IPO. Before an IPO is priced, companies typically provide a range of shares that they expect to offer in the IPO (typically available for upcoming IPOs)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"share_count_highest"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The expected highest number of shares that will be offered in the IPO. Before an IPO is priced, companies typically provide a range of shares that they expect to offer in the IPO (typically available for upcoming IPOs)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"announcement_url"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The URL to the company's announcement of the IPO"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sec_report_url"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The URL to the company's S-1, S-1/A, F-1, or F-1/A SEC filing, which is required to be filed before an IPO takes place."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"open_price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The opening price at the beginning of the first trading day (only available for priced IPOs)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"close_price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The closing price at the end of the first trading day (only available for priced IPOs)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"volume"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The volume at the end of the first trading day (only available for priced IPOs)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"day_change"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The percentage change between the open price and the close price on the first trading day (only available for priced IPOs)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"week_change"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The percentage change between the open price on the first trading day and the close price approximately a week after the first trading day (only available for priced IPOs)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"month_change"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The percentage change between the open price on the first trading day and the close price approximately a month after the first trading day (only available for priced IPOs)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"id"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The Intrinio ID of the IPO."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"company"}),(0,n.jsx)(t.td,{children:"IntrinioCompany"}),(0,n.jsx)(t.td,{children:"The company that is going public via the IPO."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"security"}),(0,n.jsx)(t.td,{children:"IntrinioSecurity"}),(0,n.jsx)(t.td,{children:"The primary Security for the Company that is going public via the IPO"})]})]})]})}),(0,n.jsx)(a.A,{value:"nasdaq",label:"nasdaq",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ipo_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The date of the IPO, when the stock first trades on a major exchange."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The name of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"offer_amount"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The dollar value of the shares offered."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"share_count"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of shares offered."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"expected_price_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The date the pricing is expected."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"filed_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The date the IPO was filed."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"withdraw_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The date the IPO was withdrawn."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"deal_status"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The status of the deal."})]})]})]})})]})]})}function j(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(34164);const i={tabItem:"tabItem_Ymn6"};var d=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,s),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>d});r(96540);var n=r(5260),i=r(74848);function d(e){let{title:t}=e;return(0,i.jsx)(n.A,{children:(0,i.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>_});var n=r(96540),i=r(34164),d=r(23104),s=r(56347),a=r(205),l=r(57485),c=r(31682),h=r(70679);function o(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:i}}=e;return{value:t,label:r,attributes:n,default:i}}))}function x(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??o(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function u(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:r}=e;const i=(0,s.W6)(),d=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(d),(0,n.useCallback)((e=>{if(!d)return;const t=new URLSearchParams(i.location.search);t.set(d,e),i.replace({...i.location,search:t.toString()})}),[d,i])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:i}=e,d=x(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:d}))),[c,o]=j({queryString:r,groupId:i}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,d]=(0,h.Dv)(r);return[i,(0,n.useCallback)((e=>{r&&d.set(e)}),[r,d])]}({groupId:i}),m=(()=>{const e=c??p;return u({value:e,tabValues:d})?e:null})();(0,a.A)((()=>{m&&l(m)}),[m]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:d}))throw new Error(`Can't select invalid tab value=${e}`);l(e),o(e),f(e)}),[o,f,d]),tabValues:d}}var f=r(92303);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function y(e){let{className:t,block:r,selectedValue:n,selectValue:a,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:h}=(0,d.a_)(),{pathname:o}=(0,s.zy)(),x=e=>{const t=e.currentTarget,r=c.indexOf(t),i=l[r].value;i!==n&&(h(t),a(i))},u=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:t,label:r,attributes:d}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:u,onClick:x,...d,className:(0,i.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,d?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&o.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&o.startsWith("/terminal")}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:i}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function v(e){const t=p(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",m.tabList),children:[(0,b.jsx)(y,{...e,...t}),(0,b.jsx)(g,{...e,...t})]})}function _(e){const t=(0,f.A)();return(0,b.jsx)(v,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var n=r(96540);const i={},d=n.createContext(i);function s(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);