"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80785],{91072:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>j,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=r(74848),s=r(28453),i=r(94331),d=r(18228),o=r(19365);const l={title:"tft",description:"This Docusaurus page provides in-depth information on the use of Temporal Fusion Transformer for forecasting purposes, as implemented through OpenBB finance. It includes details on the model's parameters, usage, and output, along with the source code and chart visualization capabilities. The page is of high relevance for developers, data analysts, and professionals dealing with predictive modeling and data analysis tasks.",keywords:["Temporal Fusion Transformer forecasting","OpenBB finance","Temporal Fusion Transformer chart","Machine Learning","Data analysis","Predictive modeling","Predictive analytics","Data modeling"]},a=void 0,c={id:"sdk/reference/forecast/tft",title:"tft",description:"This Docusaurus page provides in-depth information on the use of Temporal Fusion Transformer for forecasting purposes, as implemented through OpenBB finance. It includes details on the model's parameters, usage, and output, along with the source code and chart visualization capabilities. The page is of high relevance for developers, data analysts, and professionals dealing with predictive modeling and data analysis tasks.",source:"@site/content/sdk/reference/forecast/tft.md",sourceDirName:"sdk/reference/forecast",slug:"/sdk/reference/forecast/tft",permalink:"/sdk/reference/forecast/tft",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/forecast/tft.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719247347e3,frontMatter:{title:"tft",description:"This Docusaurus page provides in-depth information on the use of Temporal Fusion Transformer for forecasting purposes, as implemented through OpenBB finance. It includes details on the model's parameters, usage, and output, along with the source code and chart visualization capabilities. The page is of high relevance for developers, data analysts, and professionals dealing with predictive modeling and data analysis tasks.",keywords:["Temporal Fusion Transformer forecasting","OpenBB finance","Temporal Fusion Transformer chart","Machine Learning","Data analysis","Predictive modeling","Predictive analytics","Data modeling"]},sidebar:"tutorialSidebar",previous:{title:"tcn",permalink:"/sdk/reference/forecast/tcn"},next:{title:"theta",permalink:"/sdk/reference/forecast/theta"}},h={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}];function x(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"forecast.tft - Reference | OpenBB SDK Docs"}),"\n","\n",(0,n.jsxs)(d.A,{children:[(0,n.jsxs)(o.A,{value:"model",label:"Model",default:!0,children:[(0,n.jsx)(t.p,{children:"Performs Temporal Fusion Transformer forecasting"}),(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/tft_model.py#L26",children:"link"}),"]"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'openbb.forecast.tft(data: Union[pd.Series, pd.DataFrame], target_column: str = "close", n_predict: int = 5, past_covariates: str = None, train_split: float = 0.85, forecast_horizon: int = 5, input_chunk_length: int = 14, output_chunk_length: int = 5, hidden_size: int = 16, lstm_layers: int = 1, num_attention_heads: int = 4, full_attention: bool = False, dropout: float = 0.1, hidden_continuous_size: int = 8, n_epochs: int = 200, batch_size: int = 32, model_save_name: str = "tft_model", force_reset: bool = True, save_checkpoints: bool = True)\n'})}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data (Union[pd.Series, pd.DataFrame])"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Input Data"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"target_column"}),(0,n.jsx)(t.td,{children:"Optional[str]:"}),(0,n.jsx)(t.td,{children:'Target column to forecast. Defaults to "close".'}),(0,n.jsx)(t.td,{children:"close"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"n_predict (int, optional)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Days to predict. Defaults to 5."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"train_split (float, optional)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Train/val split. Defaults to 0.85."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"past_covariates (str, optional)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Multiple secondary columns to factor in when forecasting. Defaults to None."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"forecast_horizon (int, optional)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Forecast horizon when performing historical forecasting. Defaults to 5."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"input_chunk_length (int, optional)"}),(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:["Number of past time steps that are fed to the forecasting module at prediction time.",(0,n.jsx)("br",{}),"Defaults to 14."]}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"output_chunk_length (int, optional)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"The length of the forecast of the model. Defaults to 5."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hidden_size (int, optional)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Hidden state size of the TFT. Defaults to 16."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"lstm_layers (int, optional)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Number of layers for the Long Short Term Memory Encoder and Decoder. Defaults to 16."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"num_attention_headers (int, optional)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Number of attention heads. Defaults to 4."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"full_attention (bool, optional)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Whether to apply a multi-head attention query. Defaults to False>"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"dropout (float, optional)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Fraction of neurons affected by dropout. Defaults to 0.1."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hidden_continuous_size (int, optional)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Default hidden size for processing continuous variables. Defaults to 8."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"n_epochs (int, optional)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Number of epochs to run during training. Defaults to 200."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"batch_size (int, optional)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Number of samples to pass through network during a single epoch. Defaults to 32."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"model_save_name (str, optional)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"The name for the model. Defaults to tft_model"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"force_reset (bool, optional)"}),(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:["If set to True, any previously-existing model with the same name will be reset",(0,n.jsx)("br",{}),"(all checkpoints will be discarded). Defaults to True."]}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"save_checkpoints (bool, optional)"}),(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:["Whether or not to automatically save the untrained model and checkpoints from training.",(0,n.jsx)("br",{}),"Defaults to True."]}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:["Adjusted Data series,",(0,n.jsx)("br",{}),"List of historical fcast values,",(0,n.jsx)("br",{}),"List of predicted fcast values,",(0,n.jsx)("br",{}),"Optional[float] - precision,",(0,n.jsx)("br",{}),"Fit Prob. TFT model object."]})]})})]}),(0,n.jsx)(t.hr,{})]}),(0,n.jsxs)(o.A,{value:"view",label:"Chart",children:[(0,n.jsx)(t.p,{children:"Display Temporal Fusion Transformer forecast"}),(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/tft_view.py#L20",children:"link"}),"]"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'openbb.forecast.tft_chart(data: Union[pd.Series, pd.DataFrame], target_column: str = "close", dataset_name: str = "", n_predict: int = 5, past_covariates: str = None, train_split: float = 0.85, forecast_horizon: int = 5, input_chunk_length: int = 14, output_chunk_length: int = 5, hidden_size: int = 16, lstm_layers: int = 1, num_attention_heads: int = 4, full_attention: bool = False, dropout: float = 0.1, hidden_continuous_size: int = 8, n_epochs: int = 200, batch_size: int = 32, model_save_name: str = "tft_model", force_reset: bool = True, save_checkpoints: bool = True, export: str = "", residuals: bool = False, forecast_only: bool = False, start_date: Optional[datetime.datetime] = None, end_date: Optional[datetime.datetime] = None, naive: bool = False, export_pred_raw: bool = False, external_axes: Optional[List[axes]] = None)\n'})}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"parameters-1",children:"Parameters"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data (Union[pd.Series, pd.DataFrame])"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Input Data"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"target_column"}),(0,n.jsx)(t.td,{children:"Optional[str]:"}),(0,n.jsx)(t.td,{children:'Target column to forecast. Defaults to "close".'}),(0,n.jsx)(t.td,{children:"close"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"dataset_name str"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"The name of the ticker to be predicted"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"n_predict (int, optional)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Days to predict. Defaults to 5."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"train_split (float, optional)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Train/val split. Defaults to 0.85."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"past_covariates (str, optional)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Multiple secondary columns to factor in when forecasting. Defaults to None."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"forecast_horizon (int, optional)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Forecast horizon when performing historical forecasting. Defaults to 5."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"input_chunk_length (int, optional)"}),(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:["Number of past time steps that are fed to the forecasting module at prediction time.",(0,n.jsx)("br",{}),"Defaults to 14."]}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"output_chunk_length (int, optional)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"The length of the forecast of the model. Defaults to 5."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hidden_size (int, optional)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Hidden state size of the TFT. Defaults to 16."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"lstm_layers (int, optional)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Number of layers for the Long Short Term Memory Encoder and Decoder. Defaults to 16."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"num_attention_headers (int, optional)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Number of attention heads. Defaults to 4."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"full_attention (bool, optional)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Whether to apply a multi-head attention query. Defaults to False>"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"dropout (float, optional)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Fraction of neurons affected by dropout. Defaults to 0.1."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hidden_continuous_size (int, optional)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Default hidden size for processing continuous variables. Defaults to 8."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"n_epochs (int, optional)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Number of epochs to run during training. Defaults to 200."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"batch_size (int, optional)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Number of samples to pass through network during a single epoch. Defaults to 32."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"model_save_name (str, optional)"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"The name for the model. Defaults to tft_model"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"force_reset (bool, optional)"}),(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:["If set to True, any previously-existing model with the same name will be reset",(0,n.jsx)("br",{}),"(all checkpoints will be discarded). Defaults to True."]}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"save_checkpoints (bool, optional)"}),(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:["Whether or not to automatically save the untrained model and checkpoints from training.",(0,n.jsx)("br",{}),"Defaults to True."]}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"residuals"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Whether to show residuals for the model. Defaults to False."}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"forecast_only"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Whether to only show dates in the forecasting range. Defaults to False."}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Optional[datetime]"}),(0,n.jsx)(t.td,{children:"The starting date to perform analysis, data before this is trimmed. Defaults to None."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Optional[datetime]"}),(0,n.jsx)(t.td,{children:"The ending date to perform analysis, data after this is trimmed. Defaults to None."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"naive"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsxs)(t.td,{children:["Whether to show the naive baseline. This just assumes the closing price will be the same",(0,n.jsx)("br",{}),"as the previous day's closing price. Defaults to False."]}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"external_axes"}),(0,n.jsx)(t.td,{children:"Optional[List[plt.axes]]"}),(0,n.jsx)(t.td,{children:"External axes to plot on"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"returns-1",children:"Returns"}),(0,n.jsx)(t.p,{children:"This function does not return anything"}),(0,n.jsx)(t.hr,{})]})]})]})}function j(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>d});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var i=r(74848);function d(e){let{children:t,hidden:r,className:d}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,d),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(5260),s=r(74848);function i(e){let{title:t}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>_});var n=r(96540),s=r(34164),i=r(23104),d=r(56347),o=r(205),l=r(57485),a=r(31682),c=r(70679);function h(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}function u(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??h(r);return function(e){const t=(0,a.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:r}=e;const s=(0,d.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,i=u(e),[d,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[a,h]=j({queryString:r,groupId:s}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,c.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),m=(()=>{const e=a??p;return x({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{m&&l(m)}),[m]);return{selectedValue:d,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),f(e)}),[h,f,i]),tabValues:i}}var f=r(92303);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function g(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),{pathname:h}=(0,d.zy)(),u=e=>{const t=e.currentTarget,r=a.indexOf(t),s=l[r].value;s!==n&&(c(t),o(s))},x=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=a.indexOf(e.currentTarget)+1;t=a[r]??a[0];break}case"ArrowLeft":{const r=a.indexOf(e.currentTarget)-1;t=a[r]??a[a.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>a.push(e),onKeyDown:x,onClick:u,...i,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,i?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&h.startsWith("/terminal")}),children:r??t},t)}))})}function T(e){let{lazy:t,children:r,selectedValue:s}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function v(e){const t=p(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,b.jsx)(g,{...e,...t}),(0,b.jsx)(T,{...e,...t})]})}function _(e){const t=(0,f.A)();return(0,b.jsx)(v,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>o});var n=r(96540);const s={},i=n.createContext(s);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);