import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shopItem:0 // 购物车数量
  },
  mutations: {
    set_ShopItem(state,v){ // 修改购物车数量
      state.shopItem = v
    }
  },
  actions: {
  },
  modules: {
  }
})
