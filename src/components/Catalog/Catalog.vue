<template>
  <ul class="container__page catalog">
        <CatalogItem
            v-for="item of listItems"
            :item="item"
            :addToCart="addToCart"
            :moveToItem="moveToItem"
            :showModal="showModal"
            :key="item.id"
        />
  </ul>
</template>

<script>
import CatalogItem from '../CatalogItem/CatalogItem.vue'
export default {
  components: { CatalogItem },
  props: ["listItems", "addToCart", "moveToItem", "showModal"]

}
</script>

<style lang="less" scoped>
  @import "../../style/variables.less";

  .catalog {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    justify-content: center;

    @media (min-width: @min-tablet-width) and (max-width: @max-tablet-width) {
      grid-template-columns: repeat(2, auto);
    }

    @media (min-width: @min-mobile-width) and (max-width: @max-mobile-width) {
      grid-template-columns: repeat(1, auto);
    }
  }
</style>