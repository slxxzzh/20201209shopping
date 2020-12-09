import Vue from 'vue'
import App from './a.vue'
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

router.beforeEach((to,form,next)=>{
  document.title=to.meta.title
  console.log(to);
  next(vm=>{
    console.log(123);
  })
  // console.log(this.$store.state);
  next()
})