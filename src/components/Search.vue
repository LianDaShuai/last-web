<template>
  <div class="search-box">
    <div class="search-top">
      <p>
        <input type="text" placeholder="请输入关键字" v-model="Lately" @keydown="dealChange">
      </p>
      <span @click="dealBack">取消</span>
    </div>
    <div class="search-title">
      <span :class="isShow==1?'active':''" @click="isShow=1">商品</span>
      <span :class="isShow==2?'active':''" @click="isShow=2">店铺</span>
    </div>
    <!-- 搜索记录 -->
    <div class="search-record" v-if="searchGoodsList.length==0">
      <div class="hot-search">
        <div class="hot-title">热门搜索</div>
        <div class="hot-content">
          <span>车厘子</span>
          <span>榴莲</span>
          <span>火龙果</span>
          <span>草莓</span>
          <span>苹果</span>
        </div>
      </div>
      <div class="lately-search">
        <div class="lately-title">最近搜索</div>
        <div class="lately-content">
          <span v-for="(item,index) in LatelyList" :key="index">{{item}}</span>
        </div>
      </div>
    </div>
    <!-- 搜索到的商品 -->
    <div class="search-goods" v-if="isShow==1">
      <div class="goods-item" v-for="(item,index) in searchGoodsList" :key="index">
        <div class="goods-image">
          <img :src="imagePrefix+item.img_url" alt>
        </div>
        <div class="goods-message">
          <div class="message-name">
            <span class="good">好货</span>
            {{item.name}}
          </div>
          <div class="goods-place">
            <span>产地:{{item.place_origin}}</span>
            <span>
              销量:
              <i>{{item.sales_volume}}箱</i>
            </span>
          </div>
          <div class="goods-place">
            <span>单价:￥{{item.price_kg}}/公斤</span>
            <span>规格:{{item.box_kg}}公斤/箱</span>
          </div>
          <div class="all-price">￥{{item.all_price_box}}/箱</div>
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
      isShow: 1,
      Lately: "",
      LatelyList: [],
      searchGoodsList: [],
      imagePrefix: "http://127.0.0.1/project/guoxing/"
    };
  },
  created() {
    this.LatelyList = JSON.parse(localStorage.getItem("latelyList"));
  },
  methods: {
    //检测input输入框输入完成
    async dealChange(e) {
      if (e.keyCode == 13) {
        console.log(this.dealLately);
        var dict = {
          name: this.Lately
        };
        let res = await this.api.getSearchList(dict);
        if (res.code == 1) {
          // console.log("搜索的数据=");
          console.log(res);
          this.searchGoodsList = res.data;
          //  this.LatelyList.unshift(this.Lately)
          if (localStorage.getItem("latelyList")) {
            var lately = JSON.parse(localStorage.getItem("latelyList"));
            for (var item of lately) {
              if (item == this.Lately) {
                return;
              }
            }
            console.log(lately);
            lately.push(this.Lately);
            localStorage.setItem("latelyList", JSON.stringify(lately));
            this.LatelyList = JSON.parse(localStorage.getItem("latelyList"));
          } else {
            var array = [];
            array.unshift(this.Lately);
            localStorage.setItem("latelyList", JSON.stringify(array));
            this.LatelyList = JSON.parse(localStorage.getItem("latelyList"));
          }
        }
      }
    },
    //点击取消返回上一个界面
    dealBack(){
       this.$router.go(-1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-box {
  font-size: 0.16rem;
  background: #fff;
}
.search-top {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.search-top p {
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  margin: 0.23rem 0;
}
.search-top input {
  width: 6.2rem;
  height: 0.51rem;
  border-radius: 0.5rem;
  font-size: 0.16rem;
  padding-left: 0.2rem;
  outline: none;
  border: none;
}
.search-title {
  text-align: center;
  height: 0.63rem;
  line-height: 0.6rem;
  border-bottom: 1px solid #efefef;
}
.search-title span {
  margin: 0 0.46rem;
  display: inline-block;
  padding: 0 0.16rem;
  box-sizing: border-box;
}
.search-title span.active {
  border-bottom: 2px solid #f7784c;
  color: #f7784c;
}
/* 热门搜索 */
.hot-title,
.lately-title {
  margin: 0.47rem 0 0.47rem 0.23rem;
}
.hot-content span,
.lately-search span {
  display: inline-block;
  background: #f5f5f5;
  padding: 0.2rem 0.22rem;
  border-radius: 0.3rem;
  margin-left: 0.16rem;
}
/* 搜索到的商品 */
.goods-item {
  display: flex;
  padding: 0.22rem 0;
  border-top: 1px solid #ccc;
  color: #888;
}
.goods-image {
  width: 1.59rem;
  height: 1.59rem;
  margin: 0 0.15rem;
}
.goods-image img {
  width: 100%;
  height: 100%;
}
.goods-message {
  line-height: 0.41rem;
  flex-grow: 1;
}
.message-name .good {
  font-size: 0.14rem;
  color: #fff;
  background: #f7784c;
  border-radius: 0.2rem;
  padding: 0.05rem;
}
.message-name {
  font-size: 0.27rem;
  color: #000;
}
.all-price {
  color: #ff6b3a;
  font-size: 0.27rem;
}
.goods-place {
  display: flex;
  justify-content: space-around;
}
.goods-place span {
  display: inline-block;
  width: 50%;
}
.goods-place span i{
  color: #f7784c;
  font-style: normal;
}
</style>
