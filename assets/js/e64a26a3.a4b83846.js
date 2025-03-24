"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28359],{31233:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=t(74848),o=t(28453),r=t(94331);const s={title:"GitHub",sidebar_position:10,description:"This page outlines working with GitHub, including branch naming conventions and information related to creating a pull request.",keywords:["Commit changes","PR creation","Branch naming conventions","Commit guidelines","GitHub","contributing","submission","cheat sheet"]},a=void 0,l={id:"platform/developer_guide/github",title:"GitHub",description:"This page outlines working with GitHub, including branch naming conventions and information related to creating a pull request.",source:"@site/content/platform/developer_guide/github.mdx",sourceDirName:"platform/developer_guide",slug:"/platform/developer_guide/github",permalink:"/platform/developer_guide/github",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/developer_guide/github.mdx",tags:[],version:"current",lastUpdatedBy:"Meghan Lopes",lastUpdatedAt:1742856507e3,sidebarPosition:10,frontMatter:{title:"GitHub",sidebar_position:10,description:"This page outlines working with GitHub, including branch naming conventions and information related to creating a pull request.",keywords:["Commit changes","PR creation","Branch naming conventions","Commit guidelines","GitHub","contributing","submission","cheat sheet"]},sidebar:"tutorialSidebar",previous:{title:"Validators",permalink:"/platform/developer_guide/validators"},next:{title:"Deprecating Endpoints",permalink:"/platform/developer_guide/deprecating_endpoints"}},c={},d=[{value:"GitHub Cheat Sheet",id:"github-cheat-sheet",level:2},{value:"Merge Conflicts",id:"merge-conflicts",level:2},{value:"Contributing",id:"contributing",level:2},{value:"Branch Naming Conventions",id:"branch-naming-conventions",level:3},{value:"Create Pull Request",id:"create-pull-request",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.A,{title:"GitHub - User Guide | OpenBB Platform Docs"}),"\n",(0,i.jsx)(n.p,{children:"This page covers working with the GitHub repository, and contributing code via a pull request."}),"\n",(0,i.jsx)(n.h2,{id:"github-cheat-sheet",children:"GitHub Cheat Sheet"}),"\n",(0,i.jsxs)(n.p,{children:["See the page ",(0,i.jsx)(n.a,{href:"https://training.github.com/downloads/github-git-cheat-sheet/",children:"here"})," for a GitHub cheat sheet."]}),"\n",(0,i.jsx)(n.h2,{id:"merge-conflicts",children:"Merge Conflicts"}),"\n",(0,i.jsxs)(n.p,{children:["If you have installed the OpenBB Platform in editable mode (i.e, with ",(0,i.jsx)(n.code,{children:"dev_install.py"}),"), you may encounter merge conflicts when switching branches. They will most likely originate from the static assets automatically generated for the Python interface, and are in the folders:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"/openbb_platform/openbb/assets"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"/openbb_platform/openbb/package"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Discard any changes within and they will be regenerated upon the next initialization."}),"\n",(0,i.jsxs)(n.p,{children:["Alternatively, ",(0,i.jsx)(n.code,{children:"git stash"})," will do the trick."]}),"\n",(0,i.jsx)(n.h2,{id:"contributing",children:"Contributing"}),"\n",(0,i.jsxs)(n.p,{children:["Code contributions are made by creating a pull request on GitHub. Branches should typically be created from the ",(0,i.jsx)(n.code,{children:"/develop"})," branch, and they should be named according to the conventions described next section below."]}),"\n",(0,i.jsx)(n.h3,{id:"branch-naming-conventions",children:"Branch Naming Conventions"}),"\n",(0,i.jsxs)(n.p,{children:["Before creating a new branch, switch to the ",(0,i.jsx)(n.code,{children:"develop"})," branch and update your local cloned repo."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"git fetch\ngit checkout develop\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If there are conflicting changes with the develop branch, ",(0,i.jsx)(n.code,{children:"stash"})," the local changes first."]}),"\n",(0,i.jsx)(n.p,{children:"To submit a PR, a local branch or fork must be named according to the naming conventions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"feature/feature-name"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"bugfix/bugfix-name"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"docs/docs-name"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["These branches can only have PRs pointing to the ",(0,i.jsx)(n.code,{children:"develop"})," branch."]}),"\n",(0,i.jsx)(n.h3,{id:"create-pull-request",children:"Create Pull Request"}),"\n",(0,i.jsx)(n.p,{children:"A pull request should contain descriptions and details of all proposed changes, with any details maintainers and testers will need to know."}),"\n",(0,i.jsx)(n.p,{children:"Please use one of the supplied Pull Request Templates."}),"\n",(0,i.jsx)(n.p,{children:"Linting errors should be cleared, and any tests related to the changed files should be passing."})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var i=t(5260),o=t(74848);function r(e){let{title:n}=e;return(0,o.jsx)(i.A,{children:(0,o.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(96540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);