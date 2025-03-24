"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6761],{18219:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>j,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=r(74848),a=r(28453),d=r(94331),s=r(18228),i=r(19365);const l={title:"cpi",description:"Get Consumer Price Index (CPI) data for various countries and calculate  inflation measurements. This economic indicator provides insights into the growth  rate of prices on a monthly, quarterly, and annual basis. Harmonized CPI data is  also available. Specify the start and end dates for the desired data range. The  data provider and metadata information are included in the results.",keywords:["Consumer Price Index (CPI) Data","CPI data","CPI calculation","inflation measurement","economic indicator","country-wise CPI data","growth rate","monthly CPI","quarterly CPI","annual CPI","harmonized CPI","start date","end date","data provider","metadata info"]},o=void 0,c={id:"platform/reference/economy/cpi",title:"cpi",description:"Get Consumer Price Index (CPI) data for various countries and calculate  inflation measurements. This economic indicator provides insights into the growth  rate of prices on a monthly, quarterly, and annual basis. Harmonized CPI data is  also available. Specify the start and end dates for the desired data range. The  data provider and metadata information are included in the results.",source:"@site/content/platform/reference/economy/cpi.md",sourceDirName:"platform/reference/economy",slug:"/platform/reference/economy/cpi",permalink:"/platform/reference/economy/cpi",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/economy/cpi.md",tags:[],version:"current",frontMatter:{title:"cpi",description:"Get Consumer Price Index (CPI) data for various countries and calculate  inflation measurements. This economic indicator provides insights into the growth  rate of prices on a monthly, quarterly, and annual basis. Harmonized CPI data is  also available. Specify the start and end dates for the desired data range. The  data provider and metadata information are included in the results.",keywords:["Consumer Price Index (CPI) Data","CPI data","CPI calculation","inflation measurement","economic indicator","country-wise CPI data","growth rate","monthly CPI","quarterly CPI","annual CPI","harmonized CPI","start date","end date","data provider","metadata info"]},sidebar:"tutorialSidebar",previous:{title:"country_profile",permalink:"/platform/reference/economy/country_profile"},next:{title:"direction_of_trade",permalink:"/platform/reference/economy/direction_of_trade"}},h={},u=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.A,{title:"economy/cpi - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(t.p,{children:"Get Consumer Price Index (CPI)."}),"\n",(0,n.jsx)(t.p,{children:"Returns either the rescaled index value, or a rate of change (inflation)."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb import obb\nobb.economy.cpi(country='japan,china,turkey', provider='fred')\n# Use the `transform` parameter to define the reference period for the change in values. Default is YoY.\nobb.economy.cpi(country='united_states,united_kingdom', transform='period', provider='oecd')\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(i.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"country"}),(0,n.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(t.td,{children:"The country to get data. Multiple items allowed for provider(s): fred, oecd."}),(0,n.jsx)(t.td,{children:"united_states"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"transform"}),(0,n.jsx)(t.td,{children:"Literal['index', 'yoy', 'period']"}),(0,n.jsx)(t.td,{children:"Transformation of the CPI data. Period represents the change since previous. Defaults to change from one year ago (yoy)."}),(0,n.jsx)(t.td,{children:"yoy"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"frequency"}),(0,n.jsx)(t.td,{children:"Literal['annual', 'quarter', 'monthly']"}),(0,n.jsx)(t.td,{children:"The frequency of the data."}),(0,n.jsx)(t.td,{children:"monthly"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"harmonized"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"If true, returns harmonized data."}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(i.A,{value:"fred",label:"fred",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"country"}),(0,n.jsx)(t.td,{children:"Union[Literal['australia', 'austria', 'belgium', 'brazil', 'bulgaria', 'canada', 'chile', 'china', 'croatia', 'cyprus', 'czech_republic', 'denmark', 'estonia', 'finland', 'france', 'germany', 'greece', 'hungary', 'iceland', 'india', 'indonesia', 'ireland', 'israel', 'italy', 'japan', 'korea', 'latvia', 'lithuania', 'luxembourg', 'malta', 'mexico', 'netherlands', 'new_zealand', 'norway', 'poland', 'portugal', 'romania', 'russian_federation', 'slovak_republic', 'slovakia', 'slovenia', 'south_africa', 'spain', 'sweden', 'switzerland', 'turkey', 'united_kingdom', 'united_states'], str]"}),(0,n.jsx)(t.td,{children:"The country to get data."}),(0,n.jsx)(t.td,{children:"united_states"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"transform"}),(0,n.jsx)(t.td,{children:"Literal['index', 'yoy', 'period']"}),(0,n.jsx)(t.td,{children:"Transformation of the CPI data. Period represents the change since previous. Defaults to change from one year ago (yoy)."}),(0,n.jsx)(t.td,{children:"yoy"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"frequency"}),(0,n.jsx)(t.td,{children:"Literal['annual', 'quarter', 'monthly']"}),(0,n.jsx)(t.td,{children:"The frequency of the data."}),(0,n.jsx)(t.td,{children:"monthly"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"harmonized"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"If true, returns harmonized data."}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(i.A,{value:"oecd",label:"oecd",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"country"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Country to get CPI for.  This is the list of OECD supported countries"}),(0,n.jsx)(t.td,{children:"united_states"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"transform"}),(0,n.jsx)(t.td,{children:"Literal['index', 'yoy', 'period']"}),(0,n.jsx)(t.td,{children:"Transformation of the CPI data. Period represents the change since previous. Defaults to change from one year ago (yoy)."}),(0,n.jsx)(t.td,{children:"yoy"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"frequency"}),(0,n.jsx)(t.td,{children:"Literal['annual', 'quarter', 'monthly']"}),(0,n.jsx)(t.td,{children:"The frequency of the data."}),(0,n.jsx)(t.td,{children:"monthly"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"harmonized"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"If true, returns harmonized data."}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"expenditure"}),(0,n.jsx)(t.td,{children:"Literal['total', 'all', 'actual_rentals', 'alcoholic_beverages_tobacco_narcotics', 'all_non_food_non_energy', 'clothing_footwear', 'communication', 'education', 'electricity_gas_other_fuels', 'energy', 'overall_excl_energy_food_alcohol_tobacco', 'food_non_alcoholic_beverages', 'fuels_lubricants_personal', 'furniture_household_equipment', 'goods', 'housing', 'housing_excluding_rentals', 'housing_water_electricity_gas', 'health', 'imputed_rentals', 'maintenance_repair_dwelling', 'miscellaneous_goods_services', 'recreation_culture', 'residuals', 'restaurants_hotels', 'services_less_housing', 'services_less_house_excl_rentals', 'services', 'transport', 'water_supply_other_services']"}),(0,n.jsx)(t.td,{children:"Expenditure component of CPI."}),(0,n.jsx)(t.td,{children:"total"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[ConsumerPriceIndex]\n        Serializable results.\n\n    provider : Optional[Literal['fred', 'oecd']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(i.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"The date of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"country"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"value"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"CPI index value or period change."})]})]})]})}),(0,n.jsx)(i.A,{value:"fred",label:"fred",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"The date of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"country"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"value"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"CPI index value or period change."})]})]})]})}),(0,n.jsx)(i.A,{value:"oecd",label:"oecd",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"The date of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"country"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"value"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"CPI index value or period change."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"expenditure"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Expenditure component of CPI."})]})]})]})})]})]})}function j(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var d=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,s),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>d});r(96540);var n=r(5260),a=r(74848);function d(e){let{title:t}=e;return(0,a.jsx)(n.A,{children:(0,a.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>_});var n=r(56347),a=r(23104),d=r(96540),s=r(205),i=r(57485),l=r(31682),o=r(89466);function c(e){return function(e){return d.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,d.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function h(e){const{values:t,children:r}=e;return(0,d.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function u(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:r}=e;const a=(0,n.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(s),(0,d.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function j(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=h(e),[i,l]=(0,d.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,j]=x({queryString:r,groupId:n}),[f,p]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,o.Dv)(r);return[n,(0,d.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),m=(()=>{const e=c??f;return u({value:e,tabValues:a})?e:null})();(0,s.A)((()=>{m&&l(m)}),[m]);return{selectedValue:i,selectValue:(0,d.useCallback)((e=>{if(!u({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),j(e),p(e)}),[j,p,a]),tabValues:a}}var f=r(92303),p=r(34164);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function y(e){let{className:t,block:r,selectedValue:d,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),{pathname:c}=(0,n.zy)(),h=e=>{const t=e.currentTarget,r=l.indexOf(t),n=i[r].value;n!==d&&(o(t),s(n))},u=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:i.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:d===t?0:-1,"aria-selected":d===t,ref:e=>l.push(e),onKeyDown:u,onClick:h,...n,className:(0,p.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,n?.className,{"border-b-2 pointer-events-none":d===t,"border-b-2 text-[#669dcb] border-[#669dcb]":d===t&&c.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":d===t&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":d!==t&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":d===t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":d!==t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":d!==t&&c.startsWith("/workspace")}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,d.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,d.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function g(e){const t=j(e);return(0,b.jsxs)("div",{className:(0,p.A)("tabs-container",m.tabList),children:[(0,b.jsx)(y,{...e,...t}),(0,b.jsx)(v,{...e,...t})]})}function _(e){const t=(0,f.A)();return(0,b.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var n=r(96540);const a={},d=n.createContext(a);function s(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);