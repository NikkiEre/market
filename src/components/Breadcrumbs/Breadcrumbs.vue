<template>
    <article class="container__page breadcrumbs">
        <h1>
            BreadCrumbs
        </h1>
    </article>
</template>

<script>
export default {
    name: "Breadcrumbs"
}
</script>

<style lang="less" scoped>
    @import "../../style/variables.less";

    .breadcrumbs {
        padding-top: 60px;
        padding-bottom: 60px;
        background: @color-pink-pale;
    }

    h1 {
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        color: @color-pink;
    }

</style>