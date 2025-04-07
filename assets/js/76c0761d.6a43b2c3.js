"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1577],{34069:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var t=n(74848),s=n(28453),i=n(94331),l=n(18228),o=n(19365);const a={title:"government_trades",description:"Obtain government transaction data, including data from the Senate and the House of Representatives",keywords:["equity","ownership","government_trades"]},d=void 0,c={id:"platform/reference/equity/ownership/government_trades",title:"government_trades",description:"Obtain government transaction data, including data from the Senate and the House of Representatives",source:"@site/content/platform/reference/equity/ownership/government_trades.md",sourceDirName:"platform/reference/equity/ownership",slug:"/platform/reference/equity/ownership/government_trades",permalink:"/platform/reference/equity/ownership/government_trades",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/equity/ownership/government_trades.md",tags:[],version:"current",frontMatter:{title:"government_trades",description:"Obtain government transaction data, including data from the Senate and the House of Representatives",keywords:["equity","ownership","government_trades"]},sidebar:"tutorialSidebar",previous:{title:"form_13f",permalink:"/platform/reference/equity/ownership/form_13f"},next:{title:"insider_trading",permalink:"/platform/reference/equity/ownership/insider_trading"}},h={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function x(e){const r={code:"code",em:"em",h2:"h2",hr:"hr",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.A,{title:"equity/ownership/government_trades - Reference | OpenBB Platform Docs"}),"\n","\n",(0,t.jsx)(r.p,{children:"Obtain government transaction data, including data from the Senate\nand the House of Representatives."}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsxs)(o.A,{value:"standard",label:"standard",children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"symbol"})}),": ",(0,t.jsx)(r.code,{children:"Union[str, list[str]]"})]}),(0,t.jsx)(r.p,{children:"Symbol to get data for. Multiple items allowed for provider(s): fmp."}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Optional:"})," ",(0,t.jsx)(r.code,{children:"True"})]}),(0,t.jsx)(r.hr,{}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"chamber"})}),": ",(0,t.jsx)(r.code,{children:"Literal['house', 'senate', 'all']"})]}),(0,t.jsx)(r.p,{children:"Government Chamber."}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Default:"})," ",(0,t.jsx)(r.code,{children:"all"})]}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Optional:"})," ",(0,t.jsx)(r.code,{children:"True"})]}),(0,t.jsx)(r.hr,{}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"limit"})}),": ",(0,t.jsx)(r.code,{children:"Annotated[int, Ge(ge=0)]"})]}),(0,t.jsx)(r.p,{children:"The number of data entries to return."}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Default:"})," ",(0,t.jsx)(r.code,{children:"100"})]}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Optional:"})," ",(0,t.jsx)(r.code,{children:"True"})]})]}),(0,t.jsxs)(o.A,{value:"fmp",label:"fmp",children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"symbol"})}),": ",(0,t.jsx)(r.code,{children:"Union[str, list[str]]"})]}),(0,t.jsx)(r.p,{children:"Symbol to get data for. Multiple items allowed for provider(s): fmp."}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Optional:"})," ",(0,t.jsx)(r.code,{children:"True"})]}),(0,t.jsx)(r.hr,{}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"chamber"})}),": ",(0,t.jsx)(r.code,{children:"Literal['house', 'senate', 'all']"})]}),(0,t.jsx)(r.p,{children:"Government Chamber."}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Default:"})," ",(0,t.jsx)(r.code,{children:"all"})]}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Optional:"})," ",(0,t.jsx)(r.code,{children:"True"})]}),(0,t.jsx)(r.hr,{}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"limit"})}),": ",(0,t.jsx)(r.code,{children:"Annotated[int, Ge(ge=0)]"})]}),(0,t.jsx)(r.p,{children:"The number of data entries to return."}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Default:"})," ",(0,t.jsx)(r.code,{children:"100"})]}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Optional:"})," ",(0,t.jsx)(r.code,{children:"True"})]})]})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"results"})}),": ",(0,t.jsx)(r.code,{children:"list[GovernmentTrades]"})]}),"\n",(0,t.jsx)(r.p,{children:"Serializable results."}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"provider"})}),": ",(0,t.jsx)(r.code,{children:"Optional[Literal['fmp']]"})]}),"\n",(0,t.jsx)(r.p,{children:"Provider name."}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"warnings"})}),": ",(0,t.jsx)(r.code,{children:"Optional[list[Warning_]]"})]}),"\n",(0,t.jsx)(r.p,{children:"list of warnings."}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"chart"})}),": ",(0,t.jsx)(r.code,{children:"Optional[Chart]"})]}),"\n",(0,t.jsx)(r.p,{children:"Chart object."}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"extra"})}),": ",(0,t.jsx)(r.code,{children:"dict[str, Any]"})]}),"\n",(0,t.jsx)(r.p,{children:"Extra info."}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsxs)(o.A,{value:"standard",label:"standard",children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"symbol"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"Symbol representing the entity requested in the data."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"date"})}),": ",(0,t.jsx)(r.code,{children:"Union[date, str]"})]}),(0,t.jsx)(r.p,{children:"The date of the data."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"transaction_date"})}),": ",(0,t.jsx)(r.code,{children:"date"})]}),(0,t.jsx)(r.p,{children:"Date of Transaction."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"representative"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"Name of Representative."})]}),(0,t.jsxs)(o.A,{value:"fmp",label:"fmp",children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"symbol"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"Symbol representing the entity requested in the data."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"date"})}),": ",(0,t.jsx)(r.code,{children:"Union[date, str]"})]}),(0,t.jsx)(r.p,{children:"The date of the data."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"transaction_date"})}),": ",(0,t.jsx)(r.code,{children:"date"})]}),(0,t.jsx)(r.p,{children:"Date of Transaction."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"representative"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"Name of Representative."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"chamber"})}),": ",(0,t.jsx)(r.code,{children:"Literal['house', 'senate']"})]}),(0,t.jsx)(r.p,{children:"Government Chamber - House or Senate."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"owner"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"Ownership status (e.g., Spouse, Joint)."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"asset_type"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"Type of asset involved in the transaction."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"asset_description"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"Description of the asset."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"transaction_type"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"Type of transaction (e.g., Sale, Purchase)."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"amount"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"Transaction amount range."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"comment"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"Additional comments on the transaction."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"url"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"Link to the transaction document."})]})]})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>l});n(96540);var t=n(34164);const s={tabItem:"tabItem_Ymn6"};var i=n(74848);function l(e){let{children:r,hidden:n,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,l),hidden:n,children:r})}},94331:(e,r,n)=>{n.d(r,{A:()=>i});n(96540);var t=n(5260),s=n(74848);function i(e){let{title:r}=e;return(0,s.jsx)(t.A,{children:(0,s.jsx)("title",{children:r})})}},18228:(e,r,n)=>{n.d(r,{A:()=>w});var t=n(56347),s=n(23104),i=n(96540),l=n(205),o=n(57485),a=n(31682),d=n(89466);function c(e){return function(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:s}}=e;return{value:r,label:n,attributes:t,default:s}}))}function h(e){const{values:r,children:n}=e;return(0,i.useMemo)((()=>{const e=r??c(n);return function(e){const r=(0,a.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function u(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:n}=e;const s=(0,t.W6)(),l=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,o.aZ)(l),(0,i.useCallback)((e=>{if(!l)return;const r=new URLSearchParams(s.location.search);r.set(l,e),s.replace({...s.location,search:r.toString()})}),[l,s])]}function p(e){const{defaultValue:r,queryString:n=!1,groupId:t}=e,s=h(e),[o,a]=(0,i.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!u({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:s}))),[c,p]=x({queryString:n,groupId:t}),[j,m]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[t,s]=(0,d.Dv)(n);return[t,(0,i.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:t}),f=(()=>{const e=c??j;return u({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{f&&a(f)}),[f]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),p(e),m(e)}),[p,m,s]),tabValues:s}}var j=n(92303),m=n(34164);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=n(74848);function g(e){let{className:r,block:n,selectedValue:i,selectValue:l,tabValues:o}=e;const a=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),{pathname:c}=(0,t.zy)(),h=e=>{const r=e.currentTarget,n=a.indexOf(r),t=o[n].value;t!==i&&(d(r),l(t))},u=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=a.indexOf(e.currentTarget)+1;r=a[n]??a[0];break}case"ArrowLeft":{const n=a.indexOf(e.currentTarget)-1;r=a[n]??a[a.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:o.map((e=>{let{value:r,label:n,attributes:t}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===r?0:-1,"aria-selected":i===r,ref:e=>a.push(e),onKeyDown:u,onClick:h,...t,className:(0,m.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,t?.className,{"border-b-2 pointer-events-none":i===r,"border-b-2 text-[#669dcb] border-[#669dcb]":i===r&&c.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===r&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==r&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===r&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==r&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":i!==r&&c.startsWith("/workspace")}),children:n??r},r)}))})}function v(e){let{lazy:r,children:n,selectedValue:t}=e;if(n=Array.isArray(n)?n:[n],r){const e=n.find((e=>e.props.value===t));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:n.map(((e,r)=>(0,i.cloneElement)(e,{key:r,hidden:e.props.value!==t})))})}function y(e){const r=p(e);return(0,b.jsxs)("div",{className:(0,m.A)("tabs-container",f.tabList),children:[(0,b.jsx)(g,{...e,...r}),(0,b.jsx)(v,{...e,...r})]})}function w(e){const r=(0,j.A)();return(0,b.jsx)(y,{...e},String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>o});var t=n(96540);const s={},i=t.createContext(s);function l(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);