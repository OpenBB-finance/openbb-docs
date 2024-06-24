"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72896],{49381:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=n(74848),r=n(28453),a=n(94331);const o={title:"season",description:"The page provides details on the 'openbb.forecast.season_chart' function. This function is used to plot seasonality from a dataset. It includes information about the parameters, the return value, and a link to the source code.",keywords:["openbb.forecast.season_chart","season chart","plot seasonality","dataset","dataframe","time lag","max lag","confidence interval"]},d=void 0,i={id:"sdk/reference/forecast/season",title:"season",description:"The page provides details on the 'openbb.forecast.season_chart' function. This function is used to plot seasonality from a dataset. It includes information about the parameters, the return value, and a link to the source code.",source:"@site/content/sdk/reference/forecast/season.md",sourceDirName:"sdk/reference/forecast",slug:"/sdk/reference/forecast/season",permalink:"/sdk/reference/forecast/season",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/forecast/season.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719247347e3,frontMatter:{title:"season",description:"The page provides details on the 'openbb.forecast.season_chart' function. This function is used to plot seasonality from a dataset. It includes information about the parameters, the return value, and a link to the source code.",keywords:["openbb.forecast.season_chart","season chart","plot seasonality","dataset","dataframe","time lag","max lag","confidence interval"]},sidebar:"tutorialSidebar",previous:{title:"rwd",permalink:"/sdk/reference/forecast/rwd"},next:{title:"seasonalnaive",permalink:"/sdk/reference/forecast/seasonalnaive"}},c={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.A,{title:"forecast.season - Reference | OpenBB SDK Docs"}),"\n",(0,s.jsx)(t.p,{children:"Plot seasonality from a dataset"}),"\n",(0,s.jsxs)(t.p,{children:["Source Code: [",(0,s.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/forecast_view.py#L120",children:"link"}),"]"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'openbb.forecast.season_chart(data: pd.DataFrame, column: str = "close", export: str = "", m: Optional[int] = None, max_lag: int = 24, alpha: float = 0.05, external_axes: Optional[List[axes]] = None)\n'})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"data"}),(0,s.jsx)(t.td,{children:"pd.DataFrame"}),(0,s.jsx)(t.td,{children:"The dataframe to plot"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"column"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"The column of the dataframe to analyze"}),(0,s.jsx)(t.td,{children:"close"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"export"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Format to export image"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"m"}),(0,s.jsx)(t.td,{children:"Optional[int]"}),(0,s.jsx)(t.td,{children:"Optionally, a time lag to highlight on the plot. Default is none."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"max_lag"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The maximal lag order to consider. Default is 24."}),(0,s.jsx)(t.td,{children:"24"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"alpha"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The confidence interval to display. Default is 0.05."}),(0,s.jsx)(t.td,{children:"0.05"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"external_axes"}),(0,s.jsx)(t.td,{children:"Optional[List[plt.axes]]"}),(0,s.jsx)(t.td,{children:"External axes to plot on"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:"This function does not return anything"}),"\n",(0,s.jsx)(t.hr,{})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var s=n(5260),r=n(74848);function a(e){let{title:t}=e;return(0,r.jsx)(s.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var s=n(96540);const r={},a=s.createContext(r);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);