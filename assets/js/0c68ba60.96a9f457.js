"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25903],{95439:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>h,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>x});var s=t(74848),n=t(28453),d=t(94331),i=t(18228),l=t(19365);const a={title:"fred_search",description:"Search for FRED series or economic releases by ID or string",keywords:["economy","fred_search"]},h=void 0,c={id:"platform/reference/economy/fred_search",title:"fred_search",description:"Search for FRED series or economic releases by ID or string",source:"@site/content/platform/reference/economy/fred_search.md",sourceDirName:"platform/reference/economy",slug:"/platform/reference/economy/fred_search",permalink:"/platform/reference/economy/fred_search",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/economy/fred_search.md",tags:[],version:"current",frontMatter:{title:"fred_search",description:"Search for FRED series or economic releases by ID or string",keywords:["economy","fred_search"]},sidebar:"tutorialSidebar",previous:{title:"fred_release_table",permalink:"/platform/reference/economy/fred_release_table"},next:{title:"fred_series",permalink:"/platform/reference/economy/fred_series"}},o={},x=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function j(e){const r={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.A,{title:"economy/fred_search - Reference | OpenBB Platform Docs"}),"\n","\n",(0,s.jsx)(r.p,{children:"Search for FRED series or economic releases by ID or string."}),"\n",(0,s.jsxs)(r.p,{children:["This does not return the observation values, only the metadata.\nUse this function to find series IDs for ",(0,s.jsx)(r.code,{children:"fred_series()"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:"from openbb import obb\nobb.economy.fred_search(provider='fred')\n"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(l.A,{value:"standard",label:"standard",children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Default"}),(0,s.jsx)(r.th,{children:"Optional"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"query"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"The search word(s)."}),(0,s.jsx)(r.td,{children:"None"}),(0,s.jsx)(r.td,{children:"True"})]})})]})}),(0,s.jsx)(l.A,{value:"fred",label:"fred",children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Default"}),(0,s.jsx)(r.th,{children:"Optional"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"query"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"The search word(s)."}),(0,s.jsx)(r.td,{children:"None"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"search_type"}),(0,s.jsx)(r.td,{children:"Literal['full_text', 'series_id', 'release']"}),(0,s.jsx)(r.td,{children:"The type of search to perform. Automatically set to 'release' when a 'release_id' is provided."}),(0,s.jsx)(r.td,{children:"full_text"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"release_id"}),(0,s.jsx)(r.td,{children:"Annotated[int, Ge(ge=0)]"}),(0,s.jsx)(r.td,{children:"A specific release ID to target."}),(0,s.jsx)(r.td,{children:"None"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"limit"}),(0,s.jsx)(r.td,{children:"Annotated[int, Ge(ge=0)]"}),(0,s.jsx)(r.td,{children:"The number of data entries to return. (1-1000)"}),(0,s.jsx)(r.td,{children:"None"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"offset"}),(0,s.jsx)(r.td,{children:"Annotated[int, Ge(ge=0)]"}),(0,s.jsx)(r.td,{children:"Offset the results in conjunction with limit. This parameter is ignored When search_type is 'release'."}),(0,s.jsx)(r.td,{children:"0"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"order_by"}),(0,s.jsx)(r.td,{children:"Literal['search_rank', 'series_id', 'title', 'units', 'frequency', 'seasonal_adjustment', 'realtime_start', 'realtime_end', 'last_updated', 'observation_start', 'observation_end', 'popularity', 'group_popularity']"}),(0,s.jsx)(r.td,{children:"Order the results by a specific attribute. The default is 'observation_end'."}),(0,s.jsx)(r.td,{children:"observation_end"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"sort_order"}),(0,s.jsx)(r.td,{children:"Literal['asc', 'desc']"}),(0,s.jsx)(r.td,{children:"Sort the 'order_by' item in ascending or descending order. The default is 'desc'."}),(0,s.jsx)(r.td,{children:"desc"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"filter_variable"}),(0,s.jsx)(r.td,{children:"Literal['frequency', 'units', 'seasonal_adjustment']"}),(0,s.jsx)(r.td,{children:"Filter by an attribute."}),(0,s.jsx)(r.td,{children:"None"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"filter_value"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"String value to filter the variable by.  Used in conjunction with filter_variable. This parameter is ignored when search_type is 'release'."}),(0,s.jsx)(r.td,{children:"None"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"tag_names"}),(0,s.jsx)(r.td,{children:"Union[str, List[str]]"}),(0,s.jsx)(r.td,{children:"A semicolon delimited list of tag names that series match all of.  Example: 'japan;imports' This parameter is ignored when search_type is 'release'. Multiple items allowed for provider(s): fred."}),(0,s.jsx)(r.td,{children:"None"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"exclude_tag_names"}),(0,s.jsx)(r.td,{children:"Union[str, List[str]]"}),(0,s.jsx)(r.td,{children:"A semicolon delimited list of tag names that series match none of.  Example: 'imports;services'. Requires that variable tag_names also be set to limit the number of matching series. This parameter is ignored when search_type is 'release'. Multiple items allowed for provider(s): fred."}),(0,s.jsx)(r.td,{children:"None"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"series_id"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"A FRED Series ID to return series group information for. This returns the required information to query for regional data. Not all series that are in FRED have geographical data. Entering a value for series_id will override all other parameters. Multiple series_ids can be separated by commas."}),(0,s.jsx)(r.td,{children:"None"}),(0,s.jsx)(r.td,{children:"True"})]})]})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[FredSearch]\n        Serializable results.\n\n    provider : Optional[Literal['fred']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(l.A,{value:"standard",label:"standard",children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"release_id"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"The release ID for queries."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"series_id"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"The series ID for the item in the release."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"series_group"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"The series group ID of the series. This value is used to query for regional data."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"region_type"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"The region type of the series."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"name"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"The name of the release."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"title"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"The title of the series."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"observation_start"}),(0,s.jsx)(r.td,{children:"date"}),(0,s.jsx)(r.td,{children:"The date of the first observation in the series."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"observation_end"}),(0,s.jsx)(r.td,{children:"date"}),(0,s.jsx)(r.td,{children:"The date of the last observation in the series."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"frequency"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"The frequency of the data."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"frequency_short"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Short form of the data frequency."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"units"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"The units of the data."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"units_short"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Short form of the data units."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"seasonal_adjustment"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"The seasonal adjustment of the data."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"seasonal_adjustment_short"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Short form of the data seasonal adjustment."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"last_updated"}),(0,s.jsx)(r.td,{children:"datetime"}),(0,s.jsx)(r.td,{children:"The datetime of the last update to the data."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"popularity"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"Popularity of the series"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"group_popularity"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"Group popularity of the release"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"realtime_start"}),(0,s.jsx)(r.td,{children:"date"}),(0,s.jsx)(r.td,{children:"The realtime start date of the series."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"realtime_end"}),(0,s.jsx)(r.td,{children:"date"}),(0,s.jsx)(r.td,{children:"The realtime end date of the series."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"notes"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Description of the release."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"press_release"}),(0,s.jsx)(r.td,{children:"bool"}),(0,s.jsx)(r.td,{children:"If the release is a press release."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"url"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"URL to the release."})]})]})]})}),(0,s.jsx)(l.A,{value:"fred",label:"fred",children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"release_id"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"The release ID for queries."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"series_id"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"The series ID for the item in the release."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"series_group"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"The series group ID of the series. This value is used to query for regional data."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"region_type"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"The region type of the series."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"name"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"The name of the release."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"title"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"The title of the series."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"observation_start"}),(0,s.jsx)(r.td,{children:"date"}),(0,s.jsx)(r.td,{children:"The date of the first observation in the series."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"observation_end"}),(0,s.jsx)(r.td,{children:"date"}),(0,s.jsx)(r.td,{children:"The date of the last observation in the series."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"frequency"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"The frequency of the data."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"frequency_short"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Short form of the data frequency."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"units"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"The units of the data."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"units_short"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Short form of the data units."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"seasonal_adjustment"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"The seasonal adjustment of the data."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"seasonal_adjustment_short"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Short form of the data seasonal adjustment."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"last_updated"}),(0,s.jsx)(r.td,{children:"datetime"}),(0,s.jsx)(r.td,{children:"The datetime of the last update to the data."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"popularity"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"Popularity of the series"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"group_popularity"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"Group popularity of the release"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"realtime_start"}),(0,s.jsx)(r.td,{children:"date"}),(0,s.jsx)(r.td,{children:"The realtime start date of the series."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"realtime_end"}),(0,s.jsx)(r.td,{children:"date"}),(0,s.jsx)(r.td,{children:"The realtime end date of the series."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"notes"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Description of the release."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"press_release"}),(0,s.jsx)(r.td,{children:"bool"}),(0,s.jsx)(r.td,{children:"If the release is a press release."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"url"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"URL to the release."})]})]})]})})]})]})}function u(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var s=t(34164);const n={tabItem:"tabItem_Ymn6"};var d=t(74848);function i(e){let{children:r,hidden:t,className:i}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,s.A)(n.tabItem,i),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>d});t(96540);var s=t(5260),n=t(74848);function d(e){let{title:r}=e;return(0,n.jsx)(s.A,{children:(0,n.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>g});var s=t(96540),n=t(34164),d=t(23104),i=t(56347),l=t(205),a=t(57485),h=t(31682),c=t(89466);function o(e){return function(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:s,default:n}}=e;return{value:r,label:t,attributes:s,default:n}}))}function x(e){const{values:r,children:t}=e;return(0,s.useMemo)((()=>{const e=r??o(t);return function(e){const r=(0,h.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function j(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function u(e){let{queryString:r=!1,groupId:t}=e;const n=(0,i.W6)(),d=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,a.aZ)(d),(0,s.useCallback)((e=>{if(!d)return;const r=new URLSearchParams(n.location.search);r.set(d,e),n.replace({...n.location,search:r.toString()})}),[d,n])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,d=x(e),[i,a]=(0,s.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!j({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:d}))),[h,o]=u({queryString:t,groupId:n}),[f,p]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,d]=(0,c.Dv)(t);return[n,(0,s.useCallback)((e=>{t&&d.set(e)}),[t,d])]}({groupId:n}),m=(()=>{const e=h??f;return j({value:e,tabValues:d})?e:null})();(0,l.A)((()=>{m&&a(m)}),[m]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!j({value:e,tabValues:d}))throw new Error(`Can't select invalid tab value=${e}`);a(e),o(e),p(e)}),[o,p,d]),tabValues:d}}var p=t(92303);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=t(74848);function y(e){let{className:r,block:t,selectedValue:s,selectValue:l,tabValues:a}=e;const h=[],{blockElementScrollPositionUntilNextRender:c}=(0,d.a_)(),{pathname:o}=(0,i.zy)(),x=e=>{const r=e.currentTarget,t=h.indexOf(r),n=a[t].value;n!==s&&(c(r),l(n))},j=e=>{let r=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=h.indexOf(e.currentTarget)+1;r=h[t]??h[0];break}case"ArrowLeft":{const t=h.indexOf(e.currentTarget)-1;r=h[t]??h[h.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:a.map((e=>{let{value:r,label:t,attributes:d}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>h.push(e),onKeyDown:j,onClick:x,...d,className:(0,n.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,d?.className,{"border-b-2 pointer-events-none":s===r,"border-b-2 text-[#669dcb] border-[#669dcb]":s===r&&o.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===r&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==r&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===r&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==r&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":s!==r&&o.startsWith("/terminal")}),children:t??r},r)}))})}function v(e){let{lazy:r,children:t,selectedValue:n}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function _(e){const r=f(e);return(0,b.jsxs)("div",{className:(0,n.A)("tabs-container",m.tabList),children:[(0,b.jsx)(y,{...e,...r}),(0,b.jsx)(v,{...e,...r})]})}function g(e){const r=(0,p.A)();return(0,b.jsx)(_,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>l});var s=t(96540);const n={},d=s.createContext(n);function i(e){const r=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);