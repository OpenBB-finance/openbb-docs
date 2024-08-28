"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43905],{59812:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>h,toc:()=>u});var s=r(74848),n=r(28453),a=r(94331),o=r(18228),i=r(19365);const l={title:"short_interest",description:"Learn how to get reported Short Volume and Days to Cover data using the  OBB.equity.shorts.short_interest function in Python. This page provides information  on the parameters, returns, and available data fields such as settlement date, symbol,  issue name, market class, current short position, previous short position, average  daily volume, days to cover, change, and change percentage.",keywords:["Get reported Short Volume and Days to Cover data","OBB.equity.shorts.short_interest","symbol","provider","Short Volume","Days to Cover","data","parameters","returns","data","settlement_date","symbol","issue_name","market_class","current_short_position","previous_short_position","avg_daily_volume","days_to_cover","change","change_pct"]},d=void 0,h={id:"platform/reference/equity/shorts/short_interest",title:"short_interest",description:"Learn how to get reported Short Volume and Days to Cover data using the  OBB.equity.shorts.short_interest function in Python. This page provides information  on the parameters, returns, and available data fields such as settlement date, symbol,  issue name, market class, current short position, previous short position, average  daily volume, days to cover, change, and change percentage.",source:"@site/content/platform/reference/equity/shorts/short_interest.md",sourceDirName:"platform/reference/equity/shorts",slug:"/platform/reference/equity/shorts/short_interest",permalink:"/platform/reference/equity/shorts/short_interest",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/equity/shorts/short_interest.md",tags:[],version:"current",frontMatter:{title:"short_interest",description:"Learn how to get reported Short Volume and Days to Cover data using the  OBB.equity.shorts.short_interest function in Python. This page provides information  on the parameters, returns, and available data fields such as settlement date, symbol,  issue name, market class, current short position, previous short position, average  daily volume, days to cover, change, and change percentage.",keywords:["Get reported Short Volume and Days to Cover data","OBB.equity.shorts.short_interest","symbol","provider","Short Volume","Days to Cover","data","parameters","returns","data","settlement_date","symbol","issue_name","market_class","current_short_position","previous_short_position","avg_daily_volume","days_to_cover","change","change_pct"]},sidebar:"tutorialSidebar",previous:{title:"fails_to_deliver",permalink:"/platform/reference/equity/shorts/fails_to_deliver"},next:{title:"short_volume",permalink:"/platform/reference/equity/shorts/short_volume"}},c={},u=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function m(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.A,{title:"equity/shorts/short_interest - Reference | OpenBB Platform Docs"}),"\n","\n",(0,s.jsx)(t.p,{children:"Get reported short volume and days to cover data."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"from openbb import obb\nobb.equity.shorts.short_interest(symbol='AAPL', provider='finra')\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(o.A,{children:[(0,s.jsx)(i.A,{value:"standard",label:"standard",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Symbol to get data for."}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"False"})]})})]})}),(0,s.jsx)(i.A,{value:"finra",label:"finra",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Symbol to get data for."}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"False"})]})})]})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[EquityShortInterest]\n        Serializable results.\n\n    provider : Optional[Literal['finra']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,s.jsxs)(o.A,{children:[(0,s.jsx)(i.A,{value:"standard",label:"standard",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"settlement_date"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"The mid-month short interest report is based on short positions held by members on the settlement date of the 15th of each month. If the 15th falls on a weekend or another non-settlement date, the designated settlement date will be the previous business day on which transactions settled. The end-of-month short interest report is based on short positions held on the last business day of the month on which transactions settle. Once the short position reports are received, the short interest data is compiled for each equity security and provided for publication on the 7th business day after the reporting settlement date."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"issue_name"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Unique identifier of the issue."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"market_class"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Primary listing market."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"current_short_position"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The total number of shares in the issue that are reflected on the books and records of the reporting firms as short as defined by Rule 200 of Regulation SHO as of the current cycle\u2019s designated settlement date."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"previous_short_position"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The total number of shares in the issue that are reflected on the books and records of the reporting firms as short as defined by Rule 200 of Regulation SHO as of the previous cycle\u2019s designated settlement date."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"avg_daily_volume"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Total Volume or Adjusted Volume in case of splits / Total trade days between (previous settlement date + 1) to (current settlement date). The NULL values are translated as zero."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"days_to_cover"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The number of days of average share volume it would require to buy all of the shares that were sold short during the reporting cycle. Formula: Short Interest / Average Daily Share Volume, Rounded to Hundredths. 1.00 will be displayed for any values equal or less than 1 (i.e., Average Daily Share is equal to or greater than Short Interest). N/A will be displayed If the days to cover is Zero (i.e., Average Daily Share Volume is Zero)."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"change"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Change in Shares Short from Previous Cycle: Difference in short interest between the current cycle and the previous cycle."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"change_pct"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Change in Shares Short from Previous Cycle as a percent."})]})]})]})}),(0,s.jsx)(i.A,{value:"finra",label:"finra",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"settlement_date"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"The mid-month short interest report is based on short positions held by members on the settlement date of the 15th of each month. If the 15th falls on a weekend or another non-settlement date, the designated settlement date will be the previous business day on which transactions settled. The end-of-month short interest report is based on short positions held on the last business day of the month on which transactions settle. Once the short position reports are received, the short interest data is compiled for each equity security and provided for publication on the 7th business day after the reporting settlement date."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"issue_name"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Unique identifier of the issue."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"market_class"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Primary listing market."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"current_short_position"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The total number of shares in the issue that are reflected on the books and records of the reporting firms as short as defined by Rule 200 of Regulation SHO as of the current cycle\u2019s designated settlement date."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"previous_short_position"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The total number of shares in the issue that are reflected on the books and records of the reporting firms as short as defined by Rule 200 of Regulation SHO as of the previous cycle\u2019s designated settlement date."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"avg_daily_volume"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Total Volume or Adjusted Volume in case of splits / Total trade days between (previous settlement date + 1) to (current settlement date). The NULL values are translated as zero."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"days_to_cover"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The number of days of average share volume it would require to buy all of the shares that were sold short during the reporting cycle. Formula: Short Interest / Average Daily Share Volume, Rounded to Hundredths. 1.00 will be displayed for any values equal or less than 1 (i.e., Average Daily Share is equal to or greater than Short Interest). N/A will be displayed If the days to cover is Zero (i.e., Average Daily Share Volume is Zero)."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"change"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Change in Shares Short from Previous Cycle: Difference in short interest between the current cycle and the previous cycle."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"change_pct"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Change in Shares Short from Previous Cycle as a percent."})]})]})]})})]})]})}function f(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var s=r(34164);const n={tabItem:"tabItem_Ymn6"};var a=r(74848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(n.tabItem,o),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var s=r(5260),n=r(74848);function a(e){let{title:t}=e;return(0,n.jsx)(s.A,{children:(0,n.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>_});var s=r(96540),n=r(34164),a=r(23104),o=r(56347),i=r(205),l=r(57485),d=r(31682),h=r(70679);function c(e){return function(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:s,default:n}}=e;return{value:t,label:r,attributes:s,default:n}}))}function u(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=u(e),[o,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[d,c]=f({queryString:r,groupId:n}),[p,x]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,h.Dv)(r);return[n,(0,s.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),b=(()=>{const e=d??p;return m({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),x(e)}),[c,x,a]),tabValues:a}}var x=r(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var j=r(74848);function y(e){let{className:t,block:r,selectedValue:s,selectValue:i,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:h}=(0,a.a_)(),{pathname:c}=(0,o.zy)(),u=e=>{const t=e.currentTarget,r=d.indexOf(t),n=l[r].value;n!==s&&(h(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>d.push(e),onKeyDown:m,onClick:u,...a,className:(0,n.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,a?.className,{"border-b-2 pointer-events-none":s===t,"border-b-2 text-[#669dcb] border-[#669dcb]":s===t&&c.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":s!==t&&c.startsWith("/terminal")}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function g(e){const t=p(e);return(0,j.jsxs)("div",{className:(0,n.A)("tabs-container",b.tabList),children:[(0,j.jsx)(y,{...e,...t}),(0,j.jsx)(v,{...e,...t})]})}function _(e){const t=(0,x.A)();return(0,j.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var s=r(96540);const n={},a=s.createContext(n);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);