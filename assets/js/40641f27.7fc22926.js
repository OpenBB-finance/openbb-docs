"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28081],{80234:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var o=t(74848),i=t(28453),s=t(94331);const l={title:"Documentation - Development",sidebar_position:30,description:"Building the OpenBB Platform documentation and packages.",keywords:["OpenBB Platform","Open source","Documentation","Development","Markdown"]},a=void 0,r={id:"platform/developer_guide/documentation_development",title:"Documentation - Development",description:"Building the OpenBB Platform documentation and packages.",source:"@site/content/platform/developer_guide/documentation_development.mdx",sourceDirName:"platform/developer_guide",slug:"/platform/developer_guide/documentation_development",permalink:"/platform/developer_guide/documentation_development",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/developer_guide/documentation_development.mdx",tags:[],version:"current",lastUpdatedBy:"Andrew",lastUpdatedAt:1734982365e3,sidebarPosition:30,frontMatter:{title:"Documentation - Development",sidebar_position:30,description:"Building the OpenBB Platform documentation and packages.",keywords:["OpenBB Platform","Open source","Documentation","Development","Markdown"]},sidebar:"tutorialSidebar",previous:{title:"Tests",permalink:"/platform/developer_guide/tests"},next:{title:"Reference",permalink:"/platform/reference/"}},d={},c=[{value:"Installation",id:"installation",level:2},{value:"Node.js",id:"nodejs",level:3},{value:"Install Dependencies",id:"install-dependencies",level:3},{value:"Generate Markdown Files",id:"generate-markdown-files",level:3},{value:"Start Development Server",id:"start-development-server",level:4},{value:"Build",id:"build",level:4}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.A,{title:"Documentation - Development | OpenBB Platform Docs"}),"\n",(0,o.jsx)(n.p,{children:"The documentation and packages are kept in a separate repository. Clone the repo with the URL below."}),"\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(n.p,{children:"Clone the repo and then navigate into the project folder."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"git clone https://github.com/OpenBB-finance/openbb-docs.git\n"})}),"\n",(0,o.jsx)(n.p,{children:"Packages should be installed within your OpenBB Platform Python environment."}),"\n",(0,o.jsx)(n.h3,{id:"nodejs",children:"Node.js"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://nodejs.org/en/",children:"Node.js"})," >= 16.13.0\nTo check if Node.js installed, run this command:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"node --version # should be v16.13.0 or higher\n"})}),"\n",(0,o.jsx)(n.h3,{id:"install-dependencies",children:"Install Dependencies"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"npm install\n"})}),"\n",(0,o.jsx)(n.h3,{id:"generate-markdown-files",children:"Generate Markdown Files"}),"\n",(0,o.jsx)(n.p,{children:"Markdown files for the Reference and Data Models pages need to be generated.\nThis will generate content based on what is actually installed and contained locally, so it may appear different than what is on this website."}),"\n",(0,o.jsx)(n.p,{children:"Run the command below from the root of the repository."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"python scripts/generate_platform_markdown.py\n"})}),"\n",(0,o.jsx)(n.h4,{id:"start-development-server",children:"Start Development Server"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"npm start\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This starts a local development server at: ",(0,o.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"})]}),"\n",(0,o.jsx)(n.p,{children:"Most changes are reflected live without having to restart the server."}),"\n",(0,o.jsx)(n.h4,{id:"build",children:"Build"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"npm run build\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This command generates static content into the ",(0,o.jsx)(n.code,{children:"build"})," directory and can be served using any static contents hosting service."]}),"\n",(0,o.jsxs)(n.p,{children:["OpenBB uses Github Pages to host our website, it's deployed in the ",(0,o.jsx)(n.code,{children:"gh-pages"})," branch."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var o=t(5260),i=t(74848);function s(e){let{title:n}=e;return(0,i.jsx)(o.A,{children:(0,i.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var o=t(96540);const i={},s=o.createContext(i);function l(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);