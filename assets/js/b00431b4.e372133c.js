"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68487],{37845:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>j,frontMatter:()=>t,metadata:()=>a,toc:()=>h});var l=r(74848),d=r(28453),s=r(18228),i=r(19365);const t={title:"Gdp Nominal",description:"Get Nominal GDP Data"},c=void 0,a={id:"platform/data_models/GdpNominal",title:"Gdp Nominal",description:"Get Nominal GDP Data",source:"@site/content/platform/data_models/GdpNominal.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/GdpNominal",permalink:"/platform/data_models/GdpNominal",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/data_models/GdpNominal.md",tags:[],version:"current",frontMatter:{title:"Gdp Nominal",description:"Get Nominal GDP Data"},sidebar:"tutorialSidebar",previous:{title:"Gdp Forecast",permalink:"/platform/data_models/GdpForecast"},next:{title:"Gdp Real",permalink:"/platform/data_models/GdpReal"}},o={},h=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,l.jsx)(n.h3,{id:"class-names",children:"Class names"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Model name"}),(0,l.jsx)(n.th,{children:"Parameters class"}),(0,l.jsx)(n.th,{children:"Data class"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"GdpNominal"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"GdpNominalQueryParams"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"GdpNominalData"})})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"from openbb_core.provider.standard_models.gdp_nominal import (\nGdpNominalData,\nGdpNominalQueryParams,\n)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(s.A,{children:[(0,l.jsxs)(i.A,{value:"standard",label:"standard",children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"start_date"})}),": ",(0,l.jsx)(n.code,{children:"Union[date, str]"})]}),(0,l.jsx)(n.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,l.jsxs)(n.p,{children:["\u2022 ",(0,l.jsx)(n.em,{children:"Optional:"})," ",(0,l.jsx)(n.code,{children:"True"})]}),(0,l.jsx)(n.hr,{}),(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"end_date"})}),": ",(0,l.jsx)(n.code,{children:"Union[date, str]"})]}),(0,l.jsx)(n.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,l.jsxs)(n.p,{children:["\u2022 ",(0,l.jsx)(n.em,{children:"Optional:"})," ",(0,l.jsx)(n.code,{children:"True"})]})]}),(0,l.jsxs)(i.A,{value:"econdb",label:"econdb",children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"start_date"})}),": ",(0,l.jsx)(n.code,{children:"Union[date, str]"})]}),(0,l.jsx)(n.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,l.jsxs)(n.p,{children:["\u2022 ",(0,l.jsx)(n.em,{children:"Optional:"})," ",(0,l.jsx)(n.code,{children:"True"})]}),(0,l.jsx)(n.hr,{}),(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"end_date"})}),": ",(0,l.jsx)(n.code,{children:"Union[date, str]"})]}),(0,l.jsx)(n.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,l.jsxs)(n.p,{children:["\u2022 ",(0,l.jsx)(n.em,{children:"Optional:"})," ",(0,l.jsx)(n.code,{children:"True"})]}),(0,l.jsx)(n.hr,{}),(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"country"})}),": ",(0,l.jsx)(n.code,{children:"Union[str, list[str]]"})]}),(0,l.jsx)(n.p,{children:"The country to get data.Use 'all' to get data for all available countries. Multiple items allowed for provider(s): econdb."}),(0,l.jsxs)(n.p,{children:["\u2022 ",(0,l.jsx)(n.em,{children:"Default:"})," ",(0,l.jsx)(n.code,{children:"united_states"})]}),(0,l.jsxs)(n.p,{children:["\u2022 ",(0,l.jsx)(n.em,{children:"Optional:"})," ",(0,l.jsx)(n.code,{children:"True"})]}),(0,l.jsx)(n.hr,{}),(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"use_cache"})}),": ",(0,l.jsx)(n.code,{children:"bool"})]}),(0,l.jsx)(n.p,{children:"If True, the request will be cached for one day. Using cache is recommended to avoid needlessly requesting the same data."}),(0,l.jsxs)(n.p,{children:["\u2022 ",(0,l.jsx)(n.em,{children:"Default:"})," ",(0,l.jsx)(n.code,{children:"True"})]}),(0,l.jsxs)(n.p,{children:["\u2022 ",(0,l.jsx)(n.em,{children:"Optional:"})," ",(0,l.jsx)(n.code,{children:"True"})]})]}),(0,l.jsxs)(i.A,{value:"oecd",label:"oecd",children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"start_date"})}),": ",(0,l.jsx)(n.code,{children:"Union[date, str]"})]}),(0,l.jsx)(n.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,l.jsxs)(n.p,{children:["\u2022 ",(0,l.jsx)(n.em,{children:"Optional:"})," ",(0,l.jsx)(n.code,{children:"True"})]}),(0,l.jsx)(n.hr,{}),(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"end_date"})}),": ",(0,l.jsx)(n.code,{children:"Union[date, str]"})]}),(0,l.jsx)(n.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,l.jsxs)(n.p,{children:["\u2022 ",(0,l.jsx)(n.em,{children:"Optional:"})," ",(0,l.jsx)(n.code,{children:"True"})]}),(0,l.jsx)(n.hr,{}),(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"country"})}),": ",(0,l.jsx)(n.code,{children:"Union[str, list[str]]"})]}),(0,l.jsx)(n.p,{children:"The country to get data. Use 'all' to get data for all available countries. Multiple items allowed for provider(s): oecd."}),(0,l.jsxs)(r,{children:[(0,l.jsx)("summary",{mdxType:"summary",children:"Choices"}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"oecd"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"oecd_26"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"oecd_europe"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"g7"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"g20"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"euro_area"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"european_union_27"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"european_union_15"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"nafta"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"argentina"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"australia"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"austria"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"belgium"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"bulgaria"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"brazil"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"canada"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"chile"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"colombia"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"costa_rica"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"croatia"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"czech_republic"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"denmark"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"estonia"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"finland"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"france"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"germany"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"greece"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"hungary"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"iceland"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"india"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"indonesia"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"ireland"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"israel"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"italy"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"japan"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"korea"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"latvia"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"lithuania"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"luxembourg"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"mexico"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"netherlands"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"new_zealand"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"norway"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"poland"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"portugal"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"romania"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"russia"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"saudi_arabia"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"slovak_republic"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"slovenia"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"south_africa"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"spain"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"sweden"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"switzerland"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"turkey"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"united_kingdom"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"united_states"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"all"})}),"\n"]})]}),(0,l.jsxs)(n.p,{children:["\u2022 ",(0,l.jsx)(n.em,{children:"Default:"})," ",(0,l.jsx)(n.code,{children:"united_states"})]}),(0,l.jsxs)(n.p,{children:["\u2022 ",(0,l.jsx)(n.em,{children:"Optional:"})," ",(0,l.jsx)(n.code,{children:"True"})]}),(0,l.jsx)(n.hr,{}),(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"frequency"})}),": ",(0,l.jsx)(n.code,{children:"Literal['quarter', 'annual']"})]}),(0,l.jsx)(n.p,{children:"Frequency of the data."}),(0,l.jsxs)(n.p,{children:["\u2022 ",(0,l.jsx)(n.em,{children:"Default:"})," ",(0,l.jsx)(n.code,{children:"quarter"})]}),(0,l.jsxs)(n.p,{children:["\u2022 ",(0,l.jsx)(n.em,{children:"Optional:"})," ",(0,l.jsx)(n.code,{children:"True"})]}),(0,l.jsx)(n.hr,{}),(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"units"})}),": ",(0,l.jsx)(n.code,{children:"Literal['level', 'index', 'capita']"})]}),(0,l.jsx)(n.p,{children:"The unit of measurement for the data.Both 'level' and 'capita' (per) are measured in USD."}),(0,l.jsxs)(n.p,{children:["\u2022 ",(0,l.jsx)(n.em,{children:"Default:"})," ",(0,l.jsx)(n.code,{children:"level"})]}),(0,l.jsxs)(n.p,{children:["\u2022 ",(0,l.jsx)(n.em,{children:"Optional:"})," ",(0,l.jsx)(n.code,{children:"True"})]}),(0,l.jsx)(n.hr,{}),(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"price_base"})}),": ",(0,l.jsx)(n.code,{children:"Literal['current_prices', 'volume']"})]}),(0,l.jsx)(n.p,{children:"Price base for the data, volume is chain linked volume."}),(0,l.jsxs)(n.p,{children:["\u2022 ",(0,l.jsx)(n.em,{children:"Default:"})," ",(0,l.jsx)(n.code,{children:"current_prices"})]}),(0,l.jsxs)(n.p,{children:["\u2022 ",(0,l.jsx)(n.em,{children:"Optional:"})," ",(0,l.jsx)(n.code,{children:"True"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"data",children:"Data"}),"\n",(0,l.jsxs)(s.A,{children:[(0,l.jsxs)(i.A,{value:"standard",label:"standard",children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"date"})}),": ",(0,l.jsx)(n.code,{children:"Union[date, str]"})]}),(0,l.jsx)(n.p,{children:"The date of the data."}),(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"country"})}),": ",(0,l.jsx)(n.code,{children:"str"})]}),(0,l.jsx)(n.p,{children:"The country represented by the GDP value."}),(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"value"})}),": ",(0,l.jsx)(n.code,{children:"Union[int, float]"})]}),(0,l.jsx)(n.p,{children:"GDP value for the country and date."})]}),(0,l.jsxs)(i.A,{value:"econdb",label:"econdb",children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"date"})}),": ",(0,l.jsx)(n.code,{children:"Union[date, str]"})]}),(0,l.jsx)(n.p,{children:"The date of the data."}),(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"country"})}),": ",(0,l.jsx)(n.code,{children:"str"})]}),(0,l.jsx)(n.p,{children:"The country represented by the GDP value."}),(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"value"})}),": ",(0,l.jsx)(n.code,{children:"Union[int, float]"})]}),(0,l.jsx)(n.p,{children:"Nominal GDP value for the country and date."}),(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"nominal_growth_qoq"})}),": ",(0,l.jsx)(n.code,{children:"float"})]}),(0,l.jsx)(n.p,{children:"Nominal GDP growth rate quarter over quarter."}),(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"nominal_growth_yoy"})}),": ",(0,l.jsx)(n.code,{children:"float"})]}),(0,l.jsx)(n.p,{children:"Nominal GDP growth rate year over year."})]}),(0,l.jsxs)(i.A,{value:"oecd",label:"oecd",children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"date"})}),": ",(0,l.jsx)(n.code,{children:"Union[date, str]"})]}),(0,l.jsx)(n.p,{children:"The date of the data."}),(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"country"})}),": ",(0,l.jsx)(n.code,{children:"str"})]}),(0,l.jsx)(n.p,{children:"The country represented by the GDP value."}),(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"value"})}),": ",(0,l.jsx)(n.code,{children:"Union[int, float]"})]}),(0,l.jsx)(n.p,{children:"GDP value for the country and date."})]})]})]})}function j(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>i});r(96540);var l=r(34164);const d={tabItem:"tabItem_Ymn6"};var s=r(74848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,l.A)(d.tabItem,i),hidden:r,children:n})}},18228:(e,n,r)=>{r.d(n,{A:()=>D});var l=r(56347),d=r(23104),s=r(96540),i=r(205),t=r(57485),c=r(31682),a=r(89466);function o(e){return function(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:r,attributes:l,default:d}}=e;return{value:n,label:r,attributes:l,default:d}}))}function h(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??o(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function x(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:r}=e;const d=(0,l.W6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,t.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(d.location.search);n.set(i,e),d.replace({...d.location,search:n.toString()})}),[i,d])]}function u(e){const{defaultValue:n,queryString:r=!1,groupId:l}=e,d=h(e),[t,c]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=r.find((e=>e.default))??r[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:d}))),[o,u]=j({queryString:r,groupId:l}),[p,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,d]=(0,a.Dv)(r);return[l,(0,s.useCallback)((e=>{r&&d.set(e)}),[r,d])]}({groupId:l}),f=(()=>{const e=o??p;return x({value:e,tabValues:d})?e:null})();(0,i.A)((()=>{f&&c(f)}),[f]);return{selectedValue:t,selectValue:(0,s.useCallback)((e=>{if(!x({value:e,tabValues:d}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),m(e)}),[u,m,d]),tabValues:d}}var p=r(92303),m=r(34164);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function v(e){let{className:n,block:r,selectedValue:s,selectValue:i,tabValues:t}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,d.a_)(),{pathname:o}=(0,l.zy)(),h=e=>{const n=e.currentTarget,r=c.indexOf(n),l=t[r].value;l!==s&&(a(n),i(l))},x=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:t.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:x,onClick:h,...l,className:(0,m.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,l?.className,{"border-b-2 pointer-events-none":s===n,"border-b-2 text-[#669dcb] border-[#669dcb]":s===n&&o.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===n&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==n&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===n&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==n&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":s!==n&&o.startsWith("/workspace")}),children:r??n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:l}=e;if(r=Array.isArray(r)?r:[r],n){const e=r.find((e=>e.props.value===l));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=u(e);return(0,b.jsxs)("div",{className:(0,m.A)("tabs-container",f.tabList),children:[(0,b.jsx)(v,{...e,...n}),(0,b.jsx)(g,{...e,...n})]})}function D(e){const n=(0,p.A)();return(0,b.jsx)(y,{...e},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>t});var l=r(96540);const d={},s=l.createContext(d);function i(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);