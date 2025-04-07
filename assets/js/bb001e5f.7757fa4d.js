"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30356],{60574:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var n=t(74848),s=t(28453),a=t(94331),i=t(18228),l=t(19365);const o={title:"sonia",description:"Sterling Overnight Index Average",keywords:["fixedincome","rate","sonia"]},d=void 0,c={id:"platform/reference/fixedincome/rate/sonia",title:"sonia",description:"Sterling Overnight Index Average",source:"@site/content/platform/reference/fixedincome/rate/sonia.md",sourceDirName:"platform/reference/fixedincome/rate",slug:"/platform/reference/fixedincome/rate/sonia",permalink:"/platform/reference/fixedincome/rate/sonia",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/fixedincome/rate/sonia.md",tags:[],version:"current",frontMatter:{title:"sonia",description:"Sterling Overnight Index Average",keywords:["fixedincome","rate","sonia"]},sidebar:"tutorialSidebar",previous:{title:"sofr",permalink:"/platform/reference/fixedincome/rate/sofr"},next:{title:"Spreads",permalink:"/platform/reference/fixedincome/spreads/"}},u={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function x(e){const r={code:"code",em:"em",h2:"h2",hr:"hr",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{title:"fixedincome/rate/sonia - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(r.p,{children:"Sterling Overnight Index Average."}),"\n",(0,n.jsx)(r.p,{children:"SONIA (Sterling Overnight Index Average) is an important interest rate benchmark. SONIA is based on actual\ntransactions and reflects the average of the interest rates that banks pay to borrow sterling overnight from other\nfinancial institutions and other institutional investors."}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsxs)(l.A,{value:"standard",label:"standard",children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"start_date"})}),": ",(0,n.jsx)(r.code,{children:"Union[date, str]"})]}),(0,n.jsx)(r.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Optional:"})," ",(0,n.jsx)(r.code,{children:"True"})]}),(0,n.jsx)(r.hr,{}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"end_date"})}),": ",(0,n.jsx)(r.code,{children:"Union[date, str]"})]}),(0,n.jsx)(r.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Optional:"})," ",(0,n.jsx)(r.code,{children:"True"})]})]}),(0,n.jsxs)(l.A,{value:"fred",label:"fred",children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"start_date"})}),": ",(0,n.jsx)(r.code,{children:"Union[date, str]"})]}),(0,n.jsx)(r.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Optional:"})," ",(0,n.jsx)(r.code,{children:"True"})]}),(0,n.jsx)(r.hr,{}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"end_date"})}),": ",(0,n.jsx)(r.code,{children:"Union[date, str]"})]}),(0,n.jsx)(r.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Optional:"})," ",(0,n.jsx)(r.code,{children:"True"})]}),(0,n.jsx)(r.hr,{}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"parameter"})}),": ",(0,n.jsx)(r.code,{children:"Literal['rate', 'index', '10th_percentile', '25th_percentile', '75th_percentile', '90th_percentile', 'total_nominal_value']"})]}),(0,n.jsx)(r.p,{children:"Period of SONIA rate."}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Default:"})," ",(0,n.jsx)(r.code,{children:"rate"})]}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Optional:"})," ",(0,n.jsx)(r.code,{children:"True"})]})]})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"results"})}),": ",(0,n.jsx)(r.code,{children:"list[SONIA]"})]}),"\n",(0,n.jsx)(r.p,{children:"Serializable results."}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"provider"})}),": ",(0,n.jsx)(r.code,{children:"Optional[Literal['fred']]"})]}),"\n",(0,n.jsx)(r.p,{children:"Provider name."}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"warnings"})}),": ",(0,n.jsx)(r.code,{children:"Optional[list[Warning_]]"})]}),"\n",(0,n.jsx)(r.p,{children:"list of warnings."}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"chart"})}),": ",(0,n.jsx)(r.code,{children:"Optional[Chart]"})]}),"\n",(0,n.jsx)(r.p,{children:"Chart object."}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"extra"})}),": ",(0,n.jsx)(r.code,{children:"dict[str, Any]"})]}),"\n",(0,n.jsx)(r.p,{children:"Extra info."}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsxs)(l.A,{value:"standard",label:"standard",children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"date"})}),": ",(0,n.jsx)(r.code,{children:"Union[date, str]"})]}),(0,n.jsx)(r.p,{children:"The date of the data."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"rate"})}),": ",(0,n.jsx)(r.code,{children:"float"})]}),(0,n.jsx)(r.p,{children:"SONIA rate."})]}),(0,n.jsxs)(l.A,{value:"fred",label:"fred",children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"date"})}),": ",(0,n.jsx)(r.code,{children:"Union[date, str]"})]}),(0,n.jsx)(r.p,{children:"The date of the data."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"rate"})}),": ",(0,n.jsx)(r.code,{children:"float"})]}),(0,n.jsx)(r.p,{children:"SONIA rate."})]})]})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var n=t(34164);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function i(e){let{children:r,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,i),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>a});t(96540);var n=t(5260),s=t(74848);function a(e){let{title:r}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>A});var n=t(56347),s=t(23104),a=t(96540),i=t(205),l=t(57485),o=t(31682),d=t(89466);function c(e){return function(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}function u(e){const{values:r,children:t}=e;return(0,a.useMemo)((()=>{const e=r??c(t);return function(e){const r=(0,o.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function h(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:t}=e;const s=(0,n.W6)(),i=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(s.location.search);r.set(i,e),s.replace({...s.location,search:r.toString()})}),[i,s])]}function p(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,s=u(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:s}))),[c,p]=x({queryString:t,groupId:n}),[f,j]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,s]=(0,d.Dv)(t);return[n,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:n}),m=(()=>{const e=c??f;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{m&&o(m)}),[m]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),j(e)}),[p,j,s]),tabValues:s}}var f=t(92303),j=t(34164);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=t(74848);function v(e){let{className:r,block:t,selectedValue:a,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),{pathname:c}=(0,n.zy)(),u=e=>{const r=e.currentTarget,t=o.indexOf(r),n=l[t].value;n!==a&&(d(r),i(n))},h=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;r=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;r=o[t]??o[o.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,j.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:r,label:t,attributes:n}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>o.push(e),onKeyDown:h,onClick:u,...n,className:(0,j.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,n?.className,{"border-b-2 pointer-events-none":a===r,"border-b-2 text-[#669dcb] border-[#669dcb]":a===r&&c.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":a===r&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":a!==r&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":a===r&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":a!==r&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":a!==r&&c.startsWith("/workspace")}),children:t??r},r)}))})}function g(e){let{lazy:r,children:t,selectedValue:n}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function y(e){const r=p(e);return(0,b.jsxs)("div",{className:(0,j.A)("tabs-container",m.tabList),children:[(0,b.jsx)(v,{...e,...r}),(0,b.jsx)(g,{...e,...r})]})}function A(e){const r=(0,f.A)();return(0,b.jsx)(y,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>l});var n=t(96540);const s={},a=n.createContext(s);function i(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);