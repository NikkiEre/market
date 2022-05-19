<template>
    <div class="cart-item-list">
        <div class="cart-item-list__list">
            <CartItem
                v-for ="item in cart"
                :item="item"
                :removeItem="removeItem"
                :key = item.id+item.color+item.size
                :changeCartStore="changeCartStore"
            /> 
        </div>
        <div class="cart-item-list__controls">
            <button @click="clearCart">
                CLEAR SHOPPING CART
            </button>

            <button @click="moveToStartpage">
                CONTINUE SHOPPING
            </button>
        </div>
    </div>
</template>

<script>
import CartItem from '../CartItem/CartItem.vue'
export default {
  components: { CartItem },
    name: "CartItemList",
    props: ["cart", "removeItem", "clearCart", "moveToStartpage", "changeCartStore"],
}
</script>

<style lang="less" scoped>
    @import "../../style/variables.less";

    .cart-item-list {
        width: 652px;

        @media (min-width: @min-mobile-width) and (max-width: @max-tablet-width) {
            width: fit-content;
            align-self: center;
        }

        &__list {
            display: flex;
            flex-direction: column;
            gap: 40px;

            @media (min-width: @min-mobile-width) and (max-width: @max-tablet-width) {
                width: fit-content;
                align-self: center;
            }
        }

        &__controls {
            display: flex;
            justify-content: space-between;
            padding: 72px 0 32px;

            @media (min-width: @min-mobile-width) and (max-width: @max-tablet-width) {
                gap: 10px;
            }

            button {
                padding: 17px 40px;
                font-weight: 300;
                font-size: 14px;
                line-height: 17px;
                color: @color-black;
                background: transparent;
                border: 1px solid @color-gray;
                transition: all 0.5s;
                cursor: pointer;

                @media (min-width: @min-mobile-width) and (max-width: @max-tablet-width) {
                    font-size: 14px;
                    line-height: 16px;
                    padding: 9px;
                }

                &:hover {
                    color: @color-pink;
                    border-color: @color-pink;
                }
            }
        }
    }
</style>