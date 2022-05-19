<template>
  <div id="app">
    <Header 
      :categories="categories"
    />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';
import store from './store';
import { fetchRequest } from './api/fetch';

export default {
  components: {
    Header,
    Footer
  },
  data: function() {
    return ({
      categories: [],
    })
  },
  methods: {
    getUserData() {
      const userData = localStorage.getItem("userData");
      store.commit("loginUser", JSON.parse(userData));
    },
    getCategories() {
      fetchRequest("products/categories")
      .then(res => this.categories = res)
      .catch(err => err)
    },
  },
  created: function() {
    this.getUserData();
    this.getCategories();
  }
}
</script>


<style lang="less">
  @import "style/style.less";

  * {
    margin: 0;
    padding: 0;
  }

  #app {
    position: relative;
  }

</style>
