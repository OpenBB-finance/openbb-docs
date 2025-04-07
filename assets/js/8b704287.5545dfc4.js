"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2769],{51958:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var r=t(74848),s=t(28453),i=t(18228),o=t(19365);const l={title:"Institutional Ownership",description:"Get data about institutional ownership for a given company over time"},d=void 0,c={id:"platform/data_models/InstitutionalOwnership",title:"Institutional Ownership",description:"Get data about institutional ownership for a given company over time",source:"@site/content/platform/data_models/InstitutionalOwnership.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/InstitutionalOwnership",permalink:"/platform/data_models/InstitutionalOwnership",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/data_models/InstitutionalOwnership.md",tags:[],version:"current",frontMatter:{title:"Institutional Ownership",description:"Get data about institutional ownership for a given company over time"},sidebar:"tutorialSidebar",previous:{title:"Insider Trading",permalink:"/platform/data_models/InsiderTrading"},next:{title:"Institutions Search",permalink:"/platform/data_models/InstitutionsSearch"}},a={},h=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function u(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,r.jsx)(n.h3,{id:"class-names",children:"Class names"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Model name"}),(0,r.jsx)(n.th,{children:"Parameters class"}),(0,r.jsx)(n.th,{children:"Data class"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"InstitutionalOwnership"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"InstitutionalOwnershipQueryParams"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"InstitutionalOwnershipData"})})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from openbb_core.provider.standard_models.institutional_ownership import (\nInstitutionalOwnershipData,\nInstitutionalOwnershipQueryParams,\n)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsxs)(o.A,{value:"standard",label:"standard",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"symbol"})}),": ",(0,r.jsx)(n.code,{children:"str"})]}),(0,r.jsx)(n.p,{children:"Symbol to get data for."}),(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.em,{children:"Optional:"})," ",(0,r.jsx)(n.code,{children:"False"})]})]}),(0,r.jsxs)(o.A,{value:"fmp",label:"fmp",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"symbol"})}),": ",(0,r.jsx)(n.code,{children:"str"})]}),(0,r.jsx)(n.p,{children:"Symbol to get data for."}),(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.em,{children:"Optional:"})," ",(0,r.jsx)(n.code,{children:"False"})]}),(0,r.jsx)(n.hr,{}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"include_current_quarter"})}),": ",(0,r.jsx)(n.code,{children:"bool"})]}),(0,r.jsx)(n.p,{children:"Include current quarter data."}),(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.em,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"False"})]}),(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.em,{children:"Optional:"})," ",(0,r.jsx)(n.code,{children:"True"})]}),(0,r.jsx)(n.hr,{}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"date"})}),": ",(0,r.jsx)(n.code,{children:"Union[date, str]"})]}),(0,r.jsx)(n.p,{children:"A specific date to get data for."}),(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.em,{children:"Optional:"})," ",(0,r.jsx)(n.code,{children:"True"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"data",children:"Data"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsxs)(o.A,{value:"standard",label:"standard",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"symbol"})}),": ",(0,r.jsx)(n.code,{children:"str"})]}),(0,r.jsx)(n.p,{children:"Symbol representing the entity requested in the data."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"cik"})}),": ",(0,r.jsx)(n.code,{children:"str"})]}),(0,r.jsx)(n.p,{children:"Central Index Key (CIK) for the requested entity."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"date"})}),": ",(0,r.jsx)(n.code,{children:"Union[date, str]"})]}),(0,r.jsx)(n.p,{children:"The date of the data."})]}),(0,r.jsxs)(o.A,{value:"fmp",label:"fmp",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"symbol"})}),": ",(0,r.jsx)(n.code,{children:"str"})]}),(0,r.jsx)(n.p,{children:"Symbol representing the entity requested in the data."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"cik"})}),": ",(0,r.jsx)(n.code,{children:"str"})]}),(0,r.jsx)(n.p,{children:"Central Index Key (CIK) for the requested entity."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"date"})}),": ",(0,r.jsx)(n.code,{children:"Union[date, str]"})]}),(0,r.jsx)(n.p,{children:"The date of the data."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"investors_holding"})}),": ",(0,r.jsx)(n.code,{children:"int"})]}),(0,r.jsx)(n.p,{children:"Number of investors holding the stock."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"last_investors_holding"})}),": ",(0,r.jsx)(n.code,{children:"int"})]}),(0,r.jsx)(n.p,{children:"Number of investors holding the stock in the last quarter."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"investors_holding_change"})}),": ",(0,r.jsx)(n.code,{children:"int"})]}),(0,r.jsx)(n.p,{children:"Change in the number of investors holding the stock."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"number_of_13f_shares"})}),": ",(0,r.jsx)(n.code,{children:"int"})]}),(0,r.jsx)(n.p,{children:"Number of 13F shares."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"last_number_of_13f_shares"})}),": ",(0,r.jsx)(n.code,{children:"int"})]}),(0,r.jsx)(n.p,{children:"Number of 13F shares in the last quarter."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"number_of_13f_shares_change"})}),": ",(0,r.jsx)(n.code,{children:"int"})]}),(0,r.jsx)(n.p,{children:"Change in the number of 13F shares."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"total_invested"})}),": ",(0,r.jsx)(n.code,{children:"float"})]}),(0,r.jsx)(n.p,{children:"Total amount invested."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"last_total_invested"})}),": ",(0,r.jsx)(n.code,{children:"float"})]}),(0,r.jsx)(n.p,{children:"Total amount invested in the last quarter."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"total_invested_change"})}),": ",(0,r.jsx)(n.code,{children:"float"})]}),(0,r.jsx)(n.p,{children:"Change in the total amount invested."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"ownership_percent"})}),": ",(0,r.jsx)(n.code,{children:"float"})]}),(0,r.jsx)(n.p,{children:"Ownership percent."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"last_ownership_percent"})}),": ",(0,r.jsx)(n.code,{children:"float"})]}),(0,r.jsx)(n.p,{children:"Ownership percent in the last quarter."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"ownership_percent_change"})}),": ",(0,r.jsx)(n.code,{children:"float"})]}),(0,r.jsx)(n.p,{children:"Change in the ownership percent."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"new_positions"})}),": ",(0,r.jsx)(n.code,{children:"int"})]}),(0,r.jsx)(n.p,{children:"Number of new positions."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"last_new_positions"})}),": ",(0,r.jsx)(n.code,{children:"int"})]}),(0,r.jsx)(n.p,{children:"Number of new positions in the last quarter."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"new_positions_change"})}),": ",(0,r.jsx)(n.code,{children:"int"})]}),(0,r.jsx)(n.p,{children:"Change in the number of new positions."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"increased_positions"})}),": ",(0,r.jsx)(n.code,{children:"int"})]}),(0,r.jsx)(n.p,{children:"Number of increased positions."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"last_increased_positions"})}),": ",(0,r.jsx)(n.code,{children:"int"})]}),(0,r.jsx)(n.p,{children:"Number of increased positions in the last quarter."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"increased_positions_change"})}),": ",(0,r.jsx)(n.code,{children:"int"})]}),(0,r.jsx)(n.p,{children:"Change in the number of increased positions."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"closed_positions"})}),": ",(0,r.jsx)(n.code,{children:"int"})]}),(0,r.jsx)(n.p,{children:"Number of closed positions."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"last_closed_positions"})}),": ",(0,r.jsx)(n.code,{children:"int"})]}),(0,r.jsx)(n.p,{children:"Number of closed positions in the last quarter."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"closed_positions_change"})}),": ",(0,r.jsx)(n.code,{children:"int"})]}),(0,r.jsx)(n.p,{children:"Change in the number of closed positions."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"reduced_positions"})}),": ",(0,r.jsx)(n.code,{children:"int"})]}),(0,r.jsx)(n.p,{children:"Number of reduced positions."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"last_reduced_positions"})}),": ",(0,r.jsx)(n.code,{children:"int"})]}),(0,r.jsx)(n.p,{children:"Number of reduced positions in the last quarter."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"reduced_positions_change"})}),": ",(0,r.jsx)(n.code,{children:"int"})]}),(0,r.jsx)(n.p,{children:"Change in the number of reduced positions."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"total_calls"})}),": ",(0,r.jsx)(n.code,{children:"int"})]}),(0,r.jsx)(n.p,{children:"Total number of call options contracts traded for Apple Inc. on the specified date."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"last_total_calls"})}),": ",(0,r.jsx)(n.code,{children:"int"})]}),(0,r.jsx)(n.p,{children:"Total number of call options contracts traded for Apple Inc. on the previous reporting date."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"total_calls_change"})}),": ",(0,r.jsx)(n.code,{children:"int"})]}),(0,r.jsx)(n.p,{children:"Change in the total number of call options contracts traded between the current and previous reporting dates."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"total_puts"})}),": ",(0,r.jsx)(n.code,{children:"int"})]}),(0,r.jsx)(n.p,{children:"Total number of put options contracts traded for Apple Inc. on the specified date."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"last_total_puts"})}),": ",(0,r.jsx)(n.code,{children:"int"})]}),(0,r.jsx)(n.p,{children:"Total number of put options contracts traded for Apple Inc. on the previous reporting date."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"total_puts_change"})}),": ",(0,r.jsx)(n.code,{children:"int"})]}),(0,r.jsx)(n.p,{children:"Change in the total number of put options contracts traded between the current and previous reporting dates."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"put_call_ratio"})}),": ",(0,r.jsx)(n.code,{children:"float"})]}),(0,r.jsx)(n.p,{children:"Put-call ratio, which is the ratio of the total number of put options to call options traded on the specified date."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"last_put_call_ratio"})}),": ",(0,r.jsx)(n.code,{children:"float"})]}),(0,r.jsx)(n.p,{children:"Put-call ratio on the previous reporting date."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"put_call_ratio_change"})}),": ",(0,r.jsx)(n.code,{children:"float"})]}),(0,r.jsx)(n.p,{children:"Change in the put-call ratio between the current and previous reporting dates."})]})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(34164);const s={tabItem:"tabItem_Ymn6"};var i=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:t,children:n})}},18228:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(56347),s=t(23104),i=t(96540),o=t(205),l=t(57485),d=t(31682),c=t(89466);function a(e){return function(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??a(t);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function u(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,r.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(o),(0,i.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[l,d]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[a,x]=p({queryString:t,groupId:r}),[j,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,c.Dv)(t);return[r,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),f=(()=>{const e=a??j;return u({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{f&&d(f)}),[f]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),x(e),m(e)}),[x,m,s]),tabValues:s}}var j=t(92303),m=t(34164);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=t(74848);function g(e){let{className:n,block:t,selectedValue:i,selectValue:o,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),{pathname:a}=(0,r.zy)(),h=e=>{const n=e.currentTarget,t=d.indexOf(n),r=l[t].value;r!==i&&(c(n),o(r))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>d.push(e),onKeyDown:u,onClick:h,...r,className:(0,m.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,r?.className,{"border-b-2 pointer-events-none":i===n,"border-b-2 text-[#669dcb] border-[#669dcb]":i===n&&a.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===n&&a.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==n&&a.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===n&&a.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==n&&a.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":i!==n&&a.startsWith("/workspace")}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;if(t=Array.isArray(t)?t:[t],n){const e=t.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function _(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,m.A)("tabs-container",f.tabList),children:[(0,b.jsx)(g,{...e,...n}),(0,b.jsx)(v,{...e,...n})]})}function w(e){const n=(0,j.A)();return(0,b.jsx)(_,{...e},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(96540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);