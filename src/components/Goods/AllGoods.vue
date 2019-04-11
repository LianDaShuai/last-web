<template>
  <div class="all-goods">
    <div class="goods-item" v-for="(item,index) in goodsList" :key="index">
      <div class="goods-img">
        <img :src="item.img_url" alt>
      </div>
      <div class="goods-right">
        <div class="goods-name">{{item.title}}</div>
        <div class="unit-price">{{item.unit_price}}元/公斤 | {{item.unit_price}}公斤/箱</div>
        <div class="goods-price">￥{{item.all_price}}/箱</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
       goodsList:[]
    };
  },
  created(){
    this.downGoodsList()
  },
  methods:{
     async downGoodsList(){
      let res = await this.api.getGoodsList()
      console.log("商品数据=")
      console.log(res.data)
      this.goodsList = res.data
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  font-size: 0.16rem;
}
/* 全部商品 */
.goods-item{
  display: flex;
  margin-left: 0.23rem;
  margin-top: 0.23rem;
  border-bottom: 1px solid #f7f7f7;
}
.goods-img{
  width: 2.06rem;
  height: 2.06rem;
  margin: 0 0.23rem 0.23rem 0;
}
.goods-img img{
  width: 100%;
  height: 100%;
}
.goods-right{
  line-height: 0.7rem;
}
.goods-name{
  font-size: 0.28rem;
  font-weight: bold;
}
.unit-price{
  color: #888;
}
.goods-price{
  color: #ff6633;
  font-size: 0.3rem;
}
</style>
