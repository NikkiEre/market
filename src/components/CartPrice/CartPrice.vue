<template>
    <div class="cart-price">
        <p>SUB TOTAL <span>${{cartTotalPrice}}</span></p>
        <p>GRAND TOTAL <span>${{cartTotalPrice}}</span></p>
        <hr>
        <button>
            Proceed To Checkout
        </button>
    </div>
</template>

<script>
export default {
    name: "CartPrice",
    props: ["cartTotalPrice"]
}
</script>

<style lang="less" scoped>
    @import "../../style/variables.less";

    .cart-price {
        padding: 42px 44px;
        background: @color-gray-pale;
        text-align: right;
        display: flex;
        flex-direction: column;

        @media (min-width: @max-mobile-width) and (max-width: @max-tablet-width) {
            flex: 1;
        }

        & p {
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: @color-dark-gray;

            &:first-child {
                font-weight: 400;
                font-size: 11px;
                line-height: 13px;
                color: @color-dark-gray;
                margin-bottom: 12px;
            }

            &:not(:first-child) span {
                color: @color-pink;
            }
        }

        & hr{
            margin: 18px 0;
            background: @color-gray;
        }

        & button{
            padding: 15px 42px;
            font-weight: 300;
            font-size: 16px;
            line-height: 19px;
            background: @color-pink;
            color: @color-white;
            border: none;
        }

    }
</style>