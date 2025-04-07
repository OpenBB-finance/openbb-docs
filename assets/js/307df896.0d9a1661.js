"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7880],{45635:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>d,default:()=>j,frontMatter:()=>o,metadata:()=>a,toc:()=>x});var s=n(74848),t=n(28453),i=n(94331),c=n(18228),l=n(19365);const o={title:"consensus",description:"Learn how to access and use the Price Target Consensus functionality  in your application. Explore the available parameters and understand the returned  data structure.",keywords:["Price target consensus data","equity estimates consensus","symbol parameter","provider parameter","results attribute","provider attribute","warnings attribute","chart attribute","metadata attribute","data table","target_high column","target_low column","target_consensus column","target_median column"]},d=void 0,a={id:"platform/reference/equity/estimates/consensus",title:"consensus",description:"Learn how to access and use the Price Target Consensus functionality  in your application. Explore the available parameters and understand the returned  data structure.",source:"@site/content/platform/reference/equity/estimates/consensus.md",sourceDirName:"platform/reference/equity/estimates",slug:"/platform/reference/equity/estimates/consensus",permalink:"/platform/reference/equity/estimates/consensus",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/equity/estimates/consensus.md",tags:[],version:"current",frontMatter:{title:"consensus",description:"Learn how to access and use the Price Target Consensus functionality  in your application. Explore the available parameters and understand the returned  data structure.",keywords:["Price target consensus data","equity estimates consensus","symbol parameter","provider parameter","results attribute","provider attribute","warnings attribute","chart attribute","metadata attribute","data table","target_high column","target_low column","target_consensus column","target_median column"]},sidebar:"tutorialSidebar",previous:{title:"analyst_search",permalink:"/platform/reference/equity/estimates/analyst_search"},next:{title:"forward_ebitda",permalink:"/platform/reference/equity/estimates/forward_ebitda"}},h={},x=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function u(e){const r={code:"code",em:"em",h2:"h2",hr:"hr",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{title:"equity/estimates/consensus - Reference | OpenBB Platform Docs"}),"\n","\n",(0,s.jsx)(r.p,{children:"Get consensus price target and recommendation."}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(c.A,{children:[(0,s.jsxs)(l.A,{value:"standard",label:"standard",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"symbol"})}),": ",(0,s.jsx)(r.code,{children:"Union[str, list[str]]"})]}),(0,s.jsx)(r.p,{children:"Symbol to get data for. Multiple items allowed for provider(s): fmp, intrinio, tmx, yfinance."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]})]}),(0,s.jsxs)(l.A,{value:"fmp",label:"fmp",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"symbol"})}),": ",(0,s.jsx)(r.code,{children:"Union[str, list[str]]"})]}),(0,s.jsx)(r.p,{children:"Symbol to get data for. Multiple items allowed for provider(s): fmp, intrinio, tmx, yfinance."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]})]}),(0,s.jsxs)(l.A,{value:"intrinio",label:"intrinio",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"symbol"})}),": ",(0,s.jsx)(r.code,{children:"Union[str, list[str]]"})]}),(0,s.jsx)(r.p,{children:"Symbol to get data for. Multiple items allowed for provider(s): fmp, intrinio, tmx, yfinance."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"industry_group_number"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"The Zacks industry group number."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]})]}),(0,s.jsxs)(l.A,{value:"tmx",label:"tmx",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"symbol"})}),": ",(0,s.jsx)(r.code,{children:"Union[str, list[str]]"})]}),(0,s.jsx)(r.p,{children:"Symbol to get data for. Multiple items allowed for provider(s): fmp, intrinio, tmx, yfinance."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]})]}),(0,s.jsxs)(l.A,{value:"yfinance",label:"yfinance",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"symbol"})}),": ",(0,s.jsx)(r.code,{children:"Union[str, list[str]]"})]}),(0,s.jsx)(r.p,{children:"Symbol to get data for. Multiple items allowed for provider(s): fmp, intrinio, tmx, yfinance."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]})]})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"results"})}),": ",(0,s.jsx)(r.code,{children:"list[PriceTargetConsensus]"})]}),"\n",(0,s.jsx)(r.p,{children:"Serializable results."}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"provider"})}),": ",(0,s.jsx)(r.code,{children:"Optional[Literal['fmp', 'intrinio', 'tmx', 'yfinance']]"})]}),"\n",(0,s.jsx)(r.p,{children:"Provider name."}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"warnings"})}),": ",(0,s.jsx)(r.code,{children:"Optional[list[Warning_]]"})]}),"\n",(0,s.jsx)(r.p,{children:"list of warnings."}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"chart"})}),": ",(0,s.jsx)(r.code,{children:"Optional[Chart]"})]}),"\n",(0,s.jsx)(r.p,{children:"Chart object."}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"extra"})}),": ",(0,s.jsx)(r.code,{children:"dict[str, Any]"})]}),"\n",(0,s.jsx)(r.p,{children:"Extra info."}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,s.jsxs)(c.A,{children:[(0,s.jsxs)(l.A,{value:"standard",label:"standard",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"symbol"})}),": ",(0,s.jsx)(r.code,{children:"str"})]}),(0,s.jsx)(r.p,{children:"Symbol representing the entity requested in the data."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"name"})}),": ",(0,s.jsx)(r.code,{children:"str"})]}),(0,s.jsx)(r.p,{children:"The company name"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"target_high"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"High target of the price target consensus."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"target_low"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Low target of the price target consensus."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"target_consensus"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Consensus target of the price target consensus."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"target_median"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Median target of the price target consensus."})]}),(0,s.jsxs)(l.A,{value:"fmp",label:"fmp",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"symbol"})}),": ",(0,s.jsx)(r.code,{children:"str"})]}),(0,s.jsx)(r.p,{children:"Symbol representing the entity requested in the data."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"name"})}),": ",(0,s.jsx)(r.code,{children:"str"})]}),(0,s.jsx)(r.p,{children:"The company name"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"target_high"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"High target of the price target consensus."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"target_low"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Low target of the price target consensus."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"target_consensus"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Consensus target of the price target consensus."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"target_median"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Median target of the price target consensus."})]}),(0,s.jsxs)(l.A,{value:"intrinio",label:"intrinio",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"symbol"})}),": ",(0,s.jsx)(r.code,{children:"str"})]}),(0,s.jsx)(r.p,{children:"Symbol representing the entity requested in the data."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"name"})}),": ",(0,s.jsx)(r.code,{children:"str"})]}),(0,s.jsx)(r.p,{children:"The company name"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"target_high"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"High target of the price target consensus."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"target_low"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Low target of the price target consensus."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"target_consensus"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Consensus target of the price target consensus."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"target_median"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Median target of the price target consensus."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"standard_deviation"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The standard deviation of target price estimates."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"total_anaylsts"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"The total number of target price estimates in consensus."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"raised"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"The number of analysts that have raised their target price estimates."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"lowered"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"The number of analysts that have lowered their target price estimates."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"most_recent_date"})}),": ",(0,s.jsx)(r.code,{children:"date"})]}),(0,s.jsx)(r.p,{children:"The date of the most recent estimate."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"industry_group_number"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"The Zacks industry group number."})]}),(0,s.jsxs)(l.A,{value:"tmx",label:"tmx",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"symbol"})}),": ",(0,s.jsx)(r.code,{children:"str"})]}),(0,s.jsx)(r.p,{children:"Symbol representing the entity requested in the data."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"name"})}),": ",(0,s.jsx)(r.code,{children:"str"})]}),(0,s.jsx)(r.p,{children:"The company name"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"target_high"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"High target of the price target consensus."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"target_low"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Low target of the price target consensus."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"target_consensus"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Consensus target of the price target consensus."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"target_median"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Median target of the price target consensus."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"target_upside"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Percent of upside, as a normalized percent."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"total_analysts"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"Total number of analyst."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"buy_ratings"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"Number of buy ratings."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"sell_ratings"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"Number of sell ratings."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"hold_ratings"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"Number of hold ratings."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"consensus_action"})}),": ",(0,s.jsx)(r.code,{children:"str"})]}),(0,s.jsx)(r.p,{children:"Consensus action."})]}),(0,s.jsxs)(l.A,{value:"yfinance",label:"yfinance",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"symbol"})}),": ",(0,s.jsx)(r.code,{children:"str"})]}),(0,s.jsx)(r.p,{children:"Symbol representing the entity requested in the data."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"name"})}),": ",(0,s.jsx)(r.code,{children:"str"})]}),(0,s.jsx)(r.p,{children:"The company name"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"target_high"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"High target of the price target consensus."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"target_low"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Low target of the price target consensus."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"target_consensus"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Consensus target of the price target consensus."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"target_median"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Median target of the price target consensus."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"recommendation"})}),": ",(0,s.jsx)(r.code,{children:"str"})]}),(0,s.jsx)(r.p,{children:"Recommendation - buy, sell, etc."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"recommendation_mean"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Mean recommendation score where 1 is strong buy and 5 is strong sell."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"number_of_analysts"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"Number of analysts providing opinions."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"current_price"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Current price of the stock."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"currency"})}),": ",(0,s.jsx)(r.code,{children:"str"})]}),(0,s.jsx)(r.p,{children:"Currency the stock is priced in."})]})]})]})}function j(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>c});n(96540);var s=n(34164);const t={tabItem:"tabItem_Ymn6"};var i=n(74848);function c(e){let{children:r,hidden:n,className:c}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,c),hidden:n,children:r})}},94331:(e,r,n)=>{n.d(r,{A:()=>i});n(96540);var s=n(5260),t=n(74848);function i(e){let{title:r}=e;return(0,t.jsx)(s.A,{children:(0,t.jsx)("title",{children:r})})}},18228:(e,r,n)=>{n.d(r,{A:()=>w});var s=n(56347),t=n(23104),i=n(96540),c=n(205),l=n(57485),o=n(31682),d=n(89466);function a(e){return function(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:n,attributes:s,default:t}}=e;return{value:r,label:n,attributes:s,default:t}}))}function h(e){const{values:r,children:n}=e;return(0,i.useMemo)((()=>{const e=r??a(n);return function(e){const r=(0,o.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function x(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function u(e){let{queryString:r=!1,groupId:n}=e;const t=(0,s.W6)(),c=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,l.aZ)(c),(0,i.useCallback)((e=>{if(!c)return;const r=new URLSearchParams(t.location.search);r.set(c,e),t.replace({...t.location,search:r.toString()})}),[c,t])]}function j(e){const{defaultValue:r,queryString:n=!1,groupId:s}=e,t=h(e),[l,o]=(0,i.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!x({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:t}))),[a,j]=u({queryString:n,groupId:s}),[p,g]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,t]=(0,d.Dv)(n);return[s,(0,i.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:s}),m=(()=>{const e=a??p;return x({value:e,tabValues:t})?e:null})();(0,c.A)((()=>{m&&o(m)}),[m]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!x({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);o(e),j(e),g(e)}),[j,g,t]),tabValues:t}}var p=n(92303),g=n(34164);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var f=n(74848);function b(e){let{className:r,block:n,selectedValue:i,selectValue:c,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,t.a_)(),{pathname:a}=(0,s.zy)(),h=e=>{const r=e.currentTarget,n=o.indexOf(r),s=l[n].value;s!==i&&(d(r),c(s))},x=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;r=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;r=o[n]??o[o.length-1];break}}r?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,g.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:r,label:n,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===r?0:-1,"aria-selected":i===r,ref:e=>o.push(e),onKeyDown:x,onClick:h,...s,className:(0,g.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,s?.className,{"border-b-2 pointer-events-none":i===r,"border-b-2 text-[#669dcb] border-[#669dcb]":i===r&&a.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===r&&a.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==r&&a.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===r&&a.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==r&&a.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":i!==r&&a.startsWith("/workspace")}),children:n??r},r)}))})}function y(e){let{lazy:r,children:n,selectedValue:s}=e;if(n=Array.isArray(n)?n:[n],r){const e=n.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:n.map(((e,r)=>(0,i.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function v(e){const r=j(e);return(0,f.jsxs)("div",{className:(0,g.A)("tabs-container",m.tabList),children:[(0,f.jsx)(b,{...e,...r}),(0,f.jsx)(y,{...e,...r})]})}function w(e){const r=(0,p.A)();return(0,f.jsx)(v,{...e},String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>l});var s=n(96540);const t={},i=s.createContext(t);function c(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);