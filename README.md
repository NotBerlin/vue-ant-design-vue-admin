# vue3-admin

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### mockjs
本地请求数据来源使用mockjs插件
配置数据在servers服务文件下，mock-server.js文件中

### axios
配置axios请求接口插件裤
封装axios在utils文件夹下http.js文件中
返回的get和post方法，传入url和参数和config
在api文件夹中配置每个模块需要的请求


### components
封装公共组件


### router
配置动态路由