(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-135267ac"],{"2e08":function(t,e,n){var i=n("9def"),s=n("9744"),a=n("be13");t.exports=function(t,e,n,r){var o=String(a(t)),c=o.length,l=void 0===n?" ":String(n),d=i(e);if(d<=c||""==l)return o;var u=d-c,f=s.call(l,Math.ceil(u/l.length));return f.length>u&&(f=f.slice(0,u)),r?f+o:o+f}},"7f7f":function(t,e,n){var i=n("86cc").f,s=Function.prototype,a=/^\s*function ([^ (]*)/,r="name";r in s||n("9e1e")&&i(s,r,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},9744:function(t,e,n){"use strict";var i=n("4588"),s=n("be13");t.exports=function(t){var e=String(s(this)),n="",a=i(t);if(a<0||a==1/0)throw RangeError("Count can't be negative");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(n+=e);return n}},"97e0":function(t,e,n){},ce9a:function(t,e,n){"use strict";var i=n("97e0"),s=n.n(i);s.a},f576:function(t,e,n){"use strict";var i=n("5ca1"),s=n("2e08"),a=n("a25f"),r=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(a);i(i.P+i.F*r,"String",{padStart:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},fd1f:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"overflow-hidden"},[n("div",{staticClass:"wrap-comments"},[t.isActive?t._e():n("button",{class:{"comments comments-init btn btn-secondary":!t.isActive,"offset-btn--right":t.isInternal},on:{click:function(e){return t.toggleModal()}}},[t.isInternal?[t._v("\n        Open internal\n      ")]:[t._v("\n        Open comments\n      ")]],2),n("div",{staticClass:"modal fade right show modal-scrolling",class:{comments:t.isActive}},[n("div",{staticClass:"modal-dialog modal-side modal-bottom-right",class:{"offset-modal--right":t.isInternal}},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title text-center"},[t._v("Comments")]),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return t.toggleModal()}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),n("commentsHistory",{attrs:{commentsHistory:t.commentsHistory}}),"edit"===t.acl?n("section",[n("div",{staticClass:"form-group ml-2 mr-2"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"w-100",attrs:{placeholder:"New message"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),n("div",{staticClass:"form-group ml-2 mr-2"},[n("input",{ref:"fileupload",staticClass:"btn-outline-light btn",attrs:{type:"file",placeholder:"attach files"},on:{change:t.fileLoader}})]),n("div",{staticClass:"form-group ml-2 mr-2"},[n("button",{staticClass:"btn btn-success w-100",on:{click:function(e){return e.preventDefault(),t.sendMessage(e)}}},[t._v("\n              Send\n              ")])])]):t._e()],1)])])])])},s=[];n("7f7f"),n("f576");function a(){var t=new Date,e=String(t.getDate()).padStart(2,"0"),n=String(t.getMonth()+1).padStart(2,"0"),i=t.getFullYear(),s=String(t.getHours()).padStart(2,"0"),a=String(t.getMinutes()).padStart(2,"0"),r=String(t.getSeconds()).padStart(2,"0");return t=i+"-"+n+"-"+e+" "+s+":"+a+":"+r,t}var r={name:"DentistCommentsNew",props:{isInternal:{type:Boolean,required:!1,default:!1},acl:{type:String,required:!1,default:"edit"}},computed:{commentsHistory:function(){return this.isInternal?this.$store.getters.commentsHistoryLabClinicals:this.$store.getters.commentsHistoryDentistLab},mode:function(){var t=this.isInternal?"lab":"dentist";return t}},components:{commentsHistory:function(){return n.e("chunk-a9f5e99e").then(n.bind(null,"0fcf"))}},data:function(){return{isActive:!1,text:"",fileName:""}},methods:{fileLoader:function(t){var e=t.target.files||t.dataTransfer.files;e.length&&(this.fileName=e[0].name)},sendMessage:function(){var t=this._defSenderType(),e=this._defTo(t),n={orderId:this.$route.params.orderId,from:t,to:e,text:this.text,fileName:this.fileName,sendAt:a()},i=this.mode,s={data:n,mode:i};this.$store.dispatch("ADD_COMMENT",s),this._clearComment()},_defSenderType:function(){return this.$store.getters.currentUser.type},_defTo:function(t){var e;return e="Dentist"===t?"Lab Staffs":"Clinical"===t?"Lab Staffs":this.isInternal?"Clinical":"Dentist",e},_clearComment:function(){this.text="";var t=this.$refs.fileupload;t.type="text",t.type="file"},toggleModal:function(){this.isActive=!this.isActive}},created:function(){var t={id:this.$route.params.orderId,mode:this.mode};this.$store.dispatch("LOAD_HISTORY",t)},mounted:function(){this.toggleModal()}},o=r,c=(n("ce9a"),n("2877")),l=Object(c["a"])(o,i,s,!1,null,"47b883f2",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-135267ac.0aa385ba.js.map