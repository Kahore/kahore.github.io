(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3c21"],{"0418":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-sm navbar-dark bg-dark",attrs:{role:"navigation"}},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"navbar-brand mr-auto",attrs:{to:"/"}},[t._v("Dentist Portal")]),a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarTop","aria-controls":"navbarTop","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:t.toggleNavbar}},[a("span",{staticClass:"navbar-toggler-icon"})]),a("div",{staticClass:" collapse navbar-collapse",class:{show:t.isNavOpen},attrs:{id:"navbarTop"}},["Dentist"===t.userType?a("NavDentist",{attrs:{isOpen:t.isNavOpen}}):t._e(),"Lab"===t.userType?a("NavLab",{attrs:{isOpen:t.isNavOpen}}):t._e(),"Clinician"===t.userType?a("NavClinician",{attrs:{isOpen:t.isNavOpen}}):t._e(),"Admin"===t.userType?a("NavAdmin",{attrs:{isOpen:t.isNavOpen}}):t._e(),""===t.userType?a("div",{staticClass:"mr-auto"}):t._e(),a("ul",{staticClass:"nav navbar-nav"},[t.isLoggedIn?t._e():a("router-link",{staticClass:"nav-item",attrs:{to:"/login",tag:"li","active-class":"active"}},[a("a",{staticClass:"nav-link",on:{click:function(e){return t.loginModalCall()}}},[t._v("Login")])]),t.isLoggedIn?a("a",{staticClass:"nav-link",attrs:{href:""},on:{click:t.logout}},[t._v("Logout ")]):t._e(),t.isLoggedIn?t._e():a("router-link",{staticClass:"nav-item",attrs:{to:"/register",tag:"li","active-class":"active"}},[a("a",{staticClass:"nav-link",on:{click:function(e){return t.registerModalCall()}}},[t._v("Register")])])],1)],1)],1)])},r=[],i=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),s=a("2f62"),o=a("8aa5"),c=a.n(o),l=a("d3e3");function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function v(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(a,!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var p={name:"navHeader",components:{NavDentist:function(){return a.e("chunk-2d22fcc5").then(a.bind(null,"ea0c"))},NavLab:function(){return a.e("chunk-2d238451").then(a.bind(null,"ff50"))},NavClinician:function(){return a.e("chunk-2d0af0d9").then(a.bind(null,"0d4c"))},NavAdmin:function(){return a.e("chunk-2d21e6c9").then(a.bind(null,"d601"))}},data:function(){return{isNavOpen:!1}},computed:v({},Object(s["c"])(["isLoggedIn","currentUser"]),{userType:function(){return this.isLoggedIn?this.currentUser.type:""},userEmail:function(){return this.isLoggedIn?this.currentUser.email:""}}),methods:{logout:function(){var t=this;c.a.auth().signOut().then((function(){t.$router.go("/"),t.$store.commit("AUTH_STATUS_CHANGE"),t.$store.dispatch("MUTATE_USER_TYPE",""),t.$store.commit("LOAD_USER",{}),localStorage.removeItem("userInfo")}))},toggleNavbar:function(){this.isNavOpen=!this.isNavOpen},loginModalCall:function(){l["a"].$emit("LOGIN_MODAL")},registerModalCall:function(){l["a"].$emit("REGISTER_MODAL")}},created:function(){if(null!==c.a.auth().currentUser){var t=c.a.auth().currentUser.uid;this.$store.dispatch("LOAD_USER",t),this.$store.commit("AUTH_STATUS_CHANGE")}}},d=p,g=a("2877"),b=Object(g["a"])(d,n,r,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-2d0a3c21.b0d54199.js.map