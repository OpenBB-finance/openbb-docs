"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7612],{12417:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var n=t(74848),s=t(28453),i=t(94331);const d={title:"get_regression_data",description:"The 'get_regression_data' page offers a detailed overview of OpenBB finance's function for regression data creation. It provides the source code link, describes the parameters like regression variables and type, and explains the returned results, such as the used dataset, dependent and independent variables, and the OLS model.",keywords:["get_regression_data","OpenBB finance","regression variables","source code link","regression type","OLS model","dependent variable","independent variable","econometrics"]},a=void 0,o={id:"sdk/reference/econometrics/get_regression_data",title:"get_regression_data",description:"The 'get_regression_data' page offers a detailed overview of OpenBB finance's function for regression data creation. It provides the source code link, describes the parameters like regression variables and type, and explains the returned results, such as the used dataset, dependent and independent variables, and the OLS model.",source:"@site/content/sdk/reference/econometrics/get_regression_data.md",sourceDirName:"sdk/reference/econometrics",slug:"/sdk/reference/econometrics/get_regression_data",permalink:"/sdk/reference/econometrics/get_regression_data",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/econometrics/get_regression_data.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719247347e3,frontMatter:{title:"get_regression_data",description:"The 'get_regression_data' page offers a detailed overview of OpenBB finance's function for regression data creation. It provides the source code link, describes the parameters like regression variables and type, and explains the returned results, such as the used dataset, dependent and independent variables, and the OLS model.",keywords:["get_regression_data","OpenBB finance","regression variables","source code link","regression type","OLS model","dependent variable","independent variable","econometrics"]},sidebar:"tutorialSidebar",previous:{title:"fe",permalink:"/sdk/reference/econometrics/fe"},next:{title:"granger",permalink:"/sdk/reference/econometrics/granger"}},c={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function h(e){const r={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"econometrics.get_regression_data - Reference | OpenBB SDK Docs"}),"\n",(0,n.jsx)(r.p,{children:"This function creates a DataFrame with the required regression data as"}),"\n",(0,n.jsxs)(r.p,{children:["Source Code: [",(0,n.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/regression_model.py#L112",children:"link"}),"]"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'openbb.econometrics.get_regression_data(regression_variables: List[tuple], data: Dict[str, pd.DataFrame], regression_type: str = "")\n'})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"regression_variables"}),(0,n.jsx)(r.td,{children:"list"}),(0,n.jsxs)(r.td,{children:["The regressions variables entered where the first variable is",(0,n.jsx)("br",{}),"the dependent variable."]}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"data"}),(0,n.jsx)(r.td,{children:"dict"}),(0,n.jsx)(r.td,{children:"A dictionary containing the datasets."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"regression_type"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"The type of regression that is executed."}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"True"})]})]})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Tuple[DataFrame, Any, List[Any]]"}),(0,n.jsxs)(r.td,{children:["The dataset used,",(0,n.jsx)("br",{}),"Dependent variable,",(0,n.jsx)("br",{}),"Independent variable,",(0,n.jsx)("br",{}),"OLS model."]})]})})]}),"\n",(0,n.jsx)(r.hr,{})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var n=t(5260),s=t(74848);function i(e){let{title:r}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:r})})}},28453:(e,r,t)=>{t.d(r,{R:()=>d,x:()=>a});var n=t(96540);const s={},i=n.createContext(s);function d(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);