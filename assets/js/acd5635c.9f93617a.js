"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78299],{25310:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>b,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var n=i(74848),o=i(28453),r=i(94331);const c={title:"ob",description:"This page explains how to retrieve the order book for any selected cryptocurrency coin across numerous exchanges. It specifically instructs the use of the 'ob' command in python.",keywords:["order book","cryptocurrency","exchange","quote currency","cryptocurrency pairs","binance","bitfinex","coinbase","poloniex","crypto trading","trading parameters"]},a=void 0,s={id:"terminal/reference/crypto/dd/ob",title:"ob",description:"This page explains how to retrieve the order book for any selected cryptocurrency coin across numerous exchanges. It specifically instructs the use of the 'ob' command in python.",source:"@site/content/terminal/reference/crypto/dd/ob.md",sourceDirName:"terminal/reference/crypto/dd",slug:"/terminal/reference/crypto/dd/ob",permalink:"/terminal/reference/crypto/dd/ob",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/crypto/dd/ob.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719240743e3,frontMatter:{title:"ob",description:"This page explains how to retrieve the order book for any selected cryptocurrency coin across numerous exchanges. It specifically instructs the use of the 'ob' command in python.",keywords:["order book","cryptocurrency","exchange","quote currency","cryptocurrency pairs","binance","bitfinex","coinbase","poloniex","crypto trading","trading parameters"]},sidebar:"tutorialSidebar",previous:{title:"nonzero",permalink:"/terminal/reference/crypto/dd/nonzero"},next:{title:"oi",permalink:"/terminal/reference/crypto/dd/oi"}},b={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function x(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.A,{title:"crypto/dd/ob - Reference | OpenBB Terminal Docs"}),"\n",(0,n.jsx)(t.p,{children:"Get the order book for selected coin"}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"ob [-e {aax,alpaca,ascendex,bequant,bibox,bigone,binance,binancecoinm,binanceus,binanceusdm,bit2c,bitbank,bitbay,bitbns,bitcoincom,bitfinex,bitfinex2,bitflyer,bitforex,bitget,bithumb,bitmart,bitmex,bitopro,bitpanda,bitrue,bitso,bitstamp,bitstamp1,bittrex,bitvavo,bkex,bl3p,blockchaincom,btcalpha,btcbox,btcex,btcmarkets,btctradeua,btcturk,buda,bw,bybit,bytetrade,cex,coinbase,coinbaseprime,coinbasepro,coincheck,coinex,coinfalcon,coinmate,coinone,coinspot,crex24,cryptocom,currencycom,delta,deribit,digifinex,eqonex,exmo,flowbtc,fmfwio,ftx,ftxus,gate,gateio,gemini,hitbtc,hitbtc3,hollaex,huobi,huobijp,huobipro,idex,independentreserve,indodax,itbit,kraken,kucoin,kucoinfutures,kuna,latoken,lbank,lbank2,liquid,luno,lykke,mercado,mexc,mexc3,ndax,novadax,oceanex,okcoin,okex,okex5,okx,paymium,phemex,poloniex,probit,qtrade,ripio,stex,therock,tidebit,tidex,timex,tokocrypto,upbit,wavesexchange,wazirx,whitebit,woo,yobit,zaif,zb,zipmex,zonda}] [--vs VS]\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"}),(0,n.jsx)(t.th,{children:"Choices"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"exchange"}),(0,n.jsx)(t.td,{children:"Exchange to search for order book"}),(0,n.jsx)(t.td,{children:"binance"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"aax, alpaca, ascendex, bequant, bibox, bigone, binance, binancecoinm, binanceus, binanceusdm, bit2c, bitbank, bitbay, bitbns, bitcoincom, bitfinex, bitfinex2, bitflyer, bitforex, bitget, bithumb, bitmart, bitmex, bitopro, bitpanda, bitrue, bitso, bitstamp, bitstamp1, bittrex, bitvavo, bkex, bl3p, blockchaincom, btcalpha, btcbox, btcex, btcmarkets, btctradeua, btcturk, buda, bw, bybit, bytetrade, cex, coinbase, coinbaseprime, coinbasepro, coincheck, coinex, coinfalcon, coinmate, coinone, coinspot, crex24, cryptocom, currencycom, delta, deribit, digifinex, eqonex, exmo, flowbtc, fmfwio, ftx, ftxus, gate, gateio, gemini, hitbtc, hitbtc3, hollaex, huobi, huobijp, huobipro, idex, independentreserve, indodax, itbit, kraken, kucoin, kucoinfutures, kuna, latoken, lbank, lbank2, liquid, luno, lykke, mercado, mexc, mexc3, ndax, novadax, oceanex, okcoin, okex, okex5, okx, paymium, phemex, poloniex, probit, qtrade, ripio, stex, therock, tidebit, tidex, timex, tokocrypto, upbit, wavesexchange, wazirx, whitebit, woo, yobit, zaif, zb, zipmex, zonda"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"vs"}),(0,n.jsx)(t.td,{children:"Quote currency (what to view coin vs)"}),(0,n.jsx)(t.td,{children:"usdt"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"AUD, BIDR, BKRW, BNB, BRL, BTC, BUSD, BVND, DAI, DOGE, DOT, ETH, EUR, GBP, IDRT, NGN, PAX, PLN, RUB, TRX, TRY, TUSD, UAH, USDC, USDP, USDS, USDT, UST, VAI, XRP, ZAR"})]})]})]}),"\n",(0,n.jsx)(t.hr,{})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},94331:(e,t,i)=>{i.d(t,{A:()=>r});i(96540);var n=i(5260),o=i(74848);function r(e){let{title:t}=e;return(0,o.jsx)(n.A,{children:(0,o.jsx)("title",{children:t})})}},28453:(e,t,i)=>{i.d(t,{R:()=>c,x:()=>a});var n=i(96540);const o={},r=n.createContext(o);function c(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);