<template>
    <section class="slider">
        <button @click="nextImg">
            <svg 
                width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6998 3.7499L4.9498 11.4999L12.6998 19.2499L11.1498 22.3499L0.299805 11.4999L11.1498 0.649902L12.6998 3.7499Z" fill="black"/>
            </svg>
        </button>

        <div class="slider__img_window">
            <div class="slider__img_list" :style="translate">
                <img src="../../img/catalog.png" alt="" />
                <img src="../../img/catalog.png" alt="" />
                <img :src="item.image" alt="" />
            </div>
        </div>

        <button @click="nextImg('incr')">
            <svg 
                width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.299805 19.2499L8.0498 11.4999L0.299805 3.7499L1.8498 0.649902L12.6998 11.4999L1.8498 22.3499L0.299805 19.2499Z" fill="black"/>
            </svg>

        </button>
    </section>
</template>

<script>
export default {
    name: "Slider",
    props: ["item"],
    data: function() {
        return ({
            currentImg: 0,
            lenght: 2
        })
    },
    computed: {
        translate() {
            return ({
                transform: `translateX(${this.currentImg * -360}px)`
            })
        }
    },
    methods: {
        nextImg(way = "decr") {
            if(way === "incr") {
                this.currentImg === this.lenght
                ? this.currentImg = 0
                : this.currentImg += 1
            } else {
                this.currentImg === 0
                ? this.currentImg = this.lenght
                : this.currentImg -= 1
            }
        }
    }
}
</script>

<style lang="less" scoped>
    @import "../../style/variables.less";

    .slider {
        background-color: @color-gray-pale;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 64px;

        &__img_window {
            width: 360px;
            height: 420px;
            object-fit: cover;
            overflow: hidden;
        }

        &__img_list {
            display: flex;
            transition: all 0.5s;
        }
    }

    img {
        display: inline-block;
        width: 360px;
        height: 420px;
    }

    button {
        width: fit-content;
        height: fit-content;
        padding: 12px 17px;
        background: rgba(42, 42, 42, 0.15);
        border: none;
        cursor: pointer;
        transition: all 0.5s;

        &:hover svg path {
            fill: @color-pink;
        }

        &:active {
            opacity: 0.5;
        }
    }
</style>