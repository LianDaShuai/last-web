<template>
  <div class="login-content">
    <div class="logo">
      <img src="../../static/img/logo.png" alt>
    </div>
    <div class="login-ipt">
      <div>
        <span></span>
        <input type="text" placeholder="手机号码">
         <span></span>
      </div>
      <div>
         <span></span>
        <input type="password" placeholder="请输入密码">
         <span></span>
      </div>
      <p>忘记密码</p>
    </div>
    <div class="login-btn">登录</div>
    <div class="register" @click="dealRegister">注册</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  methods:{
    //点击注册跳转注册页面
    dealRegister(){
      this.$router.push("/register")
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-content {
  overflow: hidden;
  font-size: 0.16rem;
}
.logo{
  margin-top: 1.77rem;
  text-align: center;
}
.login-ipt{
  margin-top: 0.77rem;
  margin-left: 0.33rem;
  margin-right: 0.33rem;
  
}
.login-ipt>div{
  border-radius: 0.1rem;
  border:1px solid #ccc;
  height: 0.78rem;
  display: flex;
  margin-top: 0.33rem;
}
.login-ipt input{
  border: none;
  outline: none;
  flex-grow: 1;
  font-size: 0.16rem;
}
.login-ipt>div>span{
  display: inline-block;
  width: 0.6rem;
}
.login-ipt p{
  text-align: right;
  margin: 0.38rem 0;
  color: #ccc;
  font-size: 0.18rem;
}
.login-btn{
  text-align: center;
  background: #ff6633;
  color: #fff;
  margin: 0 0.32rem;
  height: 0.7rem;
  line-height: 0.7rem;
  border-radius: 0.1rem;
}
.register{
  background: #fff;
  width: 2.05rem;
  height: 0.68rem;
  border: 1px solid #ff6633;
  border-radius: 0.1rem;
  color: #ff6633;
  text-align: center;
  line-height: 0.68rem;
 position: absolute;
 bottom: 1rem;
 left: 50%;
 margin-left: -1.025rem;
}
</style>
