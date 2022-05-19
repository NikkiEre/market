<template>
    <article class="loyalty">
        <h3>
            LOYALTY HAS ITS PERKS
        </h3>

        <p>
            Get in on the loyalty program where you can earn points and unlock serious perks. Starting with these as soon as you join:
        </p>

        <ul class="loyalty__list">
            <li
                v-for="item of loyalty_items"
                :key="item"
                class="loyalty__item"
            >
                <img src="../../img/loyalty.svg" alt="loyalty" />
                <p>
                    {{ item }}
                </p>
            </li>
        </ul>

    </article>
</template>

<script>
export default {
    name: "Loyalty",
    data: function() { return (
        {
            loyalty_items: [
                "15% off welcome offer",
                "Free shipping, returns and exchanges on all orders",
                "$10 off a purchase on your birthday",
                "Early access to products",
                "Exclusive offers & rewards"
            ]
        }
    )}
}
</script>

<style lang="less" scoped>
    @import "../../style/variables.less";

    .loyalty{
        max-width: 652px;
        display: flex;
        flex-direction: column;
        gap: 22px;


        @media (min-width: @min-mobile-width) and (max-width: @max-mobile-width) {
            width: 100%;
        }
    }

    h3 {
        font-weight: 300;
        font-size: 24px;
        line-height: 29px;
        color: @color-black;

        @media (min-width: @min-mobile-width) and (max-width: @max-tablet-width) {
            font-size: 16px;
            line-height: 19px;
        }
    }

    p {
        font-weight: 300;
        font-size: 24px;
        line-height: 29px;
        color: @color-black;

        @media (min-width: @min-mobile-width) and (max-width: @max-tablet-width) {
            font-size: 16px;
            line-height: 19px;
        }
    }

    .loyalty__list {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .loyalty__item {
        display: flex;
        gap: 23px;
    }

</style>