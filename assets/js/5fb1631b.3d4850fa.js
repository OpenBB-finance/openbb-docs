"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46357],{70683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=n(74848),o=n(28453);const a={title:"Plotly Charting Example",sidebar_position:2,description:"Learn how to integrate your own backend with OpenBB Terminal Pro using the cookie-cutter or language-agnostic API approaches, with illustrative guides and principles for handling widget.json files, APIs, interfaces, Python, FastAPI, and more.",keywords:["widgets.json","OpenBB API","Endpoint integration","widget configuration","Language-Agnostic API","API implementation","Python","FastAPI","Terminal Pro widgets","Widget definitions"]},r="Introduction",s={id:"terminal/custom-backend/Widgets/chart/plotly",title:"Plotly Charting Example",description:"Learn how to integrate your own backend with OpenBB Terminal Pro using the cookie-cutter or language-agnostic API approaches, with illustrative guides and principles for handling widget.json files, APIs, interfaces, Python, FastAPI, and more.",source:"@site/content/terminal/custom-backend/Widgets/chart/plotly.md",sourceDirName:"terminal/custom-backend/Widgets/chart",slug:"/terminal/custom-backend/Widgets/chart/plotly",permalink:"/terminal/custom-backend/Widgets/chart/plotly",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/custom-backend/Widgets/chart/plotly.md",tags:[],version:"current",lastUpdatedBy:"Andrew",lastUpdatedAt:1734982365e3,sidebarPosition:2,frontMatter:{title:"Plotly Charting Example",sidebar_position:2,description:"Learn how to integrate your own backend with OpenBB Terminal Pro using the cookie-cutter or language-agnostic API approaches, with illustrative guides and principles for handling widget.json files, APIs, interfaces, Python, FastAPI, and more.",keywords:["widgets.json","OpenBB API","Endpoint integration","widget configuration","Language-Agnostic API","API implementation","Python","FastAPI","Terminal Pro widgets","Widget definitions"]},sidebar:"tutorialSidebar",previous:{title:"Native Charting Example",permalink:"/terminal/custom-backend/Widgets/chart/native"},next:{title:"Markdown Example",permalink:"/terminal/custom-backend/Widgets/markdown"}},d={},l=[{value:"Step 1: Set Up Your Project",id:"step-1-set-up-your-project",level:2},{value:"Step 2: Create the Chart Endpoint",id:"step-2-create-the-chart-endpoint",level:2},{value:"Edit the widgets.json File",id:"edit-the-widgetsjson-file",level:3},{value:"Step 3: Run the Application",id:"step-3-run-the-application",level:2},{value:"Step 4: Add to OpenBB Pro",id:"step-4-add-to-openbb-pro",level:2},{value:"Additional Resources",id:"additional-resources",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(t.p,{children:"This guide will walk you through the process of creating a chart widget for OpenBB Terminal Pro. We will be using Plotly to create the chart in our example. By the end of this guide, you will have a working chart widget that you can add to OpenBB Terminal Pro."}),"\n",(0,i.jsx)(t.h2,{id:"step-1-set-up-your-project",children:"Step 1: Set Up Your Project"}),"\n",(0,i.jsx)(t.p,{children:"To get started, create the main application file and the widget configuration file. You will only need these two files:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"main.py"}),": This file will contain your FastAPI application code."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"widgets.json"}),": This file will define the configuration for your widget."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The backend will use the same FastAPI setup and structure as described in the ",(0,i.jsx)(t.a,{href:"/terminal/custom-backend/",children:"Custom Backend"})," page."]}),"\n",(0,i.jsx)(t.h2,{id:"step-2-create-the-chart-endpoint",children:"Step 2: Create the Chart Endpoint"}),"\n",(0,i.jsxs)(t.p,{children:["Edit the ",(0,i.jsx)(t.code,{children:"main.py"})," file and add the following code. This code sets up a FastAPI application with an endpoint to serve the widget configuration and data for a chart:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'...\n# Chart endpoint\n@app.get("/chains")\ndef get_chains():\n    """Fetch and display the current TVL of all chains using Defi Llama."""\n    params = {}\n    response = requests.get("https://api.llama.fi/v2/chains", params=params)\n\n    if response.status_code == 200:\n        # Create a DataFrame from the JSON data\n        df = pd.DataFrame(response.json())\n\n        # Sort the DataFrame by \'tvl\' in descending order and select the top 30\n        top_30_df = df.sort_values(by=\'tvl\', ascending=False).head(30)\n\n        # Create a bar chart using Plotly\n        figure = go.Figure(\n            data=[go.Bar(x=top_30_df["tokenSymbol"], y=top_30_df["tvl"])],\n            layout=go.Layout(\n                title="Top 30 Chains by TVL",\n                xaxis_title="Token Symbol",\n                yaxis_title="Total Value Locked (TVL)"\n            )\n        )\n\n        # Convert the Plotly figure to JSON format for frontend rendering\n        # This is a crucial step that allows the figure to be displayed in OpenBB Terminal Pro\n        return json.loads(figure.to_json())\n\n    print(f"Request error {response.status_code}: {response.text}")\n    return JSONResponse(\n        content={"error": response.text}, status_code=response.status_code\n    )\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Because we are using Plotly, we need to convert the figure to JSON format for frontend rendering. Returning the figure directly will not work - so utilizing the ",(0,i.jsx)(t.code,{children:"figure.to_json()"})," method is crucial."]}),"\n",(0,i.jsx)(t.h3,{id:"edit-the-widgetsjson-file",children:"Edit the widgets.json File"}),"\n",(0,i.jsxs)(t.p,{children:["Edit the ",(0,i.jsx)(t.code,{children:"widgets.json"})," file and add the following JSON data. This configuration defines the widget's properties and how it should be displayed:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "chains_plotly": {\n    "name": "Chains chart example",\n    "description": "Get current TVL of all chains and plot it!",\n    "category": "crypto",\n    "type": "chart",\n    "endpoint": "chains",\n    "gridData": {\n      "w": 20,\n      "h": 9\n    }\n  }\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["For more information on the ",(0,i.jsx)(t.code,{children:"widgets.json"})," file, see the ",(0,i.jsx)(t.a,{href:"/content/terminal/custom-backend/widgets.json",children:"Widgets.json"})," page."]}),"\n",(0,i.jsx)(t.h2,{id:"step-3-run-the-application",children:"Step 3: Run the Application"}),"\n",(0,i.jsx)(t.p,{children:"Start the FastAPI Server using Uvicorn. This will host your backend locally:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"uvicorn main:app --host localhost --port 5050\n"})}),"\n",(0,i.jsx)(t.h2,{id:"step-4-add-to-openbb-pro",children:"Step 4: Add to OpenBB Pro"}),"\n",(0,i.jsxs)(t.p,{children:["Navigate to ",(0,i.jsx)(t.a,{href:"https://pro.openbb.co/app/data-connectors",children:"OpenBB Pro Data Connectors"})," and add your backend by clicking on the ",(0,i.jsx)(t.code,{children:"+ Add Data"})," button in the top right corner. Select ",(0,i.jsx)(t.code,{children:"Custom Backend"})," and fill in the details. Your URL will be ",(0,i.jsx)(t.code,{children:"http://localhost:5050"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Once you have added your backend, you can find the widget in the ",(0,i.jsx)(t.code,{children:"Crypto"})," category with the name ",(0,i.jsx)(t.code,{children:"Chains chart example"}),"."]}),"\n",(0,i.jsx)("img",{className:"pro-border-gradient",width:"600",alt:"chart",src:"https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/plotly-chart.png"}),"\n",(0,i.jsx)(t.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,i.jsxs)(t.p,{children:["You can find more examples of how to set up your own backend in the ",(0,i.jsx)(t.a,{href:"https://github.com/OpenBB-finance/backend-for-terminal-pro",children:"Backend for Terminal Pro GitHub"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var i=n(96540);const o={},a=i.createContext(o);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);