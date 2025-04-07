"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35602],{15683:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var t=r(74848),d=r(28453),s=r(18228),a=r(19365);const i={title:"Calendar Dividend",description:"Get historical and upcoming dividend payments"},l=void 0,o={id:"platform/data_models/CalendarDividend",title:"Calendar Dividend",description:"Get historical and upcoming dividend payments",source:"@site/content/platform/data_models/CalendarDividend.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/CalendarDividend",permalink:"/platform/data_models/CalendarDividend",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/data_models/CalendarDividend.md",tags:[],version:"current",frontMatter:{title:"Calendar Dividend",description:"Get historical and upcoming dividend payments"},sidebar:"tutorialSidebar",previous:{title:"COT Search",permalink:"/platform/data_models/COTSearch"},next:{title:"Calendar Earnings",permalink:"/platform/data_models/CalendarEarnings"}},c={},h=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function u(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,t.jsx)(n.h3,{id:"class-names",children:"Class names"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Model name"}),(0,t.jsx)(n.th,{children:"Parameters class"}),(0,t.jsx)(n.th,{children:"Data class"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"CalendarDividend"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"CalendarDividendQueryParams"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"CalendarDividendData"})})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from openbb_core.provider.standard_models.calendar_dividend import (\nCalendarDividendData,\nCalendarDividendQueryParams,\n)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsxs)(a.A,{value:"standard",label:"standard",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"start_date"})}),": ",(0,t.jsx)(n.code,{children:"Union[date, str]"})]}),(0,t.jsx)(n.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.em,{children:"Optional:"})," ",(0,t.jsx)(n.code,{children:"True"})]}),(0,t.jsx)(n.hr,{}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"end_date"})}),": ",(0,t.jsx)(n.code,{children:"Union[date, str]"})]}),(0,t.jsx)(n.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.em,{children:"Optional:"})," ",(0,t.jsx)(n.code,{children:"True"})]})]}),(0,t.jsxs)(a.A,{value:"fmp",label:"fmp",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"start_date"})}),": ",(0,t.jsx)(n.code,{children:"Union[date, str]"})]}),(0,t.jsx)(n.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.em,{children:"Optional:"})," ",(0,t.jsx)(n.code,{children:"True"})]}),(0,t.jsx)(n.hr,{}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"end_date"})}),": ",(0,t.jsx)(n.code,{children:"Union[date, str]"})]}),(0,t.jsx)(n.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.em,{children:"Optional:"})," ",(0,t.jsx)(n.code,{children:"True"})]})]}),(0,t.jsxs)(a.A,{value:"nasdaq",label:"nasdaq",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"start_date"})}),": ",(0,t.jsx)(n.code,{children:"Union[date, str]"})]}),(0,t.jsx)(n.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.em,{children:"Optional:"})," ",(0,t.jsx)(n.code,{children:"True"})]}),(0,t.jsx)(n.hr,{}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"end_date"})}),": ",(0,t.jsx)(n.code,{children:"Union[date, str]"})]}),(0,t.jsx)(n.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.em,{children:"Optional:"})," ",(0,t.jsx)(n.code,{children:"True"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"data",children:"Data"}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsxs)(a.A,{value:"standard",label:"standard",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"ex_dividend_date"})}),": ",(0,t.jsx)(n.code,{children:"date"})]}),(0,t.jsx)(n.p,{children:"The ex-dividend date - the date on which the stock begins trading without rights to the dividend."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"symbol"})}),": ",(0,t.jsx)(n.code,{children:"str"})]}),(0,t.jsx)(n.p,{children:"Symbol representing the entity requested in the data."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"amount"})}),": ",(0,t.jsx)(n.code,{children:"float"})]}),(0,t.jsx)(n.p,{children:"The dividend amount per share."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"name"})}),": ",(0,t.jsx)(n.code,{children:"str"})]}),(0,t.jsx)(n.p,{children:"Name of the entity."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"record_date"})}),": ",(0,t.jsx)(n.code,{children:"date"})]}),(0,t.jsx)(n.p,{children:"The record date of ownership for eligibility."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"payment_date"})}),": ",(0,t.jsx)(n.code,{children:"date"})]}),(0,t.jsx)(n.p,{children:"The payment date of the dividend."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"declaration_date"})}),": ",(0,t.jsx)(n.code,{children:"date"})]}),(0,t.jsx)(n.p,{children:"Declaration date of the dividend."})]}),(0,t.jsxs)(a.A,{value:"fmp",label:"fmp",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"ex_dividend_date"})}),": ",(0,t.jsx)(n.code,{children:"date"})]}),(0,t.jsx)(n.p,{children:"The ex-dividend date - the date on which the stock begins trading without rights to the dividend."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"symbol"})}),": ",(0,t.jsx)(n.code,{children:"str"})]}),(0,t.jsx)(n.p,{children:"Symbol representing the entity requested in the data."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"amount"})}),": ",(0,t.jsx)(n.code,{children:"float"})]}),(0,t.jsx)(n.p,{children:"The dividend amount per share."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"name"})}),": ",(0,t.jsx)(n.code,{children:"str"})]}),(0,t.jsx)(n.p,{children:"Name of the entity."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"record_date"})}),": ",(0,t.jsx)(n.code,{children:"date"})]}),(0,t.jsx)(n.p,{children:"The record date of ownership for eligibility."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"payment_date"})}),": ",(0,t.jsx)(n.code,{children:"date"})]}),(0,t.jsx)(n.p,{children:"The payment date of the dividend."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"declaration_date"})}),": ",(0,t.jsx)(n.code,{children:"date"})]}),(0,t.jsx)(n.p,{children:"Declaration date of the dividend."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"adjusted_amount"})}),": ",(0,t.jsx)(n.code,{children:"float"})]}),(0,t.jsx)(n.p,{children:"The adjusted-dividend amount."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"label"})}),": ",(0,t.jsx)(n.code,{children:"str"})]}),(0,t.jsx)(n.p,{children:"Ex-dividend date formatted for display."})]}),(0,t.jsxs)(a.A,{value:"nasdaq",label:"nasdaq",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"ex_dividend_date"})}),": ",(0,t.jsx)(n.code,{children:"date"})]}),(0,t.jsx)(n.p,{children:"The ex-dividend date - the date on which the stock begins trading without rights to the dividend."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"symbol"})}),": ",(0,t.jsx)(n.code,{children:"str"})]}),(0,t.jsx)(n.p,{children:"Symbol representing the entity requested in the data."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"amount"})}),": ",(0,t.jsx)(n.code,{children:"float"})]}),(0,t.jsx)(n.p,{children:"The dividend amount per share."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"name"})}),": ",(0,t.jsx)(n.code,{children:"str"})]}),(0,t.jsx)(n.p,{children:"Name of the entity."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"record_date"})}),": ",(0,t.jsx)(n.code,{children:"date"})]}),(0,t.jsx)(n.p,{children:"The record date of ownership for eligibility."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"payment_date"})}),": ",(0,t.jsx)(n.code,{children:"date"})]}),(0,t.jsx)(n.p,{children:"The payment date of the dividend."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"declaration_date"})}),": ",(0,t.jsx)(n.code,{children:"date"})]}),(0,t.jsx)(n.p,{children:"Declaration date of the dividend."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"annualized_amount"})}),": ",(0,t.jsx)(n.code,{children:"float"})]}),(0,t.jsx)(n.p,{children:"The indicated annualized dividend amount."})]})]})]})}function x(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>a});r(96540);var t=r(34164);const d={tabItem:"tabItem_Ymn6"};var s=r(74848);function a(e){let{children:n,hidden:r,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(d.tabItem,a),hidden:r,children:n})}},18228:(e,n,r)=>{r.d(n,{A:()=>D});var t=r(56347),d=r(23104),s=r(96540),a=r(205),i=r(57485),l=r(31682),o=r(89466);function c(e){return function(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:d}}=e;return{value:n,label:r,attributes:t,default:d}}))}function h(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??c(r);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function u(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const d=(0,t.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(d.location.search);n.set(a,e),d.replace({...d.location,search:n.toString()})}),[a,d])]}function j(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,d=h(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:d}))),[c,j]=x({queryString:r,groupId:t}),[p,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,d]=(0,o.Dv)(r);return[t,(0,s.useCallback)((e=>{r&&d.set(e)}),[r,d])]}({groupId:t}),f=(()=>{const e=c??p;return u({value:e,tabValues:d})?e:null})();(0,a.A)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!u({value:e,tabValues:d}))throw new Error(`Can't select invalid tab value=${e}`);l(e),j(e),m(e)}),[j,m,d]),tabValues:d}}var p=r(92303),m=r(34164);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function v(e){let{className:n,block:r,selectedValue:s,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,d.a_)(),{pathname:c}=(0,t.zy)(),h=e=>{const n=e.currentTarget,r=l.indexOf(n),t=i[r].value;t!==s&&(o(n),a(t))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:i.map((e=>{let{value:n,label:r,attributes:t}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:u,onClick:h,...t,className:(0,m.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,t?.className,{"border-b-2 pointer-events-none":s===n,"border-b-2 text-[#669dcb] border-[#669dcb]":s===n&&c.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===n&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==n&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===n&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==n&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":s!==n&&c.startsWith("/workspace")}),children:r??n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:t}=e;if(r=Array.isArray(r)?r:[r],n){const e=r.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=j(e);return(0,b.jsxs)("div",{className:(0,m.A)("tabs-container",f.tabList),children:[(0,b.jsx)(v,{...e,...n}),(0,b.jsx)(g,{...e,...n})]})}function D(e){const n=(0,p.A)();return(0,b.jsx)(y,{...e},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>i});var t=r(96540);const d={},s=t.createContext(d);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);