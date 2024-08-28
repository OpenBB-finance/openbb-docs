"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96606],{87738:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var n=t(74848),a=t(28453),s=t(94331),c=t(18228),d=t(19365);const o={title:"CALENDAR",description:"The Economic Calendar provides information on economic events and data. Use the OBB Python function `obb.economy.calendar()` to retrieve economic calendar data. The function accepts parameters such as start date, end date, provider, country, importance, and group. It returns a list of economic calendar data, including the date, event, reference, source, actual value, previous value, consensus value, and forecast value. The data can be filtered by provider such as FMP, Nasdaq, or Trading Economics.",keywords:["economic calendar","python obb.economy.calendar","parameters","start date","end date","provider","country","importance","group","returns","data","date","event","reference","source","source url","actual","previous","consensus","forecast","url","currency","unit","change","change percent","updated at","created at","description"]},i=void 0,l={id:"excel/reference/economy/calendar",title:"CALENDAR",description:"The Economic Calendar provides information on economic events and data. Use the OBB Python function `obb.economy.calendar()` to retrieve economic calendar data. The function accepts parameters such as start date, end date, provider, country, importance, and group. It returns a list of economic calendar data, including the date, event, reference, source, actual value, previous value, consensus value, and forecast value. The data can be filtered by provider such as FMP, Nasdaq, or Trading Economics.",source:"@site/content/excel/reference/economy/calendar.md",sourceDirName:"excel/reference/economy",slug:"/excel/reference/economy/calendar",permalink:"/excel/reference/economy/calendar",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/excel/reference/economy/calendar.md",tags:[],version:"current",frontMatter:{title:"CALENDAR",description:"The Economic Calendar provides information on economic events and data. Use the OBB Python function `obb.economy.calendar()` to retrieve economic calendar data. The function accepts parameters such as start date, end date, provider, country, importance, and group. It returns a list of economic calendar data, including the date, event, reference, source, actual value, previous value, consensus value, and forecast value. The data can be filtered by provider such as FMP, Nasdaq, or Trading Economics.",keywords:["economic calendar","python obb.economy.calendar","parameters","start date","end date","provider","country","importance","group","returns","data","date","event","reference","source","source url","actual","previous","consensus","forecast","url","currency","unit","change","change percent","updated at","created at","description"]},sidebar:"tutorialSidebar",previous:{title:"ECONOMY",permalink:"/excel/reference/economy/"},next:{title:"COUNTRY_PROFILE",permalink:"/excel/reference/economy/country_profile"}},u={},h=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const r={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{title:"ECONOMY.CALENDAR | OpenBB Add-in for Excel Docs"}),"\n",(0,n.jsx)(r.p,{children:"Get the upcoming, or historical, economic calendar of global events."}),"\n",(0,n.jsx)(r.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-excel",children:"=OBB.ECONOMY.CALENDAR([start_date],[end_date],[country],[importance],[group],[calendar_id])\n"})}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-excel",children:"=OBB.ECONOMY.CALENDAR()\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-excel",children:'=OBB.ECONOMY.CALENDAR("2020-03-01","2020-03-31")\n'})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Required"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"start_date"}),(0,n.jsx)(r.td,{children:"Text"}),(0,n.jsx)(r.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"end_date"}),(0,n.jsx)(r.td,{children:"Text"}),(0,n.jsx)(r.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"country"}),(0,n.jsx)(r.td,{children:"Text"}),(0,n.jsx)(r.td,{children:"Country of the event. Multiple comma separated items allowed."}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"importance"}),(0,n.jsx)(r.td,{children:"Text"}),(0,n.jsx)(r.td,{children:"Importance of the event. Options: Low, Medium, High."}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"group"}),(0,n.jsx)(r.td,{children:"Text"}),(0,n.jsx)(r.td,{children:"Grouping of events. Options: interest_rate, inflation, bonds, consumer, gdp, government, housing, labour, markets, money, prices, trade, business."}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"calendar_id"}),(0,n.jsx)(r.td,{children:"Any"}),(0,n.jsx)(r.td,{children:"Get events by TradingEconomics Calendar ID. Multiple comma separated items allowed."}),(0,n.jsx)(r.td,{children:"False"})]})]})]}),"\n",(0,n.jsx)(r.hr,{}),"\n","\n",(0,n.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,n.jsx)(c.A,{children:(0,n.jsx)(d.A,{value:"tradingeconomics",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"date"}),(0,n.jsx)(r.td,{children:"The date of the data."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"country"}),(0,n.jsx)(r.td,{children:"Country of event."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"category"}),(0,n.jsx)(r.td,{children:"Category of event."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"event"}),(0,n.jsx)(r.td,{children:"Event name."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"importance"}),(0,n.jsx)(r.td,{children:"The importance level for the event."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"source"}),(0,n.jsx)(r.td,{children:"Source of the data."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"currency"}),(0,n.jsx)(r.td,{children:"Currency of the data."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"unit"}),(0,n.jsx)(r.td,{children:"Unit of the data."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"consensus"}),(0,n.jsx)(r.td,{children:"Average forecast among a representative group of economists."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"previous"}),(0,n.jsx)(r.td,{children:"Value for the previous period after the revision (if revision is applicable)."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"revised"}),(0,n.jsx)(r.td,{children:"Revised previous value, if applicable."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"actual"}),(0,n.jsx)(r.td,{children:"Latest released value."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"forecast"}),(0,n.jsx)(r.td,{children:"TradingEconomics projections."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"reference"}),(0,n.jsx)(r.td,{children:"Abbreviated period for which released data refers to."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"reference_date"}),(0,n.jsx)(r.td,{children:"Date for the reference period."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"calendar_id"}),(0,n.jsx)(r.td,{children:"TradingEconomics Calendar ID."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"date_span"}),(0,n.jsx)(r.td,{children:"Date span of the event."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"TradingEconomics Symbol."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ticker"}),(0,n.jsx)(r.td,{children:"TradingEconomics Ticker symbol."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"te_url"}),(0,n.jsx)(r.td,{children:"TradingEconomics URL path."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"source_url"}),(0,n.jsx)(r.td,{children:"Source URL."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"last_updated"}),(0,n.jsx)(r.td,{children:"Last update of the data."})]})]})]})})})]})}function p(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>c});t(96540);var n=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function c(e){let{children:r,hidden:t,className:c}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,c),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>s});t(96540);var n=t(5260),a=t(74848);function s(e){let{title:r}=e;return(0,a.jsx)(n.A,{children:(0,a.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>E});var n=t(96540),a=t(34164),s=t(23104),c=t(56347),d=t(205),o=t(57485),i=t(31682),l=t(70679);function u(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??u(t);return function(e){const r=(0,i.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function x(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function p(e){let{queryString:r=!1,groupId:t}=e;const a=(0,c.W6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,o.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(a.location.search);r.set(s,e),a.replace({...a.location,search:r.toString()})}),[s,a])]}function m(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,s=h(e),[c,o]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!x({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:s}))),[i,u]=p({queryString:t,groupId:a}),[m,f]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,s]=(0,l.Dv)(t);return[a,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),j=(()=>{const e=i??m;return x({value:e,tabValues:s})?e:null})();(0,d.A)((()=>{j&&o(j)}),[j]);return{selectedValue:c,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var f=t(92303);const j={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var v=t(74848);function b(e){let{className:r,block:t,selectedValue:n,selectValue:d,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),{pathname:u}=(0,c.zy)(),h=e=>{const r=e.currentTarget,t=i.indexOf(r),a=o[t].value;a!==n&&(l(r),d(a))},x=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;r=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;r=i[t]??i[i.length-1];break}}r?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:o.map((e=>{let{value:r,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>i.push(e),onKeyDown:x,onClick:h,...s,className:(0,a.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",j.tabItem,s?.className,{"border-b-2 pointer-events-none":n===r,"border-b-2 text-[#669dcb] border-[#669dcb]":n===r&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==r&&u.startsWith("/terminal")}),children:t??r},r)}))})}function y(e){let{lazy:r,children:t,selectedValue:a}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function g(e){const r=m(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,v.jsx)(b,{...e,...r}),(0,v.jsx)(y,{...e,...r})]})}function E(e){const r=(0,f.A)();return(0,v.jsx)(g,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>c,x:()=>d});var n=t(96540);const a={},s=n.createContext(a);function c(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);