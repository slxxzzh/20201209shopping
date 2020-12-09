import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "首页"
    },
    children: [{
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: "商城"
      }
    }, {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: "分类"
      }
    }, {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: "购物车"
      }
    }, {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: "我的"
      }
    }]
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    meta: {
      title: "登录"
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, form, next) => {
  document.title = to.meta.title
  next()
})
export default router
