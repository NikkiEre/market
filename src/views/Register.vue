<template>
    <section class="auth">
        <Breadcrumbs />
        <div class="container__page container">
            <FormAuth 
                :first_name="first_name"
                :last_name="last_name"
                :isMan="isMan"
                :email="email"
                :password="password"
                :saveLocalStorage="saveLocalStorage"
            />
            <Loyalty />
        </div>
        <Subscribe />
    </section>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs.vue'
import Subscribe from '@/components/Subscribe/Subscribe.vue'
import FormAuth from '@/components/FormAuth/FormAuth.vue'
import Loyalty from '@/components/Loyalty/Loyalty.vue'
import store from '@/store'


export default {
  components: { Breadcrumbs, Subscribe, FormAuth, Loyalty },
    name: "Auth",
    data: function() {
        return ({
            first_name: '',
            last_name: '',
            isMan: '',
            email: '',
            password: ''
        })
    },
    methods: {
        saveLocalStorage: function(userInfo) {
            const userData = {
                userInfo: {
                    first_name: userInfo.first_name,
                    last_name: userInfo.last_name,
                    isMan: userInfo.isMan,
                    email: userInfo.email,
                    password: userInfo.password
                },
                subscribe: true,
                cart: store.getters.GET_CART,
            };
            const stringifyUserData = JSON.stringify(userData);
            localStorage.setItem("userData", stringifyUserData);
        }
    }
}
</script>

<style lang="less" scoped>
    @import "../style/variables.less";

    .container {
        padding-top: 64px;
        padding-bottom: 96px;
        display: flex;
        justify-content: space-between;
        gap: 22px;

        @media (min-width: @min-mobile-width) and (max-width: @max-mobile-width) {
            flex-direction: column;
        }
    }
</style>