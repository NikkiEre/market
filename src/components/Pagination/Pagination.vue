<template>
    <div class="container__page container">
        <div class="pagination">
            <button @click="changePage('-')">
                <svg 
                    width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.99512 2L3.99512 7L8.99512 12L7.99512 14L0.995117 7L7.99512 0L8.99512 2Z" fill="black"/>
                </svg>
            </button>

            <a 
                v-for="i of pages"
                :key="i"
                :class="['pagination__link', activePage === i ? 'pagination__link_active' : '']"
                @click="changePage(i)"
            >
                {{ i }}
            </a>

            <button @click="changePage('+')">
                <svg 
                    width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.994995 12L5.995 7L0.994995 2L1.995 0L8.995 7L1.995 14L0.994995 12Z" fill="black"/>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Pagination",
    props: ["pages", "activePage", "changePage"]
}
</script>

<style lang="less" scoped>
    @import "../../style/variables.less";

    .container {
        align-self: center;
    }

    .pagination {
        display: flex;
        padding: 15px;
        border: 1px solid @color-gray-pale;
        width: fit-content;


        & button {
            background: transparent;
            border: none;
            display: flex;
            align-items: center;
            cursor: pointer;

            & svg path {
                transition: all 0.5s;
            }

            &:first-of-type {
                margin-right: 17px;
            }

            &:last-of-type {
                margin-left: 17px;
            }

            &:hover svg path{
                fill: @color-pink-bright;
            }
        }

        & a:not(:last-of-type) {
            margin-right: 20px;
        }

        &__link {
            font-weight: 300;
            font-size: 16px;
            line-height: 19px;
            color: #C4C4C4;
            transition: all 0.5s;

            &:hover {
                color: @color-pink-bright;
                cursor: pointer;
            }

            &_active {
                color: @color-pink-bright;
            }
        }
    }
</style>