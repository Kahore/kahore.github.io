(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b9db4"],{3573:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container table-responsive mt-2 pb-5 overflow-hidden"},[r("div",{staticClass:"row pb-5"},[r("div",{staticClass:"col-md-12"},[r("table",{staticClass:"table table-hover table-sm",attrs:{id:"practisesList"}},[t._m(0),r("tbody",[r("tr",[r("td",{attrs:{colspan:"4"}},[r("button",{staticClass:"btn btn-light",on:{click:function(e){return t.risePracticeModal()}}},[t._v("add practices")])])]),t._l(t.practices,(function(e,s){return r("tr",{key:s},[r("td",[r("a",{staticClass:"dark-link",attrs:{href:""},on:{click:function(r){return r.preventDefault(),t.risePracticeModal(e.id)}}},[t._v(t._s(e.name))])]),r("td",[t._v(t._s(e.city))]),r("td",{staticClass:"d-none d-md-table-cell"},[t._v(t._s(e.email))]),r("td",[t._v(t._s(e.phone))])])}))],2),r("tfoot",[r("tr",[t.isLoading_PractiseList?r("td",{attrs:{colspan:"3"}},[r("i",{staticClass:"fa fa-spinner fa-spin"}),r("span",{staticClass:"ml-2"},[t._v("Loading data...")])]):t._e(),t.isLoading_PractiseList||0!==t.practices.length?t._e():r("td",{attrs:{colspan:"3"}},[t._v("\n              Looks like there is nothing here...\n            ")])])])])])])])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("Practice Name")]),r("th",[t._v("City/Town")]),r("th",{staticClass:"d-none d-md-table-cell"},[t._v("Email")]),r("th",[t._v("Phone number")])])])}],a=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),i=r("d3e3"),c=r("2f62");function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(r,!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var d={name:"DentistPracticesList",computed:l({},Object(c["c"])(["practices","currentUserId","isLoading_PractiseList"])),methods:{risePracticeModal:function(t){"undefined"!==typeof t&&this.$store.dispatch("LOAD_PRACTICE_INFO",t),i["a"].$emit("PRACTICE_MODAL")}},mounted:function(){var t=this.currentUserId;this.$store.dispatch("LOAD_PRACTICES",t)}},p=d,u=r("2877"),b=Object(u["a"])(p,s,n,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-2d0b9db4.b739d0e7.js.map