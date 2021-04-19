import axios from "axios";
import store from "@/store";
let router = import("@/router");
import { message } from "ant-design-vue";

// axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
// axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
// axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest";
// axios.defaults.headers["Cache-Control"] = "no-cache";
// axios.defaults.headers["pragma"] = "no-cache";

let source = axios.CancelToken.source();

// message提示组件
const message_component = <message></message>;

//请求添加token
// axios.interceptors.request.use(request => {
//     request.headers["demo-auth"] = store.state.loginInfo ? store.state.loginInfo.userId : ""; // 已将userId保存在store中
//     return request;
// })

//切换页面取消请求
// axios.interceptors.request.use(request => {
//     request.cancelToken = source.token;
//     return request;
// });
// router.then(lib => {
//     lib.default.beforeEach((to, from, next) => {
//         source.cancel()
//         source = axios.CancelToken.source();
//         next()
//     })
// })

//登录过期跳转
// axios.interceptors.response.use(response => {
//     let data = response.data;
//     if (
//         [10002].includes(data.ret)
//     ) {
//         router.then(lib => lib.default.push({ name: "login" })); // 跳转到登录页面
//     }
//     return response;
// })

//返回值解构
axios.interceptors.response.use(response => {
    let data = response.data;
    if (data.code === 200) {
        return data;
    } else if (data.code === 400) {
        // alert('登录失败')
        message_component.type.error('登录失败')
    } else {
        return Promise.reject(
            data.msg ||
            "网络错误"
        );
    }
    // let isJson = (response.headers["content-type"] || "").includes("json");
    // if (isJson) {
    //     if (data.code === 200) {
    //         return Promise.resolve({
    //             data: data.data,
    //             msg: data.msg,
    //             code: data.code,
    //         });
    //     }
    //     return Promise.reject(
    //         data.msg ||
    //         "网络错误"
    //     );
    // } else {
    //     return data;
    // }
}, err => {
    let isCancel = axios.isCancel(err);
    if (isCancel) {
        return new Promise(() => { });
    }
    return Promise.reject(
        err.response.data &&
        err.response.data.msg ||
        "网络错误"
    );
})

export function post(url, data, otherConfig) {
    return axios.post(url, data, otherConfig);
}

export function get(url, data, otherConfig) {
    return axios.get(url, { params: data, ...otherConfig });
}