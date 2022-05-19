<template>
  <section class="container__page category">
      <ul class="category__list">
          <CategoryItem
            v-for="category of categories"
            :obj="category"
            :key="category.title" />
      </ul>
  </section>
</template>

<script>
import CategoryItem from '../CategoryItem/CategoryItem.vue'
export default {
  components: { CategoryItem },
    name: "Category",
    data: function () {
        return {
            categories: [
                {
                   title: "FOR WOMEN",
                   subtitle: "30% OFF",
                   img: "woman", 
                },
                {
                   title: "FOR MEN",
                   subtitle: "HOT DEAL",
                   img: "man", 
                },
                {
                   title: "FOR KIDS",
                   subtitle: "NEW ARRIVALS",
                   img: "kid", 
                },
                {
                   title: "ACCESORIES",
                   subtitle: "LUXIROUS & TRENDY",
                   img: "acces", 
                },
            ]
        }
    }
}
</script>

<style lang="less" scoped>
  @import "../../style/variables.less";


    .category {

        &__list {
            list-style-type: none;
            display: grid;
            grid-template-columns: repeat(3, auto);
            justify-content: space-between;
            gap: 30px;

            @media (min-width: @min-mobile-width) and (max-width: @max-mobile-width) {
                grid-template-columns: repeat(1, 1fr);
            }
        }
    }
    
</style>