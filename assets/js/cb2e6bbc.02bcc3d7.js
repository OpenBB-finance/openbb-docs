"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43614],{59449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=n(74848),r=n(28453),i=n(94331);const a={title:"sentiment",description:"The page provides a sentiment analysis tool that predicts in-depth sentiment from recent tweets containing pre-specified stock tickers. It offers customizable parameters including the limit of tweets to extract per hour and the number of past days to extract tweets. Additionally, users can choose to show a corresponding change in the stock price, enhancing the analysis.",keywords:["sentiment","tweets analysis","stock market sentiment","Twitter data analysis","predictive sentiment analysis","stock market data"]},o=void 0,c={id:"terminal/reference/stocks/ba/sentiment",title:"sentiment",description:"The page provides a sentiment analysis tool that predicts in-depth sentiment from recent tweets containing pre-specified stock tickers. It offers customizable parameters including the limit of tweets to extract per hour and the number of past days to extract tweets. Additionally, users can choose to show a corresponding change in the stock price, enhancing the analysis.",source:"@site/content/terminal/reference/stocks/ba/sentiment.md",sourceDirName:"terminal/reference/stocks/ba",slug:"/terminal/reference/stocks/ba/sentiment",permalink:"/terminal/reference/stocks/ba/sentiment",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/stocks/ba/sentiment.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719240743e3,frontMatter:{title:"sentiment",description:"The page provides a sentiment analysis tool that predicts in-depth sentiment from recent tweets containing pre-specified stock tickers. It offers customizable parameters including the limit of tweets to extract per hour and the number of past days to extract tweets. Additionally, users can choose to show a corresponding change in the stock price, enhancing the analysis.",keywords:["sentiment","tweets analysis","stock market sentiment","Twitter data analysis","predictive sentiment analysis","stock market data"]},sidebar:"tutorialSidebar",previous:{title:"rise",permalink:"/terminal/reference/stocks/ba/rise"},next:{title:"snews",permalink:"/terminal/reference/stocks/ba/snews"}},d={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{title:"stocks/ba/sentiment - Reference | OpenBB Terminal Docs"}),"\n",(0,s.jsx)(t.p,{children:"Plot in-depth sentiment predicted from tweets from last days that contain pre-defined ticker. [Source: Twitter]"}),"\n",(0,s.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"sentiment [-l LIMIT] [-d N_DAYS_PAST] [-c]\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"}),(0,s.jsx)(t.th,{children:"Choices"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"limit"}),(0,s.jsx)(t.td,{children:"limit of tweets to extract per hour."}),(0,s.jsx)(t.td,{children:"15"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"n_days_past"}),(0,s.jsx)(t.td,{children:"number of days in the past to extract tweets."}),(0,s.jsx)(t.td,{children:"6"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"compare"}),(0,s.jsx)(t.td,{children:"show corresponding change in stock price"}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"2022 Feb 19, 13:16 (\ud83e\udd8b) /stocks/ba/ $ sentiment\nFrom 2022-02-19 retrieving 360 tweets (15 tweets/hour)\nFrom 2022-02-18 retrieving 360 tweets (15 tweets/hour)\nFrom 2022-02-17 retrieving 360 tweets (15 tweets/hour)\nFrom 2022-02-16 retrieving 360 tweets (15 tweets/hour)\nFrom 2022-02-15 retrieving 360 tweets (15 tweets/hour)\nFrom 2022-02-14 retrieving 360 tweets (15 tweets/hour)\nFrom 2022-02-13 retrieving 360 tweets (15 tweets/hour)\n"})}),"\n",(0,s.jsx)(t.hr,{})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(5260),r=n(74848);function i(e){let{title:t}=e;return(0,r.jsx)(s.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(96540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);