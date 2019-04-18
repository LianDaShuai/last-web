<template>
  <div id="app">
   
    <router-view/>
    <tabbar :num ="num"></tabbar>  
  </div>
</template>

<script>
import tabbar from '@/components/Tabbar'
export default {
  name: 'App',
  components:{
    tabbar
  },
  data(){
    return{
      num:""
    }
  },
  created(){
    this.cartList()
  },
  beforeUpdate(){
    this.cartList()
  },
  methods:{
    async cartList(){
      if(!localStorage.login){
        return
      }
      var user_id = JSON.parse(window.localStorage.getItem("user")).id;
      // console.log("user_id=" + user_id);
      var dict = {
        user_id: user_id
      };
      let res = await this.api.getCartList(dict);
      this.num = res.data.length
      console.log("购物车数量="+res.data.length)
    }
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  html{
    height: 100%;
  }
 body{
   height: 100%;
   font-size: 16px;
   margin: 0;
   padding: 0;
   background: #fff;
 }
 #app{
   height: 100%;
 }
</style>
