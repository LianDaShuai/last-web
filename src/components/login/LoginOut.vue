<template>
  <div class="login-out">
   <div @click="dealClear">退出登录</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
     
    }
  },
  methods:{
    dealClear(){//点击清除登录
      localStorage.removeItem("login")
      localStorage.removeItem("user")
      this.$router.push('/login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login-out{
    font-size: 0.16rem;
  }
</style>
