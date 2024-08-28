"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20255],{36171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>x,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var r=n(74848),i=n(28453),d=n(18228),a=n(19365);const s={title:"Survey Of Economic Conditions Chicago",description:"Get The Survey Of Economic Conditions For The Chicago Region"},o=void 0,l={id:"platform/data_models/SurveyOfEconomicConditionsChicago",title:"Survey Of Economic Conditions Chicago",description:"Get The Survey Of Economic Conditions For The Chicago Region",source:"@site/content/platform/data_models/SurveyOfEconomicConditionsChicago.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/SurveyOfEconomicConditionsChicago",permalink:"/platform/data_models/SurveyOfEconomicConditionsChicago",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/data_models/SurveyOfEconomicConditionsChicago.md",tags:[],version:"current",frontMatter:{title:"Survey Of Economic Conditions Chicago",description:"Get The Survey Of Economic Conditions For The Chicago Region"},sidebar:"tutorialSidebar",previous:{title:"Spot Rate",permalink:"/platform/data_models/SpotRate"},next:{title:"Symbol Map",permalink:"/platform/data_models/SymbolMap"}},c={},h=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function u(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,r.jsx)(t.h3,{id:"class-names",children:"Class names"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Model name"}),(0,r.jsx)(t.th,{children:"Parameters class"}),(0,r.jsx)(t.th,{children:"Data class"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"SurveyOfEconomicConditionsChicago"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"SurveyOfEconomicConditionsChicagoQueryParams"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"SurveyOfEconomicConditionsChicagoData"})})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from openbb_core.provider.standard_models.survey_of_economic_conditions_chicago import (\nSurveyOfEconomicConditionsChicagoData,\nSurveyOfEconomicConditionsChicagoQueryParams,\n)\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(a.A,{value:"standard",label:"standard",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"start_date"}),(0,r.jsx)(t.td,{children:"Union[date, str]"}),(0,r.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"end_date"}),(0,r.jsx)(t.td,{children:"Union[date, str]"}),(0,r.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]})]})]})}),(0,r.jsxs)(a.A,{value:"fred",label:"fred",children:[(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"start_date"}),(0,r.jsx)(t.td,{children:"Union[date, str]"}),(0,r.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"end_date"}),(0,r.jsx)(t.td,{children:"Union[date, str]"}),(0,r.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"frequency"}),(0,r.jsx)(t.td,{children:"Literal['annual', 'quarter']"}),(0,r.jsx)(t.td,{children:"Frequency aggregation to convert monthly data to lower frequency. None is monthly."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"aggregation_method"}),(0,r.jsx)(t.td,{children:"Literal['avg', 'sum', 'eop']"}),(0,r.jsx)(t.td,{children:"A key that indicates the aggregation method used for frequency aggregation."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]})]})]}),(0,r.jsx)(t.p,{children:"avg = Average"}),(0,r.jsx)(t.p,{children:"sum = Sum"}),(0,r.jsx)(t.p,{children:"eop = End of Period | None | True | ['avg', 'sum', 'eop'] |\n| transform | Literal['chg', 'ch1', 'pch', 'pc1', 'pca', 'cch', 'cca', 'log'] | Transformation type"}),(0,r.jsx)(t.p,{children:"None = No transformation"}),(0,r.jsx)(t.p,{children:"chg = Change"}),(0,r.jsx)(t.p,{children:"ch1 = Change from Year Ago"}),(0,r.jsx)(t.p,{children:"pch = Percent Change"}),(0,r.jsx)(t.p,{children:"pc1 = Percent Change from Year Ago"}),(0,r.jsx)(t.p,{children:"pca = Compounded Annual Rate of Change"}),(0,r.jsx)(t.p,{children:"cch = Continuously Compounded Rate of Change"}),(0,r.jsx)(t.p,{children:"cca = Continuously Compounded Annual Rate of Change"}),(0,r.jsx)(t.p,{children:"log = Natural Log | None | True | ['chg', 'ch1', 'pch', 'pc1', 'pca', 'cch', 'cca', 'log'] |"})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(a.A,{value:"standard",label:"standard",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"Union[date, str]"}),(0,r.jsx)(t.td,{children:"The date of the data."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"activity_index"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Activity Index."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"one_year_outlook"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"One Year Outlook Index."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"manufacturing_activity"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Manufacturing Activity Index."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"non_manufacturing_activity"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Non-Manufacturing Activity Index."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"capital_expenditures_expectations"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Capital Expenditures Expectations Index."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hiring_expectations"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Hiring Expectations Index."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"current_hiring"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Current Hiring Index."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"labor_costs"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Labor Costs Index."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"non_labor_costs"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Non-Labor Costs Index."})]})]})]})}),(0,r.jsx)(a.A,{value:"fred",label:"fred",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"Union[date, str]"}),(0,r.jsx)(t.td,{children:"The date of the data."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"activity_index"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Activity Index."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"one_year_outlook"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"One Year Outlook Index."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"manufacturing_activity"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Manufacturing Activity Index."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"non_manufacturing_activity"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Non-Manufacturing Activity Index."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"capital_expenditures_expectations"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Capital Expenditures Expectations Index."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hiring_expectations"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Hiring Expectations Index."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"current_hiring"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Current Hiring Index."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"labor_costs"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Labor Costs Index."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"non_labor_costs"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Non-Labor Costs Index."})]})]})]})})]})]})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(34164);const i={tabItem:"tabItem_Ymn6"};var d=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,a),hidden:n,children:t})}},18228:(e,t,n)=>{n.d(t,{A:()=>C});var r=n(96540),i=n(34164),d=n(23104),a=n(56347),s=n(205),o=n(57485),l=n(31682),c=n(70679);function h(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??h(n);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function x(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:n}=e;const i=(0,a.W6)(),d=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(d),(0,r.useCallback)((e=>{if(!d)return;const t=new URLSearchParams(i.location.search);t.set(d,e),i.replace({...i.location,search:t.toString()})}),[d,i])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,d=u(e),[a,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:d}))),[l,h]=j({queryString:n,groupId:i}),[f,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,d]=(0,c.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&d.set(e)}),[n,d])]}({groupId:i}),m=(()=>{const e=l??f;return x({value:e,tabValues:d})?e:null})();(0,s.A)((()=>{m&&o(m)}),[m]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:d}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),p(e)}),[h,p,d]),tabValues:d}}var p=n(92303);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=n(74848);function g(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,d.a_)(),{pathname:h}=(0,a.zy)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),i=o[n].value;i!==r&&(c(t),s(i))},x=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:o.map((e=>{let{value:t,label:n,attributes:d}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:x,onClick:u,...d,className:(0,i.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,d?.className,{"border-b-2 pointer-events-none":r===t,"border-b-2 text-[#669dcb] border-[#669dcb]":r===t&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":r===t&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":r!==t&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":r===t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":r!==t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":r!==t&&h.startsWith("/terminal")}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:i}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function y(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",m.tabList),children:[(0,b.jsx)(g,{...e,...t}),(0,b.jsx)(v,{...e,...t})]})}function C(e){const t=(0,p.A)();return(0,b.jsx)(y,{...e},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var r=n(96540);const i={},d=r.createContext(i);function a(e){const t=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);