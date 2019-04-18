<template>
  <div class="detail-box">
    <div class="goods-detail">
      <div class="detail-item">
        <div class="detail-image">
          <img :src="goodsDetail.img_url?imagePrefix+goodsDetail.img_url:''" alt>
          <div class="back" @click="dealBack">&lt;</div>
        </div>

        <div class="price">
          ￥
          <span>{{goodsDetail.all_price_box}}</span>
          /箱
          <i>按箱计价商品</i>
        </div>
        <div class="detail-box-message">
          <div class="name">
            <span>好货</span>
            {{goodsDetail.name}}
          </div>
          <div class="place_origin">产地：{{goodsDetail.place_origin}}</div>
          <div class="single-price">
            <span>单价：￥{{goodsDetail.price_kg}}/公斤</span>
            <span>规格：{{goodsDetail.box_kg}}公斤/箱</span>
          </div>
          <div class="Stock">
            <span>销量：{{goodsDetail.sales_volume}}箱</span>
            <span>库存：{{goodsDetail.stock}}箱</span>
          </div>
        </div>
        <div class="rule">
          <span>规则</span>
          查看计价规则
        </div>
      </div>
      <div class="cart-bottom">
        <div>联系商家</div>
        <div>收藏</div>
        <div>购物车</div>
        <div class="addCart">加入购物车</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      goodsDetail: {},
      imagePrefix: "http://test.lianshuaishuai.com/"
    };
  },
  created() {
    var id = this.$route.params.id;
    console.log("id=" + id);
    this.downGoodsDetail(id);
  },
  methods: {
    async downGoodsDetail(id) {
      let res = await this.api.getGoodsDetail(id);
      console.log(res.data[0]);
      this.goodsDetail = res.data[0];
    },
    //点击返回
    dealBack(){
       this.$router.go("-1")
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.detail-box {
  font-size: 0.16rem;
}
.detail-image {
  height: 5.1rem;
  widows: 100%;
  position: relative;
}
.detail-image img {
  width: 100%;
  height: 100%;
}
.back{
  position: absolute;
  left:0;
  top: 0;
  color: #fff;
  font-size: 0.4rem;
  border-radius: 50%;
  border:1px solid #fff;
  width: 0.5rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  margin-left: 0.2rem;
}
.detail-box-message {
  padding-left: 0.2rem;
  padding-right: 2rem;
  line-height: 0.45rem;
}
.price {
  height: 0.79rem;
  background: #ff6633;
  color: #fff;
  line-height: 0.79rem;
  font-size: 0.28rem;
}
.price span {
  font-size: 0.46rem;
}
.price i {
  color: #ff6633;
  background: yellow;
  font-style: normal;
  font-size: 0.23rem;
}
.name {
  height: 0.78rem;
  line-height: 0.78rem;
  font-size: 0.26rem;
  font-weight: bold;
}
.name span {
  color: #fff;
  background: #ff6633;
  border-radius: 0.2rem;
  font-size: 0.12rem;
  padding: 0.05rem;
}
.single-price,.Stock{
  display: flex;
}
.single-price span:nth-child(1){
  width: 3rem;
}
.Stock span:nth-child(1){
  width: 3rem;
}
.rule{
  height: 0.7rem;
  line-height: 0.7rem;
  background: #f8f8f8;
  padding-left:0.2rem; 
}
.rule span{
  border: 1px solid #ff6633; 
  border-radius: 0.1rem;
  color: #ff6633;
  padding: 0.05rem;
  font-size: 0.12rem;
}
//详情页下面的加入购物车
.cart-bottom{
  height: 0.78rem;
  line-height: 0.78rem;
  border-top: 1px solid #ccc;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  // justify-content: space-around;
  text-align: center;
  div{
    display: block;
    width: 25%;
    height: 100%;
    border-right: 1px solid #ccc;
  }
  .addCart{
    background: #ff6633;
    color: #fff;
    border: none;
  }
}
</style>
