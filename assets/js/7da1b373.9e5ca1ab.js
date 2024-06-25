"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36959],{79765:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var o=i(74848),s=i(28453);const t={title:"v2.4.0",version:"2.4.0",date:new Date("2023-02-14T00:00:00.000Z"),description:"v2.4.0",sidebar_position:104},r=void 0,l={id:"terminal/changelog/version2_4_0",title:"v2.4.0",description:"v2.4.0",source:"@site/content/terminal/changelog/version2_4_0.mdx",sourceDirName:"terminal/changelog",slug:"/terminal/changelog/version2_4_0",permalink:"/terminal/changelog/version2_4_0",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/changelog/version2_4_0.mdx",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719309708e3,sidebarPosition:104,frontMatter:{title:"v2.4.0",version:"2.4.0",date:"2023-02-14T00:00:00.000Z",description:"v2.4.0",sidebar_position:104},sidebar:"tutorialSidebar",previous:{title:"v2.4.1",permalink:"/terminal/changelog/version2_4_1"},next:{title:"v2.3.1",permalink:"/terminal/changelog/version2_3_1"}},a={},d=[{value:"What&#39;s new",id:"whats-new",level:2},{value:"What&#39;s changed",id:"whats-changed",level:2}];function c(e){const n={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"whats-new",children:"What's new"}),"\n",(0,o.jsx)(n.p,{children:"We have quite a few things added in the last few weeks"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"New realestate menu under alternative for looking at UK housing data"}),"\n",(0,o.jsx)(n.li,{children:"Mutual fund menu (funds) restored with a new source"}),"\n",(0,o.jsx)(n.li,{children:"The dd stock submenu has been improved and merged into the stocks/fa menu"}),"\n",(0,o.jsx)(n.li,{children:"Intrinio has been added as a source for stocks and stock options"}),"\n",(0,o.jsx)(n.li,{children:"New algolia search engine on the docs"}),"\n",(0,o.jsx)(n.li,{children:"Dependencies have been updated and resolved"}),"\n",(0,o.jsx)(n.li,{children:"General enhancements and bug fixes"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"whats-changed",children:"What's changed"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Report rendering can't handle save path for users that have a period (.) in username (#4235) @tys203831"}),"\n",(0,o.jsx)(n.li,{children:"Fixes bad yFinance candles with auto_adjust=True (#4231) @deeleeramone"}),"\n",(0,o.jsx)(n.li,{children:"Hotfix/Splashscreen Staying up on Windows installer (#4232) @tehcoderer"}),"\n",(0,o.jsx)(n.li,{children:"Block logout command if no auth enabled (#4233) @montezdesousa"}),"\n",(0,o.jsx)(n.li,{children:"Set guest by default and put authentication behind environment variable (#4197) @montezdesousa"}),"\n",(0,o.jsx)(n.li,{children:"Fix generate_portfolio SDK usage example (#4216) @northern-64bit"}),"\n",(0,o.jsx)(n.li,{children:"Changed poetry v for docker build (#4229) @luqmanbello"}),"\n",(0,o.jsx)(n.li,{children:"Feature/general improvements (#4213) @jmaslek"}),"\n",(0,o.jsx)(n.li,{children:"Sunset some dependencies (#4215) @jmaslek"}),"\n",(0,o.jsxs)(n.li,{children:["Fix wrongly formatted values on ",(0,o.jsx)(n.code,{children:"stocks/fa/cash"})," (#4211) @hjoaquim"]}),"\n",(0,o.jsx)(n.li,{children:"Return a dataframe from stocks search, removed export to file system (#3923) (#4193) @joey-walker"}),"\n",(0,o.jsx)(n.li,{children:"Adds algolia to docs (#4208) @jose-donato"}),"\n",(0,o.jsxs)(n.li,{children:["Hotfix/sdk-trailmaps ",(0,o.jsx)(n.code,{children:"portfolio.po"})," deprecated functions, fix ",(0,o.jsx)(n.code,{children:"stocks.disc.filings"}),", ",(0,o.jsx)(n.code,{children:"stocks.fa.sec_fmp"})," (#4210) @tehcoderer"]}),"\n",(0,o.jsx)(n.li,{children:"Adding intrinio and cleaning up options a bit more (#4127) @jmaslek"}),"\n",(0,o.jsx)(n.li,{children:"Update PR Template and Contributing guidelines (#4194) @jmaslek"}),"\n",(0,o.jsx)(n.li,{children:"[FEAT] Nightly Build slack Notifications (#4188) @luqmanbello"}),"\n",(0,o.jsx)(n.li,{children:"Feature/some cleaning (#4170) @hjoaquim"}),"\n",(0,o.jsx)(n.li,{children:"Updating poetry to v1.3.2 and dependencies (#4076) @aia"}),"\n",(0,o.jsxs)(n.li,{children:["Cleanse functionality from relying on ",(0,o.jsx)(n.code,{children:"yfinance"})," (#4176) @JerBouma"]}),"\n",(0,o.jsx)(n.li,{children:"Feature/dependency grooming (#4166) @piiq"}),"\n",(0,o.jsx)(n.li,{children:"Restores numeric values (#4183) @hjoaquim"}),"\n",(0,o.jsx)(n.li,{children:"Fix some account bugs (#4190) @montezdesousa"}),"\n",(0,o.jsx)(n.li,{children:"Add merge group to allow for merge queue (#4191) @jmaslek"}),"\n",(0,o.jsx)(n.li,{children:"[FEAT] Additional metrics for evaluating forecasting (RMSE+ MSE) (#4178) @martinb-bb"}),"\n",(0,o.jsx)(n.li,{children:"Hotfix/banner spaced (#4189) @tehcoderer"}),"\n",(0,o.jsx)(n.li,{children:"Point register to dev (#4184) @montezdesousa"}),"\n",(0,o.jsx)(n.li,{children:"Tests : mocking yfinance tzcache (#4187) @Chavithra"}),"\n",(0,o.jsx)(n.li,{children:"Terminal authentication + keys/settings/routines (#4015) @montezdesousa"}),"\n",(0,o.jsx)(n.li,{children:"Routine remote storage (#4143) @montezdesousa"}),"\n",(0,o.jsx)(n.li,{children:"[Snyk] Upgrade tailwindcss-radix from 2.6.2 to 2.7.0 (#4177) @snyk-bot"}),"\n",(0,o.jsx)(n.li,{children:"Fixing smaller issues and moving a few things around (#4155) @JerBouma"}),"\n",(0,o.jsx)(n.li,{children:"Adjust timezone for AV when interval < 1d (#4158) @hjoaquim"}),"\n",(0,o.jsx)(n.li,{children:"Update the documentation so the importance of API keys is more clear (#4172) @JerBouma"}),"\n",(0,o.jsx)(n.li,{children:"Remove legacy macro endpoints with no country parameter (#4173) @montezdesousa"}),"\n",(0,o.jsx)(n.li,{children:"Fix crypto/disc/top sort (#4167) @montezdesousa"}),"\n",(0,o.jsxs)(n.li,{children:["Showing ",(0,o.jsx)(n.code,{children:"portfolio"})," portfolios after optimizing in ",(0,o.jsx)(n.code,{children:"po"})," now works, cash comment removed from ",(0,o.jsx)(n.code,{children:"portfolio"})," docs and Parameter file info added (#4149) @JerBouma"]}),"\n",(0,o.jsx)(n.li,{children:"Fix portfolio optimization Ticker.info bug (#4145) @montezdesousa"}),"\n",(0,o.jsxs)(n.li,{children:["Remove duplicate ",(0,o.jsx)(n.code,{children:"ruff"})," selection of ",(0,o.jsx)(n.code,{children:"pycodestyle"})," warnings (",(0,o.jsx)(n.code,{children:"W"}),") (#4156) @andyhuynh3"]}),"\n",(0,o.jsx)(n.li,{children:"[Snyk] Upgrade @radix-ui/react-popover from 1.0.2 to 1.0.3 (#4165) @jmaslek"}),"\n",(0,o.jsx)(n.li,{children:"Removed Pyupgrade From CI (#4160) @colin99d"}),"\n",(0,o.jsx)(n.li,{children:"Removing timezone on export xlsx (#4163) @hjoaquim"}),"\n",(0,o.jsx)(n.li,{children:"Retire legacy Jupyter Lab extensions (#4146) @piiq"}),"\n",(0,o.jsxs)(n.li,{children:["Refractor ",(0,o.jsx)(n.code,{children:"stocks/fa"})," by incorporating ",(0,o.jsx)(n.code,{children:"stocks/dd"})," and making the menu less reliant on Yahoo Finance (#4055) @JerBouma"]}),"\n",(0,o.jsx)(n.li,{children:"Fix portfolio/summary command (issue #3960) (#3964) @northern-64bit"}),"\n",(0,o.jsx)(n.li,{children:"Fix load a benchmark that isn't in the list of limited choices + yf.Ticker().info bugs (#4079) @montezdesousa"}),"\n",(0,o.jsx)(n.li,{children:"[Snyk] Upgrade tailwindcss-radix from 2.6.1 to 2.6.2 (#4148) @snyk-bot"}),"\n",(0,o.jsx)(n.li,{children:"Fix portfolio engine assigning close values to the wrong tickers (#4147) @JerBouma"}),"\n",(0,o.jsx)(n.li,{children:"Fix integration test debug mode flag (#4133) @montezdesousa"}),"\n",(0,o.jsx)(n.li,{children:"Feature/add isort linter (#4114) @colin99d"}),"\n",(0,o.jsx)(n.li,{children:"[Snyk] Fix for 2 vulnerabilities (#4129) @snyk-bot"}),"\n",(0,o.jsx)(n.li,{children:"Change integration tests environment variables + add option (#4126) @montezdesousa"}),"\n",(0,o.jsxs)(n.li,{children:["Fix ",(0,o.jsx)(n.code,{children:"economy/macro --transform"})," (#4125) @JerBouma"]}),"\n",(0,o.jsx)(n.li,{children:"Feature/mstarpy (#4068) @Mael-J"}),"\n",(0,o.jsx)(n.li,{children:"Adding CMD Flags to Docs Generation (#4123) @tehcoderer"}),"\n",(0,o.jsx)(n.li,{children:"New functionality for UK Sold house price data (#3969) @kulbinderdio"}),"\n",(0,o.jsx)(n.li,{children:"Automate Publishing to Pypi (#4115) @luqmanbello"}),"\n",(0,o.jsx)(n.li,{children:"Update labels and release drafter (#4116) @jmaslek"}),"\n",(0,o.jsx)(n.li,{children:"Improve website readme (#4099) @hjoaquim"}),"\n",(0,o.jsx)(n.li,{children:"Merge release into develop (#4109) @jmaslek"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var o=i(96540);const s={},t=o.createContext(s);function r(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);