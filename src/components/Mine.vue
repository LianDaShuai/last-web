M<template>
  <div class="mine-box">
    <div class="user-box">
      <div class="user-image">
        <img src="../../static/img/apple.jpg" alt>
        <p>{{user.username}}</p>
        <span>个人资料</span>
      </div>
      <div class="mask">完善个人资料，享优惠!</div>
    </div>
    <div class="mine-content">
      <div class="message">
        <div>
          <p>0.00</p>
          <p>果币</p>
        </div>
        <div>
          <p>0</p>
          <p>优惠券</p>
        </div>
        <div>
          <p>0</p>
          <p>收藏</p>
        </div>
        <div>
          <p>0</p>
          <p>消息</p>
        </div>
      </div>
      <div class="mine-order">
        <div class="order-title">
          <p>我的订单</p>
          <span>全部订单</span>
        </div>
        <div class="order-content">
          <div>
            <img src alt>
            <p>待付款</p>
          </div>
          <div>
            <img src alt>
            <p>待发货</p>
          </div>
          <div>
            <img src alt>
            <p>待收货</p>
          </div>
          <div>
            <img src alt>
            <p>退款/售后</p>
          </div>
        </div>
      </div>
      <div class="mine-service">
        <div class="service-title">个人服务</div>
        <div class="service-content">
          <div>
            <img src alt>
            <p>采购清单</p>
             <img src alt>
            <p>联系我们</p>
          </div>
           <div>
            <img src alt>
            <p>我的运费</p>
            <img src alt>
            <p>设置</p>
          </div>
           <div>
            <img src alt>
            <p>收货地址</p>
          </div>
           <div>
            <img src alt>
            <p>公告栏</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      user:{}
    };
  },
  created(){
    var user = JSON.parse(localStorage.getItem('user'))
    console.log(user.username)
    
    this.user=user
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mine-box {
  font-size: 0.16rem;
  background: #f3f3f3;
  min-height: 100%;
}
.user-box {
  height: 2.64rem;
  background: #ff7833;
  color: #fff;
}
.user-image {
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
  padding: 0.61rem 0.27rem 0 0.27rem;
}
.user-image img {
  width: 0.95rem;
  height: 0.95rem;
  border-radius: 50%;
}
.user-image p {
  margin-left: 0.33rem;
  font-size: 0.28rem;
}
.user-image span {
  flex-grow: 1;
  text-align: right;
}
.mask {
  height: 0.47rem;
  line-height: 0.47rem;
  background: rgba(0, 0, 0, 0.4);
  font-size: 0.2rem;
  padding-left: 0.27rem;
  margin-top: 0.2rem;
}
.mine-content {
  margin: 0 0.2rem;
  /* position: relative; */
  height: 100%;
  /* height: 500px; */
}
.message {
  width: 100%;
  height: 1.09rem;
  background: #fff;
  border-radius: 0.2rem;
  /* position:absolute; */
  /* top: -0.41rem; */
  margin-top: -0.35rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.message p {
  text-align: center;
}
.message p:nth-child(2) {
  margin-top: 0.24rem;
}
.mine-order {
  height: 1.85rem;
  background: #fff;
  border-radius: 0.2rem;
  margin-top: 0.2rem;
  overflow: hidden;
}
.order-title {
  margin: 0.25rem 0.26rem 0 0.25rem;
  display: flex;
}
.order-title span {
  flex-grow: 1;
  text-align: right;
  font-size: 0.12rem;
  color: #888;
}

.mine-service {
  height: 2.86rem;
  background: #fff;
  border-radius: 0.2rem;
  margin-top: 0.2rem;
}
.order-content {
  display: flex;
  justify-content: space-around;
}
.service-content{
   display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.service-content>div{
  width: 25%;
  text-align: center;

}
</style>
