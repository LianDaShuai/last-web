// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const produceNewsData = function() {
    let data = [];
    for (let i = 0; i < 5; i++) {
        let newArticleObject = {
            title: Random.csentence(5, 30), //  Random.csentence( min, max )
            img_url: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
           // author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
           // date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        data.push(newArticleObject)
    }
 
    return {
        data: data
    }
}
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/news/index', 'get', produceNewsData);

//有好货专区数据
const allGoods = function() {
    let data = [];
    for (let i = 0; i < 50; i++) {
        let newArticleObject = {
            title: Random.ctitle(1, 3), //  Random.csentence( min, max )
            img_url: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            unit_price: Random.float(10, 30,0, 2),
            all_price: Random.float(100, 300,0, 2),
           // author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
           // date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        data.push(newArticleObject)
    }
 
    return {
        data: data
    }
}
Mock.mock('/index/list', 'get', allGoods);
