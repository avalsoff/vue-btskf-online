(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cbb7"],{"43ff":function(t,e,n){"use strict";var o=n("5cf1"),a=n.n(o);a.a},"5afa":function(t,e,n){"use strict";var o=n("e974"),a=n.n(o);a.a},"5cf1":function(t,e,n){},7977:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("HeaderPanel",{attrs:{heading:"Компании"}},[n("ButtonComponent",{attrs:{slot:"left",icon:"menu",iconSize:"70",onClick:t.goToMenu},slot:"left"})],1),n("DialogItems",{attrs:{dialogItems:t.dialogItems}})],1)},a=[],s=(n("cadf"),n("551c"),n("097d"),n("6e8c")),i=n("40f4"),u=n("d724"),c=n("e4c3"),r=n("c775"),l=n("a55d"),d={components:{HeaderPanel:s["a"],InputText:i["a"],SendUIs:u["a"],ButtonComponent:c["a"],DialogItems:r["a"],ModalComponent:l["a"]},data:function(){return{showFilters:!1,currentMessage:"",currentName:"",showForm:!0,dialogItems:[{id:0,heading:"Государственные закупки",status:"open",date:"none",text:"ООО Амур Трейд"},{id:1,heading:"Банкротство",status:"open",date:"none",text:"ОАО Рога и Копыта"},{id:2,heading:"Досудебное урегулирование",status:"close",date:"none",text:"ЗАО Эвалар"}],nextId:3}},methods:{showNewForm:function(){this.showForm=!1},hideNewForm:function(){this.showForm=!0},goToMenu:function(){this.$router.push("menu")},createNewDialog:function(){this.currentName&&(this.dialogItems.unshift({id:this.nextId++,heading:this.currentName,status:"open"}),this.currentMessage="",this.currentName="")}}},f=d,m=(n("5afa"),n("2877")),h=Object(m["a"])(f,o,a,!1,null,null,null);h.options.__file="CompaniesView.vue";e["default"]=h.exports},a55d:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal__overlay",on:{click:function(e){if(e.target!==e.currentTarget)return null;t.$emit("close")}}},[n("section",{staticClass:"modal"},[t._t("default")],2)])},a=[],s={},i=s,u=(n("43ff"),n("2877")),c=Object(u["a"])(i,o,a,!1,null,null,null);c.options.__file="ModalComponent.vue";e["a"]=c.exports},e974:function(t,e,n){}}]);
//# sourceMappingURL=chunk-cbb7.99345c63.js.map