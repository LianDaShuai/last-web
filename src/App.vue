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
 body{
   font-size: 16px;
   margin: 0;
   padding: 0;
 }
</style>
