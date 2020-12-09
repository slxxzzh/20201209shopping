import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BScroll from 'better-scroll'
import FastClick from 'fastclick'
import vant from 'vant';
import 'vant/lib/index.css';


Vue.use(vant);
FastClick.attach(document.body);
// Vue.config.productionTip = false
// Vue.use(fastclick)
// let attachFastClick = require('fastclick');
// attachFastClick(document.body);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
