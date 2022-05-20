"use strict";(self["webpackChunkmarket"]=self["webpackChunkmarket"]||[]).push([[443],{7809:(t,e,a)=>{a.r(e),a.d(e,{default:()=>G});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"cartpage"},[a("Breadcrumbs"),a("div",{staticClass:"container__page cartpage__cart"},[a("CartItemList",{attrs:{cart:t.cart,removeItem:t.removeItem,clearCart:t.clearCart,moveToStartpage:t.moveToStartpage,changeCartStore:t.changeCartStore}}),a("div",{staticClass:"cartpage__details"},[a("FormOrder",{attrs:{address:t.address,saveShippingAddress:t.saveShippingAddress}}),a("CartPrice",{attrs:{cartTotalPrice:t.cartTotalPrice}})],1)],1)],1)},s=[],i=a(3019),n=(a(9554),a(1539),a(4747),a(9653),a(7879)),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cart-item-list"},[a("div",{staticClass:"cart-item-list__list"},t._l(t.cart,(function(e){return a("CartItem",{key:e.id+e.color+e.size,attrs:{item:e,removeItem:t.removeItem,changeCartStore:t.changeCartStore}})})),1),a("div",{staticClass:"cart-item-list__controls"},[a("button",{on:{click:t.clearCart}},[t._v(" CLEAR SHOPPING CART ")]),a("button",{on:{click:t.moveToStartpage}},[t._v(" CONTINUE SHOPPING ")])])])},o=[],p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"cart-item"},[a("a",{staticClass:"cart-item__link_img"},[a("img",{attrs:{src:t.item.image,alt:"item"}})]),a("div",{staticClass:"cart-item__details"},[a("h4",[t._v(" "+t._s(t.item.title)+" ")]),a("div",{staticClass:"cart-item__params"},[a("p",[t._v("Price: "),a("span",[t._v(t._s(t.item.price))])]),a("p",[t._v("Color: "),a("span",[t._v(t._s(t.item.color?t.item.color:"standart"))])]),a("p",[t._v("Size: "),a("span",[t._v(t._s(t.item.size?t.item.size:"standart"))])]),a("p",[t._v("Quantity: "),a("input",{attrs:{type:"number",min:"1"},domProps:{value:t.item.count},on:{change:t.changeCart}})])])]),a("div",{staticClass:"cart-item__button"},[a("button",{on:{click:function(e){return t.removeItem(t.item)}}},[t._v(" ✖ ")])])])},d=[];const m={name:"CartItem",props:["item","removeItem","changeCartStore"],methods:{changeCart:function(t){this.changeCartStore(this.item,t.target.value)}}},l=m;var u=a(1001),v=(0,u.Z)(l,p,d,!1,null,"71f4fa20",null);const h=v.exports,g={components:{CartItem:h},name:"CartItemList",props:["cart","removeItem","clearCart","moveToStartpage","changeCartStore"]},C=g;var _=(0,u.Z)(C,c,o,!1,null,"26b912d6",null);const f=_.exports;var A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"form-order",on:{submit:function(e){return e.preventDefault(),t.saveShippingAddress.apply(null,arguments)}}},[a("h5",[t._v(" SHIPPING ADDRESS ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.shippingAddress.city,expression:"shippingAddress.city"}],attrs:{type:"text",placeholder:"City",required:""},domProps:{value:t.shippingAddress.city},on:{input:function(e){e.target.composing||t.$set(t.shippingAddress,"city",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.shippingAddress.state,expression:"shippingAddress.state"}],attrs:{type:"text",placeholder:"State",required:""},domProps:{value:t.shippingAddress.state},on:{input:function(e){e.target.composing||t.$set(t.shippingAddress,"state",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.shippingAddress.zip,expression:"shippingAddress.zip"}],attrs:{type:"number",placeholder:"Postcode / Zip",required:""},domProps:{value:t.shippingAddress.zip},on:{input:function(e){e.target.composing||t.$set(t.shippingAddress,"zip",e.target.value)}}}),a("input",{attrs:{type:"submit",value:"GET A QUOTE"}})])},S=[];const P={name:"FormOrder",props:["address","saveShippingAddress"],data:function(){return{shippingAddress:this.address}}},T=P;var y=(0,u.Z)(T,A,S,!1,null,"50279223",null);const I=y.exports;var b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cart-price"},[a("p",[t._v("SUB TOTAL "),a("span",[t._v("$"+t._s(t.cartTotalPrice))])]),a("p",[t._v("GRAND TOTAL "),a("span",[t._v("$"+t._s(t.cartTotalPrice))])]),a("hr"),a("button",[t._v(" Proceed To Checkout ")])])},Z=[];const E={name:"CartPrice",props:["cartTotalPrice"]},k=E;var N=(0,u.Z)(k,b,Z,!1,null,"6ecd7283",null);const $=N.exports;var x=a(615);const D={components:{Breadcrumbs:n.Z,CartItemList:f,FormOrder:I,CartPrice:$},name:"CartPage",data:function(){return{address:{city:"",state:"",zip:""}}},computed:{cart:function(){return x.Z.getters.GET_CART},cartTotalPrice:function(){var t=0;return this.cart.forEach((function(e){t+=e.count*e.price})),t}},methods:{removeItem:function(t){x.Z.dispatch({type:"actionChangeCart",dataDispatch:{item:t,typeAction:"removeItemFromCart"}})},clearCart:function(){x.Z.dispatch({type:"actionChangeCart",dataDispatch:{typeAction:"clearCart"}})},moveToStartpage:function(){this.$router.push("/")},changeCartStore:function(t,e){x.Z.dispatch({type:"actionChangeCart",dataDispatch:{item:(0,i.Z)((0,i.Z)({},t),{},{count:Number(e)>0?Number(e):1}),typeAction:"changeCart"}})},saveShippingAddress:function(){x.Z.dispatch({type:"actionChangeCart",dataDispatch:{address:this.address,typeAction:"saveShippingAddress"}})}},created:function(){this.address=x.Z.getters.GET_SHIPADDRESS}},z=D;var O=(0,u.Z)(z,r,s,!1,null,"0438ea0e",null);const G=O.exports}}]);
//# sourceMappingURL=about.79c79334.js.map