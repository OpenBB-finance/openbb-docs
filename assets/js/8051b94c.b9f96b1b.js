"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83285],{58419:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>j,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var n=t(74848),r=t(28453),i=t(18228),d=t(19365);const l={title:"Analyst Estimates",description:"Get historical analyst estimates for earnings and revenue"},a=void 0,c={id:"platform/data_models/AnalystEstimates",title:"Analyst Estimates",description:"Get historical analyst estimates for earnings and revenue",source:"@site/content/platform/data_models/AnalystEstimates.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/AnalystEstimates",permalink:"/platform/data_models/AnalystEstimates",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/data_models/AnalystEstimates.md",tags:[],version:"current",frontMatter:{title:"Analyst Estimates",description:"Get historical analyst estimates for earnings and revenue"},sidebar:"tutorialSidebar",previous:{title:"Ameribor",permalink:"/platform/data_models/Ameribor"},next:{title:"Analyst Search",permalink:"/platform/data_models/AnalystSearch"}},o={},h=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const s={code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,n.jsx)(s.h3,{id:"class-names",children:"Class names"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Model name"}),(0,n.jsx)(s.th,{children:"Parameters class"}),(0,n.jsx)(s.th,{children:"Data class"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"AnalystEstimates"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"AnalystEstimatesQueryParams"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"AnalystEstimatesData"})})]})})]}),"\n",(0,n.jsx)(s.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"from openbb_core.provider.standard_models.analyst_estimates import (\nAnalystEstimatesData,\nAnalystEstimatesQueryParams,\n)\n"})}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsxs)(d.A,{value:"standard",label:"standard",children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"symbol"})}),": ",(0,n.jsx)(s.code,{children:"Union[str, list[str]]"})]}),(0,n.jsx)(s.p,{children:"Symbol to get data for. Multiple items allowed for provider(s): fmp."}),(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.em,{children:"Optional:"})," ",(0,n.jsx)(s.code,{children:"False"})]})]}),(0,n.jsxs)(d.A,{value:"fmp",label:"fmp",children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"symbol"})}),": ",(0,n.jsx)(s.code,{children:"Union[str, list[str]]"})]}),(0,n.jsx)(s.p,{children:"Symbol to get data for. Multiple items allowed for provider(s): fmp."}),(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.em,{children:"Optional:"})," ",(0,n.jsx)(s.code,{children:"False"})]}),(0,n.jsx)(s.hr,{}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"period"})}),": ",(0,n.jsx)(s.code,{children:"Literal['quarter', 'annual']"})]}),(0,n.jsx)(s.p,{children:"Time period of the data to return."}),(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.em,{children:"Default:"})," ",(0,n.jsx)(s.code,{children:"annual"})]}),(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.em,{children:"Optional:"})," ",(0,n.jsx)(s.code,{children:"True"})]}),(0,n.jsx)(s.hr,{}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"limit"})}),": ",(0,n.jsx)(s.code,{children:"int"})]}),(0,n.jsx)(s.p,{children:"The number of data entries to return."}),(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.em,{children:"Optional:"})," ",(0,n.jsx)(s.code,{children:"True"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsxs)(d.A,{value:"standard",label:"standard",children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"symbol"})}),": ",(0,n.jsx)(s.code,{children:"str"})]}),(0,n.jsx)(s.p,{children:"Symbol representing the entity requested in the data."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"date"})}),": ",(0,n.jsx)(s.code,{children:"Union[date, str]"})]}),(0,n.jsx)(s.p,{children:"The date of the data."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"estimated_revenue_low"})}),": ",(0,n.jsx)(s.code,{children:"int"})]}),(0,n.jsx)(s.p,{children:"Estimated revenue low."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"estimated_revenue_high"})}),": ",(0,n.jsx)(s.code,{children:"int"})]}),(0,n.jsx)(s.p,{children:"Estimated revenue high."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"estimated_revenue_avg"})}),": ",(0,n.jsx)(s.code,{children:"int"})]}),(0,n.jsx)(s.p,{children:"Estimated revenue average."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"estimated_sga_expense_low"})}),": ",(0,n.jsx)(s.code,{children:"int"})]}),(0,n.jsx)(s.p,{children:"Estimated SGA expense low."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"estimated_sga_expense_high"})}),": ",(0,n.jsx)(s.code,{children:"int"})]}),(0,n.jsx)(s.p,{children:"Estimated SGA expense high."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"estimated_sga_expense_avg"})}),": ",(0,n.jsx)(s.code,{children:"int"})]}),(0,n.jsx)(s.p,{children:"Estimated SGA expense average."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"estimated_ebitda_low"})}),": ",(0,n.jsx)(s.code,{children:"int"})]}),(0,n.jsx)(s.p,{children:"Estimated EBITDA low."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"estimated_ebitda_high"})}),": ",(0,n.jsx)(s.code,{children:"int"})]}),(0,n.jsx)(s.p,{children:"Estimated EBITDA high."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"estimated_ebitda_avg"})}),": ",(0,n.jsx)(s.code,{children:"int"})]}),(0,n.jsx)(s.p,{children:"Estimated EBITDA average."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"estimated_ebit_low"})}),": ",(0,n.jsx)(s.code,{children:"int"})]}),(0,n.jsx)(s.p,{children:"Estimated EBIT low."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"estimated_ebit_high"})}),": ",(0,n.jsx)(s.code,{children:"int"})]}),(0,n.jsx)(s.p,{children:"Estimated EBIT high."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"estimated_ebit_avg"})}),": ",(0,n.jsx)(s.code,{children:"int"})]}),(0,n.jsx)(s.p,{children:"Estimated EBIT average."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"estimated_net_income_low"})}),": ",(0,n.jsx)(s.code,{children:"int"})]}),(0,n.jsx)(s.p,{children:"Estimated net income low."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"estimated_net_income_high"})}),": ",(0,n.jsx)(s.code,{children:"int"})]}),(0,n.jsx)(s.p,{children:"Estimated net income high."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"estimated_net_income_avg"})}),": ",(0,n.jsx)(s.code,{children:"int"})]}),(0,n.jsx)(s.p,{children:"Estimated net income average."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"estimated_eps_avg"})}),": ",(0,n.jsx)(s.code,{children:"float"})]}),(0,n.jsx)(s.p,{children:"Estimated EPS average."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"estimated_eps_high"})}),": ",(0,n.jsx)(s.code,{children:"float"})]}),(0,n.jsx)(s.p,{children:"Estimated EPS high."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"estimated_eps_low"})}),": ",(0,n.jsx)(s.code,{children:"float"})]}),(0,n.jsx)(s.p,{children:"Estimated EPS low."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"number_analyst_estimated_revenue"})}),": ",(0,n.jsx)(s.code,{children:"int"})]}),(0,n.jsx)(s.p,{children:"Number of analysts who estimated revenue."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"number_analysts_estimated_eps"})}),": ",(0,n.jsx)(s.code,{children:"int"})]}),(0,n.jsx)(s.p,{children:"Number of analysts who estimated EPS."})]}),(0,n.jsxs)(d.A,{value:"fmp",label:"fmp",children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"symbol"})}),": ",(0,n.jsx)(s.code,{children:"str"})]}),(0,n.jsx)(s.p,{children:"Symbol representing the entity requested in the data."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"date"})}),": ",(0,n.jsx)(s.code,{children:"Union[date, str]"})]}),(0,n.jsx)(s.p,{children:"The date of the data."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"estimated_revenue_low"})}),": ",(0,n.jsx)(s.code,{children:"int"})]}),(0,n.jsx)(s.p,{children:"Estimated revenue low."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"estimated_revenue_high"})}),": ",(0,n.jsx)(s.code,{children:"int"})]}),(0,n.jsx)(s.p,{children:"Estimated revenue high."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"estimated_revenue_avg"})}),": ",(0,n.jsx)(s.code,{children:"int"})]}),(0,n.jsx)(s.p,{children:"Estimated revenue average."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"estimated_sga_expense_low"})}),": ",(0,n.jsx)(s.code,{children:"int"})]}),(0,n.jsx)(s.p,{children:"Estimated SGA expense low."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"estimated_sga_expense_high"})}),": ",(0,n.jsx)(s.code,{children:"int"})]}),(0,n.jsx)(s.p,{children:"Estimated SGA expense high."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"estimated_sga_expense_avg"})}),": ",(0,n.jsx)(s.code,{children:"int"})]}),(0,n.jsx)(s.p,{children:"Estimated SGA expense average."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"estimated_ebitda_low"})}),": ",(0,n.jsx)(s.code,{children:"int"})]}),(0,n.jsx)(s.p,{children:"Estimated EBITDA low."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"estimated_ebitda_high"})}),": ",(0,n.jsx)(s.code,{children:"int"})]}),(0,n.jsx)(s.p,{children:"Estimated EBITDA high."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"estimated_ebitda_avg"})}),": ",(0,n.jsx)(s.code,{children:"int"})]}),(0,n.jsx)(s.p,{children:"Estimated EBITDA average."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"estimated_ebit_low"})}),": ",(0,n.jsx)(s.code,{children:"int"})]}),(0,n.jsx)(s.p,{children:"Estimated EBIT low."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"estimated_ebit_high"})}),": ",(0,n.jsx)(s.code,{children:"int"})]}),(0,n.jsx)(s.p,{children:"Estimated EBIT high."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"estimated_ebit_avg"})}),": ",(0,n.jsx)(s.code,{children:"int"})]}),(0,n.jsx)(s.p,{children:"Estimated EBIT average."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"estimated_net_income_low"})}),": ",(0,n.jsx)(s.code,{children:"int"})]}),(0,n.jsx)(s.p,{children:"Estimated net income low."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"estimated_net_income_high"})}),": ",(0,n.jsx)(s.code,{children:"int"})]}),(0,n.jsx)(s.p,{children:"Estimated net income high."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"estimated_net_income_avg"})}),": ",(0,n.jsx)(s.code,{children:"int"})]}),(0,n.jsx)(s.p,{children:"Estimated net income average."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"estimated_eps_avg"})}),": ",(0,n.jsx)(s.code,{children:"float"})]}),(0,n.jsx)(s.p,{children:"Estimated EPS average."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"estimated_eps_high"})}),": ",(0,n.jsx)(s.code,{children:"float"})]}),(0,n.jsx)(s.p,{children:"Estimated EPS high."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"estimated_eps_low"})}),": ",(0,n.jsx)(s.code,{children:"float"})]}),(0,n.jsx)(s.p,{children:"Estimated EPS low."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"number_analyst_estimated_revenue"})}),": ",(0,n.jsx)(s.code,{children:"int"})]}),(0,n.jsx)(s.p,{children:"Number of analysts who estimated revenue."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"number_analysts_estimated_eps"})}),": ",(0,n.jsx)(s.code,{children:"int"})]}),(0,n.jsx)(s.p,{children:"Number of analysts who estimated EPS."})]})]})]})}function j(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,s,t)=>{t.d(s,{A:()=>d});t(96540);var n=t(34164);const r={tabItem:"tabItem_Ymn6"};var i=t(74848);function d(e){let{children:s,hidden:t,className:d}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,d),hidden:t,children:s})}},18228:(e,s,t)=>{t.d(s,{A:()=>E});var n=t(56347),r=t(23104),i=t(96540),d=t(205),l=t(57485),a=t(31682),c=t(89466);function o(e){return function(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:s,label:t,attributes:n,default:r}}=e;return{value:s,label:t,attributes:n,default:r}}))}function h(e){const{values:s,children:t}=e;return(0,i.useMemo)((()=>{const e=s??o(t);return function(e){const s=(0,a.X)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,t])}function x(e){let{value:s,tabValues:t}=e;return t.some((e=>e.value===s))}function j(e){let{queryString:s=!1,groupId:t}=e;const r=(0,n.W6)(),d=function(e){let{queryString:s=!1,groupId:t}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:s,groupId:t});return[(0,l.aZ)(d),(0,i.useCallback)((e=>{if(!d)return;const s=new URLSearchParams(r.location.search);s.set(d,e),r.replace({...r.location,search:s.toString()})}),[d,r])]}function m(e){const{defaultValue:s,queryString:t=!1,groupId:n}=e,r=h(e),[l,a]=(0,i.useState)((()=>function(e){let{defaultValue:s,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!x({value:s,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:s,tabValues:r}))),[o,m]=j({queryString:t,groupId:n}),[u,p]=function(e){let{groupId:s}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(s),[n,r]=(0,c.Dv)(t);return[n,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:n}),g=(()=>{const e=o??u;return x({value:e,tabValues:r})?e:null})();(0,d.A)((()=>{g&&a(g)}),[g]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!x({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);a(e),m(e),p(e)}),[m,p,r]),tabValues:r}}var u=t(92303),p=t(34164);const g={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=t(74848);function f(e){let{className:s,block:t,selectedValue:i,selectValue:d,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),{pathname:o}=(0,n.zy)(),h=e=>{const s=e.currentTarget,t=a.indexOf(s),n=l[t].value;n!==i&&(c(s),d(n))},x=e=>{let s=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;s=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;s=a[t]??a[a.length-1];break}}s?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:s,label:t,attributes:n}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===s?0:-1,"aria-selected":i===s,ref:e=>a.push(e),onKeyDown:x,onClick:h,...n,className:(0,p.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",g.tabItem,n?.className,{"border-b-2 pointer-events-none":i===s,"border-b-2 text-[#669dcb] border-[#669dcb]":i===s&&o.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===s&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==s&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===s&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==s&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":i!==s&&o.startsWith("/workspace")}),children:t??s},s)}))})}function v(e){let{lazy:s,children:t,selectedValue:n}=e;if(t=Array.isArray(t)?t:[t],s){const e=t.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:t.map(((e,s)=>(0,i.cloneElement)(e,{key:s,hidden:e.props.value!==n})))})}function _(e){const s=m(e);return(0,b.jsxs)("div",{className:(0,p.A)("tabs-container",g.tabList),children:[(0,b.jsx)(f,{...e,...s}),(0,b.jsx)(v,{...e,...s})]})}function E(e){const s=(0,u.A)();return(0,b.jsx)(_,{...e},String(s))}},28453:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>l});var n=t(96540);const r={},i=n.createContext(r);function d(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);