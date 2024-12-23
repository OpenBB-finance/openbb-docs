"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[67314],{55154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=n(74848),o=n(28453);const s={title:"Metric Example",sidebar_position:5,description:"Learn how to integrate your own backend with OpenBB Terminal Pro using the cookie-cutter or language-agnostic API approaches, with illustrative guides and principles for handling widget.json files, APIs, interfaces, Python, FastAPI, and more.",keywords:["widgets.json","OpenBB API","Endpoint integration","widget configuration","Language-Agnostic API","API implementation","Python","FastAPI","Terminal Pro widgets","Widget definitions"]},r="Introduction",a={id:"terminal/custom-backend/Widgets/metric",title:"Metric Example",description:"Learn how to integrate your own backend with OpenBB Terminal Pro using the cookie-cutter or language-agnostic API approaches, with illustrative guides and principles for handling widget.json files, APIs, interfaces, Python, FastAPI, and more.",source:"@site/content/terminal/custom-backend/Widgets/metric.md",sourceDirName:"terminal/custom-backend/Widgets",slug:"/terminal/custom-backend/Widgets/metric",permalink:"/terminal/custom-backend/Widgets/metric",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/custom-backend/Widgets/metric.md",tags:[],version:"current",lastUpdatedBy:"Andrew",lastUpdatedAt:1734982365e3,sidebarPosition:5,frontMatter:{title:"Metric Example",sidebar_position:5,description:"Learn how to integrate your own backend with OpenBB Terminal Pro using the cookie-cutter or language-agnostic API approaches, with illustrative guides and principles for handling widget.json files, APIs, interfaces, Python, FastAPI, and more.",keywords:["widgets.json","OpenBB API","Endpoint integration","widget configuration","Language-Agnostic API","API implementation","Python","FastAPI","Terminal Pro widgets","Widget definitions"]},sidebar:"tutorialSidebar",previous:{title:"Markdown Example",permalink:"/terminal/custom-backend/Widgets/markdown"},next:{title:"Widget Settings",permalink:"/terminal/custom-backend/Advanced Controls/Widget Settings"}},d={},c=[{value:"Step 1: Set Up Your Project",id:"step-1-set-up-your-project",level:2},{value:"Step 2: Create the Metric Endpoint",id:"step-2-create-the-metric-endpoint",level:2},{value:"Edit the widgets.json File",id:"edit-the-widgetsjson-file",level:3},{value:"Step 3: Run the Application",id:"step-3-run-the-application",level:2},{value:"Step 4: Add to OpenBB Pro",id:"step-4-add-to-openbb-pro",level:2},{value:"Additional Resources",id:"additional-resources",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(t.p,{children:"This guide will walk you through the process of creating a metric widget for OpenBB Terminal Pro. By the end of this guide, you will have a working metric widget that you can add to OpenBB Terminal Pro."}),"\n",(0,i.jsx)(t.h2,{id:"step-1-set-up-your-project",children:"Step 1: Set Up Your Project"}),"\n",(0,i.jsx)(t.p,{children:"To get started, create the main application file and the widget configuration file. You will only need these two files:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"main.py"}),": This file will contain your FastAPI application code."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"widgets.json"}),": This file will define the configuration for your widget."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The backend will use the same FastAPI setup and structure as described in the ",(0,i.jsx)(t.a,{href:"/terminal/custom-backend/",children:"Custom Backend"})," page."]}),"\n",(0,i.jsx)(t.h2,{id:"step-2-create-the-metric-endpoint",children:"Step 2: Create the Metric Endpoint"}),"\n",(0,i.jsxs)(t.p,{children:["Edit the ",(0,i.jsx)(t.code,{children:"main.py"})," file and add the following code. This code sets up a FastAPI application with an endpoint to serve the widget configuration and data for a metric widget:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'...\n# Metric endpoint\n@app.get("/test_metric")\ndef test_metric():\n    """Example endpoint to provide metric data."""\n    # Example data structure\n    data = {\n        "label": "Example Label",\n        "value": "12345",\n        "delta": "5.67"\n    }\n\n    return JSONResponse(content=data)\n'})}),"\n",(0,i.jsx)(t.p,{children:"As you can see in the example the data structure is as follows:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"label"}),": The label of the metric."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"value"}),": The value of the metric."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"delta"}),": The delta of the metric."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"edit-the-widgetsjson-file",children:"Edit the widgets.json File"}),"\n",(0,i.jsxs)(t.p,{children:["Edit the ",(0,i.jsx)(t.code,{children:"widgets.json"})," file and add the following JSON data. This configuration defines the widget's properties and how it should be displayed:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "test_metric": {\n    "name": "Metric Widget",\n    "description": "A metric widget example",\n    "category": "Test",\n    "endpoint": "test_metric",\n    "type": "metric"\n  }\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["For more information on the ",(0,i.jsx)(t.code,{children:"widgets.json"})," file, see the ",(0,i.jsx)(t.a,{href:"/content/terminal/custom-backend/widgets.json",children:"Widgets.json"})," page."]}),"\n",(0,i.jsx)(t.h2,{id:"step-3-run-the-application",children:"Step 3: Run the Application"}),"\n",(0,i.jsx)(t.p,{children:"Start the FastAPI Server using Uvicorn. This will host your backend locally:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"uvicorn main:app --host localhost --port 5050\n"})}),"\n",(0,i.jsx)(t.h2,{id:"step-4-add-to-openbb-pro",children:"Step 4: Add to OpenBB Pro"}),"\n",(0,i.jsxs)(t.p,{children:["Navigate to ",(0,i.jsx)(t.a,{href:"https://pro.openbb.co/app/data-connectors",children:"OpenBB Pro Data Connectors"})," and add your backend by clicking on the ",(0,i.jsx)(t.code,{children:"+ Add Data"})," button in the top right corner. Select ",(0,i.jsx)(t.code,{children:"Custom Backend"})," and fill in the details. Your URL will be ",(0,i.jsx)(t.code,{children:"http://localhost:5050"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Once you have added your backend, you can find the widget in the ",(0,i.jsx)(t.code,{children:"Test"})," category with the name ",(0,i.jsx)(t.code,{children:"Test Metric"}),"."]}),"\n",(0,i.jsx)("img",{className:"pro-border-gradient",width:"600",alt:"metric",src:"https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/metric-widget.png"}),"\n",(0,i.jsx)(t.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,i.jsxs)(t.p,{children:["You can find more examples of how to set up your own backend in the ",(0,i.jsx)(t.a,{href:"https://github.com/OpenBB-finance/backend-for-terminal-pro",children:"Backend for Terminal Pro GitHub"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);