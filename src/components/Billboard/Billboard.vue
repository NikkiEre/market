<template>
    <section class="container__page billboard">
        <div class="billboard__img">
          <img src="../../img/billboard.png" alt="billboard" />
        </div>
        <div class="billboard__title">
            <h1>THE BRAND</h1>
            <h2>OF LUXERIOUS <span>FASHION</span></h2>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    @import "../../style/variables.less";

    .billboard {
        display: flex;
        background: @color-pink-pale;

        @media (min-width: @min-mobile-width) and (max-width: @max-mobile-width) {
            display: block;
            padding: auto;
        }

        &__img {
            flex: 1;

            @media (min-width: @min-mobile-width) and (max-width: @max-mobile-width) {
                display: none;
            }

            & img {
                width: 100%;
            }
        }

        &__title {
            flex: 1;
            height: fit-content;
            align-self: center;
            border-left: 12px solid @color-pink;
            padding-left: 16px;

            @media (min-width: @min-mobile-width) and (max-width: @max-mobile-width) {
                width: fit-content;
                margin: 148px auto;
            }
        }
    }

    h1 {
        font-weight: 900;
        font-size: 48px;
        line-height: 58px;
        color: @color-black;

        @media (min-width: @min-tablet-width) and (max-width: @max-tablet-width) {
            font-size: 44px;
            line-height: 53px;
        }

        @media (min-width: @min-mobile-width) and (max-width: @max-mobile-width) {
            font-size: 38px;
            line-height: 46px;
        }
    }

    h2 {
        font-weight: 700;
        font-size: 32px;
        line-height: 38px;
        color: @color-black;

        @media (min-width: @min-tablet-width) and (max-width: @max-tablet-width) {
            font-size: 24px;
            line-height: 29px;
        }

        @media (min-width: @min-mobile-width) and (max-width: @max-mobile-width) {
            font-size: 20px;
            line-height: 24px;
        }

    }

    span {
        color: @color-pink;
    }

</style>