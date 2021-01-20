(function(e){function t(t){for(var n,a,i=t[0],c=t[1],l=t[2],u=0,p=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,a=1;a<s.length;a++){var c=s[a];0!==o[c]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=s[0]))}return e}var n={},o={app:0},r=[];function a(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"10967a87"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.e=function(e){var t=[],s=o[e];if(0!==s)if(s)t.push(s[2]);else{var n=new Promise((function(t,n){s=o[e]=[t,n]}));t.push(s[2]=n);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=a(e);var l=new Error;r=function(t){c.onerror=c.onload=null,clearTimeout(u);var s=o[e];if(0!==s){if(s){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,s[1](l)}o[e]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";s("85ec")},"56d7":function(e,t,s){"use strict";s.r(t);var n=s("2b0e"),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"text-left px-5 py-2"},[s("button",{staticClass:"btn btn-info",on:{click:e.reset}},[e._v("Reset System")]),s("a",{staticClass:"btn btn-danger ml-3",on:{click:function(t){return t.preventDefault(),e.$router.push("/orders")}}},[e._v("View Orders")])]),s("router-view")],1)},r=[],a=s("2f62"),i=s("a853"),c={name:"Home",components:{},mounted(){},methods:{...Object(a["c"])(["addLesson","clearLessons"]),loadLessons:async function(){try{let e=await Object(i["b"])();this.clearLessons();for(let t of e.lessons)this.addLesson(t)}catch(e){console.log(e.message)}},reset(){this.loadLessons(),this.$router.push("/")}}},l=c,u=(s("034f"),s("2877")),d=Object(u["a"])(l,o,r,!1,null,null,null),p=d.exports,f=s("9483");Object(f["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var h=s("8c4f"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home p-5"},[n("div",{staticClass:"d-flex justify-content-between align-items-center"},[n("h3",[e._v("Available Lessons")]),n("div",[n("div",{staticClass:"form-inline"},[e._m(0),n("div",{staticClass:"form-group mb-2"},[n("label",{staticClass:"sr-only",attrs:{for:"staticEmail2"}},[e._v("Sort")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.sort,expression:"sort"}],staticClass:"form-control",on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.sort=t.target.multiple?s:s[0]}}},[n("option",{attrs:{value:"lesson"}},[e._v("Subject")]),n("option",{attrs:{value:"location"}},[e._v("Location")]),n("option",{attrs:{value:"price"}},[e._v("Price")]),n("option",{attrs:{value:"space"}},[e._v("Availability")])])]),n("div",{staticClass:"form-group mx-sm-3 mb-2"},[n("label",{staticClass:"sr-only",attrs:{for:"inputPassword2"}},[e._v("Direction")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.dir,expression:"dir"}],staticClass:"form-control",on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.dir=t.target.multiple?s:s[0]}}},[n("option",{attrs:{value:"asc"}},[e._v("Ascending")]),n("option",{attrs:{value:"desc"}},[e._v("Descending")])])]),n("div",{staticClass:"form-group mx-sm-3 mb-2"},[e.cart.length>0?n("button",{staticClass:"btn btn-success",on:{click:e.viewCart}},[e._v(" View Cart ("+e._s(e.cart.length)+") ")]):e._e()])])])]),n("div",{staticClass:"row"},e._l(e.computedLessons,(function(t,o){return n("div",{key:o,staticClass:"col-12"},[n("div",{staticClass:"border px-5 py-2 my-2 d-flex justify-content-between align-items-center"},[n("div",{staticClass:"d-flex justify-content-start align-items-center"},[n("div",{staticClass:"mr-3"},[e.online?n("img",{staticStyle:{height:"100px",width:"100px","border-radius":"10px"},attrs:{src:t.image,alt:""}}):n("img",{staticStyle:{height:"100px",width:"100px","border-radius":"10px"},attrs:{src:s("cf05"),alt:""}})]),n("div",{staticClass:"pt-2 text-capitalize"},[n("p",[e._v("Subject: "+e._s(t.lesson))]),n("p",[e._v("Location: "+e._s(t.location))]),n("p",[e._v("Spaces Left: "+e._s(t.space))])])]),n("div",[n("p",[e._v("Price: £"+e._s(t.price))]),n("button",{staticClass:"btn btn-primary",attrs:{disabled:0===t.space},on:{click:function(s){return e.addCart(t._id,o)}}},[e._v(" Add to cart ")])])])])})),0)])},v=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"form-group mb-2 mr-3"},[s("h5",{attrs:{for:"staticEmail2"}},[e._v("Sort")])])}],b={name:"Home",components:{},data(){return{sort:"price",dir:"desc"}},mounted(){this.loadLessons()},computed:{online(){return window.navigator.onLine},...Object(a["b"])(["lessons","cart"]),computedLessons(){if(!this.sort||!this.dir)return this.lessons;switch(this.sort){case"price":return this.lessons.sort((e,t)=>e.price<t.price?-1:e.price>t.price?1:0),"desc"===this.dir&&this.lessons.reverse(),this.lessons;case"location":return this.lessons.sort((e,t)=>e.location.localeCompare(t.location)),"desc"===this.dir&&this.lessons.reverse(),this.lessons;case"space":return this.lessons.sort((e,t)=>e.space<t.space?-1:e.space>t.space?1:0),"desc"===this.dir&&this.lessons.reverse(),this.lessons;case"lesson":return this.lessons.sort((e,t)=>e.lesson.localeCompare(t.lesson)),"desc"===this.dir&&this.lessons.reverse(),this.lessons}}},methods:{...Object(a["c"])(["addLesson","clearLessons","addToCart"]),loadLessons:async function(){try{let e=await Object(i["b"])();this.clearLessons();for(let t of e.lessons)this.addLesson(t)}catch(e){console.log(e.message)}},addCart(e,t){let s=this.cart.findIndex(t=>t.lesson===e),n=this.lessons[t];if(-1!==s)this.cart[s].quantity++,this.cart[s].total=this.cart[s].total+n.price;else{let t={lesson:e,quantity:1,total:n.price};this.addToCart(t)}this.lessons[t].space--},viewCart(){this.$router.push("/cart")}}},g=b,A=Object(u["a"])(g,m,v,!1,null,null,null),y=A.exports;n["a"].use(h["a"]);const w=[{path:"/",name:"Home",component:y},{path:"/cart",name:"Cart",component:function(){return s.e("about").then(s.bind(null,"b789"))}},{path:"/orders",name:"Orders",component:function(){return s.e("about").then(s.bind(null,"159d"))}},{path:"/confirmation",name:"Confirmation",component:function(){return s.e("about").then(s.bind(null,"fbfd"))}}],_=new h["a"]({mode:"history",base:"/",routes:w});var C=_,j=s("0e44");n["a"].use(a["a"]);var x=new a["a"].Store({state:{lessons:[],cart:[]},mutations:{addLesson(e,t){e.lessons.push(t)},addToCart(e,t){e.cart.push(t)},clearLessons(e){e.lessons=[],e.cart=[]}},getters:{lessons:e=>e.lessons,cart:e=>e.cart},actions:{},modules:{},plugins:[Object(j["a"])()]}),k=s("8ac1");const L=["Abbeville","Abbotsford","Abbott","Abbottstown","Abercrombie","Aberdeen","Aberdeen Proving Ground","Abernathy","Abilene","Abingdon","Abington","Abington Township","Abiquiu","Abita Springs","Abrams","Absarokee","Absecon","Acampo","Access","Accident","Accokeek","Accomac","Accord","Accoville","Achille","Achilles","Ackerly","Ackerman","Ackley","Acme","Acton","Acushnet","Acworth","Ada","Adah","Adair","Adairsville","Adairville","Adak","Adams","Adams Center","Adams Run","Adamstown","Adamsville","Addieville","Addis","Addison","Addyston","Adel","Adelanto","Adell","Adena","Adger","Adin","Adkins","Admire","Adolphus","Adona","Adrian","Advance","Afton","Agar","Agate","Agawam","Agency","Agoura Hills","Agra"],O=function(e){let t=[];for(let s=1;s<=e;s++)t[s]={lesson:k({exactly:2,join:" "}),location:L[s],price:s>10?2*s:3*s,space:5,image:"https://picsum.photos/200/300"};return t};s("4989"),s("ab8b");n["a"].prototype.$lessons=O,n["a"].config.productionTip=!1,new n["a"]({router:C,store:x,render:function(e){return e(p)}}).$mount("#app")},"85ec":function(e,t,s){},a853:function(e,t,s){"use strict";s.d(t,"b",(function(){return n})),s.d(t,"c",(function(){return o})),s.d(t,"a",(function(){return r}));const n=async function(){return fetch("http://localhost:1002/lessons").then(e=>e.json()).then(e=>e)},o=async function(e){return fetch("http://localhost:1002/orders",{method:"post",body:e,headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>e)},r=async function(e){return fetch("http://localhost:1002/fetch-orders",{method:"post",body:e,headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>e)}},cf05:function(e,t,s){e.exports=s.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.c591a8c8.js.map