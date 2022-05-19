<template>
    <section class="itempage">
        <Breadcrumbs />
        <Slider 
            :item="item" 
            v-if="!isLoad && !isError"
        />
        <div class="itempage__description"
            v-if="!isLoad && !isError"
        >
            <DescriptionItem 
                :item="item"
                :addToCart="addToCart"
            />
        </div>
        <Spinner 
            v-else-if="isLoad && !isError"
            v-show="isLoad"
        />
        <ErrorCatalog 
            v-else-if="isError && !isLoad"
        />
        <div class="itempage__catalog"
            v-if="!isError && !isLoad"
        >
            <Catalog 
                :listItems="catalogItems"
                :addToCart="addToCart"
                :moveToItem="moveToItem"
            />
        </div>
        <Subscribe />
    </section>
</template>

<script>
import Subscribe from '@/components/Subscribe/Subscribe.vue'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs.vue'
import Slider from '@/components/Slider/Slider.vue'
import DescriptionItem from '@/components/DescriptionItem/DescriptionItem.vue'
import Catalog from '@/components/Catalog/Catalog.vue'
import { fetchRequest } from '@/api/fetch'
import store from '@/store'
import Spinner from '@/components/Spinner/Spinner.vue'
import ErrorCatalog from '@/components/ErrorCatalog/ErrorCatalog.vue'

export default {
  components: { Subscribe, Breadcrumbs, Slider, DescriptionItem, Catalog, Spinner, ErrorCatalog },
    name: "ItemPage",
    data: function() {
        return ({
            item: {},
            catalogItems: [],
            isLoad: false,
            isError: false,
        })
    },
    created: function() {
        this.fetchItemAndCatalog();
    },
    methods: {
        fetchItemAndCatalog: function() {
            this.isLoad = true;
            const fetchCatalog = fetchRequest('products?limit=3').then(res => {
                this.catalogItems = res; 
            });
            const fetchItem = fetchRequest(`products/${this.$route.params.id}`).then(res => {
                this.item = res; 
            });
            Promise.all([fetchItem, fetchCatalog]).then(res => {
                this.isLoad = false;
            })
            .catch(err => {
                this.isLoad = false;
                this.isError = true;
            });
        },
        addToCart: function(item) {
            store.dispatch({type: "actionChangeCart", dataDispatch: {item: item, typeAction: "addItemToCart"}});
        },
        moveToItem: function(item) {
            this.$router.push("/item")
        }
    }
}
</script>

<style lang="less">
    @import "../style/variables.less";

    .itempage {
        &__catalog {
           padding-top: 64px;
           padding-bottom: 128px;

            @media (min-width: @min-tablet-width) and (max-width: @max-tablet-width) {
                & .catalog-item:last-of-type {
                    display: none;
                }
            }
        }

        &__description {
            margin: 0 calc(50% - 525px);
            top: -64px;
            position: relative;

            @media (min-width: @min-mobile-width) and (max-width: @max-tablet-width) {
                top: 0;
                padding: 0 18px;
                margin: 0;
            }

            @media (min-width: @min-mobile-width) and (max-width: @max-mobile-width) {
                padding: 0 9px;
            }
        }
    }
</style>