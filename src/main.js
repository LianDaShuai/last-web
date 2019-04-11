// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


//导入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//引入axios
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios,axios);
//导入store状态管理器
import store from '@/store/store.js'

//导入mui
import './assets/dist/css/mui.css'
import mui from './assets/dist/js/mui.js'
Vue.prototype.mui = mui

//导入mockjs
require('./mock.js')

//导入接口文件
import api from '@/apis/index.js'
Vue.prototype.api = api

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
