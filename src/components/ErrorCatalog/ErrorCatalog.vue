<template>
    <section class="container__page error-catalog">
        <h3>
            Error load items
        </h3>
        <p>
            Please click button for reload catalog
        </p>
        <button @click="reloadItems">
            &#8635; Reaload
        </button>
    </section>
</template>

<script>
export default {
    name: "ErrorCatalog",
    props: ["reloadItems"]
}
</script>

<style lang="less" scoped>
    @import "../../style/variables.less";

    .error-catalog {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 30px;

        h3 {
            font-weight: 400;
            font-size: 28px;
            line-height: 34px;
            color: @color-pink;
        }

        p {
            font-size: 18px;
            font-size: 26px;
        }

        button {
            color: @color-white;
            background-color: @color-pink;
            border: none;
            padding: 13px 29px;
            width: fit-content;
            font-size: 18px;
            font-size: 26px;
            transition: all 0.5s;

            &:hover {
                background: @color-white;
                color: @color-pink;
            }
        }
    }

</style>