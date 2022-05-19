<template>
    <article class="container__page filter-catalog">
        <details class="filter-catalog__details_main">
            <summary>
                Filter
            </summary>
            
                <details class="filter-catalog__details_add">
                    <summary>
                        Category
                    </summary>

                    <ul class="filter-catalog__list">
                        <li
                            v-for="category of categories"
                            :key="category"
                        >   
                            <input 
                                type="checkbox"
                                :id="category" 
                                :value="category" 
                                @change="addCheckedCategory"
                                :checked="getIsCheck(category)"
                            />
                            <label :for="category">
                                {{ category }}
                            </label>
                        </li>
                    </ul>
                </details>

        </details>
    </article>
</template>

<script>
export default {
    name: "FilterCatalog",
    props: ["categories", "addCheckedCategory", "checkedCategoriesProps"],
    data: function () {
        return ({
            checkedCategories: [...this.checkedCategoriesProps]
        })
    },
    methods: {
        getIsCheck: function(category) {
            if(this.checkedCategories.includes(category)) {
                return "checked";
            }
        }
    }
}
</script>

<style lang="less" scoped>
    @import "../../style/variables.less";

    .filter-catalog {
        padding-top: 51px ;
        padding-bottom: 64px;
        display: flex;
        height: 50px;
    
        details > summary {
            list-style: none;
            text-transform: uppercase;
        }
        details > summary::-webkit-details-marker {
            display: none;
        }

        &__details {

            &_main {
                font-family: 'Lato';
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 17px;
                color: @color-black;
                padding: 16px;


                &[open] {
                    background: @color-white;
                    width: 360px;
                    box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
                    position: absolute;
                    z-index: 1;

                    @media (max-width: 400px) {
                        width: 250px;
                    }

                    & > summary {
                        margin-bottom: 16px;
                        color: @color-pink-bright;
                    }
                    
                }
            }

            &_add {

                &:not(:last-of-type) {
                    margin-bottom: 16px;
                }

                &[open] > summary {
                    color: @color-pink-bright;
                }

                & > summary {
                    font-family: 'Lato';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 17px;
                    color: @color-dark-gray-light;
                    padding: 11px;
                    border-bottom: 1px solid @color-gray-pale;
                    border-left: 5px solid @color-pink-bright;
                }

            }
        }

        &__list {
            padding: 24px 11px 8px;
            list-style-type: none;

            input {
                display: none;

                &:checked {
                    & + label {
                        color:@color-pink-bright;

                        &::before {
                            content: '\2714';
                            background: @color-pink-bright;
                            color: @color-white;
                        }
                    }
                }
            }

            label {
                text-transform: capitalize;
                font-family: 'Lato';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 17px;
                color: @color-dark-gray-light;
                transition: all 0.5s;
                display: flex;
                gap: 10px;

                &:hover {
                    cursor: pointer;
                    color: @color-pink-bright;

                    &::before {
                        border-color: @color-pink-bright;
                    }
                }

                &::before {
                    content: '';
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 15px;
                    height: 15px;
                    border: 1px solid @color-gray-pale;
                    box-sizing: border-box;
                    border-radius: 5px;
                    background: @color-gray-pale;
                    transition: all 0.5s;
                }
            }

            & li:not(:last-of-type) {
                margin-bottom: 11px;
            }
        }
    }
</style>