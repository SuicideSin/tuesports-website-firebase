(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],u=0,p=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f585eebb"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=n);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var c=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",c.name="ChunkLoadError",c.type=n,c.request=o,a[1](c)}r[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("1356"),r=a.n(n);r.a},1356:function(t,e,a){},"24d4":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=a("f309");n["a"].use(r["a"]);var o=new r["a"]({}),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-snackbar",{attrs:{top:"",timeout:0},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[a("v-icon",{attrs:{dark:"",left:""}},[t._v("info")]),t._v("This website is still under development\n    "),a("v-btn",{attrs:{color:"pink",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1),a("Navbar"),a("div",{staticStyle:{"margin-top":"50px"}}),a("router-view"),a("v-footer",{attrs:{color:"red darken-3"}},[a("v-layout",{attrs:{"justify-center":""}},[a("p",{staticClass:"subheading white--text",staticStyle:{"margin-bottom":"-5px"}},[t._v("This website is still in development | Copyright 2019")])])],1)],1)},s=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{color:"red darken-3",app:"",dark:"",fixed:"",text:"",height:"50px"}},[a("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up"}),a("v-toolbar-title",[t._v("TU Esports Club")]),a("v-spacer"),a("v-btn",{staticClass:"no-padding hidden-sm-and-down",attrs:{color:"white",large:"",depressed:"",text:"",to:"/"}},[a("span",[t._v("Home")])]),a("v-menu",{attrs:{"offset-y":"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({staticClass:"no-padding hidden-sm-and-down",attrs:{color:"white",large:"",depressed:"",text:""}},n),[a("span",[t._v("Games")]),a("v-icon",{attrs:{dark:""}},[t._v("arrow_drop_down")])],1)]}}])},[a("v-list",t._l(t.items,(function(e){return a("v-list-item",{key:e.name,attrs:{to:e.path}},[a("v-list-item-title",{domProps:{textContent:t._s(e.name)}})],1)})),1)],1),a("v-btn",{staticClass:"no-padding hidden-sm-and-down",attrs:{color:"white",large:"",depressed:"",text:"",to:"/about"}},[a("span",[t._v("About Us")])])],1)},c=[],u={data:function(){return{items:[{name:"Overwatch",path:"/"},{name:"League of Legends",path:"/"},{name:"Rocket League",path:"/rocket-league"},{name:"FGC",path:"/"}]}}},d=u,p=(a("5dfc"),a("2877")),f=a("6544"),v=a.n(f),h=a("40dc"),m=a("5bc1"),g=a("8336"),b=a("132d"),x=a("8860"),w=a("da13"),y=a("5d23"),_=a("e449"),k=a("2fa4"),C=a("2a7f"),V=Object(p["a"])(d,l,c,!1,null,null,null),S=V.exports;v()(V,{VAppBar:h["a"],VAppBarNavIcon:m["a"],VBtn:g["a"],VIcon:b["a"],VList:x["a"],VListItem:w["a"],VListItemTitle:y["c"],VMenu:_["a"],VSpacer:k["a"],VToolbarTitle:C["a"]});var j={name:"App",components:{Navbar:S},data:function(){return{snackbar:!0}}},T=j,O=(a("034f"),a("7496")),L=a("553a"),z=a("a722"),P=a("2db4"),R=Object(p["a"])(T,i,s,!1,null,null,null),I=R.exports;v()(R,{VApp:O["a"],VBtn:g["a"],VFooter:L["a"],VIcon:b["a"],VLayout:z["a"],VSnackbar:P["a"]});var E=a("8c4f"),A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{directives:[{name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}],attrs:{column:""}},[a("v-parallax",{attrs:{dark:"",src:"https://cdn.vodafone.co.uk/en/assets/images/large2X/IMG_Background_Bokeh_Red.jpg",height:t.windowSize.y}},[a("v-container",[a("v-row",{attrs:{"fill-height":"",wrap:"","justify-space-around":""}},[a("v-col",{attrs:{xs12:"",md6:""}},[a("v-layout",{attrs:{"fill-height":"","align-center":"","justify-center":""}},[a("v-img",{attrs:{src:"./logo.png",contain:"","max-height":"214px","max-width":"400px"}})],1)],1),a("v-col",{attrs:{xs12:"",md6:"","align-self-center":""}},[a("p",{staticClass:"subheading text-lg-right text-sm-center",staticStyle:{"margin-bottom":"-5px"}},[t._v("\n            Welcome to the official unofficial website for the\n          ")]),a("h6",{staticClass:"display-3 text-lg-right text-sm-center"},[t._v("\n            Temple University "),t.$vuetify.breakpoint.xsOnly?a("br"):t._e(),t._v("\n            Esports Club\n          ")])])],1)],1)],1),a("v-divider"),a("br"),a("br"),a("h2",{staticClass:"display-3 font-weight-light text-sm-center font-italic"},[t._v("\n    Testimonials\n  ")]),a("br"),a("br"),a("v-row",{attrs:{"fill-height":"",wrap:"",justify:"space-around"}},t._l(t.testimonials,(function(t){return a("v-col",{key:t.name,attrs:{xs:"11",md:"3","px-2":"","pb-5":""}},[a("Testimonial",{attrs:{name:t.name,rating:t.rating,text:t.text}})],1)})),1),a("br"),a("br"),a("br"),a("v-sheet",{staticClass:"hidden-sm-and-down",attrs:{"min-width":t.windowSize.y,color:"blue-grey lighten-1","min-height":t.windowSize.y/2}},[a("v-layout",{attrs:{column:"","fill-height":"","justify-center":""}},[a("v-flex",{attrs:{xs4:""}}),a("v-flex",{staticStyle:{"padding-top":"150px"},attrs:{xs4:""}},[a("a",{attrs:{href:"https://discord.gg/tuesports"}},[a("h2",{staticClass:"display-3 font-weight-bold text-sm-center white--text"},[a("u",[t._v("Big Fat Discord Invite Link")])])]),a("p",{staticClass:"subheading text-sm-center white--text font-weight-light",staticStyle:{"margin-bottom":"-5px"}},[t._v("\n          There would be a widget here but a "),a("i",[t._v("certain someone")]),t._v(" changed\n          all the discord permissions.\n        ")])]),a("v-flex",{attrs:{xs4:""}})],1)],1),a("div",{staticStyle:{"padding-bottom":"100px"}})],1)},B=[],M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"white--text",attrs:{color:"red darken-2","min-height":"250px"}},[a("div",{staticClass:"text-center"},[a("v-rating",{staticStyle:{"padding-top":"15px"},attrs:{value:t.rating,"background-color":"yellow lighten-3",color:"orange",readonly:"","half-increments":"",large:""}})],1),a("v-card-title",{staticStyle:{"padding-top":"0px"}},[a("p",{staticClass:"display-1",staticStyle:{"text-align":"center"}},[t._v("-"+t._s(t.text))])]),a("v-card-text"),a("v-card-actions",[a("v-spacer"),a("p",{staticClass:"text-xs-right"},[t._v("-"+t._s(t.name))])],1)],1)},N=[],$=(a("c5f6"),{props:{rating:Number,text:String,name:String}}),F=$,G=(a("e456"),a("b0af")),U=a("99d9"),D=a("1d4d"),H=Object(p["a"])(F,M,N,!1,null,null,null),J=H.exports;v()(H,{VCard:G["a"],VCardActions:U["a"],VCardText:U["c"],VCardTitle:U["d"],VRating:D["a"],VSpacer:k["a"]});var W={components:{Testimonial:J},data:function(){return{windowSize:{x:0,y:0},testimonials:[{rating:3,name:"Sweta Prasad",text:"No Rocket League inhouses but hey Malvin's really cool. 3/5"},{rating:5,name:"Thomas Chin",text:"I never go on when there's drama so I only experience the good parts. 5/5"},{rating:3.5,name:"Brett LeClair",text:"Lots of snacks but no traps (@QNA). 7/11"}]}},mounted:function(){this.onResize()},methods:{onResize:function(){this.windowSize={x:window.innerWidth,y:window.innerHeight}}}},q=W,Q=a("62ad"),X=a("a523"),K=a("ce7e"),Y=a("0e8f"),Z=a("adda"),tt=a("8b9c"),et=a("0fd9"),at=a("8dd9"),nt=a("269a"),rt=a.n(nt),ot=a("dc22"),it=Object(p["a"])(q,A,B,!1,null,null,null),st=it.exports;v()(it,{VCol:Q["a"],VContainer:X["a"],VDivider:K["a"],VFlex:Y["a"],VImg:Z["a"],VLayout:z["a"],VParallax:tt["a"],VRow:et["a"],VSheet:at["a"]}),rt()(it,{Resize:ot["a"]}),n["a"].use(E["a"]);var lt=new E["a"]({routes:[{path:"/",name:"home",component:st},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/rocket-league",name:"Rocket League",component:function(){return a.e("about").then(a.bind(null,"42e5"))}}]}),ct=a("2f62");n["a"].use(ct["a"]);var ut=new ct["a"].Store({state:{},mutations:{},actions:{}});a("5363"),a("bf40"),a("77ed");n["a"].config.productionTip=!1,new n["a"]({router:lt,store:ut,vuetify:o,render:function(t){return t(I)}}).$mount("#app")},"5dfc":function(t,e,a){"use strict";var n=a("8d56"),r=a.n(n);r.a},"8d56":function(t,e,a){},e456:function(t,e,a){"use strict";var n=a("24d4"),r=a.n(n);r.a}});
//# sourceMappingURL=app.12a0c835.js.map