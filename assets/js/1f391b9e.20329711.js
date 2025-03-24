"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66061],{67973:(e,t,s)=>{s.r(t),s.d(t,{default:()=>p});s(96540);var a=s(34164),n=s(69024),l=s(17559),r=s(48772),o=s(2441),c=s(19153),i=s(50996),d=s(44642);const m={mdxPageWrapper:"mdxPageWrapper_j9I6"};var g=s(74848);function p(e){const{content:t}=e,{metadata:{title:s,editUrl:p,description:u,frontMatter:h,unlisted:x,lastUpdatedBy:f,lastUpdatedAt:N},assets:k}=t,{keywords:A,wrapperClassName:b,hide_table_of_contents:j}=h,v=k.image??h.image,C=!!(p||N||f);return(0,g.jsx)(n.e3,{className:(0,a.A)(b??l.G.wrapper.mdxPages,l.G.page.mdxPage),children:(0,g.jsxs)(r.A,{children:[(0,g.jsx)(n.be,{title:s,description:u,keywords:A,image:v}),(0,g.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,g.jsxs)("div",{className:(0,a.A)("row",m.mdxPageWrapper),children:[(0,g.jsxs)("div",{className:(0,a.A)("col",!j&&"col--8"),children:[x&&(0,g.jsx)(i.A,{}),(0,g.jsx)("article",{children:(0,g.jsx)(o.A,{children:(0,g.jsx)(t,{})})}),C&&(0,g.jsx)(d.A,{className:(0,a.A)("margin-top--sm",l.G.pages.pageFooterEditMetaRow),editUrl:p,lastUpdatedAt:N,lastUpdatedBy:f})]}),!j&&t.toc.length>0&&(0,g.jsx)("div",{className:"col col--2",children:(0,g.jsx)(c.A,{toc:t.toc,minHeadingLevel:h.toc_min_heading_level,maxHeadingLevel:h.toc_max_heading_level})})]})})]})})}},45822:(e,t,s)=>{s.d(t,{A:()=>o});s(96540);var a=s(34164),n=s(97795),l=s(42626),r=s(74848);function o(e){let{children:t,className:s}=e;return(0,r.jsx)(n.A,{as:"pre",tabIndex:0,className:(0,a.A)(l.A.codeBlockStandalone,"thin-scrollbar",s),children:(0,r.jsx)("code",{className:l.A.codeBlockLines,children:t})})}},10417:(e,t,s)=>{s.d(t,{A:()=>f});var a=s(6342),n=s(26058),l=s(34291),r=s(96591),o=s(97795),c=s(52830),i=s(14718),d=s(97044),m=s(34164),g=s(71765),p=s(96540),u=s(56347),h=s(42626),x=s(74848);function f(e){let{children:t,className:s="",metastring:f,title:N,showLineNumbers:k,language:A}=e;const[b,j]=(0,p.useState)(null),{prism:{defaultLanguage:v,magicComments:C}}=(0,a.p)(),w=A??(0,l.Op)(s)??v,L=(0,n.A)(),_=(0,r.f)(),B=(0,l.wt)(f)||N,{lineClassNames:y,code:S}=(0,l.Li)(t,{metastring:f,language:w,magicComments:C}),W=k??(0,l._u)(f),H=f?.includes("wordwrap"),P=function(){const e=new Date;e.setMonth(e.getMonth()+1),e.setDate(1);let t=(5-e.getDay()+7)%7;t+=15,e.setDate(t);const s=e.getFullYear().toString(),a=(e.getMonth()+1).toString().padStart(2,"0"),n=e.getDate().toString().padStart(2,"0");return`${s}-${a}-${n}`}(),O=S.replace("2022-07-29",P),{pathname:E}=(0,u.zy)();(0,p.useEffect)((()=>{if($.current&&E.startsWith("/bot/")){const e=$.current.parentElement.previousElementSibling;if(e&&e.id.includes("examples")){const e=function(e,t){if(!e.startsWith("/bot/"))return null;const s=e.split("/")[4],a=e.split("/")[3];let n="c3m";if("charts"!=s&&"general"!=s||"discord"!=a)if("telegram"==a)console.log(s),n="etf"==s.toString()||"screeners"==s.toString()?t.split(" ")[1].toLowerCase():t.split(" ")[0].toLowerCase().replace("/","");else try{n=t.split(" ")[1].toLowerCase().replace("/",""),"defi"==n&&(n=t.split(" ")[2].toLowerCase().replace("/",""))}catch(l){n=t.split(" ")[0].toLowerCase().replace("/","")}else n=t.split(" ")[0].toLowerCase().replace("/","");return`https://openbb-assets.s3.amazonaws.com/${a}/${s}/${n}.png`}(E,O);j(e)}}}),[]);const $=(0,p.useRef)(null);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(o.A,{as:"div",className:(0,m.A)(s,w&&!s.includes(`language-${w}`)&&`language-${w}`),children:[B&&(0,x.jsx)("div",{className:h.A.codeBlockTitle,children:B}),(0,x.jsxs)("div",{className:h.A.codeBlockContent,ref:$,children:[(0,x.jsx)(g.f4,{theme:L,code:O,language:w??"text",children:e=>{let{className:t,tokens:s,getLineProps:a,getTokenProps:n}=e;return(0,x.jsx)("pre",{tabIndex:0,ref:_.codeBlockRef,className:(0,m.A)(t,h.A.codeBlock,"thin-scrollbar"),children:(0,x.jsx)("code",{style:H?{whiteSpace:"pre-wrap",overflowWrap:"anywhere"}:{},className:(0,m.A)(h.A.codeBlockLines,W&&h.A.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,x.jsx)(i.A,{line:e,getLineProps:a,getTokenProps:n,classNames:y[t],showLineNumbers:W},t)))})})}}),(0,x.jsxs)("div",{className:h.A.buttonGroup,children:[(_.isEnabled||_.isCodeScrollable)&&(0,x.jsx)(d.A,{className:h.A.codeButton,onClick:()=>_.toggle(),isEnabled:_.isEnabled}),(0,x.jsx)(c.A,{className:h.A.codeButton,code:O})]})]})]}),b&&(0,x.jsx)("img",{width:"70%",height:"70%",onError:()=>{j(null)},src:b,alt:"example"})]})}},98257:(e,t,s)=>{s.d(t,{A:()=>r});var a=s(56347),n=s(61943),l=(s(96540),s(74848));function r(e){const{pathname:t}=(0,a.zy)();return t.startsWith("/workspace/reference")||t.startsWith("/sdk/reference")||t.startsWith("/platform/reference")||t.startsWith("/bot/reference")?null:(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(n.A,{...e})})}},61385:(e,t,s)=>{s.d(t,{A:()=>d});var a=s(96540),n=s(34164),l=s(83551);const r={details:"details_r1OI"};var o=s(74848);const c="alert alert--info";function i(e){let{...t}=e;return(0,o.jsx)(l.B,{...t,className:(0,n.A)(c,r.details,t.className)})}function d(e){const t=a.Children.toArray(e.children),s=t.find((e=>a.isValidElement(e)&&"summary"===e.props?.mdxType)),n=(0,o.jsx)(o.Fragment,{children:t.filter((e=>e!==s))});return(0,o.jsx)(i,{...e,summary:s,children:n})}},19153:(e,t,s)=>{s.d(t,{A:()=>c});var a=s(56347),n=s(83912),l=s(34164);s(96540);const r={tableOfContents:"tableOfContents_jeP5",docItemContainer:"docItemContainer_hgFs"};var o=s(74848);function c(e){let{className:t,...s}=e;const{pathname:c}=(0,a.zy)();return c.startsWith("/sdk/reference/")?null:(0,o.jsx)("div",{className:(0,l.A)(r.tableOfContents,"thin-scrollbar text-sm mt-[48px] xl:max-w-[216px]",t),children:s?.toc?.some((e=>1===e.level||2===e.level||3===e.level))&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{className:"uppercase text-sm font-bold text-grey-600 dark:text-grey-200 tracking-widest mb-2",children:"On this page"}),(0,o.jsx)(n.A,{...s,linkClassName:"text-grey-400 capitalize !no-underline",linkActiveClassName:"!text-white"})]})})}},83912:(e,t,s)=>{s.d(t,{A:()=>m});var a=s(96540),n=s(6342),l=s(37243),r=s(20366),o=s(34164),c=s(74848);function i(e){let{toc:t,className:s,linkClassName:a,isChild:n}=e;return t.length?(0,c.jsx)("ul",{className:n?"list-none ml-1 border-l border-grey-300 dark:border-grey-600 mt-2":"border-l border-grey-300 dark:border-grey-600 list-none pl-4",children:t.map(((e,t)=>(0,c.jsxs)("li",{className:(0,o.A)({"pb-1":0===t,"py-1":0!==t,"pl-3":n}),children:[(0,c.jsx)("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,c.jsx)(i,{isChild:!0,toc:e.children,className:s,linkClassName:a})]},e.id)))}):null}const d=a.memo(i);function m(e){let{toc:t,className:s="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:m,maxHeadingLevel:g,...p}=e;const u=(0,n.p)(),h=m??u.tableOfContents.minHeadingLevel,x=g??u.tableOfContents.maxHeadingLevel,f=(0,l.h)({toc:t,minHeadingLevel:h,maxHeadingLevel:x}),N=(0,a.useMemo)((()=>{if(o&&i)return{linkClassName:o,linkActiveClassName:i,minHeadingLevel:h,maxHeadingLevel:x}}),[o,i,h,x]);return(0,r.i)(N),(0,c.jsx)(d,{toc:f,className:s,linkClassName:o,...p})}},42626:(e,t,s)=>{s.d(t,{A:()=>a});const a={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"}}}]);