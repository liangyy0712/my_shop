import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Cart from '../views/Cart.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import GoodsList from '../views/goods/GoodsList.vue'
import GoodsInfo from '../views/goods/GoodsInfo.vue'
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      title: '分类'
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '我的'
    }
  },
  {
    path: '/profile/login',
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/profile/register',
    component: Register,
    meta: {
      title: '注册'
    }
  },
  {
    // 路由传参
    path: '/goodslist/:category_id',
    props:true,
    component: GoodsList,
    meta: {
      title: '商品列表'
    }
  },
  {
    // 商品详情  商品id  name 给路由起名字
    path: '/goodsinfo/:id',
    props:true,
    component: GoodsInfo,
    name:'goods_info',
    meta: {
      title: '商品详情'
    }
  }

]
// 给当前路由添加mui-active类名
const router = new VueRouter({
  routes,
  linkActiveClass: 'mui-active'
})
// 添加路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router
