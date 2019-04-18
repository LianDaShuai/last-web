<template>
  <div class="cart-box">
    <div class="cart-title">
      <p class="title">购物车</p>
      <p class="message">编辑</p>
      <span></span>
    </div>
    <div class="cart-content">
      <div class="cart-item" v-for="(item,index) in cartList" :key="index">
        <input type="checkbox" @change="dealSelectItem(index)" v-model="item.isSelect">
        <div class="image">
          <img :src="imagePrefix+item.img_url" alt>
        </div>
        <div class="content-right">
          <div class="name">{{item.name}}</div>
          <div class="info">规格:{{item.box_kg}}公斤/箱</div>
          <div class="price">
            <span>￥{{item.all_price_box}}/箱</span>
            <div class="price-ipt">
              <button @click="dealSub(index)">-</button>
              <input type="text" v-model="item.num">
              <button @click="dealAdd(index)">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cart-bottom">
      <div class="all-select">
        <input type="checkbox" v-model="isAllSelect" @change="dealAllSelect">
        全选
      </div>
      <div class="cart-calculate">
      
        <div class="balance">去结算</div>
          <div>合计：￥{{allPrice}}元</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      cartList: [],
      imagePrefix: "http://127.0.0.1/project/guoxing/",
      value: 1,
      isAllSelect: false,
      // num:JSON.parse(window.localStorage.getItem('goodsCart')).num
    };
  },
  computed:{
    allPrice(){
					//如果商品选中,则商品数量加1
					var price = 0
					for(var item of this.cartList){
						
							if(item.isSelect){
								price += item.all_price_box* item.num
							}
					}
					return price
				}
  },
  created() {
    this.downCartList();
  },
  methods: {
    async downCartList() {
      console.log("---------downCartList----------")
      //下载购物车列表
      if(!window.localStorage.login){
        return
      }
      var user_id = JSON.parse(window.localStorage.getItem("user")).id;
      // console.log("user_id=" + user_id);
      var dict = {
        user_id: user_id
      };
      let res = await this.api.getCartList(dict);
      // console.log(res);
      var list = res.data;
      for (var item of list) {
        item.isSelect = false;
      }
      this.cartList = list;
      console.log("购物车数量="+this.cartList.length)
    },
    //点击数量-1
    dealSub(index) {
      console.log(index)
      var shop = this.cartList[index];

      var newNum = shop.num - 1;
      if (newNum > 0) {
        shop.num = newNum;
      }
      this.setCartNum(index)
    },
    //点击数量+1
    dealAdd(index) {
      //  console.log(index)
      var shop = this.cartList[index];
      shop.num += 1;
      this.setCartNum(index)
    },

    //点击更改购物车商品数量
    async setCartNum(index){
      console.log("------更改商品数量-------")
      console.log(this.cartList)
      var dict ={
        user_id: this.cartList[index].user_id,
        goods_id : this.cartList[index].goods_id,
        number:this.cartList[index].num
      }
      console.log(dict)
      let res = await this.api.modifyCartNum(dict)
      console.log(res)
    },
    //点击单个商品选择
    dealSelectItem(index) {
   
      // 默认全选按钮选中
      var flag = true;
      for (var item of this.cartList) {
        // console.log(item);

        if (item.isSelect == false) {
         
          flag = false;
        }
      }
      this.isAllSelect = flag;
    },
    //点击全选按钮
    dealAllSelect() {
      for (var item of this.cartList) {
        item.isSelect = this.isAllSelect;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart-box {
  font-size: 0.16rem;
}
.cart-title {
  display: flex;
  height: 0.74rem;
  border-bottom: 1px solid #e1e1e1;
  font-size: 0.29rem;
  line-height: 0.74rem;
  text-align: center;
}
.title {
  flex-grow: 1;
}
.message {
  width: 1.2rem;
  margin-left: -1.2rem;
  font-size: 0.2rem;
  color: #ffa384;
}
.cart-item {
  display: flex;
  padding: 0.15rem;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.image {
  width: 1.44rem;
  height: 1.44rem;
  margin: 0 0.18rem;
}
.image img {
  width: 100%;
  height: 100%;
}
.cart-item > input {
  width: 0.31rem;
  height: 0.31rem;
}
.content-right {
  line-height: 0.5rem;
}
.name {
  font-size: 0.28rem;
  font-weight: bold;
}
.info {
  color: #888;
}
.price {
  font-size: 0.28rem;
  color: #ff835a;
  display: flex;
}
.price-ipt {
  margin-left: 0.5rem;
}
.price input {
  width: 1.63rem;
}
.price button {
  width: 0.45rem;
}
/* 页面底部的全选 */
.cart-bottom {
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0.8rem;
  height: 0.74rem;
  border-top: 1px solid #ccc;
  width: 100%;
}
.cart-bottom input {
  width: 0.31rem;
  height: 0.31rem;
  vertical-align: middle;
}
.all-select {
  margin-left: 0.2rem;
}
.balance {
  width: 1.57rem;
  background: #ff6633;
  color: #fff;
  text-align: center;
  height: 100%;
  line-height: 0.74rem;
}
.cart-calculate{
  flex-grow: 1;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
}
</style>
