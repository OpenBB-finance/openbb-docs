"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27940],{26630:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=a(74848),r=a(28453);const s={title:"Grouping and Parameters",sidebar_position:6,description:"Learn how to configure and use grouping and parameters in OpenBB Workspace.",keywords:["grouping","parameters","OpenBB API","widget configuration"]},i=void 0,o={id:"terminal/custom-backend/advanced-controls/grouping-and-parameters",title:"Grouping and Parameters",description:"Learn how to configure and use grouping and parameters in OpenBB Workspace.",source:"@site/content/terminal/custom-backend/advanced-controls/grouping-and-parameters.md",sourceDirName:"terminal/custom-backend/advanced-controls",slug:"/terminal/custom-backend/advanced-controls/grouping-and-parameters",permalink:"/terminal/custom-backend/advanced-controls/grouping-and-parameters",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/custom-backend/advanced-controls/grouping-and-parameters.md",tags:[],version:"current",lastUpdatedBy:"Andrew",lastUpdatedAt:1742312264e3,sidebarPosition:6,frontMatter:{title:"Grouping and Parameters",sidebar_position:6,description:"Learn how to configure and use grouping and parameters in OpenBB Workspace.",keywords:["grouping","parameters","OpenBB API","widget configuration"]},sidebar:"tutorialSidebar",previous:{title:"Widget Settings",permalink:"/terminal/custom-backend/advanced-controls/widget-settings"},next:{title:"Render Functions",permalink:"/terminal/custom-backend/advanced-controls/render-functions"}},l={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Form Parameter",id:"form-parameter",level:2},{value:"Backend Implementation",id:"backend-implementation",level:3},{value:"Endpoint Parameter",id:"endpoint-parameter",level:2},{value:"Grouping",id:"grouping",level:2}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"widgets.json"})," configuration, you can specify parameters/inputs that can be used to customize the data retrieval and display. Widgets can also be grouped if you have multiple widgets on the same dashboard that share a parameter. This section will guide you through setting up these features."]}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["Parameters are used to pass dynamic values to your API endpoints, allowing for customizable data queries from the widget. Each parameter is defined in the ",(0,t.jsx)(n.code,{children:"params"})," array within your widgets.json file and can include the following fields:"]}),"\n",(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{mdxType:"summary",children:"Parameter values"}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"type"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","The data type of the parameter.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Possible values:"})," ",(0,t.jsx)(n.code,{children:'"date"'}),", ",(0,t.jsx)(n.code,{children:'"text"'}),", ",(0,t.jsx)(n.code,{children:'"ticker"'}),", ",(0,t.jsx)(n.code,{children:'"number"'}),", ",(0,t.jsx)(n.code,{children:'"boolean"'}),", ",(0,t.jsx)(n.code,{children:'"endpoint"'}),", ",(0,t.jsx)(n.code,{children:'"form"'})]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"paramName"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","The name of the parameter as it appears in the URL.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Example:"})," ",(0,t.jsx)(n.code,{children:'"startDate"'})]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"value"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"string"}),", ",(0,t.jsx)(n.code,{children:"number"}),", ",(0,t.jsx)(n.code,{children:"boolean"}),(0,t.jsx)(n.br,{}),"\n","The default value for the parameter.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Example:"})," ",(0,t.jsx)(n.code,{children:'"2024-01-01"'})]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"label"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","The label displayed in the UI for the parameter.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Example:"})," ",(0,t.jsx)(n.code,{children:'"Start Date"'})]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"show"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"boolean"}),(0,t.jsx)(n.br,{}),"\n","Indicates whether the parameter should be visible in the UI.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"true"})]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"description"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","A brief description of the parameter, shown on hover.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Example:"})," ",(0,t.jsx)(n.code,{children:'"The start date for the data"'})]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"multiSelect"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"boolean"}),(0,t.jsx)(n.br,{}),"\n","Indicates if multiple values can be selected (only applicable for certain types).",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"false"})]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"options"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Type:"})," list of objects",(0,t.jsx)(n.br,{}),"\n","An array of options for dropdown parameters, each with a ",(0,t.jsx)(n.code,{children:"label"})," and ",(0,t.jsx)(n.code,{children:"value"}),".",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Example:"})," ",(0,t.jsx)(n.code,{children:'[{"label": "Option 1", "value": "option1"}]'})]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"optionsEndpoint"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","An endpoint to fetch options dynamically, used when ",(0,t.jsx)(n.code,{children:"type"})," is ",(0,t.jsx)(n.code,{children:'"endpoint"'}),".",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Example:"})," ",(0,t.jsx)(n.code,{children:'"/api/companies"'})]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"style"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"object"}),(0,t.jsx)(n.br,{}),"\n","Styling options for the parameter. Only popupWidth is currently supported minimum value is 200px max value is 1000px.\n",(0,t.jsx)(n.em,{children:"Example:"})," ",(0,t.jsx)(n.code,{children:'{"popupWidth": 450}'})]})]}),"\n",(0,t.jsx)("img",{className:"pro-border-gradient",width:"700",alt:"widget-parameters",src:"https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/parameters.png"}),"\n",(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{mdxType:"summary",children:"Example for above parameters"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'  "show_example_params": {\n    "name": "Example Backend Params",\n    "description": "Show example param options",\n    "category": "New Category",\n    "searchCategory": "Custom",\n    "endpoint": "show_example_params",\n    "gridData": {\n      "w": 20,\n      "h": 9\n    },\n    "params": [\n      {\n        "paramName": "datePicker1",\n        "value": "$currentDate-1d",\n        "label": "Param 1",\n        "description": "I\'m a Date Picker!",\n        "type": "date"\n      },\n      {\n        "paramName": "textBox1",\n        "value": "Hello!",\n        "label": "Param 2",\n        "description": "I\'m a text input box!",\n        "type": "text"\n      },\n      {\n        "paramName": "TrueFalse",\n        "value": true,\n        "label": "True/False",\n        "description": "I\'m a True/False selector!",\n        "type": "boolean"\n      },\n      {\n        "paramName": "daysPicker1",\n        "value": "1",\n        "label": "Days",\n        "type": "text",\n        "multiSelect": true,\n        "description": "Number of days to look back",\n        "options": [\n          {\n            "value": "1",\n            "label": "1"\n          },\n          {\n            "value": "5",\n            "label": "5"\n          },\n          {\n            "value": "10",\n            "label": "10"\n          },\n          {\n            "value": "20",\n            "label": "20"\n          },\n          {\n            "value": "30",\n            "label": "30"\n          }\n        ]\n      }\n    ]\n  },\n'})})]}),"\n",(0,t.jsx)(n.h2,{id:"form-parameter",children:"Form Parameter"}),"\n",(0,t.jsxs)(n.p,{children:["The form parameter type (",(0,t.jsx)(n.code,{children:'"type": "form"'}),") allows you to create complex input forms with a parameter. This is useful if you want to update some data that is tied to the table or chart and have it update when the form is submitted. Possible use cases are updating a database entry or sending data to an endpoint to be processed then a chart created."]}),"\n",(0,t.jsx)(n.p,{children:"Forms require a dedicated endpoint and are always sent with a POST request. This endpoint will be called when the form is submitted."}),"\n",(0,t.jsxs)(n.p,{children:["You can see a full example of this in the ",(0,t.jsx)(n.a,{href:"https://github.com/OpenBB-finance/backend-examples-for-openbb-workspace/tree/main/advanced_examples/form_parameter",children:"Form Example"})," section."]}),"\n",(0,t.jsx)("img",{className:"pro-border-gradient",width:"500",alt:"form-parameter",src:"https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/form-parameter.png"}),"\n",(0,t.jsx)(n.p,{children:"A form can include various input types:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Date"}),": Select a specific date for the data"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Number"}),": Numeric input field"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Dropdown"}),": Selection menu (can be populated dynamically from an API)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Text"}),": Text input field"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Button"}),": Button to trigger the data submission"]}),"\n"]}),"\n",(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{mdxType:"summary",children:"Example form parameter configuration"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "form_submit_widget": {\n    "name": "Financial Entry Form",\n    "description": "Example of a financial data entry form",\n    "category": "forms",\n    "searchCategory": "form",\n    "endpoint": "all_forms",\n    "type": "table",\n    "gridData": {\n      "w": 20,\n      "h": 9\n    },\n    "params": [\n      {\n        "paramName": "form",\n        "description": "Form example",\n        "type": "form",\n        "endpoint": "form_submit",\n        "inputParams": [\n          {\n            "paramName": "client_first_name",\n            "type": "text",\n            "value": "",\n            "label": "First Name",\n            "description": "Client\'s first name"\n          },\n          {\n            "paramName": "client_last_name",\n            "type": "text",\n            "value": "",\n            "label": "Last Name",\n            "description": "Client\'s last name"\n          },\n          {\n            "paramName": "investment_types",\n            "type": "text",\n            "value": null,\n            "label": "Investment Types",\n            "description": "Selected investment vehicles",\n            "multiSelect": true,\n            "options": [\n              {\n                "label": "Stocks",\n                "value": "stocks"\n              },\n              {\n                "label": "Bonds",\n                "value": "bonds"\n              },\n              {\n                "label": "Mutual Funds",\n                "value": "mutual_funds"\n              },\n              {\n                "label": "ETFs",\n                "value": "etfs"\n              },\n              {\n                "label": "Real Estate",\n                "value": "real_estate"\n              },\n              {\n                "label": "Commodities",\n                "value": "commodities"\n              },\n              {\n                "label": "Cryptocurrency",\n                "value": "cryptocurrency"\n              },\n              {\n                "label": "Options",\n                "value": "options"\n              },\n              {\n                "label": "Futures",\n                "value": "futures"\n              },\n              {\n                "label": "Retirement Accounts",\n                "value": "retirement_accounts"\n              },\n              {\n                "label": "CDs",\n                "value": "cds"\n              }\n            ]\n          },\n          {\n            "paramName": "risk_profile",\n            "type": "text",\n            "value": "",\n            "label": "Risk Profile",\n            "description": "Client risk tolerance assessment"\n          },\n          {\n            "paramName": "add_record",\n            "type": "button",\n            "value": true,\n            "label": "Add Client",\n            "description": "Add client record"\n          },\n          {\n            "paramName": "update_record",\n            "type": "button",\n            "value": true,\n            "label": "Update Client",\n            "description": "Update client record"\n          }\n        ]\n      }\n    ]\n  }\n}\n'})})]}),"\n",(0,t.jsx)(n.h3,{id:"backend-implementation",children:"Backend Implementation"}),"\n",(0,t.jsx)(n.p,{children:"For forms to work properly, you need to implement two endpoints in your backend:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"POST endpoint"})," to handle form submission (specified in the ",(0,t.jsx)(n.code,{children:"endpoint"})," field of the form parameter)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"GET endpoint"})," to retrieve and display the updated data (specified in the widget's main ",(0,t.jsx)(n.code,{children:"endpoint"})," field)"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Below you can find a quick example of how to implement the endpoints and have a form that updates a table."}),"\n",(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{mdxType:"summary",children:"Example backend implementation"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'...\nALL_FORMS = []\n\n# Submit form endpoint to handle the form submission\n@app.post("/form_submit")\nasync def form_submit(params: dict) -> JSONResponse:\n    global ALL_FORMS\n    \n    # Check if first name and last name are provided\n    if not params.get("client_first_name") or not params.get("client_last_name"):\n        # IMPORTANT: Even with a 400 status code, the error message is passed to the frontend\n        # and can be displayed to the user in the OpenBB widget\n        return JSONResponse(\n            status_code=400,\n            content={"error": "Client first name and last name are required"}\n        )\n    \n    # Check if investment types and risk profile are provided\n    if not params.get("investment_types") or not params.get("risk_profile"):\n        return JSONResponse(\n            status_code=400,\n            content={"error": "Investment types and risk profile are required"}\n        )\n\n    # Check if add_record or update_record is provided\n    add_record = params.pop("add_record", None)\n    if add_record:\n        ALL_FORMS.append(\n            {k: ",".join(v) if isinstance(v, list) else v for k, v in params.items()}\n        )\n    update_record = params.pop("update_record", None)\n    if update_record:\n        for record in ALL_FORMS:\n            if record["client_first_name"] == params.get("client_first_name") and record[\n                "client_last_name"\n            ] == params.get("client_last_name"):\n                record.update(params)\n    \n    # IMPORTANT: The OpenBB Workspace only checks for a 200 status code from this endpoint\n    # The actual content returned doesn\'t matter for the widget refresh mechanism\n    # After a successful submission, Workspace will automatically refresh the widget\n    # by calling the GET endpoint defined in the widget configuration\n    return JSONResponse(content={"success": True})\n\n\n# Get all forms\n@app.get("/all_forms")\nasync def all_forms() -> list:\n    print(ALL_FORMS)\n    # IMPORTANT: This GET endpoint is called by the OpenBB widget after form submission\n    # The widget refresh mechanism works by:\n    # 1. User submits form (POST to /form_submit)\n    # 2. If POST returns 200, widget automatically refreshes\n    # 3. Widget refresh calls this GET endpoint to fetch updated data\n    # 4. This function must return ALL data needed to display the updated widget\n    return (\n        ALL_FORMS\n        if ALL_FORMS\n        else [\n            {"client_first_name": None, "client_last_name": None, "investment_types": None, "risk_profile": None}\n        ]\n    )\n'})})]}),"\n",(0,t.jsx)(n.h2,{id:"endpoint-parameter",children:"Endpoint Parameter"}),"\n",(0,t.jsxs)(n.p,{children:["Sometimes you may want to pass a list from an endpoint rather then specify the options in the ",(0,t.jsx)(n.code,{children:"widgets.json"})," file."]}),"\n",(0,t.jsxs)(n.p,{children:["By using ",(0,t.jsx)(n.code,{children:'type: "endpoint"'}),", you'll need to specify an ",(0,t.jsx)(n.code,{children:"optionsEndpoint"})," that returns the available options."]}),"\n",(0,t.jsx)("img",{className:"pro-border-gradient",width:"300",alt:"dropdown",src:"https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/dropdown.png"}),"\n",(0,t.jsx)(n.p,{children:"Here's an example using an endpoint parameter:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "custom_widget": {\n        "name": "Dynamic Options Widget",\n        "endpoint": "custom-endpoint",\n        "params": [\n            {\n                "type": "endpoint",\n                "paramName": "company",\n                "label": "Company",\n                "show": true,\n                "description": "Select a company",\n                "optionsEndpoint": "/api/companies"\n            }\n        ]\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"optionsEndpoint"})," should return data in this format for a simple dropdown:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n    { "label": "Apple Inc.", "value": "AAPL" },\n    { "label": "Microsoft Corporation", "value": "MSFT" },\n    { "label": "Google", "value": "GOOGL" }\n]\n'})}),"\n",(0,t.jsx)(n.p,{children:"You can also return a dropdown with some advanced options passed - Your returned data on the endpoint should be in this format:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "label": "Apple Inc.",\n        "value": "AAPL",\n        "extraInfo": {\n            "description": "Technology Company",\n            "rightOfDescription": "NASDAQ"\n        }\n    },\n    {\n        "label": "Microsoft Corporation",\n        "value": "MSFT",\n        "extraInfo": {\n            "description": "Software Company",\n            "rightOfDescription": "NASDAQ"\n        }\n    },\n    {\n        "label": "Google",\n        "value": "GOOGL",\n        "extraInfo": {\n            "description": "Search Engine",\n            "rightOfDescription": "NASDAQ"\n        }\n    }\n]\n'})}),"\n",(0,t.jsx)(n.p,{children:"These values can also be grouped which we will cover below."}),"\n",(0,t.jsx)(n.h2,{id:"grouping",children:"Grouping"}),"\n",(0,t.jsx)(n.p,{children:"Widget grouping allows multiple widgets to share and respond to the same parameter input. When widgets are grouped, you only need to select a value once to update all related widgets simultaneously. This is useful for dashboards where multiple widgets display different aspects of the same data source."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Grouping Parameters"}),": If multiple widgets use the same ",(0,t.jsx)(n.code,{children:"paramName"})," and ",(0,t.jsx)(n.code,{children:"options"})," parameter configuration, they can be grouped together. This allows users to select a value once and have it apply to all related widgets. You can have multiple parameters grouped across many widgets giving you a lot of flexibility."]}),"\n"]}),"\n",(0,t.jsx)("img",{className:"pro-border-gradient",width:"600",alt:"grouping",src:"https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/new-grouping.png"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "chain_tvl_widget": {\n        "name": "Chain TVL",\n        "endpoint": "chain-tvl",\n        "params": [\n            {\n                "type": "endpoint",\n                "paramName": "chain",\n                "label": "Chain",\n                "optionsEndpoint": "get_chains_list"\n            }\n        ]\n    },\n    "chain_volume_widget": {\n        "name": "Chain Volume",\n        "endpoint": "chain-volume",\n        "params": [\n            {\n                "type": "endpoint",\n                "paramName": "chain",\n                "label": "Chain",\n                "optionsEndpoint": "get_chains_list",\n                "style": {\n                  "popupWidth": 450\n                }\n            }\n        ]\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Grouping by Ticker"}),": If multiple widgets use the same ",(0,t.jsx)(n.code,{children:"ticker"})," parameter configuration, they can be grouped together. The widgets will then use the same built in security list we provide in OpenBB Terminal Pro. This allows users to select a value once and have it apply to all related widgets. You won't need to specify the group in the template.json file for a ticker parameter."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example of widgets that will be grouped using the ticker parameter:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "stock_price_widget": {\n        "name": "Stock Price",\n        "endpoint": "stock-price",\n        "params": [\n            {\n                "type": "ticker",\n                "paramName": "symbol",\n                "label": "Symbol",\n                "value": "AAPL",\n                "description": "Stock ticker symbol"\n            }\n        ]\n    },\n    "company_info_widget": {\n        "name": "Company Info",\n        "endpoint": "company-info",\n        "params": [\n            {\n                "type": "ticker",\n                "paramName": "symbol",\n                "label": "Symbol",\n                "value": "AAPL",\n                "description": "Stock ticker symbol"\n            }\n        ]\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Render Functions"}),": You can also use render functions when you group data."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Let's say you want to group by the symbol in a widget and you want other widgets to change when you click on a cell in the table. You can do this by adding to your ",(0,t.jsx)(n.code,{children:"columnsDefs"})," the render function ",(0,t.jsx)(n.code,{children:"cellOnClick"})," and the ",(0,t.jsx)(n.code,{children:"actionType"})," of ",(0,t.jsx)(n.code,{children:"groupBy"})," along with the ",(0,t.jsx)(n.code,{children:"paramName"})," of the parameter you want to group by. This will group the data by the symbol and update the other widgets that are grouped by the same parameter."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'    "params": [\n      {\n        "paramName": "symbol",\n        "description": "The symbol to get details for",\n        "value": "AXXI",\n        "label": "Symbol",\n        "type": "endpoint",\n        "show": false,\n        "optionsEndpoint": "get_tickers_list"\n      }\n    ],\n    "data": {\n      "table": {\n        "showAll": true,\n        "columnsDefs": [\n          {\n            "field": "Symbol",\n            "headerName": "Symbol",\n            "renderFn": "cellOnClick",\n            "renderFnParams": {\n              "actionType": "groupBy",\n              "groupByParamName": "symbol"\n            }\n          }\n        ]\n      }\n    },\n    "gridData": {\n      "w": 20,\n      "h": 9\n    }\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>o});var t=a(96540);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);