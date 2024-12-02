"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25452],{72741:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>o,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var n=i(74848),s=i(28453),l=i(94331);const r={title:"Introduction to Financial Statements",sidebar_position:5,description:"This page provides an introduction to financial statement data available in the OpenBB Platform. This includes quarterly and annual reports, along with metrics and ratios by company. This guide provides examples for using the variety of sources.",keywords:["stocks","companies","earnings","dividends","expectations","dividend yield","analyst consensus","EPS","assets","total assets","financial statements","cash flow statement","income statement","balance sheet","ratios","quick ratio","dividends","market cap"]},a=void 0,d={id:"platform/getting_started/financial_statements",title:"Introduction to Financial Statements",description:"This page provides an introduction to financial statement data available in the OpenBB Platform. This includes quarterly and annual reports, along with metrics and ratios by company. This guide provides examples for using the variety of sources.",source:"@site/content/platform/getting_started/financial_statements.mdx",sourceDirName:"platform/getting_started",slug:"/platform/getting_started/financial_statements",permalink:"/platform/getting_started/financial_statements",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/getting_started/financial_statements.mdx",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1733155838e3,sidebarPosition:5,frontMatter:{title:"Introduction to Financial Statements",sidebar_position:5,description:"This page provides an introduction to financial statement data available in the OpenBB Platform. This includes quarterly and annual reports, along with metrics and ratios by company. This guide provides examples for using the variety of sources.",keywords:["stocks","companies","earnings","dividends","expectations","dividend yield","analyst consensus","EPS","assets","total assets","financial statements","cash flow statement","income statement","balance sheet","ratios","quick ratio","dividends","market cap"]},sidebar:"tutorialSidebar",previous:{title:"Loading Historical Price Data",permalink:"/platform/getting_started/historical_prices"},next:{title:"Market Calendars",permalink:"/platform/getting_started/market_calendars"}},h={},c=[{value:"Financial Statements",id:"financial-statements",level:2},{value:"Search Financial Attributes",id:"search-financial-attributes",level:4},{value:"Ratios and Other Metrics",id:"ratios-and-other-metrics",level:2}];function x(e){const t={a:"a",admonition:"admonition",annotation:"annotation",code:"code",h2:"h2",h4:"h4",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{Details:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.A,{title:"Financial Statements - Usage | OpenBB Platform Docs"}),"\n",(0,n.jsx)(t.p,{children:"OpenBB Platform data extensions provide access to financial statements as quarterly or annual."}),"\n",(0,n.jsx)(t.p,{children:"There are also endpoints for ratios and other common non-GAAP metrics."}),"\n",(0,n.jsx)(t.p,{children:"Most data providers require a subscription to access all data, refer to the website of a specific provider for details on entitlements and coverage."}),"\n",(0,n.jsxs)(t.p,{children:["Financial statement functions are grouped under the ",(0,n.jsx)(t.code,{children:"obb.equity.fundamental"})," module."]}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsx)(t.p,{children:"To begin, import the OpenBB Platform into a Python session:"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb import obb\n"})})]}),"\n",(0,n.jsx)(t.h2,{id:"financial-statements",children:"Financial Statements"}),"\n",(0,n.jsx)(t.p,{children:"The typical financial statements consist of three endpoints:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Balance Sheet: ",(0,n.jsx)(t.code,{children:"obb.equity.fundamental.balance()"})]}),"\n",(0,n.jsxs)(t.li,{children:["Income Statement: ",(0,n.jsx)(t.code,{children:"obb.equity.fundamental.income()"})]}),"\n",(0,n.jsxs)(t.li,{children:["Cash Flow Statement: ",(0,n.jsx)(t.code,{children:"obb.equity.fundamental.cash()"})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The main parameters are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"symbol"}),": The company's ticker symbol."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"period"}),": 'annual' or 'quarter'. Default is 'annual'."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"limit"}),": Limit the number of results returned, from the latest. Default is 5. For perspective, 150 will go back to 1985. The amount of historical records varies by provider."]}),"\n"]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{mdxType:"summary",children:"Field Names"}),(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Every data provider has their own way of parsing and organizing the three financial statements."}),"\n",(0,n.jsx)(t.li,{children:"Items within each statement will vary by source and by the type of company reporting."}),"\n",(0,n.jsx)(t.li,{children:"Names of line items will vary by source."}),"\n",(0,n.jsx)(t.li,{children:'"Date" values may differ because they are from the period starting/ending or date of reporting.'}),"\n"]})}),(0,n.jsx)(t.p,{children:"This example highlights how different providers will have different labels for company facts."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import pandas as pd\n\ndf = pd.DataFrame()\n\ndf["yfinance"] = (\n  obb.equity.fundamental.balance("TGT", provider="yfinance", limit=3)\n  .to_df().get("total_assets")\n)\n\ndf["fmp"] = (\n  obb.equity.fundamental.balance("TGT", provider="fmp", limit=3)\n  .to_df().get("total_assets")\n)\n\ndf["intrinio"] = (\n  obb.equity.fundamental.balance("TGT", provider="intrinio", limit=3)\n  .to_df().get("total_assets")\n)\n\ndf["polygon"] = (\n  obb.equity.fundamental.balance("TGT", provider="polygon", limit=3)\n  .to_df().get("total_assets")\n)\n\ndf\n'})}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"right"}}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"yfinance"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"fmp"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"intrinio"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"polygon"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"42779000000"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"42779000000"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"42779000000"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"42779000000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"1"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"51248000000"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"51248000000"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"51248000000"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"51248000000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"2"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"53811000000"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"53811000000"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"53811000000"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"53811000000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"3"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"53335000000"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"53335000000"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"53335000000"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"53335000000"})]})]})]})]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{mdxType:"summary",children:"Weighted Average Shares Outstanding"}),(0,n.jsx)(t.p,{children:"This key metric will be found under the income statement. It might also be called, 'basic', and the numbers do not include authorized but unissued shares."}),(0,n.jsx)(t.p,{children:"A declining count over time is a sign that the company is returning capital to shareholders in the form of buy backs. Under ideal circumstances, it is more capital-efficient, for both company and shareholders, because distributions are double-taxed."}),(0,n.jsx)(t.p,{children:"The company pays income tax on dividends paid, and the beneficiary pays income tax again on receipt."}),(0,n.jsx)(t.p,{children:"A company will disclose how many shares are outstanding at the end of the period  as a weighted average over the reporting period - three months."}),(0,n.jsx)(t.p,{children:"Let's take a look at Target. To make the numbers easier to read, we'll divide the entire column by one million."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'data = (\n  obb.equity.fundamental.income("TGT", provider=\'fmp\', limit=150, period="quarter")\n  .to_df()\n)\n\nshares = data["weighted_average_basic_shares_outstanding"]/1000000\n'})}),(0,n.jsx)(t.p,{children:"Where this data starts,"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"shares.head(1)\n"})}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"date"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"weighted_average_basic_shares_outstanding"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1986-07-31"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"1168.82"})]})})]}),(0,n.jsx)(t.p,{children:"versus currently,"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"shares.tail(1)\n"})}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"date"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"weighted_average_basic_shares_outstanding"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"2023-10-31"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"461.6"})]})})]}),(0,n.jsx)(t.p,{children:"Thirty-seven years later, the share count is approaching a two-thirds reduction. That is 12.2% over the past five years."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"shares.pct_change(20).iloc[-1]\n"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"-0.12\n"})}),(0,n.jsx)(t.p,{children:"In four reporting periods, 1.3 million shares have been taken out of the float."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"shares.iloc[-4] - shares.iloc[-1]\n"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"-1.3\n"})}),(0,n.jsxs)(t.p,{children:["With an average closing price of ",(0,n.jsxs)(t.span,{className:"katex",children:[(0,n.jsx)(t.span,{className:"katex-mathml",children:(0,n.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(t.semantics,{children:[(0,n.jsxs)(t.mrow,{children:[(0,n.jsx)(t.mn,{children:"144.27"}),(0,n.jsx)(t.mo,{separator:"true",children:","}),(0,n.jsx)(t.mi,{children:"t"}),(0,n.jsx)(t.mi,{children:"h"}),(0,n.jsx)(t.mi,{children:"a"}),(0,n.jsx)(t.mi,{children:"t"}),(0,n.jsx)(t.mi,{children:"r"}),(0,n.jsx)(t.mi,{children:"e"}),(0,n.jsx)(t.mi,{children:"p"}),(0,n.jsx)(t.mi,{children:"r"}),(0,n.jsx)(t.mi,{children:"e"}),(0,n.jsx)(t.mi,{children:"s"}),(0,n.jsx)(t.mi,{children:"e"}),(0,n.jsx)(t.mi,{children:"n"}),(0,n.jsx)(t.mi,{children:"t"}),(0,n.jsx)(t.mi,{children:"s"}),(0,n.jsx)(t.mi,{children:"a"}),(0,n.jsx)(t.mi,{children:"p"}),(0,n.jsx)(t.mi,{children:"p"}),(0,n.jsx)(t.mi,{children:"r"}),(0,n.jsx)(t.mi,{children:"o"}),(0,n.jsx)(t.mi,{children:"x"}),(0,n.jsx)(t.mi,{children:"i"}),(0,n.jsx)(t.mi,{children:"m"}),(0,n.jsx)(t.mi,{children:"a"}),(0,n.jsx)(t.mi,{children:"t"}),(0,n.jsx)(t.mi,{children:"e"}),(0,n.jsx)(t.mi,{children:"l"}),(0,n.jsx)(t.mi,{children:"y"})]}),(0,n.jsx)(t.annotation,{encoding:"application/x-tex",children:"144.27, that represents approximately "})]})})}),(0,n.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(t.span,{className:"base",children:[(0,n.jsx)(t.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(t.span,{className:"mord",children:"144.27"}),(0,n.jsx)(t.span,{className:"mpunct",children:","}),(0,n.jsx)(t.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"ha"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"re"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"rese"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"pp"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"ro"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"ima"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,n.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]})})]}),"190M in buy backs."]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'price = (\n  obb.equity.price.historical("TGT", start_date="2022-10-01", provider="fmp")\n  .to_df()\n)\n\nround((price["close"].mean()*1300000)/1000000, 2)\n'})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"187.55\n"})})]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{mdxType:"summary",children:"Dividends Paid"}),(0,n.jsx)(t.p,{children:"Dividends paid is in the cash flow statement. We can calculate the amount-per-share with the reported data."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'dividends = (\n  obb.equity.fundamental.cash("TGT", provider=\'fmp\', limit=150, period="quarter")\n  .to_df()[["payment_of_dividends"]]\n)\n\ndividends["shares"] = data[["weighted_average_basic_shares_outstanding"]]\ndividends["div_per_share"] = abs(dividends["payment_of_dividends"]/dividends["shares"])\n\ndividends["div_per_share"].tail(4)\n'})}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"date"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"div_per_share"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"2023-01-28"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"-1.07973"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"2023-04-29"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"-1.07833"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"2023-07-29"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"-1.08102"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"2023-10-31"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"-1.09835"})]})]})]}),(0,n.jsx)(t.p,{children:"This can be compared against the real amounts paid to common share holders, as announced."}),(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:'The dates immediately above represent the report date, dividends paid are attributed to the quarter they were paid in. The value from "2023-01-28" equates to the fourth quarter of 2022.'})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'data = (\n  obb.equity.fundamental.dividends("TGT", provider="fmp")\n  .to_df()\n  [["ex_dividend_date", "amount"]]\n)\ndata.ex_dividend_date = data.ex_dividend_date.astype(str)\ndata.set_index("ex_dividend_date").loc["2023-08-15": "2022-11-15"]\n'})}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"ex_dividend_date"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"dividend"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"2022-11-15"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"1.08"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"2023-02-14"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"1.08"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"2023-05-16"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"1.08"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"2023-08-15"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"1.1"})]})]})]}),(0,n.jsxs)(t.p,{children:["The numbers check out, and the ",(0,n.jsxs)(t.span,{className:"katex",children:[(0,n.jsx)(t.span,{className:"katex-mathml",children:(0,n.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(t.semantics,{children:[(0,n.jsxs)(t.mrow,{children:[(0,n.jsx)(t.mn,{children:"2"}),(0,n.jsx)(t.mi,{children:"B"}),(0,n.jsx)(t.mi,{children:"p"}),(0,n.jsx)(t.mi,{children:"a"}),(0,n.jsx)(t.mi,{children:"i"}),(0,n.jsx)(t.mi,{children:"d"}),(0,n.jsx)(t.mi,{children:"t"}),(0,n.jsx)(t.mi,{children:"o"}),(0,n.jsx)(t.mi,{children:"i"}),(0,n.jsx)(t.mi,{children:"n"}),(0,n.jsx)(t.mi,{children:"v"}),(0,n.jsx)(t.mi,{children:"e"}),(0,n.jsx)(t.mi,{children:"s"}),(0,n.jsx)(t.mi,{children:"t"}),(0,n.jsx)(t.mi,{children:"o"}),(0,n.jsx)(t.mi,{children:"r"}),(0,n.jsx)(t.mi,{children:"s"}),(0,n.jsx)(t.mi,{children:"o"}),(0,n.jsx)(t.mi,{children:"v"}),(0,n.jsx)(t.mi,{children:"e"}),(0,n.jsx)(t.mi,{children:"r"}),(0,n.jsx)(t.mi,{children:"f"}),(0,n.jsx)(t.mi,{children:"o"}),(0,n.jsx)(t.mi,{children:"u"}),(0,n.jsx)(t.mi,{children:"r"}),(0,n.jsx)(t.mi,{children:"q"}),(0,n.jsx)(t.mi,{children:"u"}),(0,n.jsx)(t.mi,{children:"a"}),(0,n.jsx)(t.mi,{children:"r"}),(0,n.jsx)(t.mi,{children:"t"}),(0,n.jsx)(t.mi,{children:"e"}),(0,n.jsx)(t.mi,{children:"r"}),(0,n.jsx)(t.mi,{children:"s"}),(0,n.jsx)(t.mi,{children:"i"}),(0,n.jsx)(t.mi,{children:"s"}),(0,n.jsx)(t.mi,{children:"m"}),(0,n.jsx)(t.mi,{children:"o"}),(0,n.jsx)(t.mi,{children:"r"}),(0,n.jsx)(t.mi,{children:"e"}),(0,n.jsx)(t.mi,{children:"t"}),(0,n.jsx)(t.mi,{children:"h"}),(0,n.jsx)(t.mi,{children:"a"}),(0,n.jsx)(t.mi,{children:"n"}),(0,n.jsx)(t.mi,{children:"t"}),(0,n.jsx)(t.mi,{children:"e"}),(0,n.jsx)(t.mi,{children:"n"}),(0,n.jsx)(t.mi,{children:"t"}),(0,n.jsx)(t.mi,{children:"i"}),(0,n.jsx)(t.mi,{children:"m"}),(0,n.jsx)(t.mi,{children:"e"}),(0,n.jsx)(t.mi,{children:"s"}),(0,n.jsx)(t.mi,{children:"t"}),(0,n.jsx)(t.mi,{children:"h"}),(0,n.jsx)(t.mi,{children:"e"})]}),(0,n.jsx)(t.annotation,{encoding:"application/x-tex",children:"2B paid to investors over four quarters is more than ten times the "})]})})}),(0,n.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(t.span,{className:"base",children:[(0,n.jsx)(t.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(t.span,{className:"mord",children:"2"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"Bp"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"ai"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"o"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"in"}),(0,n.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"es"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"orso"}),(0,n.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"}),(0,n.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"er"}),(0,n.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"o"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,n.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"q"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"ers"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"ore"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"han"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"im"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"es"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"h"}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"e"})]})})]}),"190M returned through share buy backs."]})]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{mdxType:"summary",children:"Financial Attributes"}),(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"openbb-intrinio"})," data extension has an endpoint for extracting a single fact from financial statements."]}),(0,n.jsxs)(t.p,{children:["There is a helper function for looking up the correct ",(0,n.jsx)(t.code,{children:"tag"}),"."]}),(0,n.jsx)(t.h4,{id:"search-financial-attributes",children:"Search Financial Attributes"}),(0,n.jsx)(t.p,{children:"Search attributes by keyword."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'obb.equity.fundamental.search_attributes("marketcap").to_df().head(1)\n'})}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"right"}}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"id"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"tag"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"statement_code"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"statement_type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"parent_name"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"sequence"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"factor"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"transaction"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"unit"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"tag_BgkbWy"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Market Capitalization"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"marketcap"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"calculations"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"industrial"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"nan"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"valuation"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"usd"})]})})]}),(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"tag"})," is what we need, in this case it is what we searched for."]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'marketcap = (\n  obb.equity.fundamental.historical_attributes(symbol="TGT", tag = "marketcap", frequency="quarterly")\n  .to_df()\n)\n\nmarketcap.tail(5)\n'})}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"date"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"2022-12-31"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"66929627287"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"2023-03-31"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"75023699391"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"2023-06-30"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"59916953938"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"2023-09-30"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"50614370690"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"2023-11-22"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"60495000000"})]})]})]}),(0,n.jsx)(t.p,{children:"Doing some quick math, and ignoring the most recent value, we can see that the market cap of Target was down nearly a quarter over the last four reporting periods."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'marketcap.index = marketcap.index.astype(str)\n(\n    (marketcap.loc["2023-09-30"].value - marketcap.loc["2022-12-31"].value)/marketcap.loc["2022-12-31"].value\n)\n'})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"-0.24\n"})})]}),"\n",(0,n.jsx)(t.h2,{id:"ratios-and-other-metrics",children:"Ratios and Other Metrics"}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)(t.p,{children:"Other valuation functions are derivatives of the financial statements, but the data provider does the math."}),(0,n.jsx)(t.p,{children:"Values are typically ratios between line items, on a per-share basis, or as a percent growth."}),(0,n.jsx)(t.p,{children:"This data set is where you can find EPS, FCF, P/B, EBIT, quick ratio, etc."}),(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{mdxType:"summary",children:"Quick Ratio"}),(0,n.jsx)(t.p,{children:"Target's quick ratio could be one reason why its share price is losing traction against the market. Its ability to pay current obligations is not optimistically reflected in a 0.27 score, approximately 50% below the historical median."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'ratios = (\n  obb.equity.fundamental.ratios("TGT", limit=50, provider="fmp")\n  .to_df()\n)\n\ndisplay(f"Current Quick Ratio: {ratios[\'quick_ratio\'].iloc[-1]}")\ndisplay(f"Median Quick Ratio: {ratios[\'quick_ratio\'].median()}")\n'})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"Current Quick Ratio: 0.27\nMedian Quick Ratio: 0.58\n"})})]}),(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{mdxType:"summary",children:"Free Cash Flow Yield"}),(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"metrics"})," endpoint, with the ",(0,n.jsx)(t.code,{children:"openbb-fmp"})," data extension, has a field for free cash flow yield. It is calculated by taking the free cash flow per share divided by the current share price. We could arrive at this answer by writing some code, but these types of endpoints do the work so we don't have to. This is part of the value-add that API data distributors provide, they allow you to get straight to work with data."]}),(0,n.jsx)(t.p,{children:"We'll use this endpoint to extract the data, and compare with some of Target's competition over the last ten years."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'# List of other retail chains\ntickers = ["COST", "BJ", "DLTR", "DG", "WMT", "BIG", "M", "KSS", "TJX"]\n# Create a dictionary of tickers and company names.\nnames = {\n    ticker: obb.equity.profile(ticker, provider="fmp").results[0].name\n    for ticker in tickers\n}\n# Create a column for each.\nfcf_yield = pd.DataFrame()\nfor ticker in tickers:\n    fcf_yield[names[ticker]] = (\n        obb.equity.fundamental.metrics(ticker, provider="fmp", period="annual", limit=10)\n        .to_df()\n        .reset_index()\n        .set_index("calendar_year")\n        .sort_index(ascending=False)\n        ["free_cash_flow_yield"]\n    )\nfcf_yield.transpose()\n'})}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"}}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"2023"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"2022"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"2021"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"2020"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"2019"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"2018"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"2017"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"2016"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"2015"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"2014"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Costco Wholesale Corporation"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0279218"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0148596"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0265818"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0393512"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0259061"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0274379"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0608836"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.00894059"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0307414"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0374833"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"BJ's Wholesale Club Holdings, Inc."}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"nan"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0447092"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0672128"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.113551"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0566305"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0911069"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0261863"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0658713"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0169474"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"nan"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Dollar Tree, Inc."}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"nan"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.010756"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.013957"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.075627"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.040338"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0412519"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0340694"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0634655"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0166025"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0410471"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Dollar General Corporation"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"nan"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.00825589"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0375074"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0589731"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0369217"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0461971"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0426088"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0507761"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0395241"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0460518"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Walmart Inc."}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0312425"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.028372"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0654622"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0445913"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.062023"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0572749"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.101038"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0735059"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0597117"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0415436"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Big Lots, Inc."}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"nan"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"-0.550469"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0252616"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.115757"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0694642"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"-0.111853"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.037219"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.100721"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.110443"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.089253"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Macy's, Inc."}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"nan"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0504726"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.27098"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0391114"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0913008"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.101426"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.155761"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.098993"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0656336"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.072322"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Kohl's Corporation"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"nan"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"-0.143961"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.189677"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.147968"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.119492"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.139799"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0961367"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.19879"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0816518"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.110697"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The TJX Companies, Inc."}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0271588"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0234975"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0517687"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0401668"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0488266"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0399352"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0536965"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0433279"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0464416"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.0406432"})]})]})]}),(0,n.jsxs)(t.p,{children:["Explore the rest of the ",(0,n.jsx)(t.code,{children:"fundamental"})," module under the ",(0,n.jsx)(t.a,{href:"/platform/reference/equity/fundamental",children:"Reference"})," section."]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},94331:(e,t,i)=>{i.d(t,{A:()=>l});i(96540);var n=i(5260),s=i(74848);function l(e){let{title:t}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>a});var n=i(96540);const s={},l=n.createContext(s);function r(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);