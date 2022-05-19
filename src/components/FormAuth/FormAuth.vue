<template>
    <form class="form-auth" v-on:submit.prevent="submitAuthForm">
        <div class="form-auth__fields">
            <h5>
                Your Name
            </h5>
            <input type="text" v-model.lazy.trim="form.first_name" placeholder="First Name" required/>
            <input type="text" v-model.lazy.trim="form.last_name" placeholder="Last Name" required/>
        </div>

        <div class="form-auth__gender">
            <label>
                <input name="gender" v-model.lazy.trim="form.isMan" value="true" type="radio" required/>
                Male
            </label>

            <label>
                <input name="gender" v-model.lazy.trim="form.isMan" value="false" type="radio" required/>
                Female
            </label>
        </div>

        <div class="form-auth__fields">
            <h5>
                Login details
            </h5>
            <input type="email" v-model.lazy.trim="form.email" placeholder="Email" required/>
            <input type="password" v-model.lazy.trim="form.password" placeholder="Password" required/>
        
            <p>
                Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase letters
            </p>

        </div>

        <button>
            JOIN NOW &rarr;
        </button>

        <p>
            Do you have an account? <a @click.prevent="moveToLogin">Here you can log in.</a>
        </p>
    </form>
</template>

<script>
export default {
    name: "FormAuth",
    props: [    
        "first_name",
        "last_name",
        "isMan",
        "email",
        "password",
        "saveLocalStorage"
    ],
    data: function() {
        return ({
            form: {
                first_name: this.first_name,
                last_name: this.last_name,
                isMan: this.isMan,
                email: this.email,
                password: this.password
            }
        })
    },
    methods: {
        submitAuthForm: function() {
            this.saveLocalStorage(this.form);
            this.$router.push("/");
        },
        moveToLogin: function() {
            this.$router.push('/login');
        }
    }
}
</script>

<style lang="less" scoped>
    @import "../../style/variables.less";

    .form-auth {
        display: flex;
        flex-direction: column;
        width: 360px;
        gap: 32px;

        @media (min-width: @min-mobile-width) and (max-width: @max-mobile-width) {
            width: 100%;
        }

        &__fields {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        &__gender{
            display: flex;
            gap: 20px;
        }
    }

    label {
        display: flex;
        gap: 10px;
        align-items: center;
    }

    h5 {
        text-align: left;
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;
        color: @color-black;
    }

    input[type="text"],
    input[type="password"],
    input[type="email"] {
        padding: 13px 17px 16px;
        border: 1px solid @color-gray;
        font-weight: 300;
        font-size: 13px;
        line-height: 16px;
        color: @color-black;
    }

    input[type="text"]::placeholder,
    input[type="password"]::placeholder,
    input[type="email"]::placeholder {
        color: @color-gray;
    }

    p {
        font-weight: 300;
        font-size: 13px;
        line-height: 16px;
        color: @color-gray;

        & a {
            color: @color-pink;
            transition: all 0.5s;
            cursor: pointer;

            &:hover {
                color: @color-gray;
            }

            &:active {
                opacity: 0.5;
            }
        }
    }

    button {
        padding: 16px 29px;
        color: @color-white;
        background-color: @color-pink;
        border: none;
        width: fit-content;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        cursor: pointer;
        transition: all 0.5s;
        border: 1px solid @color-pink;

        &:hover {
            background-color: @color-white;
            color: @color-pink;
        }

        &:active {
            opacity: 0.5;
        }
    }
</style>