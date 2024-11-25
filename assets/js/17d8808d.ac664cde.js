"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96363],{69285:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>a});var i=t(74848),s=t(28453),l=t(94331);const c={title:"Data slicer",sidebar_position:2,description:"Slice Excel ranges by label or index",keywords:["Microsoft Excel","Add-in","Advanced","Slice data","Data slicer","Get specific fields"]},r=void 0,d={id:"excel/data-slicer",title:"Data slicer",description:"Slice Excel ranges by label or index",source:"@site/content/excel/data-slicer.md",sourceDirName:"excel",slug:"/excel/data-slicer",permalink:"/excel/data-slicer",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/excel/data-slicer.md",tags:[],version:"current",lastUpdatedBy:"Andrew",lastUpdatedAt:1732553547e3,sidebarPosition:2,frontMatter:{title:"Data slicer",sidebar_position:2,description:"Slice Excel ranges by label or index",keywords:["Microsoft Excel","Add-in","Advanced","Slice data","Data slicer","Get specific fields"]},sidebar:"tutorialSidebar",previous:{title:"Formula Builder",permalink:"/excel/getting-started/formula_builder"},next:{title:"Data connectors",permalink:"/excel/data-connectors"}},o={},a=[{value:"Example",id:"example",level:3}];function x(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.A,{title:"Data slicer | OpenBB Add-in for Excel Docs"}),"\n",(0,i.jsxs)(n.p,{children:["To help you slice parts of data, we provide the ",(0,i.jsx)(n.a,{href:"https://docs.openbb.co/excel/reference/get",children:"OBB.GET"})," function. This function allows to slice rows, columns or range subsets. It is useful to extract specific fields from the ",(0,i.jsx)(n.code,{children:"OBB."})," custom functions. Data can be sliced by label or index."]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Suppose you called an ",(0,i.jsx)(n.code,{children:"OBB."})," function and it returned the following data at cells A1:D3:"]}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"period_ending"}),(0,i.jsx)(n.th,{children:"revenue"}),(0,i.jsx)(n.th,{children:"cost_of_revenue"}),(0,i.jsx)(n.th,{children:"gross_profit"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2023/09/30"}),(0,i.jsx)(n.td,{children:"383 285 000 000.00"}),(0,i.jsx)(n.td,{children:"214 137 000 000.00"}),(0,i.jsx)(n.td,{children:"169 148 000 000.00"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2022/09/24"}),(0,i.jsx)(n.td,{children:"394 328 000 000.00"}),(0,i.jsx)(n.td,{children:"223 546 000 000.00"}),(0,i.jsx)(n.td,{children:"170 782 000 000.00"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2021/09/25"}),(0,i.jsx)(n.td,{children:"365 817 000 000.00"}),(0,i.jsx)(n.td,{children:"212 981 000 000.00"}),(0,i.jsx)(n.td,{children:"152 836 000 000.00"})]})]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Slicing a single row:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-excel",children:"=OBB.GET(A1:D3,DATE(2023,9,30))\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["When passing date labels make sure to use the format ",(0,i.jsx)(n.code,{children:"YYYY/MM/DD"})," or refer to a cell range containing Excel date format - DATE(year,month,day)."]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Slicing a single column:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-excel",children:'=OBB.GET(A1:D3,,"revenue")\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Slicing by index:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-excel",children:"=OBB.GET(A1:D3,2,3)\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["To slice the from the last row use negative numbers. For example, ",(0,i.jsx)(n.code,{children:"=OBB.GET(A1:D3,-1,-2)"})," will return the last row and the second to last column."]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Slicing multiple rows and columns:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-excel",children:'=OBB.GET(A1:D3,{"2023/09/30","2021/09/25"},{"cost_of_revenue","gross_profit"})\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["The easiest way to pass ranges is to write them into cells and reference them in the function. For example, ",(0,i.jsx)(n.code,{children:"=OBB.GET(...,A1:A2)"}),' where A1 contains "item1", A2 "item2".']})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var i=t(5260),s=t(74848);function l(e){let{title:n}=e;return(0,s.jsx)(i.A,{children:(0,s.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var i=t(96540);const s={},l=i.createContext(s);function c(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);