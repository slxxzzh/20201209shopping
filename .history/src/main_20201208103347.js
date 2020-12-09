import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BScroll from 'better-scroll'
// import fastclick from 'fastclick'

const bs = new BScroll('.wrapper', {
  pullUpLoad: true,
  scrollbar: true,
  pullDownRefresh: true
  // and so on
})

Vue.config.productionTip = false
// Vue.use('fastclick')
// let attachFastClick = require('fastclick');
// attachFastClick(document.body);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
