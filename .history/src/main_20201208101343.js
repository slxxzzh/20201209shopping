import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BScroll from 'better-scroll'
 
const bs = new BScroll('.wrapper', {
  pullUpLoad: true,
  scrollbar: true,
  pullDownRefresh: true
  // and so on
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
