"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75656],{94797:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var t=n(74848),s=n(28453),i=n(94331),a=n(18228),l=n(19365);const c={title:"filing_headers",description:"Download the index headers, and cover page if available, for any SEC filing",keywords:["regulators","sec","filing_headers"]},o=void 0,d={id:"platform/reference/regulators/sec/filing_headers",title:"filing_headers",description:"Download the index headers, and cover page if available, for any SEC filing",source:"@site/content/platform/reference/regulators/sec/filing_headers.md",sourceDirName:"platform/reference/regulators/sec",slug:"/platform/reference/regulators/sec/filing_headers",permalink:"/platform/reference/regulators/sec/filing_headers",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/regulators/sec/filing_headers.md",tags:[],version:"current",frontMatter:{title:"filing_headers",description:"Download the index headers, and cover page if available, for any SEC filing",keywords:["regulators","sec","filing_headers"]},sidebar:"tutorialSidebar",previous:{title:"cik_map",permalink:"/platform/reference/regulators/sec/cik_map"},next:{title:"htm_file",permalink:"/platform/reference/regulators/sec/htm_file"}},h={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function x(e){const r={a:"a",code:"code",em:"em",h2:"h2",hr:"hr",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.A,{title:"regulators/sec/filing_headers - Reference | OpenBB Platform Docs"}),"\n","\n",(0,t.jsx)(r.p,{children:"Download the index headers, and cover page if available, for any SEC filing."}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(l.A,{value:"standard",label:"standard"}),(0,t.jsxs)(l.A,{value:"sec",label:"sec",children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"url"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsxs)(r.p,{children:["URL for the SEC filing. The specific URL is not directly used or downloaded, but is used to generate the base URL for the filing. e.g. ",(0,t.jsx)(r.a,{href:"https://www.sec.gov/Archives/edgar/data/317540/000031754024000045/coke-20240731.htm",children:"https://www.sec.gov/Archives/edgar/data/317540/000031754024000045/coke-20240731.htm"})," and ",(0,t.jsx)(r.a,{href:"https://www.sec.gov/Archives/edgar/data/317540/000031754024000045/",children:"https://www.sec.gov/Archives/edgar/data/317540/000031754024000045/"})," are both valid URLs for the same filing."]}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Optional:"})," ",(0,t.jsx)(r.code,{children:"True"})]}),(0,t.jsx)(r.hr,{}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"use_cache"})}),": ",(0,t.jsx)(r.code,{children:"bool"})]}),(0,t.jsx)(r.p,{children:"Use cache for the index headers and cover page. Default is True."}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Default:"})," ",(0,t.jsx)(r.code,{children:"True"})]}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Optional:"})," ",(0,t.jsx)(r.code,{children:"True"})]})]})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"results"})}),": ",(0,t.jsx)(r.code,{children:"list[SecFiling]"})]}),"\n",(0,t.jsx)(r.p,{children:"Serializable results."}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"provider"})}),": ",(0,t.jsx)(r.code,{children:"Optional[Literal['sec']]"})]}),"\n",(0,t.jsx)(r.p,{children:"Provider name."}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"warnings"})}),": ",(0,t.jsx)(r.code,{children:"Optional[list[Warning_]]"})]}),"\n",(0,t.jsx)(r.p,{children:"list of warnings."}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"chart"})}),": ",(0,t.jsx)(r.code,{children:"Optional[Chart]"})]}),"\n",(0,t.jsx)(r.p,{children:"Chart object."}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"extra"})}),": ",(0,t.jsx)(r.code,{children:"dict[str, Any]"})]}),"\n",(0,t.jsx)(r.p,{children:"Extra info."}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(l.A,{value:"standard",label:"standard"}),(0,t.jsxs)(l.A,{value:"sec",label:"sec",children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"base_url"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"Base URL of the filing."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"name"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"Name of the entity filing."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"cik"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"Central Index Key."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"trading_symbols"})}),": ",(0,t.jsx)(r.code,{children:"list"})]}),(0,t.jsx)(r.p,{children:"Trading symbols, if available."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"sic"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"Standard Industrial Classification."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"sic_organization_name"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"SIC Organization Name."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"filing_date"})}),": ",(0,t.jsx)(r.code,{children:"date"})]}),(0,t.jsx)(r.p,{children:"Filing date."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"period_ending"})}),": ",(0,t.jsx)(r.code,{children:"date"})]}),(0,t.jsx)(r.p,{children:"Date of the ending period for the filing, if available."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"fiscal_year_end"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"Fiscal year end of the entity, if available. Format: MM-DD"}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"document_type"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"Specific SEC filing type."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"has_cover_page"})}),": ",(0,t.jsx)(r.code,{children:"bool"})]}),(0,t.jsx)(r.p,{children:"True if the filing has a cover page."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"description"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"Description of attached content, mostly applicable to 8-K filings."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"cover_page"})}),": ",(0,t.jsx)(r.code,{children:"dict"})]}),(0,t.jsx)(r.p,{children:"Cover page information, if available."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"document_urls"})}),": ",(0,t.jsx)(r.code,{children:"list"})]}),(0,t.jsx)(r.p,{children:"list of files associated with the filing."})]})]})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>a});n(96540);var t=n(34164);const s={tabItem:"tabItem_Ymn6"};var i=n(74848);function a(e){let{children:r,hidden:n,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,a),hidden:n,children:r})}},94331:(e,r,n)=>{n.d(r,{A:()=>i});n(96540);var t=n(5260),s=n(74848);function i(e){let{title:r}=e;return(0,s.jsx)(t.A,{children:(0,s.jsx)("title",{children:r})})}},18228:(e,r,n)=>{n.d(r,{A:()=>w});var t=n(56347),s=n(23104),i=n(96540),a=n(205),l=n(57485),c=n(31682),o=n(89466);function d(e){return function(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:s}}=e;return{value:r,label:n,attributes:t,default:s}}))}function h(e){const{values:r,children:n}=e;return(0,i.useMemo)((()=>{const e=r??d(n);return function(e){const r=(0,c.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function u(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:n}=e;const s=(0,t.W6)(),a=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,l.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(s.location.search);r.set(a,e),s.replace({...s.location,search:r.toString()})}),[a,s])]}function p(e){const{defaultValue:r,queryString:n=!1,groupId:t}=e,s=h(e),[l,c]=(0,i.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!u({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:s}))),[d,p]=x({queryString:n,groupId:t}),[f,j]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[t,s]=(0,o.Dv)(n);return[t,(0,i.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:t}),g=(()=>{const e=d??f;return u({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{g&&c(g)}),[g]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),p(e),j(e)}),[p,j,s]),tabValues:s}}var f=n(92303),j=n(34164);const g={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=n(74848);function m(e){let{className:r,block:n,selectedValue:i,selectValue:a,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),{pathname:d}=(0,t.zy)(),h=e=>{const r=e.currentTarget,n=c.indexOf(r),t=l[n].value;t!==i&&(o(r),a(t))},u=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;r=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;r=c[n]??c[c.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,j.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:r,label:n,attributes:t}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===r?0:-1,"aria-selected":i===r,ref:e=>c.push(e),onKeyDown:u,onClick:h,...t,className:(0,j.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",g.tabItem,t?.className,{"border-b-2 pointer-events-none":i===r,"border-b-2 text-[#669dcb] border-[#669dcb]":i===r&&d.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===r&&d.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==r&&d.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===r&&d.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==r&&d.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":i!==r&&d.startsWith("/workspace")}),children:n??r},r)}))})}function v(e){let{lazy:r,children:n,selectedValue:t}=e;if(n=Array.isArray(n)?n:[n],r){const e=n.find((e=>e.props.value===t));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:n.map(((e,r)=>(0,i.cloneElement)(e,{key:r,hidden:e.props.value!==t})))})}function y(e){const r=p(e);return(0,b.jsxs)("div",{className:(0,j.A)("tabs-container",g.tabList),children:[(0,b.jsx)(m,{...e,...r}),(0,b.jsx)(v,{...e,...r})]})}function w(e){const r=(0,f.A)();return(0,b.jsx)(y,{...e},String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>l});var t=n(96540);const s={},i=t.createContext(s);function a(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);