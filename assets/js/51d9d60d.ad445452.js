"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83442],{22066:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var s=r(74848),n=r(28453),i=r(94331);const a={title:"mt",description:"This page provides detailed information about how to display Messari timeseries data, explaining the use of key parameters, available data frequency intervals, and how to query the timeseries. It is a resource for understanding and extracting meaningful insights from Messari data.",keywords:["messari timeseries","timeseries parameters","data frequency intervals","messari data sources","timeseries query","messari usage"]},d=void 0,l={id:"terminal/reference/crypto/dd/mt",title:"mt",description:"This page provides detailed information about how to display Messari timeseries data, explaining the use of key parameters, available data frequency intervals, and how to query the timeseries. It is a resource for understanding and extracting meaningful insights from Messari data.",source:"@site/content/terminal/reference/crypto/dd/mt.md",sourceDirName:"terminal/reference/crypto/dd",slug:"/terminal/reference/crypto/dd/mt",permalink:"/terminal/reference/crypto/dd/mt",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/crypto/dd/mt.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719309708e3,frontMatter:{title:"mt",description:"This page provides detailed information about how to display Messari timeseries data, explaining the use of key parameters, available data frequency intervals, and how to query the timeseries. It is a resource for understanding and extracting meaningful insights from Messari data.",keywords:["messari timeseries","timeseries parameters","data frequency intervals","messari data sources","timeseries query","messari usage"]},sidebar:"tutorialSidebar",previous:{title:"mkt",permalink:"/terminal/reference/crypto/dd/mkt"},next:{title:"news",permalink:"/terminal/reference/crypto/dd/news"}},c={},o=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{title:"crypto/dd/mt - Reference | OpenBB Terminal Docs"}),"\n",(0,s.jsxs)(t.p,{children:["Display messari timeseries [Source: ",(0,s.jsx)(t.a,{href:"https://messari.io",children:"https://messari.io"}),"]"]}),"\n",(0,s.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"mt [--list] [-t TIMESERIES] [-i {5m,15m,30m,1h,1d,1w}] [-s START] [-end END] [--include-paid] [-q QUERY [QUERY ...]]\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"}),(0,s.jsx)(t.th,{children:"Choices"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"list"}),(0,s.jsx)(t.td,{children:"Flag to show available timeseries"}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"timeseries"}),(0,s.jsx)(t.td,{children:"Messari timeseries id"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"mcap.realized, fees, iss.rate, reddit.active.users, nvt.adj.90d.ma, txn.tfr.val.med.ntv, daily.vol, exch.flow.in.ntv, mcap.dom, blk.cnt, txn.vol, sply.total.iss, txn.tfr.avg.ntv, txn.tsfr.val.adj, exch.flow.out.usd, nvt.adj, txn.tsfr.val.avg, txn.fee.med.ntv, fees.ntv, blk.size.byte, txn.tfr.val.ntv, txn.tfr.val.med, mcap.circ, sply.liquid, exch.flow.in.usd, sply.out, exch.flow.out.ntv.incl, exch.flow.in.ntv.incl, exch.sply.usd, exch.flow.out.usd.incl, txn.cnt, exch.flow.in.usd.incl, daily.shp, txn.tfr.val.adj.ntv, price, hashrate, exch.flow.out.ntv, real.vol, exch.sply.ntv, txn.fee.avg, txn.tfr.erc721.cnt, twitter.followers, telegram.users, reddit.subscribers, cg.sply.circ, blk.size.bytes.avg, txn.fee.avg.ntv, txn.fee.med, txn.tsfr.cnt, sply.circ, mcap.out, diff.avg, act.addr.cnt, min.rev.ntv, new.iss.ntv, min.rev.usd, new.iss.usd, sply.total.iss.ntv, txn.tfr.erc20.cnt"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"interval"}),(0,s.jsx)(t.td,{children:"Frequency interval"}),(0,s.jsx)(t.td,{children:"1d"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"5m, 15m, 30m, 1h, 1d, 1w"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"start"}),(0,s.jsx)(t.td,{children:"Initial date. Default: A year ago"}),(0,s.jsx)(t.td,{children:"2021-11-25"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"end"}),(0,s.jsx)(t.td,{children:"End date. Default: Today"}),(0,s.jsx)(t.td,{children:"2022-11-25"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"include_paid"}),(0,s.jsx)(t.td,{children:"Flag to show both paid and free sources"}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"query"}),(0,s.jsx)(t.td,{children:"Query to search across all messari timeseries"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,s.jsx)(t.hr,{})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var s=r(5260),n=r(74848);function i(e){let{title:t}=e;return(0,n.jsx)(s.A,{children:(0,n.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>d});var s=r(96540);const n={},i=s.createContext(n);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);