var api = 'http://127.0.0.1:3000/'//接口

var imagePrefix='http://127.0.0.1/project/guoxing/'//图片请求路径

/**
 * 获取全部商品的列表
 */
//请求方式：Get
var goodsListUrl = api+'goods'
//案例：http://127.0.0.1:3000/goods


/**
 * 获取首页轮播图信息
 */
//请求方式：Get
var adsListUrl = api+'mains'
//案例：http://127.0.0.1:3000/mains

/**
 * 搜索接口列表
 */
//请求方式：Get
//参数：name=""
var searchListUrl = api+'goods/search'
//案例：http://127.0.0.1:3000/goods/search?name=""


/**
 * 登录接口
 */
//请求方式：Get
//参数：username="",
//		password=""
var loginUrl = api+'users/login'
//案例：http://127.0.0.1:3000/users/login?username=''&password=''


/**
 * 注册接口
 */
//请求方式：Post
//参数：username="",
//		password=""
//		phone=""
var registerUrl = api+'users/reg'
//案例：http://127.0.0.1:3000/users/reg''


/**
 * 添加订单
 */
//请求方式：post
//参数：{
    // user_id=""   用户id
    // goods_id=""  商品id
    // pay_state=""     支付状态
//}

var addOrderUrl = api+'orders/addOrder'
//案例：http://127.0.0.1:3000/orders/addOrder