import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import FastClick from "fastclick";
import vant from "vant";
import "vant/lib/index.css";
import api from "./http/api";
import BScroll from "@better-scroll/core";
import { Toast } from "vant";
import Allfunction from "./http/index";

Vue.use(vant);
Vue.use(Allfunction)
const f = require("pinyin-match")
Vue.use(f)
// 快速点击
FastClick.attach(document.body);
// 绑定封装的axios
Vue.prototype.$api = api;
// 绑定Vant轻提示
Vue.prototype.$Toast = Toast;
// 绑定better-scroll页面平滑滚动
Vue.prototype.$Scroll = BScroll;


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
