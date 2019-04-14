<template>
  <div class="main">
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in index_top" :key="index">
            <router-link to>
              <img :src="item.img_url" alt>
            </router-link>
          </div>
          <!-- <div class="swiper-slide">2</div> -->
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="search-title">
        <div class="left">扫一扫</div>
        <div class="ipt" @click="dealClick">
          <input type="text" placeholder="搜索商品/商家" disabled>
        </div>
        <div class="right">消息</div>
      </div>
    </div>
    <div class="classification">
      <div v-for="(item,index) in classList" :key="index" class="apple-item">
        <img :src="item.img_url" alt />
        <span>{{item.name}}</span>
      </div>
    </div>
    <div class="content-title">
      <span>
        优秀
        <i>商家</i>
      </span>
      <span>星商家</span>
      <span>老果记店</span>
      <span>更多</span>
    </div>
    <div class="content-list">
      <div class="goods-title">有好货专区</div>
      <div class="goods-tab">
        <span @click="isShow=1" :class="isShow==1?'active':''">全部</span>
        <span @click="isShow=2" :class="isShow==2?'active':''">人气</span>
        <span @click="isShow=3" :class="isShow==3?'active':''">应季</span>
        <span @click="isShow=4" :class="isShow==4?'active':''">经典</span>
        <span @click="isShow=5" :class="isShow==5?'active':''">进口</span>
      </div>
      <!-- 有好货专区 -->
      <!-- 全部商品 -->
      <all-goods v-show="isShow==1" ></all-goods>
      <popularity v-show="isShow==2"></popularity>
      <seasonal v-show="isShow==3"></seasonal>
      <classic v-show="isShow==4"></classic>
      <imported v-show="isShow==5"></imported>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "../../node_modules/swiper/dist/css/swiper.css";
import AllGoods from '@/components/Goods/AllGoods.vue'
import popularity from '@/components/Goods/Popularity.vue'
import seasonal from '@/components/Goods/Seasonal.vue'
import classic from '@/components/Goods/Classic.vue'
import imported from '@/components/Goods/Imported.vue'
export default {
  name: "HelloWorld",
  data() {
    return {
      index_top: [],
      classList: [
        { img_url: "../../static/img/apple.jpg", name: "苹果" },
        { img_url: "../../static/img/apple.jpg", name: "芒果" },
        { img_url: "../../static/img/apple.jpg", name: "香蕉" },
        { img_url: "../../static/img/apple.jpg", name: "柑橘" },
        { img_url: "../../static/img/apple.jpg", name: "甜瓜" },
        { img_url: "../../static/img/apple.jpg", name: "梨" },
        { img_url: "../../static/img/apple.jpg", name: "桃" },
        { img_url: "../../static/img/apple.jpg", name: "橙" },
        { img_url: "../../static/img/apple.jpg", name: "西瓜" },
        { img_url: "../../static/img/apple.jpg", name: "更多" }
      ],
      isShow:1,
      imagePrefix:'http://127.0.0.1/project/guoxing/'
    };
  },
  components:{
    AllGoods,
    popularity,
    seasonal,
    classic,
    imported
  },
  created() {
    this.downImgList()
  },
  methods: {
    //下载轮播图数据
    async downImgList() {
      let res = await this.api.getClassList();
      console.log(res.data);

      for(var item of res.data){
        // console.log(item)
        item.img_url = this.imagePrefix+item.img_url
      }
      this.index_top = res.data;

      this.$nextTick(() => {
        var mySwiper = new Swiper(".swiper-container", {
          //是否循环滚动
          loop: true,

          //设置自动滚动时间间隔, 2000ms
          // autoplay: 2000,
          autoplay: {
            delay: 2000,
            stopOnLastSlide: false,
            disableOnInteraction: false
          },

          //设置滚动指示器- 选择器
          pagination: {
            el: ".swiper-pagination"
          },
          //设置能否点击滚动指示器
          paginationClickable: true,
          autoplayDisableOnInteraction: true
        });
      });
    },
    //点击搜索跳转搜索
    dealClick(){
       this.$router.push({path:'/search'})
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main {
  font-size: 0.16rem;
  padding-bottom: 0.75rem;
  background: #efefef;
}
.swiper-container {
  width: 100%;
  height: 2.65rem;
}
.banner {
  position: relative;
}
.search-title {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  font-size: 0.12rem;
  display: flex;
  height: 0.6rem;
  line-height: 0.6rem;
  z-index: 1;
  padding: 0.05rem 0;
  box-sizing: border-box;
}
.left,
.right {
  width: 0.84rem;
  text-align: center;
  color: #fff;
}
.ipt {
  flex-grow: 1;
  border-radius: 0.2rem;
  box-sizing: border-box;
}
.ipt input {
  width: 100%;
  border: none;
  border-radius: 20px;
  height: 100%;
  background: #f0f0f3;
  outline: none;
  text-align: center;
  font-size: 0.12rem;
}
.swiper-wrapper {
  height: 100%;
}
.swiper-slide {
  // background: yellow;
  height: 100%;
  text-align: center;
  font-size: 20px;
  line-height: 100px;
}
.swiper-slide img {
  width: 100%;
  height: 100%;
}
//分类
.classification {
  display: flex;
  font-size: 0.22rem;
  flex-wrap: wrap;
  justify-content: space-around;
  border-bottom: 1px solid #ececec;
  background: #fff;
}
.apple-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.22rem 0 0.18rem 0;
  width: 20%;
}
.apple-item img {
  width: 0.6rem;
  height: 0.6rem;
}
.apple-item span{
  margin-top: 0.05rem;
}
.content-title {
  height: 0.7rem;
  line-height: 0.7rem;
  padding: 0 0.24rem;
  background: #fff;
}
.content-title > span:last-child {
  float: right;
}
.content-title > span:nth-child(1) {
  font-size: 0.28rem;
}
.content-title > span:nth-child(1) i {
  color: #ff5340;
  font-style: normal;
}
//有好货专区
.content-list {
  margin-top: 0.16rem;
  background: #fff;
}
.goods-title {
  text-align: center;
  font-size: 0.28rem;
  padding: 0.28rem 0;
}
.goods-tab {
  display: flex;
  justify-content: space-around;
}
.goods-tab .active{
  border-bottom: 2px solid #ff5340;
   font-size:0.25rem;
}

</style>
