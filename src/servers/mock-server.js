// 正常使用mockjs配置
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
console.log(Mock)


// 使用webpack-mock-server配置
// const proxy = {
//     'POST /api/login': (req, res) => {
//         debugger
//     },
//     'GET /getRoute': (req, res) => {
//         debugger
//     },
//     // 'POST /api/user/list': (req,res) => {
//     //     let userList = JSON.parse(fs.readFileSync(`mock/data/userList.json`).toString()).list;
//     //     const pageIndex = req.body.pageIndex;
//     //     let list = userList.slice((pageIndex-1)*10,pageIndex*10);
//     //     let data = JSON.stringify({
//     //             "status": 200,
//     //             "data": {
//     //                 "list": list,
//     //                 "total": 13
//     //             }
//     //         });           

//     //     const json = JSON.parse(data);
//     //     return res.json(json);
//     // },
// };
// module.exports = proxy;
