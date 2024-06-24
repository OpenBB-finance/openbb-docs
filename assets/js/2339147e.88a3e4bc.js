"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25449],{73161:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=t(74848),r=t(28453),i=t(94331);const s={title:"Import Errors",sidebar_position:2,description:"This page provides solutions for common import errors when installing the OpenBB SDK, including guidance on managing virtual environments, handling ModuleNotFoundError, dealing with SSL certificate authorization, and configuring proxy connections.",keywords:["Import Errors","SciPy","ModuleNotFoundError","virtual environment","poetry install","conda activate","Jupyter","GitHub","SSL certificates","firewall","pip-system-certs","proxy connection",".env file"]},a=void 0,c={id:"sdk/faqs/import_errors",title:"Import Errors",description:"This page provides solutions for common import errors when installing the OpenBB SDK, including guidance on managing virtual environments, handling ModuleNotFoundError, dealing with SSL certificate authorization, and configuring proxy connections.",source:"@site/content/sdk/faqs/import_errors.md",sourceDirName:"sdk/faqs",slug:"/sdk/faqs/import_errors",permalink:"/sdk/faqs/import_errors",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/faqs/import_errors.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719240743e3,sidebarPosition:2,frontMatter:{title:"Import Errors",sidebar_position:2,description:"This page provides solutions for common import errors when installing the OpenBB SDK, including guidance on managing virtual environments, handling ModuleNotFoundError, dealing with SSL certificate authorization, and configuring proxy connections.",keywords:["Import Errors","SciPy","ModuleNotFoundError","virtual environment","poetry install","conda activate","Jupyter","GitHub","SSL certificates","firewall","pip-system-certs","proxy connection",".env file"]},sidebar:"tutorialSidebar",previous:{title:"Installation and Updates",permalink:"/sdk/faqs/installation_updates"},next:{title:"General Operation",permalink:"/sdk/faqs/general_operation"}},l={},d=[];function p(e){const n={code:"code",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.A,{title:"Import Errors - Faqs | OpenBB SDK Docs"}),"\n",(0,o.jsx)(n.p,{children:"When packages not included in the OpenBB installation are installed to the same environment as the SDK, it is possible that an incompatible build of a specific library (like SciPy) has overwritten the existing and creating a conflict. In this event, try creating a new environment containing only the OpenBB dependencies."}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{mdxType:"summary",children:"ModuleNotFoundError: No module named '______'"}),(0,o.jsxs)(n.p,{children:["Before troubleshooting please verify that the recommended installation instructions were followed. These errors often can occur when the virtual environment has not been activated, or the ",(0,o.jsx)(n.code,{children:"poetry install"})," command was skipped. Activate the OpenBB virtual environment created during the installation process prior to launching or importing the SDK."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Terminal"}),":"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"conda activate obb\npython terminal.py\n"})}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"SDK"}),":"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"conda activate obb\nipython\nfrom openbb_terminal.sdk import openbb\n"})}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Jupyter"}),":"]}),(0,o.jsx)(n.p,{children:"Check that the kernel selected for the session is the OpenBB virtual environment created during the installation process and then re-run the cell."}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"from openbb_terminal.sdk import openbb\n"})}),(0,o.jsxs)(n.p,{children:["There is also a possibility that a new dependency has been added to the code and it has not yet been installed in the environment. This may happen after updating the code from GitHub, but before running the ",(0,o.jsx)(n.code,{children:"poetry install"})," install command."]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"poetry install -E all\n"})})]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{mdxType:"summary",children:"SSL certificates fail to authorize"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"SSL: CERTIFICATE_VERIFY_FAILED\n"})}),(0,o.jsx)(n.p,{children:"An error message, similar to above, is usually encountered while attempting to use the OpenBB Platform from behind a firewall. A workplace environment is typically the most common occurrence. Try connecting to the internet directly through a home network to test the connection. If using a work computer and/or network, we recommend speaking with the company's IT department prior to installing or running any software."}),(0,o.jsx)(n.p,{children:"A potential solution is to try:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"pip install pip-system-certs\n"})})]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{mdxType:"summary",children:"Cannot connect due to proxy connection."}),(0,o.jsxs)(n.p,{children:["Find the ",(0,o.jsx)(n.code,{children:".env"})," file (located at the root of the user account folder: (",(0,o.jsx)(n.code,{children:"~/.openbb_terminal/.env"}),"), and add a line at the bottom of the file with:"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:'HTTP_PROXY="<ADDRESS>" or HTTPS_PROXY="<ADDRESS>\u201d\n'})})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var o=t(5260),r=t(74848);function i(e){let{title:n}=e;return(0,r.jsx)(o.A,{children:(0,r.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var o=t(96540);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);