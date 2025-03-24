"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66420],{50504:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>j,frontMatter:()=>h,metadata:()=>c,toc:()=>o});var s=r(74848),n=r(28453),d=r(18228),i=r(19365);const h={title:"Equity Ownership",description:"Get data about major holders for a given company over time"},l=void 0,c={id:"platform/data_models/EquityOwnership",title:"Equity Ownership",description:"Get data about major holders for a given company over time",source:"@site/content/platform/data_models/EquityOwnership.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/EquityOwnership",permalink:"/platform/data_models/EquityOwnership",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/data_models/EquityOwnership.md",tags:[],version:"current",frontMatter:{title:"Equity Ownership",description:"Get data about major holders for a given company over time"},sidebar:"tutorialSidebar",previous:{title:"Equity NBBO",permalink:"/platform/data_models/EquityNBBO"},next:{title:"Equity Peers",permalink:"/platform/data_models/EquityPeers"}},a={},o=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,s.jsx)(t.h3,{id:"class-names",children:"Class names"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Model name"}),(0,s.jsx)(t.th,{children:"Parameters class"}),(0,s.jsx)(t.th,{children:"Data class"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"EquityOwnership"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"EquityOwnershipQueryParams"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"EquityOwnershipData"})})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"from openbb_core.provider.standard_models.equity_ownership import (\nEquityOwnershipData,\nEquityOwnershipQueryParams,\n)\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(d.A,{children:[(0,s.jsx)(i.A,{value:"standard",label:"standard",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Symbol to get data for."}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"Union[date, str]"}),(0,s.jsx)(t.td,{children:"A specific date to get data for."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"page"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Page number of the data to fetch."}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"True"})]})]})]})}),(0,s.jsx)(i.A,{value:"fmp",label:"fmp",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Symbol to get data for."}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"Union[date, str]"}),(0,s.jsx)(t.td,{children:"A specific date to get data for."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"page"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Page number of the data to fetch."}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,s.jsxs)(d.A,{children:[(0,s.jsx)(i.A,{value:"standard",label:"standard",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"Union[date, str]"}),(0,s.jsx)(t.td,{children:"The date of the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cik"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Central Index Key (CIK) for the requested entity."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"filing_date"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"Filing date of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"investor_name"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Investor name of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"security_name"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Security name of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"type_of_security"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Type of security of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"security_cusip"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Security cusip of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"shares_type"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Shares type of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"put_call_share"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Put call share of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"investment_discretion"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Investment discretion of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"industry_title"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Industry title of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"weight"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Weight of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"last_weight"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Last weight of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"change_in_weight"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Change in weight of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"change_in_weight_percentage"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Change in weight percentage of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"market_value"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Market value of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"last_market_value"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Last market value of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"change_in_market_value"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Change in market value of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"change_in_market_value_percentage"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Change in market value percentage of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"shares_number"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Shares number of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"last_shares_number"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Last shares number of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"change_in_shares_number"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Change in shares number of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"change_in_shares_number_percentage"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Change in shares number percentage of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"quarter_end_price"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Quarter end price of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"avg_price_paid"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Average price paid of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"is_new"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsx)(t.td,{children:"Is the stock ownership new."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"is_sold_out"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsx)(t.td,{children:"Is the stock ownership sold out."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ownership"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"How much is the ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"last_ownership"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Last ownership amount."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"change_in_ownership"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Change in ownership amount."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"change_in_ownership_percentage"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Change in ownership percentage."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"holding_period"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Holding period of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"first_added"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"First added date of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"performance"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Performance of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"performance_percentage"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Performance percentage of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"last_performance"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Last performance of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"change_in_performance"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Change in performance of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"is_counted_for_performance"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsx)(t.td,{children:"Is the stock ownership counted for performance."})]})]})]})}),(0,s.jsx)(i.A,{value:"fmp",label:"fmp",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"Union[date, str]"}),(0,s.jsx)(t.td,{children:"The date of the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cik"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Central Index Key (CIK) for the requested entity."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"filing_date"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"Filing date of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"investor_name"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Investor name of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"security_name"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Security name of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"type_of_security"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Type of security of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"security_cusip"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Security cusip of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"shares_type"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Shares type of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"put_call_share"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Put call share of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"investment_discretion"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Investment discretion of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"industry_title"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Industry title of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"weight"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Weight of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"last_weight"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Last weight of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"change_in_weight"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Change in weight of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"change_in_weight_percentage"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Change in weight percentage of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"market_value"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Market value of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"last_market_value"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Last market value of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"change_in_market_value"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Change in market value of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"change_in_market_value_percentage"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Change in market value percentage of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"shares_number"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Shares number of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"last_shares_number"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Last shares number of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"change_in_shares_number"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Change in shares number of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"change_in_shares_number_percentage"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Change in shares number percentage of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"quarter_end_price"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Quarter end price of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"avg_price_paid"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Average price paid of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"is_new"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsx)(t.td,{children:"Is the stock ownership new."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"is_sold_out"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsx)(t.td,{children:"Is the stock ownership sold out."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ownership"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"How much is the ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"last_ownership"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Last ownership amount."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"change_in_ownership"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Change in ownership amount."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"change_in_ownership_percentage"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Change in ownership percentage."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"holding_period"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Holding period of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"first_added"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"First added date of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"performance"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Performance of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"performance_percentage"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Performance percentage of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"last_performance"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Last performance of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"change_in_performance"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Change in performance of the stock ownership."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"is_counted_for_performance"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsx)(t.td,{children:"Is the stock ownership counted for performance."})]})]})]})})]})]})}function j(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var s=r(34164);const n={tabItem:"tabItem_Ymn6"};var d=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,s.A)(n.tabItem,i),hidden:r,children:t})}},18228:(e,t,r)=>{r.d(t,{A:()=>y});var s=r(56347),n=r(23104),d=r(96540),i=r(205),h=r(57485),l=r(31682),c=r(89466);function a(e){return function(e){return d.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,d.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:s,default:n}}=e;return{value:t,label:r,attributes:s,default:n}}))}function o(e){const{values:t,children:r}=e;return(0,d.useMemo)((()=>{const e=t??a(r);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,h.aZ)(i),(0,d.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function u(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,n=o(e),[h,l]=(0,d.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:n}))),[a,u]=j({queryString:r,groupId:s}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,n]=(0,c.Dv)(r);return[s,(0,d.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:s}),m=(()=>{const e=a??p;return x({value:e,tabValues:n})?e:null})();(0,i.A)((()=>{m&&l(m)}),[m]);return{selectedValue:h,selectValue:(0,d.useCallback)((e=>{if(!x({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,n]),tabValues:n}}var p=r(92303),f=r(34164);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function w(e){let{className:t,block:r,selectedValue:d,selectValue:i,tabValues:h}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,n.a_)(),{pathname:a}=(0,s.zy)(),o=e=>{const t=e.currentTarget,r=l.indexOf(t),s=h[r].value;s!==d&&(c(t),i(s))},x=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,f.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:h.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:d===t?0:-1,"aria-selected":d===t,ref:e=>l.push(e),onKeyDown:x,onClick:o,...s,className:(0,f.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,s?.className,{"border-b-2 pointer-events-none":d===t,"border-b-2 text-[#669dcb] border-[#669dcb]":d===t&&a.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":d===t&&a.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":d!==t&&a.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":d===t&&a.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":d!==t&&a.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":d!==t&&a.startsWith("/workspace")}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:s}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===s));return e?(0,d.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,d.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function _(e){const t=u(e);return(0,b.jsxs)("div",{className:(0,f.A)("tabs-container",m.tabList),children:[(0,b.jsx)(w,{...e,...t}),(0,b.jsx)(g,{...e,...t})]})}function y(e){const t=(0,p.A)();return(0,b.jsx)(_,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>h});var s=r(96540);const n={},d=s.createContext(n);function i(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);