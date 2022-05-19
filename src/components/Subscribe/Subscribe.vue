<template>
    <section class="container__page subscribe">
        <div class="subscribe__comment">
            <img src="../../img/subscribe_ava.jpg" alt="ava">
            <p>
                “Vestibulum quis porttitor dui! Quisque viverra nunc mi, <em>a pulvinar purus condimentum</em>“
            </p>
        </div>
        <div class="subscribe__thank" v-if="isSubscribe">
            <h4>
                Thank you for subscribing to our store.
            </h4>
            <p>
                You will be the first to receive notifications about news and promo codes from our store!
            </p>
        </div>
        <form class="subscribe__form" v-on:submit.prevent="subscribeUser" v-else>
            <h4>
                SUBSCRIBE
            </h4>
            <p>
                FOR OUR NEWLETTER AND PROMOTION
            </p>
            <div class="subscribe__inputs">
                <input 
                    type="email" 
                    placeholder="Enter Your Email" 
                    class="subscribe__input_email" 
                    v-model.lazy.trim="email"
                    required />
                <input type="submit" value="Subscribe" class="subscribe__input_submit" />
            </div>
        </form>
    </section>
</template>

<script>
import store from '@/store'
export default {
    name: "Subscribe",
    data: function() {
        return ({
            email: ''
        })
    },
    computed: {
        isSubscribe: function() {
            return store.getters.GET_SUBSCRIBE;
        }
    }, 
    methods: {
        subscribeUser: function() {
            store.commit("subscribeUser");
        }
    }
}
</script>

<style lang="less" scoped>
    @import "../../style/variables.less";

    .subscribe {
        display: flex;
        justify-content: space-between;
        padding-top: 97px;
        padding-bottom: 156px;
        background: url(../../img/subscribe_bg.png), rgba(244, 244, 244, 0.7);
        background-repeat: no-repeat;
        background-blend-mode: color-dodge;
        background-size: cover;
        align-items: center;

        @media (min-width: @min-mobile-width) and (max-width: @max-tablet-width) {
            flex-direction: column;
            gap: 48px;
        }

        &__comment {
            text-align: center;
            max-width: 360px;

            & img{
                border-radius: 50%;
                margin-bottom: 30px;
            }

            & p {
                font-weight: 400;
                font-size: 20px;
                line-height: 24px;
                text-align: center;
                color: @color-black;
            }
        }

        &__thank {
            max-width: 410px;

            & h4 {
                font-weight: 700;
                font-size: 24px;
                line-height: 29px;
                text-align: center;
                color: @color-pink;
                margin-bottom: 10px;
            }

            & p {
                font-weight: 400;
                font-size: 18px;
                line-height: 30px;
                text-align: center;
                color: @color-black;
            }
        }

        &__form {
            max-width: 360px;

            & h4 {
                font-weight: 700;
                font-size: 24px;
                line-height: 40px;
                text-align: center;
                color: @color-black;
            }

            & p {
                font-weight: 400;
                font-size: 18px;
                line-height: 30px;
                text-align: center;
                color: @color-black;
            }
        }

        &__inputs {
            display: flex;
            margin-top: 32px;
        }

        &__input_email {
            padding: 7px 22px;
            border-bottom-left-radius: 20px;
            border-top-left-radius: 20px;
            border: none;
            background: @color-gray-light;
            flex: 3;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: @color-black;
        }

        &__input_submit {
            padding: 22px 7px;
            border-bottom-right-radius: 20px;
            border-top-right-radius: 20px;
            border: none;
            background: @color-pink;
            color: @color-white;
            flex: 1;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
        }
    }
</style>