(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eb2b"],{"0895":function(t,e,n){t.exports=n.p+"img/google.4eac0414.svg"},"0fe0":function(t,e,n){t.exports=n.p+"img/deck.1bf529e2.svg"},1778:function(t,e,n){t.exports=n.p+"img/angle-right.54124231.svg"},"23f5":function(t,e,n){"use strict";var s=n("4a44"),i=n.n(s);i.a},"316e":function(t,e,n){t.exports=n.p+"img/flag-russia.f5a21e99.svg"},"31e8":function(t,e,n){var s={"./1.svg":"3e23","./add.svg":"eef4","./angle-left.svg":"6fdf","./angle-right.svg":"1778","./cancel.svg":"f687","./cards.svg":"ea39","./close.svg":"bf37","./deck.svg":"0fe0","./edit.svg":"6582","./fb.svg":"a39e","./filter.svg":"5ee4","./flag-russia.svg":"316e","./flag-us.svg":"6bf7","./google.svg":"0895","./logo1.svg":"39fb","./menu.svg":"36be","./pattern.svg":"bd5a","./pattern2.svg":"9c32","./phone-call.svg":"cae0","./portfolio.svg":"8e7c","./settings.svg":"e9b0","./tasks.svg":"7933","./vk.svg":"330c"};function i(t){var e=a(t);return n(e)}function a(t){var e=s[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}i.keys=function(){return Object.keys(s)},i.resolve=a,t.exports=i,i.id="31e8"},"330c":function(t,e,n){t.exports=n.p+"img/vk.95d3de32.svg"},"36be":function(t,e,n){t.exports=n.p+"img/menu.24f5f2af.svg"},"39fb":function(t,e,n){t.exports=n.p+"img/logo1.ba2ca509.svg"},"3e23":function(t,e,n){t.exports=n.p+"img/1.fddb34fe.svg"},"4a44":function(t,e,n){},"4caf":function(t,e,n){"use strict";var s=n("6bb5"),i=n.n(s);i.a},"5ee4":function(t,e,n){t.exports=n.p+"img/filter.7a6f398b.svg"},6582:function(t,e,n){t.exports=n.p+"img/edit.efe21e43.svg"},"6bb5":function(t,e,n){},"6bf7":function(t,e,n){t.exports=n.p+"img/flag-us.607c4144.svg"},"6e8c":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("h1",{staticClass:"header__heading"},[t.status?n("span",{staticClass:"header__status"}):t._e(),t._v("\n    "+t._s(t.heading)+"\n  ")]),n("div",{staticClass:"header__wrapper header__wrapper--left"},[t._t("left")],2),n("div",{staticClass:"header__wrapper header__wrapper--right"},[t._t("right")],2),n("div",{staticClass:"header__wrapper header__wrapper--center-right"},[t._t("center-right")],2)])},i=[],a={props:{heading:{type:String,required:!0},status:{type:String,default:""}}},o=a,c=(n("23f5"),n("2877")),r=Object(c["a"])(o,s,i,!1,null,null,null);r.options.__file="HeaderPanel.vue";e["a"]=r.exports},"6fdf":function(t,e,n){t.exports=n.p+"img/angle-left.3c3aa88c.svg"},7933:function(t,e,n){t.exports=n.p+"img/tasks.66e7a713.svg"},"8e7c":function(t,e,n){t.exports=n.p+"img/portfolio.db2c4149.svg"},"9c32":function(t,e,n){t.exports=n.p+"img/pattern2.766c7ec7.svg"},a39e:function(t,e,n){t.exports=n.p+"img/fb.b3fb60e0.svg"},b2df:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("HeaderPanel",{attrs:{heading:"Меню"}},[n("ButtonComponent",{attrs:{slot:"left",icon:"menu",iconSize:"70",onClick:t.goBack},slot:"left"})],1),n("main",{staticClass:"menu"},[n("ul",{staticClass:"menu__items"},[n("router-link",{staticClass:"menu__item menu__item--todos",attrs:{tag:"li",to:"/chats"}},[n("a",{staticClass:"menu__link"},[t._v("Тикеты")])]),n("router-link",{staticClass:"menu__item menu__item--settings",attrs:{tag:"li",to:"/companies"}},[n("a",{staticClass:"menu__link"},[t._v("Компании")])]),n("router-link",{staticClass:"menu__item menu__item--settings",attrs:{tag:"li",to:"/settings"}},[n("a",{staticClass:"menu__link"},[t._v("Настройки")])])],1)])],1)},i=[],a=n("6e8c"),o=n("e4c3"),c={components:{HeaderPanel:a["a"],ButtonComponent:o["a"]},methods:{goBack:function(){this.$router.go(-1)}}},r=c,u=(n("b6e1"),n("2877")),g=Object(u["a"])(r,s,i,!1,null,"2feb15e1",null);g.options.__file="MenuView.vue";e["default"]=g.exports},b6e1:function(t,e,n){"use strict";var s=n("c3d7"),i=n.n(s);i.a},bd5a:function(t,e,n){t.exports=n.p+"img/pattern.0689ae84.svg"},bf37:function(t,e,n){t.exports=n.p+"img/close.d58bf80d.svg"},c3d7:function(t,e,n){},cae0:function(t,e,n){t.exports=n.p+"img/phone-call.138dfbfe.svg"},e4c3:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"button",style:t.style,on:{click:t.onClick}},[t._v("\n  "+t._s(t.text)+"\n")])},i=[],a={data:function(){return{style:{backgroundImage:"url('".concat(this.iconRequire(),"')"),backgroundSize:"".concat(this.iconSize,"%")}}},props:{text:{type:String,default:""},icon:{type:String},iconSize:{type:String,default:"100"},onClick:{type:Function,default:function(){return console.log("Button clicked")}}},methods:{iconRequire:function(){return this.icon?n("31e8")("./"+this.icon+".svg"):""}}},o=a,c=(n("4caf"),n("2877")),r=Object(c["a"])(o,s,i,!1,null,null,null);r.options.__file="ButtonComponent.vue";e["a"]=r.exports},e9b0:function(t,e,n){t.exports=n.p+"img/settings.a513bc91.svg"},ea39:function(t,e,n){t.exports=n.p+"img/cards.032979c9.svg"},eef4:function(t,e,n){t.exports=n.p+"img/add.4d3fa0e4.svg"},f687:function(t,e,n){t.exports=n.p+"img/cancel.be5c4586.svg"}}]);
//# sourceMappingURL=chunk-eb2b.a14e1da9.js.map