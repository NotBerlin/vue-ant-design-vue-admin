var Mock = require('mockjs')

function getResult() {
    const response = {
        data: {},
        code: 200,
        success: true,
        msg: '成功'
    }
    return response;
}

const getRoute = function () {
    console.log('/getRoute')
    const route = true;
    return {
        route: route
    }
}

const login = function (data) {
    console.log('/login')
    const result = getResult()
    data.body = Object.prototype.toString.call(data.body) === '[object String]' ? JSON.parse(data.body) : data.body;
    if (data.body.number === 'admin' && data.body.password === 'admin') {
        return result
    } else {
        result.code = 400;
        result.msg = '失败';
        result.success = false;
        return result;
    }
}

const funcArr = [
    {
        method: 'post',
        fn: login,
    },
    {
        method: 'get',
        fn: getRoute
    }
]

// 第三个参数可以是对象也可以是返回对象的函数
Mock.mock('/getRoute', 'get', getRoute)
Mock.mock('/login', 'post', login)

// funcArr.forEach(element => {
//     Mock.mock(element.fn.name, element.method, element.fn)
// });
console.log(Mock)
