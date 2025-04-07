"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66654],{54354:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>d,default:()=>j,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var s=n(74848),t=n(28453),l=n(18228),a=n(19365);const i={title:"Analyst Search",description:"Search for specific analysts and get their forecast track record"},d=void 0,c={id:"platform/data_models/AnalystSearch",title:"Analyst Search",description:"Search for specific analysts and get their forecast track record",source:"@site/content/platform/data_models/AnalystSearch.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/AnalystSearch",permalink:"/platform/data_models/AnalystSearch",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/data_models/AnalystSearch.md",tags:[],version:"current",frontMatter:{title:"Analyst Search",description:"Search for specific analysts and get their forecast track record"},sidebar:"tutorialSidebar",previous:{title:"Analyst Estimates",permalink:"/platform/data_models/AnalystEstimates"},next:{title:"Available Indicators",permalink:"/platform/data_models/AvailableIndicators"}},o={},h=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const r={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,s.jsx)(r.h3,{id:"class-names",children:"Class names"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Model name"}),(0,s.jsx)(r.th,{children:"Parameters class"}),(0,s.jsx)(r.th,{children:"Data class"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"AnalystSearch"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"AnalystSearchQueryParams"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"AnalystSearchData"})})]})})]}),"\n",(0,s.jsx)(r.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:"from openbb_core.provider.standard_models.analyst_search import (\nAnalystSearchData,\nAnalystSearchQueryParams,\n)\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsxs)(a.A,{value:"standard",label:"standard",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"analyst_name"})}),": ",(0,s.jsx)(r.code,{children:"Union[str, list[str]]"})]}),(0,s.jsx)(r.p,{children:"Analyst names to return. Omitting will return all available analysts. Multiple items allowed for provider(s): benzinga."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"firm_name"})}),": ",(0,s.jsx)(r.code,{children:"Union[str, list[str]]"})]}),(0,s.jsx)(r.p,{children:"Firm names to return. Omitting will return all available firms. Multiple items allowed for provider(s): benzinga."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]})]}),(0,s.jsxs)(a.A,{value:"benzinga",label:"benzinga",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"analyst_name"})}),": ",(0,s.jsx)(r.code,{children:"Union[str, list[str]]"})]}),(0,s.jsx)(r.p,{children:"Analyst names to return. Omitting will return all available analysts. Multiple items allowed for provider(s): benzinga."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"firm_name"})}),": ",(0,s.jsx)(r.code,{children:"Union[str, list[str]]"})]}),(0,s.jsx)(r.p,{children:"Firm names to return. Omitting will return all available firms. Multiple items allowed for provider(s): benzinga."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"analyst_ids"})}),": ",(0,s.jsx)(r.code,{children:"Union[str, list[str]]"})]}),(0,s.jsx)(r.p,{children:"list of analyst IDs to return. Multiple items allowed for provider(s): benzinga."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"firm_ids"})}),": ",(0,s.jsx)(r.code,{children:"Union[str, list[str]]"})]}),(0,s.jsx)(r.p,{children:"Firm IDs to return. Multiple items allowed for provider(s): benzinga."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"limit"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"Number of results returned. Limit 1000."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Default:"})," ",(0,s.jsx)(r.code,{children:"100"})]}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"page"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"Page offset. For optimization, performance and technical reasons, page offsets are limited from 0 - 100000. Limit the query results by other parameters such as date."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Default:"})," ",(0,s.jsx)(r.code,{children:"0"})]}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"fields"})}),": ",(0,s.jsx)(r.code,{children:"Union[str, list[str]]"})]}),(0,s.jsxs)(r.p,{children:["Fields to include in the response. See ",(0,s.jsx)(r.a,{href:"https://docs.benzinga.io/benzinga-apis/calendar/get-ratings",children:"https://docs.benzinga.io/benzinga-apis/calendar/get-ratings"})," to learn about the available fields. Multiple items allowed for provider(s): benzinga."]}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsxs)(a.A,{value:"standard",label:"standard",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"last_updated"})}),": ",(0,s.jsx)(r.code,{children:"datetime"})]}),(0,s.jsx)(r.p,{children:"Date of the last update."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"firm_name"})}),": ",(0,s.jsx)(r.code,{children:"str"})]}),(0,s.jsx)(r.p,{children:"Firm name of the analyst."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"name_first"})}),": ",(0,s.jsx)(r.code,{children:"str"})]}),(0,s.jsx)(r.p,{children:"Analyst first name."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"name_last"})}),": ",(0,s.jsx)(r.code,{children:"str"})]}),(0,s.jsx)(r.p,{children:"Analyst last name."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"name_full"})}),": ",(0,s.jsx)(r.code,{children:"str"})]}),(0,s.jsx)(r.p,{children:"Analyst full name."})]}),(0,s.jsxs)(a.A,{value:"benzinga",label:"benzinga",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"last_updated"})}),": ",(0,s.jsx)(r.code,{children:"datetime"})]}),(0,s.jsx)(r.p,{children:"Date of the last update."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"firm_name"})}),": ",(0,s.jsx)(r.code,{children:"str"})]}),(0,s.jsx)(r.p,{children:"Firm name of the analyst."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"name_first"})}),": ",(0,s.jsx)(r.code,{children:"str"})]}),(0,s.jsx)(r.p,{children:"Analyst first name."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"name_last"})}),": ",(0,s.jsx)(r.code,{children:"str"})]}),(0,s.jsx)(r.p,{children:"Analyst last name."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"name_full"})}),": ",(0,s.jsx)(r.code,{children:"str"})]}),(0,s.jsx)(r.p,{children:"Analyst full name."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"analyst_id"})}),": ",(0,s.jsx)(r.code,{children:"str"})]}),(0,s.jsx)(r.p,{children:"ID of the analyst."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"firm_id"})}),": ",(0,s.jsx)(r.code,{children:"str"})]}),(0,s.jsx)(r.p,{children:"ID of the analyst firm."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"smart_score"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"A weighted average of the total_ratings_percentile, overall_avg_return_percentile, and overall_success_rate"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"overall_success_rate"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The percentage (normalized) of gain/loss ratings that resulted in a gain overall."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"overall_avg_return_percentile"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The percentile (normalized) of this analyst's overall average return per rating in comparison to other analysts' overall average returns per rating."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"total_ratings_percentile"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The percentile (normalized) of this analyst's total number of ratings in comparison to the total number of ratings published by all other analysts"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"total_ratings"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"Number of recommendations made by this analyst."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"overall_gain_count"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"The number of ratings that have gained value since the date of recommendation"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"overall_loss_count"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"The number of ratings that have lost value since the date of recommendation"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"overall_average_return"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The average percent (normalized) price difference per rating since the date of recommendation"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"overall_std_dev"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The standard deviation in percent (normalized) price difference in the analyst's ratings since the date of recommendation"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"gain_count_1m"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"The number of ratings that have gained value over the last month"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"loss_count_1m"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"The number of ratings that have lost value over the last month"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"average_return_1m"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The average percent (normalized) price difference per rating over the last month"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"std_dev_1m"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The standard deviation in percent (normalized) price difference in the analyst's ratings over the last month"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"smart_score_1m"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"A weighted average smart score over the last month."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"success_rate_1m"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The percentage (normalized) of gain/loss ratings that resulted in a gain over the last month"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"gain_count_3m"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"The number of ratings that have gained value over the last 3 months"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"loss_count_3m"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"The number of ratings that have lost value over the last 3 months"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"average_return_3m"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The average percent (normalized) price difference per rating over the last 3 months"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"std_dev_3m"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The standard deviation in percent (normalized) price difference in the analyst's ratings over the last 3 months"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"smart_score_3m"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"A weighted average smart score over the last 3 months."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"success_rate_3m"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The percentage (normalized) of gain/loss ratings that resulted in a gain over the last 3 months"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"gain_count_6m"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"The number of ratings that have gained value over the last 6 months"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"loss_count_6m"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"The number of ratings that have lost value over the last 6 months"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"average_return_6m"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The average percent (normalized) price difference per rating over the last 6 months"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"std_dev_6m"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The standard deviation in percent (normalized) price difference in the analyst's ratings over the last 6 months"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"gain_count_9m"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"The number of ratings that have gained value over the last 9 months"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"loss_count_9m"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"The number of ratings that have lost value over the last 9 months"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"average_return_9m"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The average percent (normalized) price difference per rating over the last 9 months"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"std_dev_9m"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The standard deviation in percent (normalized) price difference in the analyst's ratings over the last 9 months"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"smart_score_9m"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"A weighted average smart score over the last 9 months."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"success_rate_9m"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The percentage (normalized) of gain/loss ratings that resulted in a gain over the last 9 months"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"gain_count_1y"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"The number of ratings that have gained value over the last 1 year"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"loss_count_1y"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"The number of ratings that have lost value over the last 1 year"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"average_return_1y"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The average percent (normalized) price difference per rating over the last 1 year"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"std_dev_1y"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The standard deviation in percent (normalized) price difference in the analyst's ratings over the last 1 year"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"smart_score_1y"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"A weighted average smart score over the last 1 year."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"success_rate_1y"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The percentage (normalized) of gain/loss ratings that resulted in a gain over the last 1 year"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"gain_count_2y"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"The number of ratings that have gained value over the last 2 years"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"loss_count_2y"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"The number of ratings that have lost value over the last 2 years"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"average_return_2y"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The average percent (normalized) price difference per rating over the last 2 years"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"std_dev_2y"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The standard deviation in percent (normalized) price difference in the analyst's ratings over the last 2 years"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"smart_score_2y"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"A weighted average smart score over the last 3 years."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"success_rate_2y"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The percentage (normalized) of gain/loss ratings that resulted in a gain over the last 2 years"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"gain_count_3y"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"The number of ratings that have gained value over the last 3 years"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"loss_count_3y"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"The number of ratings that have lost value over the last 3 years"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"average_return_3y"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The average percent (normalized) price difference per rating over the last 3 years"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"std_dev_3y"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The standard deviation in percent (normalized) price difference in the analyst's ratings over the last 3 years"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"smart_score_3y"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"A weighted average smart score over the last 3 years."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"success_rate_3y"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The percentage (normalized) of gain/loss ratings that resulted in a gain over the last 3 years"})]})]})]})}function j(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>a});n(96540);var s=n(34164);const t={tabItem:"tabItem_Ymn6"};var l=n(74848);function a(e){let{children:r,hidden:n,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,a),hidden:n,children:r})}},18228:(e,r,n)=>{n.d(r,{A:()=>y});var s=n(56347),t=n(23104),l=n(96540),a=n(205),i=n(57485),d=n(31682),c=n(89466);function o(e){return function(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:n,attributes:s,default:t}}=e;return{value:r,label:n,attributes:s,default:t}}))}function h(e){const{values:r,children:n}=e;return(0,l.useMemo)((()=>{const e=r??o(n);return function(e){const r=(0,d.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function x(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function j(e){let{queryString:r=!1,groupId:n}=e;const t=(0,s.W6)(),a=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,i.aZ)(a),(0,l.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(t.location.search);r.set(a,e),t.replace({...t.location,search:r.toString()})}),[a,t])]}function p(e){const{defaultValue:r,queryString:n=!1,groupId:s}=e,t=h(e),[i,d]=(0,l.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!x({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:t}))),[o,p]=j({queryString:n,groupId:s}),[u,m]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,t]=(0,c.Dv)(n);return[s,(0,l.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:s}),g=(()=>{const e=o??u;return x({value:e,tabValues:t})?e:null})();(0,a.A)((()=>{g&&d(g)}),[g]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!x({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);d(e),p(e),m(e)}),[p,m,t]),tabValues:t}}var u=n(92303),m=n(34164);const g={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var f=n(74848);function v(e){let{className:r,block:n,selectedValue:l,selectValue:a,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.a_)(),{pathname:o}=(0,s.zy)(),h=e=>{const r=e.currentTarget,n=d.indexOf(r),s=i[n].value;s!==l&&(c(r),a(s))},x=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;r=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;r=d[n]??d[d.length-1];break}}r?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:i.map((e=>{let{value:r,label:n,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:l===r?0:-1,"aria-selected":l===r,ref:e=>d.push(e),onKeyDown:x,onClick:h,...s,className:(0,m.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",g.tabItem,s?.className,{"border-b-2 pointer-events-none":l===r,"border-b-2 text-[#669dcb] border-[#669dcb]":l===r&&o.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":l===r&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":l!==r&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":l===r&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":l!==r&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":l!==r&&o.startsWith("/workspace")}),children:n??r},r)}))})}function b(e){let{lazy:r,children:n,selectedValue:s}=e;if(n=Array.isArray(n)?n:[n],r){const e=n.find((e=>e.props.value===s));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:n.map(((e,r)=>(0,l.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function _(e){const r=p(e);return(0,f.jsxs)("div",{className:(0,m.A)("tabs-container",g.tabList),children:[(0,f.jsx)(v,{...e,...r}),(0,f.jsx)(b,{...e,...r})]})}function y(e){const r=(0,u.A)();return(0,f.jsx)(_,{...e},String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>i});var s=n(96540);const t={},l=s.createContext(t);function a(e){const r=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(l.Provider,{value:r},e.children)}}}]);