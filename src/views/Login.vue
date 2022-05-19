<template>
    <section class="container__page login">
        <h1>
            Login
        </h1>
        <form class="login__form">
            <input type="email" />
            <input type="password" />
            <input type="submit" value="Submit" />
            <p>
                Don't have an account? <a @click.prevent="moveToReg">Here you can register.</a>
            </p>
        </form>
    </section>
</template>

<script>
export default {
    name: "Login",
    methods: {
        moveToReg: function() {
            this.$router.push('/register');
        }
    }

}
</script>

<style lang="less" scoped>
    @import "../style/variables.less";

    .login {
        height: 100vh;
        background: @color-pink-pale;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h1 {
            font-family: 'Lato';
            font-style: normal;
            font-weight: 900;
            font-size: 48px;
            line-height: 58px;
            color: @color-black;
            margin-bottom: 15px;
        }

        &__form {
            display: flex;
            flex-direction: column;

            & input {
                &[type="email"],
                &[type="password"] {
                    padding: 13px 17px 16px;
                    border: 1px solid @color-gray;
                    font-family: 'Lato';
                    font-style: normal;
                    font-weight: 300;
                    font-size: 13px;
                    line-height: 16px;
                    color: @color-black;
                    margin-bottom: 30px;
                }

                &[type="submit"] {
                    border: 1px solid @color-pink;
                    font-family: 'Lato';
                    font-style: normal;
                    font-weight: 300;
                    font-size: 16px;
                    line-height: 20px;
                    color: @color-white;
                    background: @color-pink;
                    width: fit-content;
                    padding: 10px 35px;
                    align-self: center;
                    cursor: pointer;
                    transition: all 0.5s;

                    &:hover {
                        background: @color-white;
                        color: @color-pink;
                    }

                    &:active {
                        opacity: 0.5;
                    }
                }

            }
        }
        p {
            margin-top: 20px;
            font-family: 'Lato';
            font-style: normal;
            font-weight: 300;
            font-size: 13px;
            line-height: 16px;
            color: @color-gray;

            & a {
                color: @color-pink;
                transition: all 0.5s;
                cursor: pointer;

                &:hover {
                    color: @color-white;
                }

                &:active {
                    opacity: 0.5;
                }
            }
        }
    }
</style>