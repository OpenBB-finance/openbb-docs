"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59547],{52100:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var n=r(74848),s=r(28453),a=r(94331),i=r(18228),d=r(19365);const l={title:"ueat",description:"Learn how to monitor unique ethereum address transactions using OpenBB's ueat. Explore how to use the ueat function and chart for effective insights.",keywords:["ueat","ethereum address transactions","crypto onchain","bitquery model","bitquery view","monitor ethereum transactions"]},o=void 0,c={id:"sdk/reference/crypto/onchain/ueat",title:"ueat",description:"Learn how to monitor unique ethereum address transactions using OpenBB's ueat. Explore how to use the ueat function and chart for effective insights.",source:"@site/content/sdk/reference/crypto/onchain/ueat.md",sourceDirName:"sdk/reference/crypto/onchain",slug:"/sdk/reference/crypto/onchain/ueat",permalink:"/sdk/reference/crypto/onchain/ueat",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/crypto/onchain/ueat.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719247347e3,frontMatter:{title:"ueat",description:"Learn how to monitor unique ethereum address transactions using OpenBB's ueat. Explore how to use the ueat function and chart for effective insights.",keywords:["ueat","ethereum address transactions","crypto onchain","bitquery model","bitquery view","monitor ethereum transactions"]},sidebar:"tutorialSidebar",previous:{title:"tx",permalink:"/sdk/reference/crypto/onchain/tx"},next:{title:"whales",permalink:"/sdk/reference/crypto/onchain/whales"}},u={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}];function x(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{title:"crypto.onchain.ueat - Reference | OpenBB SDK Docs"}),"\n","\n",(0,n.jsxs)(i.A,{children:[(0,n.jsxs)(d.A,{value:"model",label:"Model",default:!0,children:[(0,n.jsx)(t.p,{children:"Get number of unique ethereum addresses which made a transaction in given time interval."}),(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/bitquery_model.py#L584",children:"link"}),"]"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'openbb.crypto.onchain.ueat(interval: str = "day", limit: int = 90, sortby: str = "tradeAmount", ascend: bool = True)\n'})}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"interval"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsxs)(t.td,{children:["Time interval in which count unique ethereum addresses which made transaction. day,",(0,n.jsx)("br",{}),"month or week."]}),(0,n.jsx)(t.td,{children:"day"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Number of records for data query."}),(0,n.jsx)(t.td,{children:"90"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sortby"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Key by which to sort data"}),(0,n.jsx)(t.td,{children:"tradeAmount"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ascend"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Flag to sort data ascending"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"True"})]})]})]}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pd.DataFrame"}),(0,n.jsx)(t.td,{children:"Unique ethereum addresses which made a transaction"})]})})]}),(0,n.jsx)(t.hr,{})]}),(0,n.jsxs)(d.A,{value:"view",label:"Chart",children:[(0,n.jsx)(t.p,{children:"Prints table showing number of unique ethereum addresses which made a transaction in given time interval"}),(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/bitquery_view.py#L225",children:"link"}),"]"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'openbb.crypto.onchain.ueat_chart(interval: str = "days", limit: int = 10, sortby: str = "date", ascend: bool = True, export: str = "")\n'})}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"parameters-1",children:"Parameters"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"interval"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Time interval in which ethereum address made transaction. month, week or day"}),(0,n.jsx)(t.td,{children:"days"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsxs)(t.td,{children:["Number of records to display. It's calculated base on provided interval.",(0,n.jsx)("br",{}),"If interval is month then calculation is made in the way: limit * 30 = time period,",(0,n.jsx)("br",{}),"in case if interval is set to week, then time period is calculated as limit * 7.",(0,n.jsx)("br",{}),"For better user experience maximum time period in days is equal to 90."]}),(0,n.jsx)(t.td,{children:"10"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sortby"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Key by which to sort data"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ascend"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Flag to sort data ascending"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"export"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Export dataframe data to csv,json,xlsx file"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"True"})]})]})]}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"returns-1",children:"Returns"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pd.DataFrame"}),(0,n.jsx)(t.td,{children:"Number of unique ethereum addresses which made a transaction in given time interval"})]})})]}),(0,n.jsx)(t.hr,{})]})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var a=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,i),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var n=r(5260),s=r(74848);function a(e){let{title:t}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(96540),s=r(34164),a=r(23104),i=r(56347),d=r(205),l=r(57485),o=r(31682),c=r(70679);function u(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??u(r);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const s=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,a=h(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[o,u]=p({queryString:r,groupId:s}),[m,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,c.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),j=(()=>{const e=o??m;return x({value:e,tabValues:a})?e:null})();(0,d.A)((()=>{j&&l(j)}),[j]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var b=r(92303);const j={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var f=r(74848);function y(e){let{className:t,block:r,selectedValue:n,selectValue:d,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),{pathname:u}=(0,i.zy)(),h=e=>{const t=e.currentTarget,r=o.indexOf(t),s=l[r].value;s!==n&&(c(t),d(s))},x=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:x,onClick:h,...a,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",j.tabItem,a?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&u.startsWith("/terminal")}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:s}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function g(e){const t=m(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,f.jsx)(y,{...e,...t}),(0,f.jsx)(v,{...e,...t})]})}function w(e){const t=(0,b.A)();return(0,f.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>d});var n=r(96540);const s={},a=n.createContext(s);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);