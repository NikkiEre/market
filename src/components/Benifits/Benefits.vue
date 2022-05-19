<template>
    <section class="container__page benefits">
        <article class="benefits__item">
            <img src='../../img/van.svg' alt='van' />
            <h5>
                Free Delivery
            </h5>
            <p>
                Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
            </p>
        </article>
        <article class="benefits__item">
            <img src='../../img/percent.svg' alt='percent' />
            <h5>
                Sales & discounts
            </h5>
            <p>
                Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
            </p>
        </article>
        <article class="benefits__item">
            <img src='../../img/crown.svg' alt='crown' />
            <h5>
                Quality assurance
            </h5>
            <p>
                Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
            </p>
        </article>
    </section>
</template>

<script>
export default {
    name: "Benefits",
}
</script>

<style lang="less" scoped>
    @import "../../style/variables.less";

    .benefits {
        padding-top: 103px;
        padding-bottom: 103px;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        background: @color-black;
        gap: 30px;

        @media (min-width: @min-mobile-width) and (max-width: @max-mobile-width) {
            flex-direction: column;
            align-items: center;
            row-gap: 48px;
            padding-top: 48px;
            padding-bottom: 64px;
        }

        &__item {
            display: flex;
            flex-direction: column;
            color: @color-white;
            align-items: center;
            text-align: center;

            & img {
                width: fit-content;
            }
            
            @media (min-width: @min-mobile-width) and (max-width: @max-mobile-width) {
                max-width: 360px;
            }

            & h5 {
                font-family: 'Lato';
                font-style: normal;
                font-weight: 400;
                font-size: 19.96px;
                line-height: 24px;
                padding: 28px 0 16px;
            }

            & p {
                font-family: 'Lato';
                font-style: normal;
                font-weight: 300;
                font-size: 13.972px;
                line-height: 17px;
            }
        }
    }

</style>