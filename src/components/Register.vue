<template>
  <div class="register-box">
    <div class="register-title">
      <p @click="dealback">&lt;</p>
      <span>注册</span>
    </div>
    <div class="register-ipt">
      <div class="ipt-item">
        <span></span>
        <input type="text" placeholder="请输入手机号码" v-model="phone">
      </div>
      <div class="ipt-item">
        <span></span>
        <input type="text" placeholder="请输入验证码" v-model="code">
        <p>获取验证码</p>
      </div>
      <div class="ipt-item">
        <span></span>
        <input type="text" placeholder="请输出邀请码(选填)">
      </div>
      <div class="ipt-item">
        <span></span>
        <input type="text" placeholder="密码，只能6-20位字符哦~" v-model="password">
      </div>
    </div>
    <div class="register-btn" @click="dealReg">注册</div>
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
      phone:'',
      code:'',
      password:''
    }
  },
  methods:{
    //点击返回
    dealback(){
      this.$router.go("-1")
    },
    //点击注册，注册用户
    async dealReg(){
      var dict = {
        phone:this.phone,
        password:this.password
      }
      let res = await this.api.getReg(dict)
      console.log(res)
      if(res.code==1){
        this.$router.push('/login')
      }
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
  .register-title p{
    width: 0.6rem;
    font-size: 0.4rem;
  }
  .register-title span{
    flex-grow: 1;
    text-align: center;
    margin-left: -0.6rem;
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
