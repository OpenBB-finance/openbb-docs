"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83036],{45521:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>h,default:()=>j,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=t(74848),s=t(28453),i=t(94331),c=t(18228),d=t(19365);const l={title:"snapshots",description:"Snapshots of currency exchange rates from an indirect or direct perspective of a base currency",keywords:["currency","snapshots"]},h=void 0,o={id:"platform/reference/currency/snapshots",title:"snapshots",description:"Snapshots of currency exchange rates from an indirect or direct perspective of a base currency",source:"@site/content/platform/reference/currency/snapshots.md",sourceDirName:"platform/reference/currency",slug:"/platform/reference/currency/snapshots",permalink:"/platform/reference/currency/snapshots",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/currency/snapshots.md",tags:[],version:"current",frontMatter:{title:"snapshots",description:"Snapshots of currency exchange rates from an indirect or direct perspective of a base currency",keywords:["currency","snapshots"]},sidebar:"tutorialSidebar",previous:{title:"search",permalink:"/platform/reference/currency/search"},next:{title:"Derivatives",permalink:"/platform/reference/derivatives/"}},a={},u=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function x(e){const r={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"currency/snapshots - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(r.p,{children:"Snapshots of currency exchange rates from an indirect or direct perspective of a base currency."}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"from openbb import obb\nobb.currency.snapshots(provider='fmp')\n# Get exchange rates from USD and XAU to EUR, JPY, and GBP using 'fmp' as provider.\nobb.currency.snapshots(provider='fmp', base='USD,XAU', counter_currencies='EUR,JPY,GBP', quote_type='indirect')\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(c.A,{children:[(0,n.jsx)(d.A,{value:"standard",label:"standard",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"base"}),(0,n.jsx)(r.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(r.td,{children:"The base currency symbol. Multiple items allowed for provider(s): fmp, polygon."}),(0,n.jsx)(r.td,{children:"usd"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"quote_type"}),(0,n.jsx)(r.td,{children:"Literal['direct', 'indirect']"}),(0,n.jsx)(r.td,{children:"Whether the quote is direct or indirect. Selecting 'direct' will return the exchange rate as the amount of domestic currency required to buy one unit of the foreign currency. Selecting 'indirect' (default) will return the exchange rate as the amount of foreign currency required to buy one unit of the domestic currency."}),(0,n.jsx)(r.td,{children:"indirect"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"counter_currencies"}),(0,n.jsx)(r.td,{children:"Union[List[str], str]"}),(0,n.jsx)(r.td,{children:"An optional list of counter currency symbols to filter for. None returns all."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]})]})]})}),(0,n.jsx)(d.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"base"}),(0,n.jsx)(r.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(r.td,{children:"The base currency symbol. Multiple items allowed for provider(s): fmp, polygon."}),(0,n.jsx)(r.td,{children:"usd"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"quote_type"}),(0,n.jsx)(r.td,{children:"Literal['direct', 'indirect']"}),(0,n.jsx)(r.td,{children:"Whether the quote is direct or indirect. Selecting 'direct' will return the exchange rate as the amount of domestic currency required to buy one unit of the foreign currency. Selecting 'indirect' (default) will return the exchange rate as the amount of foreign currency required to buy one unit of the domestic currency."}),(0,n.jsx)(r.td,{children:"indirect"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"counter_currencies"}),(0,n.jsx)(r.td,{children:"Union[List[str], str]"}),(0,n.jsx)(r.td,{children:"An optional list of counter currency symbols to filter for. None returns all."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]})]})]})}),(0,n.jsx)(d.A,{value:"polygon",label:"polygon",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"base"}),(0,n.jsx)(r.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(r.td,{children:"The base currency symbol. Multiple items allowed for provider(s): fmp, polygon."}),(0,n.jsx)(r.td,{children:"usd"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"quote_type"}),(0,n.jsx)(r.td,{children:"Literal['direct', 'indirect']"}),(0,n.jsx)(r.td,{children:"Whether the quote is direct or indirect. Selecting 'direct' will return the exchange rate as the amount of domestic currency required to buy one unit of the foreign currency. Selecting 'indirect' (default) will return the exchange rate as the amount of foreign currency required to buy one unit of the domestic currency."}),(0,n.jsx)(r.td,{children:"indirect"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"counter_currencies"}),(0,n.jsx)(r.td,{children:"Union[List[str], str]"}),(0,n.jsx)(r.td,{children:"An optional list of counter currency symbols to filter for. None returns all."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[CurrencySnapshots]\n        Serializable results.\n\n    provider : Optional[Literal['fmp', 'polygon']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(c.A,{children:[(0,n.jsx)(d.A,{value:"standard",label:"standard",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"base_currency"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"The base, or domestic, currency."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"counter_currency"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"The counter, or foreign, currency."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"last_rate"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The exchange rate, relative to the base currency. Rates are expressed as the amount of foreign currency received from selling one unit of the base currency, or the quantity of foreign currency required to purchase one unit of the domestic currency. To inverse the perspective, set the 'quote_type' parameter as 'direct'."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"open"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The open price."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"high"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The high price."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"low"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The low price."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"close"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The close price."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"volume"}),(0,n.jsx)(r.td,{children:"int"}),(0,n.jsx)(r.td,{children:"The trading volume."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"prev_close"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The previous close price."})]})]})]})}),(0,n.jsx)(d.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"base_currency"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"The base, or domestic, currency."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"counter_currency"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"The counter, or foreign, currency."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"last_rate"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The exchange rate, relative to the base currency. Rates are expressed as the amount of foreign currency received from selling one unit of the base currency, or the quantity of foreign currency required to purchase one unit of the domestic currency. To inverse the perspective, set the 'quote_type' parameter as 'direct'."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"open"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The open price."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"high"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The high price."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"low"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The low price."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"close"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The close price."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"volume"}),(0,n.jsx)(r.td,{children:"int"}),(0,n.jsx)(r.td,{children:"The trading volume."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"prev_close"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The previous close price."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"change"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The change in the price from the previous close."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"change_percent"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The change in the price from the previous close, as a normalized percent."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ma50"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The 50-day moving average."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ma200"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The 200-day moving average."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"year_high"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The 52-week high."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"year_low"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The 52-week low."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"last_rate_timestamp"}),(0,n.jsx)(r.td,{children:"datetime"}),(0,n.jsx)(r.td,{children:"The timestamp of the last rate."})]})]})]})}),(0,n.jsx)(d.A,{value:"polygon",label:"polygon",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"base_currency"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"The base, or domestic, currency."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"counter_currency"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"The counter, or foreign, currency."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"last_rate"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The exchange rate, relative to the base currency. Rates are expressed as the amount of foreign currency received from selling one unit of the base currency, or the quantity of foreign currency required to purchase one unit of the domestic currency. To inverse the perspective, set the 'quote_type' parameter as 'direct'."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"open"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The open price."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"high"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The high price."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"low"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The low price."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"close"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The close price."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"volume"}),(0,n.jsx)(r.td,{children:"int"}),(0,n.jsx)(r.td,{children:"The trading volume."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"prev_close"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The previous close price."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"vwap"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The volume-weighted average price."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"change"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The change in price from the previous day."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"change_percent"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The percentage change in price from the previous day."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"prev_open"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The previous day's opening price."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"prev_high"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The previous day's high price."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"prev_low"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The previous day's low price."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"prev_volume"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The previous day's volume."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"prev_vwap"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The previous day's VWAP."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"bid"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The current bid price."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ask"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The current ask price."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"minute_open"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The open price from the most recent minute bar."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"minute_high"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The high price from the most recent minute bar."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"minute_low"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The low price from the most recent minute bar."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"minute_close"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The close price from the most recent minute bar."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"minute_volume"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The volume from the most recent minute bar."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"minute_vwap"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The VWAP from the most recent minute bar."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"minute_transactions"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The number of transactions in the most recent minute bar."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"quote_timestamp"}),(0,n.jsx)(r.td,{children:"datetime"}),(0,n.jsx)(r.td,{children:"The timestamp of the last quote."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"minute_timestamp"}),(0,n.jsx)(r.td,{children:"datetime"}),(0,n.jsx)(r.td,{children:"The timestamp for the start of the most recent minute bar."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"last_updated"}),(0,n.jsx)(r.td,{children:"datetime"}),(0,n.jsx)(r.td,{children:"The last time the data was updated."})]})]})]})})]})]})}function j(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>c});t(96540);var n=t(34164);const s={tabItem:"tabItem_Ymn6"};var i=t(74848);function c(e){let{children:r,hidden:t,className:c}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,c),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var n=t(5260),s=t(74848);function i(e){let{title:r}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>T});var n=t(96540),s=t(34164),i=t(23104),c=t(56347),d=t(205),l=t(57485),h=t(31682),o=t(89466);function a(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}function u(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??a(t);return function(e){const r=(0,h.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function x(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function j(e){let{queryString:r=!1,groupId:t}=e;const s=(0,c.W6)(),i=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(s.location.search);r.set(i,e),s.replace({...s.location,search:r.toString()})}),[i,s])]}function p(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,i=u(e),[c,l]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!x({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:i}))),[h,a]=j({queryString:t,groupId:s}),[p,f]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,i]=(0,o.Dv)(t);return[s,(0,n.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),m=(()=>{const e=h??p;return x({value:e,tabValues:i})?e:null})();(0,d.A)((()=>{m&&l(m)}),[m]);return{selectedValue:c,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),a(e),f(e)}),[a,f,i]),tabValues:i}}var f=t(92303);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=t(74848);function y(e){let{className:r,block:t,selectedValue:n,selectValue:d,tabValues:l}=e;const h=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),{pathname:a}=(0,c.zy)(),u=e=>{const r=e.currentTarget,t=h.indexOf(r),s=l[t].value;s!==n&&(o(r),d(s))},x=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=h.indexOf(e.currentTarget)+1;r=h[t]??h[0];break}case"ArrowLeft":{const t=h.indexOf(e.currentTarget)-1;r=h[t]??h[h.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:r,label:t,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>h.push(e),onKeyDown:x,onClick:u,...i,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,i?.className,{"border-b-2 pointer-events-none":n===r,"border-b-2 text-[#669dcb] border-[#669dcb]":n===r&&a.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&a.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&a.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&a.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&a.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==r&&a.startsWith("/terminal")}),children:t??r},r)}))})}function v(e){let{lazy:r,children:t,selectedValue:s}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function g(e){const r=p(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,b.jsx)(y,{...e,...r}),(0,b.jsx)(v,{...e,...r})]})}function T(e){const r=(0,f.A)();return(0,b.jsx)(g,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>c,x:()=>d});var n=t(96540);const s={},i=n.createContext(s);function c(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);