<template>
  <div class="register-box">
    <div class="register-title">
      <p>&lt;</p>
      <span>注册</span>
    </div>
    <div class="register-ipt">
      <div class="ipt-item">
        <span></span>
        <input type="text" placeholder="请输入手机号码">
      </div>
      <div class="ipt-item">
        <span></span>
        <input type="text" placeholder="请输入验证码">
        <p>获取验证码</p>
      </div>
      <div class="ipt-item">
        <span></span>
        <input type="text" placeholder="请输出邀请码(选填)">
      </div>
      <div class="ipt-item">
        <span></span>
        <input type="text" placeholder="密码，只能6-20位字符哦~">
      </div>
    </div>
    <div class="register-btn">注册</div>
    <p class="agreement">*注册则代表同意
      <span>《果星云用户协议》</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .register-box{
    font-size: 0.16rem;
  }
  .register-title{
    height: 0.72rem;
    border-bottom: 1px solid #e1e1e1;
    line-height: 0.72rem;
    text-align: center;
    display: flex;
    padding-left: 0.32rem;
  }
  .ipt-item{
    display: flex;
    height: 0.76rem;
    border: 1px solid #ccc;
    margin: 0 0.32rem;
    border-radius: 0.1rem;
    margin-top: 0.33rem;
  }
  .ipt-item input{
    border: none;
    outline: none;
    flex-grow: 1;
     border-radius: 0.1rem;
     font-size: 0.14rem;
   }
  .ipt-item span{
    width: 0.6rem;
  }
  .ipt-item p{
    padding: 0 0.36rem;
    margin: 0.08rem 0;
    line-height: 0.6rem;
    border-left: 1px solid #ccc;
    color: #ff6633;
  }
  .register-btn{
    margin: 0.43rem 0.32rem 0 0.32rem;
    background: #ff6633;
    color: #fff;
    text-align: center;
    height: 0.71rem;
    line-height: 0.71rem;
    border-radius: 0.1rem;
  }
  .agreement{
    margin-left: 0.32rem;
    margin-top: 0.28rem;
    color: #888;
  }
  .agreement span{
    color: #ff6633;
  }
</style>
