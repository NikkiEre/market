<template>
  <div class="modal" v-show="isShowModal" >
        <div class="modal__block" :style="moveModalToY">
          <button class="modal__btn" @click="showModal">
            &#10006;
          </button>
          <div class="modal__content">
            <Slider 
              :item="itemInModal"
              v-if="itemInModal.hasOwnProperty('title')"
            />
            <DescriptionItem
              v-if="itemInModal.hasOwnProperty('title')"
              :item="itemInModal"
              :addToCart="addToCart"
            />
          </div>
        </div>
  </div>
</template>

<script>
import DescriptionItem from '../DescriptionItem/DescriptionItem.vue'
import Slider from '../Slider/Slider.vue'

export default {
  components: { Slider, DescriptionItem },
    name: "Modal",
    props: ["showModal", "isShowModal", "itemInModal", "addToCart"],
    data: function() {
      return ({
        positionY: 0,
      })
    },
    computed: {
      moveModalToY() {
        return {top: this.positionY - 50 + 'px'}
      }
    },
    beforeUpdate: function() {
      if(this.isShowModal) {
        window.document.body.style.overflowY = "hidden";
        this.positionY = window.scrollY;
      } else {
        window.document.body.style.overflowY = "scroll";
      }
    },
}
</script>

<style lang="less" scoped>
    .modal {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;

      &__block {
        background: #fff;
        padding: 35px;
        position: absolute;
        transform: scale(0.8);
      }

      &__content {
        display: flex;

        @media (max-width: 767px) {
          flex-direction: column;
        }
      }

      &__btn {
        background-color: transparent;
        border: none;
        padding: 5px;
        font-size: 25px;
        position: absolute;
        top: 2px;
        right: 2px;
        transition: all 0.5s;
        cursor: pointer;

        &:hover {
          color: #EF5B70;
        }
      }
    }
</style>