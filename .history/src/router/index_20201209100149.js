import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexLayout from '../views/index/IndexLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Index',
    component: IndexLayout,
    meta: {
      title: "首页"
    },
    children: [{
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        title: "商城"
      }
    }, {
      path: '/Classification',
      name: 'Classification',
      component: classification,
      meta: {
        title: "分类"
      }
    }, {
      path: '/Shopping',
      name: 'Shopping',
      component: Home,
      meta: {
        title: "购物车"
      }
    }, {
      path: '/Mine',
      name: 'Mine',
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
