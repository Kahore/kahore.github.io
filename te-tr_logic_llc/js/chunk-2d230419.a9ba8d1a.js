(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d230419"],{ec05:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal modal-bg",class:{"modal-bg--show":t.isActive}},[a("div",{staticClass:"modal-dialog modal-dialog-centered row pt-5"},[a("div",{staticClass:"modal-content p-2"},[a("div",{staticClass:"modal-header"},[t._v("\n        Внимание!\n      ")]),a("p",[t._v("Вы уверены что хотите удалить статью?")]),a("div",{staticClass:"form-block pt-2"},[a("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.deleteConfirm()}}},[t._v("Да")]),a("button",{staticClass:"btn btn-danger float-right",on:{click:function(e){return t.toogleState()}}},[t._v("Отмена")])])])])])},n=[],c=a("d225"),o=a("b0b4"),s=a("308d"),l=a("6bb5"),r=a("4e2b"),d=a("9ab4"),u=a("60a3"),b=a("b143"),v=a("7eb1"),f=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(s["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.isActive=!1,t.articleId="",t}return Object(r["a"])(e,t),Object(o["a"])(e,[{key:"mounted",value:function(){var t=this;b["a"].$on("MODAL_DELETE",(function(e){t.articleId=e,t.toogleState()}))}},{key:"deleteConfirm",value:function(){v["a"].deleteArticle(this.articleId),this.toogleState()}},{key:"toogleState",value:function(){this.isActive=!this.isActive}}]),e}(u["c"]);f=Object(d["a"])([u["a"]],f);var h=f,m=h,p=a("2877"),g=Object(p["a"])(m,i,n,!1,null,"4d29ccf8",null);e["default"]=g.exports}}]);
//# sourceMappingURL=chunk-2d230419.a9ba8d1a.js.map