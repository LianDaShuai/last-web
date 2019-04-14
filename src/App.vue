<template>
  <div id="app">
   
    <router-view/>
    <tabbar></tabbar>  
  </div>
</template>

<script>
import tabbar from '@/components/Tabbar'
export default {
  name: 'App',
  components:{
    tabbar
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
 body{
   font-size: 16px;
   margin: 0;
   padding: 0;
   background: #fff;
 }
 #app{
   height: 100%;
 }
</style>
