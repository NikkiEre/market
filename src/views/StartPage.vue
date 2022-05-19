<template>
    <div class="startpage">
        <Billboard />
        <Category />
        <Spinner 
            v-show="isLoad"
        />
        <ErrorCatalog 
            v-if="isError && !isLoad"
            :reloadItems="getItems"
        />
        <section class="startpage__catalog container__page"
            v-else-if="!isError && !isLoad"
        >
            <h3>Fetured Items</h3>
            <p>Shop for items based on what we featured in this week</p>
            <Catalog 
                :listItems="startpageItems"
                :addToCart="addToCart"
                :moveToItem="moveToItem"
                :showModal="showModal"
            />
            <div class="startpage__block_link">
                <router-link to="/catalog" class="startpage__link_catalog">Browse All Product</router-link>
            </div>
        </section>
        <div>
            <Benefits />
            <Subscribe />
            <Modal
                :isShowModal="isShowModal"
                :showModal="showModal"
                :itemInModal="itemInModal"
                :addToCart="addToCart"
            />
        </div>
    </div>
</template>

<script>
import Billboard from '@/components/Billboard/Billboard.vue'
import Category from '@/components/Category/Category.vue'
import Catalog from '@/components/Catalog/Catalog.vue'
import Benefits from '@/components/Benifits/Benefits.vue'
import Subscribe from '@/components/Subscribe/Subscribe.vue'
import { fetchRequest } from '@/api/fetch'
import ErrorCatalog from '@/components/ErrorCatalog/ErrorCatalog.vue'
import store from '@/store'
import Spinner from '@/components/Spinner/Spinner.vue'
import Modal from '@/components/Modal/Modal.vue'

export default {
    name: "StartPage",
    components: {
        Billboard,
        Category,
        Catalog,
        Benefits,
        Subscribe,
        ErrorCatalog,
        Spinner,
        Modal
    },
    data: function() {
        return ({
            isLoad: false,
            isError: false,
            startpageItems: [],
            isShowModal: false,
            scrollY: 0,
            itemInModal: {}
        })
    },
    computed: {
        cart() {
            return store.getters.GET_CART;
        },
    },
    created: function () {
        this.getItems();
    },
    methods: {
        getItems: async function() {
            this.isLoad = true;
            await fetchRequest('products?limit=6').then(res => {
                if(res) {
                    this.isLoad = false;
                    this.startpageItems = res;
                }
            }).catch(err => {
                this.isLoad = false;
                this.isError = true;
            })
        },
        addToCart: function(item) {
            store.dispatch({type: "actionChangeCart", dataDispatch: {item: item, typeAction: "addItemToCart"}});
            this.showModal();
        },
        moveToItem: function(id) {
            this.$router.push(`/item/${id}`)
        },
        showModal: function(item = {}) {
            this.isShowModal = !this.isShowModal;
            this.itemInModal = {...item};
        }
    }
}
</script>

<style lang="less" scoped>
    @import "../style/variables.less";

    .startpage {
        display: flex;
        flex-direction: column;
        gap: 95px;

        &__catalog {

            & > h3 {
                margin-bottom: 6px;
                text-align: center;
                font-family: 'Lato';
                font-style: normal;
                font-weight: 400;
                font-size: 30px;
                line-height: 36px;
                color: @color-black;
            }

            & > p {
                font-family: 'Lato';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 17px;
                color: @color-gray;
                text-align: center;
                margin-bottom: 48px;
            }


        }
    }

    .startpage__block_link {
        text-align: center;
    }

    .startpage__link_catalog {
        display: inline-block;
        padding: 15px 40px;
        margin-top: 48px;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: @color-pink;
        border: 1px solid @color-pink;
        transition: all 0.5s;
        cursor: pointer;
        text-decoration: none;

        &:hover {
            color: @color-white;
            background: @color-pink;
        }
    }
</style>