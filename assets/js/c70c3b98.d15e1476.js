"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36206],{8359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>u});var i=n(74848),o=n(28453),a=n(94331),r=n(69396);const d={title:"Single widget",sidebar_position:0,description:"Learn how to use the Single Widget of OpenBB Terminal Pro for seamless integration with your API Endpoints, enabling custom data to be fetched and displayed in an accessible format. Includes features like additional headers and addressing nested JSON data.",keywords:["Single Widget","Data Connectors","API Endpoints","Data Integration","User-friendly Table Format","Additional Headers","Data Key Parameter","Nested JSON","Custom Backend"]},s=void 0,l={id:"pro/data-connectors/single-widget/index",title:"Single widget",description:"Learn how to use the Single Widget of OpenBB Terminal Pro for seamless integration with your API Endpoints, enabling custom data to be fetched and displayed in an accessible format. Includes features like additional headers and addressing nested JSON data.",source:"@site/content/pro/data-connectors/single-widget/index.md",sourceDirName:"pro/data-connectors/single-widget",slug:"/pro/data-connectors/single-widget/",permalink:"/pro/data-connectors/single-widget/",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/pro/data-connectors/single-widget/index.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719247347e3,sidebarPosition:0,frontMatter:{title:"Single widget",sidebar_position:0,description:"Learn how to use the Single Widget of OpenBB Terminal Pro for seamless integration with your API Endpoints, enabling custom data to be fetched and displayed in an accessible format. Includes features like additional headers and addressing nested JSON data.",keywords:["Single Widget","Data Connectors","API Endpoints","Data Integration","User-friendly Table Format","Additional Headers","Data Key Parameter","Nested JSON","Custom Backend"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/pro/data-connectors/"},next:{title:"Endpoint Examples",permalink:"/pro/data-connectors/single-widget/examples"}},c={},u=[];function p(e){const t={a:"a",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.A,{title:"Single Widget | OpenBB Terminal Pro Docs"}),"\n","\n",(0,i.jsx)(r.A,{youtubeLink:"https://www.youtube.com/embed/gX63rYzqpL0?si=74No_7LgG2gYwnDg",videoLegend:"Short introduction to adding a single widget"}),"\n",(0,i.jsx)(t.p,{children:"The single widget is the most straightforward method to integrate your custom data into OpenBB Terminal Pro. Simply paste your API endpoint into the data connectors tab, and voila! Your data is fetched and displayed in a user-friendly table format."}),"\n",(0,i.jsx)(t.p,{children:"To use this feature, input your API endpoint and any necessary connection information. The widget will then dynamically load and present your data within the Terminal Pro interface."}),"\n",(0,i.jsx)(t.p,{children:"If your endpoint requires additional headers, don't worry. You can easily add them using the '+ Add Additional Headers' button."}),"\n",(0,i.jsx)(t.p,{children:'In addition, if your API endpoint doesn\'t return a a simple JSON but a nested architecture, you will be prompted with a "Data Key" parameter which you can use to grab the data of interest.'}),"\n",(0,i.jsxs)(t.p,{children:["If you want to do something more custom, you should look into creating ",(0,i.jsx)(t.a,{href:"/pro/data-connectors/integrate-your-own-backend",children:"your own backend"}),", or reach out to OpenBB for support."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var i=n(5260),o=n(74848);function a(e){let{title:t}=e;return(0,o.jsx)(i.A,{children:(0,o.jsx)("title",{children:t})})}},69396:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(96540),o=n(23174),a=n(74848);function r(e){let{youtubeLink:t,videoLegend:n="Tutorial video"}=e;const[r,d]=(0,i.useState)(!0);return(0,a.jsxs)("div",{style:{textAlign:"center"},children:[(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-center",children:[(0,a.jsx)("p",{children:n}),(0,a.jsx)("div",{style:{transform:"scale(0.7)"},children:(0,a.jsx)(o.Toggle,{isOn:r,handleChange:()=>d(!r)})})]}),r&&(0,a.jsx)("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"},children:(0,a.jsx)("iframe",{id:t,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})]})}},23174:(e,t,n)=>{e.exports=n(49793)},49793:(e,t,n)=>{var i,o=(i=n(96540))&&"object"==typeof i&&"default"in i?i.default:i;!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&i.firstChild?i.insertBefore(o,i.firstChild):i.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),t.Toggle=function(e){return o.createElement("label",{"data-testid":"Toggle-label",className:"switch"},o.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),o.createElement("span",{className:"slider round"}))}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var i=n(96540);const o={},a=i.createContext(o);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);