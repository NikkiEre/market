<template>
    <li v-bind:class="['category-item', obj.img === 'acces' ? 'category-item_acces' : '']">
        <img src="../../img/woman.png" alt="item" v-if="obj.img === 'woman'"/>
        <img src="../../img/man.png" alt="item" v-else-if="obj.img === 'man'"/>
        <img src="../../img/kid.png" alt="item" v-else-if="obj.img === 'kid'"/>
        <img src="../../img/acces.png" alt="item"  v-else-if="obj.img === 'acces'"/>
        <div class="category-item__text">
            <h5>{{obj.subtitle}}</h5>
            <h4>{{obj.title}}</h4>
        </div>
    </li>
</template>

<script>
export default {
    name: "CategoryItem",
    props: ["obj"],
}
</script>
    
<style lang="less" scoped>
    @import "../../style/variables.less";

    .category-item {
        position: relative;
        z-index: 0;

        & img {
            width: 100%;
        }

        &_acces {
            max-width: 100%;
            grid-column-start: -4;
            grid-column-end: -1;

            @media (min-width: @min-mobile-width) and (max-width: @max-mobile-width) {
                grid-column-start: auto;
                grid-column-end: auto;
            }
        }

        &__text {
            position: absolute;
            z-index: 1;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba(33, 22, 22, 0.7);
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }

    h5 {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: @color-white;
    }

    h4 {
       font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        text-align: center;
        color: @color-pink; 
    }
</style>