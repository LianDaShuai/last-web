import request from './request.js'

// var classListUrl = 'apis/class'
var classListUrl = 'http://127.0.0.1:3000/mains'
var goodsListUrl = 'http://127.0.0.1:3000/goods'
var searchListUrl = 'http://127.0.0.1:3000/goods/search'

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


export default{
    getClassList,
    getGoodsList,
    getSearchList
}