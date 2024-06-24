"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22259],{75988:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var n=t(74848),s=t(28453),i=t(94331),o=t(18228),a=t(19365);const l={title:"inv",description:"Our inv function provides an overview of coin investors. It provides a comprehensive list of individual and organizational investors for a specific cryptocurrency. Additionally, our inv chart function prints a table of these coin investors and offers the option of exporting this data to various file formats.",keywords:["coin investors","cryptocurrency","investors","docusaurus page SEO","functions","crypto symbols","data export","csv","json","xlsx","due diligence","messari model","messari view"]},c=void 0,d={id:"sdk/reference/crypto/dd/inv",title:"inv",description:"Our inv function provides an overview of coin investors. It provides a comprehensive list of individual and organizational investors for a specific cryptocurrency. Additionally, our inv chart function prints a table of these coin investors and offers the option of exporting this data to various file formats.",source:"@site/content/sdk/reference/crypto/dd/inv.md",sourceDirName:"sdk/reference/crypto/dd",slug:"/sdk/reference/crypto/dd/inv",permalink:"/sdk/reference/crypto/dd/inv",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/crypto/dd/inv.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719240743e3,frontMatter:{title:"inv",description:"Our inv function provides an overview of coin investors. It provides a comprehensive list of individual and organizational investors for a specific cryptocurrency. Additionally, our inv chart function prints a table of these coin investors and offers the option of exporting this data to various file formats.",keywords:["coin investors","cryptocurrency","investors","docusaurus page SEO","functions","crypto symbols","data export","csv","json","xlsx","due diligence","messari model","messari view"]},sidebar:"tutorialSidebar",previous:{title:"headlines",permalink:"/sdk/reference/crypto/dd/headlines"},next:{title:"links",permalink:"/sdk/reference/crypto/dd/links"}},u={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}];function p(e){const r={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"crypto.dd.inv - Reference | OpenBB SDK Docs"}),"\n","\n",(0,n.jsxs)(o.A,{children:[(0,n.jsxs)(a.A,{value:"model",label:"Model",default:!0,children:[(0,n.jsx)(r.p,{children:"Returns coin investors"}),(0,n.jsxs)(r.p,{children:["Source Code: [",(0,n.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/messari_model.py#L494",children:"link"}),"]"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"openbb.crypto.dd.inv(symbol: str)\n"})}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Crypto symbol to check investors"}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"False"})]})})]}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Tuple[pd.DataFrame, pd.DataFrame]"}),(0,n.jsxs)(r.td,{children:["Individuals,",(0,n.jsx)("br",{}),"Organizations"]})]})})]}),(0,n.jsx)(r.hr,{})]}),(0,n.jsxs)(a.A,{value:"view",label:"Chart",children:[(0,n.jsx)(r.p,{children:"Prints table showing coin investors"}),(0,n.jsxs)(r.p,{children:["Source Code: [",(0,n.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/messari_view.py#L510",children:"link"}),"]"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'openbb.crypto.dd.inv_chart(symbol: str, export: str = "")\n'})}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"parameters-1",children:"Parameters"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Crypto symbol to check coin investors"}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"export"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Export dataframe data to csv,json,xlsx file"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"True"})]})]})]}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"returns-1",children:"Returns"}),(0,n.jsx)(r.p,{children:"This function does not return anything"}),(0,n.jsx)(r.hr,{})]})]})]})}function f(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>o});t(96540);var n=t(34164);const s={tabItem:"tabItem_Ymn6"};var i=t(74848);function o(e){let{children:r,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,o),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var n=t(5260),s=t(74848);function i(e){let{title:r}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>k});var n=t(96540),s=t(34164),i=t(23104),o=t(56347),a=t(205),l=t(57485),c=t(31682),d=t(70679);function u(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??u(t);return function(e){const r=(0,c.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function f(e){let{queryString:r=!1,groupId:t}=e;const s=(0,o.W6)(),i=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(s.location.search);r.set(i,e),s.replace({...s.location,search:r.toString()})}),[i,s])]}function v(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,i=h(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:i}))),[c,u]=f({queryString:t,groupId:s}),[v,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,i]=(0,d.Dv)(t);return[s,(0,n.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),x=(()=>{const e=c??v;return p({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{x&&l(x)}),[x]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var b=t(92303);const x={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var m=t(74848);function y(e){let{className:r,block:t,selectedValue:n,selectValue:a,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),{pathname:u}=(0,o.zy)(),h=e=>{const r=e.currentTarget,t=c.indexOf(r),s=l[t].value;s!==n&&(d(r),a(s))},p=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}r?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:r,label:t,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>c.push(e),onKeyDown:p,onClick:h,...i,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",x.tabItem,i?.className,{"border-b-2 pointer-events-none":n===r,"border-b-2 text-[#669dcb] border-[#669dcb]":n===r&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==r&&u.startsWith("/terminal")}),children:t??r},r)}))})}function j(e){let{lazy:r,children:t,selectedValue:s}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function g(e){const r=v(e);return(0,m.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,m.jsx)(y,{...e,...r}),(0,m.jsx)(j,{...e,...r})]})}function k(e){const r=(0,b.A)();return(0,m.jsx)(g,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>a});var n=t(96540);const s={},i=n.createContext(s);function o(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);