import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wrapper:null
  },
  mutations: {
    set_wrapper(state,val){
      state.wrapper = val
    }
  },
  actions: {
  },
  modules: {
  }
})
