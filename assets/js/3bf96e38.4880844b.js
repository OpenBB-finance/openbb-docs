"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84265],{67743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var i=n(74848),o=n(28453),a=n(94331),r=n(69396);const s={title:"Interactive Charts",sidebar_position:2,description:"Explore how to effectively utilize OpenBB's interactive charts backed by open source PyWry technology. Understand various capabilities including annotation, color modification, drawing tools, data export, and supplementary data overlay.",keywords:["interactive charts","PyWry technology","chart annotation","drawing tools","data export","data overlay","editing chart title","Toolbar","Text Tools","Draw Tools","Export Tools"]},l=void 0,c={id:"terminal/usage/outputs/interactive-charts",title:"Interactive Charts",description:"Explore how to effectively utilize OpenBB's interactive charts backed by open source PyWry technology. Understand various capabilities including annotation, color modification, drawing tools, data export, and supplementary data overlay.",source:"@site/content/terminal/usage/outputs/interactive-charts.md",sourceDirName:"terminal/usage/outputs",slug:"/terminal/usage/outputs/interactive-charts",permalink:"/terminal/usage/outputs/interactive-charts",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/usage/outputs/interactive-charts.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719240743e3,sidebarPosition:2,frontMatter:{title:"Interactive Charts",sidebar_position:2,description:"Explore how to effectively utilize OpenBB's interactive charts backed by open source PyWry technology. Understand various capabilities including annotation, color modification, drawing tools, data export, and supplementary data overlay.",keywords:["interactive charts","PyWry technology","chart annotation","drawing tools","data export","data overlay","editing chart title","Toolbar","Text Tools","Draw Tools","Export Tools"]},sidebar:"tutorialSidebar",previous:{title:"Interactive Tables",permalink:"/terminal/usage/outputs/interactive-tables"},next:{title:"Export data",permalink:"/terminal/usage/outputs/export-data"}},d={},h=[{value:"Toolbar",id:"toolbar",level:2},{value:"Text Tools",id:"text-tools",level:2},{value:"Change Titles",id:"change-titles",level:2},{value:"Draw Tools",id:"draw-tools",level:2},{value:"Export Tools",id:"export-tools",level:2},{value:"Overlay",id:"overlay",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.A,{title:"Interactive Charts - Outputs - Usage | OpenBB Terminal Docs"}),"\n","\n",(0,i.jsx)(r.A,{youtubeLink:"https://www.youtube.com/embed/6lqyTZGJ_GU?si=vvtDuJfaf66eTlXe",videoLegend:"Short introduction on interactive charts"}),"\n",(0,i.jsxs)(t.p,{children:["A common type of output in OpenBB are interactive charts which open in a separated window (due to our ",(0,i.jsx)(t.a,{href:"https://github.com/OpenBB-finance/pywry",children:"open source PyWry"})," technology). The OpenBB charting library provides interactive and highly customizable charts."]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{mdxType:"summary",children:"Charting cheat sheet "}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/234313541-3d725e1c-ce48-4413-9267-b03571e0eccd.png",alt:"Group 653"})})]}),"\n",(0,i.jsx)(t.h2,{id:"toolbar",children:"Toolbar"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/233247997-55c03cbd-9ca9-4f5e-b3fb-3e5a9c63b6eb.png",alt:"Chart Tools"})}),"\n",(0,i.jsx)(t.p,{children:"The toolbar is located at the bottom of the window, and provides methods for:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Panning and zooming."}),"\n",(0,i.jsx)(t.li,{children:"Modifying the title and axis labels."}),"\n",(0,i.jsx)(t.li,{children:"Adjusting the hover read out."}),"\n",(0,i.jsx)(t.li,{children:"Toggling light/dark mode."}),"\n",(0,i.jsx)(t.li,{children:"Annotating and drawing."}),"\n",(0,i.jsx)(t.li,{children:"Exporting raw data."}),"\n",(0,i.jsx)(t.li,{children:"Saving the chart as an image."}),"\n",(0,i.jsx)(t.li,{children:"Adding supplementary external data as an overlay."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The label for each tool is displayed by holding the mouse over it."}),"\n",(0,i.jsxs)(t.p,{children:["The toolbar's visibility can be toggled utilizing the ",(0,i.jsx)(t.code,{children:"ctrl + h"})," shortcut."]}),"\n",(0,i.jsx)(t.h2,{id:"text-tools",children:"Text Tools"}),"\n",(0,i.jsxs)(t.p,{children:["Annotate a chart by clicking on the ",(0,i.jsx)(t.code,{children:"Add Text"})," button, or with the keyboard, ",(0,i.jsx)(t.code,{children:"ctrl + t"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/233248056-d459d7a0-ba2d-4533-896a-79406ded859e.png",alt:"Annotate Charts"})}),"\n",(0,i.jsxs)(t.p,{children:["Enter some text, make any adjustments to the options, then ",(0,i.jsx)(t.code,{children:"submit"}),". Place the crosshairs over the desired data point and click to place the text."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/233728645-74734241-4da2-4cff-af17-b68a62e95113.png",alt:"Place Text"})}),"\n",(0,i.jsx)(t.p,{children:"After placement, the text can be updated or deleted by clicking on it again."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/233728428-55d2a8e5-a68a-4cd1-9dbf-4c1cd697187e.png",alt:"Delete Annotation"})}),"\n",(0,i.jsx)(t.h2,{id:"change-titles",children:"Change Titles"}),"\n",(0,i.jsxs)(t.p,{children:["The title of the chart is edited by clicking the button, ",(0,i.jsx)(t.code,{children:"Change Titles"}),", near the middle center of the toolbar, immediately to the right of the ",(0,i.jsx)(t.code,{children:"Add Text"})," button."]}),"\n",(0,i.jsx)(t.h2,{id:"draw-tools",children:"Draw Tools"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/233729318-8af947fa-ce2a-43e2-85ab-657e583ac8b1.png",alt:"Edit Colors"})}),"\n",(0,i.jsx)(t.p,{children:"The fourth group of icons on the toolbar are for drawing lines and shapes."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Edit the colors."}),"\n",(0,i.jsx)(t.li,{children:"Draw a straight line."}),"\n",(0,i.jsx)(t.li,{children:"Draw a freeform line."}),"\n",(0,i.jsx)(t.li,{children:"Draw a circle."}),"\n",(0,i.jsx)(t.li,{children:"Draw a rectangle."}),"\n",(0,i.jsx)(t.li,{children:"Erase a shape."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["To draw on the chart, select one of the four drawing buttons and drag the mouse over the desired area. Click on any existing shape to modify it by dragging with the mouse and editing the color, or remove it by clicking the toolbar button, ",(0,i.jsx)(t.code,{children:"Erase Active Shape"}),". The edit colors button will pop up as a floating icon, and clicking on that will display the color palette."]}),"\n",(0,i.jsx)(t.h2,{id:"export-tools",children:"Export Tools"}),"\n",(0,i.jsx)(t.p,{children:"The two buttons at the far-right of the toolbar are for saving the raw data or, to save an image file of the chart at the current panned and zoomed view."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/233248436-08a2a463-403b-4b1b-b7d8-80cd5af7bee3.png",alt:"Export Tools"})}),"\n",(0,i.jsx)(t.h2,{id:"overlay",children:"Overlay"}),"\n",(0,i.jsxs)(t.p,{children:["The button, ",(0,i.jsx)(t.code,{children:"Overlay chart from CSV"}),", provides an easy import method for supplementing a chart with additional data. Clicking on the button opens a pop-up dialogue to select the file, column, and whether the overlay should be a bar, candlestick, or line chart. As a candlestick, the CSV file must contain OHLC data. The import window can also be opened with the keyboard, ",(0,i.jsx)(t.code,{children:"ctrl-o"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/233248522-16b539f4-b0ae-4c30-8c72-dfa59d0c0cfb.png",alt:"Overlay CSV"})}),"\n",(0,i.jsxs)(t.p,{children:["After choosing the file to overlay, select what to show and then click on ",(0,i.jsx)(t.code,{children:"Submit"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/233250634-44864da0-0936-4d3c-8de2-c8374d26c1d2.png",alt:"Overlay Options"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/233248639-6d12b16d-471f-4550-a8ab-8d8c18eeabb3.png",alt:"Overlay Chart"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var i=n(5260),o=n(74848);function a(e){let{title:t}=e;return(0,o.jsx)(i.A,{children:(0,o.jsx)("title",{children:t})})}},69396:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(96540),o=n(23174),a=n(74848);function r(e){let{youtubeLink:t,videoLegend:n="Tutorial video"}=e;const[r,s]=(0,i.useState)(!0);return(0,a.jsxs)("div",{style:{textAlign:"center"},children:[(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-center",children:[(0,a.jsx)("p",{children:n}),(0,a.jsx)("div",{style:{transform:"scale(0.7)"},children:(0,a.jsx)(o.Toggle,{isOn:r,handleChange:()=>s(!r)})})]}),r&&(0,a.jsx)("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"},children:(0,a.jsx)("iframe",{id:t,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})]})}},23174:(e,t,n)=>{e.exports=n(49793)},49793:(e,t,n)=>{var i,o=(i=n(96540))&&"object"==typeof i&&"default"in i?i.default:i;!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&i.firstChild?i.insertBefore(o,i.firstChild):i.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),t.Toggle=function(e){return o.createElement("label",{"data-testid":"Toggle-label",className:"switch"},o.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),o.createElement("span",{className:"slider round"}))}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var i=n(96540);const o={},a=i.createContext(o);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);