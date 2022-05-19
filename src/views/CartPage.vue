<template>
    <section class="cartpage">
        <Breadcrumbs />
        <div class="container__page cartpage__cart">
            <CartItemList 
                :cart="cart"
                :removeItem="removeItem"
                :clearCart="clearCart"
                :moveToStartpage="moveToStartpage"
                :changeCartStore="changeCartStore"
            />
            <div class="cartpage__details">
                <FormOrder 
                    :address="address"
                    :saveShippingAddress="saveShippingAddress"
                />
                <CartPrice 
                    :cartTotalPrice="cartTotalPrice"
                />
            </div>
        </div>
    </section>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs.vue'
import CartItemList from '@/components/CartItemList/CartItemList.vue'
import FormOrder from '@/components/FormOrder/FormOrder.vue'
import CartPrice from '@/components/CartPrice/CartPrice.vue'
import store from '@/store'


export default {
    components: { 
        Breadcrumbs,
        CartItemList,
        FormOrder,
        CartPrice
    },
    name: "CartPage",
    data: function() {
        return ({
            address: {
                city: '',
                state: '',
                zip: ''
            }
        })
    },
    computed: {
        cart() {
            return store.getters.GET_CART;
        },
        cartTotalPrice() {
            let totalPrice = 0;
            this.cart.forEach((item) => {
                totalPrice += item.count * item.price
            });
            return totalPrice; 
        }
    },
    methods: {
        removeItem(item) {
            store.dispatch({type: "actionChangeCart", dataDispatch: {item: item, typeAction: "removeItemFromCart"}});
        },
        clearCart() {
            store.dispatch({type: "actionChangeCart", dataDispatch: {typeAction: "clearCart"}});
        },
        moveToStartpage() {
            this.$router.push("/");
        },
        changeCartStore: function(item, value) {
            store.dispatch({type: "actionChangeCart", dataDispatch: {item: {...item, count: Number(value) > 0 ? Number(value) : 1}, typeAction: "changeCart"}});
        },
        saveShippingAddress: function() {
            store.dispatch({type: "actionChangeCart", dataDispatch: {address: this.address, typeAction: "saveShippingAddress"}});
        },
    },
    created: function () {
        this.address = store.getters.GET_SHIPADDRESS;
    }
}
</script>

<style lang="less" scoped>
    @import "../style/variables.less";

    .cartpage__cart {
        padding-top: 96px;
        padding-bottom: 96px;
        display: flex;
        justify-content: space-between;

        @media (min-width: @min-mobile-width) and (max-width: @max-tablet-width) {
            flex-direction: column;
        }
    }

    .cartpage__details{
        width: 360px;
        display: flex;
        flex-direction: column;
        gap: 57px;

        @media (min-width: @min-mobile-width) and (max-width: @max-tablet-width) {
            width: 100%;
            gap: 20px;
        }

        @media (min-width: @max-mobile-width) and (max-width: @max-tablet-width) {
            flex-direction: row;
        }
    }
</style>