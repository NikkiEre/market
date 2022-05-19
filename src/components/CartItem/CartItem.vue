<template>
    <article class="cart-item">
        <a class="cart-item__link_img">
            <img :src="item.image" alt="item" />
        </a>
        <div class="cart-item__details">
            <h4>
                {{ item.title }}
            </h4>

            <div class="cart-item__params">
                <p>Price: <span>{{ item.price }}</span></p>
                <p>Color: <span>{{ item.color ? item.color : 'standart' }}</span></p>
                <p>Size: <span>{{ item.size ? item.size : 'standart' }}</span></p>
                <p>Quantity: <input type="number" :value="item.count" @change="changeCart" min="1" /></p>
            </div>
        </div>
        <div class="cart-item__button">
            <button @click="removeItem(item)">
                &#10006;
            </button>
        </div>
    </article>
</template>

<script>
export default {
    name: "CartItem",
    props: ["item", "removeItem", "changeCartStore"],
    methods: {
        changeCart: function(event) {
            this.changeCartStore(this.item, event.target.value);
        }
    }
}
</script>

<style lang="less" scoped>
    @import "../../style/variables.less";

    .cart-item {
        display: flex;
        box-shadow: 17px 19px 24px rgba(0, 0, 0, 0.13);
        gap: 31px;
        max-height: 306px;
        padding: 22px 0;

        @media (min-width: @min-mobile-width) and (max-width: @max-mobile-width) {
            gap: 10px;
        }
    
        &__link {

            &_img {
                display: inline-block;
                max-width: 262px;
                min-width: 143px;
                text-align: center;

                & img {
                    max-width: 100%;
                    max-height: 100%;
                }
            }
        }

        &__details {
            padding: 22px 0;
            display: flex;
            flex-direction: column;
            row-gap: 42px;

            @media (min-width: @min-mobile-width) and (max-width: @max-mobile-width) {
                padding: 13px;
                gap: 20px;
            }
        }

        &__params {
            display: flex;
            flex-direction: column;
            row-gap: 6px;

            & p span {
                text-transform: uppercase;
            }
        }

        & h4 {
            font-family: 'Lato';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            color: @color-black;
            text-transform: uppercase;

            @media (min-width: @min-mobile-width) and (max-width: @max-mobile-width) {
                font-size: 16px;
                line-height: 19px;
            }

        }

        & p {
            font-family: 'Lato';
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            line-height: 26px;
            color: @color-gray;

            @media (min-width: @min-mobile-width) and (max-width: @max-mobile-width) {
                font-size: 14px;
                line-height: 16px;
            }

            & input{
                padding: 2px 7px;
                width: 44px;
                box-sizing: border-box;
                text-align: center;
                border: 1px solid @color-gray-pale;

                @media (min-width: @min-mobile-width) and (max-width: @max-mobile-width) {
                    font-size: 10px;
                    line-height: 12px;
                }

                &:focus {
                    outline-color: @color-pink;
                }
            }
        }

        &__button {
            padding: 22px 28px;

            @media (min-width: @min-mobile-width) and (max-width: @max-mobile-width) {
                padding: 13px;
            }

            & button{
                background: transparent;
                border: none;
                cursor: pointer;
                font-size: 20px;
                transition: all 0.5s;

                &:hover {
                    color: @color-pink;
                }

                &:active {
                    opacity: 0.5;
                }
            }
        }
    }
</style>