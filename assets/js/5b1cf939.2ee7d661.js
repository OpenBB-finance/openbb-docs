"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15765],{19650:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>j,frontMatter:()=>a,metadata:()=>h,toc:()=>x});var s=r(74848),d=r(28453),n=r(94331),i=r(18228),l=r(19365);const a={title:"treasury_prices",description:"Government Treasury Prices by date",keywords:["fixedincome","government","treasury_prices"]},c=void 0,h={id:"platform/reference/fixedincome/government/treasury_prices",title:"treasury_prices",description:"Government Treasury Prices by date",source:"@site/content/platform/reference/fixedincome/government/treasury_prices.md",sourceDirName:"platform/reference/fixedincome/government",slug:"/platform/reference/fixedincome/government/treasury_prices",permalink:"/platform/reference/fixedincome/government/treasury_prices",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/fixedincome/government/treasury_prices.md",tags:[],version:"current",frontMatter:{title:"treasury_prices",description:"Government Treasury Prices by date",keywords:["fixedincome","government","treasury_prices"]},sidebar:"tutorialSidebar",previous:{title:"treasury_auctions",permalink:"/platform/reference/fixedincome/government/treasury_auctions"},next:{title:"treasury_rates",permalink:"/platform/reference/fixedincome/government/treasury_rates"}},o={},x=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function u(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.A,{title:"fixedincome/government/treasury_prices - Reference | OpenBB Platform Docs"}),"\n","\n",(0,s.jsx)(t.p,{children:"Government Treasury Prices by date."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"from openbb import obb\nobb.fixedincome.government.treasury_prices(provider='government_us')\nobb.fixedincome.government.treasury_prices(date='2019-02-05', provider='government_us')\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(l.A,{value:"standard",label:"standard",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"Union[date, str]"}),(0,s.jsx)(t.td,{children:"A specific date to get data for. Defaults to the last business day."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]})})]})}),(0,s.jsx)(l.A,{value:"government_us",label:"government_us",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"Union[date, str]"}),(0,s.jsx)(t.td,{children:"A specific date to get data for. Defaults to the last business day."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cusip"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Filter by CUSIP."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"security_type"}),(0,s.jsx)(t.td,{children:"Literal['bill', 'note', 'bond', 'tips', 'frn']"}),(0,s.jsx)(t.td,{children:"Filter by security type."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]})]})]})}),(0,s.jsx)(l.A,{value:"tmx",label:"tmx",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"Union[date, str]"}),(0,s.jsx)(t.td,{children:"A specific date to get data for. Defaults to the last business day."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"govt_type"}),(0,s.jsx)(t.td,{children:"Literal['federal', 'provincial', 'municipal']"}),(0,s.jsx)(t.td,{children:"The level of government issuer."}),(0,s.jsx)(t.td,{children:"federal"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"issue_date_min"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"Filter by the minimum original issue date."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"issue_date_max"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"Filter by the maximum original issue date."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"last_traded_min"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"Filter by the minimum last trade date."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"maturity_date_min"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"Filter by the minimum maturity date."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"maturity_date_max"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"Filter by the maximum maturity date."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"use_cache"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsx)(t.td,{children:"All bond data is sourced from a single JSON file that is updated daily. The file is cached for one day to eliminate downloading more than once. Caching will significantly speed up subsequent queries. To bypass, set to False."}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[TreasuryPrices]\n        Serializable results.\n\n    provider : Optional[Literal['government_us', 'tmx']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(l.A,{value:"standard",label:"standard",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"issuer_name"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Name of the issuing entity."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cusip"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"CUSIP of the security."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"isin"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"ISIN of the security."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"security_type"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"The type of Treasury security - i.e., Bill, Note, Bond, TIPS, FRN."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"issue_date"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"The original issue date of the security."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"maturity_date"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"The maturity date of the security."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"call_date"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"The call date of the security."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bid"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The bid price of the security."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"offer"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The offer price of the security."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"eod_price"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The end-of-day price of the security."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"last_traded_date"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"The last trade date of the security."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"total_trades"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Total number of trades on the last traded date."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"last_price"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The last price of the security."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"highest_price"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The highest price for the bond on the last traded date."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lowest_price"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The lowest price for the bond on the last traded date."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"rate"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The annualized interest rate or coupon of the security."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ytm"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Yield to maturity (YTM) is the rate of return anticipated on a bond if it is held until the maturity date. It takes into account the current market price, par value, coupon rate and time to maturity. It is assumed that all coupons are reinvested at the same rate."})]})]})]})}),(0,s.jsx)(l.A,{value:"government_us",label:"government_us",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"issuer_name"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Name of the issuing entity."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cusip"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"CUSIP of the security."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"isin"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"ISIN of the security."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"security_type"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"The type of Treasury security - i.e., Bill, Note, Bond, TIPS, FRN."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"issue_date"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"The original issue date of the security."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"maturity_date"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"The maturity date of the security."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"call_date"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"The call date of the security."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bid"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The bid price of the security."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"offer"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The offer price of the security."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"eod_price"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The end-of-day price of the security."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"last_traded_date"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"The last trade date of the security."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"total_trades"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Total number of trades on the last traded date."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"last_price"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The last price of the security."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"highest_price"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The highest price for the bond on the last traded date."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lowest_price"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The lowest price for the bond on the last traded date."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"rate"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The annualized interest rate or coupon of the security."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ytm"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Yield to maturity (YTM) is the rate of return anticipated on a bond if it is held until the maturity date. It takes into account the current market price, par value, coupon rate and time to maturity. It is assumed that all coupons are reinvested at the same rate."})]})]})]})}),(0,s.jsx)(l.A,{value:"tmx",label:"tmx",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"issuer_name"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Name of the issuing entity."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cusip"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"CUSIP of the security."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"isin"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"ISIN of the security."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"security_type"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"The type of Treasury security - i.e., Bill, Note, Bond, TIPS, FRN."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"issue_date"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"The original issue date of the security."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"maturity_date"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"The maturity date of the security."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"call_date"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"The call date of the security."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bid"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The bid price of the security."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"offer"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The offer price of the security."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"eod_price"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The end-of-day price of the security."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"last_traded_date"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"The last trade date of the security."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"total_trades"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Total number of trades on the last traded date."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"last_price"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The last price of the security."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"highest_price"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The highest price for the bond on the last traded date."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lowest_price"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The lowest price for the bond on the last traded date."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"rate"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The annualized interest rate or coupon of the security."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ytm"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Yield to maturity (YTM) is the rate of return anticipated on a bond if it is held until the maturity date. It takes into account the current market price, par value, coupon rate and time to maturity. It is assumed that all coupons are reinvested at the same rate."})]})]})]})})]})]})}function j(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var s=r(34164);const d={tabItem:"tabItem_Ymn6"};var n=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.A)(d.tabItem,i),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>n});r(96540);var s=r(5260),d=r(74848);function n(e){let{title:t}=e;return(0,d.jsx)(s.A,{children:(0,d.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>T});var s=r(96540),d=r(34164),n=r(23104),i=r(56347),l=r(205),a=r(57485),c=r(31682),h=r(89466);function o(e){return function(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:s,default:d}}=e;return{value:t,label:r,attributes:s,default:d}}))}function x(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??o(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function u(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:r}=e;const d=(0,i.W6)(),n=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,a.aZ)(n),(0,s.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(d.location.search);t.set(n,e),d.replace({...d.location,search:t.toString()})}),[n,d])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:d}=e,n=x(e),[i,a]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:n}))),[c,o]=j({queryString:r,groupId:d}),[f,p]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[d,n]=(0,h.Dv)(r);return[d,(0,s.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:d}),m=(()=>{const e=c??f;return u({value:e,tabValues:n})?e:null})();(0,l.A)((()=>{m&&a(m)}),[m]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!u({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);a(e),o(e),p(e)}),[o,p,n]),tabValues:n}}var p=r(92303);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var y=r(74848);function b(e){let{className:t,block:r,selectedValue:s,selectValue:l,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:h}=(0,n.a_)(),{pathname:o}=(0,i.zy)(),x=e=>{const t=e.currentTarget,r=c.indexOf(t),d=a[r].value;d!==s&&(h(t),l(d))},u=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:a.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>c.push(e),onKeyDown:u,onClick:x,...n,className:(0,d.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,n?.className,{"border-b-2 pointer-events-none":s===t,"border-b-2 text-[#669dcb] border-[#669dcb]":s===t&&o.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":s!==t&&o.startsWith("/terminal")}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:d}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===d));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==d})))})}function g(e){const t=f(e);return(0,y.jsxs)("div",{className:(0,d.A)("tabs-container",m.tabList),children:[(0,y.jsx)(b,{...e,...t}),(0,y.jsx)(v,{...e,...t})]})}function T(e){const t=(0,p.A)();return(0,y.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>l});var s=r(96540);const d={},n=s.createContext(d);function i(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);