<template>
    <section class="catalog-page">
        <Breadcrumbs />
        <FilterCatalog 
            :categories="categories"
            :addCheckedCategory="addCheckedCategory"
            :checkedCategoriesProps="checkedCategories"
        />
        <Spinner v-if="isLoad"/>
        <ErrorCatalog v-else-if="!isLoad && isError" :reloadItems="fetchStore" />
        <div class="catalog-page__catalog" v-else-if="!isLoad && !isError">
            <Catalog 
                :listItems="filterItemsForPage"
                :addToCart="addToCart"
                :moveToItem="moveToItem"
            />
            <Pagination 
                :pages="countPages"
                :activePage="activePage"
                :changePage="changePage"
            />
        </div>
        <Benefits />
        <Subscribe />
    </section>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs.vue'
import FilterCatalog from '@/components/FilterCatalog/FilterCatalog.vue'
import Catalog from '@/components/Catalog/Catalog.vue'
import Benefits from '@/components/Benifits/Benefits.vue'
import Subscribe from '@/components/Subscribe/Subscribe.vue'
import Spinner from '@/components/Spinner/Spinner.vue'
import Pagination from '@/components/Pagination/Pagination.vue'
import { fetchRequest } from '@/api/fetch'
import ErrorCatalog from '@/components/ErrorCatalog/ErrorCatalog.vue'
import store from '@/store'

export default {
  components: { 
        Breadcrumbs, 
        FilterCatalog,
        Catalog,
        Benefits,
        Subscribe,
        Spinner,
        ErrorCatalog,
        Pagination
    },
    name: "CatalogPage",
    data: function() {
        return ({
            isLoad: false,
            isError: false,
            items: [],
            categories: [],
            checkedCategories: [],
            maxItemsInPage: 6,
            activePage: 1,
        })
    },
    computed: {
        countPages: function() {
            this.activePage = 1;
            return Math.ceil(this.filterItemsForCategories.length / this.maxItemsInPage);
        },
        filterItemsForCategories: function() {
            if(this.checkedCategories.length) {
                return this.items.filter((item) => {
                    if(this.checkedCategories.includes(item.category)) {
                        return item;
                    }
                })
            } else {
                return this.items;
            }
        },
        filterItemsForPage: function() {
            const newArr = [...this.filterItemsForCategories].splice((this.activePage - 1) * this.maxItemsInPage, this.maxItemsInPage);
            return newArr;
        },
        url_category: function() {
            return this.$route.params.category;
        }
    },
    methods: {
        fetchStore: function() {
            this.isLoad = true;
            const fetchStore = fetchRequest('products').then(res => {
                this.items = res;
            });
            const fetchCategories = fetchRequest('products/categories').then(res => {
                this.categories = res;
            });
            Promise.all([fetchStore, fetchCategories]).then(res => {
                this.isLoad = false;
            }).catch(err => {
                this.isLoad = false;
                this.isError = true;
            })
        },
        addToCart(item) {
            store.dispatch({type: "actionChangeCart", dataDispatch: {item: item, typeAction: "addItemToCart"}});

        },
        moveToItem() {
            this.$router.push("/item");
        },
        changePage(page) {
            if(page === "-" && this.activePage > 1) {
                this.activePage -= 1;
            } else if (page === "+" && this.activePage < this.countPages) {
                this.activePage += 1;
            } else if(Number(page)) {
                this.activePage = page;
            }
        },
        addCheckedCategory(e) {
            if(e.target.checked) {
                this.checkedCategories.push(e.target.value);
            } else {
                this.checkedCategories = this.checkedCategories.filter((category) => category !== e.target.value);
            }
        }
    },
    created: function() {
        this.fetchStore();
        if(this.url_category) {
            this.checkedCategories.push(this.url_category);
        }
    },
}
</script>

<style lang="less" scoped>
    .catalog-page__catalog {
        display: flex;
        flex-direction: column;
        gap: 48px;
        margin-bottom: 96px;
    }
</style>