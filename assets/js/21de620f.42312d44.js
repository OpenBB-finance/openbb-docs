"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4631],{693:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var s=r(74848),n=r(28453),i=r(94331);const l={title:"Commitment of Traders",sidebar_position:22,description:"This page provides details on the accessing Commitment of Traders reports with the OpenBB Platform, published by the CFTC weekly. This guide provides examples for using the combinations of parameters used to get aspects of the report's data.",keywords:["futures","commodities","index","indices","positioning","dealer","hedge","open interest","Nasdaq DataLink","CFTC","commitment of traders","COT","Treasury Note","currency","currencies","equity"]},o=void 0,d={id:"platform/developer_guide/commitment_of_traders",title:"Commitment of Traders",description:"This page provides details on the accessing Commitment of Traders reports with the OpenBB Platform, published by the CFTC weekly. This guide provides examples for using the combinations of parameters used to get aspects of the report's data.",source:"@site/content/platform/developer_guide/commitment_of_traders.mdx",sourceDirName:"platform/developer_guide",slug:"/platform/developer_guide/commitment_of_traders",permalink:"/platform/developer_guide/commitment_of_traders",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/developer_guide/commitment_of_traders.mdx",tags:[],version:"current",lastUpdatedBy:"Andrew",lastUpdatedAt:17260686e5,sidebarPosition:22,frontMatter:{title:"Commitment of Traders",sidebar_position:22,description:"This page provides details on the accessing Commitment of Traders reports with the OpenBB Platform, published by the CFTC weekly. This guide provides examples for using the combinations of parameters used to get aspects of the report's data.",keywords:["futures","commodities","index","indices","positioning","dealer","hedge","open interest","Nasdaq DataLink","CFTC","commitment of traders","COT","Treasury Note","currency","currencies","equity"]},sidebar:"tutorialSidebar",previous:{title:"Tests",permalink:"/platform/developer_guide/tests"},next:{title:"Documentation - Development",permalink:"/platform/developer_guide/documentation_development"}},a={},c=[{value:"Regulators Module",id:"regulators-module",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{title:"Commitment of Traders - Usage | OpenBB Platform Docs"}),"\n",(0,s.jsxs)(t.p,{children:["Commitment of Traders (COT) reports are published on Fridays, by the ",(0,s.jsx)(t.a,{href:"https://www.cftc.gov/MarketReports/CommitmentsofTraders/index.htm",children:"CFTC"}),". CFTC COT reports provide a breakdown of each Tuesday\u2019s open interest for futures and options on futures markets in which 20 or more traders hold positions equal to or above the reporting levels established by the CFTC."]}),"\n",(0,s.jsx)(t.h2,{id:"regulators-module",children:"Regulators Module"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"obb.regulators"})," module contains data published by industry regulators and agencies. The data will not be specific to any particular asset class, and the information is available to the general public. The COT reports have two end points:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"obb.regulators.cftc.cot()"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"obb.regulators.cfc.cot_search()"})}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["While the data is public and available directly from the CFTC website, ",(0,s.jsx)(t.a,{href:"https://data.nasdaq.com/databases/CFTC",children:"Nasdaq Data Link"})," provides access to a parsed database with the complete history, of current and obsolete reports, that the ",(0,s.jsx)(t.code,{children:"openbb-nasdaq"})," data provider connects to."]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"COT Search"}),(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"obb.regulators.cftc.cot_search()"}),' end point is a curated list of the 100 most common reports. The list can be searched by fuzzy query - i.e., "commodities" - and they are classified under categories and subcategories. Get the whole list with an empty query.']}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"reports = obb.regulators.cftc.cot_search().to_df()\n"})}),(0,s.jsx)(t.p,{children:'The major US indices - S&P 500, Nasdaq 100, Dow Jones Industrial Average, Russell 1000 & 2000, VIX, Bloomberg Commodity Index, etc. - are categorized as "Index".'}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'reports[reports["category"] == "Index"]\n'})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"COT Reports"}),(0,s.jsxs)(t.p,{children:["There is a default report, Two-Year Treasury Note Futures, which has the code: ",(0,s.jsx)(t.code,{children:"042601"}),". Where available, like the two-year note, the futures continuation symbol (ZT=F) can be used instead of the code. The name can also be used:"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'zt = obb.regulators.cftc.cot("Two-Year Treasury Note Futures (CBT)").to_df()\n\nzt.iloc[-1]\n'})}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"}}),(0,s.jsx)(t.th,{style:{textAlign:"right"},children:"2023-11-14"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"open_interest"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"4274379"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"noncommercial_long"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"427897"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"noncommercial_short"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"1827558"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"noncommercial_spreads"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"121573"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"commercial_long"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"3456965"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"commercial_short"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"2188950"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"total_long"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"4006435"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"total_short"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"4138081"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"nonreportable_positions_long"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"267944"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"nonreportable_positions_short"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"136297"})]})]})]}),(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Look up reports not listed under ",(0,s.jsx)(t.code,{children:"obb.regulators.cftc.cot_search()"})," by using the Nasdaq Data Link code for the series. Refer to their documentation for a complete list."]})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"Parameters"}),(0,s.jsx)(t.p,{children:"There are parameters that will alter the type of report returned."}),(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"Not every combination of parameters is valid for all reports. An error will be raised when parameters are invalid."})}),(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:(0,s.jsx)(t.code,{children:"data_type"})}),(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"data_type"})," changes what is returned, futures or futures and options."]}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"F"})," (futures only)"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"FO"})," (futures and options)"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"CITS"})," (Commodity Index Trader Supplemental - only valid for commodities.)"]}),"\n"]}),"\n"]}),(0,s.jsx)(t.p,{children:"The Supplemental report includes 13 select agricultural commodity contracts for combined futures and options positions. Supplemental reports break down the reportable open interest positions into three trader classifications:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Non-Commercial"}),"\n",(0,s.jsx)(t.li,{children:"Commercial"}),"\n",(0,s.jsx)(t.li,{children:"Index Traders"}),"\n"]}),(0,s.jsx)(t.p,{children:"The example below is the CITS report for corn futures."}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'zc_cits =  obb.regulators.cftc.cot("ZC=F", data_type="CITS").to_df()\n\nzc_cits.iloc[-1]\n'})}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"}}),(0,s.jsx)(t.th,{style:{textAlign:"right"},children:"2023-11-14"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"open_interest_all"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"1837197"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"noncommercial_positions_long_all_no_cit"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"125917"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"noncommercial_positions_short_all_no_cit"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"322629"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"noncommercial_positions_spreading_all_no_cit"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"564330"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"commercial_positions_long_all_no_cit"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"591691"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"commercial_positions_short_all_no_cit"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"602447"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"total_reportable_positions_long_all"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"1635294"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"total_reportable_positions_short_all"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"1612623"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"nonreportable_positions_long_all"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"201904"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"nonreportable_positions_short_all"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"224575"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"positions_long_cit"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"353355"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"positions_short_cit"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"123216"})]})]})]})]}),(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:(0,s.jsx)(t.code,{children:"legacy_format"})}),(0,s.jsxs)(t.p,{children:["When ",(0,s.jsx)(t.code,{children:"True"}),", reports are broken down by exchange. These reports have a futures only report and a combined futures and options report. Legacy reports break down the reportable open interest positions into two classifications: non-commercial and commercial traders."]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'legacy_zt = obb.regulators.cftc.cot("ZT=F", legacy_format=True).to_df()\n\nlegacy_zt.iloc[-1]\n'})}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"}}),(0,s.jsx)(t.th,{style:{textAlign:"right"},children:"2023-11-14"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"open_interest"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"4274379"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"dealer_longs"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"138114"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"dealer_shorts"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"367211"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"dealer_spreads"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"37152"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"asset_manager_longs"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"1893280"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"asset_manager_shorts"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"504752"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"asset_manager_spreads"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"297009"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"leveraged_funds_longs"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"968702"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"leveraged_funds_shorts"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"2595004"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"leveraged_funds_spreads"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"133108"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"other_reportable_longs"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"507457"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"other_reportable_shorts"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"172232"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"other_reportable_spreads"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"31614"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"total_reportable_longs"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"4006435"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"total_reportable_shorts"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"4138081"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"non_reportable_longs"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"267944"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"non_reportable_shorts"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"136298"})]})]})]})]}),(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:(0,s.jsx)(t.code,{children:"report_type"})}),(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"report_type"})," parameter has four choices:"]}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"ALL"})}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"CHG"})," (change in positions)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"OLD"}),"(old crop years)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"OTR"})," (other crop years)"]}),"\n"]}),(0,s.jsx)(t.p,{children:'For selected commodities where there is a well-defined marketing season or crop year, the COT data are broken down by "old" and "other" crop years. The "Major Markets for Which the COT Data Is Shown by Crop Year" table (shown below) lists those commodities and the first and last futures of the marketing season or crop year. In order not to disclose positions in a single future near its expiration, on the first business day of the month of the last future in an "old" crop year, the data for that last future is combined with the data for the next crop year and is shown as "old" crop futures. An example is CBOT wheat, where the first month of the crop year is July and the last month of the prior crop year is May. On May 3, 2004, positions in the May 2004 futures month were aggregated with positions in the July 2004 through May 2005 futures months and shown as "old" crop futures. Positions in all subsequent wheat futures months were shown as "other."'}),(0,s.jsx)(t.p,{children:'For the "old" and "other" figures, spreading is calculated for equal long and short positions within a crop year. If a non-commercial trader holds a long position in an "old" crop-year future and an equal short position in an "other" crop-year future, the long position will be classified as "long-only" in the "old" crop year and the short position will be classified as "short-only" in the "other" crop year. In this example, in the "all" category, which considers each trader\'s positions without regard to crop year, that trader\'s positions will be classified as "spreading." For this reason, summing the "old" and "other" figures for long-only, for short-only, or for spreading will not necessarily equal the corresponding figure shown for "all" futures. Any differences result from traders that spread from an "old" crop-year future to an "other" crop-year future.'})]}),(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"Major Market - COT by Crop Year"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Market"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Commodity"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"First Future"}),(0,s.jsx)(t.th,{style:{textAlign:"right"},children:"Last Future"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"CBOT"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Wheat"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"July"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"May"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"CBOT"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Corn"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"December"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"September"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"CBOT"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Oats"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"July"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"May"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"CBOT"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Soybeans"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"September"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"August"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"CBOT"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Soybean Oil"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"October"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"September"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"CBOT"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Soybean Meal"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"October"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"September"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"CBOT"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Rough Rice"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"September"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"July"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"KCBT"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Wheat"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"July"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"May"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"MGE"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Wheat"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"September"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"July"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"CME"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Lean Hogs"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"December"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"October"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"CME"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Frozen Pork Bellies"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"February"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"August"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"NYBT"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Cocoa"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"December"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"September"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"NYBT"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Coffee C"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"December"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"September"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"NYBT"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Cotton No.2"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"October"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"July"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"NYBT"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Frozen Conc Orange Juice"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"January"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"November"})]})]})]})]}),(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:(0,s.jsx)(t.code,{children:"measure"})}),(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"measure"})," parameter has four choices, with ",(0,s.jsx)(t.code,{children:"None"})," as the default state."]}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"CR"})," (concentration ratios)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"NT"})," (number of traders)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"OI"})," (percent of open interest)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"CHG"})," (change in positions - only valid for when ",(0,s.jsx)(t.code,{children:"data_type"})," is 'CITS')"]}),"\n"]}),(0,s.jsx)(t.p,{children:'The report shows the percents of open interest held by the largest four and eight reportable traders, without regard to whether they are classified as commercial or non-commercial. The concentration ratios are shown with trader positions computed on a gross long and gross short basis and on a net long or net short basis. The "Net Position" ratios are computed after offsetting each trader\u2019s equal long and short positions. A reportable trader with relatively large, balanced long and short positions in a single market, therefore, may be among the four and eight largest traders in both the gross long and gross short categories, but will probably not be included among the four and eight largest traders on a net basis.'}),(0,s.jsx)(t.p,{children:"Based on the information contained in the report of futures-and-options combined in the short format, the Supplemental report shows an additional category of \u201cIndex Traders\u201d in selected agricultural markets. These traders are drawn from the noncommercial and commercial categories. The noncommercial category includes positions of managed funds, pension funds, and other investors that are generally seeking exposure to a broad index of commodity prices as an asset class in an unleveraged and passively-managed manner. The commercial category includes positions for entities whose trading predominantly reflects hedging of over-the-counter transactions involving commodity indices\u2014for example, a swap dealer holding long futures positions to hedge a short commodity index exposure opposite institutional traders, such as pension funds."}),(0,s.jsx)(t.p,{children:"All of these traders\u2014whether coming from the noncommercial or commercial categories\u2014are generally replicating a commodity index by establishing long futures positions in the component markets and then rolling those positions forward from future to future using a fixed methodology. Some traders assigned to the Index Traders category are engaged in other futures activity that could not be disaggregated. As a result, the Index Traders category, which is typically made up of traders with long-only futures positions replicating an index, will include some long and short positions where traders have multi-dimensional trading activities, the preponderance of which is index trading. Likewise, the Index Traders category will not include some traders who are engaged in index trading, but for whom it does not represent a substantial part of their overall trading activity."})]}),(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:(0,s.jsx)(t.code,{children:"transform"})}),(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"transform"})," parameter modifies the requested report to show the values as the week-over-week difference, rate of change, cumulative, or normalized.  These are standard parameters for all Nasdaq Data Link queries."]}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"diff"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"rdiff"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"cumul"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"normalize"})}),"\n"]}),(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Explanations in this page are from the explanatory notes on the CFTC's ",(0,s.jsx)(t.a,{href:"https://www.cftc.gov/MarketReports/CommitmentsofTraders/ExplanatoryNotes/index.htm",children:"website"})]})})]})]})]})}function x(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var s=r(5260),n=r(74848);function i(e){let{title:t}=e;return(0,n.jsx)(s.A,{children:(0,n.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>o});var s=r(96540);const n={},i=s.createContext(n);function l(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);