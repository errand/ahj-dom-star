(()=>{"use strict";var t={369:(t,e,r)=>{var n=r(91),a=r.n(n),i=new URL(r(606),r.b);function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function c(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a()(i);const d=JSON.parse('[{"id":26,"title":"Побег из Шоушенка","imdb":9.3,"year":1994},{"id":25,"title":"Крёстный отец","imdb":9.2,"year":1972},{"id":27,"title":"Крёстный отец 2","imdb":9,"year":1974},{"id":1047,"title":"Тёмный рыцарь","imdb":9,"year":2008},{"id":223,"title":"Криминальное чтиво","imdb":8.9,"year":1994}]');!function(){var t=c(d),e=c(d),r=document.querySelector("#table-container"),n=document.createElement("table");function a(t){n.querySelector("tbody").querySelectorAll("tr").forEach((function(t){return t.remove()})),t.forEach((function(t){var e=t.imdb.toFixed(2);n.querySelector("tbody").insertAdjacentHTML("beforeend","\n    <tr>\n      <td>".concat(t.id,"</td>\n      <td>").concat(t.title,"</td>\n      <td>(").concat(t.year,")</td>\n      <td>").concat(e,"</td>\n    </tr>"))}))}r.append(n),n.insertAdjacentHTML("afterbegin",'<thead><tr><th data-click="id">id</th><th data-click="title">title</th><th data-click="year">year</th><th data-click="imdb">imdb</th></tr></thead><tbody></tbody>'),n.querySelectorAll("th[data-click]").forEach((function(r){return r.addEventListener("click",(function(){return function(r){r.classList.contains("active")?(a(e),r.classList.remove("active")):(n.querySelector("th.active")&&n.querySelector("th.active").classList.remove("active"),a(t.sort((function(t,e){return t[r.dataset.click]<e[r.dataset.click]?-1:t[r.dataset.click]>e[r.dataset.click]?1:0}))),r.classList.add("active"))}(r)}))})),a(t)}()},91:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},606:(t,e,r)=>{t.exports=r.p+"img/3a24d1c2d9b22774331d.ico"}},e={};function r(n){var a=e[n];if(void 0!==a)return a.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.m=t,r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),r.b=document.baseURI||self.location.href,r(369)})();
//# sourceMappingURL=app.js.map