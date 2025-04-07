"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42087],{35253:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>o,default:()=>j,frontMatter:()=>d,metadata:()=>c,toc:()=>x});var s=n(74848),t=n(28453),i=n(94331),l=n(18228),a=n(19365);const d={title:"estr",description:"Euro Short-Term Rate",keywords:["fixedincome","rate","estr"]},o=void 0,c={id:"platform/reference/fixedincome/rate/estr",title:"estr",description:"Euro Short-Term Rate",source:"@site/content/platform/reference/fixedincome/rate/estr.md",sourceDirName:"platform/reference/fixedincome/rate",slug:"/platform/reference/fixedincome/rate/estr",permalink:"/platform/reference/fixedincome/rate/estr",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/fixedincome/rate/estr.md",tags:[],version:"current",frontMatter:{title:"estr",description:"Euro Short-Term Rate",keywords:["fixedincome","rate","estr"]},sidebar:"tutorialSidebar",previous:{title:"effr_forecast",permalink:"/platform/reference/fixedincome/rate/effr_forecast"},next:{title:"iorb",permalink:"/platform/reference/fixedincome/rate/iorb"}},h={},x=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function u(e){const r={code:"code",em:"em",h2:"h2",hr:"hr",p:"p",strong:"strong",...(0,t.R)(),...e.components},{Details:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{title:"fixedincome/rate/estr - Reference | OpenBB Platform Docs"}),"\n","\n",(0,s.jsx)(r.p,{children:"Euro Short-Term Rate."}),"\n",(0,s.jsx)(r.p,{children:"The euro short-term rate (\u20acSTR) reflects the wholesale euro unsecured overnight borrowing costs of banks located in\nthe euro area. The \u20acSTR is published on each TARGET2 business day based on transactions conducted and settled on\nthe previous TARGET2 business day (the reporting date \u201cT\u201d) with a maturity date of T+1 which are deemed to have been\nexecuted at arm's length and thus reflect market rates in an unbiased way."}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsxs)(a.A,{value:"standard",label:"standard",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"start_date"})}),": ",(0,s.jsx)(r.code,{children:"Union[date, str]"})]}),(0,s.jsx)(r.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"end_date"})}),": ",(0,s.jsx)(r.code,{children:"Union[date, str]"})]}),(0,s.jsx)(r.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]})]}),(0,s.jsxs)(a.A,{value:"fred",label:"fred",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"start_date"})}),": ",(0,s.jsx)(r.code,{children:"Union[date, str]"})]}),(0,s.jsx)(r.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"end_date"})}),": ",(0,s.jsx)(r.code,{children:"Union[date, str]"})]}),(0,s.jsx)(r.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"frequency"})}),": ",(0,s.jsx)(r.code,{children:"Literal['a', 'q', 'm', 'w', 'wef', 'weth', 'wew', 'wetu', 'wem', 'wesu', 'wesa', 'bwew', 'bwem']"})]}),(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"Description"}),(0,s.jsxs)(r.p,{children:["Frequency aggregation to convert daily data to lower frequency.",(0,s.jsx)("br",{})]}),(0,s.jsx)("br",{}),(0,s.jsxs)(r.p,{children:["a = Annual",(0,s.jsx)("br",{})]}),(0,s.jsx)("br",{}),(0,s.jsxs)(r.p,{children:["q = Quarterly",(0,s.jsx)("br",{})]}),(0,s.jsx)("br",{}),(0,s.jsxs)(r.p,{children:["m = Monthly",(0,s.jsx)("br",{})]}),(0,s.jsx)("br",{}),(0,s.jsxs)(r.p,{children:["w = Weekly",(0,s.jsx)("br",{})]}),(0,s.jsx)("br",{}),(0,s.jsxs)(r.p,{children:["d = Daily",(0,s.jsx)("br",{})]}),(0,s.jsx)("br",{}),(0,s.jsxs)(r.p,{children:["wef = Weekly, Ending Friday",(0,s.jsx)("br",{})]}),(0,s.jsx)("br",{}),(0,s.jsxs)(r.p,{children:["weth = Weekly, Ending Thursday",(0,s.jsx)("br",{})]}),(0,s.jsx)("br",{}),(0,s.jsxs)(r.p,{children:["wew = Weekly, Ending Wednesday",(0,s.jsx)("br",{})]}),(0,s.jsx)("br",{}),(0,s.jsxs)(r.p,{children:["wetu = Weekly, Ending Tuesday",(0,s.jsx)("br",{})]}),(0,s.jsx)("br",{}),(0,s.jsxs)(r.p,{children:["wem = Weekly, Ending Monday",(0,s.jsx)("br",{})]}),(0,s.jsx)("br",{}),(0,s.jsxs)(r.p,{children:["wesu = Weekly, Ending Sunday",(0,s.jsx)("br",{})]}),(0,s.jsx)("br",{}),(0,s.jsxs)(r.p,{children:["wesa = Weekly, Ending Saturday",(0,s.jsx)("br",{})]}),(0,s.jsx)("br",{}),(0,s.jsxs)(r.p,{children:["bwew = Biweekly, Ending Wednesday",(0,s.jsx)("br",{})]}),(0,s.jsx)("br",{}),(0,s.jsx)(r.p,{children:"bwem = Biweekly, Ending Monday"})]}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"aggregation_method"})}),": ",(0,s.jsx)(r.code,{children:"Literal['avg', 'sum', 'eop']"})]}),(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"Description"}),(0,s.jsxs)(r.p,{children:["A key that indicates the aggregation method used for frequency aggregation.",(0,s.jsx)("br",{})]}),(0,s.jsx)("br",{}),(0,s.jsxs)(r.p,{children:["avg = Average",(0,s.jsx)("br",{})]}),(0,s.jsx)("br",{}),(0,s.jsxs)(r.p,{children:["sum = Sum",(0,s.jsx)("br",{})]}),(0,s.jsx)("br",{}),(0,s.jsx)(r.p,{children:"eop = End of Period"})]}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"transform"})}),": ",(0,s.jsx)(r.code,{children:"Literal['chg', 'ch1', 'pch', 'pc1', 'pca', 'cch', 'cca', 'log']"})]}),(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"Description"}),(0,s.jsxs)(r.p,{children:["Transformation type",(0,s.jsx)("br",{})]}),(0,s.jsx)("br",{}),(0,s.jsxs)(r.p,{children:["None = No transformation",(0,s.jsx)("br",{})]}),(0,s.jsx)("br",{}),(0,s.jsxs)(r.p,{children:["chg = Change",(0,s.jsx)("br",{})]}),(0,s.jsx)("br",{}),(0,s.jsxs)(r.p,{children:["ch1 = Change from Year Ago",(0,s.jsx)("br",{})]}),(0,s.jsx)("br",{}),(0,s.jsxs)(r.p,{children:["pch = Percent Change",(0,s.jsx)("br",{})]}),(0,s.jsx)("br",{}),(0,s.jsxs)(r.p,{children:["pc1 = Percent Change from Year Ago",(0,s.jsx)("br",{})]}),(0,s.jsx)("br",{}),(0,s.jsxs)(r.p,{children:["pca = Compounded Annual Rate of Change",(0,s.jsx)("br",{})]}),(0,s.jsx)("br",{}),(0,s.jsxs)(r.p,{children:["cch = Continuously Compounded Rate of Change",(0,s.jsx)("br",{})]}),(0,s.jsx)("br",{}),(0,s.jsxs)(r.p,{children:["cca = Continuously Compounded Annual Rate of Change",(0,s.jsx)("br",{})]}),(0,s.jsx)("br",{}),(0,s.jsx)(r.p,{children:"log = Natural Log"})]}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]})]})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"results"})}),": ",(0,s.jsx)(r.code,{children:"list[EuroShortTermRate]"})]}),"\n",(0,s.jsx)(r.p,{children:"Serializable results."}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"provider"})}),": ",(0,s.jsx)(r.code,{children:"Optional[Literal['fred']]"})]}),"\n",(0,s.jsx)(r.p,{children:"Provider name."}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"warnings"})}),": ",(0,s.jsx)(r.code,{children:"Optional[list[Warning_]]"})]}),"\n",(0,s.jsx)(r.p,{children:"list of warnings."}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"chart"})}),": ",(0,s.jsx)(r.code,{children:"Optional[Chart]"})]}),"\n",(0,s.jsx)(r.p,{children:"Chart object."}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"extra"})}),": ",(0,s.jsx)(r.code,{children:"dict[str, Any]"})]}),"\n",(0,s.jsx)(r.p,{children:"Extra info."}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsxs)(a.A,{value:"standard",label:"standard",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"date"})}),": ",(0,s.jsx)(r.code,{children:"Union[date, str]"})]}),(0,s.jsx)(r.p,{children:"The date of the data."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"rate"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Volume-weighted trimmed mean rate."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"percentile_25"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Rate at 25th percentile of volume."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"percentile_75"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Rate at 75th percentile of volume."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"volume"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The trading volume. (Millions of \u20acEUR)."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"transactions"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"Number of transactions."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"number_of_banks"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"Number of active banks."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"large_bank_share_of_volume"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The percent of volume attributable to the 5 largest active banks."})]}),(0,s.jsxs)(a.A,{value:"fred",label:"fred",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"date"})}),": ",(0,s.jsx)(r.code,{children:"Union[date, str]"})]}),(0,s.jsx)(r.p,{children:"The date of the data."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"rate"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Volume-weighted trimmed mean rate."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"percentile_25"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Rate at 25th percentile of volume."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"percentile_75"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Rate at 75th percentile of volume."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"volume"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The trading volume. (Millions of \u20acEUR)."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"transactions"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"Number of transactions."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"number_of_banks"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"Number of active banks."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"large_bank_share_of_volume"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The percent of volume attributable to the 5 largest active banks."})]})]})]})}function j(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>l});n(96540);var s=n(34164);const t={tabItem:"tabItem_Ymn6"};var i=n(74848);function l(e){let{children:r,hidden:n,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,l),hidden:n,children:r})}},94331:(e,r,n)=>{n.d(r,{A:()=>i});n(96540);var s=n(5260),t=n(74848);function i(e){let{title:r}=e;return(0,t.jsx)(s.A,{children:(0,t.jsx)("title",{children:r})})}},18228:(e,r,n)=>{n.d(r,{A:()=>w});var s=n(56347),t=n(23104),i=n(96540),l=n(205),a=n(57485),d=n(31682),o=n(89466);function c(e){return function(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:n,attributes:s,default:t}}=e;return{value:r,label:n,attributes:s,default:t}}))}function h(e){const{values:r,children:n}=e;return(0,i.useMemo)((()=>{const e=r??c(n);return function(e){const r=(0,d.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function x(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function u(e){let{queryString:r=!1,groupId:n}=e;const t=(0,s.W6)(),l=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,a.aZ)(l),(0,i.useCallback)((e=>{if(!l)return;const r=new URLSearchParams(t.location.search);r.set(l,e),t.replace({...t.location,search:r.toString()})}),[l,t])]}function j(e){const{defaultValue:r,queryString:n=!1,groupId:s}=e,t=h(e),[a,d]=(0,i.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!x({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:t}))),[c,j]=u({queryString:n,groupId:s}),[p,f]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,t]=(0,o.Dv)(n);return[s,(0,i.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:s}),b=(()=>{const e=c??p;return x({value:e,tabValues:t})?e:null})();(0,l.A)((()=>{b&&d(b)}),[b]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!x({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);d(e),j(e),f(e)}),[j,f,t]),tabValues:t}}var p=n(92303),f=n(34164);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var m=n(74848);function g(e){let{className:r,block:n,selectedValue:i,selectValue:l,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.a_)(),{pathname:c}=(0,s.zy)(),h=e=>{const r=e.currentTarget,n=d.indexOf(r),s=a[n].value;s!==i&&(o(r),l(s))},x=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;r=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;r=d[n]??d[d.length-1];break}}r?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,f.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:a.map((e=>{let{value:r,label:n,attributes:s}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:i===r?0:-1,"aria-selected":i===r,ref:e=>d.push(e),onKeyDown:x,onClick:h,...s,className:(0,f.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,s?.className,{"border-b-2 pointer-events-none":i===r,"border-b-2 text-[#669dcb] border-[#669dcb]":i===r&&c.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===r&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==r&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===r&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==r&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":i!==r&&c.startsWith("/workspace")}),children:n??r},r)}))})}function v(e){let{lazy:r,children:n,selectedValue:s}=e;if(n=Array.isArray(n)?n:[n],r){const e=n.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:n.map(((e,r)=>(0,i.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function y(e){const r=j(e);return(0,m.jsxs)("div",{className:(0,f.A)("tabs-container",b.tabList),children:[(0,m.jsx)(g,{...e,...r}),(0,m.jsx)(v,{...e,...r})]})}function w(e){const r=(0,p.A)();return(0,m.jsx)(y,{...e},String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>a});var s=n(96540);const t={},i=s.createContext(t);function l(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);