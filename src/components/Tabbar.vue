<template>
  <div class="tabbar" v-if="in_type==true">
    <div class="tabbar-item">
      <router-link to="/index">
        <span class="footer-img1"></span>
        首页
      </router-link>
      <router-link to="/goods-cart" class="tabbar-cart">
        <span class="footer-img2"></span>
        购物车
        <i class="badge">{{num}}</i>
      </router-link>
      <router-link to="/order">
        <span class="footer-img3"></span>订单
      </router-link>
      <router-link to="/mine">
        <span class="footer-img4"></span>我的
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props:["num"],
  data() {
    return {

    };
  },
  computed:{
    in_type(){
      return this.$store.state.in_type
    }
  },
  created(){

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabbar {
  font-size: 0.16rem;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #f4f4f5;
  border-top: 1px solid #dcdcdc;
}
.tabbar-item {
  height: 0.8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
a {
  text-decoration: none;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.05rem;
}
.tabbar-item span{
  display: inline-block;
  width: 0.37rem;
  height: 0.37rem;
  margin: 0.05rem 0;
}
.router-link-exact-active{
  color: #ff6f32;
}
.footer-img1{
  background-image: url('../../static/img/footer01.png');
  background-size: 100% 100%;
}
.footer-img2{
  background-image: url('../../static/img/footer04.png');
  background-size: 100% 100%;
}
.footer-img3{
  background-image: url('../../static/img/footer02.png');
  background-size: 100% 100%;
}
.footer-img4{
  background-image: url('../../static/img/footer05.png');
  background-size: 100% 100%;
}
.router-link-exact-active .footer-img1{
  background-image: url('../../static/img/footer001.png');
  background-size: 100% 100%;
}
.router-link-exact-active .footer-img2{
  background-image: url('../../static/img/footer004.png');
  background-size: 100% 100%;
}
.router-link-exact-active .footer-img3{
  background-image: url('../../static/img/footer002.png');
  background-size: 100% 100%;
}
.router-link-exact-active .footer-img4{
  background-image: url('../../static/img/footer005.png');
  background-size: 100% 100%;
}
/* 购物车数量显示 */
.tabbar-cart{
  position: relative;
}
.badge{
  display: inline-block;
  width: 0.3rem;
  height: 0.3rem;
  background: #ff6f32;
  border-radius: 50%;
  position: absolute;
  color: #fff;
  text-align: center;
  line-height: 0.3rem;
  font-style: normal;
  right: 0;
}
</style>
