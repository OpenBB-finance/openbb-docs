"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31914],{2774:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=t(74848),s=t(28453),o=t(94331);const r={title:"Installation",sidebar_position:1,description:"This page presents the general system requirements, supported environments, installation procedures, and setup for running the OpenBB Platform. It discusses the prerequisites including Python version, operating system requirements, Docker usage, and the process of building the platform from source.",keywords:["OpenBB Platform","Python","System requirements","Supported environments","Installation","Docker","Python virtual environment","Installation from source","Windows 10","Mac OS Big Sur","Linux","Package installation","VS Code","PyCharm","Jupyter","GitHub","Conda","venv","API","Repository","pip","Poetry","Toml","PyPI","Node.js","npm"]},a=void 0,l={id:"platform/installation",title:"Installation",description:"This page presents the general system requirements, supported environments, installation procedures, and setup for running the OpenBB Platform. It discusses the prerequisites including Python version, operating system requirements, Docker usage, and the process of building the platform from source.",source:"@site/content/platform/installation.mdx",sourceDirName:"platform",slug:"/platform/installation",permalink:"/platform/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/installation.mdx",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1732037628e3,sidebarPosition:1,frontMatter:{title:"Installation",sidebar_position:1,description:"This page presents the general system requirements, supported environments, installation procedures, and setup for running the OpenBB Platform. It discusses the prerequisites including Python version, operating system requirements, Docker usage, and the process of building the platform from source.",keywords:["OpenBB Platform","Python","System requirements","Supported environments","Installation","Docker","Python virtual environment","Installation from source","Windows 10","Mac OS Big Sur","Linux","Package installation","VS Code","PyCharm","Jupyter","GitHub","Conda","venv","API","Repository","pip","Poetry","Toml","PyPI","Node.js","npm"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/platform/"},next:{title:"Getting started",permalink:"/platform/getting_started/"}},c={},d=[{value:"General System Requirements",id:"general-system-requirements",level:2},{value:"Installer Package",id:"installer-package",level:2},{value:"Supported Environments",id:"supported-environments",level:2},{value:"Installation",id:"installation",level:2},{value:"PyPI",id:"pypi",level:3},{value:"Docker",id:"docker",level:3},{value:"Source",id:"source",level:3},{value:"Post-Installation",id:"post-installation",level:2},{value:"Hub Synchronization",id:"hub-synchronization",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.A,{title:"Installation | OpenBB Platform Docs"}),"\n",(0,i.jsx)(n.h2,{id:"general-system-requirements",children:"General System Requirements"}),"\n",(0,i.jsx)(n.p,{children:"Most systems capable of running Python 3.9-3.12 will be compatible with the OpenBB Platform. A modern processor (five years or less), running an up-to-date operating system, with at least 4GB of RAM, is recommended. Maintaining the system with current patches ensures maximum compatibility. At a minimum, Windows and macOS should be:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Windows 10"}),"\n",(0,i.jsx)(n.li,{children:"Mac OS Big Sur"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Linux users should run the command line update for the package manager, prior to installation."}),"\n",(0,i.jsx)(n.h2,{id:"installer-package",children:"Installer Package"}),"\n",(0,i.jsxs)(n.p,{children:["An installer package is available for Mac and Windows machines. Files are available ",(0,i.jsx)(n.a,{href:"https://my.openbb.co/app/platform/downloads",children:"here"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"It will handle the installation of Python, environment setup, and OpenBB packages with the latest versions."}),"\n",(0,i.jsx)(n.h2,{id:"supported-environments",children:"Supported Environments"}),"\n",(0,i.jsxs)(n.p,{children:["The OpenBB Platform is installed within a Python virtual environment. It is compatible with versions of Python between 3.9 and 3.12, inclusively. The method for creating the environment will be a matter of user preference, from the command line - ",(0,i.jsx)(n.a,{href:"https://docs.conda.io/projects/miniconda/en/latest/miniconda-install.html",children:"Conda"}),", ",(0,i.jsx)(n.a,{href:"https://docs.python.org/3/library/venv.html",children:"venv"}),", etc. - or in a code editor and IDE - ",(0,i.jsx)(n.a,{href:"https://code.visualstudio.com/docs/languages/python",children:"VS Code"}),", ",(0,i.jsx)(n.a,{href:"https://www.jetbrains.com/pycharm/",children:"PyCharm"}),", ",(0,i.jsx)(n.a,{href:"https://jupyter.org/",children:"Jupyter"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If you're interested in using the ",(0,i.jsx)(n.a,{href:"/platform/installation#docker",children:"Docker"})," container, skip ahead to the specific section ",(0,i.jsx)(n.a,{href:"/platform/installation#docker",children:"below"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["For those new to Python, ",(0,i.jsx)(n.a,{href:"https://www.infoworld.com/article/3306656/python-virtualenv-and-venv-dos-and-donts.html",children:"this article"})," shares some tips on getting started and why environments are important."]}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://code.visualstudio.com/docs/python/environments",children:"this guide"})," for creating a Python environment in VS Code."]}),"\n",(0,i.jsx)(n.p,{children:"With the environment created, and activated, begin the installation process."}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["Before installation, update the package manager so that ",(0,i.jsx)(n.code,{children:"pip"})," is current, then create the environment with the desired version of Python."]}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.p,{children:["Installing packages directly to the system Python or ",(0,i.jsx)(n.code,{children:"base"})," environment is not recommended. Create a new environment first (can be any name, using openbb here for example)."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"conda create -n openbb python=3.11\nconda activate openbb\n"})})]}),"\n",(0,i.jsx)(n.h3,{id:"pypi",children:"PyPI"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)(n.p,{children:"Install from PyPI with:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"pip install openbb\n"})}),(0,i.jsx)(n.p,{children:"This will install the core OpenBB Platform, along with officially supported extensions and providers."}),(0,i.jsx)(n.p,{children:"To install all extensions and providers (both officially supported and community maintained ones):"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"pip install openbb[all]\n"})}),(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["In a macOS ",(0,i.jsx)(n.code,{children:"zsh"})," Terminal shell, add quotation marks around the library name."]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'"openbb[all]"'})})]}),(0,i.jsx)(n.p,{children:"To install a single extension:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"pip install openbb[charting]\n"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"pip install openbb[ta]\n"})}),(0,i.jsx)(n.p,{children:"Or install a single provider:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"pip install openbb[yfinance]\n"})}),(0,i.jsx)(n.p,{children:"To install the Nightly distribution (this installs all extras by default):"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"pip install openbb-nightly\n"})}),(0,i.jsx)(n.p,{children:"From your python interpreter, import the OpenBB Platform:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"from openbb import obb\n"})}),(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsx)(n.p,{children:"This import statement is required due to the statefulness of the obb package. There is currently no support for imports such as:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"from openbb.obb.equity import *\n"})})]}),(0,i.jsx)(n.p,{children:"When the package is imported, any installed extensions will be discovered, imported and available for use."}),(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.p,{children:"Currently if you wish to have the bare-bones openbb package with no extensions or providers, you can install with:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"pip install openbb-core && pip install openbb --no-deps\n"})})]}),(0,i.jsx)(n.p,{children:"To update the package:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"pip install --upgrade openbb\n"})}),(0,i.jsx)(n.p,{children:"To update all extensions and providers:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"pip install --upgrade openbb[all]\n"})}),(0,i.jsx)(n.p,{children:"If you want to uninstall the package and all its dependencies:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"pip uninstall openbb[all]\n"})})]}),"\n",(0,i.jsx)(n.h3,{id:"docker",children:"Docker"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsxs)(n.p,{children:["You can install and run the Platform from ",(0,i.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBB/pkgs/container/openbb-platform",children:"GitHub Container Registry"})," with:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker run --rm -p 8000:8000 -v ~/.openbb_platform:/root/.openbb_platform ghcr.io/openbb-finance/openbb-platform:latest\n"})}),(0,i.jsxs)(n.p,{children:["Alternatively, we provide a ",(0,i.jsx)(n.code,{children:"platform.dockerfile"})," on ",(0,i.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBB",children:"GitHub"}),"."]}),(0,i.jsx)(n.p,{children:"Run the following command from the repo root to build the image:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker build -f build/docker/platform.dockerfile -t openbb-platform:latest .\n"})}),(0,i.jsx)(n.p,{children:"To run it:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker run --rm -p 8000:8000 -v ~/.openbb_platform:/root/.openbb_platform openbb-platform:latest\n"})}),(0,i.jsxs)(n.p,{children:["This will mount the local ",(0,i.jsx)(n.code,{children:"~/.openbb_platform"})," directory into the Docker container to use with the API keys and preferences from there, and it will expose the API on port ",(0,i.jsx)(n.code,{children:"8000"}),"."]})]}),"\n",(0,i.jsx)(n.h3,{id:"source",children:"Source"}),"\n",(0,i.jsxs)(n.p,{children:["To install from source, create a Python virtual environment and update ",(0,i.jsx)(n.code,{children:"pip"})," and ",(0,i.jsx)(n.code,{children:"setuptools"}),", within the newly created environment, ",(0,i.jsx)(n.strong,{children:"before"})," installing any packages."]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsxs)(n.p,{children:["To build the OpenBB Platform from the source code, first install ",(0,i.jsx)(n.code,{children:"git"}),":"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"pip install git\n"})}),(0,i.jsx)(n.p,{children:"Next, clone the repository from GitHub:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"git clone git@github.com:OpenBB-finance/OpenBB.git\n"})}),(0,i.jsx)(n.p,{children:"When it is done, checkout the branch where the code is living:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"git checkout develop\n"})}),(0,i.jsxs)(n.p,{children:["Then, ",(0,i.jsx)(n.code,{children:"cd"})," into the directory:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"cd openbb_platform\n"})}),(0,i.jsx)(n.p,{children:"Install required packages"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"pip install poetry\n"})}),(0,i.jsx)(n.p,{children:"Finally, run the developer installation script:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"python dev_install.py\n"})}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["To install all extensions and providers, run: ",(0,i.jsx)(n.code,{children:"python dev_install.py -e"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"post-installation",children:"Post-Installation"}),"\n",(0,i.jsx)(n.p,{children:"With a fresh installation, and upon installing or uninstalling extensions, the Python interface needs to be built. This is done automatically, but can be manually triggered if required. Start a Python session and import openbb:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"python\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from openbb import obb\n\nexit()\n"})}),"\n",(0,i.jsx)(n.p,{children:"To manually trigger the build:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import openbb\nopenbb.build()\n"})}),"\n",(0,i.jsx)(n.p,{children:"Restart the Python interpreter and then begin using the OpenBB Platform."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from openbb import obb\n"})}),"\n",(0,i.jsx)(n.p,{children:"Start the REST API with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"uvicorn openbb_core.api.rest_api:app --host 0.0.0.0 --port 8000 --reload\n"})}),"\n",(0,i.jsxs)(n.p,{children:["See more information about using the REST API in the ",(0,i.jsx)(n.a,{href:"/platform/user_guides/rest_api",children:"usage section"})]}),"\n",(0,i.jsx)(n.h2,{id:"hub-synchronization",children:"Hub Synchronization"}),"\n",(0,i.jsxs)(n.p,{children:["Once you have installed the OpenBB Platform with the desired providers and extensions, you can synchronize with the ",(0,i.jsx)(n.a,{href:"https://my.openbb.co/app/hub",children:"OpenBB Hub"}),". The main benefit of this is that you can use your single login to access your saved credentials and preferences from any instance. To login, you can use the ",(0,i.jsx)(n.code,{children:"login"})," method, either using your email and password:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"obb.account.login(email='my_email_here', password='my_password_here')\n"})}),"\n",(0,i.jsx)(n.p,{children:"Or using your personal access token:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"obb.account.login(pat='my_pat_here')\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var i=t(5260),s=t(74848);function o(e){let{title:n}=e;return(0,s.jsx)(i.A,{children:(0,s.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(96540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);