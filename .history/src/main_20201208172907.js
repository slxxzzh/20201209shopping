import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import BScroll from 'better-scroll'
import FastClick from 'fastclick'
import vant from 'vant';
import 'vant/lib/index.css';
import api from "./http/api"

// console.log(api);
Vue.prototype.$api = api
Vue.use(vant);
FastClick.attach(document.body);
let bs = new BScroll(".wrapper", {
  scrollX: true,
  click: true,
});
// Vue.config.productionTip = false
// Vue.use(fastclick)
// let attachFastClick = require('fastclick');
// attachFastClick(document.body);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
