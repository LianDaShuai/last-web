import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


import Index from '@/components/Index'
import GoodsCart from '@/components/GoodsCart'
import Order from '@/components/Order'
import Mine from '@/components/Mine'
import Search from '@/components/Search'
import Login from '@/components/Login'
import Register from '@/components/Register'
import GoodsDetail from '@/components/Goods/GoodsDetail'
import LoginOut from '@/components/login/LoginOut'

import store from '@/store/store'



Vue.use(Router)

var r = new Router({
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
      path: '/goods-cart',
      name: 'goods-cart',
      component: GoodsCart
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
    },
    {
      path: '/goodsDetail/:id',
      name: 'goodsDetail',
      component: GoodsDetail
    },
    {
      path: '/login-out',
      name: 'login-out',
      component: LoginOut
    }
  ]
})

//router定义的下面, 每个路由跳转之前, 执行回调函数
r.beforeEach((to, from, next) => {
  console.log(to.path)
  if(to.path == "/mine"){
    //如果没有登录
    var isLogin = false
    if(localStorage.login == undefined || localStorage.login != 1){
      isLogin = true
    }
  }
  if(isLogin){
    r.push('/login')
  }else{
    next()
  }
  store.commit("setInType",false)
  //查看页面跳转的路径
  if(to.path =="/index"){
    store.commit("setInType",true)
  }
  if(to.path =="/goods-cart"){
    store.commit("setInType",true)
  }
  if(to.path =="/order"){
    store.commit("setInType",true)
  }
  if(to.path =="/mine"){
    store.commit("setInType",true)
  }
})


export default r;
