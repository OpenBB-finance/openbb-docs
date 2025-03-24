"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79048],{7476:(t,n,a)=>{a.r(n),a.d(n,{default:()=>Ce});var s=a(96540),o=a(34164),i=a(69024),l=a(17559),r=a(84142),c=a(26588),d=a(21312),m=a(23104),u=a(75062);const h={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var p=a(74848);function b(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,a]=(0,s.useState)(!1),o=(0,s.useRef)(!1),{startScroll:i,cancelScroll:l}=(0,m.gk)();return(0,m.Mq)(((e,n)=>{let{scrollY:s}=e;const i=n?.scrollY;i&&(o.current?o.current=!1:s>=i?(l(),a(!1)):s<t?a(!1):s+window.innerHeight<document.documentElement.scrollHeight&&a(!0))})),(0,u.$)((e=>{e.location.hash&&(o.current=!0,a(!1))})),{shown:n,scrollToTop:()=>i(0)}}({threshold:300});return(0,p.jsx)("button",{"aria-label":(0,d.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.A)("clean-btn",l.G.common.backToTopButton,h.backToTopButton,e&&h.backToTopButtonShow),type:"button",onClick:t})}var x=a(53109),f=a(56347),j=a(24581),g=a(6342),k=a(28774),v=a(86025),C=a(44586),N=a(21122);function _(e){let{logo:t,alt:n,imageClassName:a}=e;const s={light:(0,v.A)(t.src),dark:(0,v.A)(t.srcDark||t.src)},o=(0,p.jsx)(N.A,{className:t.className,sources:s,height:t.height,width:t.width,alt:n,style:t.style});return a?(0,p.jsx)("div",{className:a,children:o}):o}function A(e){const{siteConfig:{title:t}}=(0,C.A)(),{navbar:{title:n,logo:a}}=(0,g.p)(),{imageClassName:s,titleClassName:o,...i}=e,l=(0,v.A)(a?.href||"/"),r=n?"":t,c=a?.alt??r;return(0,p.jsxs)(k.A,{to:l,...i,...a?.target&&{target:a.target},children:[a&&(0,p.jsx)(_,{logo:a,alt:c,imageClassName:s}),null!=n&&(0,p.jsx)("b",{className:o,children:n})]})}function S(e){return(0,p.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,p.jsxs)("g",{fill:"#7a7a7a",children:[(0,p.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,p.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const B={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function y(e){let{onClick:t}=e;return(0,p.jsx)("button",{type:"button",title:(0,d.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,d.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.A)("button button--secondary button--outline",B.collapseSidebarButton),onClick:t,children:(0,p.jsx)(S,{className:B.collapseSidebarButtonIcon})})}var I=a(65041),T=a(89532);const w=Symbol("EmptyContext"),W=s.createContext(w);function E(e){let{children:t}=e;const[n,a]=(0,s.useState)(null),o=(0,s.useMemo)((()=>({expandedItem:n,setExpandedItem:a})),[n]);return(0,p.jsx)(W.Provider,{value:o,children:t})}var L=a(41422),P=a(99169),M=a(92303),H=a(52202);function F(e){let{categoryLabel:t,onClick:n}=e;return(0,p.jsx)("button",{"aria-label":(0,d.T)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function D(t){let{item:n,onItemClick:a,activePath:i,level:c,index:d,...m}=t;const{items:u,label:h,collapsible:b,className:x,href:j}=n,v={"OpenBB Terminal":"/workspace","OpenBB Platform":"/platform","OpenBB Bot":"/bot","OpenBB Terminal Pro":"/pro","OpenBB Add-in for Excel":"/excel","OpenBB Platform CLI":"/cli"}[h]||j,{docs:{sidebar:{autoCollapseCategories:C}}}=(0,g.p)(),N=function(e,t){const n=(0,M.A)();return(0,s.useMemo)((()=>{if(t)return t;!n&&e.collapsible}),[e,n])}(n,v),_=(0,r.w8)(n,i),A=(0,P.ys)(v,i),{collapsed:S,setCollapsed:B}=(0,L.u)({initialState:()=>!!b&&(!_&&n.collapsed)}),{expandedItem:y,setExpandedItem:I}=function(){const e=(0,s.useContext)(W);if(e===w)throw new T.dV("DocSidebarItemsExpandedStateProvider");return e}(),E=function(e){void 0===e&&(e=!S),I(e?null:d),B(e)};!function(e){let{isActive:t,collapsed:n,updateCollapsed:a}=e;const o=(0,T.ZC)(t);(0,s.useEffect)((()=>{t&&!o&&n&&a(!1)}),[t,o,n,a])}({isActive:_,collapsed:S,updateCollapsed:E}),(0,s.useEffect)((()=>{b&&null!=y&&y!==d&&C&&B(!0)}),[b,y,d,B,C]);const{isIFrame:D}=(0,H.jw)(),G=D&&["OpenBB Terminal","OpenBB SDK","OpenBB Bot"].includes(h),O=(0,f.zy)(),R=O.pathname.startsWith("/workspace"),V=O.pathname.startsWith("/excel");return!n.customProps?.hiddenByDefault||R||V?n.customProps?.onlyDirectAccess&&!V?null:(0,p.jsxs)("li",{className:(0,o.A)(l.G.docs.docSidebarItemCategory,l.G.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":S},x),children:[(0,p.jsxs)("div",{className:(0,o.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":A}),children:[(0,p.jsx)(k.A,{className:(0,o.A)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!v&&b,"menu__link--active":_}),onClick:b?e=>{G&&e.preventDefault(),a?.(n),v?E(!1):(e.preventDefault(),E())}:()=>{G&&e.preventDefault(),a?.(n)},"aria-current":A?"page":void 0,"aria-expanded":b?!S:void 0,href:b?N??"#":N,...m,children:h}),v&&b&&(0,p.jsx)(F,{categoryLabel:h,onClick:e=>{e.preventDefault(),E()}})]}),(0,p.jsx)(L.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:S,children:(0,p.jsx)(Z,{items:u,tabIndex:S?-1:0,onItemClick:a,activePath:i,level:c+1})})]}):null}const G={menuHtmlItem:"menuHtmlItem_PEWV"};function O(e){let{item:t,level:n,index:a}=e;const{value:s,defaultStyle:i,className:r}=t;return(0,p.jsx)("li",{className:(0,o.A)(l.G.docs.docSidebarItemLink,l.G.docs.docSidebarItemLinkLevel(n),i&&[G.menuHtmlItem,"menu__list-item"],r),dangerouslySetInnerHTML:{__html:s}},a)}var R=a(16654),V=a(43186);const U={menuExternalLink:"menuExternalLink_NnFM"};function z(e){let{item:t,onItemClick:n,activePath:a,level:s,index:i,...c}=e;const{href:d,label:m,className:u,autoAddBaseUrl:h}=t,b=(0,r.w8)(t,a),x=(0,R.A)(d);return(0,p.jsx)("li",{className:(0,o.A)(l.G.docs.docSidebarItemLink,l.G.docs.docSidebarItemLinkLevel(s),"menu__list-item",u),children:(0,p.jsxs)(k.A,{className:(0,o.A)("menu__link",!x&&U.menuExternalLink,{"menu__link--active":b}),autoAddBaseUrl:h,"aria-current":b?"page":void 0,to:d,...x&&{onClick:n?()=>n(t):void 0},...c,children:[m,!x&&(0,p.jsx)(V.A,{})]})},m)}function Y(e,t){if(e.items)return e.items.every((e=>Y(e,t)));if("link"===e.type){return!e.href.replace(/\/$/,"").startsWith(t)}return"category"===e.type&&e.items.every((e=>Y(e,t)))}function K(e){let{item:t,...n}=e;const{isIFrame:a}=(0,H.jw)(),{pathname:s}=(0,f.zy)(),o=s.startsWith("/workspace"),i=s.startsWith("/excel");if(t.customProps?.hiddenByDefault&&!o&&!i)return null;if(a){if(Y(t,s.split("/").slice(0,3).join("/")))return null}if((o||i)&&!q(t))return null;if(!o&&!i&&t.href?.startsWith("/workspace")&&t.href?.startsWith("/excel"))return null;let l=null,r=null;switch(t.href?.startsWith("/workspace")&&("workspace/index"===t.docId?l=(0,p.jsx)(O,{item:{type:"html",className:"sidebar-title !mt-2",value:"Getting Started",defaultStyle:!0}}):"workspace/data-connector"===t.docId?l=(0,p.jsx)(O,{item:{type:"html",className:"sidebar-title !mt-6",value:"Input Data",defaultStyle:!0}}):"workspace/widgets"===t.docId?l=(0,p.jsx)(O,{item:{type:"html",className:"sidebar-title !mt-6",value:"Visualization",defaultStyle:!0}}):"workspace/openbb-copilot"===t.docId?l=(0,p.jsx)(O,{item:{type:"html",className:"sidebar-title !mt-6",value:"AI Insights",defaultStyle:!0}}):"workspace/templates"===t.docId&&(r=(0,p.jsx)(O,{item:{type:"html",className:"sidebar-title !mt-4",value:"",defaultStyle:!0}}))),t.type){case"category":return(0,p.jsxs)(p.Fragment,{children:[l,(0,p.jsx)(D,{item:t,...n}),r]});case"html":return(0,p.jsxs)(p.Fragment,{children:[l,(0,p.jsx)(O,{item:t,...n}),r]});default:return(0,p.jsxs)(p.Fragment,{children:[l,(0,p.jsx)(z,{item:t,...n}),r]})}}function q(e){return e.items?e.items.some((e=>q(e))):"link"===e.type?e.href?.startsWith("/workspace")||e.href?.startsWith("/excel"):"category"===e.type&&e.items.some((e=>q(e)))}function $(e){let{items:t,...n}=e;const a=(0,r.Y)(t,n.activePath);return(0,p.jsx)(E,{children:a.map(((e,t)=>(0,p.jsx)(K,{item:e,index:t,...n},t)))})}const Z=(0,s.memo)($),J={menu:"menu_Y1UP",menuWithAnnouncementBar:"menuWithAnnouncementBar_fPny"};a(1268);function Q(e){let{path:t,sidebar:n,className:a}=e;const i=function(){const{isActive:e}=(0,I.Mj)(),[t,n]=(0,s.useState)(e);return(0,m.Mq)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}(),{isIFrame:r}=(0,H.jw)();return(0,p.jsx)("nav",{className:(0,o.A)("menu thin-scrollbar !px-10 text-sm !pb-10",{"mt-[40px]":!r},J.menu,i&&J.menuWithAnnouncementBar,a),children:(0,p.jsx)("ul",{className:(0,o.A)(l.G.docs.docSidebarMenu,"menu__list"),children:(0,p.jsx)(Z,{items:n,activePath:t,level:1})})})}const X="sidebar_njMd",ee="sidebarWithHideableNavbar_wUlq",te="sidebarHidden_VK0M",ne="sidebarLogo_isFc";function ae(e){let{path:t,sidebar:n,onCollapse:a,isHidden:s}=e;const{navbar:{hideOnScroll:i},docs:{sidebar:{hideable:l}}}=(0,g.p)();return(0,p.jsxs)("div",{className:(0,o.A)(X,i&&ee,s&&te),children:[i&&(0,p.jsx)(A,{tabIndex:-1,className:ne}),(0,p.jsx)(Q,{path:t,sidebar:n}),l&&(0,p.jsx)(y,{onClick:a})]})}const se=s.memo(ae);var oe=a(75600),ie=a(22069);const le=e=>{let{sidebar:t,path:n}=e;const a=(0,ie.M)();return(0,p.jsx)("ul",{className:(0,o.A)(l.G.docs.docSidebarMenu,"menu__list"),children:(0,p.jsx)(Z,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function re(e){return(0,p.jsx)(oe.GX,{component:le,props:e})}const ce=s.memo(re);function de(e){const t=(0,j.l)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,p.jsxs)(p.Fragment,{children:[n&&(0,p.jsx)(se,{...e}),a&&(0,p.jsx)(ce,{...e})]})}const me={expandButton:"expandButton_TmdG",expandButtonIcon:"expandButtonIcon_i1dp"};function ue(e){let{toggleSidebar:t}=e;return(0,p.jsx)("div",{className:me.expandButton,title:(0,d.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,d.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,p.jsx)(S,{className:me.expandButtonIcon})})}const he={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function pe(e){let{children:t}=e;const n=(0,c.t)();return(0,p.jsx)(s.Fragment,{children:t},n?.name??"noSidebar")}function be(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:a}=e;const{pathname:i}=(0,f.zy)(),[r,c]=(0,s.useState)(!1),d=(0,s.useCallback)((()=>{r&&c(!1),!r&&(0,x.O)()&&c(!0),a((e=>!e))}),[a,r]);return(0,p.jsx)("aside",{className:(0,o.A)(l.G.docs.docSidebarContainer,he.docSidebarContainer,n&&he.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(he.docSidebarContainer)&&n&&c(!0)},children:(0,p.jsx)(pe,{children:(0,p.jsxs)("div",{className:(0,o.A)(he.sidebarViewport,r&&he.sidebarViewportHidden),children:[(0,p.jsx)(de,{sidebar:t,path:i,onCollapse:d,isHidden:r}),r&&(0,p.jsx)(ue,{toggleSidebar:d})]})})})}const xe={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function fe(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,c.t)();return(0,p.jsx)("main",{className:(0,o.A)(xe.docMainContainer,(t||!a)&&xe.docMainContainerEnhanced),children:(0,p.jsx)("div",{className:(0,o.A)("container padding-top--md padding-bottom--lg",xe.docItemWrapper,t&&xe.docItemWrapperEnhanced),children:n})})}const je={docRoot:"docRoot_UBD9",docsWrapper:"docsWrapper_hBAB"};function ge(e){let{children:t}=e;const n=(0,c.t)(),[a,o]=(0,s.useState)(!1);return(0,p.jsxs)("div",{className:je.docsWrapper,children:[(0,p.jsx)(b,{}),(0,p.jsxs)("div",{className:je.docRoot,children:[n&&(0,p.jsx)(be,{sidebar:n.items,hiddenSidebarContainer:a,setHiddenSidebarContainer:o}),(0,p.jsx)(fe,{hiddenSidebarContainer:a,children:t})]})]})}var ke=a(51107);function ve(e){let{className:t}=e;return(0,p.jsx)("main",{className:(0,o.A)("container margin-vert--xl",t),children:(0,p.jsx)("div",{className:"row",children:(0,p.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,p.jsx)(ke.A,{as:"h1",className:"hero__title",children:(0,p.jsx)(d.A,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,p.jsx)("p",{children:(0,p.jsx)(d.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,p.jsx)("p",{children:(0,p.jsx)(d.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}function Ce(e){const t=(0,r.B5)(e);if(!t)return(0,p.jsx)(ve,{});const{docElement:n,sidebarName:a,sidebarItems:s}=t;return(0,p.jsx)(i.e3,{className:(0,o.A)(l.G.page.docsDocPage),children:(0,p.jsx)(c.V,{name:a,items:s,children:(0,p.jsx)(ge,{children:n})})})}},21122:(e,t,n)=>{n.d(t,{A:()=>d});var a=n(96540),s=n(34164),o=n(92303),i=n(95293);const l={themedComponent:"themedComponent_mlkZ","themedComponent--light":"themedComponent--light_NVdE","themedComponent--dark":"themedComponent--dark_xIcU"};var r=n(74848);function c(e){let{className:t,children:n}=e;const c=(0,o.A)(),{colorMode:d}=(0,i.G)();return(0,r.jsx)(r.Fragment,{children:(c?"dark"===d?["dark"]:["light"]:["light","dark"]).map((e=>{const o=n({theme:e,className:(0,s.A)(t,l.themedComponent,l[`themedComponent--${e}`])});return(0,r.jsx)(a.Fragment,{children:o},e)}))})}function d(e){const{sources:t,className:n,alt:a,...s}=e;return(0,r.jsx)(c,{className:n,children:e=>{let{theme:n,className:o}=e;return(0,r.jsx)("img",{src:t[n],alt:a,className:o,...s})}})}}}]);