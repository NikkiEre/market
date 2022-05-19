<template>
    <form class="form-order" @submit.prevent="saveShippingAddress">
        <h5>
            SHIPPING ADDRESS
        </h5>
        <input type="text" placeholder="City" v-model="shippingAddress.city" required/>
        <input type="text" placeholder="State" v-model="shippingAddress.state" required/>
        <input type="number" placeholder="Postcode / Zip" v-model="shippingAddress.zip" required/>
        <input type="submit" value="GET A QUOTE" />
    </form>
</template>

<script>
export default {
    name: "FormOrder",
    props: ["address", "saveShippingAddress"],
    data: function() {
        return ({
            shippingAddress: this.address
        })
    }
}
</script>

<style lang="less" scoped>
    @import "../../style/variables.less";

    .form-order {
        display: flex;
        flex-direction: column;
        row-gap: 20px;

        @media (min-width: @max-mobile-width) and (max-width: @max-tablet-width) {
            flex: 1;
        }

        & h5{
            font-family: 'Lato';
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 19px;
            color: @color-black;
            text-align: left;
        }

        & input {
            padding: 14px 17px;
            border: 1px solid @color-gray;
            font-family: 'Lato';
            font-style: normal;
            font-weight: 300;
            font-size: 13px;
            line-height: 16px;
            color: @color-black;
            background: transparent;
        }

        & input::placeholder{
            color: @color-gray;
        }

        & input[type="submit"] {
            width: fit-content;
            padding: 11px 15px;
            border: 1px solid @color-gray;
            font-weight: 300;
            font-size: 11px;
            line-height: 13px;
            color: @color-dark-gray;
            transition: all 0.5s;
            cursor: pointer;

            &:hover {
                background-color: @color-pink;
                color: @color-white;
                border-color: @color-pink; 
            }

            &:active {
                opacity: 0.5;
            }
        }
    }

</style>