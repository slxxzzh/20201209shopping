import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexLayout from '../views/index/IndexLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: IndexLayout,
    meta: {
      title: "首页"
    },
    children: [{
      path: '',
      name: 'Index',
      component: () => import(/* webpackChunkName: "about" */ '../views/index/index.vue'),
      meta: {
        title: "商城"
      }
    }, {
      path: 'Classification',
      name: 'Classification',
      component: () => import(/* webpackChunkName: "about" */ '../views/index/Classification.vue'),
      meta: {
        title: "分类"
      }
    }, {
      path: 'Shopping',
      name: 'Shopping',
      component: () => import(/* webpackChunkName: "about" */ '../views/Shopping/Shopping.vue'),
      meta: {
        title: "购物车"
      }
    }, {
      path: 'Mine',
      name: 'Mine',
      component: () => import(/* webpackChunkName: "about" */ '../views/Mine/Mine.vue'),
      meta: {
        title: "我的"
      },
    }]
  },
  {
    path: '/SetUser',
    name: 'SetUser',
    component: () => import(/* webpackChunkName: "about" */ '../views/Mine/SetUser.vue'),
    meta: {
      title: "修改用户信息"
    }
  },{
    path: '/collection',
    name: 'collection',
    component: () => import(/* webpackChunkName: "about" */ '../views/Mine/collection.vue'),
    meta: {
      title: "我的收藏"
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    meta: {
      title: "登录/注册"
    }
  },{
    path: '/shopItem',
    name: 'shopItem',
    component: () => import(/* webpackChunkName: "about" */ '../views/shopItem.vue'),
    meta: {
      title: "商品详情"
    }
  },{
    path: '/orderSettlement',
    name: 'orderSettlement',
    component: () => import(/* webpackChunkName: "about" */ '../views/Shopping/orderSettlement.vue'),
    meta: {
      title: "订单结算"
    }
  },{
    path: '/address',
    name: 'address',
    component: () => import(/* webpackChunkName: "about" */ '../views/Shopping/address.vue'),
    meta: {
      title: "收货地址"
    }
  },{
    path: '/newAddress',
    name: 'newAddress',
    component: () => import(/* webpackChunkName: "about" */ '../views/Shopping/newAddress.vue'),
    meta: {
      title: "新增地址"
    }
  },{
    path: '/orderNum',
    name: 'orderNum',
    component: () => import(/* webpackChunkName: "about" */ '../views/Mine/orderNum.vue'),
    meta: {
      title: "我的订单"
    }
  },
  
  
  
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
