"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[98178],{93548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(74848),a=n(28453),i=n(94331);const s={title:"bbands",description:"This page provides detailed information about the Bollinger Bands (bbands), a volatility indicator in technical analysis, including usage, parameters, visual representation, data interpretation, and their importance in buy or sell signals generation.",keywords:["Bollinger Bands","bbands","technical analysis","volatility indicators","overbought conditions","oversold conditions","price targets","price reversal","support level","resistance level"]},d=void 0,l={id:"terminal/reference/crypto/ta/bbands",title:"bbands",description:"This page provides detailed information about the Bollinger Bands (bbands), a volatility indicator in technical analysis, including usage, parameters, visual representation, data interpretation, and their importance in buy or sell signals generation.",source:"@site/content/terminal/reference/crypto/ta/bbands.md",sourceDirName:"terminal/reference/crypto/ta",slug:"/terminal/reference/crypto/ta/bbands",permalink:"/terminal/reference/crypto/ta/bbands",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/crypto/ta/bbands.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719309708e3,frontMatter:{title:"bbands",description:"This page provides detailed information about the Bollinger Bands (bbands), a volatility indicator in technical analysis, including usage, parameters, visual representation, data interpretation, and their importance in buy or sell signals generation.",keywords:["Bollinger Bands","bbands","technical analysis","volatility indicators","overbought conditions","oversold conditions","price targets","price reversal","support level","resistance level"]},sidebar:"tutorialSidebar",previous:{title:"aroon",permalink:"/terminal/reference/crypto/ta/aroon"},next:{title:"cci",permalink:"/terminal/reference/crypto/ta/cci"}},o={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{title:"crypto/ta/bbands - Reference | OpenBB Terminal Docs"}),"\n",(0,r.jsx)(t.p,{children:"Bollinger Bands consist of three lines. The middle band is a simple moving average (generally 20 periods) of the typical price (TP). The upper and lower bands are F standard deviations (generally 2) above and below the middle band. The bands widen and narrow when the volatility of the price is higher or lower, respectively. Bollinger Bands do not, in themselves, generate buy or sell signals; they are an indicator of overbought or oversold conditions. When the price is near the upper or lower band it indicates that a reversal may be imminent. The middle band becomes a support or resistance level. The upper and lower bands can also be interpreted as price targets. When the price bounces off of the lower band and crosses the middle band, then the upper band becomes the price target."}),"\n",(0,r.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"bbands [-l N_LENGTH] [-s N_STD] [-m {ema,sma,wma,hma,zlma}]\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"}),(0,r.jsx)(t.th,{children:"Choices"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"n_length"}),(0,r.jsx)(t.td,{children:"length"}),(0,r.jsx)(t.td,{children:"15"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"range(1, 100)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"n_std"}),(0,r.jsx)(t.td,{children:"std"}),(0,r.jsx)(t.td,{children:"2"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"0.0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0, 3.25, 3.5, 3.75, 4.0, 4.25, 4.5, 4.75, 5.0, 5.25, 5.5, 5.75, 6.0, 6.25, 6.5, 6.75, 7.0, 7.25, 7.5, 7.75, 8.0, 8.25, 8.5, 8.75, 9.0, 9.25, 9.5, 9.75"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"s_mamode"}),(0,r.jsx)(t.td,{children:"mamode"}),(0,r.jsx)(t.td,{children:"sma"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"ema, sma, wma, hma, zlma"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/154309951-116f3c31-342d-4ceb-b489-8b0ba78eb3a0.png",alt:"bbands"})}),"\n",(0,r.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(5260),a=n(74848);function i(e){let{title:t}=e;return(0,a.jsx)(r.A,{children:(0,a.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>d});var r=n(96540);const a={},i=r.createContext(a);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);