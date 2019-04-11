import request from './request.js'

// var classListUrl = 'apis/class'
var classListUrl = '/news/index'
var goodsListUrl = '/index/list'

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

export default{
    getClassList,
    getGoodsList
}