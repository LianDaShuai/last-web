import request from './request.js'

// var classListUrl = 'apis/class'
var classListUrl = 'http://127.0.0.1:3000/mains'
var goodsListUrl = 'http://127.0.0.1:3000/goods'
var searchListUrl = 'http://127.0.0.1:3000/goods/search'
var loginUrl = 'http://127.0.0.1:3000/users/login'
var regUrl  ='http://127.0.0.1:3000/users/reg'
var cartUrl = 'http://127.0.0.1:3000/mains/getCart'
var addCartUrl = "http://127.0.0.1:3000/mains/addCart"
var modifyNumUrl = "http://127.0.0.1:3000/mains/modifyCart"
var goodsDetailUrl = 'http://127.0.0.1:3000/goods/'
var deleteCartUrl = "http://127.0.0.1:3000/mains/deleteCart"

//下载轮播图数据
function getClassList(params){
    return request.request({
        url:classListUrl,
        method:"get",
        params:params
    })
}
//下载商品数据
function getGoodsList(params){
    return request.request({
        url:goodsListUrl,
        method:"get",
        params:params
    })
}

//搜索商品
function getSearchList(params){
    return request.request({
        url:searchListUrl,
        method:"get",
        params:params
    })
}
//登录
function getLogin(params){
    return request.request({
        url:loginUrl,
        method:"get",
        params:params
    })
}
//注册
function getReg(params){
    return request.request({
        url:regUrl,
        method:"post",
        params:params
    })
}

//获取购物车
function getCartList(params){
    return request.request({
        url:cartUrl,
        method:"get",
        params:params
    })
}
//添加购物车
function addCart(params){
    return request.request({
        url:addCartUrl,
        method:"post",
        params:params
    })
}
//修改购物车商品数量
function modifyCartNum(params){
    return request.request({
        url:modifyNumUrl,
        method:"post",
        params:params
    })
}
//获取单个商品详情
function getGoodsDetail(params){
    console.log("params="+params)
    return request.request({
        url:goodsDetailUrl+params,
        method:"get"
    })
}

function deleteCart(params){
    return request.request({
        url:deleteCartUrl,
        method:"post",
        params:params
    })
}


export default{
    getClassList,
    getGoodsList,
    getSearchList,
    getLogin,
    getReg,
    getCartList,
    addCart,
    modifyCartNum,
    getGoodsDetail,
    deleteCart
}