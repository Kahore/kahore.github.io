(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-239ac2ff"],{"32d2":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._l(t.commentsHistoryFile,(function(e,n){return s("ul",{key:n},[""!==e.fileName?[s("li",[s("div",["Dentist"===e.from?[s("img",{staticClass:"uploaded-img",attrs:{src:i("b9f7"),alt:"dentist"}})]:"Lab Staffs"===e.from?[s("img",{staticClass:"uploaded-img",attrs:{src:i("8ae5"),alt:"labStaff"}})]:[s("img",{staticClass:"uploaded-img",attrs:{src:i("4a6c"),alt:"clinicians"}})],s("a",{attrs:{href:""}},[t._v(" "+t._s(e.fileName)+" ")])],2)])]:t._e()],2)})),t.isLoading_FilesList?[s("i",{staticClass:"fa fa-spinner fa-spin"}),s("span",{staticClass:"ml-2"},[t._v("Loading data...")])]:t._e(),t.isLoading_FilesList||0!==t.commentsHistoryFile.length?t._e():[s("p",[t._v("Oh, looks like there is nothing here")])]],2)},n=[],r=(i("8e6e"),i("ac6a"),i("456d"),i("bd86")),a=i("2f62"),o=i("d3e3");function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(i,!0).forEach((function(e){Object(r["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var f={name:"DentistCommentsFilesList",computed:l({},Object(a["c"])(["commentsHistoryFile","isLoading_FilesList"])),methods:{filterFile:function(t){this.$store.dispatch("LOAD_FILES",{orderId:this.$route.params.orderId,from:t})}},mounted:function(){var t=this;o["a"].$on("FILTER_FILES",(function(e){t.filterFile(e)})),this.filterFile("All")}},u=f,p=(i("5b1c"),i("2877")),d=Object(p["a"])(u,s,n,!1,null,"3bb2162c",null);e["default"]=d.exports},"4a6c":function(t,e,i){t.exports=i.p+"img/clinicians.b75bc0db.svg"},"5b1c":function(t,e,i){"use strict";var s=i("ed7b"),n=i.n(s);n.a},"8ae5":function(t,e,i){t.exports=i.p+"img/labStaff.f4e4941e.svg"},b9f7:function(t,e,i){t.exports=i.p+"img/dentist.84da5346.svg"},ed7b:function(t,e,i){}}]);
//# sourceMappingURL=chunk-239ac2ff.0627e144.js.map