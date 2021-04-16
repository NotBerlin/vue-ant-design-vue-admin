var Mock = require('mockjs')
const getRoute = function () {
    const route = true;
    return {
        route: route
    }
}
// 第三个参数可以是对象也可以是返回对象的函数
Mock.mock('/getRoute', 'get', getRoute)