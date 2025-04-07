"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31664],{70761:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>p});var r=n(74848),s=n(28453),i=n(94331),a=n(18228),o=n(19365);const d={title:"institutional",description:"Learn about institutional ownership data, and how to use the OBB.equity.ownership.institutional  function in Python to access the data. Explore the symbol, include_current_quarter,  date, and provider parameters. Understand the meaning and usage of the results,  provider, warnings, chart, and metadata properties. Additionally, get detailed descriptions  of the various data fields such as symbol, cik, date, investors_holding, number_of_13f_shares,  total_invested, ownership_percent, new_positions, closed_positions, total_calls,  total_puts, and put_call_ratio.",keywords:["institutional ownership data","python OBB.equity.ownership.institutional function","symbol parameter","include_current_quarter parameter","date parameter","provider parameter","results property","provider property","warnings property","chart property","metadata property","data description","symbol data","cik data","date data","investors_holding data","last_investors_holding data","investors_holding_change data","number_of_13f_shares data","last_number_of_13f_shares data","number_of_13f_shares_change data","total_invested data","last_total_invested data","total_invested_change data","ownership_percent data","last_ownership_percent data","ownership_percent_change data","new_positions data","last_new_positions data","new_positions_change data","increased_positions data","last_increased_positions data","increased_positions_change data","closed_positions data","last_closed_positions data","closed_positions_change data","reduced_positions data","last_reduced_positions data","reduced_positions_change data","total_calls data","last_total_calls data","total_calls_change data","total_puts data","last_total_puts data","total_puts_change data","put_call_ratio data","last_put_call_ratio data","put_call_ratio_change data"]},l=void 0,c={id:"platform/reference/equity/ownership/institutional",title:"institutional",description:"Learn about institutional ownership data, and how to use the OBB.equity.ownership.institutional  function in Python to access the data. Explore the symbol, include_current_quarter,  date, and provider parameters. Understand the meaning and usage of the results,  provider, warnings, chart, and metadata properties. Additionally, get detailed descriptions  of the various data fields such as symbol, cik, date, investors_holding, number_of_13f_shares,  total_invested, ownership_percent, new_positions, closed_positions, total_calls,  total_puts, and put_call_ratio.",source:"@site/content/platform/reference/equity/ownership/institutional.md",sourceDirName:"platform/reference/equity/ownership",slug:"/platform/reference/equity/ownership/institutional",permalink:"/platform/reference/equity/ownership/institutional",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/equity/ownership/institutional.md",tags:[],version:"current",frontMatter:{title:"institutional",description:"Learn about institutional ownership data, and how to use the OBB.equity.ownership.institutional  function in Python to access the data. Explore the symbol, include_current_quarter,  date, and provider parameters. Understand the meaning and usage of the results,  provider, warnings, chart, and metadata properties. Additionally, get detailed descriptions  of the various data fields such as symbol, cik, date, investors_holding, number_of_13f_shares,  total_invested, ownership_percent, new_positions, closed_positions, total_calls,  total_puts, and put_call_ratio.",keywords:["institutional ownership data","python OBB.equity.ownership.institutional function","symbol parameter","include_current_quarter parameter","date parameter","provider parameter","results property","provider property","warnings property","chart property","metadata property","data description","symbol data","cik data","date data","investors_holding data","last_investors_holding data","investors_holding_change data","number_of_13f_shares data","last_number_of_13f_shares data","number_of_13f_shares_change data","total_invested data","last_total_invested data","total_invested_change data","ownership_percent data","last_ownership_percent data","ownership_percent_change data","new_positions data","last_new_positions data","new_positions_change data","increased_positions data","last_increased_positions data","increased_positions_change data","closed_positions data","last_closed_positions data","closed_positions_change data","reduced_positions data","last_reduced_positions data","reduced_positions_change data","total_calls data","last_total_calls data","total_calls_change data","total_puts data","last_total_puts data","total_puts_change data","put_call_ratio data","last_put_call_ratio data","put_call_ratio_change data"]},sidebar:"tutorialSidebar",previous:{title:"insider_trading",permalink:"/platform/reference/equity/ownership/insider_trading"},next:{title:"major_holders",permalink:"/platform/reference/equity/ownership/major_holders"}},h={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function u(e){const t={code:"code",em:"em",h2:"h2",hr:"hr",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{title:"equity/ownership/institutional - Reference | OpenBB Platform Docs"}),"\n","\n",(0,r.jsx)(t.p,{children:"Get data about institutional ownership for a given company over time."}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsxs)(o.A,{value:"standard",label:"standard",children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"symbol"})}),": ",(0,r.jsx)(t.code,{children:"str"})]}),(0,r.jsx)(t.p,{children:"Symbol to get data for."}),(0,r.jsxs)(t.p,{children:["\u2022 ",(0,r.jsx)(t.em,{children:"Optional:"})," ",(0,r.jsx)(t.code,{children:"False"})]})]}),(0,r.jsxs)(o.A,{value:"fmp",label:"fmp",children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"symbol"})}),": ",(0,r.jsx)(t.code,{children:"str"})]}),(0,r.jsx)(t.p,{children:"Symbol to get data for."}),(0,r.jsxs)(t.p,{children:["\u2022 ",(0,r.jsx)(t.em,{children:"Optional:"})," ",(0,r.jsx)(t.code,{children:"False"})]}),(0,r.jsx)(t.hr,{}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"include_current_quarter"})}),": ",(0,r.jsx)(t.code,{children:"bool"})]}),(0,r.jsx)(t.p,{children:"Include current quarter data."}),(0,r.jsxs)(t.p,{children:["\u2022 ",(0,r.jsx)(t.em,{children:"Default:"})," ",(0,r.jsx)(t.code,{children:"False"})]}),(0,r.jsxs)(t.p,{children:["\u2022 ",(0,r.jsx)(t.em,{children:"Optional:"})," ",(0,r.jsx)(t.code,{children:"True"})]}),(0,r.jsx)(t.hr,{}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"date"})}),": ",(0,r.jsx)(t.code,{children:"Union[date, str]"})]}),(0,r.jsx)(t.p,{children:"A specific date to get data for."}),(0,r.jsxs)(t.p,{children:["\u2022 ",(0,r.jsx)(t.em,{children:"Optional:"})," ",(0,r.jsx)(t.code,{children:"True"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"results"})}),": ",(0,r.jsx)(t.code,{children:"list[InstitutionalOwnership]"})]}),"\n",(0,r.jsx)(t.p,{children:"Serializable results."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"provider"})}),": ",(0,r.jsx)(t.code,{children:"Optional[Literal['fmp']]"})]}),"\n",(0,r.jsx)(t.p,{children:"Provider name."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"warnings"})}),": ",(0,r.jsx)(t.code,{children:"Optional[list[Warning_]]"})]}),"\n",(0,r.jsx)(t.p,{children:"list of warnings."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"chart"})}),": ",(0,r.jsx)(t.code,{children:"Optional[Chart]"})]}),"\n",(0,r.jsx)(t.p,{children:"Chart object."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"extra"})}),": ",(0,r.jsx)(t.code,{children:"dict[str, Any]"})]}),"\n",(0,r.jsx)(t.p,{children:"Extra info."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsxs)(o.A,{value:"standard",label:"standard",children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"symbol"})}),": ",(0,r.jsx)(t.code,{children:"str"})]}),(0,r.jsx)(t.p,{children:"Symbol representing the entity requested in the data."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"cik"})}),": ",(0,r.jsx)(t.code,{children:"str"})]}),(0,r.jsx)(t.p,{children:"Central Index Key (CIK) for the requested entity."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"date"})}),": ",(0,r.jsx)(t.code,{children:"Union[date, str]"})]}),(0,r.jsx)(t.p,{children:"The date of the data."})]}),(0,r.jsxs)(o.A,{value:"fmp",label:"fmp",children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"symbol"})}),": ",(0,r.jsx)(t.code,{children:"str"})]}),(0,r.jsx)(t.p,{children:"Symbol representing the entity requested in the data."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"cik"})}),": ",(0,r.jsx)(t.code,{children:"str"})]}),(0,r.jsx)(t.p,{children:"Central Index Key (CIK) for the requested entity."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"date"})}),": ",(0,r.jsx)(t.code,{children:"Union[date, str]"})]}),(0,r.jsx)(t.p,{children:"The date of the data."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"investors_holding"})}),": ",(0,r.jsx)(t.code,{children:"int"})]}),(0,r.jsx)(t.p,{children:"Number of investors holding the stock."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"last_investors_holding"})}),": ",(0,r.jsx)(t.code,{children:"int"})]}),(0,r.jsx)(t.p,{children:"Number of investors holding the stock in the last quarter."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"investors_holding_change"})}),": ",(0,r.jsx)(t.code,{children:"int"})]}),(0,r.jsx)(t.p,{children:"Change in the number of investors holding the stock."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"number_of_13f_shares"})}),": ",(0,r.jsx)(t.code,{children:"int"})]}),(0,r.jsx)(t.p,{children:"Number of 13F shares."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"last_number_of_13f_shares"})}),": ",(0,r.jsx)(t.code,{children:"int"})]}),(0,r.jsx)(t.p,{children:"Number of 13F shares in the last quarter."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"number_of_13f_shares_change"})}),": ",(0,r.jsx)(t.code,{children:"int"})]}),(0,r.jsx)(t.p,{children:"Change in the number of 13F shares."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"total_invested"})}),": ",(0,r.jsx)(t.code,{children:"float"})]}),(0,r.jsx)(t.p,{children:"Total amount invested."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"last_total_invested"})}),": ",(0,r.jsx)(t.code,{children:"float"})]}),(0,r.jsx)(t.p,{children:"Total amount invested in the last quarter."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"total_invested_change"})}),": ",(0,r.jsx)(t.code,{children:"float"})]}),(0,r.jsx)(t.p,{children:"Change in the total amount invested."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"ownership_percent"})}),": ",(0,r.jsx)(t.code,{children:"float"})]}),(0,r.jsx)(t.p,{children:"Ownership percent."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"last_ownership_percent"})}),": ",(0,r.jsx)(t.code,{children:"float"})]}),(0,r.jsx)(t.p,{children:"Ownership percent in the last quarter."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"ownership_percent_change"})}),": ",(0,r.jsx)(t.code,{children:"float"})]}),(0,r.jsx)(t.p,{children:"Change in the ownership percent."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"new_positions"})}),": ",(0,r.jsx)(t.code,{children:"int"})]}),(0,r.jsx)(t.p,{children:"Number of new positions."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"last_new_positions"})}),": ",(0,r.jsx)(t.code,{children:"int"})]}),(0,r.jsx)(t.p,{children:"Number of new positions in the last quarter."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"new_positions_change"})}),": ",(0,r.jsx)(t.code,{children:"int"})]}),(0,r.jsx)(t.p,{children:"Change in the number of new positions."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"increased_positions"})}),": ",(0,r.jsx)(t.code,{children:"int"})]}),(0,r.jsx)(t.p,{children:"Number of increased positions."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"last_increased_positions"})}),": ",(0,r.jsx)(t.code,{children:"int"})]}),(0,r.jsx)(t.p,{children:"Number of increased positions in the last quarter."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"increased_positions_change"})}),": ",(0,r.jsx)(t.code,{children:"int"})]}),(0,r.jsx)(t.p,{children:"Change in the number of increased positions."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"closed_positions"})}),": ",(0,r.jsx)(t.code,{children:"int"})]}),(0,r.jsx)(t.p,{children:"Number of closed positions."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"last_closed_positions"})}),": ",(0,r.jsx)(t.code,{children:"int"})]}),(0,r.jsx)(t.p,{children:"Number of closed positions in the last quarter."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"closed_positions_change"})}),": ",(0,r.jsx)(t.code,{children:"int"})]}),(0,r.jsx)(t.p,{children:"Change in the number of closed positions."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"reduced_positions"})}),": ",(0,r.jsx)(t.code,{children:"int"})]}),(0,r.jsx)(t.p,{children:"Number of reduced positions."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"last_reduced_positions"})}),": ",(0,r.jsx)(t.code,{children:"int"})]}),(0,r.jsx)(t.p,{children:"Number of reduced positions in the last quarter."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"reduced_positions_change"})}),": ",(0,r.jsx)(t.code,{children:"int"})]}),(0,r.jsx)(t.p,{children:"Change in the number of reduced positions."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"total_calls"})}),": ",(0,r.jsx)(t.code,{children:"int"})]}),(0,r.jsx)(t.p,{children:"Total number of call options contracts traded for Apple Inc. on the specified date."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"last_total_calls"})}),": ",(0,r.jsx)(t.code,{children:"int"})]}),(0,r.jsx)(t.p,{children:"Total number of call options contracts traded for Apple Inc. on the previous reporting date."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"total_calls_change"})}),": ",(0,r.jsx)(t.code,{children:"int"})]}),(0,r.jsx)(t.p,{children:"Change in the total number of call options contracts traded between the current and previous reporting dates."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"total_puts"})}),": ",(0,r.jsx)(t.code,{children:"int"})]}),(0,r.jsx)(t.p,{children:"Total number of put options contracts traded for Apple Inc. on the specified date."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"last_total_puts"})}),": ",(0,r.jsx)(t.code,{children:"int"})]}),(0,r.jsx)(t.p,{children:"Total number of put options contracts traded for Apple Inc. on the previous reporting date."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"total_puts_change"})}),": ",(0,r.jsx)(t.code,{children:"int"})]}),(0,r.jsx)(t.p,{children:"Change in the total number of put options contracts traded between the current and previous reporting dates."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"put_call_ratio"})}),": ",(0,r.jsx)(t.code,{children:"float"})]}),(0,r.jsx)(t.p,{children:"Put-call ratio, which is the ratio of the total number of put options to call options traded on the specified date."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"last_put_call_ratio"})}),": ",(0,r.jsx)(t.code,{children:"float"})]}),(0,r.jsx)(t.p,{children:"Put-call ratio on the previous reporting date."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"put_call_ratio_change"})}),": ",(0,r.jsx)(t.code,{children:"float"})]}),(0,r.jsx)(t.p,{children:"Change in the put-call ratio between the current and previous reporting dates."})]})]})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var i=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:n,children:t})}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(5260),s=n(74848);function i(e){let{title:t}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:t})})}},18228:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(56347),s=n(23104),i=n(96540),a=n(205),o=n(57485),d=n(31682),l=n(89466);function c(e){return function(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}function h(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:n}=e;const s=(0,r.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=h(e),[o,d]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,x]=u({queryString:n,groupId:r}),[j,_]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,l.Dv)(n);return[r,(0,i.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),f=(()=>{const e=c??j;return p({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{f&&d(f)}),[f]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),x(e),_(e)}),[x,_,s]),tabValues:s}}var j=n(92303),_=n(34164);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var g=n(74848);function m(e){let{className:t,block:n,selectedValue:i,selectValue:a,tabValues:o}=e;const d=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),{pathname:c}=(0,r.zy)(),h=e=>{const t=e.currentTarget,n=d.indexOf(t),r=o[n].value;r!==i&&(l(t),a(r))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,_.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:o.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>d.push(e),onKeyDown:p,onClick:h,...r,className:(0,_.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,r?.className,{"border-b-2 pointer-events-none":i===t,"border-b-2 text-[#669dcb] border-[#669dcb]":i===t&&c.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===t&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==t&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":i!==t&&c.startsWith("/workspace")}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function v(e){const t=x(e);return(0,g.jsxs)("div",{className:(0,_.A)("tabs-container",f.tabList),children:[(0,g.jsx)(m,{...e,...t}),(0,g.jsx)(b,{...e,...t})]})}function w(e){const t=(0,j.A)();return(0,g.jsx)(v,{...e},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(96540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);