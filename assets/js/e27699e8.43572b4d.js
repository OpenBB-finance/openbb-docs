"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[67252],{51119:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var n=r(74848),i=r(28453),s=r(18228),d=r(19365);const l={title:"Available Indices",description:"All indices available from a given provider"},a=void 0,c={id:"platform/data_models/AvailableIndices",title:"Available Indices",description:"All indices available from a given provider",source:"@site/content/platform/data_models/AvailableIndices.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/AvailableIndices",permalink:"/platform/data_models/AvailableIndices",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/data_models/AvailableIndices.md",tags:[],version:"current",frontMatter:{title:"Available Indices",description:"All indices available from a given provider"},sidebar:"tutorialSidebar",previous:{title:"Available Indicators",permalink:"/platform/data_models/AvailableIndicators"},next:{title:"Balance Of Payments",permalink:"/platform/data_models/BalanceOfPayments"}},h={},o=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,n.jsx)(t.h3,{id:"class-names",children:"Class names"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Model name"}),(0,n.jsx)(t.th,{children:"Parameters class"}),(0,n.jsx)(t.th,{children:"Data class"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"AvailableIndices"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"AvailableIndicesQueryParams"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"AvailableIndicesData"})})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb_core.provider.standard_models.available_indices import (\nAvailableIndicesData,\nAvailableIndicesQueryParams,\n)\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(d.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['cboe', 'fmp', 'tmx', 'yfinance']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: cboe, fmp, tmx, yfinance."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})})]})}),(0,n.jsx)(d.A,{value:"cboe",label:"cboe",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['cboe', 'fmp', 'tmx', 'yfinance']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: cboe, fmp, tmx, yfinance."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"use_cache"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"When True, the Cboe Index directory will be cached for 24 hours. Set as False to bypass."}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(d.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['cboe', 'fmp', 'tmx', 'yfinance']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: cboe, fmp, tmx, yfinance."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})})]})}),(0,n.jsx)(d.A,{value:"tmx",label:"tmx",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['cboe', 'fmp', 'tmx', 'yfinance']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: cboe, fmp, tmx, yfinance."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"use_cache"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Whether to use a cached request. Index data is from a single JSON file, updated each day after close. It is cached for one day. To bypass, set to False."}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(d.A,{value:"yfinance",label:"yfinance",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['cboe', 'fmp', 'tmx', 'yfinance']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: cboe, fmp, tmx, yfinance."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(d.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the index."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"currency"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Currency the index is traded in."})]})]})]})}),(0,n.jsx)(d.A,{value:"cboe",label:"cboe",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the index."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"currency"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Currency the index is traded in."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol for the index."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"description"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Description for the index. Valid only for US indices."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data_delay"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Data delay for the index. Valid only for US indices."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"open_time"}),(0,n.jsx)(t.td,{children:"datetime.time"}),(0,n.jsx)(t.td,{children:"Opening time for the index. Valid only for US indices."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"close_time"}),(0,n.jsx)(t.td,{children:"datetime.time"}),(0,n.jsx)(t.td,{children:"Closing time for the index. Valid only for US indices."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"time_zone"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Time zone for the index. Valid only for US indices."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"tick_days"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The trading days for the index. Valid only for US indices."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"tick_frequency"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The frequency of the index ticks. Valid only for US indices."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"tick_period"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The period of the index ticks. Valid only for US indices."})]})]})]})}),(0,n.jsx)(d.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the index."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"currency"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Currency the index is traded in."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"stock_exchange"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Stock exchange where the index is listed."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"exchange_short_name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Short name of the stock exchange where the index is listed."})]})]})]})}),(0,n.jsx)(d.A,{value:"tmx",label:"tmx",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the index."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"currency"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Currency the index is traded in."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The ticker symbol of the index."})]})]})]})}),(0,n.jsx)(d.A,{value:"yfinance",label:"yfinance",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the index."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"currency"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Currency the index is traded in."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"code"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"ID code for keying the index in the OpenBB Terminal."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol for the index."})]})]})]})})]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>d});r(96540);var n=r(34164);const i={tabItem:"tabItem_Ymn6"};var s=r(74848);function d(e){let{children:t,hidden:r,className:d}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,d),hidden:r,children:t})}},18228:(e,t,r)=>{r.d(t,{A:()=>T});var n=r(96540),i=r(34164),s=r(23104),d=r(56347),l=r(205),a=r(57485),c=r(31682),h=r(70679);function o(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:i}}=e;return{value:t,label:r,attributes:n,default:i}}))}function x(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??o(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function u(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:r}=e;const i=(0,d.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,a.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:i}=e,s=x(e),[d,a]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[c,o]=j({queryString:r,groupId:i}),[m,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,h.Dv)(r);return[i,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:i}),b=(()=>{const e=c??m;return u({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{b&&a(b)}),[b]);return{selectedValue:d,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),o(e),f(e)}),[o,f,s]),tabValues:s}}var f=r(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var p=r(74848);function y(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:h}=(0,s.a_)(),{pathname:o}=(0,d.zy)(),x=e=>{const t=e.currentTarget,r=c.indexOf(t),i=a[r].value;i!==n&&(h(t),l(i))},u=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,p.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:a.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,p.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:u,onClick:x,...s,className:(0,i.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,s?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&o.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&o.startsWith("/terminal")}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:i}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,p.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function g(e){const t=m(e);return(0,p.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,p.jsx)(y,{...e,...t}),(0,p.jsx)(v,{...e,...t})]})}function T(e){const t=(0,f.A)();return(0,p.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>l});var n=r(96540);const i={},s=n.createContext(i);function d(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);