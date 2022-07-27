(function(t){function e(e){for(var r,o,u=e[0],s=e[1],l=e[2],b=0,f=[];b<u.length;b++)o=u[b],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);i&&i(e);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,u=1;u<n.length;u++){var s=n[u];0!==a[s]&&(r=!1)}r&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},c=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/covidtracker/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var i=s;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"container"};function c(t,e,n,c,o,u){var s=Object(r["v"])("Header"),l=Object(r["v"])("router-view");return Object(r["q"])(),Object(r["e"])(r["a"],null,[Object(r["h"])(s),Object(r["f"])("div",a,[Object(r["h"])(l)])],64)}var o={class:"text-center bg-blue-800 text-white p-4 mb-10"},u=Object(r["f"])("div",{class:"text-3xl md:text-5xl font-bold mb-3"},[Object(r["f"])("i",{class:"fa fa-viruses"}),Object(r["g"])(" Covid-19 Tracker")],-1),s=Object(r["f"])("p",null,[Object(r["g"])(" API by "),Object(r["f"])("a",{class:"text-blue-300",href:"https://covid19api.com",target:"_blank"},"covid19api.com")],-1),l=[u,s];function i(t,e,n,a,c,u){return Object(r["q"])(),Object(r["e"])("header",o,l)}var b={name:"Header"},f=n("6b0d"),d=n.n(f);const p=d()(b,[["render",i]]);var j=p,O={components:{Header:j}};const v=d()(O,[["render",c]]);var m=v,x=n("6c02"),h={key:0},g={key:1,class:"flex flex-col align-center justify-center text-center"},y=Object(r["f"])("div",{class:"text-gray-500 text-3xl mt-10 mb-6"}," Fetching Data ",-1),w=["src"];function C(t,e,a,c,o,u){var s=Object(r["v"])("DataTitle"),l=Object(r["v"])("DataBoxes"),i=Object(r["v"])("CountrySelect");return c.loading?(Object(r["q"])(),Object(r["e"])("main",g,[y,Object(r["f"])("img",{src:n("e8dd"),alt:"",class:"w-24 m-auto"},null,8,w)])):(Object(r["q"])(),Object(r["e"])("main",h,[Object(r["h"])(s,{dataDate:c.dataDate,text:c.title},null,8,["dataDate","text"]),Object(r["h"])(l,{stats:c.status},null,8,["stats"]),Object(r["h"])(i,{countries:c.countries,onGetCountry:c.getCountryData},null,8,["countries","onGetCountry"]),c.status.Country?(Object(r["q"])(),Object(r["e"])("button",{key:0,class:"bg-green-700 text-white rounded p-3 mt-10 focus:outline-none hover:bg-green-600",onClick:e[0]||(e[0]=function(){return c.clearCountryData&&c.clearCountryData.apply(c,arguments)})}," Clear Country ")):Object(r["d"])("",!0)]))}var D=n("1da1"),k=(n("96cf"),n("d3b7"),Object(r["f"])("option",{value:"0"},"Select Country",-1)),q=["value"];function S(t,e,n,a,c,o){return Object(r["B"])((Object(r["q"])(),Object(r["e"])("select",{"onUpdate:modelValue":e[0]||(e[0]=function(t){return a.selected=t}),class:"form-select mt-10 block w-full border p-3 rounded",onChange:e[1]||(e[1]=function(t){return a.onChange()})},[k,(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["u"])(n.countries,(function(t){return Object(r["q"])(),Object(r["e"])("option",{value:t.ID},Object(r["x"])(t.Country),9,q)})),256))],544)),[[r["z"],a.selected]])}n("7db0");var T={name:"CountrySelect",props:["countries"],setup:function(t,e){var n=t.countries,a=e.emit,c=Object(r["t"])(0);return{selected:c,onChange:function(){var t=n.find((function(t){return t.ID===c.value}));a("get-country",t)}}}};const M=d()(T,[["render",S]]);var P=M,_={class:"grid md:grid-cols-2 gap-4"},G={class:"shadow-md bg-blue-100 p-10 text-center rounded"},R=Object(r["f"])("h3",{class:"text-3xl text-blue-900 font-bold mb-4"},"Cases",-1),B={class:"text-2xl mb-4"},H=Object(r["f"])("span",{class:"font-bold"},"New:",-1),W={class:"text-2xl mb-4"},N=Object(r["f"])("span",{class:"font-bold"},"Total:",-1),Y={class:"shadow-md bg-blue-200 p-10 text-center rounded"},I=Object(r["f"])("h3",{class:"text-3xl text-blue-900 font-bold mb-4"},"Deaths",-1),J={class:"text-2xl mb-4"},z=Object(r["f"])("span",{class:"font-bold"},"New:",-1),A={class:"text-2xl mb-4"},F=Object(r["f"])("span",{class:"font-bold"},"Total:",-1);function U(t,e,n,a,c,o){return Object(r["q"])(),Object(r["e"])("div",_,[Object(r["f"])("div",G,[R,Object(r["f"])("div",B,[H,Object(r["g"])(" "+Object(r["x"])(a.numberWithCommas(n.stats.NewConfirmed)),1)]),Object(r["f"])("div",W,[N,Object(r["g"])(" "+Object(r["x"])(a.numberWithCommas(n.stats.TotalConfirmed)),1)])]),Object(r["f"])("div",Y,[I,Object(r["f"])("div",J,[z,Object(r["g"])(" "+Object(r["x"])(a.numberWithCommas(n.stats.NewDeaths)),1)]),Object(r["f"])("div",A,[F,Object(r["g"])(" "+Object(r["x"])(a.numberWithCommas(n.stats.TotalDeaths)),1)])])])}n("ac1f"),n("5319"),n("d401"),n("0d03"),n("25f0");var V={name:"DataBoxes",props:["stats"],setup:function(){return{numberWithCommas:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}}};const E=d()(V,[["render",U]]);var K=E,L={class:"text-center"},Q={class:"text-3xl font-bold"},X={class:"text-2xl mt-4 mb-10"};function Z(t,e,n,a,c,o){return Object(r["q"])(),Object(r["e"])("div",L,[Object(r["f"])("h2",Q,Object(r["x"])(n.text),1),Object(r["f"])("div",X,Object(r["x"])(a.timestamp),1)])}var $=n("5a0c"),tt=n.n($),et={name:"DataTitle",props:["text","dataDate"],setup:function(t){var e=t.dataDate;return{timestamp:Object(r["b"])((function(){return tt()(e).format("MMMM D YYYY, h:mm:ss a")}))}}};const nt=d()(et,[["render",Z]]);var rt=nt,at={name:"Home",components:{DataTitle:rt,DataBoxes:K,CountrySelect:P},setup:function(){var t=Object(r["t"])(!0),e=Object(r["t"])("Global"),n=Object(r["t"])(""),a=Object(r["t"])({}),c=Object(r["t"])([]),o=function(){var t=Object(D["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.covid19api.com/summary");case 2:return e=t.sent,t.next=5,e.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(t){a.value=t,e.value=t.Country},s=function(){var n=Object(D["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.value=!0,n.next=3,o();case 3:r=n.sent,e.value="Global",a.value=r.Global,t.value=!1;case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o();case 2:r=e.sent,n.value=r.Date,a.value=r.Global,c.value=r.Countries,t.value=!1;case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l(),{loading:t,title:e,dataDate:n,status:a,countries:c,getCountryData:u,clearCountryData:s}}};const ct=d()(at,[["render",C]]);var ot=ct,ut=[{path:"/",name:"Home",component:ot}],st=Object(x["a"])({history:Object(x["b"])("/covidtracker/"),routes:ut}),lt=st;n("ba8c");Object(r["c"])(m).use(lt).mount("#app")},ba8c:function(t,e,n){},e8dd:function(t,e,n){t.exports=n.p+"img/hourglass.549947b6.gif"}});
//# sourceMappingURL=app.c2f6e215.js.map