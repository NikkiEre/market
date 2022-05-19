import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData: {
      userInfo: {
        first_name: null,
        last_name: null,
        isMan: null,
        email: null,
        password: null,
      },
      subscribe: false,
      cart: [],
      shipAddress: {
        city: '',
        state: '',
        zip: '',
      },
    },
  },
  getters: {
    GET_CART: function(state) {
      return state.userData.cart;
    },
    GET_USERDATA: function(state) {
      return state.userData.userInfo;
    },
    GET_SUBSCRIBE: function(state) {
      return state.userData.subscribe;
    },
    GET_SHIPADDRESS: function(state) {
      return state.userData.shipAddress;
    }
  },
  mutations: {
    addItemToCart (state, payload) {
      const indexItem = state.userData.cart.findIndex((item) => item.id == payload.id && item?.color == payload?.color && item?.size == payload?.size);
      if(indexItem >= 0) {
        state.userData.cart[indexItem].count += Number(payload.count);
      } else {
        state.userData.cart.push({...payload, count: Number(payload.count)});
      }
    },
    changeCart(state, payload) {
      const indexItem = state.userData.cart.findIndex((item) => item.id == payload.id);
      state.userData.cart[indexItem].count = payload.count;
    },
    removeItemFromCart (state, payload) {
      state.userData.cart = [...state.userData.cart.filter((item) => item.id != payload.id)];
    },
    clearCart (state) {
      state.userData.cart = [];
    },
    loginUser(state, payload) {
      state.userData = {...payload};
    },
    logoutUser(state) {
      state.userData.userInfo = {
        first_name: null,
        last_name: null,
        isMan: null,
        email: null,
        password: null,
      };
      state.userData.subscribe = false;
    },
    subscribeUser(state) {
      state.userData.subscribe = true;
    },
    saveShippingAddress(state, payload) {
      state.userData.shipAddress = payload;
    }
  },
  actions: {
    actionChangeCart(params, payload) {
      switch (payload.dataDispatch.typeAction) {
        case "addItemToCart":
          params.commit("addItemToCart", payload.dataDispatch.item);
          break;  
        case "changeCart":
          params.commit("changeCart", payload.dataDispatch.item);
          break;
        case "removeItemFromCart":
          params.commit("removeItemFromCart", payload.dataDispatch.item);
          break;
        case "clearCart":
          params.commit("clearCart");
          break;
        case "saveShippingAddress":
          params.commit("saveShippingAddress", payload.dataDispatch.address);
          break;
        default:
          break;
      };
      const stringifyUserData = JSON.stringify(this.state.userData);
      localStorage.setItem("userData", stringifyUserData);
    },
  },
  modules: {
  }
})
