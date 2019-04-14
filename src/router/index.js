import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


import Index from '@/components/Index'
import GoodsCar from '@/components/GoodsCar'
import Order from '@/components/Order'
import Mine from '@/components/Mine'
import Search from '@/components/Search'
import Login from '@/components/Login'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
     redirect:'/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/goods-car',
      name: 'goods-car',
      component: GoodsCar
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
