"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70908],{69354:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var s=t(74848),a=t(28453),n=t(94331),i=t(18228),l=t(19365);const d={title:"aterra",description:"This document provides information about how to fetch historical data for a specific Terra asset, plot the 30-day history of that asset and explains the usage of each function. Also includes source code links.",keywords:["Terra assets","historical data","address","GET request","Draw chart","aterra","meta data","parameters","returns"]},o=void 0,c={id:"sdk/reference/crypto/defi/aterra",title:"aterra",description:"This document provides information about how to fetch historical data for a specific Terra asset, plot the 30-day history of that asset and explains the usage of each function. Also includes source code links.",source:"@site/content/sdk/reference/crypto/defi/aterra.md",sourceDirName:"sdk/reference/crypto/defi",slug:"/sdk/reference/crypto/defi/aterra",permalink:"/sdk/reference/crypto/defi/aterra",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/crypto/defi/aterra.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719240743e3,frontMatter:{title:"aterra",description:"This document provides information about how to fetch historical data for a specific Terra asset, plot the 30-day history of that asset and explains the usage of each function. Also includes source code links.",keywords:["Terra assets","historical data","address","GET request","Draw chart","aterra","meta data","parameters","returns"]},sidebar:"tutorialSidebar",previous:{title:"anchor_data",permalink:"/sdk/reference/crypto/defi/anchor_data"},next:{title:"ayr",permalink:"/sdk/reference/crypto/defi/ayr"}},u={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}];function p(e){const r={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.A,{title:"crypto.defi.aterra - Reference | OpenBB SDK Docs"}),"\n","\n",(0,s.jsxs)(i.A,{children:[(0,s.jsxs)(l.A,{value:"model",label:"Model",default:!0,children:[(0,s.jsx)(r.p,{children:"Returns historical data of an asset in a certain terra address"}),(0,s.jsxs)(r.p,{children:["Source Code: [",(0,s.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/terraengineer_model.py#L19",children:"link"}),"]"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:'openbb.crypto.defi.aterra(asset: str = "ust", address: str = "terra1tmnqgvg567ypvsvk6rwsga3srp7e3lg6u0elp8")\n'})}),(0,s.jsx)(r.hr,{}),(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Default"}),(0,s.jsx)(r.th,{children:"Optional"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"asset"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Terra asset {ust,luna,sdt}"}),(0,s.jsx)(r.td,{children:"ust"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"address"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Terra address. Valid terra addresses start with 'terra'"}),(0,s.jsx)(r.td,{children:"terra1tmnqgvg567ypvsvk6rwsga3srp7e3lg6u0elp8"}),(0,s.jsx)(r.td,{children:"True"})]})]})]}),(0,s.jsx)(r.hr,{}),(0,s.jsx)(r.h2,{id:"returns",children:"Returns"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"pd.DataFrame"}),(0,s.jsx)(r.td,{children:"historical data"})]})})]}),(0,s.jsx)(r.hr,{})]}),(0,s.jsxs)(l.A,{value:"view",label:"Chart",children:[(0,s.jsx)(r.p,{children:"Plots the 30-day history of specified asset in terra address"}),(0,s.jsxs)(r.p,{children:["Source Code: [",(0,s.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/terraengineer_view.py#L29",children:"link"}),"]"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:'openbb.crypto.defi.aterra_chart(asset: str = "", address: str = "", export: str = "", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None)\n'})}),(0,s.jsx)(r.hr,{}),(0,s.jsx)(r.h2,{id:"parameters-1",children:"Parameters"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Default"}),(0,s.jsx)(r.th,{children:"Optional"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"asset"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Terra asset {ust,luna,sdt}"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"address"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Terra address. Valid terra addresses start with 'terra'"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"export"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Export dataframe data to csv,json,xlsx file"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"external_axes"}),(0,s.jsx)(r.td,{children:"Optional[List[plt.Axes]]"}),(0,s.jsx)(r.td,{children:"External axes (1 axis is expected in the list), by default None"}),(0,s.jsx)(r.td,{children:"None"}),(0,s.jsx)(r.td,{children:"True"})]})]})]}),(0,s.jsx)(r.hr,{}),(0,s.jsx)(r.h2,{id:"returns-1",children:"Returns"}),(0,s.jsx)(r.p,{children:"This function does not return anything"}),(0,s.jsx)(r.hr,{})]})]})]})}function f(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var s=t(34164);const a={tabItem:"tabItem_Ymn6"};var n=t(74848);function i(e){let{children:r,hidden:t,className:i}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,i),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>n});t(96540);var s=t(5260),a=t(74848);function n(e){let{title:r}=e;return(0,a.jsx)(s.A,{children:(0,a.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>T});var s=t(96540),a=t(34164),n=t(23104),i=t(56347),l=t(205),d=t(57485),o=t(31682),c=t(70679);function u(e){return function(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:s,default:a}}=e;return{value:r,label:t,attributes:s,default:a}}))}function h(e){const{values:r,children:t}=e;return(0,s.useMemo)((()=>{const e=r??u(t);return function(e){const r=(0,o.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function f(e){let{queryString:r=!1,groupId:t}=e;const a=(0,i.W6)(),n=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,d.aZ)(n),(0,s.useCallback)((e=>{if(!n)return;const r=new URLSearchParams(a.location.search);r.set(n,e),a.replace({...a.location,search:r.toString()})}),[n,a])]}function x(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,n=h(e),[i,d]=(0,s.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:n}))),[o,u]=f({queryString:t,groupId:a}),[x,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,n]=(0,c.Dv)(t);return[a,(0,s.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:a}),m=(()=>{const e=o??x;return p({value:e,tabValues:n})?e:null})();(0,l.A)((()=>{m&&d(m)}),[m]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),b(e)}),[u,b,n]),tabValues:n}}var b=t(92303);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var j=t(74848);function v(e){let{className:r,block:t,selectedValue:s,selectValue:l,tabValues:d}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,n.a_)(),{pathname:u}=(0,i.zy)(),h=e=>{const r=e.currentTarget,t=o.indexOf(r),a=d[t].value;a!==s&&(c(r),l(a))},p=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;r=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;r=o[t]??o[o.length-1];break}}r?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:d.map((e=>{let{value:r,label:t,attributes:n}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>o.push(e),onKeyDown:p,onClick:h,...n,className:(0,a.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,n?.className,{"border-b-2 pointer-events-none":s===r,"border-b-2 text-[#669dcb] border-[#669dcb]":s===r&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===r&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==r&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===r&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==r&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":s!==r&&u.startsWith("/terminal")}),children:t??r},r)}))})}function y(e){let{lazy:r,children:t,selectedValue:a}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function g(e){const r=x(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,j.jsx)(v,{...e,...r}),(0,j.jsx)(y,{...e,...r})]})}function T(e){const r=(0,b.A)();return(0,j.jsx)(g,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>l});var s=t(96540);const a={},n=s.createContext(a);function i(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);