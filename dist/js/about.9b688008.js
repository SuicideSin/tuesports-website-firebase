(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"42e5":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{column:""}},[t.$vuetify.breakpoint.mdAndUp?a("v-parallax",{attrs:{dark:"",src:"./goal_explosion_darken_1.jpg"}},[a("v-container",[a("v-row",{attrs:{"fill-height":"",wrap:"","justify-space-around":""}},[a("v-col",{attrs:{xs12:"",md6:"","align-self-center":""}},[a("h6",{staticClass:"display-3 text-sm-center"},[t._v("Rocket League")])])],1)],1)],1):t._e()],1)},r=[],s={components:{}},n=s,l=a("2877"),o=a("6544"),c=a.n(o),d=a("62ad"),u=a("a523"),p=a("a722"),m=a("8b9c"),g=a("0fd9"),v=Object(l["a"])(n,i,r,!1,null,null,null);e["default"]=v.exports;c()(v,{VCol:d["a"],VContainer:u["a"],VLayout:p["a"],VParallax:m["a"],VRow:g["a"]})},f820:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{color:"blue-grey lighten-1"}},[a("v-container",[a("v-row",{attrs:{"align-content":"center"}},[a("v-col",[a("p",{staticClass:"display-3 text-center"},[t._v("About Us")])])],1),a("v-divider",{staticClass:"pb-4"}),a("v-row",{attrs:{"align-content":"center"}},[a("v-col",[a("p",{staticClass:"display-2 text-center"},[t._v("Esports Board")])])],1),a("v-row",t._l(t.board1,function(t,e){return a("v-col",{key:e},[a("ImageCard",{attrs:{card:t,animated:"fadeIn"}})],1)}),1),a("v-row",t._l(t.board2,function(t,e){return a("v-col",{key:e},[a("ImageCard",{attrs:{card:t,animated:"fadeIn"}})],1)}),1),a("v-divider",{staticClass:"pb-4"}),a("v-row",{attrs:{"align-content":"center"}},[a("v-col",[a("p",{staticClass:"display-2 text-center"},[t._v("PR Team")])])],1),a("v-row",{attrs:{"align-content":"center"}},t._l(t.pr,function(t,e){return a("v-col",{key:e,attrs:{xs:"12",md:"4"}},[a("ImageChip",{attrs:{item:t}})],1)}),1)],1)],1)},r=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto animated ma-4",class:t.animated,attrs:{width:t.width,height:"350px"}},[a("v-img",{attrs:{src:t.card.img,height:"200px"}}),a("v-card-title",[t._v("\n    "+t._s(t.card.title)+"\n  ")]),a("v-card-subtitle",[t._v("\n    "+t._s(t.card.subtitle)+"\n  ")]),a("v-card-text",[t._v("\n    "+t._s(t.card.desc)+"\n  ")]),a("v-card-actions",[a("v-spacer")],1)],1)},n=[],l=(a("c5f6"),{props:{animated:{type:String,default:""},width:{type:Number,default:300},card:{type:Object,default:function(){return{title:"MSPi",subtitle:"Capstone Project",desc:"",img:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",buttonName:"Website",buttonAction:"https://mspi.tech/"}}}},data:function(){return{show:!1}},mounted:function(){}}),o=l,c=a("2877"),d=a("6544"),u=a.n(d),p=a("b0af"),m=a("99d9"),g=a("adda"),v=a("2fa4"),b=Object(c["a"])(o,s,n,!1,null,null,null),f=b.exports;u()(b,{VCard:p["a"],VCardActions:m["a"],VCardSubtitle:m["b"],VCardText:m["c"],VCardTitle:m["d"],VImg:g["a"],VSpacer:v["a"]});var h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-list-item",{class:t.elevation+" "+t.color,attrs:{"three-line":""}},[a("v-list-item-avatar",[a("v-img",{attrs:{src:t.item.img}})],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(t.item.title+" ("+t.item.subtitle+")")}}),a("v-list-item-subtitle",{domProps:{textContent:t._s(t.item.desc)}})],1)],1)],1)},C=[],_={props:{item:{type:Object,default:function(){return{img:"",title:"",subtitle:"",desc:""}}},color:{type:String,default:"white"},elevation:{type:String,default:"elevation-1"}}},y=_,w=a("da13"),V=a("8270"),j=a("5d23"),x=Object(c["a"])(y,h,C,!1,null,null,null),k=x.exports;u()(x,{VImg:g["a"],VListItem:w["a"],VListItemAvatar:V["a"],VListItemContent:j["a"],VListItemSubtitle:j["b"],VListItemTitle:j["c"]});var P={components:{ImageCard:f,ImageChip:k},data:function(){return{board1:[{title:"Malvin",subtitle:"Ausii",desc:"President of the Esports Club. Plays a lot of OSU.",img:"./DSC_0426.jpg"},{title:"Sweta",subtitle:"CHOCOLATE",desc:"Vice President and Events Coordinator. Fun gal. Crazy, but fun.",img:"./sweta.jpg"},{title:"Ty",subtitle:"WizKid",desc:"Officer. Leader of the PR Team. Top 500 Overwatch player.",img:"./wizkid.jpg"}],board2:[{title:"Ryan",subtitle:"Avro",desc:"Officer. Talks in chat sometimes. Crippling addiction to Magic.",img:"./avro.png"},{title:"Brett",subtitle:"Zenlos",desc:"Officer. Pretty good at Rocket League. Vape Nash y'all.",img:"./zen.jpg"},{title:"Ewing",subtitle:"BasilPanda",desc:"Discord Manager. Tyrant.",img:"./head.png"}],pr:[{title:"Thomas",subtitle:"Stones24",desc:"Web developer. Photographer. God of this website.",img:"https://scontent.fewr1-6.fna.fbcdn.net/v/t1.0-9/42702448_2247040531990836_5883124306593972224_n.jpg?_nc_cat=103&_nc_ohc=JqH_YXMNqxQAQnNG2iSsPIen8brXIrfrwQo3_i-7Cp0Cyr6TJuIJ4MAHQ&_nc_ht=scontent.fewr1-6.fna&oh=35d8e1025a72ceaa023261a202ffbdae&oe=5E4CBF8C"},{title:"Demi",subtitle:"gunstrings",desc:"Content Manager. Graphic Designer. Smol bunny.",img:"./demi.jpg"},{title:"Jake",subtitle:"MLGjakeg",desc:"Photographer. Takes pictures. Doesn't graph photos.",img:"./head.png"},{title:"Abby",subtitle:"kiseki_ace",desc:"Social Media Manager. Leader of Merchandise. Professional Cosplayer.",img:"./head.png"},{title:"Steve",subtitle:"sir1650",desc:"President of the Ambler Esports Club. Has great hair.",img:"./steve.jpg"},{title:"Mel",subtitle:"crispy",desc:"Graphic Designer. Makes buttons.",img:"./mel.jpg"},{title:"Nadya",subtitle:"needle",desc:"Events Coordinator. Friendliest person in the Discord.",img:"./head.png"},{title:"Antony",subtitle:"GeTroLLeDBro",desc:"Video Editor. Memer.",img:"./head.png"},{title:"Crys",subtitle:"3ambro",desc:"Proofreader. Doesn't read proofs.",img:"./crys.jpeg"}]}}},I=P,S=a("62ad"),L=a("a523"),M=a("ce7e"),T=a("0fd9"),A=Object(c["a"])(I,i,r,!1,null,null,null);e["default"]=A.exports;u()(A,{VCol:S["a"],VContainer:L["a"],VDivider:M["a"],VRow:T["a"]})}}]);
//# sourceMappingURL=about.9b688008.js.map