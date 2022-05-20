"use strict";(self["webpackChunkmarket"]=self["webpackChunkmarket"]||[]).push([[593],{1593:(e,a,t)=>{t.r(a),t.d(a,{default:()=>x});var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"auth"},[t("Breadcrumbs"),t("div",{staticClass:"container__page container"},[t("FormAuth",{attrs:{first_name:e.first_name,last_name:e.last_name,isMan:e.isMan,email:e.email,password:e.password,saveLocalStorage:e.saveLocalStorage}}),t("Loyalty")],1),t("Subscribe")],1)},s=[],o=(t(8862),t(7879)),n=t(9003),i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("form",{staticClass:"form-auth",on:{submit:function(a){return a.preventDefault(),e.submitAuthForm.apply(null,arguments)}}},[t("div",{staticClass:"form-auth__fields"},[t("h5",[e._v(" Your Name ")]),t("input",{directives:[{name:"model",rawName:"v-model.lazy.trim",value:e.form.first_name,expression:"form.first_name",modifiers:{lazy:!0,trim:!0}}],attrs:{type:"text",placeholder:"First Name",required:""},domProps:{value:e.form.first_name},on:{change:function(a){e.$set(e.form,"first_name",a.target.value.trim())},blur:function(a){return e.$forceUpdate()}}}),t("input",{directives:[{name:"model",rawName:"v-model.lazy.trim",value:e.form.last_name,expression:"form.last_name",modifiers:{lazy:!0,trim:!0}}],attrs:{type:"text",placeholder:"Last Name",required:""},domProps:{value:e.form.last_name},on:{change:function(a){e.$set(e.form,"last_name",a.target.value.trim())},blur:function(a){return e.$forceUpdate()}}})]),t("div",{staticClass:"form-auth__gender"},[t("label",[t("input",{directives:[{name:"model",rawName:"v-model.lazy.trim",value:e.form.isMan,expression:"form.isMan",modifiers:{lazy:!0,trim:!0}}],attrs:{name:"gender",value:"true",type:"radio",required:""},domProps:{checked:e._q(e.form.isMan,"true")},on:{change:function(a){return e.$set(e.form,"isMan","true")}}}),e._v(" Male ")]),t("label",[t("input",{directives:[{name:"model",rawName:"v-model.lazy.trim",value:e.form.isMan,expression:"form.isMan",modifiers:{lazy:!0,trim:!0}}],attrs:{name:"gender",value:"false",type:"radio",required:""},domProps:{checked:e._q(e.form.isMan,"false")},on:{change:function(a){return e.$set(e.form,"isMan","false")}}}),e._v(" Female ")])]),t("div",{staticClass:"form-auth__fields"},[t("h5",[e._v(" Login details ")]),t("input",{directives:[{name:"model",rawName:"v-model.lazy.trim",value:e.form.email,expression:"form.email",modifiers:{lazy:!0,trim:!0}}],attrs:{type:"email",placeholder:"Email",required:""},domProps:{value:e.form.email},on:{change:function(a){e.$set(e.form,"email",a.target.value.trim())},blur:function(a){return e.$forceUpdate()}}}),t("input",{directives:[{name:"model",rawName:"v-model.lazy.trim",value:e.form.password,expression:"form.password",modifiers:{lazy:!0,trim:!0}}],attrs:{type:"password",placeholder:"Password",required:""},domProps:{value:e.form.password},on:{change:function(a){e.$set(e.form,"password",a.target.value.trim())},blur:function(a){return e.$forceUpdate()}}}),t("p",[e._v(" Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase letters ")])]),t("button",[e._v(" JOIN NOW → ")]),t("p",[e._v(" Do you have an account? "),t("a",{on:{click:function(a){return a.preventDefault(),e.moveToLogin.apply(null,arguments)}}},[e._v("Here you can log in.")])])])},l=[];const m={name:"FormAuth",props:["first_name","last_name","isMan","email","password","saveLocalStorage"],data:function(){return{form:{first_name:this.first_name,last_name:this.last_name,isMan:this.isMan,email:this.email,password:this.password}}},methods:{submitAuthForm:function(){this.saveLocalStorage(this.form),this.$router.push("/")},moveToLogin:function(){this.$router.push("/login")}}},u=m;var c=t(1001),f=(0,c.Z)(u,i,l,!1,null,"5540e4b9",null);const d=f.exports;var p=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("article",{staticClass:"loyalty"},[r("h3",[e._v(" LOYALTY HAS ITS PERKS ")]),r("p",[e._v(" Get in on the loyalty program where you can earn points and unlock serious perks. Starting with these as soon as you join: ")]),r("ul",{staticClass:"loyalty__list"},e._l(e.loyalty_items,(function(a){return r("li",{key:a,staticClass:"loyalty__item"},[r("img",{attrs:{src:t(5328),alt:"loyalty"}}),r("p",[e._v(" "+e._s(a)+" ")])])})),0)])},v=[];const _={name:"Loyalty",data:function(){return{loyalty_items:["15% off welcome offer","Free shipping, returns and exchanges on all orders","$10 off a purchase on your birthday","Early access to products","Exclusive offers & rewards"]}}},h=_;var y=(0,c.Z)(h,p,v,!1,null,"3e9b10bd",null);const g=y.exports;var w=t(615);const b={components:{Breadcrumbs:o.Z,Subscribe:n.Z,FormAuth:d,Loyalty:g},name:"Auth",data:function(){return{first_name:"",last_name:"",isMan:"",email:"",password:""}},methods:{saveLocalStorage:function(e){var a={userInfo:{first_name:e.first_name,last_name:e.last_name,isMan:e.isMan,email:e.email,password:e.password},subscribe:!0,cart:w.Z.getters.GET_CART},t=JSON.stringify(a);localStorage.setItem("userData",t)}}},M=b;var $=(0,c.Z)(M,r,s,!1,null,"43f466e4",null);const x=$.exports},5328:(e,a,t)=>{e.exports=t.p+"img/loyalty.823c00b1.svg"}}]);
//# sourceMappingURL=593.1a0b2971.js.map